import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>

            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <Text className="text-[14px] font-bold text-gray-100">
              {data?.price_level}
            </Text>
            <Text className="text-[28px] font-bold text-gray-100">
              {data?.price}
            </Text>

            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text className="font-semibold">{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
        </View>
        <View className="items-center flex-row space-x-2 mt-2">
          <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
          <Text className="text-[#8C9EA6] text-[20px] font-bold">
            {data?.location_string}
          </Text>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151">{data?.rating}</Text>
                <Text className="text-[#515151">Rating</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151">{data?.price_level}</Text>
                <Text className="text-[#515151">Price Level</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151 capitalize">
                  {data?.bearing}
                </Text>
                <Text className="text-[#515151">Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className=" mt-4 tracking-wide text-[16px] font-semibold text-[#97a6af]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="space-y-2 bg-gray-100 rounded-xl px-2 py-2 m-1">
          {data?.phone && (
            <View className="items-center flex-row space-x-5">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
        </View>

        <View className="space-y-2 bg-gray-100 rounded-xl px-3 py-2 m-1">
          {data?.email && (
            <View className="items-center flex-row space-x-4">
              <FontAwesome name="envelope" size={20} color="#428288" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
        </View>

        <View className="space-y-2 bg-gray-100 rounded-xl px-2 py-2 m-1">
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}

          <View className="mt-4 px-4 py-4 rounded-lg bg-[#06b2be] items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
