# Poner MeComunico en funcionamiento — v0.2.0

Es una web estática y PWA. No requiere PHP, MySQL, Node en producción ni API de IA. Necesita hosting HTTPS.

## Estructura

- `/index.html`: página del proyecto, historia, colaboración y apoyo.
- `/app.html`: aplicación.
- `/activities.js`: editor y reproductor de actividades locales.
- `/manifest.webmanifest`, `/sw.js`, iconos: instalación y modo offline.

Publicar **el contenido de `dist/`**, no todo el repositorio. No exponer copias de seguridad, archivos privados ni configuración del servidor.

## Opción sencilla: cPanel

1. Crear un subdominio propio, por ejemplo `mecomunico.tu-dominio.com` (ejemplo, no un dominio registrado por el proyecto).
2. Descargar el repositorio de GitHub como ZIP y descomprimirlo.
3. Subir los archivos **dentro de `dist/`** a la carpeta raíz del subdominio.
4. Activar AutoSSL y redirección HTTPS en el panel.
5. Abrir la raíz para ver el proyecto, y `/app.html` para usar la app.
6. Probar instalación, actividades, voz y modo avión después de cargar el sitio.

Si no tienes dominio propio, usa uno que controles y un subdominio libre. No reemplazar el contenido de otro sitio existente.

## Debian + Nginx

Ejecutar con un usuario que tenga sudo. Elegir un subdominio y apuntar su DNS A/AAAA al servidor; no configurar AAAA si IPv6 no funciona. Los comandos son para un servidor que aún no tenga estas herramientas:

```bash
sudo apt update
sudo apt install nginx git certbot python3-certbot-nginx
sudo mkdir -p /opt/mecomunico /var/www/mecomunico
sudo git clone https://github.com/fmd1979/mecomunico.git /opt/mecomunico/source
sudo cp -a /opt/mecomunico/source/dist/. /var/www/mecomunico/
sudo chown -R root:root /var/www/mecomunico
sudo find /var/www/mecomunico -type d -exec chmod 755 {} \;
sudo find /var/www/mecomunico -type f -exec chmod 644 {} \;
```

Crear `/etc/nginx/sites-available/mecomunico`. Cambiar `mecomunico.tu-dominio.com` por el dominio real:

```nginx
server {
    listen 80;
    server_name mecomunico.tu-dominio.com;
    root /var/www/mecomunico;
    index index.html;

    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;

    location / { try_files $uri $uri/ =404; }
    location = /sw.js {
        add_header Cache-Control "no-cache" always;
        add_header X-Content-Type-Options nosniff always;
    }
    location = /manifest.webmanifest {
        types { application/manifest+json webmanifest; }
        add_header Cache-Control "no-cache" always;
    }
    location ~ \.html$ { add_header Cache-Control "no-cache" always; }
    location ~ /\. { deny all; }
}
```

Activar solo este sitio, sin borrar configuraciones existentes:

```bash
sudo ln -s /etc/nginx/sites-available/mecomunico /etc/nginx/sites-enabled/mecomunico
sudo nginx -t
sudo systemctl reload nginx
sudo certbot --nginx -d mecomunico.tu-dominio.com --redirect
sudo certbot renew --dry-run
```

Puertos 80/443 deben ser accesibles; conservar acceso SSH al ajustar firewall. Comprobar el temporizador de renovación de certificados de la distribución.

## Actualizar

Antes de actualizar, recomendar a cada familia exportar su respaldo. El repositorio del servidor debe estar limpio. Revisar la nueva versión antes de desplegar:

```bash
sudo git -C /opt/mecomunico/source pull --ff-only
sudo cp -a /opt/mecomunico/source/dist/. /var/www/mecomunico/
```

Cambios en archivos requieren una nueva versión de caché en `sw.js` (ya lo hacemos por versión). No borrar localStorage de visitantes. Si se usa CDN, evitar caché prolongada de HTML, manifest y service worker; purgar recursos al actualizar.

## Verificación final

- Raíz y `/app.html` cargan con HTTPS sin advertencias.
- `/manifest.webmanifest` y `/sw.js` devuelven 200, no una página HTML de error.
- Instalación desde Chrome Android y desde Safari iPhone/iPad.
- Voz al tocar, rutina, creación y edición de actividades.
- Exportar/restaurar respaldo con actividades.
- Modo avión tras la carga inicial. Voces offline no garantizadas.
- Eliminar una actividad no afecta comunicación ni rutina.

No hay cuentas multiusuario, donaciones procesadas, catálogo central ni informes de salud en esta versión. Cada dispositivo guarda sus datos por separado.
