import React from 'react';

import { offersData } from './offersData';
import { OffersWrap, OffersP, OffersH1, Wrapper } from './OffersElements/OffersStyles';
import Card from './OffersElements/Card';

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
          <Card
            key={offer.id}
            image={offer.img}
            alt={offer.alt}
            title={offer.title}
            desc={offer.desc}
          />
        ))}
      </OffersWrap>
    </Wrapper>
  );
};

export default Offers;
