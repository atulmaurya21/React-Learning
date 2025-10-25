import { useState } from "react";

const User = (props) => {

    const [count,setcount] = useState(0);
    const { Fullname } = props;
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>Name:{Fullname}</h2>
            <h3>Location:Lucknow</h3>
            <h4>Contact:atulmaurya2003</h4>
        </div>
    )
}

export default User;