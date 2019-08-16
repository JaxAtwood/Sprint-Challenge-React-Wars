import React from "react";

const Name = (props) => {
    return (
        <div className="nameClass" key={props.id}>
            <p> Console Log output--->
                {props.name}
               
            </p>
        </div>
    )
}

export default Name;