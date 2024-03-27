import React from "react";

class Hello extends React.Component {
    render(){
        return <div>Hello {this.props.towhat}</div>
    }
}

//const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render()
export default Hello;