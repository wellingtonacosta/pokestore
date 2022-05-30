import React, { useEffect, useState } from "react";
import { Pokemon } from ".";
import { Card, Typography, Button, CardContent, CardMedia, CardActions } from "@material-ui/core";
import api from "../../../api/api";

interface PokemonListItemProps {
  pokemon: Pokemon;
}

interface PokemonDetailsResponse {
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    api.get<PokemonDetailsResponse>(pokemon.url).then((response) => {
      if (response.data.sprites.other.dream_world.front_default) setImage(response.data.sprites.other.dream_world.front_default);
      else if (response.data.sprites.front_default) setImage(response.data.sprites.front_default);
      else if (response.data.sprites.other["official-artwork"].front_default) setImage(response.data.sprites.other["official-artwork"].front_default);
    });
  }, []);

  return (
    <Card style={{ maxWidth: 350 }}>
      <CardMedia component="img" height="140" image={image} alt={pokemon.name} />
      <CardContent>
        <Typography variant="subtitle1" component="div">
          {pokemon.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </Card>
  );
};

export default PokemonListItem;
