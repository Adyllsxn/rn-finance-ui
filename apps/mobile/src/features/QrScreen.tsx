import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { QrCode, Share2, Copy, MoreHorizontal, Scan, Flashlight } from "lucide-react-native";

export function QrScreen() {
  const [activeTab, setActiveTab] = useState<"scan" | "my_code">("scan");
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [scannedMessage, setScannedMessage] = useState(false);

  return (
    <View className="flex-1 bg-[#E8F5E9] px-5 pt-12 pb-32 justify-between">
      
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xl font-extrabold text-slate-900">
          {activeTab === "scan" ? "Scan QR Code" : "My QR Code"}
        </Text>
        <Pressable className="w-10 h-10 bg-white rounded-full items-center justify-center border border-slate-200/60 shadow-sm">
          <MoreHorizontal size={18} color="#121314" />
        </Pressable>
      </View>

      {/* Selector de Modo (Tabs) */}
      <View className="flex-row bg-white p-1 rounded-full mb-6 border border-slate-200/60 shadow-sm">
        <Pressable
          onPress={() => setActiveTab("scan")}
          className={`flex-1 py-2.5 rounded-full items-center ${
            activeTab === "scan" ? "bg-[#D0F244]" : ""
          }`}
        >
          <Text className={`text-xs font-bold ${activeTab === "scan" ? "text-slate-950" : "text-slate-500"}`}>
            Scan Code
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("my_code")}
          className={`flex-1 py-2.5 rounded-full items-center ${
            activeTab === "my_code" ? "bg-[#D0F244]" : ""
          }`}
        >
          <Text className={`text-xs font-bold ${activeTab === "my_code" ? "text-slate-950" : "text-slate-500"}`}>
            My Code
          </Text>
        </Pressable>
      </View>

      {/* Conteúdo Central Exibido Dinamicamente */}
      {activeTab === "scan" ? (
        /* UI DO SCANNER SIMULADO */
        <View className="bg-slate-950 w-full h-[360px] rounded-[36px] items-center justify-center my-auto relative border-2 border-slate-900 shadow-2xl p-6">
          <View className="w-52 h-52 border-2 border-[#D0F244] rounded-3xl items-center justify-center relative">
            {/* Cantoneiras da Mira */}
            <View className="w-5 h-5 border-t-4 border-l-4 border-[#D0F244] absolute -top-1 -left-1 rounded-tl" />
            <View className="w-5 h-5 border-t-4 border-r-4 border-[#D0F244] absolute -top-1 -right-1 rounded-tr" />
            <View className="w-5 h-5 border-b-4 border-l-4 border-[#D0F244] absolute -bottom-1 -left-1 rounded-bl" />
            <View className="w-5 h-5 border-b-4 border-r-4 border-[#D0F244] absolute -bottom-1 -right-1 rounded-br" />

            <Scan size={44} color="#D0F244" opacity={0.8} />
            <Text className="text-slate-400 text-[11px] font-semibold mt-3 text-center">
              Position QR code here
            </Text>
          </View>

          {/* Controles do Scanner */}
          <View className="absolute bottom-4 flex-row items-center gap-3">
            <Pressable 
              onPress={() => setIsFlashOn(!isFlashOn)}
              className={`p-3 rounded-full border ${isFlashOn ? "bg-[#D0F244] border-black" : "bg-slate-900 border-slate-700"}`}
            >
              <Flashlight size={16} color={isFlashOn ? "#121314" : "#FFFFFF"} />
            </Pressable>

            <Pressable 
              onPress={() => setScannedMessage(!scannedMessage)}
              className="bg-[#D0F244] px-4 py-2.5 rounded-full border border-black"
            >
              <Text className="text-slate-950 font-extrabold text-xs">
                {scannedMessage ? "Code Detected!" : "Simulate Scan"}
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        /* UI DO MEU PRÓPRIO QR CODE */
        <View className="bg-[#18191C] w-full p-6 rounded-[36px] items-center my-auto border border-slate-800 shadow-2xl">
          <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
            My Personal QR Code
          </Text>
          <Text className="text-white text-base font-extrabold mb-5">
            William Current
          </Text>

          {/* Card do Código */}
          <View className="bg-[#D0F244] p-5 rounded-3xl mb-5 items-center justify-center shadow-md">
            <View className="bg-slate-950 p-4 rounded-2xl">
              <QrCode size={160} color="#D0F244" />
            </View>
          </View>

          {/* Chave de Pagamento */}
          <View className="bg-slate-900 w-full p-3 rounded-2xl flex-row items-center justify-between border border-slate-800">
            <Text className="text-slate-400 text-xs font-mono">william.current@paytin.me</Text>
            <View className="p-1.5 bg-slate-800 rounded-lg">
              <Copy size={14} color="#D0F244" />
            </View>
          </View>
        </View>
      )}

      {/* Botão Inferior (Apenas na aba My Code) */}
      {activeTab === "my_code" ? (
        <Pressable className="bg-[#D0F244] py-3.5 rounded-full flex-row items-center justify-center gap-2 border border-black/10 shadow-sm">
          <Share2 size={16} color="#121314" />
          <Text className="text-[#121314] font-extrabold text-xs uppercase tracking-wider">
            Share QR Code
          </Text>
        </Pressable>
      ) : (
        <View className="h-12" />
      )}

    </View>
  );
}