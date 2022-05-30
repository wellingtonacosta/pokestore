import React, { useState, useEffect } from "react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Card, CardActionArea, CardContent, CardMedia, TextField, AppBar, Toolbar, CardActions, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import api from "../../../api/api";

import { useRouteMatch } from "react-router";
import PokemonListItem from "./PokemonListItem";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface PokemonTypeResponse {
  pokemon: PokemonItem[];
}

interface PokemonItem {
  pokemon: Pokemon;
  slot: number;
}

export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonParamsType {
  type: string;
}

const PokemonList: React.FC = () => {
  const [fetchedPokemons, setFethechedPokemons] = useState<PokemonItem[]>([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const { params } = useRouteMatch<PokemonParamsType>();
  const classes = useStyles();
  console.log(params.type);

  useEffect(() => {
    api.get<PokemonTypeResponse>(`type/${params.type}`).then((response) => {
      setFethechedPokemons(response.data.pokemon);
    });
  }, [params.type]);

  return (
    <>
      <CssBaseline />
      <Box mb={3}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Link to="/">
              <Button variant="contained">
                <ArrowBackIcon />
              </Button>
            </Link>
            <Box m={2}>
              <Typography variant="h6" noWrap>
                {params.type}
              </Typography>
            </Box>

            <TextField style={{ backgroundColor: "white" }} id="outlined-basic" label="Digite seu pokemon" variant="outlined" onChange={(event) => setSearchPokemon(event.target.value)} />
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}>
        {fetchedPokemons?.map(({ pokemon }) => (
          <Grid item xs={2}>
            <PokemonListItem pokemon={pokemon} key={pokemon.name} />
          </Grid>
        ))}
      </Grid>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem onClick={alert} button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="carrinho" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default PokemonList;
