import React from "react";
import { Route, Switch } from "react-router-dom";
import ChoosePokemon from "../pages/Home/ChoosePokemon";
import PokemonList from "../pages/Shop/PokemonList";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ChoosePokemon} />
    <Route path="/pokemonlist/:type" component={PokemonList} />
    {/* <ThemeProvider theme={grass}>
  <Route path="/grass"/> 
 </ThemeProvider>
 <ThemeProvider theme={fire}>
  <Route path="/fire" /> 
 </ThemeProvider>
 <ThemeProvider theme={psychic}>
  <Route path="/psychic"/> 
 </ThemeProvider>
 <ThemeProvider theme={rock}>
  <Route path="/rock" /> 
 </ThemeProvider>
 <ThemeProvider theme={water}>
  <Route path="/water"/> 
 </ThemeProvider> */}
  </Switch>
);

export default Routes;
