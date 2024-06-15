# Theme Toggler

## Overview

Theme Toggler is a simple React application that allows users to switch between light and dark themes. The application demonstrates the use of `useContext` to manage global state for theme toggling.

## Features

- Toggle between light and dark themes.
- Smooth transitions between themes.

## Technologies Used

- React
- React Hooks (`useState`, `useContext`)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (>=14.0.0)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/theme-toggler.git
   ```

2. Navigate to the project directory:

   ```bash
   cd theme-toggler
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- `src/`
  - `components/`
    - `ThemeToggler.jsx`
    - `ThemeContext.jsx`
    - `View.jsx`
  - `App.jsx`
  - `index.js`
  - `styles.css`

### Components

- **ThemeProvider**: Context provider to manage the theme state.
- **ThemeToggler**: Component to toggle between light and dark themes.

# Acknowledgements

[Toggle Button](https://uiverse.io/JkHuger/old-falcon-20)