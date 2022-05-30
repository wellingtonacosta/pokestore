import React from "react";
import { Link } from "react-router-dom";
import { Button, Avatar } from "@material-ui/core";
import { DivWrapper } from "./styles";
import Icons from "../../../Icons";

const ChoosePokemon = () => {
  return (
    <DivWrapper>
      <Button component={Link} to={`/pokemonlist/grass`}>
        <Avatar src="/assets/images/grass.svg" alt="Icon Grass" />
      </Button>
      <Button component={Link} to={`/pokemonlist/fire`}>
        <Avatar src="/assets/images/fire.svg" alt="Icon Fire" />
      </Button>
      <Button component={Link} to={`/pokemonlist/psychic`}>
        <Avatar src="/assets/images/psychic.svg" alt="Icon psychic" />
      </Button>
      <Button component={Link} to={`/pokemonlist/rock`}>
        <Avatar src="/assets/images/rock.svg" alt="Icon rock" />
      </Button>
      <Button component={Link} to={`/pokemonlist/water`}>
        <Avatar src="/assets/images/water.svg" alt="Icon water" />
      </Button>
    </DivWrapper>
  );
};

export default ChoosePokemon;
