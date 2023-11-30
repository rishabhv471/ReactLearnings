/*
Routing::

Routing is a process in which a user is directed to different pages based on their action or request.
 ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define 
 multiple routes in the application. When a user types a specific URL into the browser, and if this URL 
 path matches any 'route' inside the router file, the user will be redirected to that particular route.

React Router is a standard library system built on top of the React and used to create routing in the React 
application using React Router Package. It provides the synchronous URL on the browser with data that will be 
displayed on the web page. It maintains the standard structure and behavior of the application and mainly used
 for developing single page web applications.

Need of React Router
React Router plays an important role to display multiple views in a single page application. Without React Router,
 it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, 
 Instagram uses React Router for rendering multiple views.

React Router Installation
React contains three different packages for routing. These are:

--react-router: It provides the core routing components and functions for the React Router applications.
--react-router-native: It is used for mobile applications.
--react-router-dom: It is used for web applications design.

**It is not possible to install react-router directly in your application. 
**To use react routing, first, you need to install react-router-dom modules in your application. 
The below command is used to install react router dom.

$ npm install react-router-dom --save   

There are two types of router object.

--BrowserRouter
--HashRouter
If we want to handle the dynamic request then use BrowserRouter and if we want to serve the static request then use HashRouter.

History:
Every router creates history object to keep track of the current location of the page.*/
import React, { Component } from 'react';
class First extends Component {
    render() {
      return (
          <div>
            <h2>Google</h2>
          </div>
      );
    }
  }
  
  export default First;