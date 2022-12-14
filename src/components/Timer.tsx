import { FC, useEffect, useState } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import { Box, Stat, StatLabel, StatNumber, Button } from '@chakra-ui/react';

type Props = { maxCount?: number };
const MAX_COUNT = 60;

const Timer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
  const [timeLeft, setTimeLeft] = useState(maxCount);
  const tick = (): void => setTimeLeft((t) => t - 1);
  const reset = (): void => setTimeLeft(maxCount);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(maxCount);
  }, [timeLeft, maxCount]);

  return (
    <Box p={5} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Stat mb={2}>
        <StatLabel fontSize={18}>Count</StatLabel>
        <StatNumber fontSize={42}>{timeLeft}</StatNumber>
      </Stat>
      <Button
        w="xs"
        colorScheme="red"
        variant="solid"
        leftIcon={<ResetIcon />}
        onClick={reset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default Timer;
