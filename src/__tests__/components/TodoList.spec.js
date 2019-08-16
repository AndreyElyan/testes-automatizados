import React from 'react';
import { mount } from 'enzyme';
import TodoList from '../../ToDoList'

it('should render the list and button', () => {
  const wrapper = mount(<TodoList />);

  expect(wrapper.find('ul').exists()).toBe(true);
  expect(wrapper.find('button').exists()).toBe(true);
})