import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, sendPasswordResetEmail } from 'firebase/auth';

// TODO: Replace with your Firebase project configuration
// Follow these steps to set up Firebase:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing one
// 3. Go to Project Settings > General > Your apps
// 4. Add a Web app if you haven't already
// 5. Copy the config object and replace the values below
// 6. Enable Authentication > Sign-in method > Email/Password

const firebaseConfig = {
  apiKey: "your-actual-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Auth Providers
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// Password reset function
export const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: 'Password reset email sent!' };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

export default app;
