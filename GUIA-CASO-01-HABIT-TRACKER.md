# Cómo detectar un fallo en una app hecha con IA: ejemplo con un Habit Tracker

Una app puede verse bien y aun así fallar después de un cambio pequeño. Para enseñar cómo comprobarlo, grabé un ejemplo con un Habit Tracker. En el video introduzco deliberadamente un fallo de una línea, ejecuto las comprobaciones, leo el resultado, corrijo la línea y vuelvo a ejecutar el mismo gate.

[Mira el ejemplo en 57 segundos](https://www.youtube.com/shorts/QCT0Hkic_No). También puedes [ver la presentación completa](https://www.youtube.com/watch?v=nJtcdZnfchk).

## Qué muestra el ejemplo

El test esperaba `1` y obtuvo `2`. Esa diferencia da una pista concreta: hay que revisar el cambio y la expectativa del test, no pedirle a la IA que reescriba toda la app. Corrijo la línea correspondiente y repito la comprobación. El gate pasa de rojo a verde.

El gate verde significa que las comprobaciones ejecutadas pasan en ese estado del proyecto. No demuestra por sí solo que toda la app sea correcta, segura o lista para publicar. La demo pública permite usar la interfaz del Habit Tracker, pero no ejecuta los gates desde el navegador.

El Habit Tracker guarda los hábitos en el navegador y permite exportarlos como JSON. Puedes [probar la demo gratis](https://demo.theappdiscipline.com/) sin crear una cuenta. Si quieres inspeccionar un punto de partida de código, [Web Lite es una muestra gratuita](README.md) con licencia MIT; este repositorio es un starter independiente, no el código del Habit Tracker ni el kit completo.

## Para repetir el proceso en tu proyecto

1. Define un cambio pequeño y el resultado esperado antes de editar.
2. Ejecuta una comprobación que pueda detectar el fallo relevante.
3. Si falla, lee el resultado y acota la causa. Corrige sólo lo necesario.
4. Repite la misma comprobación y revisa lo que todavía queda sin verificar.

The App Discipline reúne este trabajo en una guía en español para Obsidian y cuatro templates de código con quality gates: Web, Mobile, Desktop y Browser Extension. Está pensado para quien quiere construir y mantener sus propias apps con IA por cambios verificables. Requiere Windows o Mac, Obsidian, Node.js, Git, un editor de código y acceso a una IA para programar. Usarás la terminal y revisarás los resultados; no es una herramienta no-code.

El [kit completo cuesta $59 USD](https://theappdiscipline.gumroad.com/l/tad?utm_source=github&utm_medium=organic_article&utm_campaign=tad_organic_v1&utm_content=caso_01_written). Antes de comprar, revisa en la ficha el contenido exacto, las licencias, los requisitos y las condiciones vigentes. Si sólo quieres entender el ejemplo, empieza por la demo y Web Lite.
