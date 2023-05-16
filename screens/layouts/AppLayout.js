import { View } from "react-native";
import Header from "../partials/Header";
import Menu from "../partials/Menu";

const AppLayout = (props) => {
    return (
        <View className="relative h-screen m-0 p-0">
            <Header />
            <View>
                {props.children}
            </View>
            <Menu />
        </View>
    );
};

export default AppLayout;