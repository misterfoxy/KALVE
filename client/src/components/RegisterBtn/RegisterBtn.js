import React from "react";

const RegisterBtn = props => (
    <button {...props} className="btn btn-success">
    {props.children}
    </button>
);
export default RegisterBtn;
