import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Box } from "@chakra-ui/react";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </Box>
  );
};
export default GameGrid;
