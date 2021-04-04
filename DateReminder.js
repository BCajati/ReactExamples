import React from "react"
import ReminderTable from './ReminderTable'


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

    render(){
        return(
            <div>
            <ReminderTable eventData={this.state.reminders}/>
            </div>
        )
    }
}

export default DateReminder