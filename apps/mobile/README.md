# 📱 RN Finance UI - Mobile Application Prototype

This folder contains the mobile application built with **React Native**, **Expo**, and **NativeWind v4**. It is a visual prototype designed to demonstrate a modern, fluid, and high-performance financial management interface.

---

## 🚀 Quick Start Guide

Follow these instructions to set up the project and run it locally on your machine, physical device, or emulator.

### 📋 Prerequisites

Make sure you have the following installed on your development machine:

- **Node.js** (v18.x or higher)
- **npm** or **yarn** / **pnpm**
- **Expo Go** app installed on your iOS or Android device *(if testing on a physical phone)*
- **Android Studio** (Android Emulator) or **Xcode** (iOS Simulator) *(optional)*

---

## 🛠️ Installation & Setup

1. **Navigate to the mobile directory:**
   ```bash
   cd apps/mobile
   ```

2. **Install project dependencies:**
```Bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the Expo development server:**
> npx expo start

## 📲 Previewing the App
Once the development server is running, you can open the prototype in several ways:
- Physical Device (Expo Go): Scan the QR Code displayed in your terminal using the iOS Camera app or the Android Expo Go app.
-  Android Emulator: Press a in the terminal to open the project in your running Android emulator.
- iOS Simulator: Press i in the terminal to launch the iOS simulator (macOS only).
- Web Browser: Press w to run the web preview version in your browser.

## 🏗️ Tech Stack & Tooling

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Styling:** [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- **Icons:** [Lucide React Native](https://lucide.dev/)
- **Navigation:** [React Navigation](https://reactnavigation.org/)


## ⚙️ Build & Export
To compile a standalone release build for previewing (e.g., generating an Android APK)
```bash
# Build standalone Android APK via Expo Prebuild / EAS
npx eas build --platform android --profile preview
```

## ⚠️ Notes
- This app is purely a UI prototype; all data presented across screens is mocked locally.
- No network requests or real financial transactions are executed.