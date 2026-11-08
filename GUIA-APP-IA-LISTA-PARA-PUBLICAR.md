# Cómo comprobar si una app hecha con IA está lista para publicar

Que una app funcione en tu navegador no demuestra que funcione para otra persona. Antes de compartirla, comprueba el recorrido que le prometes al usuario y guarda evidencia de lo que probaste. Esta guía sirve para una app pequeña hecha con un agente de programación. No es una certificación de seguridad ni una lista universal de requisitos legales.

**Resultado de la revisión:** al terminar, tendrás una decisión concreta: publicar, corregir un bloqueo o limitar el alcance de la primera versión. No necesitas comprar nada para hacer estas comprobaciones.

## 1. Escribe el recorrido principal

Completa esta frase: «Una persona puede ___, y al final ve ___». Usa una acción que resuelva el problema principal de la app. Por ejemplo, en un Habit Tracker local: «puede crear un hábito, marcarlo, recargar la página y conservar el registro».

Prueba ese recorrido de principio a fin en una sesión limpia. Anota el resultado esperado y el observado. Si no puedes terminarlo, todavía no publiques esa promesa.

## 2. Ejecuta las comprobaciones del proyecto

Si el proyecto tiene tests, análisis estático y build, ejecútalos desde la versión exacta que vas a publicar. Guarda el comando, el resultado y la revisión de código. Un gate verde significa que **esas** comprobaciones pasaron; no prueba los casos que no cubren.

Si aún no tienes una comprobación para el recorrido principal, añade al menos una prueba que falle cuando ese recorrido se rompa. En el [Caso 1 del Habit Tracker](GUIA-CASO-01-HABIT-TRACKER.md) mostramos un fallo introducido a propósito, su corrección y la repetición del mismo gate. La [demo pública](https://demo.theappdiscipline.com/) permite usar la app, pero no ejecuta los tests en tu navegador. Este repositorio Web Lite es otro proyecto: un starter para practicar el proceso.

## 3. Comprueba estados vacíos y errores

Abre la app sin datos. Después prueba una entrada inválida, una conexión interrumpida si depende de internet y una acción repetida. La pantalla debe explicar qué pasó y permitir recuperarse sin perder datos importantes. Guarda capturas o un registro breve del resultado.

Una prueba del camino feliz no cubre estas situaciones. Si el error deja a la persona atrapada o crea datos incorrectos, corrígelo antes de invitar usuarios.

## 4. Prueba los límites entre usuarios, si hay cuentas

Si la app guarda datos de varias personas, crea dos cuentas de prueba. Con la cuenta B intenta leer, editar o borrar un registro de la cuenta A usando la interfaz y las solicitudes que envía la app. La restricción debe aplicarse en el servidor o en las reglas de la base de datos, no solo ocultando botones. [OWASP explica por qué el control de acceso necesita una capa confiable](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/) y su [guía de pruebas usa sesiones distintas](https://wstg.owasp.org/v4.2/4-Web_Application_Security_Testing/05-Authorization_Testing/02-Testing_for_Bypassing_Authorization_Schema/).

Si solo hay datos locales en el navegador y no hay cuentas, marca este paso «no aplica» y explica ese límite. Si B puede acceder a los datos de A, detén la publicación pública hasta corregirlo.

## 5. Revisa secretos y servicios externos

Comprueba el código que envías al navegador, las variables de entorno del frontend y los archivos publicados. No debe haber contraseñas, claves privadas ni credenciales de servicios. Un valor que llega al navegador se puede inspeccionar; [OWASP recomienda mantener los secretos fuera del cliente](https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html) y gestionarlos en un lugar apropiado para el servicio.

Si encuentras una credencial expuesta, retirarla del código no basta: revócala o rótala desde el proveedor correspondiente y comprueba si se usó. No pegues claves, tokens ni datos de clientes en una issue pública o en un chat de soporte.

## 6. Prueba la versión publicada, no solo la vista previa

Abre la URL final desde otro navegador o dispositivo. Repite el recorrido principal, los enlaces de entrada y salida, y el acceso tras recargar. Si hay login, pagos, correo o almacenamiento, comprueba cada flujo que prometes con las cuentas y condiciones de prueba adecuadas. Un build local correcto no confirma que el dominio, las variables o las redirecciones de producción estén bien.

Anota la URL, fecha y versión probadas. Si no puedes acceder al sitio final o una acción crítica falla allí, no anuncies esa versión como lista.

## 7. Decide qué harás si algo falla después

Conserva una versión conocida que funcione y escribe cómo volver a ella. Define dónde verás errores y quién atenderá incidencias. Para una primera versión pequeña basta un procedimiento corto, pero debe ser ejecutable por ti. Si la app almacena datos de otras personas, revisa también recuperación y respaldo antes de abrirla.

## Hoja de decisión

Copia esta tabla en un archivo **privado** del proyecto y reemplaza los ejemplos. Guarda referencias a la evidencia sin publicar datos de usuarios ni secretos.

| Comprobación | Estado | Evidencia | Acción pendiente |
|---|---|---|---|
| Recorrido principal | Pendiente | URL o prueba | Definir resultado esperado |
| Tests y build de la versión | Pendiente | Comando y resultado | Ejecutar |
| Estados vacíos y errores | Pendiente | Captura o nota | Probar |
| Separación entre usuarios | No aplica / pendiente | Prueba con A y B | Explicar o corregir |
| Secretos y servicios | Pendiente | Revisión sin copiar claves | Revisar |
| URL final y flujos externos | Pendiente | URL, fecha y resultado | Probar |
| Recuperación y seguimiento | Pendiente | Procedimiento | Escribir |

**Publica solo el alcance que comprobaste.** Si un punto crítico falla, corrígelo y vuelve a probarlo. Si algo no aplica, deja escrito por qué. Si el proyecto es regulado o maneja datos especialmente sensibles, esta guía no sustituye la revisión especializada que corresponda.

## Si quieres un proceso repetible

Puedes usar [Web Lite gratis](README.md) para practicar cambios pequeños y un gate básico. [The App Discipline](https://theappdiscipline.gumroad.com/l/tad?utm_source=github&utm_medium=organic_article&utm_campaign=tad_organic_v1&utm_content=guia_publicacion) reúne una ruta guiada en español y cuatro templates completos para trabajar por cambios verificables. El kit cuesta **$59 USD** y requiere Windows o Mac, Obsidian, Node.js, Git, un editor y acceso a una IA para programar. Revisa la ficha, las licencias y los límites antes de decidir; la compra no garantiza que una app concreta sea segura o aprobada por una tienda.
