import React from "react";
import { View, Image, ScrollView, Text, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import * as Icons from "react-native-heroicons/outline";

const RecipeByCountry = () => {
    return (
        <View className="flex flex-row gap-x-4">
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                renderItem={({ item }, index) => (
                    <TouchableOpacity className="h-56 rounded-xl w-[40vw] mx-2 shadow-sm">
                        <ImageBackground className="h-full w-full" source={{ uri: "https://picsum.photos/800/400?random=1" }}>
                            <View className="h-2/5 bg-black/10 mt-auto rounded-t-xl">
                                <Text className="p-2 text-white">Découvrez les spécialités</Text>
                                <View className="flex flex-row items-center gap-x-2">
                                    <Icons.MapPinIcon 
                                        className="color-purple-400"
                                    />
                                    <Text className="text-white text-xl font-thin">Dubai</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator="false"
                className="gap-x-10"
            />
        </View>
    );
};

export default RecipeByCountry;
