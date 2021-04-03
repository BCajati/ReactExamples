import React from "react"
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';

class Home extends React.Component{

    contstructor(){

    }

    render(){
        return(
        <div>
            <Jumbotron>
            <h1 className="header">Welcome</h1>
            <h2 className="header">My Examples from Learning React</h2>
            </Jumbotron>

            <p>What I wanted to start with is a place to hold all the examples so it is easy for me to reference</p>

            <ListGroup>
                <ListGroup.Item>1. Use React nav bar. Main thing is it also needs Router to work</ListGroup.Item>
                <ListGroup.Item>2.Arrays, Forms</ListGroup.Item>
                <ListGroup.Item>3. My memory game - pretty primitve</ListGroup.Item>
                <ListGroup.Item>4. TBD</ListGroup.Item>
            </ListGroup>
            </div>

        )
    }
}

export default Home