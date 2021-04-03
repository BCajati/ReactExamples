import React from "react"
import ListGroup from 'react-bootstrap/ListGroup';

class NextSteps extends React.Component{

    render(){
        return(
            <ListGroup>
                <ListGroup.Item>Not clear on the Card Link</ListGroup.Item>
                <ListGroup.Item>Add other learnings here</ListGroup.Item>
                <ListGroup.Item>finish date reminders. Especially add save/get</ListGroup.Item>
                <ListGroup.Item>Update memory game using bootstrap.</ListGroup.Item>
                <ListGroup.Item>Review using Font Awesome icons: "https://fontawesome.com/v4.7.0/icon/cubes"</ListGroup.Item>

                <ListGroup.Item>Project ideas "https://www.johnsmilga.com/projects" and "https://react-projects.netlify.app/"</ListGroup.Item>
                <ListGroup.Item>Review Function Components: "https://www.robinwieruch.de/react-function-component"</ListGroup.Item>
                <ListGroup.Item>Local Storage "https://medium.com/@siobhanpmahoney/local-storage-in-a-react-single-page-application-34ba30fc977d".</ListGroup.Item>
                
            </ListGroup>
        )
    }
}

export default NextSteps