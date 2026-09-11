import React from "react";
import { View, Text, Pressable } from "react-native";
import { ShoppingBag, Home, ShoppingCart, ChevronRight } from "lucide-react-native";

const TRANSACTIONS = [
  { id: "1", title: "Food Store", date: "Monday, 25 January", amount: "-$15.00", Icon: ShoppingBag },
  { id: "2", title: "House Rent", date: "Monday, 25 January", amount: "-$290.00", Icon: Home },
  { id: "3", title: "Grocery", date: "Monday, 25 January", amount: "-$27.00", Icon: ShoppingCart },
];

export function RecentActivity() {
  return (
    <View className="mb-28">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-slate-900 font-bold text-base">Recent Activity</Text>
        <Pressable className="flex-row items-center">
          <Text className="text-slate-500 text-xs font-semibold mr-0.5">See all</Text>
          <ChevronRight size={14} color="#64748B" />
        </Pressable>
      </View>

      <View className="bg-white rounded-3xl p-2 border border-slate-100 shadow-sm">
        {TRANSACTIONS.map((tx, idx) => (
          <View key={tx.id} className={`flex-row justify-between items-center p-3 ${idx < TRANSACTIONS.length - 1 ? "border-b border-slate-100" : ""}`}>
            <View className="flex-row items-center gap-3">
              <View className="w-10 h-10 bg-slate-100 rounded-full items-center justify-center">
                <tx.Icon size={18} color="#121314" />
              </View>
              <View>
                <Text className="text-sm font-bold text-slate-900">{tx.title}</Text>
                <Text className="text-xs text-slate-400">{tx.date}</Text>
              </View>
            </View>
            <Text className="text-sm font-bold text-slate-900">{tx.amount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}