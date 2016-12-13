import React from 'react';
import firebase from 'firebase';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {news: [], value: ''};
  }

  componentWillUnmount() {
    firebase.database().ref("news/").off()
  }

  componentWillMount() {
/*    firebase.auth().signInWithEmailAndPassword(
			"test@test.com",       "passpass"
		).then(function(user) {
			alert(user.email);
		}).catch(function(error) {
			alert(error.message);
			alert(error.code);
		})
*/
    var user = firebase.auth().currentUser;
    var data = {
      headline : "Blabla",
      smallDesc : "Small Description",
      description : "This is a normal Description"
    }
    var newsKey = firebase.database().ref().child('news').push().key;
    var updates = {};
    updates['/news/' + newsKey] = data;
    firebase.database().ref().update(updates);

    var reference = firebase.database().ref("news/")
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

  handleClick(e) {
    e.preventDefault();
    this.setState({contentToDisplay: true});
  }

  render() {
    return (
        <div>
          {this.state.news.map(function(curnew, index){
            console.log(curnew);
            return (
              <a style={{"display": "block"}} key={index} href="#">
                <div className="smallArticle row">
                  <div className="col-xs-4">
                    <img src="./img/newsFav.jpeg" />
                  </div>
                  <div className="col-xs-8">
                    <h2>{curnew.headline}</h2>
                    <p>{curnew.smallDesc}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
    )
  }
}
