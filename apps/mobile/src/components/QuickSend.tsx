import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { ChevronRight } from "lucide-react-native";

const USERS = [
  { id: "1", name: "Azie", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
  { id: "2", name: "Choir", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
  { id: "3", name: "Fandit", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
  { id: "4", name: "Happy", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150" },
  { id: "5", name: "Nayu", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150" },
];

export function QuickSend() {
  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-slate-900 font-bold text-base">Quick Send</Text>
        <Pressable className="flex-row items-center">
          <Text className="text-slate-500 text-xs font-semibold mr-0.5">See all</Text>
          <ChevronRight size={14} color="#64748B" />
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {USERS.map((user) => (
          <View key={user.id} className="items-center mr-4">
            <Image source={{ uri: user.avatar }} className="w-12 h-12 rounded-full border-2 border-white mb-1 shadow-sm" />
            <Text className="text-slate-700 text-xs font-medium">{user.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}