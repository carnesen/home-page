import React from 'react'
import {shallow} from 'enzyme'

import Root from '../root'

describe('root-router', function () {
  it('renders', function () {
    shallow(<Root />)
  })
})
