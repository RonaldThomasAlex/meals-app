import { useLayoutEffect } from "react";

import MealList from "../components/mealList/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
