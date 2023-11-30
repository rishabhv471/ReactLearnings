import './App.css';

import React, { useState } from 'react';

import Customerinfo from './VWITSFiles/Customer';
import Studshow from './VWITSFiles/Student';
import Products from './VWITSFiles/Product';
import StateDemo_1 from './VWITSFiles/StateDemo';
import AZList from './VWITSFiles/Map1';
import Users from './VWITSFiles/User';
import Info from './VWITSFiles/Info123';
import AirbnbListing from './VWITSFiles/Spread1';
import SalesComponent from './VWITSFiles/Sales';
import FormsDemos from './VWITSFiles/FormsDemo';
import FormsControls from './VWITSFiles/FormsComtrols';
import Greeting from './VWITSFiles/ConditionalRendering';
import LoginControl from './VWITSFiles/ConditionalRendering1';
import FormsValidation from './VWITSFiles/FormsValidation';
import ComponentLifeCycleDemos from './VWITSFiles/ComponentLifeCycle';
import LifeCycle123 from './VWITSFiles/LifeCycleDemo1';
import LifeCycle456 from './VWITSFiles/LifeCycleDemo2';
import First from './VWITSFiles/First';
import Second from './VWITSFiles/Second';
import Third from './VWITSFiles/Third';

import Notfound from './VWITSFiles/NotFound';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


class Student {
  constructor(name, age) //local argument
  {
    this.n = name;  //n and a is a class variable 
    this.a = age;
  }
  display() {
    console.log("The Name of the student is: ", this.n)
    console.log("The Age of the student is: ", this.a)
  }
}//closing the class


class Car {
  constructor(name) {
    this.brand = name;
  }
  dis() {
    return 'I have a ' + this.brand;
  }
}
/*
Super() function is to call the constructor of the parent class.
 It is used when we need to access a few variables in the parent class.
*/
class Model extends Car {
  constructor(name, mod) {
    super(name);//calling the super class constructor
    this.model = mod;//derived class variable
  }
  show() {
    //this.dis() => parent class method
    return this.dis() + ', it is a ' + this.model
  }
}

//non arrow function
function sayHello() {
  alert('Hello!');
}

/*
Always start component names with a capital letter. 
React treats components starting with lowercase letters 
as DOM tags. 
For example, <div /> represents an HTML div tag,
 but <Employee /> represents a component. 
*/
//functional component
function Show() {
  return <h2>React Training</h2>;
}

//Arrow functional component
const Display3 = () => { return <h1>Iam arrow function</h1>; }

//non functional component
const greetAlert = (name) => {

  alert(`Say hello to , ${name}!`);

};

//non-arrow functional component
function Employee(props) //data1 is a properties or props
{
  return <div><p>Name : {props.name}</p>
    <p>Salary : {props.salary}</p></div>;
}

//arrow functional component
const Department_demo = (deptInfo) => {
  return <div><p>Dept Name is : <b>{deptInfo.dept}</b></p>
    <p>Dept Head is : <b>{deptInfo.head}</b></p></div>;
}
//one functional component reused by another  functional component
//DI Mechanism
const Employeeinfo = (data12) => {
  return (<div><p>Name : {data12.name}</p>
    <p>Salary : {data12.salary}</p>
    <Department_demo dept={data12.dept} head={data12.head} /></div>);
}


function StaffComponent(props1) {
  return <div>{props1.staffName}, Location: {props1.location},
    Age: {props1.age}</div>
}

/*
Default props can be used to define any props that you want to be set
 for a component, whether or not a value is actually passed in from the parent component.*/
//default properties
StaffComponent.defaultProps =
{
  staffName: "Abi",
  location: "Chennai",
  age: "50"
}

const employeesdata = [
  { EId: 101, Name: 'Devi', Location: 'Bangalore', Salary: 34004 },
  { EId: 102, Name: 'Thananya', Location: 'Chennai', Salary: 43999 },
  { EId: 103, Name: 'Kanishka', Location: 'Bangalore', Salary: 41994 }
];

