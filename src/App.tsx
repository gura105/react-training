import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import 'App.css';
import Timer from 'components/Timer';

console.dir(import.meta.env);

const App: FC = () => {
  return (
    <div className="container">
      <Heading size="lg" as="h1" my={12}>
        Timer
      </Heading>
      <Timer />
    </div>
  );
};

export default App;
