import { View, TouchableOpacity } from "react-native";
import * as Icons from "react-native-heroicons/outline";

const Menu = () => {
    return (
        <View className="absolute bottom-0 left-0 right-0 bg-white shadow-sm py-4 rounded-t-xl h-16">
            <View className="flex flex-row justify-evenly items-center">
                <View className="rounded-full p-2 relative bottom-10 bg-white shadow-sm">
                    <TouchableOpacity>
                        <Icons.HomeIcon
                            className="color-purple-400"
                            size="35"
                        />
                    </TouchableOpacity>
                </View>
                <View className="rounded-full p-2 relative bottom-10 bg-white shadow-sm">
                    <TouchableOpacity>
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