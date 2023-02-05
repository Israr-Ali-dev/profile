import React from 'react';
import { Box } from '@mui/material';

function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <Box
      component={'li'}
      fontSize={'1rem'}
      lineHeight={1.5}
      style={{
        cursor: 'default',
        display: 'flex',
        alignItems: 'start',
        marginBottom: '5px',
      }}>
      <Box
        component={'span'}
        aria-label='cheese'
        role='img'
        mr={{ xs: '0.5rem', md: '1rem' }}
        fontSize={'1.5rem'}>
        <Box
          component={'img'}
          src={emoji}
          width={{ xs: '2vh', md: '3vh' }}
          height={{ xs: '2vh', md: '3vh' }}
          //   borderRadius={'50%'}
          //   p={'0.75rem'}
          //   mb={{ xs: '1rem', splaym: 0 }}
          //   mr={{ xs: 0, md: '2rem' }}
        />
      </Box>{' '}
      {text}
    </Box>
  );
}

export default EmojiBullet;
