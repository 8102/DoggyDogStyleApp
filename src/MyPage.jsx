import React from 'react';
import firebase from 'firebase'

var myFirebase = firebase.initializeApp({
    apiKey: " AIzaSyCdoJ5Q10uHkmUHMOiI_l-q05CmraQ0yMc",
authDomain: "lab3-462d5.firebaseio.com",
databaseURL: "https://lab3-462d5.firebaseio.com/",
storageBucket: "gs://lab3-462d5.appspot.com",
})

export default class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { auth: false };
    }

    componentWillMount() {
        myFirebase.auth().onAuthStateChanged((user) => {
            if (user) {
                    this.setState({auth: true});
                }
            else {}
        });
    }

    render() {
      var content = null;
      if (this.state.auth == true)
          content = <SignedInComponent/>;
      else
          content = <SignUpComponent/>;
        
        return (
        <div id="mainContent">
            <h1>Welcome on My Page !</h1>
            { content }
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
                <div id="SignUp" align="left">
                    <h1>Sign Up</h1>
                    <form>
                        <p>Email: <input type="text" onChange={this.handleEmailChange.bind(this)}></input></p>
                        <p>Pass: <input type="password" onChange={this.handlePassChange.bind(this)}></input></p>
                        <button type="submit" onClick={this.newUser.bind(this)}>Sign Up!</button><br/>
                    </form>
                </div>
                <div id="SignIn" align="right">
                    <h1>Sign In</h1>
                    <form>
                        <p>Email: <input type="text" onChange={this.handleEmailChange.bind(this)}></input></p>
                        <p>Pass: <input type="password" onChange={this.handlePassChange.bind(this)}></input></p>
                        <button type="submit" onClick={this.authVerif.bind(this)}>Log in!</button><br/>
                    </form>
                </div>
            </div>
        )
    }
    
    handleEmailChange(e) {
        this.setState({mail: e.target.value});
    }

    handlePassChange(e) {
        this.setState({pass: e.target.value});       
    }
  
    newUser(e) {
        e.preventDefault();
        myFirebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.pass).then(function(user) {
            alert(user.email)
        }).catch(function(error){
            alert(error.message)    
        });
    }

    authVerif(e) {
        e.preventDefault();
        myFirebase.auth().signInWithEmailAndPassword(
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
                <button onClick={this.logOut.bind(this)}>Sign out</button>
            </div>        
        )
    }
    
    logOut(e) {
        myFirebase.auth().signOut();
    }
    
}
