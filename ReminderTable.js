import React, {Component} from 'react'
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import InputGroup from "react-bootstrap/InputGroup"
import Button from "react-bootstrap/Button"

const TableBody = (props) => {
  const rows = props.eventData.map((row,index) => {
  return (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.eventName}</td>
      <td>{row.date}</td>
    </tr>
  )
  })

  return <tbody>{rows}</tbody>
}

const ReminderTable = (props) => {
  
    const {eventData} = props

    return (
      <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <TableBody eventData={eventData}/>
          </Table>

          <Form inline>
            <Form.Label htmlFor="inlineFormInputName2" srOnly>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Name"
            />
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="1">Birthday</option>
              <option value="2">Anniversary</option>
              <option value="3">Other</option>
            </Form.Control>
            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
              Username
            </Form.Label>
            <InputGroup className="mb-2 mr-sm-2">
              <FormControl id="inlineFormInputGroupUsername2" placeholder="Date" />
            </InputGroup>
            <Button type="submit" className="mb-2">
              Add
            </Button>
          </Form>
      </div>
    )
  }

export default ReminderTable
