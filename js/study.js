/* SCRUMHACK study lessons — structured like the Scrum Guide 2020 */
const LESSONS=[
{t:"0 · Start here — what is Scrum and what is the exam",b:[
"Scrum is a lightweight FRAMEWORK for solving complex problems in teams. It is not a methodology and not a set of detailed procedures — it deliberately defines only the minimum: 3 accountabilities, 5 events, 3 artifacts (the 3·5·3 map). Everything else is up to the team.",
"It was formalized by Ken Schwaber and Jeff Sutherland in the Scrum Guide. The current version is from November 2020 — the exam is based ONLY on this document (13 pages). Everything in this app follows it.",
"The PSM I exam (scrum.org): 80 questions, 60 minutes, pass mark 85%, online, open book (but there is NO time to search — you must know it). This app's simulator uses the same pace: 40Q/30min."],
k:["Scrum = framework, not methodology","3 accountabilities · 5 events · 3 artifacts","Scrum Guide 2020 is the single source of truth","PSM I: 80Q / 60min / 85%"],
x:["'Scrum is immutable' — if you implement only parts of it, the result is NOT Scrum.","Scrum has no project managers, no Gantt charts, no mandatory tools."]},

{t:"1 · Scrum Theory — empiricism and lean thinking",b:[
"Scrum is founded on EMPIRICISM: knowledge comes from experience, decisions are based on what is OBSERVED — not on big up-front plans. Plus LEAN THINKING: reduce waste, focus on essentials.",
"Empiricism stands on three pillars (TIA): TRANSPARENCY — process and work must be visible to those doing and receiving the work. INSPECTION — artifacts and progress are inspected frequently. ADAPTATION — when something deviates, adjust as soon as possible.",
"The order matters: transparency enables inspection; inspection without transparency is misleading. Inspection without adaptation is pointless. Each of the 5 events exists precisely to inspect and adapt something."],
k:["Empiricism = decide from experience/observation","Pillars: Transparency → Inspection → Adaptation","Every Scrum event is a formal inspect & adapt opportunity","Short Sprints limit risk"],
x:["Exam asks: 'What enables inspection?' → Transparency.","'Why short Sprints?' → to limit risk and create more learning cycles."]},

{t:"2 · The five Scrum Values",b:[
"Scrum works only when the team lives five values: COMMITMENT (to the goals and to each other), FOCUS (on the Sprint work), OPENNESS (about work and challenges), RESPECT (people are capable, independent professionals), COURAGE (to do the right thing and tackle hard problems).",
"Mnemonic: Cool Frogs Often Ride Camels. These values give direction to work, actions and behavior; when embodied, the empirical pillars come alive and build TRUST."],
k:["Commitment · Focus · Openness · Respect · Courage","Values build trust; trust enables empiricism"],
x:["Transparency/Inspection/Adaptation are PILLARS, not values — classic trick question.","'Trust' itself is not one of the five values — it is the RESULT."]},

{t:"3 · The Scrum Team",b:[
"ONE team, no sub-teams, no hierarchy. Typically 10 or FEWER people, including the Product Owner and the Scrum Master. Small teams communicate better and are more productive.",
"The team is CROSS-FUNCTIONAL (has all skills to create value each Sprint) and SELF-MANAGING (decides internally who does what, when and how). Nobody outside tells the Developers how to turn backlog into value.",
"The whole Scrum Team is accountable for creating a valuable, useful Increment every Sprint. If the team gets too big, it splits into several cohesive teams that share ONE Product Goal, ONE Product Backlog and ONE Product Owner."],
k:["≤10 people incl. PO and SM","Cross-functional + self-managing","No sub-teams, no hierarchy","Multiple teams, one product → one PB, one Product Goal, one PO"],
x:["'Who assigns tasks?' → nobody; Developers self-manage.","Team size counts the PO and SM, not just Developers."]},

{t:"4 · Product Owner",b:[
"ONE person (never a committee), accountable for MAXIMIZING THE VALUE of the product. Owns the Product Backlog: develops and communicates the Product Goal, creates and orders items, ensures the backlog is transparent and understood.",
"The PO may delegate backlog work to others but REMAINS ACCOUNTABLE. For the PO to succeed, the entire organization must respect their decisions. Anyone wanting to change the backlog must try to CONVINCE the PO — nobody overrides them.",
"Only the Product Owner has the authority to CANCEL a Sprint — and only if the Sprint Goal becomes obsolete."],
k:["One person, maximizes value","Owns Product Backlog ordering","Can delegate work, never accountability","Only PO cancels a Sprint (obsolete Sprint Goal)"],
x:["'Stakeholders demand a change' → they convince the PO; they cannot reorder the backlog.","PO is not 'the boss' of the Developers."]},

{t:"5 · Scrum Master",b:[
"Accountable for ESTABLISHING SCRUM as defined in the Scrum Guide and for the SCRUM TEAM'S EFFECTIVENESS. A true leader who SERVES the team and the larger organization — not a project manager, not a secretary, not a boss.",
"Serves the Developers by coaching self-management and cross-functionality, helping focus on the Definition of Done, CAUSING THE REMOVAL of impediments (not necessarily solving each personally), ensuring events happen, are positive and within the timebox.",
"Serves the PO with backlog management techniques and stakeholder collaboration. Serves the organization by leading Scrum adoption and removing barriers between stakeholders and teams."],
k:["Establishes Scrum + team effectiveness","True leader who serves (team AND organization)","Causes removal of impediments","Ensures events happen — doesn't have to run them"],
x:["SM does NOT have to attend the Daily Scrum — it's the Developers' event.","'SM resolves every impediment personally' → false: CAUSES removal, often by coaching."]},

{t:"6 · Developers",b:[
"Everyone in the team committed to creating any aspect of a usable Increment each Sprint — regardless of specialty (coding, testing, design, analysis... all are 'Developers').",
"Accountable for: creating the PLAN for the Sprint (the Sprint Backlog), instilling QUALITY by adhering to the Definition of Done, ADAPTING their plan each day toward the Sprint Goal, and holding each other accountable as professionals.",
"The Developers who will do the work are the ones who SIZE (estimate) Product Backlog items. The PO may help them understand trade-offs, but the estimate is theirs."],
k:["Everyone building the Increment = Developer","Own the Sprint Backlog and the daily plan","Adhere to Definition of Done","Developers size the work, not the PO"],
x:["There is no separate 'QA role' or 'tester role' in Scrum.","Estimation questions: the answer is always 'the people doing the work'."]},

{t:"7 · The Sprint — heartbeat of Scrum",b:[
"A fixed timebox of ONE MONTH OR LESS where an Increment is created. A new Sprint starts IMMEDIATELY after the previous one ends — no gaps, no 'Sprint 0', no hardening Sprints. The Sprint is the container for all other events.",
"During the Sprint: NO changes that endanger the Sprint Goal; QUALITY does not decrease; the Product Backlog is refined as needed; SCOPE may be clarified and renegotiated with the PO as more is learned.",
"Sprints are never extended. If the Sprint Goal becomes obsolete, the PO may cancel the Sprint. Shorter Sprints = more learning cycles, less risk."],
k:["≤1 month, consistent duration","Next Sprint starts immediately","Goal fixed, quality fixed, scope negotiable with PO","Never extended; only PO cancels"],
x:["'Team is behind → cut quality?' NEVER. Renegotiate scope with the PO.","'Urgent request mid-Sprint' → negotiate scope without endangering the Sprint Goal."]},

{t:"8 · The four events inside the Sprint",b:[
"SPRINT PLANNING (max 8h for 1-month Sprint) — the whole Scrum Team answers three topics IN ORDER: WHY is this Sprint valuable (→ Sprint Goal), WHAT can be Done (items selected), HOW will the work get done (the plan). Result = Sprint Backlog.",
"DAILY SCRUM (15 min, EVERY day, same time & place, regardless of Sprint length) — the DEVELOPERS inspect progress toward the Sprint Goal and adapt the Sprint Backlog, producing a plan for the next day. Not a status report. PO/SM participate only if actively working on Sprint Backlog items.",
"SPRINT REVIEW (max 4h) — the Scrum Team and STAKEHOLDERS inspect the Increment and progress toward the PRODUCT Goal, and adapt the Product Backlog. A working session — NEVER a release gate or sign-off ceremony.",
"SPRINT RETROSPECTIVE (max 3h) — the Scrum Team inspects individuals, interactions, processes, tools and the Definition of Done, and plans improvements. Concludes the Sprint.",
"Timebox mnemonic: flight P-815 lands at 4:03 → Planning 8h, Daily 15m, Review 4h, Retro 3h. For shorter Sprints events are usually shorter — except the Daily, always 15 min."],
k:["Planning: Why→What→How = Sprint Backlog","Daily: 15m, Developers only, inspect Sprint Goal progress","Review: inspect Increment + PRODUCT Goal with stakeholders","Retro: inspect people/process/tools/DoD","P-815 lands at 4:03"],
x:["Product Backlog refinement is NOT an event — it's an ongoing activity.","Review = working session, not approval gate; releasing can happen any time.","Sprint Goal progress → Daily; Product Goal progress → Review."]},

{t:"9 · Artifacts and their commitments",b:[
"Each artifact carries a COMMITMENT that gives it transparency and focus (PP·SS·ID): PRODUCT BACKLOG → Product Goal. SPRINT BACKLOG → Sprint Goal. INCREMENT → Definition of Done.",
"PRODUCT BACKLOG: the single, ordered, emergent list of what's needed to improve the product. The Product Goal is the long-term objective — fulfill (or abandon) one before taking on the next.",
"SPRINT BACKLOG: owned by the Developers = Sprint Goal (why) + selected items (what) + plan (how). Highly visible, updated throughout the Sprint.",
"INCREMENT: a concrete stepping stone toward the Product Goal. Born the MOMENT an item meets the Definition of Done. Multiple Increments may be created within one Sprint; any may be DELIVERED at any moment — the Review is not a gate. Work that doesn't meet the DoD returns to the Product Backlog — it is never presented or released."],
k:["PB→Product Goal · SB→Sprint Goal · Increment→DoD","One Product Goal at a time","Increment may ship mid-Sprint","Not-Done work → back to Product Backlog"],
x:["'When is it an Increment?' → the moment it meets the DoD.","Burn-down charts are NOT required — complementary practice only."]},

{t:"10 · Definition of Done",b:[
"A formal description of the state of the Increment when it meets the QUALITY MEASURES required for the product. Creates shared TRANSPARENCY about what 'complete' means.",
"If the ORGANIZATION has a standard DoD — all Scrum Teams must follow it AS A MINIMUM (they may extend it). If not — the Scrum Team creates one appropriate for the product. Multiple teams on one product must share a mutual DoD.",
"The Developers are required to conform to it. The DoD is inspected at the Retrospective and typically becomes stricter over time."],
k:["DoD = quality transparency","Org standard = minimum; team may extend","Shared DoD across teams on one product","Inspected at the Retrospective"],
x:["'Team votes whether to adopt the corporate DoD' → no: mandatory minimum.","DoD ≠ acceptance criteria of a single item."]},

{t:"11 · Exam tactics",b:[
"Question style: 'Which is TRUE?', 'What should the Scrum Master do?', scenario traps. Golden rules: choose the answer that matches the GUIDE, not real-life pragmatism. When two answers seem right, pick the one respecting SELF-MANAGEMENT and the PO's authority over the backlog.",
"Instant red flags in wrong answers: 'the SM assigns/decides for the team', 'the PO extends the Sprint', 'stakeholders approve the release at Review', 'quality is reduced to meet the deadline', 'refinement meeting is a Scrum event'.",
"Pace: 80Q/60min = 45 sec/question. Flag hard ones, return later. Path in this app: read all lessons → flashcards daily until 'due' is low → L1 ≥85% → L2 ≥85% → simulator PASS twice in a row → free official Scrum Open at 95%+ → book PSM I ($200)."],
k:["Answer per the Guide, not per 'real life'","Respect self-management + PO authority","45 sec/question — flag and move on","Scrum Open 95%+ before booking"],
x:["Anything giving the SM command authority is wrong.","Anything making the Review an approval gate is wrong."]}
];

