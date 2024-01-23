import React from "react";
import * as styles from "./Card.styles";
import { Box, CardMedia, Typography } from "@mui/material";
import { ICardProps } from "./Card.type";

const CardPokemon = ({ pokemonData }: ICardProps) => {
  return (
    <Box sx={styles.Wrapper}>
      <Box sx={styles.InnerWrapper(pokemonData.types[0].type.name)}>
        <Box sx={styles.Content}>
          <Typography sx={styles.Order}>
            #{`${pokemonData.order}`.padStart(3, `0`)}
          </Typography>
          <Box sx={styles.MainInfo}>
            <Box sx={styles.ImageWrapper}>
              <CardMedia
                image={pokemonData.sprites.other.dream_world.front_default}
                title={pokemonData.name}
                component="img"
                loading="lazy"
              />
            </Box>
            <Box sx={styles.NameText}>{pokemonData.name}</Box>
            <Box sx={styles.TypeWrapper}>
              {pokemonData.types.map((singleType) => (
                <Box sx={styles.TypeName(singleType.type.name)}>
                  {singleType.type.name}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={styles.DetailsWrapper}>
          {pokemonData.base_experience && (
            <Box sx={styles.SmallCardWrapper}>
              <Typography sx={styles.Title}>Base Experience</Typography>
              <Typography sx={styles.Data}>
                {pokemonData.base_experience}
              </Typography>
            </Box>
          )}
          {pokemonData.height && (
            <Box sx={styles.SmallCardWrapper}>
              <Typography sx={styles.Title}>Height</Typography>
              <Typography sx={styles.Data}>{pokemonData.height}</Typography>
            </Box>
          )}
          {pokemonData.weight && (
            <Box sx={styles.SmallCardWrapper}>
              <Typography sx={styles.Title}>Weight</Typography>
              <Typography sx={styles.Data}>{pokemonData.weight}</Typography>
            </Box>
          )}
          {pokemonData.stats.map((singleStats) => {
            return (
              <Box sx={styles.SmallCardWrapper} key={singleStats.stat.name}>
                <Typography sx={styles.Title}>
                  {singleStats.stat.name}
                </Typography>
                <Typography sx={styles.Data}>
                  {singleStats.base_stat}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default CardPokemon;
