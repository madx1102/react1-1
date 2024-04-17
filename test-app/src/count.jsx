import React, { useEffect, useState } from "react"

export default function Counter(props){
    const [count, setCount,setIsOnline] = useState(null)

    function hand(state){
        setIsOnline(state.isOnline)
    }

    useEffect(() => {
        ServerAPI.subUser(props.user.id, hand)
        return () =>{
            ServerAPI.subUser(props.user.id, hand)
        }
        //document.title = `총 ${count}번 클릭했습니다.`
    })
    if (isOnline == null){
        return '대기중'
    }

    return isOnline ? '온라인' : '오프라인'
}