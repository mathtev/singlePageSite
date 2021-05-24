import React from 'react';

import { offersData } from './offersData';
import {
  Card,
  OffersWrap,
  OffersP,
  OffersH1,
  Wrapper
} from './OffersElements';

const Offers = () => {
  return (
    <Wrapper>
      <OffersH1>What you’re getting?</OffersH1>
      <OffersP>
        We bring you personalized development programs that are backed by
        research and crafted from the years of experience
      </OffersP>
      <OffersWrap>
        {offersData.map((offer) => (
          <Card key={offer.id}>
            <img src={offer.img} alt={offer.alt} />
            <h4>{offer.title}</h4>
            <p>{offer.desc}</p>
          </Card>
        ))}
      </OffersWrap>
    </Wrapper>
  );
};

export default Offers;
