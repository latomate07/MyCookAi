import SearchInput from "../../components/SearchInput";
import AppLayout from "../layouts/AppLayout";
import { View, Text } from "react-native";

const Generator = () => {
    return (
        <AppLayout withHeader="false">
            <View className="bg-inherit py-4 px-4">
                <SearchInput />
            </View>
            
        </AppLayout>
    );
}

export default Generator;