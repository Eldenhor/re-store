import "./app.css";
import React from "react";
import { withBookstoreService } from "../hoc";

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks());
  return (
    <h3>App</h3>
  );
};

export default withBookstoreService()(App);