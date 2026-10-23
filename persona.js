import {groups,factions,styles,motivations,questions,quirks,realmNames,stages,defaultDraft,normalizeDraft,getFaction,originsFor,realmLabel,recommendName,randomizeDraft,buildPersona,personaText,pick} from './persona-engine.js?v=correction-20';

const $=s=>document.querySelector(s);
const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon=(name,cls='')=>`<svg class="${cls}" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
const storageKey='gangho-persona-v1';
let state={draft:normalizeDraft(defaultDraft),step:0,completed:false,result:null},editing=false,storageOK=true;
try{
  const saved=JSON.parse(localStorage.getItem(storageKey)||'null');
  if(saved?.version===1){
    state.draft=normalizeDraft(saved.draft);
    state.step=Number.isInteger(saved.step)&&saved.step>=0&&saved.step<=2?saved.step:0;
    if(saved.completed&&state.draft.answers.every(a=>a!==null)){
      state.completed=true;state.result=buildPersona(state.draft);
      for(const key of ['name','position','alias','intro','personality','arts','quirk','note'])if(typeof saved.result?.[key]==='string')state.result[key]=saved.result[key].slice(0,key==='name'?20:2000);
    }
  }
}catch{storageOK=false;}

function status(message){$('#persona-status').textContent=message;}
function save(){
  try{localStorage.setItem(storageKey,JSON.stringify({version:1,...state}));}
  catch{storageOK=false;}
  $('.persona-local-note').textContent=storageOK?'작성 중인 기록은 이 브라우저에 자동으로 보관돼요.':'자동 보관을 사용할 수 없어요. 완성 후 설정을 복사해 두세요.';
}
function lock(key){return `<button type="button" class="persona-lock" data-persona-lock="${key}" aria-pressed="${state.draft.locks[key]}" aria-label="${{identity:'기본 정보',faction:'소속',background:'배경과 수련',temper:'성격과 면모'}[key]} 랜덤 생성 시 고정">${icon('lock')} ${state.draft.locks[key]?'고정됨':'고정'}</button>`;}
function blockHead(title,key,sub=''){return `<div class="persona-block-heading"><div><h3>${title}</h3>${sub?`<p>${sub}</p>`:''}</div>${lock(key)}</div>`;}
function select(id,label,options,value,extra=''){
  return `<label class="persona-field" for="persona-${id}"><span>${label}</span><select id="persona-${id}" name="${id}" ${extra}>${options.map(o=>`<option value="${escapeHTML(o.value)}"${String(o.value)===String(value)?' selected':''}>${escapeHTML(o.label)}</option>`).join('')}</select></label>`;
}
function optionCards(name,options,value,cls=''){
  return `<div class="persona-options ${cls}">${options.map(o=>`<label class="persona-option"><input id="persona-${name}-${escapeHTML(o.id)}" type="radio" name="${name}" value="${escapeHTML(o.id)}"${String(value)===String(o.id)?' checked':''}><span><strong>${escapeHTML(o.name)}</strong>${o.text?`<small>${escapeHTML(o.text)}</small>`:''}</span></label>`).join('')}</div>`;
}
function stepMarkup(){
  const d=state.draft,f=getFaction(d);
  if(state.step===0)return `<div class="persona-step-heading"><span>落筆 · 첫 번째 선택</span><h2 id="persona-step-heading" tabindex="-1">어떤 이름으로 불릴까요?</h2><p>이름을 비워두면 어울리는 이름을 추천해요.</p></div>
    <section class="persona-form-block">${blockHead('나의 기본 정보','identity')}<div class="persona-name-field"><label class="persona-field" for="persona-name"><span>이름</span><input id="persona-name" name="name" value="${escapeHTML(d.name)}" maxlength="20" placeholder="아직 이름을 정하지 않았어요" autocomplete="off"></label><button type="button" class="persona-button persona-button-light" data-persona-action="name">이름 추천 ↻</button></div><div class="persona-fields-row"><label class="persona-field" for="persona-age"><span>나이</span><div class="persona-age"><input type="number" id="persona-age" name="age" min="1" max="200" step="1" required value="${escapeHTML(d.age)}"><span>세</span></div></label>${select('gender','성별',['여성','남성','설정 안 함'].map(v=>({value:v,label:v})),d.gender)}</div></section>
    <section class="persona-form-block">${blockHead('어느 깃발 아래에 설까요?','faction','소속을 정해도 성격은 자유롭게 만들 수 있어요.')}<fieldset class="persona-fieldset"><legend class="sr-only">세력 선택</legend>${optionCards('group',Object.entries(groups).map(([id,name])=>({id,name})),d.group,'persona-group-options')}</fieldset>${select('faction','구체적인 소속',factions.filter(x=>x.group===d.group).map(x=>({value:x.id,label:x.name})),d.faction)}<div class="persona-faction-hint">${icon(f.icon)}<div><strong>${f.name}</strong><p>${f.hint}</p></div><span>${f.glyph}</span></div></section>`;
  if(state.step===1)return `<div class="persona-step-heading"><span>立身 · 두 번째 선택</span><h2 id="persona-step-heading" tabindex="-1">지금의 나를 만든 시간.</h2><p>출신과 목표, 강호에서 살아갈 방식을 골라보세요.</p></div>
    <section class="persona-form-block">${blockHead('어떤 길을 걸어왔나요?','background','고정하면 배경과 수련 설정을 함께 지켜요.')}<fieldset class="persona-fieldset"><legend>지금의 소속과 맺은 인연</legend>${optionCards('origin',originsFor(d).map(o=>({id:o.id,name:o.name})),d.origin)}</fieldset>${select('motivation','강호에 나온 이유',motivations.map(m=>({value:m.id,label:m.name})),d.motivation)}<p class="persona-context-line">${escapeHTML(originsFor(d).find(o=>o.id===d.origin).text)}</p></section>
    <section class="persona-form-block"><div class="persona-block-heading"><h3>무엇으로 강호를 건널까요?</h3><span class="persona-small-label">武學</span></div>${select('style','주력 분야',Object.entries(styles).map(([value,label])=>({value,label})),d.style)}<div class="persona-fields-row">${select('realm','경지',realmNames.map((label,value)=>({value,label})),d.realm)}${select('stage','세부 단계',stages.map(v=>({value:v,label:v})),d.stage,d.realm===0?'disabled':'')}</div><p class="persona-context-line">${d.realm===0?'무공 미수련을 선택하면 경지 외 인물로 기록돼요.':d.realm===8?'생사경은 현역 도달자가 없는 전설의 경지예요. 이 인물도 전설 속 존재로 만들어져요.':d.realm===6||d.realm===7?`선택한 소속에서는 ‘${realmLabel(d)}’으로 기록돼요.`:'삼류부터 생사경까지, 원하는 출발점을 골라보세요.'}</p></section>`;
  return `<div class="persona-step-heading"><span>問心 · 마지막 선택</span><h2 id="persona-step-heading" tabindex="-1">칼보다 먼저 움직이는 마음.</h2><p>정답은 없어요. 이 인물이라면 고를 답을 선택하세요.</p></div>
    <section class="persona-form-block">${blockHead('세 번의 갈림길','temper','답이 모여 성격과 말보다 앞서는 행동을 만들어요.')}${questions.map((q,i)=>`<fieldset class="persona-question persona-fieldset"><legend><span>0${i+1}</span> ${q.title}</legend><p>${q.subtitle}</p>${optionCards(`answer-${i}`,q.choices.map((c,j)=>({id:j,name:c.label})),d.answers[i],'persona-answer-options')}</fieldset>`).join('')}</section>
    <section class="persona-form-block"><div class="persona-block-heading"><div><h3>뜻밖의 면모 하나</h3><p>조금 허술한 구석이 있어도 좋으니까.</p></div><button type="button" class="persona-button persona-button-light" data-persona-action="quirk">하나 뽑기 ↻</button></div><p class="persona-quirk">${d.quirk?escapeHTML(quirks[d.quirk]):'아직 드러나지 않은 작은 비밀.'}</p>${d.quirk?'<button type="button" class="persona-subtle-button" data-persona-action="no-quirk">이 면모 빼기</button>':''}<label class="persona-field" for="persona-note"><span>꼭 넣고 싶은 설정 한 줄 <small>선택</small></span><textarea id="persona-note" name="note" maxlength="240" rows="3" placeholder="예: 잃어버린 동생의 낡은 비녀를 늘 품고 다닌다.">${escapeHTML(d.note)}</textarea></label></section>`;
}
function renderPreview(){
  const p=buildPersona(state.draft),answered=state.draft.answers.filter(v=>v!==null).length;
  $('#persona-preview').innerHTML=`<article class="persona-preview-card persona-tint-${p.color}"><div class="persona-preview-label"><span>나의 인물첩</span><span>草案 · 초안</span></div><div class="persona-preview-art" aria-hidden="true"><span>${p.glyph}</span>${icon(p.icon)}<i>人間萬象</i></div><div class="persona-preview-content"><p class="persona-preview-faction">${p.group} · ${p.faction}</p><h2>${escapeHTML(p.name)}</h2><p class="persona-preview-title">${p.title}</p><dl class="persona-preview-facts"><div><dt>나이</dt><dd>${p.age}세 · ${p.gender}</dd></div><div><dt>직책</dt><dd>${escapeHTML(p.position)}</dd></div><div><dt>별호</dt><dd>${escapeHTML(p.alias)}</dd></div><div><dt>경지</dt><dd>${escapeHTML(p.realm)}</dd></div></dl><div class="persona-traits">${p.tags.length?p.tags.map(t=>`<span>${t}</span>`).join(''):'<span class="persona-trait-empty">마음의 결을 기다리는 중</span>'}</div><div class="persona-preview-progress"><span>답한 문답</span><span>${answered} / 3</span></div><div class="persona-progress-track"><span style="width:${answered/3*100}%"></span></div></div></article>`;
}
function renderForm(focusID){
  $('#persona-fields').innerHTML=stepMarkup();
  document.querySelectorAll('[data-persona-step]').forEach(button=>{const active=Number(button.dataset.personaStep)===state.step;button.classList.toggle('is-active',active);if(active)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
  $('#persona-step-count').textContent=`0${state.step+1} / 03`;
  $('#persona-previous').disabled=state.step===0;
  $('#persona-next').textContent=state.step===2?'나의 인물첩 완성하기 ↗':'다음으로 →';
  renderPreview();
  if(focusID)document.getElementById(focusID)?.focus({preventScroll:true});
}
function textBlock(label,value,cls=''){return `<section class="persona-record-block ${cls}"><h3>${label}</h3><p>${escapeHTML(value).replace(/\n/g,'<br>')}</p></section>`;}
function resultMarkup(){
  const p=state.result;
  return `<div class="persona-result-heading"><div><p class="eyebrow">一人一章 · 당신의 한 장</p><h2 id="persona-result-title" tabindex="-1">이제, 강호로 나설 시간.</h2><p>완성된 설정은 직접 다듬거나 복사해서 사용할 수 있어요.</p></div><span class="persona-finished-seal">記錄<br>完成</span></div>
    <article class="persona-result-card"><header class="persona-record-header"><div class="persona-record-emblem" aria-hidden="true">${icon(p.icon)}<span>${p.glyph}</span></div><div><p class="persona-preview-faction">${p.group} · 나의 창작 인물</p><h2>${escapeHTML(p.name)}</h2><p>${escapeHTML(p.title)}</p></div><span class="persona-record-serial">江湖錄<br>MY PERSONA</span></header><dl class="persona-result-facts"><div><dt>나이</dt><dd>${p.age}세</dd></div><div><dt>직책</dt><dd>${escapeHTML(p.position)}</dd></div><div><dt>별호</dt><dd>${escapeHTML(p.alias)}</dd></div><div><dt>경지</dt><dd>${escapeHTML(p.realm)}</dd></div></dl><div class="persona-record-body"><div>${textBlock('소개',p.intro)}${textBlock('성격',p.personality)}<div class="persona-traits">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><div>${textBlock('무공과 기예',p.arts,'persona-arts-block')}${p.quirk!=='없음'?textBlock('뜻밖의 면모',p.quirk,'persona-quirk-block'):''}${p.note?textBlock('추가 설정',p.note):''}</div></div></article>
    <div class="persona-result-actions"><button type="button" class="persona-button persona-button-light" data-persona-action="back">← 선택 다시 보기</button><button type="button" class="persona-button persona-button-light" data-persona-action="edit">문장 직접 수정</button><button type="button" class="persona-button persona-button-primary" data-persona-action="copy">설정 복사 ${icon('diagonal')}</button></div>
    <div id="persona-result-edit" hidden></div><div id="persona-copy-fallback" hidden><label class="persona-field" for="persona-copy-text"><span>복사용 설정 — 전체 선택 후 복사해 주세요.</span><textarea id="persona-copy-text" readonly rows="14"></textarea></label></div><p class="persona-result-footnote">고정한 항목은 ‘운에 맡기기’로 다시 뽑아도 유지돼요. 선택을 바꿔 다시 완성하면 새 문장으로 작성돼요.</p>`;
}
function render(){
  $('.persona-work-grid').hidden=state.completed;
  $('#persona-result').hidden=!state.completed;
  if(state.completed)$('#persona-result').innerHTML=resultMarkup();else renderForm();
  save();
}
function validCurrentStep(){
  if(!$('#persona-form').reportValidity())return false;
  return true;
}
function goStep(step){
  if(step>state.step&&!validCurrentStep())return;
  state.step=step;state.draft=normalizeDraft(state.draft);state.completed=false;editing=false;render();
  $('#persona-step-heading').focus({preventScroll:true});
  $('.persona-editor').scrollIntoView({block:'start',behavior:'auto'});status('');
}
function finish(){
  const missing=state.draft.answers.findIndex(a=>a===null);
  if(missing!==-1){status(`마음의 결 ${missing+1}번 질문에 답을 골라 주세요.`);$(`#persona-answer-${missing}-0`).focus();return;}
  state.draft=normalizeDraft(state.draft);
  if(!state.draft.name.trim())state.draft.name=recommendName(state.draft);
  state.result=buildPersona(state.draft);state.completed=true;editing=false;render();
  $('#persona-result-title').focus({preventScroll:true});$('#persona-result').scrollIntoView({block:'start',behavior:'auto'});status('나의 인물첩이 완성됐어요.');
}
function showEdit(){
  const p=state.result;editing=true;
  $('#persona-result-edit').hidden=false;
  $('#persona-result-edit').innerHTML=`<form id="persona-edit-form"><h3>내 말로 다듬기</h3><p>수정한 문장이 인물첩과 복사본에 그대로 반영돼요.</p><div class="persona-edit-fields">${[['name','이름',20],['position','직책',80],['alias','별호',40]].map(([key,label,max])=>`<label class="persona-field"><span>${label}</span><input name="${key}" maxlength="${max}" value="${escapeHTML(p[key])}" required></label>`).join('')}</div>${[['intro','소개'],['personality','성격'],['arts','무공과 기예'],['quirk','뜻밖의 면모'],['note','추가 설정']].map(([key,label])=>`<label class="persona-field"><span>${label}</span><textarea name="${key}" maxlength="2000" rows="${key==='quirk'||key==='note'?2:4}">${escapeHTML(p[key])}</textarea></label>`).join('')}<div class="persona-result-actions"><button type="button" class="persona-button persona-button-light" data-persona-action="cancel-edit">취소</button><button type="submit" class="persona-button persona-button-primary">수정 반영하기</button></div></form>`;
  $('#persona-edit-form input').focus();
}
async function copyResult(){
  const text=personaText(state.result);
  try{await navigator.clipboard.writeText(text);status('인물 설정을 복사했어요. 원하는 곳에 붙여넣어 주세요.');}
  catch{$('#persona-copy-fallback').hidden=false;$('#persona-copy-text').value=text;$('#persona-copy-text').focus();$('#persona-copy-text').select();status('자동 복사를 사용할 수 없어 복사용 텍스트를 열었어요.');}
}
$('#persona-form').addEventListener('submit',event=>{event.preventDefault();if(!validCurrentStep())return;state.step<2?goStep(state.step+1):finish();});
$('#persona-previous').addEventListener('click',()=>goStep(Math.max(0,state.step-1)));
document.querySelectorAll('[data-persona-step]').forEach(b=>b.addEventListener('click',()=>goStep(Number(b.dataset.personaStep))));
$('#persona-form').addEventListener('input',event=>{
  const el=event.target;
  if(!['name','age','note'].includes(el.name))return;
  if(el.name==='age'&&!el.validity.valid)return;
  state.draft[el.name]=el.name==='age'?el.valueAsNumber:el.value;
  renderPreview();save();
});
$('#persona-form').addEventListener('change',event=>{
  const el=event.target,key=el.name,d=state.draft,focusID=el.id;
  if(['name','age','note'].includes(key))return;
  if(key.startsWith('answer-'))d.answers[Number(key.slice(7))]=Number(el.value);
  else if(key==='group'){
    const f=factions.find(f=>f.group===el.value);d.faction=f.id;d.group=f.group;d.style=f.style;if(d.style==='none')d.realm=0;else if(d.realm===0)d.realm=3;
  }else if(key==='faction'){
    d.faction=el.value;const f=getFaction(d);d.group=f.group;d.style=f.style;if(d.style==='none')d.realm=0;else if(d.realm===0)d.realm=3;
  }else if(key==='style'){
    d.style=el.value;if(d.style==='none')d.realm=0;else if(d.realm===0)d.realm=3;
  }else if(key==='realm'){
    d.realm=Number(el.value);if(d.realm===0)d.style='none';else if(d.style==='none')d.style=getFaction(d).style==='none'?'sword':getFaction(d).style;
  }else if(['gender','origin','motivation','stage'].includes(key))d[key]=el.value;
  state.draft=normalizeDraft(d);renderForm(focusID);save();status('');
});
$('#persona-random').addEventListener('click',()=>{
  if(editing){status('수정 중인 문장을 반영하거나 취소한 뒤 다시 뽑아 주세요.');return;}
  if(Object.values(state.draft.locks).every(Boolean)){status('모든 항목이 고정돼 있어요. 선택 화면에서 고정을 하나 풀어 주세요.');return;}
  state.draft=randomizeDraft(state.draft);state.completed=false;state.result=null;render();
  const count=Object.values(state.draft.locks).filter(Boolean).length;
  status(count?`고정한 ${count}개 묶음을 유지하고 새 초안을 뽑았어요.`:'새로운 인물 초안을 뽑았어요. 선택을 살펴보고 인물첩을 완성해 주세요.');
});
$('#persona-view').addEventListener('click',event=>{
  const toggle=event.target.closest('[data-persona-lock]');
  if(toggle){const key=toggle.dataset.personaLock;state.draft.locks[key]=!state.draft.locks[key];renderForm();save();$(`[data-persona-lock="${key}"]`).focus({preventScroll:true});return;}
  const button=event.target.closest('[data-persona-action]');if(!button)return;
  switch(button.dataset.personaAction){
    case 'name':state.draft.name=recommendName(state.draft);renderForm();save();status('새 이름을 추천했어요. 직접 고쳐도 좋아요.');break;
    case 'quirk':state.draft.quirk=pick(quirks.map((_,i)=>i).filter(i=>i>0&&i!==state.draft.quirk));renderForm();save();$('[data-persona-action="quirk"]').focus({preventScroll:true});break;
    case 'no-quirk':state.draft.quirk=0;renderForm();save();break;
    case 'back':state.completed=false;editing=false;render();status('선택을 바꾼 뒤 인물첩을 다시 완성할 수 있어요.');break;
    case 'edit':if(!editing)showEdit();break;
    case 'cancel-edit':editing=false;$('#persona-result-edit').hidden=true;break;
    case 'copy':if(editing)status('수정 중인 문장을 먼저 반영해 주세요.');else copyResult();break;
  }
});
$('#persona-result').addEventListener('submit',event=>{
  if(event.target.id!=='persona-edit-form')return;
  event.preventDefault();if(!event.target.reportValidity())return;
  const data=new FormData(event.target);
  for(const key of ['name','position','alias','intro','personality','arts','quirk','note'])state.result[key]=String(data.get(key)||'').trim();
  state.result.name||='이름 없는 나그네';state.result.quirk||='없음';state.draft.name=state.result.name;editing=false;render();$('#persona-result-title').focus({preventScroll:true});$('#persona-result').scrollIntoView({block:'start',behavior:'auto'});status('수정한 문장을 인물첩에 반영했어요.');
});
render();
