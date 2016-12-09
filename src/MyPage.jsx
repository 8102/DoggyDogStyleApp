import React from 'react';
import firebase from 'firebase'

var firebase = firebase.initializeApp({
    apiKey: " AIzaSyCdoJ5Q10uHkmUHMOiI_l-q05CmraQ0yMc",
authDomain: "lab3-462d5.firebaseio.com",
databaseURL: "https://lab3-462d5.firebaseio.com/",
storageBucket: "gs://lab3-462d5.appspot.com",
})

export default class MyPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <h1>Welcome on My Page !</h1>
    )
  }
}
