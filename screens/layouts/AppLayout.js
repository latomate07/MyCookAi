import { View } from "react-native";
import Header from "../partials/Header";

const AppLayout = (props) => {
    return (
        <View className="h-screen m-0 p-0">
            <Header />
            <View>
                {props.children}
            </View>
        </View>
    );
};

export default AppLayout;