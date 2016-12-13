import React from 'react';
import firebase from 'firebase';

export default class Qr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div id="qrCode">
        <img src="./img/qrcode.png" className="qrCodeImg" />
        <h4 style={{"text-align": "center"}}>Place the QR code under the scanner</h4>
      </div>
    );
  }

}
