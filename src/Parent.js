import { useState } from "react"
import { Child } from "./Child";
const publicIp = require("react-public-ip");
 
const ipv4 = await publicIp.v4() || "";
const ipv6 = await publicIp.v6() || "";

export const Parent = () => {
    console.log(ipv4, ipv6);
    const [state, setState] = useState([]);
    console.log(state);
    let array = [...state];
    return (
        <>
            <Child setState={setState} array={array}/>
        </>
    )
}