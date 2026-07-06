import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  const addToWatchlist = (stock) => {
    const exists = watchlist.find((item) => item.id === stock.id);

    if (exists) return;

    const updated = [...watchlist, stock];

    setWatchlist(updated);

    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter((item) => item.id !== id);

    setWatchlist(updated);

    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}