export type NavigationType = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type FavoriteContext = {
  ids: string[],
  addFavorite: (id: string) => void,
  removeFavorite: (id: string) => void
}