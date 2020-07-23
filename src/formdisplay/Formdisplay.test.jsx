import React from 'react';
import { shallow } from 'enzyme';
import FormDisplay from './Formdisplay';


describe('FormDisplay component', () => {

  
  it('renders App', () => {
    const wrapper = shallow(< FormDisplay submitType={'put'} url={'safsd'} body={'4'} onChange={jest.fn().mockReturnThis()}/>);
    expect(wrapper).toMatchSnapshot();


  });


});