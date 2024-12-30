import * as React from "react";
class HtmlComponent extends React.Component {
    render() {
        return (
            <div>
                <label>Textbox</label>
                <input type="text" />
                <br />
                <label>checkbox</label>
                <input type="checkbox" />
                <br />
                <label>Radio button</label>
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
                <br />
                <label>Color</label>
                <input type="color" />
                <br />
                <label>File</label>
                <input type="file" />
                <br />
                <label>Date</label>
                <input type="datetime-local" />
                <br />
            </div>
        );
    }
}
export default HtmlComponent;