import React from 'react';
import styled from 'styled-components';
import { jitterKeyframes } from './jitter-keyframes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20em;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 0;
  text-align: center;
  color: #444444;
  :not(:active) {
    text-shadow: 1px 1px 2px black; 
  }
  :hover :not(:active) {
    animation: ${jitterKeyframes({magnitude: '1px', angle: '0'})} 0.5s;
    animation-iteration-count: infinite;
  }
  :active {
    transform: translateY(2px);
    transition-duration: 0.1s;
  }
`;

const FullName = styled.h1`
  font-size: 2em;
  font-weight: normal;
  margin-bottom: 0;
  margin-top: 0;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-indent: 10px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

export function NameTitle() {
  return (
    <Wrapper>
      <Link href="/static/documents/Chris_Arnesen.pdf">
        <FullName>Chris Arnesen</FullName>
        <Title>Web Engineer</Title>
      </Link>
    </Wrapper>
  );
}

NameTitle.propTypes = {};
