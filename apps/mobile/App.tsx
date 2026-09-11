import "./global.css";
import React, { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SplashScreen } from "./src/features/SplashScreen";
import { HomeScreen } from "./src/features/HomeScreen";
import { StatsScreen } from "./src/features/StatsScreen";
import { QrScreen } from "./src/features/QrScreen";
import { WalletScreen } from "./src/features/WalletScreen";
import { ProfileScreen } from "./src/features/ProfileScreen";
import { CustomTabBar } from "./src/shared/CustomTabBar";

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [currentTab, setCurrentTab] = useState("home");

  const handleLogout = () => {
    setIsStarted(false);
    setCurrentTab("home");
  };

  // Se ainda não iniciou ou fez logout, mostra a Splash
  if (!isStarted) {
    return (
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <SplashScreen onStart={() => setIsStarted(true)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-[#E8F5E9] relative">
        <StatusBar style="dark" />
        
        {/* Renderiza a tela ativa */}
        {currentTab === "home" && <HomeScreen />}
        {currentTab === "stats" && <StatsScreen />}
        {currentTab === "qr" && <QrScreen />}
        {currentTab === "wallet" && <WalletScreen />}
        {currentTab === "profile" && <ProfileScreen onLogout={handleLogout} />}

        {/* Barra de Navegação Flutuante */}
        <CustomTabBar currentTab={currentTab} onSelectTab={setCurrentTab} />
      </View>
    </SafeAreaProvider>
  );
}