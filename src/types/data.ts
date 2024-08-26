export type DataContextType = {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
};

export type Data = {
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
};
