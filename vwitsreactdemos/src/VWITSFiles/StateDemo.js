/*
setState:::
All the React components can have a state associated with them. 
The state of a component can change either due to a response to 
an action performed by the user or an event triggered by the 
system. Whenever the state changes, React re-renders the 
component to the browser. Before updating the value of the state, 
 to build an initial state setup. Once we are done with it, 
 we use the setState() method to change the state object. 
 It ensures that the component has been updated and calls for
  re-rendering of the component.
 
  setState() enqueues changes to the component state and 
  tells React that this component and its children need to 
  be re-rendered with the updated state. 
  This is the primary method you use to update the user 
  interface in response to event handlers and server responses.
 
  useState() is a React hook. Hooks make possible to use 
  state and mutability inside function components.
  **useState should be used only inside functional components. 
  useState is the way if we need an internal state and don't 
  need   to implement more complex logic such as lifecycle methods.
  */
  import React, { Component } from 'react'

      /*
    setState() does not immediately mutate this.state 
    but creates a pending state transition. 
    Accessing this.state after
    calling this method can potentially return the existing value.
    */
class StateDemo_1 extends Component {
    constructor(props) {
        super(props);
        // Set initial state
        //this.state is a standard state variable 
        this.state =
        {
            msg_1: 'Good day!',
            msg_2: 'Good Noon',
            count: 0,
            value123: "dUMMY"
        }
                    // Binding this keyword in the function called "myupdateState_1"
                    this.myupdateState_1 = this.myupdateState_1.bind(this)

    }
    myupdateState_1() {
        // Changing state 
        this.setState(
            {
                msg_1: 'Happy Learning!',
                msg_2: 'Happy Reading!'
            })
        // Changing state 
        this.setState((prevState1) => {
            return {
                count: prevState1.count + 1//0+1,1+1,2+1
            }
        })

    }
    render() {
        return (
            <div>
                <h2>setStateDemo Example</h2>
                <p>{this.state.msg_1}</p>
                <p>{this.state.msg_2}</p>
                <h2>Click Counter</h2>
                <p>You have clicked me {this.state.count} times.</p>
                {/* Set click handler */}
                <button onClick={this.myupdateState_1}>
                    Click me!
                </button>
                <br />
                <br />
                {/*Inline function*/ }
                <input type="text"
                    onChange={(e1) => this.setState({ value123: e1.target.value })} />
                <p>See:::{this.state.value123}</p>

            </div>
            )

    }
}
export default StateDemo_1;//classname