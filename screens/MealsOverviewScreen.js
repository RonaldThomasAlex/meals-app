import { View, FlatList, Text, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
