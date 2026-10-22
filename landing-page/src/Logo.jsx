import React from 'react';
import horizontalLight from '@cz-assets/horizontal-light.png';
import horizontalDark from '@cz-assets/horizontal-dark.png';
import logoMark from '@cz-assets/logo-mark.png';

// Original raster artwork sits on a matching background; we only trim unused canvas, never redraw.
const artwork={
 light:{src:horizontalLight,width:1600,box:[246,172,1387,405]},
 dark:{src:horizontalDark,width:1600,box:[249,172,1387,389]},
 mark:{src:logoMark,width:1024,box:[167,138,857,820]}
};

export default function Logo({variant='light',height=44,alt='Chapter Zero — Every story starts here'}){
 const {src,width,box:[x1,y1,x2,y2]}=artwork[variant];
 const scale=height/(y2-y1);
 return <span className={`logo logo--${variant}`} style={{width:(x2-x1)*scale,height}}>
  <img src={src} alt={alt} width={width*scale} style={{left:-x1*scale,top:-y1*scale}}/>
 </span>;
}
