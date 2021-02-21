import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useInterval from 'use-interval';
import { NumberParam, useQueryParam } from 'use-query-params';

import colors from '../colors.json';
import { randomElement, randomInt } from '../utils';

export default function Color() {
  const [color, setColor] = useState(colors[0]);
  const [toggle, setToggle] = useState(true);
  const [seconds] = useQueryParam('seconds', NumberParam);

  useEffect(() => {
    selectRandom();
  }, []);

  useInterval(
    () => {
      selectRandom();
    },
    seconds ? seconds * 1000 : 10000
  );

  const selectRandom = () => {
    const c = randomElement(colors);
    setColor(c);
  };

  return (
    <Box
      minH="100vh"
      minW="100vw"
      bg={color?.colors[0]}
      // bg={`linear-gradient(${randomInt(360)}deg, ${color?.colors[0]} 50%, ${
      //   color?.colors[1]
      // } 50.05%)`}
      onClick={() => {
        selectRandom();
        setToggle(!toggle);
      }}
      userSelect="none"
      transition="all 0.8s ease"
    >
      <Box
        pos="absolute"
        top="50%"
        left="-100%"
        right="-100%"
        bottom="-100%"
        transition="all 0.8s ease"
        transformOrigin="top"
        bg={color?.colors[1]}
        transform={`rotate(${randomInt(360)}deg)`}
      />
    </Box>
  );
}
