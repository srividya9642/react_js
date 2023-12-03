import React from 'react'
import {gmAction,gnAction} from './redux/message/message.action'

import {useDispatch,useSelector} from 'react-redux'

const Message = ()=>{

    let  dispatch = useDispatch()
    let Message = useSelector((state)=>{
        return state
    })
    let gmHandler= ()=>{
        //dispatch redux action
        dispatch(gmAction())
    }
    let gnHandler= ()=>{
        //dispatch rerdux action
        dispatch(gnAction())
    }

    return(
        <div>
            <h3>Message component</h3>
            <pre>{JSON.stringify(message)}</pre>
            <h2>value:{message.msg}</h2>
            <button onClick={gmHandler}></button>
            <button onClick={gnHandler}></button>
        </div>
    )
}

export default Message