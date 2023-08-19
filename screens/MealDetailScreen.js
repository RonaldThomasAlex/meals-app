import { useLayoutEffect } from "react";
import { Text } from "react-native";

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealId
    });
  }, [mealId, route]);

  return <Text>Meal detail screen</Text>;
};

export default MealDetailScreen;
