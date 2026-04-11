# Aleksandra Portfolio

Personal portfolio website built with React and Vite. The site presents Aleksandra's software development background, selected projects, professional experience, and contact details in a single-page layout.

## Stack

- React 19
- Vite 8
- Plain CSS
- ESLint 9

## Sections

- Hero introduction
- Expertise cards
- Selected work
- Professional experience
- Contact section

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## Project Structure

```text
my-portfolio/
|-- public/
|-- src/
|   |-- assets/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Repository Notes

- `node_modules/` and build output are ignored through `.gitignore`
- scratch `.txt` files used locally are also ignored to keep commits clean
- if Git is not installed on the machine yet, install Git and then run `git init` in the project root
