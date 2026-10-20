export const sections = [
 ['overview','Start here','The system at a glance'],['strategy','Brand foundations','Purpose, people & positioning'],['identity','Logo & identity','Our recognizable signature'],['color','Color','A palette with a purpose'],['type','Typography','A clear reading rhythm'],['language','Graphic language','Pages, margins & exchanges'],['illustration','Illustration & imagery','A world built around readers'],['elements','Elements & shapes','Vector artwork, patterns & reusable components'],['voice','Voice & writing','Curious, thoughtful, human'],['components','Components','A shared interface vocabulary'],['patterns','Community patterns','From first hello to book handoff'],['templates','Creative studio','Editable, exportable compositions'],['motion','Motion & sound','Small moments, clear meaning'],['accessibility','Access & localization','Make room for every reader'],['governance','Governance','How the system stays consistent'],['assets','Asset library','The tools to make it real'],['reference','Complete reference','The original detailed guidelines']
].map(([id,title,description])=>({id,title,description}));
export const palette=[['Zero Orange','#EE6A1B','Energy & focal points'],['Deep Spine','#0F4A2E','Structure & primary actions'],['Page Green','#1F8A55','Supporting graphic fields'],['Sprout Leaf','#3DB873','Highlights & illustration'],['Paper Cream','#FFFDF8','Space to read'],['Ink Moss','#3D5A4A','Body copy & captions']];
export const pillars=[{id:'exchange',label:'Book exchange',title:'Finished your chapter?\nPass it on.',body:'A book you have finished could be someone else’s next beginning.',cta:'What are you ready to exchange?',dark:false},{id:'discussion',label:'Book discussion',title:'One ending.\nMore than one reading.',body:'Did the final page change how you understood the first?',cta:'Bring your interpretation.',dark:true},{id:'recommendation',label:'Recommendations',title:'Tell us why\nit stayed.',body:'A recommendation means more when you share the reason behind it.',cta:'Which book would you pass on?',dark:false},{id:'thinking',label:'Critical thinking',title:'What makes you\nread it that way?',body:'Start with a detail. Explore an interpretation. Make room for another.',cta:'Open the conversation.',dark:false}];
export const checklist=['One clear community purpose and one available next action','Book details, claims, quotations, and credits verified','Welcoming language without reading-status judgments','Spoilers identified before disclosure','Approved logo, correct proportions, and clear space','Readable palette pair and consistent type hierarchy','Actual-size and mobile readability checked','Alt text, captions, and keyboard access checked as applicable','Image and member-content permissions confirmed','Dates, destinations, time zones, and exchange terms accurate'];
export const writing={
 Welcome:[['First hello','Welcome to Chapter Zero. What have you been reading—or hoping to read?'],['First contribution','A question is a good place to start. What would you like to explore?'],['Return visit','Good to see you again. Which conversation would you like to pick up?']],
 Exchange:[['Offer a book','Give this book another reader. Add the title, author, edition, and an honest condition description.'],['Condition prompt','What should the next reader know? Mention annotations, wear, or missing pages.'],['Terms reminder','Agree on what is being exchanged and how the handoff will work before confirming.']],
 Discussion:[['Open a thread','Which detail changed how you understood the story?'],['Invite evidence','What in the text led you to that interpretation?'],['Spoiler warning','Spoilers: [book title]. This conversation discusses the ending.']],
 Service:[['Empty search','No books match those filters. Try a broader search or remove a filter.'],['Error','Your post did not publish. Please try again.'],['Saved draft','Your post did not publish. Your draft is still here. Try again. Use only if draft retention is implemented.']],
 Moderation:[['Gentle correction','Please respond to the interpretation without making personal remarks about the reader.'],['Report acknowledgement','Thank you for flagging this. Your report has been received. Use only after a report is actually recorded.'],['Sensitive conversation','Different experiences can shape different readings. Keep the discussion focused on the text and treat each other with care.']],
 Celebration:[['Contribution','You gave another reader a new way into the book. Thank you for sharing.'],['Exchange complete','A book has found its next reader.'],['Milestone','You helped start five conversations. Use only when supported by accurate participation data.']]
};
export const docs={
 strategy:`## A book is the beginning of a conversation.
Chapter Zero is an online community for book exchanges, discussion, recommendations, and critical thinking. Our job is to connect the book with the people and perspectives around it.
### Purpose
Make reading a shared experience that opens access to books and different ways of thinking.
### Promise
A welcoming place to share books, explore ideas, and find your next perspective.
### Four principles
- **Make room.** A first-time reader and a lifelong reader both belong.
- **Give a reason.** Explain the recommendation or interpretation.
- **Keep books moving.** Show the human connection an exchange can create.
- **Stay open.** Treat an interpretation as an invitation to think together.
### Message hierarchy
**Identity signature:** Every story starts here.

**Community message:** Share a book. Open a conversation.

**Plain description:** An online community for exchanging books, sharing recommendations, discussing what we read, and exploring ideas together.
### Participation, without pressure
Celebrate curiosity, generosity, and thoughtful contributions. Do not rank people by reading speed, book ownership, or literary taste. Badges, if introduced, should recognize useful participation rather than create an intellectual hierarchy.
### Audience needs
| Need | Creative response | Invitation |
| --- | --- | --- |
| Books to pass on | An honest book offer | Share a title and condition |
| Something to read | A reasoned recommendation | Tell us what you enjoy |
| People to talk with | One focused discussion prompt | Bring a question |
| Deeper understanding | Evidence and another interpretation | Explain your reading |
| A way back into reading | A low-pressure starting point | Start wherever you are |`,
 identity:`## One signature. Several useful formats.
Use the original supplied artwork. The artwork is preserved without tracing or reconstruction. The source files are PNGs with substantial built-in canvas space; measure sizing and clear space around the visible artwork.
### Placement rules
- Primary stacked logo: covers, introductions, and generous portrait layouts.
- Horizontal light logo: cream mastheads and landscape signatures.
- Horizontal dark logo: deep green identity panels; preserve its distinct lighter, simplified mark.
- Standalone mark: contexts where the name is already established.
- App icon: profile previews; platform submissions need correctly prepared exports.
### Clear space and size
Let X equal the visible orange zero’s stroke width. Leave 2X around lockups and 1X around the mark. Start at 320px visible width for a horizontal lockup with tagline, 240px for stacked, and 64px for the detailed mark. Proof at actual size; these are working thresholds.
### Never
Stretch, tilt, recolor, outline, add effects, retype the logo, separate its parts, or place it directly over a busy photograph.
### Master asset status
The supplied raster assets are available below. Original vector masters, a production monochrome logo, and validated tiny-size variants are still required. The new graphic motifs in this library are supporting illustrations, never replacements for the logo.`,
 language:`## The page. The margin. The exchange.
Three devices give Chapter Zero a recognizable graphic vocabulary beyond its logo. Use one dominant device per composition.
### The open page
A quiet cream panel framed by Deep Spine structure. A 16px corner and one fine vertical rule suggest a place to read. Keep the panel flat; avoid fake paper folds, torn edges, or book-flip effects.
### The margin
A small annotation beside a larger idea. Use it for evidence, a reader question, attribution, or a second interpretation. The main reading column stays clear. Never disguise promotional copy as an actual member annotation.
### The exchange
Two offset page panels linked by a simple directional path. Use it to communicate a book moving between readers or one perspective meeting another. Do not imply confirmed delivery or a completed exchange without evidence.
### Construction rules
- Use a 4px grid and the shared spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Corners: 8px controls, 16px cards, 24px large feature panels.
- Lines: 2px at a 24px icon size; scale proportionally in illustrations.
- Use at most one orange focal point in a small composition.
- Keep at least one quarter of a campaign layout visually quiet.
- Cover art preserves its original aspect ratio and color.
### Layout anatomy
Small pillar label → one expressive headline → book or human action → one question or action → modest identity signature. Align headline and copy to a shared edge. Use a maximum 1200px canvas and a 68ch reading column in digital layouts.`,
 illustration:`## Draw connection, not decoration.
Our illustration world is built from pages, shelves, hands, conversation, and everyday reading. Flat geometric scenes sit comfortably beside real book photography.
### Shape grammar
Build from rounded rectangles, open oval arcs, and gently curved connecting paths. Use consistent 2px outlines on 24px icons and proportional outlines at larger scales. Keep perspective frontal or lightly offset; do not mix isometric and flat views.
### Color and detail
Use cream, Deep Spine, up to two supporting greens, and one orange accent. Details must explain an action. Avoid gradients, glossy effects, fake handwriting, tiny decorative text, and unrelated education clip art.
### People and expression
Show an inclusive range of readers when people are depicted. Express emotion through posture and a small number of clear facial details. Avoid stereotypes, exaggerated distress, or depicting disagreement as hostility. Use the same limb proportions and construction within a scene family.
### Character decision
This release uses a recurring book-and-conversation vocabulary. A new mascot is intentionally not canonized without a character design and role review. If developed, document silhouette, proportions, face grid, expression sheet, poses, props, motion, voice boundaries, and prohibited uses before rollout.
### Photography
Natural light, true paper tones, honest cover colors, eye-level conversation, and meaningful human actions. Show book handoffs, reading spaces, and actual discussion. Avoid filters that distort covers, luxury status styling, and staged member activity presented as real.
### Permissions and authenticity
Use permitted cover images and member photos with consent. Credit authors, translators, photographers, and contributors. Generated imagery must not be presented as evidence of real members, events, reviews, or endorsements.`,
 patterns:`## Design the whole conversation.
These are specification flows for future community implementation. They do not assert that any marketplace, moderation service, or event feature is live.
### 1. Offer a book
Title and author → edition and language → honest condition → exchange preference and broad location scope → preview → publish → confirmation. Mark required fields explicitly. Explain how public and private information differ. Preserve entered data on recoverable errors when implemented.
### 2. Arrange an exchange
Review the book and terms → express interest → agree on a handoff method privately → confirm arrangements → independently confirm completion → offer an issue-reporting route. Define cancellation, unavailable books, no response, and disagreements. Do not promise verification, delivery, or financial protection without an operating policy.
### 3. Recommend a book
Book identity → why it stayed with you → who may enjoy it → optional content note → preview. Separate opinion from factual claims. A star rating alone does not replace a reason.
### 4. Start a discussion
Book reference → one question → spoiler level → optional passage reference → post. Keep a spoiler warning before the hidden content, including in notification previews and shared cards.
### 5. Disagree thoughtfully
Quote or summarize the interpretation accurately → offer a reason → cite a detail → invite a response. Provide reporting independently of disagreement; downvoting must not substitute for moderation.
### 6. Report a concern
Choose a reason → add relevant context → submit → acknowledge receipt only after successful recording → explain what happens next using the actual moderation policy. Keep reporter identity private where the implemented policy supports it. Never imply an unstaffed response deadline.
### Pattern acceptance criteria
- Loading, empty, success, validation error, network error, permission, and unavailable states are specified.
- Keyboard order follows the task and focus returns appropriately after dialogs.
- Destructive actions explain consequences and offer recovery where possible.
- Notifications avoid spoilers and private exchange information.
- All destination and policy promises match operating reality.`,
 motion:`## Let the idea move first.
Motion should explain a relationship, confirm an action, or help someone keep their place. Long reading passages stay still.
| Role | Duration | Behavior |
| --- | --- | --- |
| Hover / focus | 160ms | Small color or border transition |
| Expand / disclose | 240ms | Reveal nearby context without disorienting the reader |
| Editorial entrance | 360ms | Short fade with up to 12px of travel |
| Celebration | Up to 700ms | A single restrained acknowledgement, never an endless loop |
### Motion grammar
Use ease-out for entrances and ease-in-out for state changes. Animate transforms and opacity. Avoid bouncing letters, spinning books, confetti on routine actions, and pulsing reminders. Motion must never be the only status signal.
### Reduced motion
Respect prefers-reduced-motion. Remove travel and looping effects; show the final state immediately. Preserve every meaning and action.
### Optional sound identity
No sound files are canonized in this release. If audio is commissioned, explore a short, soft page-and-tap cue for meaningful confirmation. Avoid notification guilt, startling volume, and sound on every interaction. All audio is optional, user-controlled, and accompanied by visible information.
### Video
One question, one perspective, one invitation. Use readable captions, verify safe areas in the target platform, and close with a brief identity frame. Do not publish a spoiler in an opening thumbnail.`,
 accessibility:`## Access is part of the identity.
The goal is a usable community across abilities, devices, languages, and reading experience. This reference includes accessible patterns; formal conformance requires testing the actual product.
### Color and text
Normal text needs 4.5:1 contrast; large text and essential graphic boundaries need 3:1. Large text means at least 24 CSS px regular or approximately 18.67px bold. Links stay underlined. Status uses words or icons in addition to color.
### Interaction
Use semantic buttons, persistent form labels, a logical heading hierarchy, visible keyboard focus, and descriptive control names. Aim for 44×44px touch targets. Dialogs need an accessible name, focus containment, Escape dismissal when appropriate, and focus restoration.
### Reading and media
Support 200% text enlargement, 320px reflow, reduced motion, meaningful alt text, captions, and transcripts where appropriate. Decorative imagery has empty alt text; meaningful images describe their purpose without repeating nearby captions.
### Localization
Translate concepts and tone, not just individual words. Allow longer strings and avoid fixed-height text containers. Format dates, numbers, time zones, and names appropriately. Avoid text embedded in imagery.
### Arabic and right-to-left
This release defines Latin Sora typography only. Before Arabic rollout, select and proof a compatible Arabic family with native readers. Use logical CSS properties, preserve book-cover orientation, and mirror directional interface controls only where their meaning requires it. Do not mirror the logo, apply Latin letter spacing to Arabic, or assume mixed-script punctuation will lay out correctly.
### Release testing
Check keyboard-only use, a screen reader, zoom, mobile reflow, contrast, reduced motion, long content, and error recovery. Record findings and fixes rather than claiming accessibility from a palette check alone.`,
 governance:`## A living library, with a clear owner.
Version 2.0 adds production tools and executable reference examples to the original brand foundation. Strategy and operating rules remain proposed until adopted by the brand owner.
### Ownership
Assign a brand steward for identity and editorial rules, a product owner for interaction patterns, and an engineering owner for implementation. One person may cover multiple roles in a small team.
### Contribution process
Find an existing solution → document the unmet need → propose the smallest reusable addition → test with realistic content and access needs → review → publish a versioned change → update affected templates.
### Source of truth
Keep design tokens, React components, templates, documentation, and release notes together. Core colors and identity artwork change only through a deliberate revision. Never silently overwrite approved masters.
### Naming and lifecycle
Use CZ_[pillar]_[format]_[topic]_[YYYY-MM-DD]_v01. Assets move through draft, reviewed, approved, and deprecated states. Every approved asset needs an owner, source, rights information, and date.
### Exceptions
Record why a rule cannot meet a specific need, what alternative was used, who reviewed it, and when it should be revisited. A useful exception can become a future pattern; a one-off preference should not fragment the system.
### Review cadence
Review a sample of real output monthly. Inspect recognition, reading clarity, voice, accessibility, and task completion. Update the library when repeated friction appears. Retire older downloads visibly rather than leaving competing versions in circulation.
### What remains deliberately unresolved
Original vector logo masters, a commissioned mascot or sound identity, Arabic type selection, actual exchange logistics, and moderation service commitments require source assets or operating decisions. Nothing here fabricates those approvals.
### Release notes
**v2.0 / 20 October 2026:** React reference library, semantic token expansion, editable SVG creative exports, original supporting SVG illustrations, stateful component examples, community flow specifications, writing bank, release checklist, and downloadable package.

**v1.0 / 20 October 2026:** Brand foundation derived from six original identity assets and founder-confirmed community purpose.`
};
export function contrast(a,b){const lum=c=>{const v=c.replace('#','').match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722}; const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
export function escapeXml(s){return String(s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]))}
export function templateSvg({title,body,pillar,dark=false,format='portrait'}){const h=format==='square'?1080:format==='story'?1920:1350;const bg=dark?'#0F4A2E':'#FFFDF8',ink=dark?'#FFFDF8':'#0F4A2E';const lines=title.split('\n').flatMap(l=>{const words=l.split(' ');const out=[];let row='';for(const w of words){if((row+' '+w).trim().length>19&&row){out.push(row);row=w}else row=(row+' '+w).trim()}if(row)out.push(row);return out}).slice(0,5);return `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="${h}" viewBox="0 0 1080 ${h}"><rect width="1080" height="${h}" fill="${bg}"/><text x="80" y="110" fill="${ink}" font-family="Sora,Arial,sans-serif" font-size="26" letter-spacing="3">${escapeXml(pillar.toUpperCase())}</text><rect x="80" y="170" width="100" height="12" fill="#EE6A1B"/>${lines.map((l,i)=>`<text x="74" y="${310+i*105}" fill="${ink}" font-family="Sora,Arial,sans-serif" font-size="88" font-weight="800" letter-spacing="-3">${escapeXml(l)}</text>`).join('')}<foreignObject x="80" y="${Math.max(420,330+lines.length*105)}" width="900" height="200"><div xmlns="http://www.w3.org/1999/xhtml" style="font:36px/1.5 Sora,Arial,sans-serif;color:${ink}">${escapeXml(body)}</div></foreignObject><line x1="80" x2="1000" y1="${h-160}" y2="${h-160}" stroke="${ink}" opacity=".35"/><text x="80" y="${h-90}" fill="${ink}" font-family="Sora,Arial,sans-serif" font-size="34" font-weight="700">Chapter Zero</text><text x="1000" y="${h-90}" text-anchor="end" fill="${ink}" font-family="Sora,Arial,sans-serif" font-size="18">Every story starts here.</text></svg>`}
