import React from 'react'

import Message from './Message/Message'

class App extends Component{

  render(){
    return<div>
      <h1>App components</h1>
      <hr/>
      <Message/>
      <hr/>
      <Message/>
    </div>
  }
}

export default App