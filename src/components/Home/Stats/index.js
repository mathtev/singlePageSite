import React from 'react';

import {Wrapper, Stat, StatValue, StatDescription} from './StatsElements.js';

const Stats = () => {
  return (
    <Wrapper>
      <Stat>
        <StatValue>230+</StatValue>
        <StatDescription>Scientifically based tests</StatDescription>
      </Stat>
      <Stat>
        <StatValue>10.000+</StatValue>
        <StatDescription>Medical recommendations</StatDescription>
      </Stat>
      <Stat>
        <StatValue>25M+</StatValue>
        <StatDescription>Students learning</StatDescription>
      </Stat>
    </Wrapper>
  );
};

export default Stats;
