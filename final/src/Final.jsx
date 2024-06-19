import React from "react";
import { useState } from 'react'

export default function BackgroundColorChange(){

    const [name, setname] = useState('');
    function onChange(event){								
        // 매개변수 'event'는 이벤트가 발생한 태그의 정보를 가져옴
        setname(event.target.value)							
        // 값이 바뀔때마다 setname으로 name값을 변경
    }
    const style = {
        backgroundColor : 'Purple'
    }
    return(
        <div style={style}>
            <div>
                <p>Background Color : {name}<input type="text" value={'Purple'} onChange={onChange}></input></p> 
            </div>        
        </div>
    );
   

    
}