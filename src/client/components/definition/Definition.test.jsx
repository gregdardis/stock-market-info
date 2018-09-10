import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Definition from './Definition';

const mockTitle = 'P/E';
const mockDefinition = 'P/E is price-to-earnings';
const mockEquations = ['equation1', 'equation2'];

describe('<Definition />', () => {
  it('has expected className for styling', () => {
    const wrapper = shallow(
      <Definition definition={{
        title: mockTitle,
        definition: mockDefinition
      }} />
    );
    expect(wrapper).to.have.className('definition');
  });
  it('displays the provided title', () => {
    const wrapper = shallow(
      <Definition definition={{
        title: mockTitle
      }} />
    );
    const title = wrapper.find('h2').first().text();

    expect(title).to.equal(mockTitle);
  });
  it('displays the provided definition', () => {
    const wrapper = shallow(
      <Definition definition={{
        definition: mockDefinition
      }} />
    );
    const definition = wrapper.find('p').first().text();
    expect(definition).to.equal(mockDefinition);
  });
  it('displays correct text in 2 equations', () => {
    const wrapper = shallow(
      <Definition definition={{
        equations: mockEquations
      }} />
    );
    expect(wrapper.find('p').at(0).text()).to.equal('$$equation1$$');
    expect(wrapper.find('p').at(1).text()).to.equal('$$equation2$$');
  });
});