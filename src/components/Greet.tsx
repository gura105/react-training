import { FC } from "react";

type Props = { name: string; times?: number };

const Greet: FC<Props> = ({ name, times = 1 }) => {
  return (
    <ul>
      {[...Array(times)].map(() => (
        <li>Hello, {name}!</li>
      ))}
    </ul>
  );
};

export default Greet;
