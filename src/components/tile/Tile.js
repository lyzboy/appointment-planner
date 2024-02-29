import React from "react";

import styles from "./Tile.module.css";

export const Tile = ({ name, description }) => {
    return (
        <div className={`tile-container ${styles.tile}`}>
            <p className={`tile-title ${styles.tile_title}`}>{name}</p>
            {Object.entries(description).map(([key, value]) => {
                return (
                    <p className="tile" key={key}>
                        {typeof value === "object" ? value.toString() : value}
                    </p>
                );
            })}
        </div>
    );
};
