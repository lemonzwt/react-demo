import React,{
    Component
} from 'react'
export default class Home extends Component{
    constructor(props){
        super(props);
    }
    userInputChange(event,type){
        console.log(event.target.value);
    }
    render(){
        return (
            <h1>Home</h1>
        );
    }
}