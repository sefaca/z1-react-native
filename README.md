# ReactNative: Unleashing the Z1 Test

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli). It's a technical test created by Sergio Falcón for the z1 team.

# Index

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Evolution of the Project](#evolution-of-the-project)
- [Learning and Development](#learning-and-development)
- [Device Demonstration](#device-demonstration)
- [Learn More](#learn-more)

# Introduction

This project is aimed at showcasing React Native development skills while integrating various features as per the test requirements. It is structured to demonstrate proficiency in React Native development and API integration.

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Project Structure

The project is organized around the following main folders and files:

- **`android/`** y **`ios/`**: Folders containing configuration files and platform-specific resources for Android and iOS, respectively.
- **`node_modules/`**: Contains the project's libraries and dependencies.
- **`components/`**: The main folder where all the application source code resides.
  - **`reusable/`**: It contains reusable application components.
  - **`not_reusable/`**: Contains non-reusable components of the application.
  - **`queries/`**: Files with the queries to obtain the necessary data from the API.
- **`App.tsx`**: Application entry point.
- **`index.js`**: Startup file that registers the application.

The project follows a scalable and modular architecture, where each folder serves a specific purpose to facilitate maintenance and code extension.

# Evolution of the Project

This project has been developed progressively, following a step-by-step structure:

1. **Main Screen Structure:** I designed the main screen including the title, the horizontal menu and configured the filters to present the elements in a clear and accessible way.

2. **Data Query:** I configured and used a query to obtain the necessary data and display it on the main screen. This included managing data by applying filters through the menu.

3. **Drop-down Details Window:** I developed a drop-down window that displays the details of the selected items. This screen was configured to display specific data for each selected item.

4. **Last Adjustments and Changes:** I made the final adjustments to the code to improve the functionality and appearance of the code and the application.

5. **Z1 branding:** I added branding elements, including Z1 logos and visual identity, bringing a consistent and familiar atmosphere to the application environment.


# Learning and Development

This project was a great opportunity to explore mobile app development in React Native outside of the Expo environment. As a self-taught developer in this arena, this was my first project without the use of Expo and a great opportunity to demonstrate and expand my knowledge.

Since August, when I had no knowledge in ReactNative, I have been building my experience through personal projects, which are available in my GitHub repository. Each challenge has been a learning opportunity, and this particular project has allowed me to apply in a practical way everything I have learned so far.

# Device Demonstration

Visual demonstration of the application running on a Pixel 4 device, showing its performance and appearance in a real environment.

https://github.com/sefaca/z1-react-native/assets/32002286/a47534eb-b561-4dd3-8a96-d094638abac1

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
