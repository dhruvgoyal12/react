import React from "react";
import { Route } from "react-router";

export default function Welcome() {
  return (
    <section>
      The Welcome Page
      <Route path="/welcome/new-user">
        <p>Welcome new User</p>
      </Route>
    </section>
  );
}
