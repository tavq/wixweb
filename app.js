'use strict';

// Confirmed names, roles and display order. Completed profiles are keyed by name below.
// Optional final values: thumbnail image (1:1), detail image (3:4).
const characters = [
  ['진월','화산파','장문인','orthodox','華','plum','assets/characters/01-thumbnail.webp','assets/characters/01-detail.webp'],
  ['송매','화산파','2대 대제자','orthodox','華','plum','assets/characters/02-thumbnail.webp','assets/characters/02-detail.webp'],
  ['송운','화산파','2대 제자','orthodox','華','sword','assets/characters/03-thumbnail.webp','assets/characters/03-detail.webp'],
  ['서하','화산파','3대 제자','orthodox','華','sword','assets/characters/04-thumbnail.webp','assets/characters/04-detail.webp'],
  ['서지','화산파','3대 제자','orthodox','華','plum','assets/characters/05-thumbnail.webp','assets/characters/05-detail.webp'],
  ['혜화','아미파','2대 속가제자','orthodox','峨','plum','assets/characters/06-thumbnail.webp','assets/characters/06-detail.webp'],
  ['운학','종남파','2대 제자','orthodox','終','mountain','assets/characters/07-thumbnail.webp','assets/characters/07-detail.webp'],
  ['동초희','개방','5결 제자','orthodox','竹','bamboo','assets/characters/08-thumbnail.webp','assets/characters/08-detail.webp'],
  ['남궁서린','남궁세가','삼녀','orthodox','南','sword','assets/characters/09-thumbnail.webp','assets/characters/09-detail.webp'],
  ['당자연','사천당가','장녀','orthodox','唐','bamboo','assets/characters/10-thumbnail.webp','assets/characters/10-detail.webp'],
  ['제갈지안','제갈세가','차녀','orthodox','諸','cloud','assets/characters/11-thumbnail.webp','assets/characters/11-detail.webp'],
  ['모용란','모용세가','차녀','orthodox','慕','plum','assets/characters/12-thumbnail.webp','assets/characters/12-detail.webp'],
  ['팽호연','하북팽가','장녀','orthodox','彭','sword','assets/characters/13-thumbnail.webp','assets/characters/13-detail.webp'],
  ['현엄','소림사','장로','orthodox','禪','mountain','assets/characters/14-thumbnail.webp','assets/characters/14-detail.webp'],
  ['청허','무당파','2대 제자','orthodox','武','cloud','assets/characters/15-thumbnail.webp','assets/characters/15-detail.webp'],
  ['남궁서혁','남궁세가','소가주','orthodox','宮','sword','assets/characters/16-thumbnail.webp','assets/characters/16-detail.webp'],
  ['위초연','녹림','분채주','unorthodox','林','mountain','assets/characters/17-thumbnail.webp','assets/characters/17-detail.webp'],
  ['배수린','장강수로채','채도 (참모)','unorthodox','江','cloud','assets/characters/18-thumbnail.webp','assets/characters/18-detail.webp'],
  ['임소소','하오문','낙양 객잔 점소이 · 하오문도','unorthodox','夜','bamboo','assets/characters/19-thumbnail.webp','assets/characters/19-detail.webp'],
  ['사마월영','살막','살막주','unorthodox','殺','sword','assets/characters/20-thumbnail.webp','assets/characters/20-detail.webp'],
  ['하연라','천마신교','호법','demonic','天','flame','assets/characters/21-thumbnail.webp','assets/characters/21-detail.webp'],
  ['혁련무진','아수라혈교','교주','demonic','血','flame','assets/characters/22-thumbnail.webp','assets/characters/22-detail.webp'],
].map(([name,faction,role,group,glyph,icon,thumbnail=null,detail=null],index)=>({id:index+1,name,faction,role,group,glyph,icon,images:{thumbnail,detail}}));

