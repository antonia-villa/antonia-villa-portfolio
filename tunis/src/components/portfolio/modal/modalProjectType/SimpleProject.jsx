import React from "react";

export const SimpleProject = ({images}) => {
    return ( 
        <div>
            {images.map((image, i) => {return <img src={image} key={i} alt="portfolio project demo" />})} 
        </div>
    )

};
