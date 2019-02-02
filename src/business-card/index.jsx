import React from 'react';
import styled from 'styled-components';
import { HeadShot } from './head-shot';
import { NameTitle } from './name-title';
import { SocialLinks } from './social-links';
import { Card } from '../card';

const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;

export function BusinessCard() {
  return (
    <Card>
      <InnerWrapper>
        <HeadShot />
        <NameTitle />
      </InnerWrapper>
      <SocialLinks />
    </Card>
  );
}

BusinessCard.propTypes = {};