const characterProfiles = {
  '진월': {
    birthName:'진매화',age:81,alias:'설매선자',realm:'현경 입문',
    intro:['화산파의 태상장로였으나 수라혈겁 이후 무너진 화산을 다시 세운 장문인.','전쟁 뒤 현경에 오르며 반로환동해 젊어졌다.','젊어진 외모를 은근히 즐기는 귀여운 허영이 있다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'자하신공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'이십사수매화검법'},{name:'매화검결'}]},
      {category:'창안 무공',icon:'plum',tone:'signature',techniques:[{name:'설매낙영검'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'암향부동'}]},
      {category:'장법',icon:'plum',techniques:[{name:'매화장'}]},
    ],
  },
  '송매': {
    birthName:'설홍매',age:29,alias:'매화검희',realm:'초절정 입문',
    intro:['전쟁으로 윗세대가 사라지면서 얼떨결에 대제자 자리를 떠안은 실무 총괄.','대외 업무, 제자 관리, 타 문파 응대까지 혼자 다한다.','장난기 많지만, 혼자 속앓이하는 책임감 강한 타입.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'자하공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'이십사수매화검법'},{name:'매화검결'}]},
      {category:'창안 무공',icon:'plum',tone:'signature',techniques:[{name:'희매검'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'매화보'}]},
    ],
  },
  '송운': {
    birthName:'유청연',age:25,alias:'낙매검',realm:'절정 완숙',
    intro:['후기지수 중 손꼽히는 실력자이자 전형적인 ‘검 바보’.','검 말고는 관심이 없어서 생활 감각이 약간 어긋나 있다.','무심하고 천연스러운 반응으로 주변을 당황시키며, 서하의 친언니다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'자하공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'이십사수매화검법'}]},
      {category:'창안 무공',icon:'plum',tone:'signature',techniques:[{name:'일매',note:'미완성'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'매화보'}]},
    ],
  },
  '서하': {
    birthName:'유소연',age:20,alias:'없음',realm:'이류 완숙',
    intro:['전쟁 후 입문한 문파 막내이자 살림꾼.','똑부러지고 잔소리가 많으며, 생활력 없는 언니 송운을 챙기느라 바쁘다.','언니를 동경하면서도 재능 차이에 질투를 느끼는 복잡한 감정을 품고 있다.'],
    martial:[
      {category:'기초 검법',icon:'sword',techniques:[{name:'육합검법'}]},
      {category:'검법',icon:'sword',techniques:[{name:'이십사수매화검법'}]},
      {category:'심법',icon:'cloud',techniques:[{name:'자하공',note:'초입'}]},
    ],
  },
  '서지': {
    birthName:'연자소',age:21,alias:'없음',realm:'이류 입문',
    intro:['검술은 평범하지만 약학에는 천재적인 약초 덕후. 약초밭을 직접 관리한다.','까칠하고 핀잔이 기본값인 상식인 포지션이지만, 다친 사람을 보면 투덜대면서도 끝까지 챙겨주는 은근한 다정함이 있다.'],
    martial:[
      {category:'기초 검법',icon:'sword',techniques:[{name:'육합검법'}]},
      {category:'검법',icon:'sword',techniques:[{name:'이십사수매화검법'}]},
      {category:'심법',icon:'cloud',techniques:[{name:'자하공',note:'초입'}]},
      {category:'사실상의 주력',icon:'bamboo',tone:'specialty',techniques:[{name:'의약 지식'}]},
    ],
  },
  '혜화': {
    birthName:'온서화',age:24,alias:'연화나찰',realm:'절정 입문',
    intro:['아미산이 함락된 뒤 살아남은 출가제자 20여 명을 이끌고 화산까지 피난해 온 인물.','상냥하고 여성스러운 분위기지만, 위기 상황에서 무리를 이끌어낸 외유내강형.','돌아가신 스승이 지어준 법명을 목숨처럼 아낀다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'아미심법'}]},
      {category:'검법',icon:'sword',techniques:[{name:'아미자영검법'}]},
      {category:'장법',icon:'plum',techniques:[{name:'불광보조'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'아미 부운보'}]},
      {category:'봉인 무공',icon:'lock',tone:'sealed',techniques:[{name:'멸절검법'}]},
    ],
  },
  '운학': {
    birthName:'서양람',age:27,alias:'청학영검',realm:'절정 극',
    intro:['종남을 대표하는 후기지수라는 자부심으로 똘똘 뭉친 고고한 츤데레.','초절정 문턱에서 오래 막혀 있어 속으로는 초조해한다.','지면 인정하지 않고 몰래 고쳐 오는 승부욕의 화신이며, 칭찬에 약해서 금방 무너진다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'태을신공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'천하삼십육검'},{name:'회풍유운검'}]},
      {category:'창안 무공',icon:'plum',tone:'signature',techniques:[{name:'청학일선',note:'미완성'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'학상보'}]},
    ],
  },
  '동초희': {
    age:25,alias:'녹죽개',realm:'일류 극',
    intro:['정의파 소속. 넉살과 붙임성으로 어디서든 밥을 얻어먹는 천재.','웬만한 일에는 당황하지 않는 태평한 낙천가지만, 의리 하나는 확실하다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'개방 혼원공'}]},
      {category:'봉법',icon:'bamboo',techniques:[{name:'배향봉법'}]},
      {category:'장법',icon:'plum',techniques:[{name:'파옥장',note:'초입'}]},
    ],
  },
  '남궁서린': {
    age:24,alias:'없음',realm:'일류 완숙',
    intro:['오빠 남궁서혁처럼 되는 것이 인생 목표인 해맑은 노력파.','매일 새벽 수련을 빼먹지 않고, 실패해도 금방 털고 일어난다.','규수로 자라서 세상 물정에 어둡고, 시장 구경을 무척 좋아한다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'대연신공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'창궁무애검법'},{name:'제왕검형',note:'형 흉내'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'창궁보'}]},
    ],
  },
  '당자연': {
    age:32,alias:'독수자란',realm:'절정 극',
    intro:['독술만 놓고 보면 당가 최상위.','후계 경쟁은 관심이 없지만 장녀로서 최소한의 의무만 해낸다.','작은 독사 ‘묵이’를 키우고, 해독 능력도 뛰어나다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'오독신공'}]},
      {category:'암기술',icon:'sword',techniques:[{name:'만천화우'},{name:'폭우이화침'}]},
      {category:'창안 무공',icon:'plum',tone:'signature',techniques:[{name:'자란몽'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'유혼보'}]},
    ],
  },
  '제갈지안': {
    age:28,alias:'백우신혜',realm:'일류 완숙',
    intro:['궁금한 것은 장르를 가리지 않고 직접 해봐야 직성이 풀리는 호기심 덩어리.','머리는 비상하지만 그 호기심 때문에 사고를 자주 친다.'],
    martial:[
      {category:'진법',icon:'cloud',techniques:[{name:'팔진도'},{name:'기문진법'}]},
      {category:'검법',icon:'sword',techniques:[{name:'천지삼재검법'}]},
      {category:'심법',icon:'cloud',techniques:[{name:'현천신공'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'팔괘보'}]},
    ],
  },
  '모용란': {
    age:26,alias:'없음',realm:'일류 입문',
    intro:['오만한 모용가에서 돌연변이처럼 태어난 순수한 아가씨.','신분과 상관없이 누구에게나 예의를 갖춘다.','다만 악의 없이 “쌀이 없으면 고기를 먹으면 되지 않나요?”를 시전하는 세상 물정 제로 타입.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'자미신공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'건곤백절검해'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'능파보'}]},
      {category:'특수 무공',icon:'cloud',tone:'specialty',techniques:[{name:'두전성이',note:'초입'}],description:'이피지도 환시피신의 재능은 있지만 내공이 부족해 아직 걸음마 단계.'},
    ],
  },
  '팽호연': {
    age:28,alias:'금호도희',realm:'절정 완숙',
    intro:['가문 무사들을 직접 챙기는 책임감 강한 장녀. 솔직하고 털털한 북방 무인 기질이라 말을 돌리지 않고, 갑옷과 무기도 남에게 맡기지 않고 직접 손질한다.','그러나 귀여운 것과 단 음식 앞에서는 약해진다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'패도신공'}]},
      {category:'도법',icon:'sword',techniques:[{name:'오호단문도'},{name:'혼원벽력도'}]},
      {category:'보법',icon:'cloud',techniques:[{name:'건곤보도'}]},
      {category:'창안 무공',icon:'plum',techniques:[{name:'없음'}],description:'절정이지만 가문 무공에 충실한 타입.'},
    ],
  },
  '현엄': {
    birthName:'선진악',age:68,alias:'철완신승',realm:'화경 완숙',
    intro:['원칙과 규율을 철벽처럼 지키는 엄격한 노승.','단호하고 표정도 굳어 있지만, 속정이 깊어 뒤에서 사람을 챙기는 타입이다.'],
  },
  '청허': {
    birthName:'백운서',age:26,alias:'현무신검',realm:'절정 완숙',
    intro:['수련을 빼먹고 낮잠을 자거나 낚시를 하러 가는 자유로운 영혼.','그러면서도 무당 후기지수로 꼽히는, 얄미운 천재형.'],
  },
  '남궁서혁': {
    age:32,alias:'창천검공',realm:'초절정 완숙',
    intro:['청렴하고 책임감 강한 정석적인 후계자.','예법과 전통을 중시하는 꼰대 기질이 있는데, 정작 본인은 무엇이 문제인지 모른다.'],
  },
  '위초연': {
    age:30,alias:'산랑',realm:'절정 완숙',
    intro:['산채 식구들을 가족처럼 챙기는 화끈한 산적 누님.','화나면 말보다 주먹이 먼저 나가지만, 자기가 틀렸다 싶으면 바로 고개 숙이고 뒤끝도 없다.','까막눈이지만 불 앞에서 하는 요리는 일품.'],
    martial:[
      {category:'도법',icon:'sword',techniques:[{name:'파천도법'},{name:'십팔채난무도'}]},
      {category:'투척술',icon:'sword',techniques:[{name:'대력비도술'}]},
      {category:'창안 무공',icon:'mountain',tone:'signature',techniques:[{name:'산랑포효'}]},
      {category:'경공',icon:'mountain',techniques:[{name:'산양보'}]},
    ],
  },
  '배수린': {
    age:28,alias:'묵랑야차',realm:'절정 입문',
    intro:['어릴 때 강에 버려졌다가 수로채에 거둬져 자란 냉정한 참모.','감정을 드러내지 않고 차분하게 계산하지만, 자신을 키워준 수로채에 대한 충성심은 누구보다 깊다.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'잠영신공'}]},
      {category:'도법',icon:'sword',techniques:[{name:'분수어도법',note:'쌍도술'}]},
      {category:'경공',icon:'cloud',techniques:[{name:'등평도수'}]},
      {category:'장법',icon:'cloud',techniques:[{name:'천층랑'}]},
    ],
  },
  '임소소': {
    age:20,position:'낙양 객잔 점소이 · 하오문도',alias:'없음',realm:'없음 (무공 미수련)',
    intro:['붙임성 좋은 미소로 손님을 맞는 객잔 간판 점소이.','그러면서 손님들의 대화와 행동을 조용히 하오문에 넘기는 정보원이다.','병든 아버지와 동생 넷을 먹여 살리느라 생활력과 계산이 몸에 밴 소녀 가장.'],
    martial:[],
  },
  '사마월영': {
    age:34,position:'살막주',alias:'망량야화',realm:'초절정 완숙',
    intro:['살막에서 자란 고아 출신으로, 늘 우아한 미소를 짓고 있지만 그 미소는 그저 습관일 뿐인 냉혹한 살수.','살인에 신념도 목적도 없으며, 의뢰비는 기분에 따라 돈이 되기도 하고 양배추가 되기도 한다.','몸에 걸친 장신구가 전부 암기라는 점에서 가장 위험한 ‘미인’.'],
    martial:[
      {category:'심법',icon:'cloud',techniques:[{name:'적멸무심공'}]},
      {category:'색법(索法)',icon:'bamboo',techniques:[{name:'사선(死線)'}]},
      {category:'창안 무공',icon:'plum',tone:'signature',techniques:[{name:'야화만개'}]},
      {category:'단검술',icon:'sword',techniques:[{name:'절명단검술'}]},
      {category:'보법 / 잠행',icon:'cloud',techniques:[{name:'유령신보'},{name:'무영잠행술'}]},
    ],
  },
  '하연라': {
    age:30,alias:'적염천희',realm:'초절정 완숙',
    intro:['남을 괴롭히는 것이 취미인 변덕쟁이 호법. 악의는 없고 순수하게 재미로만 그런다.','분이 틀어지면 순식간에 잔혹해지지만 교에 대한 충성심은 확고하다.','도박, 술, 단과자를 좋아한다.'],
    martial:[
      {category:'심법',icon:'flame',techniques:[{name:'천화마공'},{name:'흡성대법',note:'마공'}]},
      {category:'검법',icon:'sword',techniques:[{name:'홍염검법'}]},
      {category:'장법',icon:'flame',techniques:[{name:'흑사마장'}]},
      {category:'경공',icon:'flame',techniques:[{name:'염화보'}]},
      {category:'창안 무공',icon:'flame',tone:'signature',techniques:[{name:'적염도희'}]},
    ],
  },
  '혁련무진': {
    age:22,alias:'만마비조',realm:'극마 극',
    intro:['전쟁 이후 스무 살에 교주 자리에 오른 괴물 같은 천재.','누구에게나 정중하고 예의 바르며, 겉보기에는 평범한 청년이다.'],
  },
};

