import { View, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";
import { useRouter } from "expo-router";

const Menu = () => {
    const router = useRouter();

    return (
        <View className="absolute bottom-0 left-0 right-0 bg-white shadow-sm shadow-gray-200 rounded-t-xl h-10">
            <View className="flex flex-row justify-evenly items-center">
                <View className="rounded-full p-2 relative bottom-6 bg-white shadow-sm shadow-gray-200">
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Icons.HomeIcon
                            className="color-purple-400"
                            size="35"
                        />
                    </TouchableOpacity>
                </View>
                <View className="rounded-full p-2 relative bottom-6 bg-white shadow-sm shadow-gray-200">
                    <TouchableOpacity onPress={() => router.push('/generator')}>
                        <Icons.RocketLaunchIcon
                            className="color-purple-400"
                            size="35"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Menu;