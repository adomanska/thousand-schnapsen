import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { Table } from "./features/Game/components/Table/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Table />
      </Container>
    </div>
  );
};

export default App;
