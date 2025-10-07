import { createContext, useState } from "react";
const DataContext = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const SearchContext = createContext(searchTerm);

  const searchValue = createContext();
  return (
    <div>
      <></>
    </div>
  );
};

export default DataContext;
