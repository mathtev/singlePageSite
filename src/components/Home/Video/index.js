import React from 'react';
import ReactPlayer from 'react-player';
import { Wrapper, VideoH1, VideoP, PlayerWrap } from './VideoElements';
import playImg from '../../../assets/images/Play.png'
import womanImg from '../../../assets/images/woman.png'

const Video = () => {
  return (
    <Wrapper>
      <VideoH1>What our community is saying?</VideoH1>
      <VideoP>
        A mission-driven company that invest <br /> 
        in and builds healthier living
      </VideoP>
      <PlayerWrap>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jznH_fltcYA&ab_channel=EurovisionSongContestEurovisionSongContest"
          width="100%"
          height="603px"
          playing
          playIcon={<img src={playImg} alt="play" />}
          light={womanImg}
        />
      </PlayerWrap>
    </Wrapper>
  );
};

export default Video;
