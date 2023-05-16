import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Recipe from "./Recipe";

const defaultData = [
    {
        "id": 1,
        "nom": "Pizza Margherita",
        "image": "https://example.com/images/pizza_margherita.jpg"
    },
    {
        "id": 2,
        "nom": "Sushi",
        "image": "https://example.com/images/sushi.jpg"
    },
    {
        "id": 3,
        "nom": "Poulet au curry",
        "image": "https://example.com/images/poulet_curry.jpg"
    },
    {
        "id": 4,
        "nom": "Tacos",
        "image": "https://example.com/images/tacos.jpg"
    },
    {
        "id": 5,
        "nom": "Spaghetti Bolognese",
        "image": "https://example.com/images/spaghetti_bolognese.jpg"
    },
    {
        "id": 6,
        "nom": "Ceviche",
        "image": "https://example.com/images/ceviche.jpg"
    },
    {
        "id": 7,
        "nom": "Pad thaï",
        "image": "https://example.com/images/pad_thai.jpg"
    },
    {
        "id": 8,
        "nom": "Burger",
        "image": "https://example.com/images/burger.jpg"
    },
    {
        "id": 9,
        "nom": "Goulash",
        "image": "https://example.com/images/goulash.jpg"
    },
    {
        "id": 10,
        "nom": "Samosa",
        "image": "https://example.com/images/samosa.jpg"
    }
];

const PopularRecipe = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator="false">
            <FlatList
                data={defaultData}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Recipe recipeName={item.nom} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
                horizontal
            />
        </ScrollView>
    );
}

export default PopularRecipe;