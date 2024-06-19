export default function NumList(){
    const numbers = [1,2,3,4,5]

    const listItems = numbers.map((number, index) =>
        <li key = {index}>{number}</li>
    )
    const itemList = numbers.map((todoList) =>
        <li key = {todoList.id}>{todoList.todo}</li>
    )

    return(
        <ul>{listItems}</ul>
    )
}