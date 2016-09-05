import React from 'react';
import sinon from 'sinon';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import TestMochaPage from './TestMochaPage';


describe('<TestMochaPage />', () => {
    it('should have stardust header called \'Header\'', () => {
        const wrapper = shallow(<TestMochaPage />);
        wrapper.submitForm = sinon.spy();
        const actual = wrapper.find('Header').name();
        const expected = 'Header';

        expect(actual).to.equal(expected);
    });

    it('should have two inputs', function () {
        const wrapper = shallow(<TestMochaPage/>);
        expect(wrapper.find('Input')).to.have.length(2);
    });

    // it('password input should be hidden', () => {
    //     const wrapper = shallow(<TestMochaPage />);
    //     const actual = wrapper.find('.login-pass').prop('type');
    //     const expected = 'password';

    //     expect(actual).to.equal(expected);
    // });

    // it('should be password input type', () => {
    //     const wrapper = shallow(<TestMochaPage />);
    //     const actual = wrapper.find('login-user').text();
    //     const expected = 'login-user';

    //     expect(actual).to.equal(expected);
    // }); 

    // it('should be password input type', () => {
    //     const wrapper = shallow(<TestMochaPage />);
    //     const actual = wrapper.find('login-pass').prop('className');
    //     const expected = 'login-pass';

    //     expect(actual).to.equal(expected);
    // }); 

    // it('should have a button', function () {
    //     const wrapper = shallow(<TestMochaPage/>);
    //     expect(wrapper.find('.login-button')).to.have.length(1);
    // });

    it('should link to dashboard page', () => {
        const wrapper = shallow(<TestMochaPage />);
        const actual = wrapper.findWhere(n => n.prop('to') === 'dashboard').length;
        const expected = 1;

        expect(actual).to.be.equal(expected);
    });

    it('Simulate Click', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<TestMochaPage submitForm={spy}/>);
        wrapper.find('Button').simulate('click');

        expect(spy.called).to.equal(false);

    });
});
