import { createContext, useState, useEffect } from "react";

import * as journalService from '../services/journalService';

export const JournalContext = createContext();

// export const JournalProvider = ({children}) => {
//     const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     journalService.getAllShared().then((result) => {
//       setEntries(result);
//     });
//   }, []);


//     return (
//         <JournalContext.Provider value={entries}>
//             {children}
//         </JournalContext.Provider>
//     )
// }