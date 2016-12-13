import React from 'react';
import firebase from 'firebase';
import {Button} from 'react-bootstrap';

export default class qrCode extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
        <div id="qrCode">
            <h1>QR Code</h1>
            <img src="./img/qrcode.png"/>
        </div>    
    )
  }