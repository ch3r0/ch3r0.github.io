import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="dpavatar.jpg" />
        </div>
        <p>
          Hi, I'm Sasank Reddy, a passionate self-taught frontEnd web developer
          from India, currently working at{' '}
          <a className="about__link" href="https://thecyberbyte.cf">
            CyberByte
          </a>{' '}
          I focus on creating high performance, well engineered, and elegant services as a full stack engineer and a developer. 
          I have experience developing scalable backend AI skill services for enterprise applications like google-assistant and amazon alexa, and Iam now creating my own AI named secktor while in parallel finding great fulfillment designing and implementing beautiful user interfaces.
          Academically, I have obtained a First-Class pass mark in 10th class from my local school , where I graduated with the second highest grade average in the class of 2020.
          Shortly after graduating from{' '}
          <a className="about__link" href="https://padmavathividyalaya.edu.in/">
            PadVid
          </a>{' '}
    I created the engineering team at CYBERBYTE where I work on a wide variety of interesting and meaningful projects on a daily basis.
          <br />
          <br />
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
