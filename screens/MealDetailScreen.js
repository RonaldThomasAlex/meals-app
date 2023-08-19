import { useLayoutEffect } from "react";
import { Text, View, Image } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealId
    });
  }, [mealId, route]);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />

      <Text>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />

      <Text>Ingredients</Text>

      {selectedMeal.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}

      <Text>Steps</Text>

      {selectedMeal.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
};

export default MealDetailScreen;
