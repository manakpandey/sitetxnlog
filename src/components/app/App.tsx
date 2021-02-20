import React from "react";
import LoginPage from "../../routes/login";
import Home from "../../routes/home";

import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import { config } from "../../../config";

import "./index.scss";

export const App = (): JSX.Element => {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase.default}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user }) => {
          if (!isSignedIn) return <LoginPage />;
          else return <Home user={user} />;
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
};
