import React, { useRef } from "react";

export default function FB (props){
    const inputElem = useRef(null)

    const onButtonClick = () =>{
        inputElem.current.focus()
    }
    return(
        <>
            <input ref={inputElem} type="text"/>
            <button inClock={onButtonClick}>F the input</button>
        </>
    )
}
