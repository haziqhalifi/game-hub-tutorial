import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        if (res.data) {
          setGames(res.data.results);
        } else {
          setError("Failed to fetch games");
        }
      })
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
};

export default useGames;
