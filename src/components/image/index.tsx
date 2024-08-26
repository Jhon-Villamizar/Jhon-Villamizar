import { useContext } from "react";
import { DataContext } from "../../App";
import "./image.css";

const Image = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="containerImage">
      <img src={data?.image} alt={data?.name} />
    </div>
  );
};

export default Image;
