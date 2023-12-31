# Weather App POC

This is a simple weather app where you can search for a location and a forecast is displayed.

### Set up

Copy `.env.example` to `.env` and set the API token.

Use a package manager to install and run. I used `npm`.

```bash
npm i
```

### Run in develop

Vite is used to bundle and provide hot module reloading.

```bash
npm run dev
```

### test

Jest is used as a test runner. Vitest would be ideal but there were issues configuring to play nice with jsdom and react-testing-library/jsdom.

```bash
npm test
```

### View components

Basic components are presented in storybook. This allows focused on development on specific areas by isolating parts of the UI. In general this encourages components that are void of effects and simplifies testing.

```bash
npm run storybook
```

## Approach

Emphasis was put on the API interaction inside the `useWeather` hook. Ensuring a healthy result or predictable error was returned. Styling and component testing is a little sparse for this reason.

Icons used
https://www.iconfinder.com/iconsets/weather-color-2

Design inspiration
https://sketchelements.com/multifunctional-weather-app-demo/