import React from "react"
import ReminderTable from './ReminderTable'
import ReminderForm from './ReminderForm'


class DateReminder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            reminders: [
                {name: "Jane Doe", eventName: "Birthday", date: "1-2-2020"},
                {name: "Mario", eventName: "Birthday", date: "5-1-11"}
            ]
        }
    }

    handleSubmit = (reminder) =>{
        this.setState({
            reminders: [...this.state.reminders, reminder]

        })

    }

    render(){
        return(
            <div>
            <ReminderTable eventData={this.state.reminders}/>
            <br />
            <ReminderForm onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default DateReminder