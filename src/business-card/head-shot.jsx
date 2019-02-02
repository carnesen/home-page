import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
  /* max-width: 300px; */
`;

const Image = styled.img`
  /* object-fit: contain; */
  max-width: 300px;
  min-width: 200px;
  width: 100%;
  border-radius: 5%;
`;

export function HeadShot() {
  return (
    <Wrapper>
      <Image src="/static/images/me.jpg" alt="image of carnesen" />
      </Wrapper>
  );
}

HeadShot.propTypes = {};
