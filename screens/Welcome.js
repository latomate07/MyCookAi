import { View, Text, TextInput } from "react-native";
import AppLayout from "./layouts/AppLayout";
import PopularRecipe from "../components/PopularRecipe";

const Welcome = () => {
    return (
        <AppLayout>
            <View className="px-4 mt-8">
                <View>
                    <View className="flex flex-col mb-2">
                        <Text className="text-xl font-black">
                            Recettes populaires
                        </Text>
                        <Text className="text-sm font-thin">
                            Retrouvez les recettes les plus aimés
                        </Text>
                    </View>
                    <PopularRecipe />
                </View>
            </View>
        </AppLayout>
    );
}
export default Welcome;