import type { FC } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

export interface Character {
  id: number;
  name: string;
  grade: number;
  height?: number;
}

type Props = {
  school: string;
  characters: Character[];
};

const CharacterList: FC<Props> = ({ school, characters }) => (
  <div>
    <h2>{school}</h2>
    <List>
      {characters.map((character) => (
        <ListItem key={character.id} m={6}>
          <Flex>
            <Avatar size="md" bg="teal.500" />
            <Box textAlign="left" ml={3}>
              <Text>{character.name}</Text>
              <Text as="span">grage {character.grade}</Text>
              <Text as="span" ml={2}>
                {character.height ?? '???'} cm
              </Text>
            </Box>
          </Flex>
        </ListItem>
      ))}
    </List>
  </div>
);

export default CharacterList;
