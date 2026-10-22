import React,{useEffect,useState} from 'react';
import {BrandShape,Pill,ReaderAvatar,ReaderGroup,SectionHeading,QuoteCard,ReadingProgress,DiscussionPrompt,ExchangeTicket,CollectionCard,BookmarkButton,EditorialNote,EventCard} from '@cz/components/BrandKit';
import BrandIcon from '@cz/components/BrandIcon';
import {patternSvg} from '@cz/brand-elements';
import {pillars} from '@cz/system';
import Logo from './Logo';
import JoinForm,{iconFor} from './JoinForm';

const pattern=(id,treatment)=>`url("data:image/svg+xml,${encodeURIComponent(patternSvg(id,treatment))}")`;
const nav=[['offers','What we offer'],['exchange','Exchange'],['discuss','Discuss'],['events','Read together'],['join','Join']];
const shapeFor={exchange:'exchange',discussion:'dialogue',recommendation:'ribbon',thinking:'brackets'};
const sampleReaders=[{initials:'AM',tone:'green',label:'Sample reader AM'},{initials:'JO',tone:'orange',label:'Sample reader JO'},{initials:'RK',tone:'dark',label:'Sample reader RK'},{initials:'LS',tone:'cream',label:'Sample reader LS'}];
const earlyAccess=['Offer or request a book exchange with clear, agreed terms','Join a moderated discussion with spoilers marked','Keep a shelf of recommendations, with the reason they stayed','Save ideas from the margins to return to later'];

const BookIcon=props=><BrandIcon name="book" {...props}/>;

function scrollTo(id){document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}

