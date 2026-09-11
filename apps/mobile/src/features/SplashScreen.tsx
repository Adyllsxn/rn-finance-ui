import React from "react";
import { View, Text, Pressable } from "react-native";
import { ArrowRight, ArrowUpRight, QrCode, CreditCard as CardIcon, Coins, Wallet, Wifi } from "lucide-react-native";

interface SplashScreenProps {
  onStart: () => void;
}

export function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <View className="flex-1 bg-[#C8EB33] px-6 pt-12 pb-8 justify-between relative">
      
      {/* Elementos Flutuantes no Topo */}
      <View className="flex-row justify-between items-center px-4 pt-4">
        {/* Moeda Topo Esquerda */}
        <View className="w-10 h-10 border-2 border-slate-950 rounded-full items-center justify-center">
          <Coins size={20} color="#090A0A" />
        </View>

        {/* QR Code Topo Centro */}
        <View className="p-2 border-2 border-slate-950 rounded-xl">
          <QrCode size={24} color="#090A0A" />
        </View>

        {/* Cartões Topo Direita */}
        <View className="w-11 h-10 border-2 border-slate-950 rounded-xl items-center justify-center -rotate-6 bg-[#C8EB33]">
          <CardIcon size={20} color="#090A0A" />
        </View>
      </View>

      {/* Ilustração Central Neo-Brutalist */}
      <View className="items-center justify-center my-auto relative py-6">
        {/* Círculo de Fundo Embasado */}
        <View className="w-64 h-64 bg-[#B7E022] rounded-full absolute -z-10" />

        {/* Card Ilustrativo Segurado pelo Personagem */}
        <View className="bg-[#C8EB33] w-56 h-36 rounded-3xl border-2 border-slate-950 p-4 justify-between shadow-[4px_4px_0px_0px_rgba(9,10,10,1)]">
          <View className="flex-row justify-between items-center">
            <Wallet size={28} color="#090A0A" />
            <Wifi size={20} color="#090A0A" style={{ transform: [{ rotate: "90deg" }] }} />
          </View>
          <View>
            <Text className="text-slate-950 font-mono text-xs tracking-widest font-bold">•••• 8821</Text>
            <Text className="text-slate-950 text-xs font-extrabold mt-1">PAYTIN CARD</Text>
          </View>
        </View>

        {/* Moeda Flutuante Direita Baixo */}
        <View className="absolute right-6 bottom-4 w-8 h-8 border-2 border-slate-950 rounded-full items-center justify-center bg-[#C8EB33]">
          <Coins size={14} color="#090A0A" />
        </View>
      </View>

      {/* Seção de Texto e Título */}
      <View className="mb-6">
        <View className="flex-row flex-wrap items-center gap-2 mb-2">
          <Text className="text-slate-950 text-4xl font-black tracking-tight">
            Digital Banking
          </Text>
          <Text className="text-slate-950 text-4xl font-black tracking-tight">
            Made for
          </Text>
          
          {/* Pílula de Seta Inline */}
          <View className="bg-slate-950 px-4 py-1.5 rounded-full flex-row items-center justify-center">
            <ArrowRight size={20} color="#C8EB33" />
          </View>

          <Text className="text-slate-950 text-4xl font-black tracking-tight">
            Digital Users
          </Text>
        </View>

        <Text className="text-slate-800 text-sm font-semibold mt-2">
          Spend, earn and track financial activity
        </Text>
      </View>

      {/* Footer com Botão de Avançar */}
      <View className="flex-row items-center justify-between pt-2">
        <Pressable onPress={onStart}>
          <Text className="text-slate-900 font-bold text-sm">Skip</Text>
        </Pressable>

        <Pressable 
          onPress={onStart}
          className="flex-row items-center gap-3 bg-slate-950 pl-5 pr-2 py-2 rounded-full shadow-lg"
        >
          <Text className="text-white font-extrabold text-sm">Let's Start</Text>
          <View className="w-10 h-10 bg-[#C8EB33] rounded-full items-center justify-center">
            <ArrowUpRight size={20} color="#090A0A" />
          </View>
        </Pressable>
      </View>

    </View>
  );
}