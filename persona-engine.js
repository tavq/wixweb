// A browser-local, choice-based character builder. No canonical records are changed.
export const groups={orthodox:'정파',unorthodox:'사파',demonic:'마도',free:'무소속'};
export const factions=[
  {id:'hwasan',name:'화산파',group:'orthodox',glyph:'華',icon:'plum',place:'화산',role:'제자',style:'sword',color:'pink',arts:['자하공','이십사수매화검법'],hint:'전쟁의 상처 위로 다시 피는 매화.'},
  {id:'shaolin',name:'소림사',group:'orthodox',glyph:'禪',icon:'mountain',place:'소림',role:'속가제자',style:'unarmed',color:'mint',arts:[],hint:'엄격한 규율과 자비 사이에서.'},
  {id:'wudang',name:'무당파',group:'orthodox',glyph:'武',icon:'cloud',place:'무당산',role:'제자',style:'sword',color:'mint',arts:[],hint:'부드러움으로 강함을 이기는 길.'},
  {id:'jongnam',name:'종남파',group:'orthodox',glyph:'終',icon:'mountain',place:'종남산',role:'제자',style:'sword',color:'mint',arts:['태을신공','천하삼십육검'],hint:'험한 산세처럼 굳건한 자부심.'},
  {id:'emei',name:'아미파',group:'orthodox',glyph:'峨',icon:'plum',place:'화산의 아미파 거처',role:'속가제자',style:'sword',color:'pink',arts:['아미심법','아미자영검법'],hint:'잃어버린 산문을 마음에 품고.'},
  {id:'beggar',name:'개방',group:'orthodox',glyph:'竹',icon:'bamboo',place:'강호의 골목',role:'문도',style:'staff',color:'mint',arts:['개방 혼원공','배향봉법'],hint:'가진 것은 적어도 인연은 넓다.'},
  {id:'namgung',name:'남궁세가',group:'orthodox',glyph:'南',icon:'sword',place:'남궁세가',role:'가문 무사',style:'sword',color:'mint',arts:['대연신공','창궁무애검법'],surname:'남궁',hint:'정통의 검, 이름의 무게.'},
  {id:'tang',name:'사천당가',group:'orthodox',glyph:'唐',icon:'bamboo',place:'사천',role:'가문 무사',style:'hidden',color:'pink',arts:['오독신공','폭우이화침'],surname:'당',hint:'조용한 손끝에 숨겨진 날카로움.'},
  {id:'zhuge',name:'제갈세가',group:'orthodox',glyph:'諸',icon:'cloud',place:'제갈세가',role:'가문 무사',style:'strategy',color:'mint',arts:['팔진도','기문둔갑'],surname:'제갈',hint:'칼이 닿기 전에 수를 읽는다.'},
  {id:'murong',name:'모용세가',group:'orthodox',glyph:'慕',icon:'plum',place:'모용세가',role:'가문 무사',style:'sword',color:'pink',arts:['자미신공','건곤백절검해'],surname:'모용',hint:'오랜 자부심과 새로운 야망.'},
  {id:'peng',name:'하북팽가',group:'orthodox',glyph:'彭',icon:'sword',place:'하북',role:'가문 무사',style:'blade',color:'pink',arts:['패도신공','오호단문도'],surname:'팽',hint:'묵직한 도 끝에 담긴 책임.'},
  {id:'forest',name:'녹림칠십이채',group:'unorthodox',glyph:'林',icon:'mountain',place:'녹림의 산채',role:'산채 식구',style:'blade',color:'mint',arts:['파천도법','대력비도술'],hint:'산속의 의리에도 지킬 선은 있다.'},
  {id:'river',name:'장강수로십팔채',group:'unorthodox',glyph:'江',icon:'cloud',place:'장강의 나루터',role:'수로채원',style:'blade',color:'mint',arts:['잠영신공','분수어도법'],hint:'물길을 읽는 자가 살아남는다.'},
  {id:'hao',name:'하오문',group:'unorthodox',glyph:'夜',icon:'cloud',place:'낙양의 골목',role:'정보원',style:'none',color:'pink',arts:[],hint:'낮은 곳에서 가장 멀리 듣는다.'},
  {id:'assassin',name:'살막',group:'unorthodox',glyph:'殺',icon:'bamboo',place:'죽림',role:'살수',style:'hidden',color:'pink',arts:['절명단검술','무영잠행술'],hint:'이름 대신 흔적을 지우는 삶.'},
  {id:'heaven',name:'천마신교',group:'demonic',glyph:'天',icon:'flame',place:'장가계·무릉원',role:'교도',style:'sword',color:'pink',arts:[],hint:'힘을 믿고, 질서에 충성한다.'},
  {id:'blood',name:'아수라혈교',group:'demonic',glyph:'血',icon:'flame',place:'신강 십만대산',role:'교도',style:'unarmed',color:'pink',arts:[],hint:'피로 남은 전쟁의 그림자.'},
  {id:'free',name:'무소속',group:'free',glyph:'遊',icon:'cloud',place:'이름 없는 객잔',role:'떠돌이',style:'sword',color:'mint',arts:[],hint:'어느 깃발에도 매이지 않는 발걸음.'},
];
export const styles={sword:'검술',blade:'도법',unarmed:'권법·장법',staff:'봉법',hidden:'암기·단검',strategy:'진법·책략',medicine:'의술',none:'무공 미수련'};
export const motivations=[
  {id:'protect',name:'내 사람을 지키기',text:'다시는 소중한 사람을 잃지 않기 위해 힘을 기른다.'},
  {id:'find',name:'누군가를 찾기',text:'소식이 끊긴 소중한 사람의 흔적을 찾아 강호를 걷는다.'},
  {id:'freedom',name:'자유롭게 살아보기',text:'누군가 정해 준 삶에서 벗어나 자기만의 길을 찾고 싶다.'},
  {id:'fame',name:'이름을 떨치기',text:'자신의 이름 석 자를 강호에 남기는 것이 목표다.'},
  {id:'livelihood',name:'먹고살기',text:'거창한 대의보다 내일의 끼니와 편히 잠들 곳이 먼저다.'},
  {id:'revenge',name:'원한을 갚기',text:'잊을 수 없는 원한의 끝을 확인하기 위해 수련을 이어 간다.'},
  {id:'curiosity',name:'세상을 알아가기',text:'세상에 무엇이 있는지, 직접 보고 겪어야 직성이 풀린다.'},
  {id:'rebuild',name:'무너진 삶을 다시 세우기',text:'잃어버린 일상을 되찾고, 자신이 속한 곳을 다시 세우려 한다.'},
];
export const questions=[
  {title:'객잔에서 낯선 이가 쫓기고 있다.',subtitle:'그가 당신과 눈을 마주친다. 가장 먼저 드는 생각은?',choices:[
    {label:'우선 뒷문으로 숨겨준다.',trait:'의리',type:'heart',text:'위태로운 사람을 보면 먼저 손을 내민다.'},
    {label:'도와주면 무엇을 얻는지 묻는다.',trait:'실리',type:'practical',text:'호의에도 감당할 수 있는 대가가 있는지 따진다.'},
    {label:'쫓기는 이유와 주변을 살핀다.',trait:'신중함',type:'mind',text:'판단을 서두르지 않고 상황의 앞뒤를 살핀다.'},
    {label:'소란을 틈타 함께 빠져나간다.',trait:'임기응변',type:'free',text:'정면으로 부딪치기보다 틈새를 찾아 움직인다.'},
  ]},
  {title:'아무도 모르는 비급을 발견했다.',subtitle:'단 한 번, 이 비밀을 어떻게 다룰 것인가?',choices:[
    {label:'믿을 만한 사람과 함께 살펴본다.',trait:'신뢰',type:'heart',text:'좋은 기회일수록 믿는 사람과 나누고 싶어 한다.'},
    {label:'가치를 확인하고 거래를 준비한다.',trait:'계산',type:'practical',text:'기회를 손에 넣으면 현실적인 이득부터 계산한다.'},
    {label:'밤을 새워서라도 원리를 파헤친다.',trait:'탐구심',type:'mind',text:'모르는 이치 앞에서는 잠도 잊을 만큼 몰두한다.'},
    {label:'끌리는 대목부터 직접 시험한다.',trait:'대담함',type:'free',text:'충분히 고민하기보다 직접 부딪치며 답을 얻는다.'},
  ]},
  {title:'동행이 중요한 약속을 어겼다.',subtitle:'그의 변명을 들은 뒤, 당신이 고른 말은?',choices:[
    {label:'“사정은 알겠어. 다음엔 먼저 말해.”',trait:'다정함',type:'heart',text:'실수한 사람에게도 다시 믿을 여지를 남겨 둔다.'},
    {label:'“그럼 생긴 손해는 어떻게 메울 건데?”',trait:'현실감각',type:'practical',text:'감정적인 다툼보다 생긴 문제를 수습하는 데 집중한다.'},
    {label:'“같은 일이 반복되지 않게 정하자.”',trait:'원칙',type:'mind',text:'함께 지킬 수 있는 약속과 기준을 중요하게 여긴다.'},
    {label:'“이번은 넘어가자. 내 몫도 한 번 봐줘.”',trait:'능청스러움',type:'free',text:'팽팽한 분위기를 농담과 여유로 풀어낸다.'},
  ]},
];
export const quirks=['없음','단것 앞에서는 위엄이 사라진다.','남의 길은 잘 찾아주면서 정작 본인은 길치다.','거짓말을 하면 귀부터 빨개진다.','귀여운 동물을 보면 걸음을 멈춘다.','칼날보다 남에게 빌려준 돈을 더 꼼꼼히 기억한다.','칭찬을 받으면 태연한 척하며 같은 말을 오래 곱씹는다.','겁이 없는 척하지만 귀신 이야기는 끝까지 듣지 못한다.','요리는 서툴지만 먹는 일에는 누구보다 진심이다.'];
export const realmNames=['경지 외','삼류','이류','일류','절정','초절정','화경 / 극마','현경 / 탈마','생사경'];
export const stages=['입문','완숙','극'];
export const defaultDraft={name:'',age:24,gender:'여성',group:'orthodox',faction:'hwasan',origin:'war',motivation:'rebuild',style:'sword',realm:3,stage:'완숙',answers:[null,null,null],quirk:0,note:'',locks:{identity:false,faction:false,background:false,temper:false}};
export const pick=list=>list[Math.floor(Math.random()*list.length)];
export const getFaction=draft=>factions.find(f=>f.id===draft.faction)||factions[0];
export function normalizeDraft(input={}){
  const d={...defaultDraft,...input};
  const f=getFaction(d);d.faction=f.id;d.group=f.group;
  d.name=typeof d.name==='string'?d.name.slice(0,20):'';
  d.age=Number.isFinite(Number(d.age))?Math.min(200,Math.max(1,Math.round(Number(d.age)))):24;
  d.gender=['여성','남성','설정 안 함'].includes(d.gender)?d.gender:'설정 안 함';
  d.origin=['native','war','wanderer','late'].includes(d.origin)?d.origin:'war';
  d.motivation=motivations.some(m=>m.id===d.motivation)?d.motivation:'rebuild';
  d.style=Object.hasOwn(styles,d.style)?d.style:f.style;
  d.realm=Number.isInteger(Number(d.realm))?Math.max(0,Math.min(8,Number(d.realm))):3;
  if(d.style==='none'||d.realm===0){d.style='none';d.realm=0;}
  d.stage=stages.includes(d.stage)?d.stage:'완숙';
  d.answers=questions.map((q,i)=>Number.isInteger(input.answers?.[i])&&input.answers[i]>=0&&input.answers[i]<q.choices.length?input.answers[i]:null);
  d.quirk=Number.isInteger(d.quirk)&&d.quirk>=0&&d.quirk<quirks.length?d.quirk:0;
  d.note=typeof d.note==='string'?d.note.slice(0,240):'';
  d.locks=Object.fromEntries(Object.keys(defaultDraft.locks).map(key=>[key,input.locks?.[key]===true]));
  return d;
}
export function originsFor(draft){
  const f=getFaction(draft);
  if(f.id==='free')return [
    {id:'native',name:'작은 마을에서 성장',text:'작은 마을에서 자랐지만, 익숙한 풍경 밖의 세상을 늘 궁금해했다.'},
    {id:'war',name:'전쟁을 피해 떠돌다',text:'수라혈겁 때 살던 곳을 잃고, 남의 도움과 작은 일거리로 길 위의 삶을 버텼다.'},
    {id:'wanderer',name:'태생부터 떠돌이',text:'여러 고을과 객잔을 전전하며 자라, 한곳에 뿌리내리는 일보다 떠나는 일에 익숙하다.'},
    {id:'late',name:'평범한 생업을 떠나',text:'강호와 거리를 둔 평범한 삶을 살다가, 스스로 익숙한 일상을 떠나왔다.'},
  ];
  const war=f.id==='hwasan'?'수라혈겁 이후 화산에 들어왔다. 무너진 산문을 다시 세우는 이들 곁에서 새로운 삶을 시작했다.':f.id==='emei'?'아미산이 함락된 뒤 피난길에 올랐다. 지금은 화산에 머무는 아미파 제자들과 함께 살아간다.':f.id==='blood'?'수라혈겁이 끝난 뒤 아수라혈교에 들어왔다. 패전의 흔적과 새 교주의 시대를 함께 마주했다.':`수라혈겁으로 삶의 터전이 흔들린 뒤 ${f.place}에 닿았다. 그곳에서 ${f.name}의 일원이 되어 새 길을 찾았다.`;
  return [
    {id:'native',name:'오래전부터 이곳에서',text:`어릴 때부터 ${f.name}의 울타리 안에서 자랐다. 그곳의 규율과 사람들은 일상처럼 몸에 배어 있다.`},
    {id:'war',name:f.id==='blood'?'종전 후 입교':f.id==='emei'?'본산 함락 후 피난':'전쟁 이후 합류',text:war},
    {id:'wanderer',name:'떠돌다 맺은 인연',text:`강호를 떠돌다 ${f.name}와 인연을 맺었다. 아직 객인의 자리지만, 이곳에 오래 머물 이유가 조금씩 생긴다.`},
    {id:'late',name:'늦게 선택한 새 삶',text:`다른 생업에 종사하다 스스로 ${f.name}의 문을 두드렸다. 늦게 시작한 만큼 익숙한 삶을 버린 결심도 단단하다.`},
  ];
}
export function realmLabel(d){
  if(d.realm===0)return '없음 (무공 미수련)';
  const rank=d.realm===6?(d.group==='demonic'?'극마':'화경'):d.realm===7?(d.group==='demonic'?'탈마':'현경'):realmNames[d.realm];
  return `${rank} ${d.stage}`;
}
export function recommendName(d){
  const surnames=['연','유','서','백','윤','설','류','진'];
  const endings=d.gender==='남성'?['서윤','도겸','운결','서안','하진','여운']:d.gender==='여성'?['소담','하련','서영','유란','단아','초아']:['서안','여운','하진','소담','운결','하련'];
  const surname=getFaction(d).surname||pick(surnames);
  return surname+pick(endings.filter(ending=>!ending.startsWith(surname.at(-1))));
}
export function randomizeDraft(input){
  const d=normalizeDraft(input),locks=d.locks;
  if(!locks.faction){const f=pick(factions);d.faction=f.id;d.group=f.group;}
  if(!locks.identity){d.gender=pick(['여성','남성']);d.age=pick([20,22,24,25,27,29,32,35,41,53]);d.name=recommendName(d);}
  if(!locks.background){d.origin=pick(['native','war','wanderer','late']);d.motivation=pick(motivations).id;d.style=getFaction(d).style;d.realm=d.style==='none'?0:pick([1,2,3,3,4,4,5]);d.stage=pick(stages);}
  if(!locks.temper){d.answers=questions.map(q=>Math.floor(Math.random()*q.choices.length));d.quirk=1+Math.floor(Math.random()*(quirks.length-1));}
  return normalizeDraft(d);
}
export function buildPersona(input){
  const d=normalizeDraft(input),f=getFaction(d);
  const answers=questions.map((q,i)=>q.choices[d.answers[i]]).filter(Boolean);
  const tally={heart:0,practical:0,mind:0,free:0};answers.forEach(a=>tally[a.type]++);
  const dominant=Object.keys(tally).sort((a,b)=>tally[b]-tally[a])[0];
  const tendencies={heart:['사람을 향한 마음','곁에 둔 사람과 인연을 쉽게 놓지 않는 사람.'],practical:['삶을 읽는 감각','손에 잡히는 현실을 냉정하게 읽어내는 사람.'],mind:['깊게 살피는 눈','드러난 모습 너머의 이유를 끝까지 살피는 사람.'],free:['얽매이지 않는 발걸음','정해진 길 밖에서도 자기만의 답을 찾는 사람.']};
  const aliasBase={sword:'청운검객',blade:'유풍도객',unarmed:'벽운권객',staff:'유죽봉객',hidden:'월영비객',strategy:'백운책사',medicine:'청향약객',none:'없음'};
  const alias=d.realm<3?'없음':f.id==='hwasan'&&d.style==='sword'?'매향검객':aliasBase[d.style];
  const position=f.id==='free'?'무소속 떠돌이':`${f.name} ${d.origin==='wanderer'?'객인':f.role}`;
  const realmDepth=d.realm===0?'무공을 익히지 않았으며, 관찰력과 생활 속 경험을 밑천으로 살아간다.':d.realm===1?'기초 동작을 반복하며 몸에 익히는 단계다.':d.realm===2?'초식은 익숙해졌지만 실전의 변수에는 아직 흔들린다.':d.realm===3?'내공을 초식에 실어 운용하며 자기만의 강점을 다듬는다.':d.realm===4?'기를 형체로 드러내고 내공을 자유롭게 운용하는 절정의 무인이다.':d.realm===5?'자기만의 무공을 모색하며 호신강기를 자유롭게 운용한다.':d.realm===6?'정해진 초식을 벗어나, 움직임 자체에 무공의 이치를 담는다.':d.realm===7?'자연과 호흡을 나누는 천인합일의 경지에 닿았다.':'생사의 경계를 넘었다는 전설 속 인물로 설정했다.';
  const focus={sword:'검의 거리와 궤적을 읽는 데 집중한다.',blade:'묵직한 도격과 끊기지 않는 기세를 살린다.',unarmed:'가까운 거리에서 권과 장의 힘을 운용한다.',staff:'봉의 긴 사거리와 유연한 변화를 활용한다.',hidden:'상대의 빈틈과 손끝의 정밀함을 중시한다.',strategy:'진의 배치와 지형, 상대의 수를 읽는 데 강점이 있다.',medicine:'약초와 처방을 익히며 다친 이들을 돌보는 데 힘을 쏟는다.',none:'무공보다 생업과 사람을 대하는 경험이 강점이다.'};
  const learned=d.realm>0&&d.style===f.style&&f.arts.length?`수련 무공: ${f.arts.join(' · ')}${d.realm<3?' (기초 수련)':''}\n`:'';
  return {name:d.name.trim()||'이름 없는 나그네',age:d.age,gender:d.gender,faction:f.name,group:groups[f.group],glyph:f.glyph,icon:f.icon,color:f.color,position,alias,realm:realmLabel(d),title:answers.length?tendencies[dominant][0]:'아직 쓰이지 않은 이야기',tags:answers.map(a=>a.trait),intro:`${originsFor(d).find(o=>o.id===d.origin).text}\n\n${motivations.find(m=>m.id===d.motivation).text}`,personality:answers.length?`${tendencies[dominant][1]} ${answers.map(a=>a.text).join(' ')}`:'세 가지 상황에 답하면 마음의 결이 드러난다.',arts:`${d.style==='none'?'무공 미수련':`주력: ${styles[d.style]}`}\n${learned}${realmDepth}${d.realm>0?' '+focus[d.style]:''}`,quirk:quirks[d.quirk],note:d.note.trim()};
}
export function personaText(p){
  return [`[${p.name}]`,`나이: ${p.age}세`,`성별: ${p.gender}`,`직책: ${p.position}`,`별호: ${p.alias}`,`경지: ${p.realm}`,'','[소개]',p.intro,'','[성격]',p.personality,'','[무공과 기예]',p.arts,...(p.quirk&&p.quirk!=='없음'?['','[뜻밖의 면모]',p.quirk]:[]),...(p.note?['','[추가 설정]',p.note]:[])].join('\n');
}
