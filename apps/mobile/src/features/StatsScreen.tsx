import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { MoreHorizontal, TrendingUp, SlidersHorizontal } from "lucide-react-native";

export function StatsScreen() {
  const [period, setPeriod] = useState<"Today" | "Weekly" | "Monthly" | "Yearly">("Monthly");

  // Dados mockados para o gráfico de barras
  const chartData = [
    { month: "Jan", height: "h-16", active: false },
    { month: "Feb", height: "h-24", active: false },
    { month: "Mar", height: "h-32", active: true },
    { month: "Apr", height: "h-20", active: false },
    { month: "May", height: "h-28", active: false },
    { month: "Jun", height: "h-36", active: false },
  ];

  return (
    <ScrollView className="flex-1 bg-[#E8F5E9] px-5 pt-12" showsVerticalScrollIndicator={false}>
      
      {/* Header Limpo */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xl font-extrabold text-slate-900">Statistics</Text>

        <Pressable className="w-10 h-10 bg-white rounded-full items-center justify-center border border-slate-200/60 shadow-sm">
          <MoreHorizontal size={18} color="#121314" />
        </Pressable>
      </View>

      {/* Período Selectors (Pills) */}
      <View className="flex-row bg-white p-1 rounded-full mb-6 border border-slate-200/50 shadow-sm">
        {(["Today", "Weekly", "Monthly", "Yearly"] as const).map((item) => (
          <Pressable
            key={item}
            onPress={() => setPeriod(item)}
            className={`flex-1 py-2.5 rounded-full items-center ${
              period === item ? "bg-[#D0F244]" : ""
            }`}
          >
            <Text className={`text-xs font-bold ${period === item ? "text-slate-950" : "text-slate-500"}`}>
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Cards de Métricas Principais (Top Grid) */}
      <View className="flex-row gap-3 mb-6">
        
        {/* Earning Card (Verde Lima) */}
        <View className="flex-1 bg-[#D0F244] p-4 rounded-3xl justify-between border border-black/5 shadow-sm">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row items-center gap-1">
              <TrendingUp size={14} color="#121314" />
              <Text className="text-slate-900 text-xs font-bold uppercase tracking-wider">Earning</Text>
            </View>
            <MoreHorizontal size={16} color="#121314" />
          </View>

          <View className="mb-4">
            <Text className="text-slate-950 text-3xl font-extrabold">24%</Text>
            <Text className="text-slate-800 text-[10px] font-medium leading-tight mt-1">
              Your current month earning is increased by 24% compared to last month.
            </Text>
          </View>

          <View className="bg-slate-950/10 p-2 rounded-2xl border border-black/5">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="text-slate-900 text-[10px] font-bold">Goal</Text>
              <Text className="text-slate-900 text-[10px] font-bold">$2567 / $10000</Text>
            </View>
            <View className="w-full bg-slate-950/20 h-1.5 rounded-full overflow-hidden">
              <View className="bg-slate-950 h-full w-[25%]" />
            </View>
          </View>
        </View>

        {/* Spending Card (Dark Neo-Brutalism) */}
        <View className="flex-1 bg-[#18191C] p-4 rounded-3xl justify-between border border-slate-800 shadow-xl">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-slate-400 text-xs font-semibold">Spending</Text>
            <MoreHorizontal size={16} color="#94A3B8" />
          </View>

          <Text className="text-white text-2xl font-extrabold mb-3">$3,250.00</Text>

          {/* Wireframe Spider/Radar Simulation */}
          <View className="h-20 bg-slate-900/80 rounded-2xl items-center justify-center border border-slate-800 relative overflow-hidden">
            <View className="w-12 h-12 border border-slate-700 rounded-full items-center justify-center rotate-45">
              <View className="w-8 h-8 border border-[#D0F244]/60 bg-[#D0F244]/10 rounded-lg" />
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-2 pt-2 border-t border-slate-800">
            <Text className="text-[10px] text-slate-400">Debit Card</Text>
            <Text className="text-[10px] text-slate-400">Credit Card</Text>
          </View>
        </View>
      </View>

      {/* Seção Overview + Gráfico de Barras */}
      <View className="mb-28">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-slate-900 text-base font-bold">Overview</Text>
          <Pressable className="w-8 h-8 bg-white rounded-full items-center justify-center border border-slate-200">
            <SlidersHorizontal size={14} color="#121314" />
          </Pressable>
        </View>

        <View className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm">
          
          {/* Header do Gráfico */}
          <View className="flex-row justify-between items-start mb-6">
            <View>
              <Text className="text-slate-400 text-xs font-medium">Total Balance</Text>
              <Text className="text-slate-900 text-2xl font-extrabold mt-0.5">$25,453.00</Text>
            </View>

            {/* Legendas */}
            <View className="gap-1">
              <View className="flex-row items-center gap-1.5">
                <View className="w-2.5 h-2.5 bg-slate-950 rounded-sm" />
                <Text className="text-slate-500 text-[10px] font-medium">Debit Card Spending</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <View className="w-2.5 h-2.5 bg-[#D0F244] rounded-sm" />
                <Text className="text-slate-500 text-[10px] font-medium">Credit Card Spending</Text>
              </View>
            </View>
          </View>

          {/* Barras do Gráfico */}
          <View className="flex-row items-end justify-between h-44 pt-6 px-2 border-b border-slate-100">
            {chartData.map((bar, idx) => (
              <View key={idx} className="items-center gap-2">
                <View className="w-7 bg-slate-100 rounded-t-lg items-center justify-end overflow-hidden h-32 relative">
                  {/* Bloco Escuro Base (Debit) */}
                  <View className={`w-full bg-slate-950 rounded-t-sm ${bar.height}`} />
                  {/* Bloco Verde Lima Superior (Credit) */}
                  <View className="w-full bg-[#D0F244] h-6 rounded-t-sm border-t border-slate-950" />
                </View>
                <Text className="text-slate-400 text-xs font-medium">{bar.month}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

    </ScrollView>
  );
}