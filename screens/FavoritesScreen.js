import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favotries-context";

import MealList from "../components/mealList/MealList";

const FavoritesScreen = () => {
  const favoriteContext = useContext(FavoritesContext);

  const favoriteMeal = MEALS.filter((meal) =>
    favoriteContext.ids.includes(meal.id)
  );

  if (favoriteMeal.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeal} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});
