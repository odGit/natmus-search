NatMus challenge solution

Live demo is available at https://odgit.github.io/natmus-search/

## Overview
* Front-end is a single page application implemented with React and based on [react-create-app](https://create-react-app.dev/). It is located in the `src/` folder with main entry point [index.tsx](./src/index.tsx)
* Back-end is provided by NatMus. For more info see [here](https://nationalmuseumofdenmark.github.io/frontend-assignment-description/), and also the [API docs](https://frontend.natmus.dk/swagger/index.html).

## Scripts
The project is configured to run on [http://localhost:3000](http://localhost:3000)

1. To start in development mode:
  ```
    yarn run start
  ```
2. To build the project:
  ```
    yarn run build
  ```


## Technical choices

 - TypeScript v3.8
 - Sass v4.13
 - React v16.13

```React & React Hooks: ```  I enjoy using React, with useContext and useReduce for global state management. For me, this makes development rapid and joyful.

```Folder structure: ```
Inspired by [this article](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) about Fractal folder structure.


            |-- build/
            ├── public/
            └── src/
                ├── components/
                │   ├── atoms/
                │   ├── card/
                │   ├── controlsBar/
                │   ├── Card.tsx
                │   ├── ControlsBar.tsx
                │   ├── NoResults.tsx
                │   ├── ResultCollection.tsx
                │   └── Search.tsx
                ├── ducks/
                ├── enums/
                ├── sass/
                └── utils/
                ├── App.tsx
                ├── Context.tsx
                ├── index.tsx
                ├── react-app-env.d.ts


* **public/** contains _index.html_ file and `<script src>` assets. They automatically get copied to build/ by create-react-app scripts.
* **src/Context.tsx** initializes the redux with useReducer and useContext.
* **src/components/** contains components and a folder containing all bits and pieces for it. For example, the _Card.tsx_ component is in the _components/_ folder alongside the _card/_ folder.
* **src/components/atoms/** has shared components, like Button, Label, etc.
* **src/ducks/** contains state, actions and reducers.
* **src/enums/** holds constants used for colors, date formatting, currency rates, etc.
* **src/utils/** has utilities like the API wrapper and helper functions.
* **src/sass/** has all projects styles in SASS and this folder follows the same structure as _src/components/_.
* **src/index.tsx** renders the app.

## Limitations
In the component `<Illustration />` it is intentional to serve only the first image from the Array of images available. This limitation is there because of not having enough time to develop image preview functionality further and instead focusing on other functionalities.