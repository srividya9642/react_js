let GM='GM'
let GN='GN'
let gmAction=()=>{
    console.log("gm Action")
    return{type:GM     }
}
let gnAction =()=>{
    console.log("gn Action")
    return{type:GN}
}

export {gmAction,gnAction,GM,GN}
