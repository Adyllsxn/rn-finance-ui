import React from "react";
import { View, Pressable } from "react-native";
import { Home, BarChart2, QrCode, User, Wallet } from "lucide-react-native";

interface TabProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export function CustomTabBar({ currentTab, onSelectTab }: TabProps) {
  const isQrActive = currentTab === "qr";

  return (
    <View className="absolute bottom-6 left-5 right-5 items-center">
      <View className="bg-[#121314] flex-row items-center justify-between px-6 py-3.5 rounded-full w-full max-w-sm shadow-2xl border border-slate-800/80">
        <Pressable onPress={() => onSelectTab("home")}>
          <Home size={22} color={currentTab === "home" ? "#D0F244" : "#64748B"} />
        </Pressable>

        <Pressable onPress={() => onSelectTab("stats")}>
          <BarChart2 size={22} color={currentTab === "stats" ? "#D0F244" : "#64748B"} />
        </Pressable>

        {/* Botão Central Destacado Neon */}
        <Pressable 
          onPress={() => onSelectTab("qr")}
          className={`${
            isQrActive ? "bg-[#D0F244] scale-105" : "bg-[#D0F244]/90"
          } w-12 h-12 rounded-full items-center justify-center -mt-6 border-4 border-[#090A0A] shadow-lg`}
        >
          <QrCode size={22} color="#121314" />
        </Pressable>

        <Pressable onPress={() => onSelectTab("wallet")}>
          <Wallet size={22} color={currentTab === "wallet" ? "#D0F244" : "#64748B"} />
        </Pressable>

        <Pressable onPress={() => onSelectTab("profile")}>
          <User size={22} color={currentTab === "profile" ? "#D0F244" : "#64748B"} />
        </Pressable>
      </View>
    </View>
  );
}