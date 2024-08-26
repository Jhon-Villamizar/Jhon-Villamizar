import { useContext } from "react";
import useApi from "../../hooks/useApi";
import { DataContext } from "../../App";
import "./buttons.css";

const Buttons = () => {
  const { setData } = useContext(DataContext);

  const { handlerCall } = useApi();

  return (
    <div className="containerButtons">
      <button onClick={handlerCall}>Random</button>
      <button onClick={() => setData(null)}>Clear</button>
    </div>
  );
};

export default Buttons;
