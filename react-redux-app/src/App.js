import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import * as ways from './components/4waysToCreateComponent';
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from './components/PageNotFound';
import CoursesPage from "./components/courses/CoursesPage";

function App() {
  return (
    <div id="app">
      <Header />
      {/* If we want to handle the case when the user is trying to reach a page that doesn't exist 
          we use Switch from react-router-dom and handle the default case like displaying the 404 component*/}
      <Switch>
        {/* React Router will watch the URL (path attribute in the Route tag) 
            and render the corresponding component passed as a value of the component attribute*/}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        {/* if none of the above paths match we shall render the PageNotFound component */}
        <Route component={PageNotFound} />
      </Switch>
      <p style={{ display: "none" }}>
        <ways.HelloWorldCC />
        <ways.HelloWorldConst />
        <ways.HelloWorldFC />
      </p>
    </div>
  );
}

export default App;
