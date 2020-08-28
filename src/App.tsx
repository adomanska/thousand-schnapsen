import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Container } from "@material-ui/core";
import { Table } from "./features/Game/components/Table/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Table cards={[]} />
      </Container>
    </div>
  );
};

export default App;
