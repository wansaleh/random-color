import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useInterval from 'use-interval';
import { NumberParam, useQueryParam } from 'use-query-params';

import gradients from '../gradients.json';
import { randomElement, randomInt } from '../utils';

export default function Gradient() {
  const [gradient, setGradient] = useState(gradients[0]);
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
    const g = randomElement(gradients);
    setGradient({
      name: g.name,
      colors: g.colors,
      gradient: `linear-gradient(${randomInt(360)}deg, ${g.colors.join(', ')})`
    });
  };

  return (
    <Box
      minH="100vh"
      minW="100vw"
      bg={gradient?.gradient}
      onClick={() => {
        selectRandom();
        setToggle(!toggle);
      }}
      userSelect="none"
    >
      <Box
        pos="absolute"
        bottom="8"
        left="8"
        zIndex="2"
        fontWeight="700"
        fontSize="4xl"
        color="white"
        textShadow="0 0 20px rgba(0,0,0,0.5), 0 1px 0 rgba(0,0,0,0.25)"
        lineHeight="1.4"
        letterSpacing="tight"
      >
        <Box>{gradient.name}</Box>
        <Box
          fontSize="sm"
          fontWeight="500"
          letterSpacing="normal"
          textTransform="lowercase"
        >
          {gradient.colors.join(' to ')}
        </Box>
      </Box>
    </Box>
  );
}
