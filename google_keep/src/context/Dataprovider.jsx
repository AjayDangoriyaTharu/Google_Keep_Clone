import { createContext, useState } from "react";

export const Datacontext = createContext(null);

const Dataprovider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [archiveNotes, setarchiveNotes] = useState([]);

  const [unarchiveNotes, setunarchiveNotes] = useState([]);

  const [deletedNotes, setdeletedNotes] = useState([]);

  return (
    <Datacontext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setarchiveNotes,
        unarchiveNotes,
        setunarchiveNotes,
        deletedNotes,
        setdeletedNotes,
      }}
    >
      {children}
    </Datacontext.Provider>
  );
};

export default Dataprovider;
