import React from "react";

function Template(Prop) {
    return(
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label={Prop.name}>{Prop.emoji}</span>
                <span>{Prop.name}</span>
            </dt>
            <dd>
                {Prop.meaning}
            </dd>
        </div>
    )
};

export default Template;