/*
In React, the ?map? method used to traverse and display a list of similar objects of a component.
 A map is not the feature of React. Instead, it is the standard JavaScript function that could be called on any array. 
The map() method creates a new array by calling a provided function on every element in the calling array.
*/
const ComplexList = () => (
  <ol>
    {
      employeesdata.map(item11 => (
        <li key={item11.EId}>
          <div>{item11.Name}</div>
          <div>{item11.Location}</div>
          <div>{item11.Salary}</div>
        </li>
      ))}
  </ol>
);
function Employeeshow(props) {
  return <div style={{ border: "3px dotted green" }}>
    <p>Employee ID : <b>{props.data11.EId}</b></p>

    <p>Employee Name : <b>{props.data11.Name}</b></p>

    <p>Employee Location : <b>{props.data11.Location}</b></p>

    <p>Employee Salary : <b>{props.data11.Salary}</b></p>
  </div>;
}

//for each loop(map)
function DispEmp(props) {
  const list = props.employeeList;//tag attribute name
  const listElements = list.map((emp31) =>
    //key and data attributes are map function
    <Employeeshow key={emp31.EId} data11={emp31} />
  );
  return (
    <div>
      {listElements}
    </div>
  );
}
/*
since props(properties) 
are read-only and must not be changed manually 
throughout the lifespan of a React application, using only props 
in your React app doesn’t 
really make it a dynamic app that can respond to 
user interactions and render accordingly. In order to do that, 
you need to ""useState"".

States and props together form the data “model” of a React 
application. While props are meant to be read-only, states are 
used for data that can change based on user actions.
*/
/*
useState::
--Should have an initial value. 
The initial value can be got from a parent component  
--Read and write
--Only the component that owns state can change it.
 State is private
--Make the component interactive for users  
--Is also responsible for fetching remote data
--We can pass state as props to child components within 
the render method of the parent component
--Requires in higher-order components

Props:::
--Passed from a parent component. May be empty. 
We can set the default value for props if it is empty
--Read-only
--The component can’t change incoming props. 
Only a parent is allowed to change props of the child component.
--Make non-interactive components.
--Just display the incoming data{}
--Pass information from component to component
--Can provide the same functionality as higher-order components 
without using state and with fewer lines of code
   */
function Example_1() {
  //first count variable,The second returned item is 
  //itself a function. 
  const a = 100;//a is a stateless variable
  const [counters, mysetCounter] = React.useState(100);//100 is the default value,counters is the stateful variable
  return (
    <div>
      <p>You clicked {counters} times</p>
      <button onClick={() => mysetCounter(counters + 1)}>
        Click me
      </button>
    </div>
  );

}


function Example_2() {
  // Declare a new state variable, which we'll call "mood"
  var [mood, changeMood] = React.useState('Calm');//default mood="Calm"
  // we declare a new state variable “Calm” with the 
  //initial value equal to 0
  return (
    <div>
      <p>You feel {mood}</p>
      <button onClick={() => changeMood(mood = 'Cheerful')}>
        Click me
      </button>
    </div>
  );
}


