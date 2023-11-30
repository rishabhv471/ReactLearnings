import React from "react";
import ReactDOM from "react-dom";
export default class SalesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            sales:
            {
                SId: '',
                SName: '',
                SCity: '',
                SCommission: ''
            }
        };
    }
//save the input text box value into our state object 
    //using the setState method. 

    vwitschangeHandler = (event) => {
        const name11 = event.target.name;//get the input element Name 
        const value11 = event.target.value;//Get the value of that input
        /*
        The sales object should contain all the previous property 
        values. 
        We get them using Spread Operator.
        
        The JavaScript spread operator ( ... ) allows us to quickly 
        copy all or part of 
        an existing array or object into another array or object.
        */
        this.setState(
            {
                sales:
                {
                    ...this.state.sales,
                    [name11]: value11
                }
            });
    }
        onCreateEmployee = () => {
        console.log(this.state.sales);
        alert(JSON.stringify(this.state.sales));// convert your object to a JSON object using stringfy.
        //bcos of setState , final output   
    }
    render() {
        return <div><h2>Sales Form</h2>
            <form><p>
                <label>Sales ID : <input type="text" name="SId"
                    value={this.state.sales.SId}
                    onChange={this.vwitschangeHandler} ></input>
                </label>
            </p>
                <p>
                    <label>SalesMan Name : <input type="text" name="SName"
                        value={this.state.sales.SName}
                        onChange={this.vwitschangeHandler}></input>
                    </label>
                </p>
                <p>
                    <label>Sales City: <input type="text" name="SCity"
                        value={this.state.sales.SCity}
                        onChange={this.vwitschangeHandler}></input>
                    </label>
                </p>
                <p>
                    <label>Sales Commission : <input type="text" name="SCommission"
                        value={this.state.sales.SCommission}
                        onChange={this.vwitschangeHandler}></input>
                    </label>
                </p>
            </form>
            <button onClick={this.onCreateEmployee}>Create</button>
        </div>
    }
}
//export default SalesComponent;//A module cannot have multiple default exports.