import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { Bell, Plus, RefreshCw, FileText, Smartphone, Grid } from "lucide-react-native";
import { CreditCard } from "../components/CreditCard";
import { QuickSend } from "../components/QuickSend";
import { RecentActivity } from "../components/RecentActivity";

export function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#E8F5E9] px-5 pt-12" showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center gap-3">
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" }}
            className="w-11 h-11 rounded-full"
          />
          <View>
            <Text className="text-slate-500 text-xs font-medium">William Current</Text>
            <Text className="text-xl font-bold text-slate-900">Welcome Back 👋</Text>
          </View>
        </View>

        <Pressable className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm relative">
          <Bell size={18} color="#121314" />
          <View className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
        </Pressable>
      </View>

      {/* Botão Set Budget */}
      <View className="flex-row justify-end mb-3">
        <Pressable className="flex-row items-center bg-[#D0F244] px-3 py-1.5 rounded-full border border-black/5">
          <Plus size={14} color="#121314" />
          <Text className="text-xs font-bold text-slate-900 ml-1">Set Budget</Text>
        </Pressable>
      </View>

      {/* Card de Crédito da pasta src/components/ */}
      <CreditCard />

      {/* Botões de Ações Rápidas */}
      <View className="flex-row justify-between items-center mb-6">
        {[
          { label: "Send", icon: RefreshCw, active: false },
          { label: "Bill", icon: FileText, active: false },
          { label: "Mobile", icon: Smartphone, active: false },
          { label: "More", icon: Grid, active: true },
        ].map((item, index) => (
          <Pressable key={index} className="items-center">
            <View className={`w-14 h-14 rounded-full items-center justify-center shadow-sm ${item.active ? "bg-[#D0F244]" : "bg-white"}`}>
              <item.icon size={20} color="#121314" />
            </View>
            <Text className="text-xs font-semibold text-slate-800 mt-2">{item.label}</Text>
          </Pressable>
        ))}
      </View>

      {/* Quick Send da pasta src/components/ */}
      <QuickSend />

      {/* Transações Recentes da pasta src/components/ */}
      <RecentActivity />

    </ScrollView>
  );
}