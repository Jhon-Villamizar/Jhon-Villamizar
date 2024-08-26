import { useContext } from "react";
import { DataContext } from "../App";

const useApi = () => {
  const { setData } = useContext(DataContext);
  const handlerCall = async () => {
    const id = Math.floor(Math.random() * (183 - 1 + 1) + 1);
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const info = await res.json();
    setData(await info);
  };

  return { handlerCall };
};

export default useApi;
