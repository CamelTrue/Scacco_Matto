import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useSpring, animated } from 'react-spring';

const AnimatedBox = animated(Box);

const Item = ({ children, data, position }) => {
  const boxAnimation = useSpring({
    from: {
      zIndex: 1,
      opacity: 0,
      transform: `translateX(${position.x}px) translateY(${position.y}px)`,
    },
    to: {
      zIndex: 0,
      opacity: 1,
      transform: 'translateY(150px)',
    },
    config: { duration: 250 },
  });

  return (
    <AnimatedBox
      sx={{
        bgcolor: 'white',
        color: 'black',
        textAlign: 'center',
        height: `${data}px`,
        width: `${data}px`,
        borderRadius: '15px',
        boxShadow:
          '2px 2px 4px rgba(255, 255, 255, 0),' +
          '4px 4px 8px rgba(240, 210, 210, 0.2),' +
          '8px 8px 16px rgba(233, 185, 185, 0.5),' +
          '16px 16px 32px rgba(229, 166, 166, 1)',
        py: 2,
        px: 4,
      }}
      style={boxAnimation}
    >
      {children}
    </AnimatedBox>
  );
};

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [positions, setPositions] = useState([]);

  const generateRandomNumber = () => {
    const randomValue = Math.random();
    const randomNumInRange = Math.floor(randomValue * 101) + 200;
    const randomPositions = Array.from({ length: 4 }, () => ({
      x: Math.floor(Math.random() * 100) + 50,
      y: Math.floor(Math.random() * 100) + 50,
    }));

    setRandomNumber(randomNumInRange);
    setPositions(randomPositions);
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <header className='container-header'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} direction='column-reverse' alignItems='center' display='flex'>
          <Grid container spacing={0} alignItems='center'>
            <Grid item xs={12} md={3.5}>
              <Item data={randomNumber} position={positions[0]}>
                xs=12 md=6
              </Item>
            </Grid>
            <Grid item xs={12} md={3}>
              <Item data={randomNumber} position={positions[1]}>
                xs=12 md=3
              </Item>
            </Grid>
            <Grid item xs={10} md={6}>
              <Item data={randomNumber} position={positions[2]}>
                xs=12 md=3
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item data={randomNumber} position={positions[3]}>
                xs=12 md=6
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}
