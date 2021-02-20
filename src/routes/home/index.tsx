import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/auth";

const Home = ({ user }: { user: unknown }): JSX.Element => {
  return (
    <div>
      <button onClick={() => firebase.default.auth().signOut()}>
        Sign Out
      </button>
      {JSON.stringify(user)}
      <Switch>
          <Route path="/newAccount"></Route>
      </Switch>
    </div>
  );
};

export default Home;
