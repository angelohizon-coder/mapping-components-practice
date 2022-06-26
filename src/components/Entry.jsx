import React from "react";
import Template from "./Template.jsx";
import emojipedia from "../emojipedia";

function createEntry(entry) {
    return(<Template 
            key={entry.key}
            emoji={entry.emoji}
            name={entry.name}
            meaning={entry.meaning}
        />)
}

function Entry() {
    return emojipedia.map(createEntry);
}

export default Entry;