import React from 'react';

import styled from 'styled-components';
import { jitterKeyframes } from './jitter-keyframes';

const links = [
  ['instagram', 'https://www.instagram.com/chrisarnesen'],
  ['facebook', 'https://www.facebook.com/Mark.Christian.Arnesen'],
  ['github', 'https://github.com/carnesen'],
  ['linkedin', 'https://www.linkedin.com/in/carnesen'],
  ['twitter', 'https://www.twitter.com/chrisarnesen'],
  ['yelp', 'https://carnesen.yelp.com'],
];

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  width: 8%;
`;

const Image = styled.img`
  width: 100%;
  :not(:active) {
    -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }
  :hover :not(:active) {
    animation: ${jitterKeyframes('0.5px')} 0.5s;
    animation-iteration-count: infinite;
  }
  :active {
    transform: translateY(2px);
  }
`;

export function SocialLinks() {
  return (
    <Wrapper>
      {links.map(([src, href]) => (
        <ImageWrapper key={href}>
          <a href={href}>
            <Image src={`/static/images/${src}.svg`} alt={`icon for ${href}`} />
          </a>
        </ImageWrapper>
      ))}
    </Wrapper>
  );
}

SocialLinks.propTypes = {};
