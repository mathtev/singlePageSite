import React from 'react';
import Stat from './StatsElements/Stat.js';
import {
  Wrapper
} from './StatsElements/StatsStyles.js';

const Stats = () => {
  return (
    <Wrapper>
      <Stat value={'230+'} desc={'Scientifically based tests'} />
      <Stat value={'10.000+'} desc={'Medical recommendations'} />
      <Stat value={'25M+'} desc={'Students learning'} />
    </Wrapper>
  );
};

export default Stats;
