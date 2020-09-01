import React from "react";
import "./App.css";
import { MainPage } from "./features/Game/components/MainPage";
import { ServiceDataContext } from "./features/Game/utils/context";
import { serviceData } from "./features/Game/utils/config";

const App: React.FC = () => {
  return (
    <div className="App">
      <ServiceDataContext.Provider value={serviceData}>
          <MainPage />
      </ServiceDataContext.Provider>
    </div>
  );
};

export default App;
