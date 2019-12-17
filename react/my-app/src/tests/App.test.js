import React from 'react';
import {expect} from 'chai';
import {shallow,  mount} from 'enzyme';
import App from '../App';


import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Test suite for App component", function(){

	it("only one element in App class", function(){
		const wrapper = shallow(<App />);
		expect(wrapper.find(".App")).length(1);
	});

    it("Dogs list containts two dogs", function(){
        const wrapper = mount(<App />);
        expect(wrapper.find('Dogs').find('DogItem')).length(2);
    });

    it("successfully add dog to list when form submitted", function(){
            const wrapper = mount(<App />);
            const adddog = wrapper.find('AddDog');

            adddog.find('#dogName').instance().value = 'Lola';
            adddog.find('#imageURL').instance().value = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgs6GC_l7PYm_TnmVHfChzcY2dzgYWQ4KiUFwc96-ESMe8x4GD';
            adddog.find('#dogBreed').instance().value = 'San bernanrdo';

            const form = adddog.find('form');
            form.simulate('submit');

            expect(wrapper.find('Dogs').find('DogItem')).length(3);
            expect(wrapper.state().dogs[2].name == 'Lola');

    });

    it("removes dog from list when deleted", function(){
        const wrapper = mount(<App />);
        const deleteLink = wrapper.find('a').first();

        deleteLink.simulate('click');

        expect(wrapper.find('Dogs').find('DogItem')).length(1);
    });

});