import React from 'react'; 
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('Component renders without crashing', () => {
  render(<ContactForm />);
});

test('inputs display correct labels', () => {
  // ARRANGE
  const { getByLabelText } = render(<ContactForm />);

  const firstNameLabel = getByLabelText(/First Name*/i);  

  expect(firstNameLabel).toBeInTheDocument();
  // ACT 


  // ASSERT


});