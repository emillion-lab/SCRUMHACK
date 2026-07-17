/* SCRUMHACK core: state, navigation, SRS, quizzes */
const KEY='shk1';
let S=load();
function load(){try{return JSON.parse(localStorage.getItem(KEY))||fresh()}catch(e){return fresh()}}
function fresh(){return {srs:{},quiz:{},exam:[],unlocked:{l2:false,l3:false},streakDay:'',streak:0}}
function save(){localStorage.setItem(KEY,JSON.stringify(S))}
function today(){return new Date().toISOString().slice(0,10)}
function bumpStreak(){const t=today();if(S.streakDay===t)return;
  const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
  S.streak=(S.streakDay===y)?S.streak+1:1;S.streakDay=t;save();paintStreak()}
function paintStreak(){document.getElementById('streakBox').textContent='🔥 '+(S.streak||0)}

function go(s){
  document.querySelectorAll('.screen').forEach(e=>e.classList.remove('on'));
  document.getElementById('scr-'+s).classList.add('on');
  document.querySelectorAll('nav.bottom button').forEach(b=>b.classList.toggle('on',b.dataset.s===s));
  window.scrollTo(0,0);
  if(s==='home')paintHome();
  if(s==='exam')examMenu();
  if(s==='listen')initListen();
}
function paintHome(){
  document.getElementById('stDue').textContent=dueCards().length;
  document.getElementById('stLearned').textContent=Object.keys(S.srs).length;
  const best=S.exam.length?Math.max(...S.exam.map(a=>a.pct)):null;
  document.getElementById('stBest').textContent=best===null?'—':best+'%';
  const b2=document.getElementById('btnL2'),b3=document.getElementById('btnL3');
  b2.classList.toggle('locked',!S.unlocked.l2);
  b3.classList.toggle('locked',!S.unlocked.l3);
  b2.textContent=(S.unlocked.l2?'3 · ':'3 · 🔒 ')+'Level 2 quiz — Tricky rules';
  b3.textContent=(S.unlocked.l3?'4 · ':'4 · 🔒 ')+'Exam simulator — 40Q / 30min';
}

/* ---- SRS ---- */
function cardState(i){return S.srs[i]||{iv:0,due:0,reps:0}}
function dueCards(){const n=Date.now();return CARDS.map((c,i)=>i).filter(i=>cardState(i).due<=n)}
let deck=[],di=0,flipped=false,deckMode='due';
function startLearn(mode){deckMode=mode||deckMode;buildDeck();go('learn');paintDeckPills();showCard()}
function buildDeck(){
  if(deckMode==='due')deck=dueCards();
  else if(deckMode==='all')deck=CARDS.map((c,i)=>i);
  else deck=CARDS.map((c,i)=>i).filter(i=>CARDS[i].c===deckMode);
  shuffle(deck);di=0;flipped=false;
}
function paintDeckPills(){
  const cats=['due','all','Theory','Team','Events','Artifacts'];
  document.getElementById('deckPills').innerHTML=cats.map(c=>
    `<span class="pill ${c===deckMode?'on':''}" onclick="startLearn('${c}')">${c==='due'?'Due ('+dueCards().length+')':c==='all'?'All '+CARDS.length:c}</span>`).join('');
}
function showCard(){
  const n=document.getElementById('fcNote'),meta=document.getElementById('fcMeta'),left=document.getElementById('fcLeft');
  document.getElementById('srsBtns').style.visibility='hidden';
  if(!deck.length||di>=deck.length){
    n.className='note';n.innerHTML='<span>🎉 Deck complete.<br><small style="font-weight:600;opacity:.7">Come back when cards are due — spacing is the hack.</small></span>';
    meta.textContent='';left.textContent='';return;
  }
  const c=CARDS[deck[di]];flipped=false;
  n.className='note';
  n.innerHTML=`<span class="tag">${c.c}</span><span>${c.q}</span><span class="hint">tap to flip</span>`;
  meta.textContent='Card '+(di+1)+' / '+deck.length;
  left.textContent='seen '+cardState(deck[di]).reps+'×';
}
function flipCard(){
  if(!deck.length||di>=deck.length)return;
  const c=CARDS[deck[di]],n=document.getElementById('fcNote');
  flipped=!flipped;
  if(flipped){n.className='note back';n.innerHTML=`<span class="tag">${c.c}</span><span>${c.a}</span>`;
    const st=cardState(deck[di]);
    document.getElementById('ivGood').textContent=(st.iv?st.iv*2:3)+'d';
    document.getElementById('ivEasy').textContent=(st.iv?st.iv*3:7)+'d';
    document.getElementById('srsBtns').style.visibility='visible';
  } else showCard();
}
function rate(r){
  const i=deck[di],st=cardState(i);st.reps++;
  const D=864e5;
  if(r===0){st.iv=0;st.due=Date.now()+6e5;deck.push(i);}
  else if(r===1){st.iv=1;st.due=Date.now()+D;}
  else if(r===2){st.iv=st.iv?st.iv*2:3;st.due=Date.now()+st.iv*D;}
  else{st.iv=st.iv?st.iv*3:7;st.due=Date.now()+st.iv*D;}
  S.srs[i]=st;save();bumpStreak();di++;showCard();
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}}

