import { useState, useEffect } from "react";

export default function useStatus (props){
    const [isOnline, setIsOnline] = useState(null)


    useEffect(()=>{
        function hand(status){
            setIsOnline(status.isOnline)
        }

        ServerAPI.subscibeUserStatus(props.user.id, hand)
        return()=>{
            ServerAPI.unsubscibeUserStatus(props.user.id, hand)
        }
    })

    return isOnline

}