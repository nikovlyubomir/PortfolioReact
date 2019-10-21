import React from 'react';
import LandingPage from './LandingPage';
import {Switch,Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Error from './Error';

const Main = ()=> (
<Switch>
    <Route exact path='/' component={LandingPage}></Route>
    <Route  path='/aboutme' component={AboutMe}></Route>
    <Route  path='/contact' component={Contact}></Route>
    <Route  path='/projects' component={Projects}></Route>
    <Route  path='/resume' component={Resume}></Route>
    <Route  component={Error}></Route>
</Switch>
)

export default Main;