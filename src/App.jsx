import React from 'react';
import firebase from 'firebase';
import Bootstrap from 'react-bootstrap';
import Main from './Main.jsx';
import Events from './Events.jsx';
import Maps from './Maps.jsx';
import News from './News.jsx';
import MyPage from './MyPage.jsx';
import myFirebase from './FirebaseApp.jsx';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      page: "main",
      selected: {
        events: {"height": "100%"},
        myPage: {},
        news: {},
        map: {}
      }
    };

  }

  componentWillMount() {
  }

  first() {
    this.setState({
      page: "events",
      selected: {
        events: {"height": "100%"},
        myPage: {},
        news: {},
        map: {}
      }
    });
  }

  second() {
    this.setState({
      page: "myPage",
      selected: {
        events: {},
        myPage: {"height": "100%"},
        news: {},
        map: {}
      }
    });
  }

  third() {
    this.setState({
      page: "news",
      selected: {
        events: {},
        myPage: {},
        news: {"height": "100%"},
        map: {}
      }
    });
  }

  fourth() {
    this.setState({
      page: "map",
      selected: {
        events: {},
        myPage: {},
        news: {},
        map: {"height": "100%"}
      }
    });
  }
    
qr() {
    this.setState({
        page: "qr",
        selected: {
            events: {},
            myPage: {},
            news: {},
            map: {"height": "100%"}
        }   
    })
}

  render(){
    var content = <Events/>;
    var header = "Events";

    switch (this.state.page) {
      case "events":
        content = <Events/>;
        header = "Events";
        break;
      case "myPage":
        content = <MyPage/>;
        header = "My Page";
        break;
      case "map":
        content = <Maps/>;
        header = "Map";
        break;
      case "news":
        content = <News/>;
        header = "News";
        break;
      case "qr":
        content = <qrCode/>;
        header ="QR Code";
        break;
      default:
        content = <Events/>;
        header = "Events";
    }

    return (
      <div>
        <div className="header row">
          <div className="col-xs-4">
            <img src="./img/logo.png" className="dogLogo"/>
          </div>
          <div className="col-xs-4">
            <h1>{header}</h1>
          </div>
          <div className="col-xs-4">
            <a onClick={this.qr.bind(this)}>  
                <img src="./img/QR.png" className="QRLogo"/>
            </a> 
        </div>
        </div>
        <div id="content">
          {content}
        </div>
       <div className="footer">
          <ul className="footer-list" role="nav">
            <li>
              <button id="Events" className="btn-block" style={this.state.selected.events} onClick={this.first.bind(this)}>Events</button>
            </li>
            <li>
              <button id="MyPage" className="btn-block" style={this.state.selected.myPage} onClick={this.second.bind(this)}>My Page</button>
            </li>
            <li>
              <button id="News" className="btn-block" style={this.state.selected.news} onClick={this.third.bind(this)}>News</button>
            </li>
            <li>
              <button id="Map" className="btn-block" style={this.state.selected.map} onClick={this.fourth.bind(this)}>Map</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
