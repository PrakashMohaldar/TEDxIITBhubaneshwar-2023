import React, {createContext, useState} from "react";

export const SpeakerContext = createContext();

const SpeakerContextProvider = ({children}) =>{
    const [speakerTabStatus, setSpeakerTabStatus] = useState(false);
    const [keyvalue, setKeyvalue] = useState(1);
    const updateSpeakerTabStatus = (newStatus, key) =>{
        setSpeakerTabStatus(newStatus);
        setKeyvalue(key);
    };

    return (
        <SpeakerContext.Provider value={{speakerTabStatus, updateSpeakerTabStatus, keyvalue}}>
            {children}
        </SpeakerContext.Provider>
    );
}
export default SpeakerContextProvider;