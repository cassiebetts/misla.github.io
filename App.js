import React, { Component } from 'react';
import firebase from 'firebase';
import guid from 'guid';
import 'bulma/css/bulma.css';
import Header from './components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';

class App extends Component {

    componentWillMount() {
      this.guid = guid.create();
      firebase.initializeApp({
          apiKey: "AIzaSyC6IHGyKLMDvAGtoHgUAJI1tKlfANmH0Hk",
          authDomain: "messagepool-daa63.firebaseapp.com",
          databaseURL: "https://messagepool-daa63.firebaseio.com",
          projectId: "messagepool-daa63",
          storageBucket: "",
          messagingSenderId: "988724135909"
        });
      }

  render() {
    return (
      <div className = 'container'>
      <Header title='Firebase Message App!!!'/>
      <div className='columns'>
        <div className='column is-3'></div>
        <div className='column is-6'>
        <MessageList db={firebase} guid={this.guid.value} />
        </div>
      </div>

      <div className='columns'>
        <div className='column is-3'></div>
        <div className='column is-6'>
          <MessageBox db={firebase} guid={this.guid.value} />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
