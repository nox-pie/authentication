// index.js

// Handle navigation for login page
const signUpLink = document.getElementById('signUpLink');
if (signUpLink) {
    signUpLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'signup.html';  // Redirect to Signup page
    });
}

const forgotPasswordLink = document.getElementById('forgotPasswordLink');
if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'forgot-password.html';  // Redirect to Forgot Password page
    });
}

// Handle navigation for signup page
const loginLink = document.getElementById('loginLink');
if (loginLink) {
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html';  // Redirect to Login page
    });
}

// Handle back to login from forgotten password page
const backToLoginButton = document.getElementById('backToLoginButton');
if (backToLoginButton) {
    backToLoginButton.addEventListener('click', function() {
        window.location.href = 'login.html';  // Redirect back to Login page
    });
}

































// // index.js

// // Your Firebase configuration (from Firebase Console)
// const firebaseConfig = {
//     apiKey: "your-api-key",
//     authDomain: "your-auth-domain",
//     projectId: "your-project-id",
//     storageBucket: "your-storage-bucket",
//     messagingSenderId: "your-messaging-sender-id",
//     appId: "your-app-id"
//   };
  
//   // Initialize Firebase
//   const app = firebase.initializeApp(firebaseConfig);
//   const auth = firebase.getAuth(app);
  
//   // Sign Up function
//   function signUp() {
//     const email = document.getElementById("signup-email").value;
//     const password = document.getElementById("signup-password").value;
  
//     firebase.createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         alert("Sign Up Successful! User: " + user.email);
//       })
//       .catch((error) => {
//         alert("Error: " + error.message);
//       });
//   }
  
//   // Login function
//   function login() {
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;
  
//     firebase.signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         alert("Login Successful! User: " + user.email);
//       })
//       .catch((error) => {
//         alert("Error: " + error.message);
//       });
//   }
  
//   // Sign Out function
//   function signOut() {
//     firebase.signOut(auth).then(() => {
//       alert("Signed Out Successfully");
//     }).catch((error) => {
//       alert("Error: " + error.message);
//     });
//   }
  