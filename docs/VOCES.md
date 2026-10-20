# Selección de voz — v0.2.1

App → Familia → Género y voz.

1. Elegir perfil: Automática, Hombre, Mujer, Niño o Niña.
2. Seleccionar una voz real del dispositivo y escuchar la muestra.
3. Ajustar velocidad y tono si se desea.
4. Pulsar Guardar voz.

Cada perfil recuerda su asignación. Los navegadores no exponen género ni edad de forma fiable; no clasificamos por nombres ni simulamos voces infantiles cambiando el tono. Niño/Niña necesitan una voz infantil real instalada si se desea ese timbre. Si no hay asignación o la voz no existe, se usa otra voz española y se informa en Familia.

La lista se actualiza cuando el navegador termina de cargar las voces. También se puede pulsar Recargar voces. La muestra funciona aunque esté desactivada la voz general. Las preferencias se incluyen en el respaldo y los respaldos anteriores siguen admitidos.

No se añaden servicios de pago ni API. Algunas voces del sistema requieren conexión. Probar con los dispositivos reales antes de asumir disponibilidad offline.

## Corrección de navegación

La versión corrige las respuestas redirigidas guardadas en caché y admite rutas /app y /app.html. La navegación intenta la red primero y recupera la copia local si falla. La instalación nueva renueva las cachés de versiones anteriores sin borrar los datos personales de localStorage.

Si una instalación antigua sigue mostrando ERR_FAILED, cerrar todas las ventanas de MeComunico y volver a abrir con conexión. Si el trabajador antiguo impide actualizar, quitar solo el service worker y Cache Storage desde las herramientas de desarrollo; no borrar Local Storage sin exportar un respaldo.
