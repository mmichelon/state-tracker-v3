import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import firebase from 'firebase/app';
// import 'firebase/auth';

// Google Authentication
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


class Login extends Component {

  // Not really working
  // Initialize the state
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: ""
  //   }
  // }
  //
  // // Fetch the list on first mount
  // componentDidMount() {
  //   this.getUser();
  // }
  //
  // // Retrieves the list of items from the Express app
  // getUser = () => {
  //   fetch('/api/getUser')
  //   .then(res => res.json())
  //   .then(user => this.setState({ user }))
  // }

  constructor(props) {
  super(props);
  this.state = {
    count: 0,
    loggedIn: 0,
    userName: 'Not Logged In'
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    document.title = `logged In Value: ${this.state.loggedIn}`;
    document.title = `UserName: ${this.state.userName}`
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    document.title = `logged In Value: ${this.state.loggedIn}`;
    document.title = `UserName: ${this.state.userName}`;
  }

  // function GoogleInfo(){
  render() {

    const { user } = this.state;

    //Google Authentication
    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const LoginWithGoogle = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
          console.log("successful log in, User data below");
          console.log(result.user.auth.currentUser.displayName);
          // this.state.loggedIn = 1;
          this.setState({ loggedIn: 1 });
          this.setState({ userName: result.user.auth.currentUser.displayName });

        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.log("Issue Logging in: see message");
          console.log(error.message);

          // Set User data
          this.setState({ loggedIn: 100 });
          this.setState({ userName: "Unable to Log in" });

        });
    };

    return (
    <div className="App">
      <h1> Login Page</h1>
      {/* Link to List.js */}
      <p>You clicked {this.state.count} times</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Click me
      </button>
      <div>
          <button onClick={LoginWithGoogle} variant="raised">
              Login With Google
          </button>
          <p>
            logged In Value: {this.state.loggedIn}
          </p>
      </div>
      <div>
      <p>
        UserName: {this.state.userName}
      </p>
      </div>
    </div>
    );
  }
}

export default Login;


// <Link to={'./list'}>
//   <button onClick={LoginWithGoogle} variant="raised">
//       Login
//   </button>
// </Link>

// Testing google sign in
// {user ? (
//   <div>
//     {/* Render the list of items */}
//     {user.map((user) => {
//       return(
//         <div>
//           {user}
//         </div>
//       );
//     })}
//   </div>
// ) : (
//   <div>
//     <button onClick={LoginWithGoogle} variant="raised">
//         Login
//     </button>
//     <h2>No User Found</h2>
//   </div>
// )
// }
