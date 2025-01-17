import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/profile-pic1.png';
import classNames from 'classnames';
import EmojiBullet from './EmojiBullet';
import SocialIcon from './SocialIcon';
import { Box } from '@mui/material';
import { info } from '../../info/Info';
import hand from '../../img/hand.png';

export default function Home() {
  return (
    <Box
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      marginTop={{xs:'40px', lg:'0px'}}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}>
      <Box
        className={classNames(Style.avatar, Style.shadowed)}
        alt={'image of developer'}
        style={{ background: info.gradient }}
        component={'img'}
        src={me}
        width={{ xs: '35vh', md: '40vh' }}
        height={{ xs: '35vh', md: '40vh' }}
        borderRadius={'50%'}
        p={'0.75rem'}
        mb={{ xs: '1rem', sm: 0 }}
        mr={{ xs: 0, md: '2rem' }}
      />
      <Box  width={{ xs: '50vh', md: '75vh' }}>
        <h1>
          Hi, I'm{' '}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
            {info.firstName}
          </span>
          <span className={Style.hand}>
            <Box
              component={'img'}
              src={hand}
              width={{ xs: '3vh', md: '5vh' }}
              height={{ xs: '3vh', md: '5vh' }}
            />
          </span>
        </h1>
        <h2>
          I'm {info.position}
          <h6>{info.skill}.</h6>
        </h2>

        <Box component={'ul'} p={'0.8rem'}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>

        <Box
          display={'flex'}
          gap={'1.5rem'}
          justifyContent={'start'}
          fontSize={{ xs: '2rem', md: '2.5rem' }}>
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
