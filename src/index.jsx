import React from 'react';
import styled from 'styled-components';
import './main.css';

import { BusinessCard } from './business-card';

const Page = styled.div`
  width: 100%;
`;

export default function App() {
  return (
    <Page>
      <BusinessCard />
    </Page>
  );
}

App.propTypes = {};
