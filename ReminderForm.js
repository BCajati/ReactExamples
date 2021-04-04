
import React from "react"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"


class ReminderForm extends React.Component{
    constructor(props){
        super(props)
        this.initialState = {
           name: "", eventName: "Birthday", date: "" 
        }
        this.state = this.initialState
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {name, eventName, date} = this.state;
        return(
        <Form inline onSubmit={this.submitForm}>
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
            Name
            </Form.Label>
                <Form.Control
                className="mb-2 mr-sm-2"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
                />
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="eventName"
                    name="eventName"                   
                    custom
                    onChange={this.handleChange}
                    >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                    </Form.Control>
            <InputGroup className="mb-2 mr-sm-2">
            <FormControl id="date" placeholder="Date" 
            name="date" value={date}
            onChange={this.handleChange}/>
            </InputGroup>
            <Button type="submit" className="mb-2" >
            Add
            </Button>
        </Form>
        )
    }
}

export default ReminderForm