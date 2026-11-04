import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext(null);
const FAVORITES_STORAGE_KEY = "biblio-tec-favorites";

function leerFavoritosIniciales() {
  try {
    const guardado = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return guardado ? JSON.parse(guardado) : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favoritos, setFavoritos] = useState(leerFavoritosIniciales);

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoritos));
  }, [favoritos]);

  function toggleFavorito(bookId) {
    setFavoritos((actuales) =>
      actuales.includes(bookId)
        ? actuales.filter((id) => id !== bookId)
        : [...actuales, bookId]
    );
  }

  function esFavorito(bookId) {
    return favoritos.includes(bookId);
  }

  const value = useMemo(() => ({
    favoritos,
    toggleFavorito,
    esFavorito,
  }), [favoritos]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites debe utilizarse dentro de FavoritesProvider");
  return context;
}
