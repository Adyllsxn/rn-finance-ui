import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Plus, CreditCard as CardIcon, ArrowUpRight, MoreHorizontal, ShieldCheck } from "lucide-react-native";
import { CreditCard } from "../components/CreditCard";

export function WalletScreen() {
  return (
    <ScrollView className="flex-1 bg-[#E8F5E9] px-5 pt-12" showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-xl font-extrabold text-slate-900">My Wallet</Text>
        <Pressable className="w-10 h-10 bg-white rounded-full items-center justify-center border border-slate-200/60 shadow-sm">
          <MoreHorizontal size={18} color="#121314" />
        </Pressable>
      </View>

      {/* Cartão Principal */}
      <CreditCard />

      {/* Botões de Ação Rápida */}
      <View className="flex-row gap-3 mb-6">
        <Pressable className="flex-1 bg-[#D0F244] py-3.5 px-4 rounded-2xl flex-row items-center justify-center gap-2 border border-black/5 shadow-sm">
          <Plus size={18} color="#121314" />
          <Text className="text-[#121314] font-extrabold text-xs">Add Card</Text>
        </Pressable>

        <Pressable className="flex-1 bg-[#18191C] py-3.5 px-4 rounded-2xl flex-row items-center justify-center gap-2 border border-slate-800 shadow-md">
          <ArrowUpRight size={18} color="#D0F244" />
          <Text className="text-white font-extrabold text-xs">Top Up</Text>
        </Pressable>
      </View>

      {/* Seção de Cartões Cadastrados */}
      <View className="mb-28">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-slate-900 text-base font-bold">Your Cards</Text>
          <Text className="text-slate-500 text-xs font-semibold">2 Active</Text>
        </View>

        {/* Card Lista 1 - Visa Main */}
        <View className="bg-white p-4 rounded-3xl mb-3 flex-row items-center justify-between border border-slate-100 shadow-sm">
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-[#18191C] rounded-2xl items-center justify-center">
              <CardIcon size={20} color="#D0F244" />
            </View>
            <View>
              <Text className="text-slate-900 text-sm font-bold">Visa Platinum</Text>
              <Text className="text-slate-400 text-xs font-medium">•••• 7281</Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-slate-900 text-sm font-extrabold">$25,453.00</Text>
            <View className="flex-row items-center gap-1 mt-0.5">
              <ShieldCheck size={12} color="#16A34A" />
              <Text className="text-green-600 text-[10px] font-bold">Default</Text>
            </View>
          </View>
        </View>

        {/* Card Lista 2 - Mastercard Secondary */}
        <View className="bg-white p-4 rounded-3xl flex-row items-center justify-between border border-slate-100 shadow-sm">
          <View className="flex-row items-center gap-3">
            <View className="w-12 h-12 bg-slate-100 rounded-2xl items-center justify-center">
              <CardIcon size={20} color="#121314" />
            </View>
            <View>
              <Text className="text-slate-900 text-sm font-bold">Mastercard Gold</Text>
              <Text className="text-slate-400 text-xs font-medium">•••• 4092</Text>
            </View>
          </View>
          <View className="items-end">
            <Text className="text-slate-900 text-sm font-extrabold">$4,120.50</Text>
            <Text className="text-slate-400 text-[10px] font-medium mt-0.5">Secondary</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
}