//entry point
function App() {
  var i = 5;
  var stuObj = new Student('Devi', 20);
  //const mycar = new Model("Hyundai", "Creta"); //valid
  var mycar = new Model("Hyundai", "Creta"); //valid

  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];
  var array = [10, 20, 30, 40, 50]
  //INLINE ARROW FUNCTIONAL COMPONENT

  var PlusOne = array.map((e) => {
    return (" " + (e + 1));
  });

  const props111 = {
    host: "Mario",
    experience: "Walk in the woods",
    location: "Norway",
    price: 29,
  };

  return (

    <div class="App">
      <h1>Hello ReactJS-VWITS !</h1>
      <h1>{20 + 20}</h1>
      <h1>{i == 1 ? 'True!' : 'False!'}</h1>
      <h1>{stuObj.n}</h1>
      <h1>{stuObj.a}</h1>
      <h1>{stuObj.display()}</h1>
      {/*
      This is a comment line in react! 
      We can specify the values of attributes as expressions 
      using curly braces {}
  */}
      <h1>{mycar.show()}</h1>
      <button onClick={sayHello}>Click me!</button>
      <Display3 />
      <Show />
      <button onClick={() => { greetAlert("Thananya"); }}>Greet Button</button>
      {/*
     Inline function
  */}
      <button onClick={() => alert("Welcome to the world of Programming!")}>Greetings Button</button>
      <Employee name="Thananya" salary="81000" />
      <Employeeinfo name="Kanishka" salary="89000" dept="Testing" head="Sai" />
      {/* Both props and state initial values received 
 from parents ""override default values""" defined inside a 
 Component.  */ }
      <StaffComponent staffName="Devi" />
      <StaffComponent />
      <ComplexList />
      {products.map((product123, index11) => (
        <div key={index11}>
          <h3>{product123.name}</h3>
          <p>Price: ${product123.price}</p>
        </div>
      ))}
      {PlusOne}
      <DispEmp employeeList={employeesdata}></DispEmp>
      <Example_1 />
      <Example_2 />
      <Customerinfo cusname="Devi" cusloc="Chennai" f_pt1="100" f_pt2="80" />
      <Studshow />
      <Products pid="1001" pname="Laptop" pcost="98000"
        wid111="10" wname111="ACER MALL" wlocation111="Bangalore" />
      <StateDemo_1 />
      <AZList />

      <p> Mapping Data to component in React js. </p>


      {Users.map((e) => {
        return (
          <Info name={e.name} rollNo={e.rollNo} />
        );
      })}

      <p> Without Map() in React js. </p>
      <Info name={Users[0].name} rollNo={Users[0].rollNo} />
      <Info name={Users[1].name} rollNo={Users[1].rollNo} />
      <Info name={Users[2].name} rollNo={Users[2].rollNo} />
      <Info name={Users[3].name} rollNo={Users[3].rollNo} />
      <Info name={Users[4].name} rollNo={Users[4].rollNo} />
      <Info name={Users[5].name} rollNo={Users[5].rollNo} />
      <Info name={Users[6].name} rollNo={Users[6].rollNo} />
      <AirbnbListing
        host={props111.host}
        experience={props111.experience}
        location={props111.location}
        price={props111.price}
      />
      {/* 
         //The spread operator is denoted by three dots: ....
  // the spread operator allows you to expand - or spread - arrays and objects into multiple elements.
  //This can be useful when copying arrays or objects, or when working with a number of arguments or properties.
       it can save a lot of time and typing when you have a large number of props that you need to pass to a component, */}
      <AirbnbListing {...props111} />
      <SalesComponent />
      <FormsDemos />
      <FormsControls />
      <h1>Conditional Rendering:::1</h1>
      <Greeting isLoggedIn={true} />
      <Greeting isLoggedIn={false} /><br/><br/><hr/>
      <LoginControl />
      <FormsValidation/>
      <ComponentLifeCycleDemos/>
      <LifeCycle123/>
      <LifeCycle456/>
      <Router>
        <div>
          <h2>React Router Demo </h2>
          {/* What is < Link> component?
This component is used to create links which allow to navigate on different URLs and render 
its content without reloading the webpage.

A route that has an asterisk path * serves as a catch-all route. It only matches when no other routes do.
*/}
          <li><Link to={'/'} > SearchEngines1 </Link></li>
          <li><Link to={'/se1'}>SearchEngines2</Link></li>
          <li><Link to={'/se2'}>SearchEngines3</Link></li>
          <li><Link to={'/se55'}>SearchEngines4</Link></li>

          <hr />
          <Routes>
            <Route path='/' element={<First />} />
            <Route path='/se1' element={<Second />} />
            <Route path='/se2' element={<Third />} />
            <Route path="*" element={<Notfound />} />

          </Routes>
        </div>
      </Router>







    </div>
  );
}

export default App;


// import React from 'react';
// import NewOrderForm from './VWITSFiles/NewOrderForm';

// const App = () => {
//   return (
//     <div>
//       <NewOrderForm />
//     </div>
//   );
// };

// export default App;
