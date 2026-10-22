import React,{useRef,useState} from 'react';
import {Pill} from '@cz/components/BrandKit';
import BrandIcon from '@cz/components/BrandIcon';
import {pillars} from '@cz/system';

const empty={name:'',email:'',city:'',interests:[],pace:'',book:'',consent:false};
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v){
 const e={};
 if(!v.name.trim())e.name='Tell us what to call you.';
 if(!v.email.trim())e.email='Add an email so we can reply.';else if(!emailPattern.test(v.email.trim()))e.email='Check the email format, for example reader@example.com.';
 if(!v.interests.length)e.interests='Choose at least one way you would like to take part.';
 if(!v.pace)e.pace='Choose the pace that suits you.';
 if(v.book.length>280)e.book='Keep it to 280 characters.';
 if(!v.consent)e.consent='Please confirm before requesting an invitation.';
 return e;
}

function Field({id,label,hint,error,optional,children}){
 return <div className={`field ${error?'has-error':''}`}>
  <label htmlFor={id}>{label}{optional&&<span className="optional">Optional</span>}</label>
  {hint&&<p className="hint" id={id+'-hint'}>{hint}</p>}
  {children}
  {error&&<p className="field-error" id={id+'-error'}><BrandIcon name="warning" size={14}/>{error}</p>}
 </div>;
}

export default function JoinForm(){
 const [values,setValues]=useState(empty);const [errors,setErrors]=useState({});const [submitted,setSubmitted]=useState(null);
 const formRef=useRef(null);const successRef=useRef(null);
 const set=(key,value)=>{setValues(v=>({...v,[key]:value}));if(errors[key])setErrors(({[key]:_,...rest})=>rest)};
 const toggleInterest=id=>set('interests',values.interests.includes(id)?values.interests.filter(x=>x!==id):[...values.interests,id]);
 const describe=(id,hint)=>[hint&&id+'-hint',errors[id]&&id+'-error'].filter(Boolean).join(' ')||undefined;

 function handleSubmit(event){
  event.preventDefault();
  const found=validate(values);setErrors(found);
  if(Object.keys(found).length){
   requestAnimationFrame(()=>formRef.current?.querySelector('[aria-invalid="true"]')?.focus());
   return;
  }
  // Front end only: no request is made and nothing is stored. Replace this with a call to a real endpoint.
  setSubmitted({...values,name:values.name.trim(),email:values.email.trim()});
  requestAnimationFrame(()=>successRef.current?.focus());
 }

 if(submitted)return <div className="join-success" ref={successRef} tabIndex={-1} role="status">
  <span className="join-success-icon"><BrandIcon name="check" size={28}/></span>
  <Pill variant="green">Demo confirmation · nothing was sent</Pill>
  <h3>Thank you, {submitted.name}. Your next chapter is waiting.</h3>
  <p>In a live version we would reply to <strong>{submitted.email}</strong> about {submitted.interests.map(id=>pillars.find(p=>p.id===id).label.toLowerCase()).join(', ')}.</p>
  <button type="button" className="button secondary" onClick={()=>{setSubmitted(null);setValues(empty)}}><BrandIcon name="edit" size={16}/>Start a new request</button>
 </div>;

 const errorCount=Object.keys(errors).length;
 return <form className="join-form" ref={formRef} onSubmit={handleSubmit} noValidate>
  {errorCount>0&&<div className="form-summary" role="alert"><BrandIcon name="info" size={18}/>{errorCount===1?'One detail needs attention.':`${errorCount} details need attention.`}</div>}
  <div className="field-row">
   <Field id="name" label="Your name" error={errors.name}>
    <input id="name" name="name" autoComplete="name" value={values.name} onChange={e=>set('name',e.target.value)} aria-invalid={!!errors.name} aria-describedby={describe('name')}/>
   </Field>
   <Field id="email" label="Email" error={errors.email}>
    <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={e=>set('email',e.target.value)} aria-invalid={!!errors.email} aria-describedby={describe('email')}/>
   </Field>
  </div>
  <div className="field-row">
   <Field id="city" label="City or region" optional hint="Helps with future local exchanges." error={errors.city}>
    <input id="city" name="city" autoComplete="address-level2" value={values.city} onChange={e=>set('city',e.target.value)} aria-describedby={describe('city',true)}/>
   </Field>
   <Field id="pace" label="Your reading pace" error={errors.pace}>
    <select id="pace" name="pace" value={values.pace} onChange={e=>set('pace',e.target.value)} aria-invalid={!!errors.pace} aria-describedby={describe('pace')}>
     <option value="">Choose one</option>
     <option value="slow">A few pages when I can</option>
     <option value="steady">About a book a month</option>
     <option value="fast">Always mid-way through something</option>
    </select>
   </Field>
  </div>
  <fieldset className={`interest-group ${errors.interests?'has-error':''}`} aria-describedby={errors.interests?'interests-error':undefined}>
   <legend>How would you like to take part?</legend>
   <div className="interest-options">{pillars.map(p=><label key={p.id} className={`interest-option ${values.interests.includes(p.id)?'is-checked':''}`}>
    <input type="checkbox" name="interests" value={p.id} checked={values.interests.includes(p.id)} onChange={()=>toggleInterest(p.id)} aria-invalid={!!errors.interests}/>
    <BrandIcon name={iconFor[p.id]} size={20}/><span>{p.label}</span>
   </label>)}</div>
   {errors.interests&&<p className="field-error" id="interests-error"><BrandIcon name="warning" size={14}/>{errors.interests}</p>}
  </fieldset>
  <Field id="book" label="A book you would pass on, and why" optional hint={`${values.book.length}/280 characters`} error={errors.book}>
   <textarea id="book" name="book" rows={3} value={values.book} onChange={e=>set('book',e.target.value)} aria-invalid={!!errors.book} aria-describedby={describe('book',true)}/>
  </Field>
  <div className={`consent ${errors.consent?'has-error':''}`}>
   <label><input type="checkbox" checked={values.consent} onChange={e=>set('consent',e.target.checked)} aria-invalid={!!errors.consent} aria-describedby={errors.consent?'consent-error':undefined}/>I am happy for Chapter Zero to email me about this invitation.</label>
   {errors.consent&&<p className="field-error" id="consent-error"><BrandIcon name="warning" size={14}/>{errors.consent}</p>}
  </div>
  <div className="form-actions">
   <button type="submit" className="cz-button cz-accent">Request an invitation<BrandIcon name="arrow-right" size={18}/></button>
   <span>Sample form · no data leaves this page.</span>
  </div>
 </form>;
}

export const iconFor={exchange:'exchange',discussion:'discussion',recommendation:'recommend',thinking:'perspective'};
