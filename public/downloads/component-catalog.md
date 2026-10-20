# Chapter Zero · Reusable component catalog

## Installation

Use React 19 and lucide-react. Copy BrandKit.jsx and brand-kit.css into a components directory, and brand-elements.js one level above it. Import BrandKit.jsx exports into your app. Sora, shared .button/.primary/.text-button/.eyebrow styles, and your own reset are required for matching presentation; the source ZIP includes base-styles.css with these rules.

| Component | Props | Behavior |
| --- | --- | --- |
| BrandShape | name, treatment, className | Decorative SVG, hidden from assistive tech; never a logo replacement |
| Pill | children, variant, icon | Noninteractive categorical label; neutral/green/orange |
| ReaderAvatar | initials, tone, label | Accessible sample identity marker; green/orange/dark/cream |
| ReaderGroup | readers, caption | Up to four avatars with an explicit caption; no fabricated member count |
| SectionHeading | eyebrow, title, description, action, onAction | Shared section hierarchy and optional action |
| QuoteCard | quote, attribution, context, tone | Semantic figure/blockquote with required accurate attribution; light/dark |
| ReadingProgress | value, max, label, detail | Native labelled progress; values clamped safely; not competitive |
| DiscussionPrompt | category, question, book, spoilers, onRespond | One prompt and one action; spoilers prop is metadata only, actual spoilers need disclosure |
| ExchangeTicket | title, author, condition, details, onAction | Structured condition and terms; sample label included, replace only for real listings |
| CollectionCard | eyebrow, title, description, topics, onOpen, dark | Collection preview with one explicit action |
| BookmarkButton | saved, onChange, label | Controlled toggle with aria-pressed and dynamic accessible name |
| EditorialNote | label, children | Secondary semantic aside; not a primary instruction container |
| EventCard | day, month, title, time, description, onAction | Date marker and single action; example label remains until using verified event data |

Actions are callbacks, not hardcoded destinations. The library demonstrates them without making posts or creating exchanges. Connect callbacks to real tasks in a product implementation. Avatar and event examples are visibly illustrative. Check actual content fit, keyboard access, and contrast in the destination layout.
