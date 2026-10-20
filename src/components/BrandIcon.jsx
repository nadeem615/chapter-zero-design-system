import React from 'react';
import {iconCatalog} from '../icons';
/** Decorative alongside visible text; provide label for a meaningful standalone image. */
export default function BrandIcon({name,size=24,label,strokeWidth=2,className='',...props}){
 const icon=iconCatalog.find(x=>x.name===name);if(!icon)return null;
 return <svg {...props} className={`cz-icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" role={label?'img':undefined} aria-label={label} aria-hidden={label?undefined:true} focusable="false" style={{flexShrink:0,verticalAlign:'middle',...props.style}} dangerouslySetInnerHTML={{__html:icon.paths}}/>;
}
