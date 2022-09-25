import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import 'App.css';
import Counter from 'components/Counter';

console.dir(import.meta.env);

const App: FC = () => {
  return (
    <div className="container">
      <Heading size="lg" as="h1" my={12}>
        Counter
      </Heading>
      <Counter />
    </div>
  );
};

export default App;