// Supporting characters have introduction-only records.
const introOnlyCharacters = new Set(['현엄','청허','남궁서혁','혁련무진']);
const allegianceNames = {orthodox:'정파',unorthodox:'사파',demonic:'마도'};

const palettes = [
  ['#f3b7cf','#71364f'],['#f8cada','#71364f'],['#f4d8e3','#71364f'],
  ['#efc5d7','#71364f'],['#f6dbe8','#71364f'],['#d8e5dd','#71364f'],
  ['#f5e0d4','#71364f'],['#d2e5df','#71364f'],['#cce2d2','#71364f'],
  ['#efcfdd','#71364f'],['#ead9e7','#71364f'],['#cee3d5','#71364f'],
  ['#eee2e6','#71364f'],['#f6d5e2','#71364f'],['#f3cfca','#71364f'],
  ['#f4e7e9','#71364f'],
  ['#c8dccc','#71364f'],['#cde3df','#71364f'],['#efd7dc','#71364f'],
  ['#6c4a60','#f9d7e5'],['#7d425b','#f9d8e6'],['#b1647d','#fff4f5'],
];

const topicContent = {
  overview:{chapter:'序 · 세계의 개요',title:'산 너머의 산,<br>세상 밖의 세상.',body:'강과 산을 따라 수많은 문파와 세가가 자리 잡고, 저마다의 신념을 품은 무림인들이 길을 나섭니다.'},
  factions:{chapter:'勢 · 세력',title:'같은 하늘 아래,<br>서로 다른 깃발.',body:'명분을 지키는 정파, 실리를 좇는 사파, 힘을 믿는 마도. 같은 강호를 살아가지만, 칼을 드는 이유는 저마다 다릅니다.'},
  martial:{chapter:'武 · 무공과 경지',title:'초식에서 시작해,<br>생사의 경계 너머로.',body:'초식을 익히는 삼류에서 생사를 초월하는 생사경까지. 이 강호의 경지는 여덟 단계로 나뉜다.'},
};

