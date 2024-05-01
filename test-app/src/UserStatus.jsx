import useStatus from "./useUser"

export default function useStatus (props){
    const isOnline = useStatus(props.user.id)
    if (isOnline === null){
        return '대기중'
    }
    return isOnline ? '온라인' : '오프라인'
    
}