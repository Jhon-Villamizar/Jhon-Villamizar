import { createContext, useState } from "react";
import Card from "./components/card";
import { Data, DataContextType } from "./types/data";
import "./App.css";

const iDataContextState = {
  data: null,
  setData: () => {},
};

export const DataContext = createContext<DataContextType>(iDataContextState);

function App() {
  const [data, setData] = useState<Data | null>(null);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <Card />
    </DataContext.Provider>
  );
}

export default App;
