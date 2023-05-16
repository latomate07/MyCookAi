import React, { useState } from "react";
import { FlatList } from "react-native";
import Recipe from "./Recipe.js";

const RecipeList = props => {
    const [recipes, setRecipes] = useState([]);
    const data = props.data;

    return (
        <FlatList 
            data={data}
            renderItem={({ item }) => <Recipe />}
        />
    )
}

export default RecipeList;