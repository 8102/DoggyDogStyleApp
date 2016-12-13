import React from 'react';
import firebase from 'firebase';
import {Button} from 'react-bootstrap';


export default class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {auth: false};
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user)
      this.setState({auth: true});
    })
  }

  render() {
    var content = null;
    if (this.state.auth == true)
    content = <SignedInComponent/>;
    else
    content = <SignUpComponent/>;
    return (
      <div id="mainContent">
        <div className="text-center">
          <div className="center-block">
            <h1>Welcome on My Page !</h1>
            { content }
          </div>
        </div>
      </div>
    )
  }
}

class SignUpComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {mail:"", pass:""};
  }

  render(){
    return(
      <div>
        <div id="SignUp">
          <h1 id="title">Sign Up</h1>
          <form id="signUpForm">
            <p>Email: <input type="text" onChange={this.handleEmailChange.bind(this)}></input></p>
            <p>Pass: <input type="password" onChange={this.handlePassChange.bind(this)}></input></p>
            <Button id="submit" type="submit" onClick={this.newUser.bind(this)}>Sign Up!</Button><br/>
            <p>Already have an account?</p>
            <Button id="submit" type="submit" onClick={this.authVerif.bind(this)}>Sign In</Button><br/>
          </form>
        </div>
      </div>
    )
  }

  handleEmailChange(e) {
    this.setState({mail: e.target.value})
  }

  handlePassChange(e) {
    this.setState({pass: e.target.value})
  }

  newUser(e) {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.pass).then(function(user) {
      alert(user.email)
    }).catch(function(error){
      alert(error.message)
    })
  }

  authVerif(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(
      this.state.mail,
      this.state.pass
    ).then(function(user){
      alert("Signed in");
    }).catch(function(error){
      alert(error.message)});
    }

  }

  class SignedInComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {mail:"", pass:""};
    }

    render(){
      return(
        <div>
          <h1>Your Account</h1>
          <Button onClick={this.logOut.bind(this)}>Sign out</Button>
        </div>
      )
    }

    logOut(e) {
      firebase.auth().signOut();
    }
  }
