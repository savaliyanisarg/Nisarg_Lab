import { useState } from "react";

function HookExmp(){
    const [name] = useState("hello world");
    return <h1>{name}</h1>;
}

export default HookExmp;