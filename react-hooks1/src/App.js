import React from "react";
import UseEffectEx from "./hooks/UseEffectEx";
import UsestateEx from  "./hooks/UsestateEx";
import ReistrationForm from "./hooks/ReistrationForm ";
import Factorial from "./hooks/UseMemo";
function App(){
  return(
    <>
    <h1>App Comp</h1>
    <UsestateEx/>
    <hr/>
    <UseEffectEx/>
    <hr/>
    <ReistrationForm />
    <hr/>
    <Factorial/>
    </>
  )
}
export default App