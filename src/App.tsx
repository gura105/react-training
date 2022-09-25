import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import CharacterList from 'components/CharacterList';
import type { Character } from 'components/CharacterList';
import 'App.css';

console.dir(import.meta.env);

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: 'Hanamich Sakuragi',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: 'Kaede Rukawa',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: 'Ryota Miyagi',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: 'Micchi',
      grade: 3,
    },
    {
      id: 5,
      name: 'Akagi',
      grade: 3,
      height: 197,
    },
  ];

  return (
    <div className="container">
      <Heading size="lg" as="h1" my={12}>
        SLAM DUNK characters
      </Heading>
      <CharacterList school="SHOHOKU HIGH SCHOOL" characters={characters} />
    </div>
  );
};

export default App;
