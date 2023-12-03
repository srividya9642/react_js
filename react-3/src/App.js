

import { Fragment } from 'react';
import  Listrender from './rendering/Listrendering';
import Conditionalrender from './rendering/Conditionalrender';

import Register from './form Handling/Register';


function App() {
    return (
      <Fragment>
        <product/>
        <hr/>
        <Listrender/>
        <hr/>
        <Conditionalrender/>
        <hr/>
        <login/>
        <hr/>
        <Register/>
      </Fragment>
      
    );
  }
      
  export default App;