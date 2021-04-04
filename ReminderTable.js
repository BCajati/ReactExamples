import React, {Component} from 'react'
import Table from "react-bootstrap/Table"

const TableBody = (props) => {
  const rows = props.eventData.map((row,index) => {
  return (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.eventName}</td>
      <td>{row.date}</td>
      {/* <td>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit"
        }).format(row.date)}
        </td> */}
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


      </div>
    )
  }

export default ReminderTable
