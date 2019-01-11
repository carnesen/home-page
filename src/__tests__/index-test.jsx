import React from 'react';
import { shallow } from 'enzyme';

import App from '..';

describe('root-router', () => {
  it('renders', () => {
    shallow(<App />);
  });
});
