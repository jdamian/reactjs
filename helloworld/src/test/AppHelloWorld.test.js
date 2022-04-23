import React from 'react';
import {render} from '@testing-library/react';
import AppHelloWorld from '../AppHelloWorld';

describe('Tests in AppHelloWorld', () => {
  test('should saludo="Hello World"', () => {
     
    const mensaje= 'Hello World';

    const {getByText} = render(<AppHelloWorld mensaje={mensaje}/>);

    expect(getByText(mensaje)).toBeInTheDocument();
  
  })
});
