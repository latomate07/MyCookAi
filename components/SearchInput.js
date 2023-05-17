import { View, TextInput } from "react-native";
import * as Icons from "react-native-heroicons/outline";

export default function SearchInput(props) {
    return (
        <View {...props} className="bg-inherit flex relative items-center flex-row gap-x-2">
            <Icons.MagnifyingGlassIcon
                className="absolute left-2 w-10 h-10 color-purple-300 z-10"
            />
            <TextInput
                className="pl-10 pr-4 pt-4 pb-4 bg-gray-200 rounded-full w-full"
                placeholder="Rechercher une recette"
            />
        </View>
    );
};