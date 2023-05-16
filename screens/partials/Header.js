import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";

const Header = () => {
    return (
        <View className="bg-gray-100 flex flex-col gap-y-2 p-4 border-b-2 border-gray-100 pb-4 shadow-md shadow-purple-200">
            <View className="flex flex-col">
                <View className="flex-row items-center justify-between">
                    <Text className="font-black text-3xl">Bonjour,</Text>
                    <View className="flex flex-row items-center gap-x-4">
                        <TouchableOpacity>
                            <Icons.BellIcon
                                className="color-purple-400"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icons.AdjustmentsVerticalIcon
                                className="color-purple-400"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text className="font-thin text-md">Plus aucune recette ne vous sera secrète</Text>
            </View>
            <View className="flex relative items-center flex-row gap-x-2">
                <Icons.MagnifyingGlassIcon
                    className="absolute left-2 w-10 h-10 color-purple-300 z-10"
                />
                <TextInput
                    className="pl-10 pr-4 pt-4 pb-4 bg-gray-200 rounded-full w-full"
                    placeholder="Rechercher une recette"
                />
            </View>
        </View>
    );
};
export default Header;