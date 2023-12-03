import React,{Component} from "react"
import Hello from "./Navbar/Hello"
import Navbar from './Navbar/Navbar'
class App extends Component{
    render(){
        return<>
        <Navbar/>
        <Hello/>
        
        </>
    }
}
export default App