const realmStages=['입문','완숙','극'];
const realmLevels=[
  {names:['삼류'],title:'삼류',criterion:'막 입문해 초식을 흉내 내는 단계',description:'동작은 따라 하지만 그 이치는 아직 모른다. 동네 왈패나 갓 들어온 문하생 수준.'},
  {names:['이류'],title:'이류',criterion:'초식은 숙달했으나 실전 경험이 부족한 단계',description:'연무장에서는 능숙해도, 상대가 예상과 다르게 움직이는 실전에서는 흔들린다.'},
  {names:['일류'],title:'일류',criterion:'초식에 내공을 실어 운용할 수 있는 단계',description:'무림인다운 위력이 드러나기 시작한다. 강호에서 이름을 걸고 활동하는 이들 대부분이 이 구간에 있다.'},
  {names:['절정'],title:'절정',criterion:'검강을 사용하고 내공을 자유롭게 운용하는 단계',description:'검기를 넘어 기가 형체를 갖춘 검강을 다룬다. 문파의 핵심 전력이자 후기지수의 정점.'},
  {names:['초절정'],title:'초절정',criterion:'자신만의 무공을 만들고 호신강기를 자유롭게 쓰는 단계',description:'배운 무공을 넘어 창안에 들어서는 분기점. 문파 장로나 세가 후계자급 전력으로 꼽힌다.'},
  {names:['화경','극마'],title:'화경 / 극마',criterion:'초식에 얽매이지 않는 단계',description:'정해진 형을 벗어나 움직임 하나하나가 곧 초식이 된다. 정파에서는 화경, 마도에서는 극마라 부른다.',tone:'transcendent'},
  {names:['현경','탈마'],title:'현경 / 탈마',criterion:'천인합일 — 자연과 하나가 되는 단계',description:'진월은 이 경지에 오르며 반로환동했다. 마도에서 쓰는 대응 명칭은 탈마다.',tone:'nature'},
  {names:['생사경'],title:'생사경',criterion:'생사의 경계를 초월해 도의 영역에 이른 단계',description:'전설과 신화의 영역. 현역 인물 중 도달자는 없으며, 강호의 가장 높은 경계로 남아 있다.',tone:'legend'},
];

function realmMembers(level,stage){
  return characters.filter(character=>{
    const [realm,progress]=characterProfiles[character.name].realm.split(' ');
    return level.names.includes(realm)&&(!stage||progress===stage);
  });
}

function realmPersonMarkup(character,showRealm=false){
  const realm=characterProfiles[character.name].realm;
  return `<button class="realm-person" data-character="${character.id}" aria-label="${character.name}, ${realm}, 인물 소개 열기"><span>${character.name}</span>${showRealm?`<small>${realm.split(' ')[0]}</small>`:''}<svg aria-hidden="true"><use href="#icon-diagonal"/></svg></button>`;
}

function realmsMarkup(topic){
  const outside=characters.find(character=>character.name==='임소소');
  return `<div class="realm-intro">
      <div><p class="reader-chapter">${topic.chapter}</p><h3>${topic.title}</h3><p class="reader-body">${topic.body}</p></div>
      <aside class="realm-progression" aria-label="모든 경지에 공통인 세부 단계"><p>각 경지 안의 세부 단계</p><ol>${realmStages.map(stage=>`<li>${stage}</li>`).join('')}</ol><span>같은 경지 안에서도 수련의 깊이는 다르다.</span></aside>
    </div>
    <section class="realm-map" aria-labelledby="realm-map-heading"><div class="realm-section-heading"><h4 id="realm-map-heading">경지의 흐름</h4><span>낮은 경지에서 높은 경지로</span></div>
      <ol class="realm-ladder">${realmLevels.map((level,index)=>`<li><span>${num(index+1)}</span><strong>${level.title}</strong></li>`).join('')}</ol>
    </section>
    <div class="realm-records-heading"><h4>여덟 경지의 기록</h4><p>이름을 누르면 인물 기록으로 이어진다.</p></div>
    <ol class="realm-records">${realmLevels.map((level,index)=>{
      const members=realmMembers(level);
      return `<li class="realm-card${level.tone?` realm-card--${level.tone}`:''}"><article aria-labelledby="realm-heading-${index+1}">
        <header class="realm-card-heading"><span class="realm-number">${num(index+1)}</span><h5 id="realm-heading-${index+1}">${level.title}</h5><span class="realm-count">${members.length?`${members.length}명`:index===7?'미도달':'해당 인물 없음'}</span></header>
        <p class="realm-criterion">${level.criterion}</p><p class="realm-description">${level.description}</p>
        ${members.length?`<dl class="realm-members">${realmStages.map(stage=>{
          const people=realmMembers(level,stage);
          return people.length?`<div><dt>${stage}</dt><dd>${people.map(character=>realmPersonMarkup(character,level.names.length>1)).join('')}</dd></div>`:'';
        }).join('')}</dl>`:`<p class="realm-unoccupied">${index===7?'현역 인물 중 도달자는 없다.':'현재 해당 경지의 인물은 없다.'}</p>`}
      </article></li>`;
    }).join('')}</ol>
    <aside class="realm-outside"><div><span>경지 외</span><p>임소소는 무공을 익히지 않아 삼류에도 속하지 않는다.</p></div>${realmPersonMarkup(outside)}</aside>`;
}

