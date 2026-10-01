# The App Discipline Web Lite

Un starter Web gratuito para experimentar un ciclo sencillo: definir un resultado, dividirlo en pasos y comprobar una condición antes de avanzar.

La aplicación funciona de forma local. No pide cuentas, claves ni servicios externos y conserva el estado únicamente en el navegador.

## Inicio rápido

Necesitas Node.js 22 o una versión posterior.

```bash
npm install
npm run gate
npm run dev
```

En Windows PowerShell, usa `npm.cmd` si `npm` intenta ejecutar un archivo `npm.ps1` bloqueado por la política del sistema.

La terminal mostrará una URL local. Ábrela en el navegador, completa los tres pasos y observa cómo cambia el gate.

## Qué puedes hacer con este repositorio

- Usarlo, modificarlo y distribuirlo bajo la licencia MIT.
- Crear un proyecto Web local con React, TypeScript y Vite.
- Probar persistencia local, navegación por teclado y un gate básico.
- Revisar una base pequeña antes de decidir si necesitas el sistema completo.

¿Quieres ver el proceso en una app terminada? Lee el [Caso 1: detectar y corregir un fallo en Habit Tracker](GUIA-CASO-01-HABIT-TRACKER.md). El Habit Tracker es una demo independiente de este starter.

## Qué no incluye

Esta edición no contiene el Vault, los templates completos de Web, Mobile, Desktop y Extension, los agentes, las skills, los prompts, la orquestación, los backends ni los controles de lanzamiento del producto completo.

Consulta [LITE-Y-COMPLETO.md](LITE-Y-COMPLETO.md) para comparar ambos alcances sin ambigüedades.

## Comandos

```bash
npm run dev       # servidor local
npm run test      # pruebas del gate
npm run lint      # análisis estático
npm run typecheck # comprobación de TypeScript
npm run build     # build de producción
npm run gate      # test + lint + typecheck + build
```

## Producto completo

The App Discipline es un sistema guiado en español para desarrollar aplicaciones con IA sin depender de un chat infinito. El producto completo se entrega como descarga e incluye el Vault propietario, cuatro templates completos y los componentes descritos en la página de compra.

[Ver The App Discipline](https://theappdiscipline.gumroad.com/l/tad)

## Privacidad

Este starter no incluye analytics ni transmite el contenido que escribes. `localStorage` conserva el ejercicio en el navegador hasta que uses el botón para reiniciarlo o borres los datos del sitio.

## Licencia

Código disponible bajo la [licencia MIT](LICENSE). El producto completo y su Vault se distribuyen por separado y no quedan cubiertos por esta licencia.
