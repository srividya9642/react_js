import React,{component} from 'react'
import Message from'./Message/Message'
import {store} from './redux/store'
import { Provider } from 'react-redux'
class App extends component{
  render(){
    return(
      <div>
        <provider store={store}>
          <h3> App component</h3>
          <hr/>
          <Message/>
        </provider>
      </div>
    )
  }
}

export default App