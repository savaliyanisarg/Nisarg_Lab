// 1. Create a react pure functional component
// that will take 2 numbers and print
// addition, subtraction, multiplication and division
import { useState } from "react";
function ClassExercise() {
  // exercise 1
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);

  // exercise 2
  const [etxt, setEtxt] = useState("");
  const [validemail, setValidEmail] = useState("invalid");
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  // exercise 3
  const [btntxt, setBtntxt] = useState("Show Text");
  const [btnbool, setBtnbool] = useState(false);
  const [paradisp, setParadisp] = useState("none");

  //exercise 4
  const [charrcount, setCharrcount] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={no1}
        onChange={(e) => setNo1(Number(e.target.value))}
      />
      <br />
      <input
        type="number"
        value={no2}
        onChange={(e) => setNo2(Number(e.target.value))}
      />
      <br />
      {no1} <label> + </label> {no2} <label> = </label>
      {no1 + no2}
      <br />
      {no1} <label> - </label> {no2} <label> = </label>
      {no1 - no2}
      <br />
      {no1} <label> * </label> {no2} <label> = </label>
      {no1 * no2}
      <br />
      {no1} <label> / </label> {no2} <label> = </label>
      {no1 / no2}
      <br />
      <br />
      <input
        type="text"
        value={etxt}
        onChange={(e) => {
          setEtxt(e.target.value);
          setCharrcount(e.target.value.length);
          if (validEmail.test(etxt)) {
            setValidEmail("Valid Email");
          } else {
            setValidEmail("Invalid Email");
          }
        }}
      />
      <br />
      {validemail}
      <br />
      {charrcount}
      <br />
      <button
        onClick={() => {
          setBtnbool(!btnbool);
          btnbool
            ? (setParadisp("none"), setBtntxt("Show Text"))
            : (setParadisp(""), setBtntxt("Hide Text"));
        }}
      >
        {btntxt}
      </button>
      <br />
      <p style={{ display: paradisp }}>This is a sample text</p>
    </div>
  );
}
export default ClassExercise;

// 2. Create a react pure functional component
// that will take email address as an input and
// print whether it is a valid email address or not

// 3. Create a react pure functional component
// that will toggle the visibility of the text written by user
// take one text box and one button, button will toggle the visibility
// when text is visible button text should be " hide text"
// when text is hidden button text should be "show text"

// 4. Create a react pure functional component
// that will take text input and print total number of
// characters