/* ---- QUIZ ---- */
let qz=null;
function quizMenu(){go('quiz');
  document.getElementById('quizPanel').innerHTML=`
   <h2>Level quizzes — 85% unlocks the next stage</h2>
   <p style="font-size:14px;color:var(--dim)">Instant feedback + explanation after every answer. That's retrieval practice — the single strongest memory technique known.</p>
   <button class="btn" onclick="startQuiz(1)">Level 1 · Foundations (${QUESTIONS.filter(q=>q.lv===1).length} Q)</button>
   <button class="btn ${S.unlocked.l2?'teal':'locked'}" onclick="startQuiz(2)">${S.unlocked.l2?'':'🔒 '}Level 2 · Tricky rules (20 Q)</button>
   ${bestLine(1)}${bestLine(2)}`;
}
function bestLine(l){const b=S.quiz['l'+l];return b?`<p class="lockmsg">L${l} best: <b style="color:var(--teal)">${b}%</b></p>`:''}
function startQuiz(l){
  if(l===2&&!S.unlocked.l2){go('quiz');document.getElementById('quizPanel').innerHTML=
    '<h2>Locked</h2><p style="font-size:14px;color:var(--dim)">Score ≥85% on Level 1 first. The gate is the hack — mastery before difficulty.</p><button class="btn" onclick="startQuiz(1)">Take Level 1</button>';return;}
  let pool=QUESTIONS.map((q,i)=>i).filter(i=>QUESTIONS[i].lv===l);shuffle(pool);
  if(l===2)pool=pool.slice(0,20);
  qz={l,pool,i:0,ok:0,answered:false};go('quiz');paintQ();
}
function paintQ(){
  const q=QUESTIONS[qz.pool[qz.i]];
  document.getElementById('quizPanel').innerHTML=`
   <h2>Level ${qz.l} · question ${qz.i+1}/${qz.pool.length}</h2>
   <div class="prog"><i style="width:${qz.i/qz.pool.length*100}%"></i></div>
   <p class="qtext">${q.q}</p>
   ${q.o.map((o,k)=>`<button class="opt" onclick="answer(${k})">${o}</button>`).join('')}
   <div id="expBox"></div>`;
}
function answer(k){
  if(qz.answered)return;qz.answered=true;
  const q=QUESTIONS[qz.pool[qz.i]],btns=document.querySelectorAll('#quizPanel .opt');
  btns.forEach((b,j)=>{b.disabled=true;if(j===q.ans)b.classList.add('correct');if(j===k&&k!==q.ans)b.classList.add('wrong')});
  if(k===q.ans)qz.ok++;
  document.getElementById('expBox').innerHTML=`<div class="exp"><b>${k===q.ans?'✓ Correct.':'✗ Not quite.'}</b> ${q.exp}</div>
   <button class="btn" onclick="nextQ()">${qz.i+1<qz.pool.length?'Next →':'See result'}</button>`;
  bumpStreak();
}
function nextQ(){qz.i++;qz.answered=false;if(qz.i<qz.pool.length)paintQ();else quizResult()}
function quizResult(){
  const pct=Math.round(qz.ok/qz.pool.length*100),pass=pct>=85;
  const key='l'+qz.l;S.quiz[key]=Math.max(S.quiz[key]||0,pct);
  if(pass&&qz.l===1)S.unlocked.l2=true;
  if(pass&&qz.l===2)S.unlocked.l3=true;
  save();
  document.getElementById('quizPanel').innerHTML=`
   <h2>Level ${qz.l} result</h2>
   <div class="score-big ${pass?'pass':'fail'}">${pct}%</div>
   <p class="verdict">${pass?(qz.l===1?'Unlocked: Level 2 — tricky rules.':'Unlocked: the Exam Simulator. Go get it.'):'Pass mark is 85%. Review the missed topics in Learn, then retry — spacing + retry beats cramming.'}</p>
   <button class="btn" onclick="startQuiz(${qz.l})">Retry Level ${qz.l}</button>
   <button class="btn ghost" onclick="go('home')">Home</button>`;
}
