import React from 'react';
import firebase from 'firebase';

export default class News extends React.Component {

  constructor(props){
    super(props);
    this.state = {news: [], value: ''};
    this.listStyle = {'listStyleType': 'none'};
    // this.state = {page: "main"}
  }

  componentWillUnmount(){
    reference.off()
  }

  componentWillMount(){
    var reference = firebase.database().ref("messages/")
    var self = this;
    reference.on('value', function(snapshot){
      var newsArray = [];
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        newsArray.push(childData);
      });
      self.setState({news: newsArray});
    });
  }

  render() {
    return (
        <div>
          <ul style={this.listStyle}>
            {this.state.news.map(function(curnew, index){
              return <li key={index}><b>{curnew.name}</b>: {'\'' + curnew.message + '\''}</li>
            })}
          </ul>
        </div>
    )
  }
}
