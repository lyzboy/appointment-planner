import React from "react";
import { Tile } from "../tile/Tile";

import styles from "./TileList.module.css";

export const TileList = ({ list }) => {
    return (
        <div className={styles.tileList}>
            {list.map((elem) => {
                return (
                    <Tile key={elem.name} name={elem.name} description={elem} />
                );
            })}
        </div>
    );
};
