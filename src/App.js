import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/tinder-cards/TinderCards";
import SwipeButtons from "./components/swipe-buttons/SwipeButtons";
import Chats from "./components/chats/Chats";
import ChatScreen from "./components/chat-screen/ChatScreen";
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <TinderCards />
            <br/><br/>
            <SwipeButtons />
          </Route>
          <Route exact path='/chat'>
            <Header backButton='/' />
            <Chats></Chats>
          </Route>
          <Route exact path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen></ChatScreen>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
