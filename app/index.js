import { View, Text, TextInput, SafeAreaView } from "react-native";
import AppLayout from "./layouts/AppLayout";
import PopularRecipe from "../components/PopularRecipe";
import RecipeByCountry from "../components/RecipeByCountry";
import * as Icons from "react-native-heroicons/outline";

const Home = () => {
    return (
        <AppLayout>
            <View className="flex flex-col gap-y-10 px-4 mt-1">
                {/* Start with popular recipe */}
                <View>
                    <View className="flex flex-col mb-2">
                        <View className="flex flex-row gap-x-2 items-center">
                            <Icons.FireIcon
                                className="color-purple-400"
                            />
                            <Text className="text-xl font-black">
                                Recettes populaires
                            </Text>
                        </View>
                        <Text className="text-sm font-thin">
                            Retrouvez les recettes les plus aimées
                        </Text>
                    </View>
                    <PopularRecipe />
                </View>

                {/* Find recipes by country */}
                <View>
                    <View className="flex flex-col mb-2">
                        <View className="flex flex-row gap-x-2 items-center">
                            <Icons.GlobeEuropeAfricaIcon
                                className="color-purple-400"
                            />
                            <Text className="text-xl font-black">
                                Trouvez par pays
                            </Text>
                        </View>
                        <Text className="text-sm font-thin">
                            Retrouvez les recettes phares de chaque pays
                        </Text>
                    </View>
                </View>
                <RecipeByCountry />
            </View>
        </AppLayout>
    );
}
export default Home;