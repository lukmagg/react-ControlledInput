import React, { Component } from 'react';



class ControlledInput extends Component{
    constructor(props){
        super(props);
        this.state = { value:"" };
    }

    onChange(event){
        this.setState({value: event.target.value})
    }


    
    render(){
        return(
            <div>
                <input type1="text"
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}
                    name={this.props.name}
                />
                <br/>
                <p>State on real time:</p>
                <h1>{this.state.value}</h1>
            </div>
        );
    }
}




export default ControlledInput;