const factionGroups = [
  {
    key:'orthodox',name:'정파',glyph:'正',definition:'명분과 체면으로 사는 사람들',principle:'협의 · 전통 · 문파의 명예',mood:'점잖은 겉모습, 복잡한 속내',
    title:'명문들의 체면 싸움',body:'하나의 연합처럼 보이지만, 산문을 지키는 문파와 핏줄을 잇는 세가가 은근히 서로를 견제합니다.',
    divisions:[
      {name:'문파',subtitle:'산문에 깃든 신념',entries:[
        {name:'화산파',icon:'plum',tag:'이야기의 본진',body:'수라혈겁 이후 남녀 비율이 1:9로 뒤집힌 여초 검문. 변화무쌍한 매화검이 특기입니다.'},
        {name:'소림사',icon:'mountain',tag:'천하제일명찰',body:'엄격함과 자비를 함께 품은, 무게감 있는 명찰입니다.'},
        {name:'무당파',icon:'cloud',tag:'도가의 영수',body:'부드러움으로 강함을 이기는 도가의 대표 문파입니다.'},
        {name:'종남파',icon:'mountain',tag:'화산의 라이벌',body:'화산의 오랜 라이벌. 험한 산세 덕분에 전쟁 피해가 적었습니다.'},
        {name:'아미파',icon:'plum',tag:'화산에 피난 중',body:'본산 함락 후, 혜화가 이끄는 생존 제자들이 화산에 머물고 있습니다.'},
        {name:'개방',icon:'bamboo',tag:'규모와 정보망',body:'전국의 거지를 아우르는 조직. 최대 인원과 강력한 정보망을 갖췄습니다.'},
      ]},
      {name:'세가',subtitle:'핏줄과 가문의 명예',entries:[
        {name:'남궁세가',icon:'sword',tag:'오대세가의 수장',body:'정통 검술과 가문의 명예를 무엇보다 앞세웁니다.'},
        {name:'사천당가',icon:'bamboo',tag:'독과 암기',body:'독과 암기의 절대강자. 전쟁 중 가문을 봉쇄해 온전히 살아남았습니다.'},
        {name:'제갈세가',icon:'cloud',tag:'진법 · 기관 · 책략',body:'칼보다 머리로 승부하며, 진법과 기관, 책략에 능합니다.'},
        {name:'모용세가',icon:'plum',tag:'황족 후예',body:'황족의 자부심과 야망을 품은 가문. 상대의 무공을 되돌리는 변칙이 특기입니다.'},
        {name:'하북팽가',icon:'sword',tag:'북방의 도(刀)',body:'섬세한 기교보다 묵직한 한 방을 앞세우는 도의 명가입니다.'},
      ]},
    ],
  },
  {
    key:'unorthodox',name:'사파',glyph:'邪',definition:'먹고살기 위해 칼 든 사람들',principle:'이익 · 의리 · 생존',mood:'거칠지만 솔직한 사람들',
    title:'칼 든 생활인들',body:'체면보다 실리를 택한 사람들. 나름의 규율과 의리를 지키며, 정파보다 속내가 솔직하기도 합니다.',
    divisions:[{entries:[
      {name:'녹림칠십이채',icon:'mountain',tag:'산적 연합',body:'산을 거점으로 삼은 산적들. 부녀자와 빈민은 털지 않는 의적의 규율이 있습니다.'},
      {name:'장강수로십팔채',icon:'cloud',tag:'장강의 수적 연합',body:'통행세와 밀무역, 수상 물류를 장악하며 장강 물길을 쥐고 있습니다.'},
      {name:'하오문',icon:'bamboo',tag:'밑바닥의 정보망',body:'기녀·점소이·소매치기·왈패의 지하 조직. 무력은 약하지만 귀는 천하에서 가장 밝습니다.'},
      {name:'살막',icon:'sword',tag:'청부살수 집단',body:'돈만 맞으면 누구든 죽입니다. 天·地·玄·黃의 등급을 따르며, 임무에 실패하면 자결합니다.'},
    ]}],
  },
  {
    key:'demonic',name:'마도',glyph:'魔',definition:'힘 그 자체를 믿는 사람들',principle:'약육강식 · 광신',mood:'위험하고 예측하기 어려운 존재들',
    title:'힘의 신봉자와 피의 광신자',body:'같은 마도로 불려도 두 교단은 다릅니다. 하나는 질서를 지키고, 다른 하나는 피와 광기로 강호를 물들입니다.',
    divisions:[{entries:[
      {name:'천마신교',icon:'flame',tag:'질서 있는 악',location:'호남 장가계 · 무릉원',stance:'정파와 불가침',body:'천마와 교주를 절대 신봉하며 약육강식을 따릅니다. 정파와 맺은 불가침을 지키는, 질서 있는 마도 세력입니다.'},
      {name:'아수라혈교',icon:'flame',tag:'피의 광신자',location:'신강 십만대산',stance:'무림 공적 · 수라혈겁의 주범',body:'피·살육·광기를 숭배하고 시체를 조종합니다. 수라혈겁을 일으킨 장본인으로, 천마신교조차 경멸하는 무림의 공적입니다.'},
    ]}],
  },
];

function factionEntryMarkup(entry,demonic=false,nested=false){
  const heading=nested?'h6':'h5';
  return `<article class="faction-entry${demonic?' is-demonic':''}${entry.name==='화산파'?' is-home':''}">
    <div class="faction-entry-heading"><svg aria-hidden="true"><use href="#icon-${entry.icon}"/></svg><div><p class="faction-entry-tag">${entry.tag}</p><${heading}>${entry.name}</${heading}></div></div>
    <p class="faction-entry-body">${entry.body}</p>
    ${entry.location?`<p class="faction-location"><span>본산</span>${entry.location}</p><p class="faction-stance">${entry.stance}</p>`:''}
  </article>`;
}

function factionsMarkup(topic){
  return `<div class="factions-intro"><p class="reader-chapter">${topic.chapter}</p><h3>${topic.title}</h3><p class="reader-body">${topic.body}</p></div>
    <section class="faction-overview" aria-labelledby="faction-overview-heading">
      <div class="war-section-heading"><h4 id="faction-overview-heading">한눈에 보는 세 갈래</h4><span>THREE PATHS</span></div>
      <div class="faction-paths">${factionGroups.map(group=>`<article class="faction-path faction-tone-${group.key}">
        <span class="path-glyph" aria-hidden="true">${group.glyph}</span><h5>${group.name}</h5><p class="path-definition">${group.definition}</p>
        <dl><div><dt>행동 원리</dt><dd>${group.principle}</dd></div><div><dt>분위기</dt><dd>${group.mood}</dd></div></dl>
      </article>`).join('')}</div>
    </section>
    ${factionGroups.map((group,index)=>`<section class="faction-group faction-tone-${group.key}" aria-labelledby="faction-${group.key}-heading">
      <div class="faction-group-heading"><div class="faction-group-title"><span class="faction-group-mark" aria-hidden="true">${group.glyph}</span><div><p>${num(index+1)} — ${group.name}</p><h4 id="faction-${group.key}-heading">${group.title}</h4></div></div><a class="faction-people-link" href="#characters" data-character-group="${group.key}">${group.name} 인물 ${characters.filter(c=>c.group===group.key).length}명 <svg aria-hidden="true"><use href="#icon-diagonal"/></svg></a></div>
      <p class="faction-group-intro">${group.body}</p>
      ${group.divisions.map(division=>`<div class="faction-division">${division.name?`<div class="faction-division-heading"><h5>${division.name}</h5><span>${division.subtitle}</span></div>`:''}<div class="faction-list${group.key==='demonic'?' faction-cults':''}${group.key==='unorthodox'?' faction-outlaws':''}">${division.entries.map(entry=>factionEntryMarkup(entry,group.key==='demonic',!!division.name)).join('')}</div></div>`).join('')}
    </section>`).join('')}`;
}

