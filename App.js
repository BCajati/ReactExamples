import React, {Component, useState} from 'react'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import About from './About'
import Home from './Home'
import Features from './Features'
import NextSteps from './NextSteps'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import './App.css';
import DateReminder from './DateReminder';


const App = () => (
  <Container className="p-3">
    <Router>
      <Navbar bg="primary" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/reminders">Date Reminders</Nav.Link>
      <Nav.Link href="/next">Next Steps</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  <br />
    <switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/features">
        <Features />
      </Route>
      <Route path="/reminders">
        <DateReminder />
      </Route>
      <Route path="/next">
        <NextSteps />
      </Route>
    </switch>

  </Router>

  </Container>
);

export default App;