import { useContext } from "react";
import { DataContext } from "../../App";
import "./form.css";

const Form = () => {
  const { data } = useContext(DataContext);
  return (
    <div className="containerForm">
      <form>
        <div>
          <label>Name</label>
          <input type="text" defaultValue={data?.name} disabled />
        </div>
        <div>
          <label>Species</label>
          <input type="text" defaultValue={data?.species} disabled />
        </div>
        <div>
          <label>Status</label>
          <input type="text" defaultValue={data?.status} disabled />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" defaultValue={data?.gender} disabled />
        </div>
      </form>
    </div>
  );
};

export default Form;