const warTimeline = [
  {date:'가정 23년 초경',title:'세상과의 단절',body:'당신이 3년의 폐관수련에 들어갑니다.'},
  {date:'가정 23년 9월',year:'1544년',title:'수라혈겁 발발',body:'아수라혈교가 서역 거점에서 출병합니다.'},
  {date:'가정 23년 말~24년',title:'서부 전선의 붕괴',body:'사천을 유린하고 아미 본산을 함락한 혈교가 섬서로 진입해 화산과 격돌합니다.'},
  {date:'가정 24년 가을경',title:'동귀어진, 그리고 종전',body:'정파 장로들의 동귀어진 끝에 혈교가 퇴각합니다.'},
  {date:'가정 26년 초경',title:'3년 만의 출관',body:'발발 약 2년 반, 종전 약 1년 반 후. 당신이 강호로 돌아옵니다.',current:true},
];

function overviewMarkup(topic){
  return `
    <div class="overview-intro">
      <div>
        <p class="reader-chapter">${topic.chapter}</p>
        <h3>${topic.title}</h3>
        <p class="reader-body">${topic.body}</p>
        <p class="overview-era"><span>현재</span> 가정 26년 초경 · 전쟁이 끝난 뒤의 강호</p>
      </div>
      <div class="overview-art" aria-hidden="true"><span>江湖萬象</span></div>
    </div>

    <section class="war-summary" aria-labelledby="war-heading">
      <div>
        <p class="war-kicker">이 세계를 바꾼 전쟁</p>
        <h4 id="war-heading">수라혈겁<span>.</span></h4>
        <p class="war-meaning">아수라가 불러온 피의 겁난.</p>
      </div>
      <p class="war-summary-body">아수라혈교가 서역에서 중원 서부로 밀려들며 시작된, 약 1년의 침공 전쟁.<br>화산의 성비 역전과 아미의 피난, 젊어진 장문인과 혈교의 젊은 신임 교주까지. <strong>지금의 강호는 이 전쟁이 남긴 흉터 위에 서 있습니다.</strong></p>
    </section>

    <section class="war-section" aria-labelledby="timeline-heading">
      <div class="war-section-heading"><h4 id="timeline-heading">전쟁의 시간</h4><span>01 — TIMELINE</span></div>
      <ol class="war-timeline">
        ${warTimeline.map(event=>`<li class="timeline-event${event.current?' is-current':''}">
          <div class="timeline-date">${event.current?'<span class="timeline-now">현재</span>':''}<span>${event.date}</span>${event.year?`<small>${event.year}</small>`:''}</div>
          <div class="timeline-description"><h5>${event.title}</h5><p>${event.body}</p></div>
        </li>`).join('')}
      </ol>
    </section>

    <section class="war-section war-aftermath" aria-labelledby="aftermath-heading">
      <div class="war-section-heading"><h4 id="aftermath-heading">서쪽에서 밀려온 전쟁</h4><span>02 — AFTERMATH</span></div>
      <div class="invasion-route">
        <p>혈교의 침공 경로 <span>서 → 동</span></p>
        <ol aria-label="혈교의 서쪽에서 동쪽으로 이어진 침공 경로">
          <li>신강 십만대산</li><li>서역 거점</li><li>사천</li><li>섬서</li>
        </ol>
      </div>
      <div class="region-records">
        <article class="region-record" aria-labelledby="sichuan-heading">
          <div class="region-heading"><span>01</span><div><p>첫 번째 희생양</p><h5 id="sichuan-heading">사천</h5></div></div>
          <dl class="faction-aftermath">
            <div><dt>아미파 <span>본산 함락</span></dt><dd>혜화가 이끈 생존 여제자 <strong>20여 명</strong>이 화산으로 피난했습니다. 혜화의 스승도 전쟁에서 목숨을 잃었습니다.</dd></div>
            <div><dt>사천당가 <span>가문 보전</span></dt><dd>가문을 걸어 잠그고 방어에 집중해 온전히 살아남았습니다.</dd></div>
          </dl>
        </article>
        <article class="region-record region-hwasan" aria-labelledby="shaanxi-heading">
          <div class="region-heading"><span>02</span><div><p>화산의 비극</p><h5 id="shaanxi-heading">섬서</h5></div></div>
          <dl class="faction-aftermath">
            <div><dt>화산파 <span>서부전선 선봉</span></dt><dd>전대 장문인 <strong>진명</strong>이 전사하고 본산까지 피습당했습니다.</dd></div>
          </dl>
          <div class="hwasan-losses" aria-label="화산파 정예 남제자의 피해">
            <p>정예 남제자</p>
            <dl><div><dt>전사</dt><dd>6<small>할</small></dd></div><div><dt>무공 상실</dt><dd>2<small>할</small></dd></div></dl>
          </div>
          <p class="gender-shift"><span>문파의 남녀 비율</span><b>8 : 2 <i aria-label="에서">→</i> <strong>1 : 9</strong></b></p>
          <dl class="faction-aftermath">
            <div><dt>종남파 <span>산세를 이용한 방어</span></dt><dd>같은 섬서에 있었지만, 험한 산세를 끼고 싸워 상대적으로 피해가 적었습니다.</dd></div>
          </dl>
        </article>
      </div>
      <p class="eastern-sects"><strong>전선에서 멀었던 문파들</strong><span>피해는 서부에 집중됐습니다. 동부의 남궁·제갈·모용·팽가와 하남의 소림은 비교적 건재했습니다.</span></p>
    </section>

    <div class="overview-closing"><svg aria-hidden="true"><use href="#icon-plum"/></svg><div><span>그리고, 당신의 이야기</span><p>당신의 위패가 세워진 강호에,<br><strong>아무것도 모르는 당신이 돌아옵니다.</strong></p></div></div>`;
}

