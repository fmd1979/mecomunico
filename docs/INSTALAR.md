# Instalar MeComunico — v0.2.2

La app tiene un botón visible **Instalar app** en la web del proyecto y en la aplicación. Cuando Chrome/Edge ofrece un instalador, el botón lo abre. Si el navegador no lo ofrece, muestra instrucciones. Nunca declara que está instalada solo porque se pulsó el botón.

- Android: abrir directamente en Chrome → ⋮ → Instalar aplicación o Añadir a pantalla principal → confirmar.
- iPhone/iPad: abrir en Safari → Compartir → Añadir a pantalla de inicio → activar Abrir como app web si aparece → Añadir.
- Computadora: Chrome o Edge → icono de instalación o menú.

Abrir desde el icono para comprobar el modo aplicación. No se distribuye APK ni se publica en tiendas. En navegadores integrados de redes sociales, abrir primero en Chrome/Safari. El navegador decide si ofrece instalación; no se puede forzar ni realizar sin la acción del usuario.

El manifiesto ahora está enlazado tanto desde la página del proyecto como desde app.html. Las instrucciones incluyen estado del registro offline y avisos si falla. Los ajustes de voz y datos guardados se mantienen.

Pruebas automatizadas: `node scripts/check-install.mjs`. Falta validar el flujo completo de instalación en dispositivos reales. Si se despliega en servidor propio, subir todo el contenido de dist/ con HTTPS y verificar que manifest.webmanifest y sw.js devuelvan archivos correctos sin autenticación ni errores.
