import React from "react";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import Conversations from "./components/Conversations";
import ChatScreenEramet from "./components/ChatScreenEramet";
import ChatScreenVuitton from "./components/ChatScreenVuitton";
import ChatScreenCartier from "./components/ChatScreenCartier";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Deck from "./components/Deck";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/Eramet">
            <Header backButton="/chat"/>
            <ChatScreenEramet />
          </Route>
          <Route path="/chat/Louis Vuitton">
            <Header backButton="/chat"/>
            <ChatScreenVuitton />
          </Route>
          <Route path="/chat/Cartier">
            <Header backButton="/chat"/>
            <ChatScreenCartier />
          </Route>
          <Route path="/chat">
            <Header backButton="/"/>
            <Conversations />
          </Route>
          <Route path="/">
            <Header />
            <Deck />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;