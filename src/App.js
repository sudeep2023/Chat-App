import React from "react";
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const App = ()=> {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height= "100vh"
            projectID="927cbd88-4c81-443d-932b-e93692891437"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
};
export default App;