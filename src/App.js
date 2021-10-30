import { Component } from 'react';
import './App.css';
import Header from './components/header/Header.component';
import SignIn from './pages/signin-page/Signin.component';
import Note from './components/note/Note';
import { auth } from './firebase/firebase.utils'
import SignedIn from './pages/signedin-page/Signedin.component';

class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      username: ''
    }
  }

  unsubscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      if (user !== null) {
        this.setState({ username: user.displayName })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div className='app'>
      <Header></Header>
      {
        (this.state.currentUser === null) ? <SignIn></SignIn> : <SignedIn username={this.state.username}></SignedIn>
      }
      <Note></Note>
    </div>
  );
  }
}

export default App;
