import React, {Component} from 'react'
import Table from "react-bootstrap/Table"

// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Name</th>
//         <th>Job</th>
//       </tr>
//     </thead>
//   )
// }

// const TableBody = (props) => {
//   const rows = props.characterData.map((row,index) => {
//   return (
//     <tr key={index}>
//       <td>{row.name}</td>
//       <td>{row.job}</td>
//       <td>
//         <button onClick={() => props.removeCharacter(index)}>Delete</button>
//       </td>
//     </tr>
//   )
//   })

//   return <tbody>{rows}</tbody>
// }


const ReminderTable = (props) => {
  
    const {characterData, removeCharacter} = props

    return (
      // <table>
      //   <TableHeader />
      //   <TableBody characterData={characterData}
      //   removeCharacter={removeCharacter}/>
      // </table>
      <div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amber</td>
                <td>Birthday</td>
                <td>"4-3-02"</td>
              </tr>
              <tr>
                <td>Mario</td>
                <td>Birthday</td>
                <td>"5-21-67</td>
              </tr>
              {/* <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr> */}
            </tbody>
          </Table>
      </div>
    )
  }

export default ReminderTable
