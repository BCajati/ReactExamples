//import React, {useState} from "react"
import React from "react"

class Dates extends React.Component {
    constructor(props){
        super(props)
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var birthdate = new Date(2011,4,3)  
     
     
        this.state = {
            currentDate: date,
            birthday: birthdate,
            count: 1
        }
       this.updateBirthday = this.updateBirthday.bind(this)
        this.incrementCount = this.incrementCount.bind(this)
    }

    updateBirthday () {
        this.setState( (state) => {
            return {birthday: new Date(state.birthday.getFullYear() + 1, state.birthday.getMonth(), state.birthday.getDate())}
        } )
    }

    incrementCount() {
        this.setState((state) => {
          // Important: read `state` instead of `this.state` when updating.
          return {count: state.count + 1}
        });
      }


   render(){
      return(
        
        <div> 
            <p>Dates</p> 
        
            <p>{this.state.currentDate}</p>
            <p>{this.state.birthday.toLocaleDateString()}</p>

            <p>{this.state.count}</p>
            <button onClick = {this.incrementCount}>Add One</button>
            {/* <p>{this.state.randomDate}</p> */}
          
            <button onClick={this.updateBirthday}>Add one Year</button> 

            </div>
     )
    }
    
}

export default Dates