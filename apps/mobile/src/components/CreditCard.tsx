import React from "react";
import { View, Text } from "react-native";
import { Sparkles, Wifi } from "lucide-react-native";

export function CreditCard() {
  return (
    <View className="bg-[#18191C] rounded-[32px] p-5 mb-6 relative overflow-hidden border border-slate-800 shadow-xl">
      {/* Top Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-white font-extrabold text-lg tracking-widest italic">VISA</Text>
        <Sparkles size={20} color="#D0F244" />
      </View>

      {/* Saldo */}
      <Text className="text-slate-400 text-xs font-semibold mb-0.5">Balance</Text>
      <Text className="text-white text-3xl font-extrabold mb-6">$ 25,453.00</Text>

      {/* Número Oculto */}
      <Text className="text-slate-400 font-mono tracking-widest text-xs mb-4">
        ••••  ••••  ••••  7281
      </Text>

      {/* Footer do Card */}
      <View className="flex-row justify-between items-center pr-14">
        <View>
          <Text className="text-slate-500 text-[10px] uppercase font-semibold">Card Holder</Text>
          <Text className="text-slate-200 text-xs font-bold mt-0.5">William Current</Text>
        </View>
        <View>
          <Text className="text-slate-500 text-[10px] uppercase font-semibold">Exp</Text>
          <Text className="text-slate-200 text-xs font-bold mt-0.5">07/26</Text>
        </View>
      </View>

      {/* Badge Lateral Contactless Verde Lima */}
      <View className="absolute right-3 top-10 bg-[#D0F244] w-12 h-24 rounded-2xl items-center justify-center border border-black/10">
        <Wifi size={24} color="#121314" style={{ transform: [{ rotate: "90deg" }] }} />
      </View>
    </View>
  );
}