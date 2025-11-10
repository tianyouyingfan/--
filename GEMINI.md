# GEMINI.md

## Project Overview

This is a single-page web application that provides an interactive visualization of the philosophical concept of "practice, knowledge, and re-practice" (实践—认识—再实践的螺旋). It uses the development history of China's Long March 5 rocket and SpaceX's rockets as case studies.

The application is built with plain HTML, CSS, and JavaScript, with no external libraries or frameworks. The main page consists of a central visualization area where an icon travels along a spiral path, and a side panel that displays detailed information corresponding to different stages of the journey.

## Building and Running

This project does not require a build process.

To run the application, simply open the `index.html` file in a modern web browser.

## Development Conventions

*   **JavaScript:** The application logic is contained in `app.js`. The code is written in strict mode (`'use strict'`) and is well-organized with clear separation of concerns (DOM references, state, event handlers, UI updates, geometry calculations, and animation loop).
*   **CSS:** The styling is in `styles.css`. It uses CSS custom properties (variables) for theming and layout constants, making it easy to modify the visual appearance.
*   **Data:** The content for the visualizations is hardcoded as a JavaScript object (`DATASETS`) in `app.js`. To add or modify the case studies, this object should be edited.
*   **Interactivity:** The application includes controls for playing/pausing the animation, adjusting the speed, and switching between the two datasets (Long March 5 and SpaceX).
