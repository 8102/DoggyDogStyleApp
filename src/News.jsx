import React from 'react';
import firebase from 'firebase';

import Article from './news/Article.jsx';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {news: [], value: ''};
  }

  componentWillUnmount() {
    firebase.database().ref("news/").off();
  }

  componentWillMount() {
    var user = firebase.auth().currentUser;

    var reference = firebase.database().ref("news/");
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
          {this.state.news.map(function(curnew, index){
            return (
              <Article
                headline={curnew.headline}
                smallDesc={curnew.smallDesc}
                description={curnew.description}
                index={index}
                key={index}
                />
            );
          })}
        </div>
    )
  }
}
