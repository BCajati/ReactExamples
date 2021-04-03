import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props);
    
    this.initialState = {
        name: '',
        job: '',
    };

    this.state = this.initialState;
}



    render(){
      //  const {name, job} = this.state;

        return(
            <h1>Hello World</h1>
        );
    }
}

export default Form;