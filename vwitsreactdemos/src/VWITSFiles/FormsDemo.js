import React, { useState } from "react";

function FormsDemos() {
    /*
 useState() hook and name the state object as 
 formData and the function that can be used to update this state as setFormData().*/
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    /*
 handleChange() function that extracts the name and value 
 properties from the input field and updates the state value for that input field using the setFormData() function.*/

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState11) => ({ ...prevState11, [name]: value }));
    };
    /*
The last step is to handle the form submission. We need to prevent the default form submission behavior, 
which is to reload the page, and instead handle the form submission in our 
React component.

We’ll create a handleSubmit() function that will be called when the user clicks the submit button by 
passing the handleSubmit() function to the onSubmit event handler of the <form> element. 
This function will prevent the default form submission behavior and log the form data to the console.*/

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>

    );

}

export default FormsDemos;