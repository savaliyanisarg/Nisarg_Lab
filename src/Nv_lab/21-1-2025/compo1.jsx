import { useState } from "react";
import CancaleRequest from "./cleanup";

const Showuser = ({var3}) => (var3 ? <CancaleRequest /> : null);

function CustomComp(){
    const [show,setshow] =useState(false);
    return (
        <>
        <button onClick={() => setshow(!show)}>
            {show ? "Hide User" : "Show User"}
        </button>
        <Showuser var3 ={show} />
        </>
    );
    }
    export default CustomComp;