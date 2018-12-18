import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { parseIDFromURL, characterImage } from "../utils/api";
import {
  Flex,
  Box,
  Card as BaseCard,
  Subhead as BaseSubhead,
  Small,
  BackgroundImage,
  ButtonOutline
} from "rebass";

const Subhead = styled(BaseSubhead)`
  color: white;
`;

const Card = styled(BaseCard)`
  :hover {
    cursor: pointer;
  }
`;

function CharacterItem({ character, history }) {
  let id = parseIDFromURL(character.url);
  return (
    <Box width={[1, 1 / 2]} p={2}>
      <Card onClick={() => history.push(`/character/${id}`)}>
        <BackgroundImage src={characterImage(id)} />
        <Box p={2}>
          <Subhead fontSize={2} children={character.name} />
          <Small>{character.films.length} movies</Small>
        </Box>
      </Card>
    </Box>
  );
}

const Character = withRouter(CharacterItem);

function CharactersList({ characters, handleNextPage, loadingMore }) {
  return (
    <Box>
      <Flex mx={-2} flexWrap="wrap">
        {characters.map((character, i) => {
          return <Character key={i} character={character} />;
        })}
      </Flex>
      {handleNextPage ? (
        <ButtonOutline
          css={{
            width: "100%"
          }}
          p={3}
          my={3}
          onClick={handleNextPage}
          children={loadingMore ? "loading..." : "More"}
          disabled={loadingMore}
        />
      ) : null}
    </Box>
  );
}

export default CharactersList;
