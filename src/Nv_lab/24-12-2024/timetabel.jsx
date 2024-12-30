import * as React from "react";
class Timetable extends React.Component {
    render() {
        return(
        <table border={2}>
            
    <thead>
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>9:00 AM - 10:00 AM</td>
            <td>Math</td>
            <td>Science</td>
            <td>History</td>
            <td>Art</td>
            <td>Physical Education</td>
        </tr>
        <tr>
            <td>10:00 AM - 11:00 AM</td>
            <td>English</td>
            <td>Math</td>
            <td>Science</td>
            <td>History</td>
            <td>Art</td>
        </tr>
        <tr>
            <td>11:00 AM - 12:00 PM</td>
            <td>Physical Education</td>
            <td>English</td>
            <td>Math</td>
            <td>Science</td>
            <td>History</td>
        </tr>
        <tr>
            <td>12:00 PM - 1:00 PM</td>
            <td>Lunch</td>
            <td>Lunch</td>
            <td>Lunch</td>
            <td>Lunch</td>
            <td>Lunch</td>
        </tr>
        <tr>
            <td>1:00 PM - 2:00 PM</td>
            <td>History</td>
            <td>Art</td>
            <td>Physical Education</td>
            <td>English</td>
            <td>Math</td>
        </tr>
        <tr>
            <td>2:00 PM - 3:00 PM</td>
            <td>Science</td>
            <td>History</td>
            <td>Art</td>
            <td>Physical Education</td>
            <td>English</td>
        </tr>
    </tbody>
</table>
        
        );
    }
}
export default Timetable