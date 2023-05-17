import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import SearchInput from "../../components/SearchInput";

const Header = () => {
    return (
        <View className="bg-gray-100 flex flex-col gap-y-2 p-4 border-b-2 border-gray-100 pb-4 shadow-md shadow-purple-100">
            <View className="flex flex-col mb-2">
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
            <SearchInput />
        </View>
    );
};
export default Header;