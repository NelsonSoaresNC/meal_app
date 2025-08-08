import { createContext, useState, ReactNode } from "react";
import { FavoriteContext } from "../../types/types";

export const FavoritesContext = createContext<FavoriteContext>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {}
});

type FavoritesContextProviderProps = {
  children: ReactNode;
};

export default function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [favoriteMealIds, setFavoriteMealsIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
  }

  const value: FavoriteContext = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
