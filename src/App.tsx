import { Button, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px and above
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
      </GridItem>
      <GridItem
        area="aside"
        bg="blue"
        display={{ base: "none", lg: "block" }} // Hide on smaller screens
      >
        Aside
      </GridItem>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
