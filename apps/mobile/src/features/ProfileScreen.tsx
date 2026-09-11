import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { User, Shield, Bell, CreditCard, ChevronRight, LogOut, Settings, HelpCircle } from "lucide-react-native";

interface ProfileScreenProps {
  onLogout?: () => void;
}

export function ProfileScreen({ onLogout }: ProfileScreenProps) {
  const menuItems = [
    { icon: User, label: "Personal Information", value: "" },
    { icon: Shield, label: "Security & Privacy", value: "2FA On" },
    { icon: CreditCard, label: "Payment Methods", value: "2 Cards" },
    { icon: Bell, label: "Notifications", value: "Enabled" },
    { icon: Settings, label: "App Preferences", value: "" },
    { icon: HelpCircle, label: "Help & Support", value: "" },
  ];

  return (
    <ScrollView className="flex-1 bg-[#E8F5E9] px-5 pt-12" showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xl font-extrabold text-slate-900">Profile</Text>
        <Pressable className="w-10 h-10 bg-white rounded-full items-center justify-center border border-slate-200/60 shadow-sm">
          <Settings size={18} color="#121314" />
        </Pressable>
      </View>

      {/* Profile Card */}
      <View className="bg-[#18191C] p-5 rounded-[32px] items-center mb-6 border border-slate-800 shadow-xl">
        <View className="relative mb-3">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop" }}
            className="w-20 h-20 rounded-full border-2 border-[#D0F244]"
          />
          <View className="absolute bottom-0 right-0 bg-[#D0F244] w-6 h-6 rounded-full items-center justify-center border-2 border-[#18191C]">
            <Shield size={12} color="#121314" />
          </View>
        </View>

        <Text className="text-white text-lg font-extrabold">William Current</Text>
        <Text className="text-slate-400 text-xs font-medium mt-0.5">william.current@paytin.me</Text>

        {/* Badge Pro/Verified */}
        <View className="bg-[#D0F244] px-3 py-1 rounded-full mt-3">
          <Text className="text-[#121314] text-[10px] font-extrabold uppercase tracking-wider">Verified Account</Text>
        </View>
      </View>

      {/* Menu List */}
      <View className="bg-white rounded-3xl p-2 border border-slate-100 shadow-sm mb-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Pressable
              key={index}
              className={`flex-row items-center justify-between p-3.5 ${
                index !== menuItems.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <View className="flex-row items-center gap-3">
                <View className="w-9 h-9 bg-slate-100 rounded-2xl items-center justify-center">
                  <Icon size={18} color="#121314" />
                </View>
                <Text className="text-slate-900 text-sm font-bold">{item.label}</Text>
              </View>

              <View className="flex-row items-center gap-2">
                {item.value ? (
                  <Text className="text-slate-400 text-xs font-semibold">{item.value}</Text>
                ) : null}
                <ChevronRight size={16} color="#94A3B8" />
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Botão de Logout */}
      <View className="mb-28">
        <Pressable 
          onPress={onLogout}
          className="bg-rose-50 py-4 rounded-2xl flex-row items-center justify-center gap-2 border border-rose-100 active:opacity-80"
        >
          <LogOut size={18} color="#E11D48" />
          <Text className="text-rose-600 font-extrabold text-sm">Log Out</Text>
        </Pressable>
      </View>

    </ScrollView>
  );
}