function renderStudy(){
  S.read=S.read||{};
  const done=Object.keys(S.read).length;
  document.getElementById('studyList').innerHTML=
   `<div class="panel"><h2>Study — the Scrum Guide 2020, humanized</h2>
    <p style="font-size:14px;color:var(--dim)">12 short lessons in the exact structure of the official Scrum Guide. Read in order. Progress: <b style="color:var(--teal)">${done}/${LESSONS.length}</b></p>
    <div class="prog"><i style="width:${done/LESSONS.length*100}%"></i></div></div>`+
   LESSONS.map((l,i)=>`
    <div class="panel lesson">
     <h3 onclick="toggleLesson(${i})" style="cursor:pointer;font-size:15px;display:flex;justify-content:space-between;gap:8px">
       <span>${S.read[i]?'✅ ':''}${l.t}</span><span style="color:var(--faint)" id="lch${i}">▾</span></h3>
     <div id="lb${i}" style="display:none">
       ${l.b.map(p=>`<p style="font-size:14.5px;color:var(--ink);margin-top:10px">${p}</p>`).join('')}
       <div class="exp" style="margin-top:12px"><b>Key points:</b><br>${l.k.map(k=>'• '+k).join('<br>')}</div>
       <div class="exp" style="border-left-color:var(--coral);margin-top:8px"><b style="color:var(--coral)">Exam traps:</b><br>${l.x.map(k=>'⚠ '+k).join('<br>')}</div>
       <button class="btn small teal" style="margin-top:12px" onclick="markRead(${i})">${S.read[i]?'Read again later':'Mark as read ✓'}</button>
     </div>
    </div>`).join('');
}
function toggleLesson(i){
  const b=document.getElementById('lb'+i),c=document.getElementById('lch'+i);
  const open=b.style.display!=='none';
  b.style.display=open?'none':'block';c.textContent=open?'▾':'▴';
}
function markRead(i){S.read=S.read||{};if(S.read[i])delete S.read[i];else S.read[i]=1;save();renderStudy();
  const b=document.getElementById('lb'+i);if(b)b.style.display='block';bumpStreak();}
