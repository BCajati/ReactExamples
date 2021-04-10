import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import image1 from './iconmonstr-cube-8.svg'
import DateReminder from './DateReminder'
import {Link} from "react-router"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";

class Features extends React.Component{
    render(){
        return(
            <div>
                <Router>
                <img src={image1} />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Date Reminder</Card.Title>
              <Card.Text>
                Beginner Project - Date Reminder.
              </Card.Text>
              <Card.Link href="/reminders">See Project</Card.Link>
            </Card.Body>
          </Card> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Working with Dates</Card.Title>
              <Card.Text>
                Date Operations
              </Card.Text>
              <Card.Link href="/dates">See Project</Card.Link>
            </Card.Body>
          </Card>       

          <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
             
            </Card.Body>
            </Card>
            <br />
                {/* <switch>
                <Route path="/reminders">
                    <DateReminder />
                </Route>
                </switch> */}
            </Router>
          </div>
          
        )
    }
}

export default Features