export default function App(){
 const [menu,setMenu]=useState(false);const [toast,setToast]=useState('');const [saved,setSaved]=useState({});
 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),3200);return()=>clearTimeout(t)},[toast]);
 useEffect(()=>{if(!menu)return;const onKey=e=>e.key==='Escape'&&setMenu(false);addEventListener('keydown',onKey);return()=>removeEventListener('keydown',onKey)},[menu]);
 const demo=what=>()=>setToast(`${what} — sample page, no action taken.`);
 const go=id=>{setMenu(false);scrollTo(id)};
 const toggleSave=key=>value=>{setSaved(s=>({...s,[key]:value}));setToast(value?'Idea saved on this page only.':'Idea removed.')};

 return <>
  <a className="skip" href="#main">Skip to content</a>
  <header className="site-header">
   <div className="container header-inner">
    <a href="#top" className="header-logo" aria-label="Chapter Zero home"><Logo height={40}/></a>
    <nav id="site-nav" className={`site-nav ${menu?'is-open':''}`} aria-label="Main">
     {nav.map(([id,label])=><a key={id} href={'#'+id} onClick={e=>{e.preventDefault();go(id)}}>{label}</a>)}
    </nav>
    <button className="button primary header-cta" onClick={()=>go('join')}>Request an invite</button>
    <button className="menu-toggle" aria-expanded={menu} aria-controls="site-nav" aria-label={menu?'Close menu':'Open menu'} onClick={()=>setMenu(m=>!m)}><BrandIcon name={menu?'close':'menu'}/></button>
   </div>
  </header>

  <main id="main">
   <section id="top" className="hero" style={{backgroundImage:pattern('margins','forest')}}>
    <div className="container hero-inner">
     <div className="hero-copy">
      <Pill icon={BookIcon}>An online community for readers</Pill>
      <h1>Every story <span className="underlined">starts here.</span></h1>
      <div className="headline-line" aria-hidden="true"><BrandShape name="underline" treatment="growth"/></div>
      <p>Chapter Zero is a place to pass a finished book to its next reader, compare what an ending meant to you, and share the books that stayed — with the reason why.</p>
      <div className="hero-actions">
       <button className="cz-button cz-accent" onClick={()=>go('join')}>Request an invitation<BrandIcon name="arrow-right" size={18}/></button>
       <button className="button secondary" onClick={()=>go('offers')}>See what we offer</button>
      </div>
      <ReaderGroup readers={sampleReaders} caption="Sample readers · illustrative only"/>
     </div>
     <div className="hero-art" aria-hidden="true">
      <BrandShape name="portal" treatment="forest" className="hero-portal"/>
      <div className="hero-mark"><Logo variant="mark" height={150} alt=""/></div>
      <BrandShape name="stack" treatment="growth" className="hero-stack"/>
      <BrandShape name="page" treatment="sunrise" className="hero-page"/>
      <span className="hero-caption">ANOTHER READER.<br/>ANOTHER BEGINNING.</span>
     </div>
    </div>
   </section>

   <section id="offers" className="section">
    <div className="container">
     <SectionHeading eyebrow="What we offer" title="Four ways to begin a chapter" description="Every part of Chapter Zero is built around one idea: a book means more once it is shared." action="Request an invitation" onAction={()=>go('join')}/>
     <div className="offer-grid">{pillars.map(p=><article key={p.id} className={`offer-card ${p.dark?'offer-card--dark':''}`}>
      <div className="offer-top"><span className="offer-icon"><BrandIcon name={iconFor[p.id]} size={22}/></span><Pill variant={p.dark?'orange':'neutral'}>{p.label}</Pill></div>
      <h3>{p.title.split('\n').map((line,i)=><span key={i}>{line}</span>)}</h3>
      <p>{p.body}</p>
      <button className="text-button" onClick={()=>go('join')}>{p.cta}<BrandIcon name="arrow-up-right" size={16}/></button>
      <BrandShape name={shapeFor[p.id]} treatment={p.dark?'inverse':'growth'} className="offer-shape"/>
     </article>)}</div>

     <div className="early-access">
      <div className="early-access-art"><BrandShape name="ribbon" treatment="inverse"/></div>
      <div>
       <Pill variant="orange">Early access invitation · proposed</Pill>
       <h3>Join as one of the first readers</h3>
       <ul>{earlyAccess.map(item=><li key={item}><BrandIcon name="check" size={18}/>{item}</li>)}</ul>
      </div>
      <button className="cz-button cz-accent" onClick={()=>go('join')}>Claim your invitation<BrandIcon name="arrow-right" size={18}/></button>
     </div>
    </div>
   </section>

   <section id="exchange" className="section section--tint">
    <div className="container">
     <SectionHeading eyebrow="Book exchange" title="Finished your chapter? Pass it on." description="Listings show the condition and the terms up front, so both readers agree before anything changes hands."/>
     <div className="exchange-grid">
      <div className="stack-gap">
       <ExchangeTicket title="The Left Hand of Darkness" author="Ursula K. Le Guin" condition="Good · light pencil notes in the margins" details="Happy to post within the UK, or swap for a novel in translation." onAction={demo('Exchange details')}/>
       <ExchangeTicket title="Pachinko" author="Min Jin Lee" condition="Like new · paperback" details="Local handoff preferred. Looking for any historical fiction." onAction={demo('Exchange details')}/>
       <div className="save-row"><p>Seen a book worth coming back to?</p><BookmarkButton saved={!!saved.exchange} onChange={toggleSave('exchange')} label="Save this exchange"/></div>
      </div>
      <CollectionCard title="Books that changed their minds" description="A shared shelf of novels readers say made them see an argument differently." topics={['Belonging','Translation','Memory']} onOpen={demo('Shelf')}/>
      <CollectionCard dark eyebrow="A community shelf" title="First pages that stayed" description="Openings members recommend, with the line that convinced them to keep reading." topics={['Openings','Classics','Debuts']} onOpen={demo('Shelf')}/>
     </div>
    </div>
   </section>

   <section id="discuss" className="section">
    <div className="container">
     <SectionHeading eyebrow="Book discussion" title="One ending. More than one reading." description="Prompts start from a detail, welcome different interpretations, and always mark spoilers."/>
     <div className="discuss-grid">
      <DiscussionPrompt question="Did the final page change how you understood the first?" book="Discussion sample · Never Let Me Go, Kazuo Ishiguro" spoilers onRespond={demo('Add a perspective')}/>
      <div className="stack-gap">
       <QuoteCard tone="dark" quote="A book you have finished could be someone else’s next beginning." attribution="Chapter Zero" context="Community line"/>
       <EditorialNote label="In the margin">Disagreeing is welcome here. Start with a detail from the text, explain how you read it, and leave room for someone who read it another way.</EditorialNote>
       <div className="save-row"><p>Keep this prompt for later.</p><BookmarkButton saved={!!saved.prompt} onChange={toggleSave('prompt')}/></div>
      </div>
     </div>
    </div>
   </section>

   <section id="events" className="section section--pattern" style={{backgroundImage:pattern('shelves','growth')}}>
    <div className="container">
     <SectionHeading eyebrow="Read together" title="A shared pace, not a race" description="Reading circles move together chapter by chapter. Progress is personal and never ranked."/>
     <div className="events-grid">
      <div className="stack-gap">
       <ReadingProgress value={142} max={320} label="Sample circle · The Remains of the Day" detail="Chapter 4 of 8 · next conversation opens when the circle reaches page 160."/>
       <ReadingProgress value={58} max={100} label="Your reading this month" detail="Illustrative progress. Pages read are only visible to you."/>
       <div className="host-card">
        <ReaderAvatar initials="CZ" tone="dark" label="Chapter Zero host"/>
        <div><strong>Hosted by Chapter Zero volunteers</strong><p>Each circle has a host who keeps the pace kind and the spoilers marked.</p></div>
       </div>
      </div>
      <div className="stack-gap">
       <EventCard day="06" month="NOV" title="Opening lines evening" time="Online · 19:00–20:00 GMT" description="Bring the first sentence of a book you love and tell us why it worked." onAction={demo('Event details')}/>
       <EventCard day="20" month="NOV" title="Exchange table: winter reads" time="Online · 18:30–19:30 GMT" description="List a book you have finished and find the one you will read next." onAction={demo('Event details')}/>
      </div>
     </div>
    </div>
   </section>

   <section id="join" className="section join-section">
    <div className="container join-inner">
     <div className="join-intro">
      <span className="eyebrow">Join Chapter Zero</span>
      <h2>Request an invitation</h2>
      <p>Tell us a little about how you read. We are opening the community in small groups so every new reader finds a conversation to join.</p>
      <ul className="join-points">
       <li><BrandIcon name="readers" size={20}/>Small, hosted reading circles</li>
       <li><BrandIcon name="exchange" size={20}/>Exchanges with agreed terms</li>
       <li><BrandIcon name="notification" size={20}/>Only the emails you ask for</li>
      </ul>
      <BrandShape name="portal" treatment="sunrise" className="join-shape"/>
     </div>
     <JoinForm/>
    </div>
   </section>
  </main>

  <footer className="site-footer" style={{backgroundImage:pattern('conversations','inverse')}}>
   <div className="container footer-inner">
    <div><Logo variant="dark" height={44}/><p>An online community for readers who exchange, discuss, and recommend books.</p></div>
    <nav aria-label="Footer">{nav.map(([id,label])=><a key={id} href={'#'+id} onClick={e=>{e.preventDefault();go(id)}}>{label}</a>)}</nav>
    <div className="footer-icons">
     <button aria-label="Share Chapter Zero" onClick={demo('Share')}><BrandIcon name="share"/></button>
     <button aria-label="Search books" onClick={demo('Search')}><BrandIcon name="search"/></button>
     <button aria-label="Reading list" onClick={demo('Reading list')}><BrandIcon name="reading-list"/></button>
    </div>
   </div>
   <div className="container footer-note">Sample landing page built with the Chapter Zero brand library. Names, listings and events are illustrative.</div>
  </footer>

  <div className={`toast ${toast?'is-visible':''}`} role="status" aria-live="polite">{toast&&<><BrandIcon name="info" size={18}/>{toast}</>}</div>
 </>;
}
