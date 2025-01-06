import { useState } from "react";

function StateExmp3() {
    const [color, setColor] = useState("green");
    const [isBold, setBold] = useState(false);
    const [isItalic, setItalic] = useState(false);
    const [isUnderline, setUnderline] = useState(false);

    return (
        <div>
            <h3>Change Text Color</h3>
            <input type="radio" name="color" onChange={() => setColor("Yellow")} />
            {"Yellow"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("Red")} />
            {"Red"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("Blue")} />
            {"Blue"}
            <br />

            <h3>Change Text Style</h3>
            <input
                type="radio"
                name="style"
                onChange={() => {
                    setBold(!isBold);
                }}
            />
            {"Bold"}
            <br />
            <input
                type="radio"
                name="style"
                onChange={() => {
                    setItalic(!isItalic);
                }}
            />
            {"Italic"}
            <br />
            <input
                type="radio"
                name="style"
                onChange={() => {
                    setUnderline(!isUnderline);
                }}
            />
            {"Underline"}
            <br />

            <p
                style={{
                    color: color,
                    fontWeight: isBold ? "bold" : "normal",
                    fontStyle: isItalic ? "italic" : "normal",
                    textDecoration: isUnderline ? "underline" : "none",
                }}
            >
                This is the text content for display
            </p>
        </div>
    );
}

export default StateExmp3;
