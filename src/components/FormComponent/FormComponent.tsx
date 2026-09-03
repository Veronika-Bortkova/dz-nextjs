import React from 'react';

const FormComponent = () => {
    return (
        <form action={createCarAction}>
            <input type={"text"} name={"brand"}></input>
            <input type={"number"} name={"price"}></input>
            <input type={"number"} name={"year"}></input>
            <button type="submit">Add car</button>

        </form>
    );
};

export default FormComponent;