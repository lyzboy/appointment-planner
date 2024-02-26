import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
    console.log(list);
    return (
        <>
            {list.map((elem) => {
                return (
                    <Tile key={elem.name} name={elem.name} description={elem} />
                );
            })}
        </>
    );
};
