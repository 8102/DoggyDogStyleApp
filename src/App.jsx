import React from 'react';
import firebase from 'firebase';

import Main from './Main.jsx';
import Events from './Events.jsx';
import Maps from './Maps.jsx';
import News from './News.jsx';
import MyPage from './MyPage.jsx';
import myFirebase from './FirebaseApp.jsx';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {page: "main"};
  }

  componentWillMount() {
  }

  first() {
    this.setState({page: "events"});
  }

  second() {
    this.setState({page: "myPage"});
  }

  third() {
    this.setState({page: "map"});
  }

  fourth() {
    this.setState({page: "news"});
  }

  render(){
    var content = <Main/>;
    var header = "Main";

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
      default:
        content = <Main/>;
        header = "Events";
    }

    return (
      <div>
        <div className="header">
          <h1>{header}</h1>
        </div>
        <div id="content">
            {content}
        </div>
       <div className="footer">
          <ul className="footer-list" role="nav">
            <button onClick={this.first.bind(this)}>Events</button>
            <button onClick={this.second.bind(this)}>My Page</button>
            <button onClick={this.third.bind(this)}>Map</button>
            <button onClick={this.fourth.bind(this)}>News</button>
          </ul>
        </div>
      </div>
    )
  }
}
