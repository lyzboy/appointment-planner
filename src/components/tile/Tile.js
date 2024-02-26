import React from "react";

export const Tile = ({ name, description }) => {
    return (
        <div className="tile-container">
            <p className="tile-title">{name}</p>
            {Object.entries(description).map(([key, value]) => {
                return (
                    <p className="tile" key={key}>
                        {value}
                    </p>
                );
            })}
        </div>
    );
};
