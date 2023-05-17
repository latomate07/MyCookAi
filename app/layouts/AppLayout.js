import { SafeAreaView, View } from "react-native";
import Header from "../partials/Header";
import Menu from "../partials/Menu";
import { useRouter } from "expo-router";

const AppLayout = (props) => {
    const router = useRouter();

    return (
        <SafeAreaView className="relative h-screen m-0 p-0">
            {(!props.withHeader 
             ? <Header />
             : null )
             }
            <View>
                {props.children}
            </View>
            <Menu />
        </SafeAreaView>
    );
};

export default AppLayout;