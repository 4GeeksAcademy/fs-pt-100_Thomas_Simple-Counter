import React from "react";

export const Digit = (props) => {
    return (
        <div className="card m-2 bg-dark text-white border-2 border-secondary">
            <p className="card-body fs-1 m-0">
                {props.digitValue}
            </p>
        </div>
    )
}