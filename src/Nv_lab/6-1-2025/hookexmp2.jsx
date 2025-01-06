import { useState } from "react";

function StateExmp2() {
    const {name,SetName} = useState("RKU");
    return(
        <div>
            <h1>{name}</h1>
            <input 
                type="text"            
                value={name}
                onChange={(e) => SetName(e.target.value)}/>
                <h1>{name}</h1>

        </div>
    );
}

export default StateExmp2;