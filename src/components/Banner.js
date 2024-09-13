import React from "react";


export default function Banner({ children, imageUrl, marginTop, marginBottom, height }) {

    // Bannière variable selon les pages
    const bannerStyle = {
        marginTop,
        marginBottom,
        height,
        backgroundImage: `url(${imageUrl})`,
    };
  
    return (
        <div className='banner__image' style={bannerStyle}>
        <div className='banner__image--overlay' />
        {children}
        </div>
    )
}