const $ = (selector,scope=document) => scope.querySelector(selector);
const $$ = (selector,scope=document) => [...scope.querySelectorAll(selector)];
const num = id => String(id).padStart(2,'0');
let currentFilter='all';
let selectedCharacter=1;
let activeDetailTab='intro';
let lastFocus=null;
let openSequence=characters;

function portraitMarkup(character,large=false){
  const source=large?character.images.detail:character.images.thumbnail;
  if(source)return `<img class="portrait-image" src="${source}" alt="${character.name} ${large?'상세':'미리보기'} 이미지" width="${large?1200:1000}" height="${large?1600:1000}" loading="${large?'eager':'lazy'}" decoding="async">${large?'':'<span class="portrait-hover">인물 기록 열람 ↗</span>'}`;
  return `<span class="card-number">${num(character.id)} / ${characters.length}</span><span class="card-faction-mark">${character.faction}</span><span class="portrait-glyph" aria-hidden="true">${character.glyph}</span><span class="portrait-emblem" aria-hidden="true"><svg><use href="#icon-${character.icon}"/></svg></span><span class="portrait-caption">${large?'인물 일러스트 영역':'人物 · ILLUSTRATION'}</span>${large?'<span class="detail-art-note">추후 이미지가 들어갑니다</span>':'<span class="portrait-hover">인물 기록 열람 ↗</span>'}`;
}

function characterPosition(character){
  return characterProfiles[character.name]?.position??`${character.faction} ${character.role}`;
}

function cardMarkup(character){
  const [bg,ink]=palettes[character.id-1];
  return `<button class="character-card" data-character="${character.id}" aria-label="${character.name}, ${allegianceNames[character.group]} ${characterPosition(character)} 소개 열기" style="--portrait-bg:${bg};--portrait-ink:${ink};--art-pos:${50+(character.id*13)%45}%"><span class="card-portrait${character.images.thumbnail?' has-image':''}" style="display:block">${portraitMarkup(character)}</span><span class="card-info" style="display:block"><span class="card-faction">${allegianceNames[character.group]} · ${character.faction}</span><span class="card-name">${character.name}</span><span class="card-role">${character.role}</span><svg aria-hidden="true"><use href="#icon-diagonal"/></svg></span></button>`;
}

function filteredCharacters(){
  const query=$('#character-search').value.trim().toLocaleLowerCase().replace(/\s/g,'');
  return characters.filter(c=>(currentFilter==='all'||c.group===currentFilter)&&`${c.name}${c.faction}${characterPosition(c)}${c.id}${allegianceNames[c.group]}`.replace(/\s/g,'').toLocaleLowerCase().includes(query));
}

function setCharacterFilter(group,{resetSearch=false}={}){
  if(group!=='all'&&!Object.hasOwn(allegianceNames,group))return;
  currentFilter=group;
  if(resetSearch)$('#character-search').value='';
  $$('.filter-button').forEach(button=>{const active=button.dataset.filter===group;button.classList.toggle('is-active',active);button.setAttribute('aria-pressed',String(active));});
  renderCharacters();
}

function renderCharacters(){
  const matches=filteredCharacters();
  $('#character-grid').innerHTML=matches.map(cardMarkup).join('');
  $('#empty-state').hidden=matches.length>0;
  $('#result-count').textContent=`총 ${matches.length}인의 기록`;
}

