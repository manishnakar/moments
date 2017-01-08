'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('<App />', function(){
  const wrapper = shallow(<App />);

  it('should render a nav bar', () => {
    expect(wrapper.find('NavBar')).to.have.length(1);
  });

  it('should render a page header', () => {
    expect(wrapper.find('PageHeader')).to.have.length(1);
  });
});
