'use strict';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('<App />', function(){
  const wrapper = shallow(<App />);

  it('should render a Gallery', () => {
    expect(wrapper.find('Gallery')).to.have.length(1);
  });

  it('should render an Upload form', () => {
    expect(wrapper.find('Upload')).to.have.length(1);
  });
});