function setTopic(key,{focus=false}={}){
  if(!topicContent[key]) return;
  const topic=topicContent[key];
  $$('.topic-button').forEach(button=>{const active=button.dataset.topic===key;button.classList.toggle('is-active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  const panel=$('#world-panel');
  panel.setAttribute('aria-labelledby',`topic-${key}`);
  panel.classList.toggle('is-overview',key==='overview');
  panel.classList.toggle('is-factions',key==='factions');
  panel.classList.toggle('is-realms',key==='martial');
  if(key==='overview')panel.innerHTML=overviewMarkup(topic);
  else if(key==='factions')panel.innerHTML=factionsMarkup(topic);
  else panel.innerHTML=realmsMarkup(topic);
  if(focus) $(`#topic-${key}`).focus();
}

function setViewFromHash({scroll=false}={}){
  const view=location.hash==='#characters'?'characters':location.hash==='#persona'?'persona':'world';
  ['world','characters','persona'].forEach(name=>{$(`#${name}-view`).hidden=name!==view;});
  $$('.nav-link').forEach(link=>{const active=link.dataset.view===view;link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
  document.title=view==='characters'?'인물첩 — 강호록 江湖錄':view==='persona'?'나의 강호 — 강호록 江湖錄':'강호록 江湖錄 — 세계관과 인물';
  if(scroll && ['#characters','#world','#persona'].includes(location.hash)) window.scrollTo({top:0,behavior:'instant'});
}

function profileIntroMarkup(profile){
  const birthName=profile.birthName?`<div class="profile-birth-name"><span>本名</span><div><small>본명</small><h3>${profile.birthName}</h3></div><svg aria-hidden="true"><use href="#icon-plum"/></svg></div>`:'';
  return `<div class="profile-intro">${birthName}<div class="profile-story">${profile.intro.map(paragraph=>`<p>${paragraph}</p>`).join('')}</div></div>`;
}

function martialCardsMarkup(profile){
  if(profile.martial.length===0)return `<div class="martial-heading"><h3>무공과 기예</h3><span>武藝</span></div><section class="martial-none" aria-labelledby="martial-none-heading"><span aria-hidden="true">無</span><div><h4 id="martial-none-heading">무공 미수련</h4><p>익힌 무공이 없다.</p></div></section>`;
  return `<div class="martial-heading"><h3>무공과 기예</h3><span>武藝</span></div><div class="martial-grid">${profile.martial.map((entry,index)=>`<section class="martial-card${entry.tone?` martial-card--${entry.tone}`:''}" aria-labelledby="martial-category-${index}"><div class="martial-card-heading"><svg aria-hidden="true"><use href="#icon-${entry.icon}"/></svg><h4 id="martial-category-${index}">${entry.category}</h4><span aria-hidden="true">${num(index+1)}</span></div><ul class="martial-techniques">${entry.techniques.map(technique=>`<li><span>${technique.name}</span>${technique.note?`<small class="technique-note">${technique.note}</small>`:''}</li>`).join('')}</ul>${entry.description?`<p class="martial-description">${entry.description}</p>`:''}</section>`).join('')}</div>`;
}

function setDetailTab(tab,{focus=false}={}){
  if(!['intro','martial'].includes(tab))return;
  const character=characters.find(c=>c.id===selectedCharacter);
  const introOnly=introOnlyCharacters.has(character.name);
  if(introOnly)tab='intro';
  activeDetailTab=tab;
  $$('#character-dialog [data-detail-tab]').forEach(button=>{const active=button.dataset.detailTab===tab;button.hidden=introOnly&&button.dataset.detailTab==='martial';button.classList.toggle('is-active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  const profile=characterProfiles[character.name];
  const panel=$('#detail-tabpanel');
  panel.setAttribute('aria-labelledby',`detail-tab-${tab}`);
  if(profile){
    panel.innerHTML=tab==='intro'?profileIntroMarkup(profile):martialCardsMarkup(profile);
  }else{
    const content=tab==='intro'
      ?['아직 쓰이지 않은 이야기',`${character.faction}의 ${character.role}. 상세 설정이 정해지면 이 기록을 채워갑니다.`]
      :['무공 기록 준비 중','주요 무공과 사용하는 무기는 설정이 정해진 뒤 추가됩니다.'];
    panel.innerHTML=`<div class="detail-pending"><h3>${content[0]}</h3><p>${content[1]}</p></div>`;
  }
  if(focus) $(`#detail-tab-${tab}`).focus();
}

function fillCharacter(id){
  const character=characters.find(c=>c.id===id);
  if(!character)return;
  const profile=characterProfiles[character.name];
  selectedCharacter=id;
  const [bg,ink]=palettes[id-1];
  const portrait=$('#detail-portrait');
  portrait.style.setProperty('--portrait-bg',bg);
  portrait.style.setProperty('--portrait-ink',ink);
  portrait.classList.toggle('has-image',Boolean(character.images.detail));
  portrait.innerHTML=portraitMarkup(character,true);
  $('#detail-number').textContent=`NO. ${num(id)}`;
  $('#detail-alias').textContent=`${allegianceNames[character.group]} · ${character.faction}`;
  $('#detail-name').textContent=character.name;
  $('#detail-facts').innerHTML=`<div><dt>나이</dt><dd>${profile?`${profile.age}세`:'미정'}</dd></div><div><dt>직책</dt><dd>${characterPosition(character)}</dd></div><div><dt>별호</dt><dd>${profile?.alias??'미정'}</dd></div><div><dt>경지</dt><dd>${profile?.realm??'미정'}</dd></div>`;
  $('#detail-record-status').textContent=profile?`${character.faction} · 인물 기록`:'인물 설정 준비 중';
  $('#detail-position').textContent=`${num(openSequence.findIndex(c=>c.id===id)+1)} / ${num(openSequence.length)}`;
  $('#previous-character').disabled=openSequence.length<2;
  $('#next-character').disabled=openSequence.length<2;
  setDetailTab('intro');
  $('#character-dialog').scrollTop=0;
}

function openCharacter(id){
  lastFocus=document.activeElement;
  openSequence=$('#characters-view').hidden?characters:filteredCharacters();
  fillCharacter(id);
  $('#character-dialog').showModal();
  document.body.style.overflow='hidden';
  $('#close-dialog').focus({preventScroll:true});
}

function moveCharacter(direction){
  const index=openSequence.findIndex(c=>c.id===selectedCharacter);
  const next=openSequence[(index+direction+openSequence.length)%openSequence.length];
  if(next)fillCharacter(next.id);
}

function wireTabKeyboard(selector,dataAttribute,callback){
  const buttons=$$(selector);
  buttons.forEach(button=>button.addEventListener('keydown',event=>{
    const available=buttons.filter(candidate=>!candidate.hidden);
    const index=available.indexOf(button);
    if(index<0)return;
    let next;
    if(event.key==='ArrowRight')next=(index+1)%available.length;
    else if(event.key==='ArrowLeft')next=(index-1+available.length)%available.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=available.length-1;
    else return;
    event.preventDefault();callback(available[next].dataset[dataAttribute],{focus:true});
  }));
}

document.addEventListener('click',event=>{
  const card=event.target.closest('[data-character]');
  if(card)openCharacter(Number(card.dataset.character));
  const topicLink=event.target.closest('[data-topic-link]');
  if(topicLink)setTopic(topicLink.dataset.topicLink);
  const groupLink=event.target.closest('[data-character-group]');
  if(groupLink)setCharacterFilter(groupLink.dataset.characterGroup,{resetSearch:true});
});
$$('.topic-button').forEach(button=>button.addEventListener('click',()=>setTopic(button.dataset.topic)));
$$('[data-detail-tab]').forEach(button=>button.addEventListener('click',()=>setDetailTab(button.dataset.detailTab)));
$$('.filter-button').forEach(button=>{
  const group=button.dataset.filter;
  $('small',button).textContent=num(group==='all'?characters.length:characters.filter(c=>c.group===group).length);
  button.addEventListener('click',()=>setCharacterFilter(group));
});
$('#character-search').addEventListener('input',renderCharacters);
$('#reset-search').addEventListener('click',()=>{setCharacterFilter('all',{resetSearch:true});$('#character-search').focus();});
$('#close-dialog').addEventListener('click',()=>$('#character-dialog').close());
$('#character-dialog').addEventListener('close',()=>{document.body.style.overflow='';if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});});
$('#character-dialog').addEventListener('click',event=>{if(event.target!==event.currentTarget)return;const rect=event.currentTarget.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.currentTarget.close();});
$('#previous-character').addEventListener('click',()=>moveCharacter(-1));
$('#next-character').addEventListener('click',()=>moveCharacter(1));
window.addEventListener('hashchange',()=>setViewFromHash({scroll:true}));
wireTabKeyboard('.topic-button','topic',setTopic);
wireTabKeyboard('[data-detail-tab]','detailTab',setDetailTab);
$('#teaser-cards').innerHTML=['화산파','개방','살막','천마신교'].map(faction=>characters.find(c=>c.faction===faction)).map(cardMarkup).join('');
setTopic('overview');
renderCharacters();
setViewFromHash();
