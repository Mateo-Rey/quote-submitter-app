import { Form, Button } from "antd";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";

const sendToApi = async (user, token, {setIsLoggedIn}) => {
  try {
    await fetch("https://chat-app-98837.web.app/new-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user, token),
    });
    setIsLoggedIn(true);
  } catch (error) {
    console.error(error);
  }
};

const auth = getAuth();
signInWithPopup(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    sendToApi(user, token)
    // ...
  })
  .catch((error) => {
    console.log(error.code)
  });
export const Login = () => {
  return (
    <>
    <h2>Login</h2>
    <Form onFinish={auth}>
      <Button type="primary" htmlType="submit">
        Login With Google!
      </Button>
    </Form>
    </>
    
  );
};
