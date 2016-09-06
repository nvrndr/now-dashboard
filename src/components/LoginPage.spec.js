import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import LoginPage from './LoginPage';


describe('<LoginPage />', () => {
  it('should have stardust header called \'Header\'', () => {
    const wrapper = shallow(<LoginPage />);
    const actual = wrapper.find('Header').name();
    const expected = 'Header';

    expect(actual).to.equal(expected);
  });

  it('should have two inputs', function () {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.find('Input')).to.have.length(2);
  });

  it('password input should be hidden', () => {
    const wrapper = shallow(<LoginPage />);
    const actual = wrapper.find('.login-pass').prop('type');
    const expected = 'password';

    expect(actual).to.equal(expected);
  });

   it('should have a button', function () {
    const wrapper = shallow(<LoginPage/>);
    expect(wrapper.find('.login-button')).to.have.length(1);
  });

  it('should link to dashboard page', () => {
    const wrapper = shallow(<LoginPage />);
    const actual = wrapper.findWhere(n => n.prop('to') === 'dashboard').length;
    const expected = 1;

    expect(actual).to.be.equal(expected);
  });

});
