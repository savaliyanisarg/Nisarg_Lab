import { useState } from "react";
import { Promise } from "bluebird";
import { useEffect } from "react";
Promise.config({cancellation: true});
function FetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1,name: "rk university",});
        }, 5000);
    });
}
function CancaleRequest(){
    const[id, setid] = useState("loading....");
    const[name, setname] = useState("loading...");
    useEffect(() => {
        const Promise = FetchUser().then((var1) =>{
            setid(var1.id);
            setname(var1.name);
        });
        return () => {
            Promise.cancel();
        };
    });
    return (
        <div>
            <h1>User ID: {id}</h1>
            <h1>User Name: {name}</h1>
        </div>
    );
}

export default CancaleRequest;

// create a ragistration form with following details 
// 1)Cricketer name (Text box) minimum 8 characters
// 2)Gender (Radio button)
// 3)Email (Text box) Email format validation
// 4)matches (checkbox) ODI,TEST,T20,Domesti
// 5)Password and confirm password both password should be same
// 6)Country (Dropdown)
// 7)Save button
// when use click on save button all above details should be displayedbelow form in tabel format