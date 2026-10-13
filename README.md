# MeComunico 🌱

**Una PWA abierta para apoyar la comunicación, las rutinas y el aprendizaje cotidiano.**

Buscamos colaboración de personas usuarias, familias, docentes, terapeutas de lenguaje, diseñadores y desarrolladores. La experiencia debe respetar la edad, intereses y decisiones de cada persona.

## Estado: v0.1.1 · prototipo funcional

Incluye mensajes con voz, frases personalizadas, rutina diaria, expresión de emociones y actividades breves de números, cocina, mascotas y ritmo. Funciona en navegador y se puede instalar como PWA en Android, iPhone e iPad compatibles.

**No es un tratamiento médico ni una herramienta de diagnóstico. No promete curar el síndrome de Down ni otras condiciones.** El prototipo no tiene validación clínica ni educativa; los conteos de actividades no miden capacidad ni aprendizaje.

## Probar localmente

No requiere dependencias de producción ni proceso de compilación.

```bash
python3 -m http.server 8000 --directory dist
```

Abrir http://localhost:8000. Para acceder desde otro dispositivo y usar service workers se necesita HTTPS; HTTP en una IP de la red no equivale a localhost.

## Instalar en iPhone, iPad y tablets

**iPhone/iPad:** abrir el sitio HTTPS en Safari → Compartir → Añadir a pantalla de inicio. Activar «Abrir como app web» si aparece y tocar Añadir. No requiere App Store.

**Android/tablets Android:** seguir las instrucciones de Chrome siguientes.

La interfaz contempla áreas seguras, orientación horizontal y ventanas estrechas. La compatibilidad implementada no equivale a pruebas físicas completadas. Ver [pruebas pendientes](docs/COMPATIBILIDAD.md).

## Instalar en Android

Abrir el sitio HTTPS en Chrome y seleccionar **Instalar aplicación** o **Añadir a pantalla principal**. Después de una primera carga correcta, el service worker guarda recursos para uso sin conexión. Verificar en el dispositivo: la voz depende del navegador y de las voces del sistema.

## Publicar

Se puede servir `dist/` en cualquier hosting estático HTTPS. Para GitHub Pages: configurar publicación desde rama `main`, carpeta raíz, y copiar el contenido de `dist/` a esa raíz; o usar un workflow propio que publique `dist/`. La configuración privada de Sites no forma parte de este repositorio.

## Datos y privacidad

Configuración y avances quedan en localStorage del navegador. No hay cuenta propia, backend, analítica ni sincronización. **Familia** permite exportar/restaurar JSON; este archivo puede contener nombres o frases personales: no publicarlo. Borrar datos del sitio borra los avances. El espacio familiar no tiene PIN y no es una barrera de seguridad. La síntesis de voz puede usar servicios del sistema: no se garantiza que todas las voces procesen localmente.

No subir fotografías, diagnósticos, grabaciones ni datos identificables de menores a issues o pull requests. Consultar [PRIVACY.md](PRIVACY.md).

## Colabora

Lee [CONTRIBUTING.md](CONTRIBUTING.md) y [ROADMAP.md](ROADMAP.md). Se agradecen pruebas de Android, mejoras de accesibilidad, ejercicios revisados por profesionales y propuestas basadas en experiencias reales sin datos personales.

Primera contribución sugerida: probar instalación y modo avión, describiendo modelo, versión de Android y navegador, sin información identificable.

## Verificación

```bash
node scripts/check.mjs
```

Comprueba sintaxis, manifest e iconos. No sustituye pruebas reales de interacción, lector de pantalla, instalación u offline. El prototipo inicial tiene comprobaciones de renderizado con DOM simulado, sin QA completa en navegador o Android.

## Principios

- Comunicación disponible sin recompensas ni bloqueos.
- Actividades con final y permiso para parar.
- Sin reproducción infinita, castigos o comparaciones entre usuarios.
- No inferir comprensión a partir de pronunciación.
- Cambios de contenido revisados con personas usuarias y profesionales.

## Licencia

MIT para el código y recursos propios incluidos. Los emojis se renderizan con las fuentes del dispositivo; no se distribuyen ilustraciones de terceros. Nuevos recursos deben declarar autoría y licencias compatibles.

Iniciativa de Franklin Moya / SiteEcuador. Se aceptan aportes de la comunidad.
