import { View, Text } from "react-native";

const Recipe = ({ imageUrl, recipeName }) => {
    return (
        <View className="w-36 h-20 rounded-xl bg-purple-100 mx-2">
            <Text className="text-center text-gray-700 text-xs leading-[80px]">
                {recipeName}
            </Text>
        </View>
    );
};

export default Recipe;