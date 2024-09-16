export type TServicesFilterProps = {
  setSearchItem: (value: string) => void;
  setFilterByMinPrice: (value: string) => void;
  setFilterByMaxPrice: (value: string) => void;
  setSortByPrice: (value: string) => void;
};

export type TServiceOption = {
  value: string;
  label: string;
};
