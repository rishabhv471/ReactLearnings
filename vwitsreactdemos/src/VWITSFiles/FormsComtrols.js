import React, { Component } from 'react';
/*
In ReactJs, when we are working with class-based components and want to access this inside a class method. 
This will need to bind it. Binding this allows it to access the state and setstate inside the class. 

Approach to avoid binding in React JS:

To avoid the need for binding we have something introduced in ES6 as arrow functions. 
Using the arrow function to call this.setState will lead to avoiding the use of bind.
 When we use the arrow function it works because of the following reasons:

--It does not re-scope this, so we don’t need to bind this in the class constructor.
--JavaScript has first-class functions, which means functions are considered as data. 
Therefore, arrow functions can be assigned to class properties.
*/
export default class FormsControls extends Component {
    constructor() {
        super();
        this.state = {
            size: 'small',//radio
            hobbies: [],//checkbox
            category: 'PHP'//select option
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
  
    }
    onRadioChange = (e) => {
        this.setState({
            size: e.target.value
        });
    }
    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        if (target.checked) {
            this.state.hobbies[value] = value;
        } else {
            this.state.hobbies.splice(value, 1);
        }
    }
    handleChange(event) {
        this.setState({ category: event.target.value });
    }
   /*
The preventDefault() method cancels the event if it is
cancelable, meaning that the default action that belongs
to the event will not occur. For example, this can be useful
when: Clicking on a "Submit" button, prevent it from
submitting a form.
 Clicking on a link, prevent the link from following the URL.
*/
onSubmit_1 = (event) => {
    event.preventDefault();
    console.log(this.state.size);
    console.log(this.state.hobbies);
    console.log(this.state.category);
}

    render() {
        return (
            <div >
                <form onSubmit={this.onSubmit_1}>
                    <strong>Select Dress Size:</strong>
                    <label>
                        <input
                            type="radio"
                            value="small"
                            checked={this.state.size === "small"}
                            onChange={this.onRadioChange}
                        />
                        <span>Small</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="medium"
                            checked={this.state.size === "medium"}
                            onChange={this.onRadioChange}
                        />
                        <span>Medium</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="large"
                            checked={this.state.size === "large"}
                            onChange={this.onRadioChange}
                        />
                        <span>Large</span>
                    </label>
                    <br /><br />
                    <strong>Select Hobbies:</strong>
                    <label>
                        <input
                            type="checkbox"
                            value="Shopping"
                            name="hobbies"
                            onChange={this.handleInputChange}
                        />
                        <span>Shopping</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Cricket"
                            name="hobbies"
                            onChange={this.handleInputChange}
                        />
                        <span>Cricket</span>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Twitter,Instagram,Facebook"
                            name="hobbies"
                            onChange={this.handleInputChange}
                        />
                        <span>SocialMedia</span>
                    </label>
                    <br /><br />
                    <strong>Select Category:</strong>
                    <select value={this.state.category} onChange={this.handleChange}>
                        <option value="PHP">PHP</option>
                        <option value="Python">Python</option>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <button type="submit">Choose</button>
                </form>
            </div>
        );
    }

}