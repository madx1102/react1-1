import React, { useEffect, useState } from "react"

export default function Midterm(){
    
    const [F, setF] = useState("");

    const a = () =>setF((F)=> F = '사과');
    const o = () => setF((F)=> F = '오렌지');
    const b = () => setF((F)=> F = '바나나');
    return<div>
    <h1>{`당신은 어떤 과일을 좋아하나요?${F}`}</h1>
    <button onClick={a}>사과</button>
    <button onClick={o}>오렌지</button>
    <button onClick={b}>바나나</button>
</div>;
}



   


