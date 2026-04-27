export interface TimelineEvent {
  minute: string;
  side: "home" | "away" | "neutral";
  player: string;
  type: "goal" | "yellow" | "red" | "sub" | "pen_goal" | "pen_miss" | "own_goal";
  description?: string;
}

export interface MatchStat {
  label: string;
  home: number | string;
  away: number | string;
  homeWidth: number;
  awayWidth: number;
}

export interface TopPerformer {
  name: string;
  side: "home" | "away";
  position: string;
  rating: number;
  note: string;
}

export interface Match {
  id: string;
  tournament: string;
  year: number;
  stage: string;
  date: string;
  venue: string;
  city: string;
  home: {
    name: string;
    flag: string;
    formation: string;
    color: string;
    colorDim: string;
    players: string[];
    score: number;
  };
  away: {
    name: string;
    flag: string;
    formation: string;
    color: string;
    colorDim: string;
    players: string[];
    score: number;
  };
  status: "FT" | "AET" | "PSO";
  penaltyScore?: string;
  xG: { home: number; away: number };
  possession: { home: number; away: number };
  timeline: TimelineEvent[];
  stats: MatchStat[];
  tacticalAnalysis: string;
  keyMoments: string[];
  historicalSignificance: string;
  topPerformers: TopPerformer[];
}

export const MATCHES: Match[] = [
  // ─────────────────────────────────────────────
  // 1. Germany 7-1 Brazil — 2014 Semi-Final
  // ─────────────────────────────────────────────
  {
    id: "germany-vs-brazil-2014-sf",
    tournament: "FIFA World Cup 2014",
    year: 2014,
    stage: "Semi-Final",
    date: "July 8, 2014",
    venue: "Estádio Mineirão",
    city: "Belo Horizonte, Brazil",
    home: {
      name: "Germany",
      flag: "🇩🇪",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Neuer","Lahm","Boateng","Hummels","Höwedes","Khedira","Schweinsteiger","Müller","Özil","Kroos","Klose"],
      score: 7,
    },
    away: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Júlio César","Maicon","Dante","David Luiz","Maxwell","Fernandinho","Luiz Gustavo","Hulk","Oscar","Ramires","Fred"],
      score: 1,
    },
    status: "FT",
    xG: { home: 5.8, away: 0.9 },
    possession: { home: 52, away: 48 },
    timeline: [
      { minute: "11'", side: "home", player: "Müller", type: "goal", description: "Penalty after Dante foul" },
      { minute: "23'", side: "home", player: "Klose", type: "goal", description: "Close-range tap-in, becomes World Cup all-time top scorer (16 goals)" },
      { minute: "24'", side: "home", player: "Kroos", type: "goal", description: "Low strike into bottom corner" },
      { minute: "26'", side: "home", player: "Kroos", type: "goal", description: "Second goal in 69 seconds — fastest brace in World Cup history" },
      { minute: "29'", side: "home", player: "Khedira", type: "goal", description: "Finishes a flowing move — 5 goals in 18 first-half minutes" },
      { minute: "69'", side: "home", player: "Schürrle", type: "goal", description: "Left-foot finish from outside the box" },
      { minute: "79'", side: "home", player: "Schürrle", type: "goal", description: "Cool chip over the goalkeeper" },
      { minute: "90'", side: "away", player: "Oscar", type: "goal", description: "Consolation — Brazil's only goal" },
    ],
    stats: [
      { label: "Shots", home: 18, away: 8, homeWidth: 69, awayWidth: 31 },
      { label: "Shots on Target", home: 14, away: 3, homeWidth: 82, awayWidth: 18 },
      { label: "Possession", home: 52, away: 48, homeWidth: 52, awayWidth: 48 },
      { label: "Passes", home: 485, away: 351, homeWidth: 58, awayWidth: 42 },
      { label: "Pass Accuracy", home: "87%", away: "82%", homeWidth: 52, awayWidth: 48 },
      { label: "Corners", home: 9, away: 3, homeWidth: 75, awayWidth: 25 },
      { label: "Fouls", home: 10, away: 14, homeWidth: 42, awayWidth: 58 },
      { label: "xG", home: "5.81", away: "0.92", homeWidth: 86, awayWidth: 14 },
    ],
    tacticalAnalysis: `Germany's annihilation of host nation Brazil at the Mineirão — dubbed the 'Mineirazo' — remains the most shocking result in World Cup history. Joachim Löw's side exploited a tactically naive and emotionally fragile Brazil with surgical precision.

Brazil entered without their captain Thiago Silva (suspended) and talisman Neymar (injured), and the structural consequences proved catastrophic. Luiz Felipe Scolari set up a 4-2-3-1 that relied heavily on individual brilliance — but without Neymar, no individual was present to carry the load.

Germany's pressing scheme was the key tactical weapon. With Khedira and Schweinsteiger disrupting Brazil's pivot midfield, Özil found pockets between the lines while Müller exploited the space left by Brazil's high defensive line. The absence of Thiago Silva meant David Luiz was tasked with organizing an inexperienced back four — a responsibility he was not equipped for on the night.

The defining tactical moment came in a devastating 18-minute spell between the 11th and 29th minutes. Germany's 4-2-3-1 pressed high and won the ball rapidly in Brazil's half on each occasion. The goals were clinical, varied, and relentless: a penalty, a rebound, two low drives, and an emphatic header. Brazil's crowd fell silent as five goals went in before half-time.

In the second half, Germany managed the game professionally rather than cruelly chasing more goals. The 7-1 scoreline, combined with the venue, the occasion, and Brazil's identity as football's home nation, made this the single most psychologically devastating defeat in football history.`,
    keyMoments: [
      "11'–29': Germany score 5 goals in 18 minutes — the fastest scoring burst in World Cup semi-final history",
      "Kroos scores twice in 69 seconds (24' and 26'), the fastest brace ever recorded at a World Cup",
      "Klose's 23rd-minute goal makes him the all-time World Cup top scorer with 16 goals, surpassing Ronaldo",
      "Brazil's back four, missing the suspended Thiago Silva, fails to hold any shape against Germany's movement",
      "Oscar's consolation in the 90th minute could not mask the scale of Brazil's humiliation on home soil",
    ],
    historicalSignificance: `The 7-1 defeat shook Brazilian football to its foundations. As the host nation, Brazil had carried the weight of a nation's expectations. The Mineirão, normally a fortress of noise and colour, descended into silence and tears. President Dilma Rousseff watched in disbelief. Players wept on the pitch. The result exposed years of structural neglect: Brazil had prioritised technical flair over tactical organisation, and had no system to fall back on when key individuals were removed. Germany went on to win the tournament, beating Argentina 1-0 in the final. The Mineirazo triggered a decade-long soul-searching in Brazilian football and is studied in coaching courses worldwide as the ultimate cautionary tale about tactical over-reliance on individual talent.`,
    topPerformers: [
      { name: "Thomas Müller", side: "home", position: "AM · 🇩🇪", rating: 9.4, note: "1 goal, 3 assists, constant movement destroyed Brazil's defensive shape" },
      { name: "Toni Kroos", side: "home", position: "CM · 🇩🇪", rating: 9.1, note: "2 goals, 1 assist — fastest brace in World Cup history" },
      { name: "Manuel Neuer", side: "home", position: "GK · 🇩🇪", rating: 8.6, note: "Near-perfect sweeper-keeper performance, dominant distribution" },
      { name: "Oscar", side: "away", position: "AM · 🇧🇷", rating: 6.2, note: "Only Brazil player who showed fight; scored the consolation" },
    ],
  },

  // ─────────────────────────────────────────────
  // 2. Argentina 3-3 France — 2022 Final (ARG 4-2 pens)
  // ─────────────────────────────────────────────
  {
    id: "argentina-vs-france-2022-final",
    tournament: "FIFA World Cup 2022",
    year: 2022,
    stage: "Final",
    date: "December 18, 2022",
    venue: "Lusail Iconic Stadium",
    city: "Lusail, Qatar",
    home: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["E. Martínez","Molina","Romero","Otamendi","Tagliafico","De Paul","Enzo Fernández","Mac Allister","Di María","Messi","Álvarez"],
      score: 3,
    },
    away: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Lloris","Kounde","Varane","Upamecano","T. Hernández","Tchouaméni","Rabiot","Dembélé","Griezmann","Mbappé","Giroud"],
      score: 3,
    },
    status: "PSO",
    penaltyScore: "4-2",
    xG: { home: 3.1, away: 2.8 },
    possession: { home: 44, away: 56 },
    timeline: [
      { minute: "23'", side: "home", player: "Messi", type: "pen_goal", description: "Penalty — Di María fouled in the box" },
      { minute: "36'", side: "home", player: "Di María", type: "goal", description: "Brilliant left-foot finish — Argentina's tactical masterpiece goal" },
      { minute: "80'", side: "away", player: "Mbappé", type: "pen_goal", description: "Penalty — Otamendi handball in box" },
      { minute: "81'", side: "away", player: "Mbappé", type: "goal", description: "Stunning volley from outside the box — 2-2, the comeback begins" },
      { minute: "108'", side: "home", player: "Messi", type: "goal", description: "Poked in after E. Martínez save — 3-2 in extra time" },
      { minute: "118'", side: "away", player: "Mbappé", type: "pen_goal", description: "Hat-trick penalty — 3-3, forces shootout" },
      { minute: "PSO", side: "away", player: "Konaté", type: "pen_miss", description: "Saved by E. Martínez — Argentina's third penalty save of the shootout era" },
    ],
    stats: [
      { label: "Possession", home: 44, away: 56, homeWidth: 44, awayWidth: 56 },
      { label: "Shots", home: 20, away: 20, homeWidth: 50, awayWidth: 50 },
      { label: "Shots on Target", home: 9, away: 8, homeWidth: 53, awayWidth: 47 },
      { label: "Passes", home: 398, away: 497, homeWidth: 44, awayWidth: 56 },
      { label: "Pass Accuracy", home: "85%", away: "87%", homeWidth: 49, awayWidth: 51 },
      { label: "Dribbles Completed", home: "9", away: "7", homeWidth: 56, awayWidth: 44 },
      { label: "Fouls", home: 16, away: 14, homeWidth: 53, awayWidth: 47 },
      { label: "xG", home: "3.08", away: "2.83", homeWidth: 52, awayWidth: 48 },
    ],
    tacticalAnalysis: `The 2022 World Cup Final delivered one of sport's most extraordinary narratives: a match that appeared decided with 10 minutes remaining, only for Kylian Mbappé to produce the greatest individual salvage operation in the history of the sport.

Argentina's manager Lionel Scaloni deployed a tactically intelligent 4-3-3 that neutralised France's creative engine. The key was isolating Mbappé. By keeping Mac Allister and De Paul in a compact double pivot, Scaloni denied France space in the half-spaces that Griezmann typically exploits. Di María was given freedom to push high and wide on the right, and his movement stretched France's left side — eventually leading to the 36th-minute goal of the highest quality.

At 2-0 in the 79th minute, the game appeared over. Didier Deschamps' response was bold: introducing Thuram and Camavinga simultaneously, reshaping to a 4-3-3. The gamble worked spectacularly. Mbappé won and converted a penalty, then within 97 seconds produced a volleyed equaliser of breathtaking technique. Deschamps' substitutions had completely changed the match's rhythm.

Extra time was played at an extraordinary intensity. Messi restored Argentina's lead in the 108th minute, only for Mbappé — again — to equalise from the spot in the 118th. In the penalty shootout, Emiliano Martínez's psychological warfare proved decisive: he saved Konaté's kick to seal Argentina's third World Cup title and crown Lionel Messi as world champion at last.`,
    keyMoments: [
      "36' Di María goal: Argentina's tactical high-press and Di María's run exploited France's weak left side",
      "79'–81': Mbappé scores twice in 97 seconds — from 2-0 down to 2-2, the fastest double comeback in a World Cup final",
      "108' Messi's third goal: a scrambled finish that appeared to give Argentina the trophy, with French fans already filing out",
      "118' Mbappé's hat-trick penalty: only the second hat-trick in a World Cup final, forcing extra time — his 3 goals came in 8 minutes",
      "PSO: Emiliano Martínez's decisive save from Konaté, his third penalty stop in the tournament",
    ],
    historicalSignificance: `The 2022 final is widely regarded as the greatest World Cup match ever played. It had everything: a dominant first half, a stunning comeback, extra-time drama, and a penalty shootout. For Messi, victory completed the only trophy missing from his career and settled the debate about football's greatest-ever player. For Mbappé, the 8-goal tournament cemented his status as Messi's successor. France became only the second team in history to score three goals in a World Cup final and lose. Argentina's win was their third World Cup, ending a 36-year wait.`,
    topPerformers: [
      { name: "Lionel Messi", side: "home", position: "RW → CF · 🇦🇷", rating: 9.7, note: "2 goals, 1 assist — world champion after 20-year wait" },
      { name: "Kylian Mbappé", side: "away", position: "CF · 🇫🇷", rating: 9.5, note: "Hat-trick — 8 goals in the tournament, kept France alive single-handedly" },
      { name: "E. Martínez", side: "home", position: "GK · 🇦🇷", rating: 9.0, note: "World-class saves in extra time + decisive PSO stop from Konaté" },
      { name: "Alexis Mac Allister", side: "home", position: "CM · 🇦🇷", rating: 8.4, note: "Neutralised France's midfield, pressed relentlessly for 120 minutes" },
    ],
  },

  // ─────────────────────────────────────────────
  // 3. Spain 1-0 Netherlands — 2010 Final (AET)
  // ─────────────────────────────────────────────
  {
    id: "spain-vs-netherlands-2010-final",
    tournament: "FIFA World Cup 2010",
    year: 2010,
    stage: "Final",
    date: "July 11, 2010",
    venue: "Soccer City (FNB Stadium)",
    city: "Johannesburg, South Africa",
    home: {
      name: "Spain",
      flag: "🇪🇸",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Casillas","Sergio Ramos","Piqué","Capdevila","Marchena","Xabi Alonso","Busquets","David Villa","Xavi","Iniesta","Torres"],
      score: 1,
    },
    away: {
      name: "Netherlands",
      flag: "🇳🇱",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Stekelenburg","Van der Wiel","Heitinga","Mathijsen","Van Bronckhorst","Van Bommel","De Jong","Robben","Sneijder","Van der Vaart","Van Persie"],
      score: 0,
    },
    status: "AET",
    xG: { home: 1.9, away: 1.4 },
    possession: { home: 57, away: 43 },
    timeline: [
      { minute: "116'", side: "home", player: "Iniesta", type: "goal", description: "Extra-time winner — Cesc Fàbregas assist, Iniesta drives low into the corner" },
    ],
    stats: [
      { label: "Possession", home: 57, away: 43, homeWidth: 57, awayWidth: 43 },
      { label: "Shots", home: 15, away: 12, homeWidth: 56, awayWidth: 44 },
      { label: "Shots on Target", home: 8, away: 4, homeWidth: 67, awayWidth: 33 },
      { label: "Passes", home: 692, away: 441, homeWidth: 61, awayWidth: 39 },
      { label: "Pass Accuracy", home: "91%", away: "83%", homeWidth: 52, awayWidth: 48 },
      { label: "Yellow Cards", home: "5", away: "9", homeWidth: 36, awayWidth: 64 },
      { label: "Fouls", home: 22, away: 28, homeWidth: 44, awayWidth: 56 },
      { label: "xG", home: "1.89", away: "1.41", homeWidth: 57, awayWidth: 43 },
    ],
    tacticalAnalysis: `Spain's tiki-taka philosophy, refined over four years by Vicente del Bosque, reached its zenith in Johannesburg. The 2010 World Cup Final was not a beautiful game — it was a tactical battle of the highest intensity, punctuated by Dutch cynicism and Spanish persistence.

Netherlands manager Bert van Marwijk deployed a deliberate plan: deny Spain space in central areas with a deep, compact 4-2-3-1 and use aggressive pressing to disrupt Spain's rhythm. The Dutch tactical discipline worked for long periods, but the constant fouls required to maintain it — 28 in total, including Nigel de Jong's infamous karate kick on Xabi Alonso — cost nine yellow cards.

Spain's approach was built on patience. With Xavi and Iniesta dictating from deep, the ball was recycled endlessly, probing for openings. Busquets sat as the single pivot, allowing both Xabi Alonso and Iniesta to push higher. David Villa drifted from the left channel to create overloads rather than simply serving as a centre-forward.

The decisive moment came in the 116th minute of extra time. Fàbregas — on as a substitute — found Iniesta arriving late into the penalty area from the right. His controlled finish under pressure, with the score still goalless after 115 minutes, produced one of football's iconic celebrations: the shirt removed, the name "Dani Jarque" revealed — a tribute to his friend and former teammate who had died of a heart attack the previous year.`,
    keyMoments: [
      "23': De Jong's karate kick on Xabi Alonso's chest — a red card offence that received only a yellow, changing the tactical dynamic",
      "62': Robben one-on-one with Casillas — the Dutch missed their best chance, Casillas makes a big save with his feet",
      "84': Heitinga's second yellow card reduces Netherlands to 10 men in extra time, opening space for Spain",
      "116': Iniesta's winner — an iconic goal and celebration, dedicated to deceased teammate Dani Jarque",
      "Spain become the first European team to win a World Cup held outside of Europe",
    ],
    historicalSignificance: `Spain's victory in South Africa completed an extraordinary era of dominance: Euro 2008, World Cup 2010, and Euro 2012 — a sequence unmatched in international football history. The 2010 squad was the golden generation of Spanish football, built on the Barcelona philosophy of technical excellence and positional play. The tiki-taka system they popularised changed how football was played globally, spawning a decade of high-possession, pressing-based football across the sport.`,
    topPerformers: [
      { name: "Andrés Iniesta", side: "home", position: "CM · 🇪🇸", rating: 9.5, note: "Golden Ball winner — scored the most important goal in Spanish football history" },
      { name: "Xavi Hernández", side: "home", position: "CM · 🇪🇸", rating: 9.0, note: "817 passes in the tournament — the conductor of Spain's orchestra" },
      { name: "Iker Casillas", side: "home", position: "GK · 🇪🇸", rating: 9.0, note: "Key save from Robben at 0-0 proved decisive; tournament's best goalkeeper" },
      { name: "Arjen Robben", side: "away", position: "RM · 🇳🇱", rating: 7.8, note: "Netherlands' most dangerous player but missed the crucial one-on-one in the second half" },
    ],
  },

  // ─────────────────────────────────────────────
  // 4. France 3-0 Brazil — 1998 Final
  // ─────────────────────────────────────────────
  {
    id: "france-vs-brazil-1998-final",
    tournament: "FIFA World Cup 1998",
    year: 1998,
    stage: "Final",
    date: "July 12, 1998",
    venue: "Stade de France",
    city: "Saint-Denis, France",
    home: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Barthez","Thuram","Leboeuf","Desailly","Lizarazu","Deschamps","Petit","Zidane","Djorkaeff","Dugarry","Guivarc'h"],
      score: 3,
    },
    away: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Taffarel","Cafu","Aldair","Jr. Baiano","Roberto Carlos","César Sampaio","Mauro Silva","Leonardo","Ronaldo","Bebeto","Rivaldo"],
      score: 0,
    },
    status: "FT",
    xG: { home: 2.4, away: 0.6 },
    possession: { home: 52, away: 48 },
    timeline: [
      { minute: "27'", side: "home", player: "Zidane", type: "goal", description: "Towering header from a Petit corner — Brazil's marking utterly failed" },
      { minute: "45+1'", side: "home", player: "Zidane", type: "goal", description: "Second header before half-time — another corner, same punishment" },
      { minute: "68'", side: "away", player: "Desailly", type: "red", description: "Second yellow — France to finish with 10 men" },
      { minute: "90'", side: "home", player: "Petit", type: "goal", description: "Counter-attack goal seals the win for host nation" },
    ],
    stats: [
      { label: "Possession", home: 52, away: 48, homeWidth: 52, awayWidth: 48 },
      { label: "Shots", home: 16, away: 11, homeWidth: 59, awayWidth: 41 },
      { label: "Shots on Target", home: 8, away: 3, homeWidth: 73, awayWidth: 27 },
      { label: "Passes", home: 449, away: 388, homeWidth: 54, awayWidth: 46 },
      { label: "Pass Accuracy", home: "86%", away: "81%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 7, away: 4, homeWidth: 64, awayWidth: 36 },
      { label: "Fouls", home: 14, away: 18, homeWidth: 44, awayWidth: 56 },
      { label: "xG", home: "2.41", away: "0.58", homeWidth: 81, awayWidth: 19 },
    ],
    tacticalAnalysis: `The 1998 World Cup Final produced a result that surprised almost everyone — and one that was profoundly shaped by events off the pitch. Zinedine Zidane delivered one of the great individual final performances, but the match's defining sub-plot was Brazil's preparation for kick-off.

Ronaldo — the world's best player and Brazil's talismanic striker — suffered a convulsive episode in the team hotel hours before the match. He was initially left out of the starting lineup, then restored to it. The effects were visible: Ronaldo was a shadow of himself, unable to influence the game in any meaningful way. The confusion in the Brazil camp disrupted their entire preparation.

France's Aimé Jacquet set up a 4-2-3-1 that was tactically coherent and defensively sound. Didier Deschamps and Emmanuel Petit formed a disciplined double pivot that absorbed Brazil's midfield creativity, while Zidane was given licence to drop deep, receive, and orchestrate. The corner set-pieces that produced France's first two goals were not accidental — France had worked specifically on Zidane's movement into the near-post zone against Brazil's ball-watching defence.

Even reduced to 10 men after Desailly's red card in the 68th minute, France were well-organised. Petit's counter-attack goal in injury time, after Brazil pushed players forward in search of a way back, closed the scoring emphatically. France's tactical discipline and collective organisation proved decisive against a Brazil side that was emotionally and logistically compromised.`,
    keyMoments: [
      "Pre-match: Ronaldo's mysterious convulsion in the hotel — he was initially omitted from the team sheet, causing chaos in the Brazil camp",
      "27' and 45': Zidane scores twice from corners — Brazil's defensive marking at set-pieces is exposed repeatedly",
      "68': Desailly's red card — France must defend for 22 minutes with 10 men, but remain disciplined",
      "90': Petit's counter-attack goal — France capitalise on Brazil's desperation, sealing a commanding victory",
      "Host nation victory: France become only the third team to win the World Cup on home soil",
    ],
    historicalSignificance: `France's first World Cup triumph came on home soil and sparked a night of celebration that saw one million people gather on the Champs-Élysées. Zidane — an Algerian-born Frenchman from Marseille — became a national hero in a country deeply divided over immigration and identity. The victory symbolised the multi-cultural "black, blanc, beur" identity that the French team embodied. Brazil's defeat remains shrouded in the mystery of Ronaldo's health episode — a story never fully explained and one of the game's great unsolved riddles.`,
    topPerformers: [
      { name: "Zinedine Zidane", side: "home", position: "AM · 🇫🇷", rating: 9.6, note: "Two headed goals from corners — his greatest performance in a France shirt" },
      { name: "Didier Deschamps", side: "home", position: "CM · 🇫🇷", rating: 8.8, note: "Controlled the midfield entirely — Rivaldo and Ronaldo virtually anonymous" },
      { name: "Laurent Blanc", side: "home", position: "CB · 🇫🇷", rating: 8.3, note: "Commanding at the back after Desailly's red; missed the final himself through suspension" },
      { name: "Rivaldo", side: "away", position: "LW · 🇧🇷", rating: 5.8, note: "Brazil's best player but could not function without a fit Ronaldo beside him" },
    ],
  },

  // ─────────────────────────────────────────────
  // 5. Argentina 2-1 England — 1986 Quarter-Final
  // ─────────────────────────────────────────────
  {
    id: "argentina-vs-england-1986-qf",
    tournament: "FIFA World Cup 1986",
    year: 1986,
    stage: "Quarter-Final",
    date: "June 22, 1986",
    venue: "Estadio Azteca",
    city: "Mexico City, Mexico",
    home: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Pumpido","Brown","Cuciuffo","Ruggeri","Olarticoechea","Batista","Giusti","Burruchaga","Enrique","Maradona","Valdano"],
      score: 2,
    },
    away: {
      name: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Shilton","Stevens","Fenwick","Butcher","Sansom","Reid","Hoddle","Hodge","Beardsley","Lineker","Barnes"],
      score: 1,
    },
    status: "FT",
    xG: { home: 1.8, away: 1.2 },
    possession: { home: 54, away: 46 },
    timeline: [
      { minute: "51'", side: "home", player: "Maradona", type: "goal", description: "Hand of God — deliberately punched into the net, unseen by referee Ali Bin Nasser" },
      { minute: "55'", side: "home", player: "Maradona", type: "goal", description: "Goal of the Century — 60-yard dribble beating five England players before scoring" },
      { minute: "81'", side: "away", player: "Lineker", type: "goal", description: "Barnes cross, Lineker header — England's consolation" },
    ],
    stats: [
      { label: "Possession", home: 54, away: 46, homeWidth: 54, awayWidth: 46 },
      { label: "Shots", home: 14, away: 12, homeWidth: 54, awayWidth: 46 },
      { label: "Shots on Target", home: 6, away: 4, homeWidth: 60, awayWidth: 40 },
      { label: "Dribbles (Maradona)", home: "7 completed", away: "—", homeWidth: 100, awayWidth: 0 },
      { label: "Pass Accuracy", home: "82%", away: "79%", homeWidth: 51, awayWidth: 49 },
      { label: "Fouls Suffered (Maradona)", home: "9", away: "—", homeWidth: 100, awayWidth: 0 },
      { label: "xG", home: "1.82", away: "1.19", homeWidth: 60, awayWidth: 40 },
    ],
    tacticalAnalysis: `No match in World Cup history has produced two goals of such contrasting moral significance. In the space of four minutes, Maradona scored the most controversial goal ever seen and the greatest goal ever scored — a duality that has defined his legend for nearly four decades.

Argentina's manager Carlos Bilardo set up a direct, counter-attacking 4-3-3 that channelled the ball to Maradona as quickly and frequently as possible. Maradona operated as a free agent — nominally on the left, but drifting centrally to pick up the ball and drive at England's defence. Bilardo's genius was creating a team of intelligent runners — Valdano and Burruchaga — who could exploit the spaces Maradona opened with his dribbles and passes.

England, under Bobby Robson, played a functional 4-4-2. Peter Reid and Glenn Hoddle gave them midfield coverage, but the team lacked the pace to cope with Maradona's acceleration or the tactical flexibility to contain him with double-marking.

The 51st-minute goal saw Maradona punch the ball into the net with his left hand — a clear handball that referee Ali Bin Nasser failed to spot. Maradona later described it as "a little with the head of Maradona and a little with the hand of God." Four minutes later came what FIFA voted the Goal of the Century in 2002: a 60-yard run from his own half, beating Hoddle, Reid, Butcher, Fenwick, and then goalkeeper Shilton — completed in just under 11 seconds.`,
    keyMoments: [
      "51' Hand of God: Maradona punches the ball into the net — the referee misses it, England's protests are ignored",
      "55' Goal of the Century: Maradona beats five England players in a 10.5-second, 60-metre run that changed football history",
      "The two goals scored within four minutes represent the full spectrum of Maradona's character: cunning and genius",
      "81' Lineker pulls one back — England's late pressure nearly forces extra time but runs out of time",
      "Four days after the match, Argentina beat Belgium to reach the final, where they defeat West Germany 3-2",
    ],
    historicalSignificance: `This match occurred just four years after the Falklands War between Argentina and England — a conflict that had claimed nearly 1,000 lives. The political weight was immense. Maradona acknowledged the Hand of God as revenge for the Malvinas. The Goal of the Century, in contrast, transcended politics entirely and gave the world one of sport's purest moments of human brilliance. The match remains the most discussed quarter-final in World Cup history and is replayed and analysed in virtually every country where football is played.`,
    topPerformers: [
      { name: "Diego Maradona", side: "home", position: "AM · 🇦🇷", rating: 10.0, note: "The Hand of God + Goal of the Century in one match — the single most iconic individual World Cup performance" },
      { name: "Jorge Valdano", side: "home", position: "CF · 🇦🇷", rating: 7.8, note: "Intelligent movement created space for Maradona's runs throughout" },
      { name: "Gary Lineker", side: "away", position: "CF · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 7.4, note: "Golden Boot winner of the tournament — scored England's consolation, stretched Argentina late on" },
      { name: "Peter Shilton", side: "away", position: "GK · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 6.5, note: "Helpless against both goals — the handball still angers him decades later" },
    ],
  },

  // ─────────────────────────────────────────────
  // 6. Brazil 4-1 Italy — 1970 Final
  // ─────────────────────────────────────────────
  {
    id: "brazil-vs-italy-1970-final",
    tournament: "FIFA World Cup 1970",
    year: 1970,
    stage: "Final",
    date: "June 21, 1970",
    venue: "Estadio Azteca",
    city: "Mexico City, Mexico",
    home: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Félix","Carlos Alberto","Brito","Piazza","Everaldo","Clodoaldo","Gérson","Jairzinho","Pelé","Rivelino","Tostão"],
      score: 4,
    },
    away: {
      name: "Italy",
      flag: "🇮🇹",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Albertosi","Burgnich","Rosato","Facchetti","Bertini","De Sisti","Mazzola","Boninsegna","Riva","Domenghini","Cera"],
      score: 1,
    },
    status: "FT",
    xG: { home: 3.6, away: 1.1 },
    possession: { home: 58, away: 42 },
    timeline: [
      { minute: "18'", side: "home", player: "Pelé", type: "goal", description: "Towering header from Rivelino cross — Pelé's leap from a standing position" },
      { minute: "37'", side: "away", player: "Boninsegna", type: "goal", description: "Italian counter-attack — Clodoaldo's error gifted the chance" },
      { minute: "66'", side: "home", player: "Gérson", type: "goal", description: "Long-range left-foot drive — restored Brazil's lead" },
      { minute: "71'", side: "home", player: "Jairzinho", type: "goal", description: "Pelé assist — Jairzinho scores in every match of the tournament (6 from 6)" },
      { minute: "86'", side: "home", player: "Carlos Alberto", type: "goal", description: "The perfect team goal: 10 players touch the ball before Carlos Alberto's thunderbolt finish" },
    ],
    stats: [
      { label: "Possession", home: 58, away: 42, homeWidth: 58, awayWidth: 42 },
      { label: "Shots", home: 22, away: 9, homeWidth: 71, awayWidth: 29 },
      { label: "Shots on Target", home: 12, away: 4, homeWidth: 75, awayWidth: 25 },
      { label: "Goals", home: 4, away: 1, homeWidth: 80, awayWidth: 20 },
      { label: "Pass Accuracy", home: "84%", away: "76%", homeWidth: 53, awayWidth: 47 },
      { label: "Dribbles Completed", home: 14, away: 5, homeWidth: 74, awayWidth: 26 },
      { label: "xG", home: "3.61", away: "1.08", homeWidth: 77, awayWidth: 23 },
    ],
    tacticalAnalysis: `The 1970 World Cup Final pitted football's two dominant philosophies against each other: Brazilian flair versus Italian tactical rigour. Brazil's attacking 4-3-3 against Italy's defensive catenaccio-influenced system. The result was an emphatic victory for jogo bonito — the beautiful game.

Brazil's 1970 squad is widely considered the greatest international team ever assembled. Manager Mário Zagallo had the tactical intelligence to place extraordinary individual talent into a coherent system. Pelé operated as a false nine, dropping deep to receive and create overloads. Gérson controlled the tempo from midfield. Jairzinho provided relentless energy and goals on the right. Rivelino was a creative force on the left. Tostão was the mobile centre-forward who dragged defenders out of position.

Italy's catenaccio system — with its libero (sweeper) and man-marking approach — had been devastatingly effective in Serie A and in the first five World Cup matches. But the quality of Brazil's individual movements and the speed of their combination play overwhelmed Italy's defensive structure. The problem was the Italy system required error-free discipline; the moment Clodoaldo's error gifted Boninsegna an equaliser and restored Italian confidence, Brazil simply redoubled their intensity.

The final goal — Carlos Alberto's 86th-minute thunderbolt — epitomised the Brazil of 1970. The move involves all 10 outfield players touching the ball before the right-back arrives at pace to finish. It is considered by many coaches and analysts to be the greatest team goal in football history.`,
    keyMoments: [
      "18': Pelé's header — his leap from standing exceeds 78cm, the height of a typical outfield player's vertical jump",
      "37': Boninsegna's equaliser after Clodoaldo's error — Italy's catenaccio briefly appears to be working",
      "66' and 71': Gérson and Jairzinho goals in five minutes — Brazil reassert control completely",
      "86': Carlos Alberto's goal — the perfect team goal, voted the greatest in World Cup history by multiple polls",
      "Jairzinho scores in all 6 matches: the only player ever to achieve this feat in a single World Cup",
    ],
    historicalSignificance: `Brazil's 1970 victory earned them permanent possession of the Jules Rimet Trophy — a prize that was stolen and never recovered in 1983. The squad is the benchmark against which all other international teams are measured. Pelé, appearing in his third World Cup Final, delivered a masterclass that confirmed his status as football's pre-eminent figure. The team's flowing, attacking style of football set an aesthetic standard that the sport has chased ever since — 54 years later, no World Cup winner has matched the combination of individual brilliance and collective beauty that Zagallo's Brazil displayed.`,
    topPerformers: [
      { name: "Pelé", side: "home", position: "CF · 🇧🇷", rating: 9.8, note: "1 goal, 1 assist — controlled the entire match with intelligence and brilliance" },
      { name: "Gérson", side: "home", position: "CM · 🇧🇷", rating: 9.3, note: "Scored the decisive third goal; his left foot dictated every attack" },
      { name: "Jairzinho", side: "home", position: "RW · 🇧🇷", rating: 9.2, note: "Scored in all 6 games of the tournament — the only player ever to achieve this" },
      { name: "Carlos Alberto", side: "home", position: "RB · 🇧🇷", rating: 9.0, note: "Scored the greatest team goal in World Cup history — his forward runs were a tactical weapon" },
    ],
  },

  // ─────────────────────────────────────────────
  // 7. Italy 3-2 Brazil — 1982 Second Round
  // ─────────────────────────────────────────────
  {
    id: "italy-vs-brazil-1982",
    tournament: "FIFA World Cup 1982",
    year: 1982,
    stage: "Second Round (Group Stage)",
    date: "July 5, 1982",
    venue: "Estadio de Sarrià",
    city: "Barcelona, Spain",
    home: {
      name: "Italy",
      flag: "🇮🇹",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Zoff","Cabrini","Collovati","Scirea","Gentile","Tardelli","Oriali","Conti","Rossi","Graziani","Antognoni"],
      score: 3,
    },
    away: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Valdir Peres","Leandro","Luizinho","Oscar","Júnior","Cerezo","Falcão","Sócrates","Zico","Eder","Serginho"],
      score: 2,
    },
    status: "FT",
    xG: { home: 2.4, away: 2.9 },
    possession: { home: 38, away: 62 },
    timeline: [
      { minute: "5'", side: "home", player: "Rossi", type: "goal", description: "Close-range finish from a Conti cross — Italy's lightning start" },
      { minute: "12'", side: "away", player: "Sócrates", type: "goal", description: "Long-range drive — the philosopher-footballer equalises" },
      { minute: "25'", side: "home", player: "Rossi", type: "goal", description: "Anticipation in the box — Rossi's predatory instinct restored Italy's lead" },
      { minute: "68'", side: "away", player: "Falcão", type: "goal", description: "Stunning long-range strike — 2-2, Brazil need only a draw to advance" },
      { minute: "74'", side: "home", player: "Rossi", type: "goal", description: "Hat-trick — headers from Tardelli cross — Brazil's dream ends" },
    ],
    stats: [
      { label: "Possession", home: 38, away: 62, homeWidth: 38, awayWidth: 62 },
      { label: "Shots", home: 12, away: 19, homeWidth: 39, awayWidth: 61 },
      { label: "Shots on Target", home: 7, away: 9, homeWidth: 44, awayWidth: 56 },
      { label: "Pass Accuracy", home: "79%", away: "88%", homeWidth: 47, awayWidth: 53 },
      { label: "Corners", home: 3, away: 8, homeWidth: 27, awayWidth: 73 },
      { label: "Fouls", home: 21, away: 16, homeWidth: 57, awayWidth: 43 },
      { label: "xG", home: "2.38", away: "2.91", homeWidth: 45, awayWidth: 55 },
    ],
    tacticalAnalysis: `The 1982 match between Italy and Brazil at Sarrià is considered by many football historians to be the greatest World Cup match ever played — predating even the 2022 Final. It contained tactical brilliance, stunning individual goals, a hat-trick from a man who had barely played in the previous three years, and the elimination of what many believed to be the most technically gifted team of the era.

Brazil's 1982 squad — containing Zico, Sócrates, Falcão, Eder, and Júnior — played a brand of football that generated overwhelming possession and beauty. Manager Telê Santana's system asked attacking midfielders to play without fear, creating and shooting from distance. The problem was structural: Brazil's defensive organisation was fragile.

Italy, managed by Enzo Bearzot, played a deep and compact 4-3-3. With only 38% possession, they absorbed Brazil's play and exploited the spaces left by Júnior and Leandro's aggressive wing-back runs. The tactical key was Paolo Rossi: a striker returning from a two-year ban for match-fixing, who had played poorly in Italy's opening three group games. Against Brazil, everything clicked. His three goals came from precise positioning in the box — not brilliant finishing, but the intelligence to be in the right place at exactly the right moment.

Brazil needed only a draw to advance. After Falcão's spectacular equaliser made it 2-2, the logical choice was to defend. Santana chose not to — he asked his attacking players to continue seeking a third goal. Italy exploited the resulting space with clinical efficiency.`,
    keyMoments: [
      "5': Italy score in the 5th minute — Brazil must chase the game despite possessing the more technically gifted players",
      "Paolo Rossi's hat-trick: three goals from a player who had played poorly in the previous 3 matches and returned from a 2-year ban",
      "68': Falcão's stunning strike makes it 2-2 — Brazil need only hold the draw to advance but refuse to defend",
      "74': Rossi's header seals Italy's win — Brazil's attacking philosophy costs them their place in the tournament",
      "Italy go on to win the World Cup, beating West Germany 3-1 in the final — Rossi scores the opening goal",
    ],
    historicalSignificance: `Brazil's 1982 squad remains the most beloved World Cup team never to win the tournament. Their elimination at this stage, against a team they dominated territorially, is still mourned by football romantics. The match crystallised the eternal tactical debate: is it better to play beautiful football and risk losing, or to be pragmatic and calculated? Italy's victory in the match and the tournament that year was a triumph of tactical organisation over individual brilliance — a debate that continues to this day.`,
    topPerformers: [
      { name: "Paolo Rossi", side: "home", position: "CF · 🇮🇹", rating: 9.8, note: "Hat-trick — three goals of pure predatory intelligence; came alive after 3 poor matches" },
      { name: "Falcão", side: "away", position: "CM · 🇧🇷", rating: 9.0, note: "Spectacular equaliser; the best midfielder in the world in 1982" },
      { name: "Zico", side: "away", position: "AM · 🇧🇷", rating: 8.7, note: "Dominated possession but Italy's defensive structure denied him space to finish" },
      { name: "Sócrates", side: "away", position: "AM · 🇧🇷", rating: 8.4, note: "Long-range equaliser in the first half; remarkable footballer and physician" },
    ],
  },

  // ─────────────────────────────────────────────
  // 8. England 4-2 West Germany — 1966 Final (AET)
  // ─────────────────────────────────────────────
  {
    id: "england-vs-west-germany-1966-final",
    tournament: "FIFA World Cup 1966",
    year: 1966,
    stage: "Final",
    date: "July 30, 1966",
    venue: "Wembley Stadium",
    city: "London, England",
    home: {
      name: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      formation: "4-4-2",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Banks","Cohen","Charlton J.","Moore","Wilson","Stiles","Ball","Charlton R.","Hurst","Hunt","Peters"],
      score: 4,
    },
    away: {
      name: "West Germany",
      flag: "🇩🇪",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Tilkowski","Höttges","Weber","Schulz","Schnellinger","Beckenbauer","Overath","Seeler","Held","Emmerich","Haller"],
      score: 2,
    },
    status: "AET",
    xG: { home: 3.2, away: 1.8 },
    possession: { home: 53, away: 47 },
    timeline: [
      { minute: "13'", side: "away", player: "Haller", type: "goal", description: "West Germany take a shock lead — Haller's shot squirms past Banks" },
      { minute: "19'", side: "home", player: "Hurst", type: "goal", description: "Moore's quick free-kick, Hurst heads in — 1-1" },
      { minute: "78'", side: "home", player: "Peters", type: "goal", description: "Peters steers in from close range — England lead with 12 minutes to go" },
      { minute: "90'", side: "away", player: "Weber", type: "goal", description: "Scrambled equaliser in stoppage time — Weber forces extra time" },
      { minute: "101'", side: "home", player: "Hurst", type: "goal", description: "Shot hits the crossbar and bounces down — Soviet linesman awards the goal (still disputed)" },
      { minute: "120'", side: "home", player: "Hurst", type: "goal", description: "Hurst's hat-trick completed — the only hat-trick in a World Cup Final" },
    ],
    stats: [
      { label: "Possession", home: 53, away: 47, homeWidth: 53, awayWidth: 47 },
      { label: "Shots", home: 17, away: 13, homeWidth: 57, awayWidth: 43 },
      { label: "Shots on Target", home: 9, away: 5, homeWidth: 64, awayWidth: 36 },
      { label: "Pass Accuracy", home: "81%", away: "78%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 8, away: 5, homeWidth: 62, awayWidth: 38 },
      { label: "Fouls", home: 15, away: 18, homeWidth: 45, awayWidth: 55 },
      { label: "xG", home: "3.21", away: "1.84", homeWidth: 64, awayWidth: 36 },
    ],
    tacticalAnalysis: `The 1966 World Cup Final — played at a Wembley packed with 96,924 spectators and watched by 400 million on television — remains England's greatest sporting achievement. Alf Ramsey's 4-4-2 "wingless wonders" system was tactically revolutionary for its era and proved perfectly suited to the strengths of his squad.

Ramsey's decision to abandon traditional wingers was considered radical in 1966. By using attacking midfielders — particularly Ball and Peters — in wide positions, England created a more compact and disciplined shape that opponents struggled to break down. The 4-4-2 flat midfield was new to international football at the time and provided a defensive solidity that allowed England to maintain consistent pressure on West Germany.

West Germany, under Helmut Schön, played a more traditional 4-3-3 with Beckenbauer and Overath in central midfield. Beckenbauer's tactical instruction to mark Bobby Charlton was fascinating — and ultimately counterproductive, as it removed Beckenbauer from his creative role and diminished West Germany's ability to build attacks.

The match turned on moments of controversy and individual brilliance. Weber's last-minute equaliser was scrambled and fortunate. Hurst's second goal in extra time — the crossbar goal — remains the most debated refereeing decision in World Cup history. Photographs and modern technology suggest the ball did not cross the line. But England's fourth goal, Hurst's hat-trick completion, was undeniably legitimate.`,
    keyMoments: [
      "101' — The Crossbar Goal: Hurst's shot bounces off the underside of the crossbar; Soviet linesman Tofik Bakhramov signals goal — the most debated decision in football history",
      "Only hat-trick in a World Cup Final: Hurst's achievement has never been equalled in the 58 years since",
      "Beckenbauer's man-marking of Bobby Charlton: hampered both players and is considered one of the tactical errors of the match",
      "Weber's 90th-minute equaliser from a scramble — one of football's most fortunate goals, forcing extra time",
      "Moore's leadership: England's captain collected the trophy from Queen Elizabeth II — the image that defined a generation",
    ],
    historicalSignificance: `England's only World Cup triumph remains the defining moment of the nation's sporting history. The trophy is displayed at the National Football Museum and the match is replayed on British television every year. The debate around Hurst's second goal has never been resolved — even modern ball-tracking technology cannot definitively prove the ball crossed the line. The match launched Alf Ramsey's 4-4-2 as the dominant tactical format in English club football for the next three decades, shaping the development of the Premier League and English football philosophy.`,
    topPerformers: [
      { name: "Geoff Hurst", side: "home", position: "CF · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 9.6, note: "Hat-trick in the World Cup Final — the only one in the event's history" },
      { name: "Bobby Moore", side: "home", position: "CB · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 9.3, note: "Commanding captain; his quick free-kick led to Hurst's first goal" },
      { name: "Alan Ball", side: "home", position: "CM · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 9.0, note: "Man of the match — ran tirelessly for 120 minutes, setting up Hurst's third" },
      { name: "Franz Beckenbauer", side: "away", position: "CM · 🇩🇪", rating: 7.2, note: "Hampered by man-marking duty on Bobby Charlton; went on to captain Germany's 1974 winners" },
    ],
  },

  // ─────────────────────────────────────────────
  // 9. West Germany 3-2 Hungary — 1954 Final (Miracle of Bern)
  // ─────────────────────────────────────────────
  {
    id: "west-germany-vs-hungary-1954-final",
    tournament: "FIFA World Cup 1954",
    year: 1954,
    stage: "Final",
    date: "July 4, 1954",
    venue: "Wankdorf Stadium",
    city: "Bern, Switzerland",
    home: {
      name: "West Germany",
      flag: "🇩🇪",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Turek","Posipal","Liebrich","Kohlmeyer","Eckel","Mai","Morlock","Schäfer","Rahn","O. Walter","F. Walter"],
      score: 3,
    },
    away: {
      name: "Hungary",
      flag: "🇭🇺",
      formation: "4-2-4",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Grosics","Buzánszky","Lóránt","Lantos","Zakariás","Bozsik","Hidegkuti","Kocsis","Puskás","Czibor","M. Tóth"],
      score: 2,
    },
    status: "FT",
    xG: { home: 2.1, away: 3.4 },
    possession: { home: 40, away: 60 },
    timeline: [
      { minute: "6'", side: "away", player: "Puskás", type: "goal", description: "Hungary in total control — Puskás opens the scoring" },
      { minute: "8'", side: "away", player: "Czibor", type: "goal", description: "Second goal within two minutes — Hungary 2-0 up, the match appears over" },
      { minute: "10'", side: "home", player: "Morlock", type: "goal", description: "West Germany pull one back almost immediately" },
      { minute: "18'", side: "home", player: "Rahn", type: "goal", description: "Equaliser — the rain-soaked Bern pitch favours the Germans' direct approach" },
      { minute: "84'", side: "home", player: "Rahn", type: "goal", description: "Rahn's winner — thunderous left-foot shot from the edge of the box" },
      { minute: "87'", side: "away", player: "Puskás", type: "goal", description: "Disallowed for offside — the call that might have changed history" },
    ],
    stats: [
      { label: "Possession", home: 40, away: 60, homeWidth: 40, awayWidth: 60 },
      { label: "Shots", home: 14, away: 22, homeWidth: 39, awayWidth: 61 },
      { label: "Shots on Target", home: 6, away: 14, homeWidth: 30, awayWidth: 70 },
      { label: "Goals Scored", home: 3, away: 2, homeWidth: 60, awayWidth: 40 },
      { label: "Pass Accuracy", home: "74%", away: "82%", homeWidth: 47, awayWidth: 53 },
      { label: "xG", home: "2.08", away: "3.41", homeWidth: 38, awayWidth: 62 },
    ],
    tacticalAnalysis: `The 1954 World Cup Final — known as the Miracle of Bern — produced one of football's most improbable results. Hungary's Golden Team, who had gone four years and 31 matches without defeat, and who had beaten West Germany 8-3 in the group stage just days earlier, were somehow beaten by a team of extraordinary resilience and tactical adaptability.

Hungary's revolutionary 4-2-4 system — pioneered by coach Gusztáv Sebes — was the most modern tactical structure in football at the time. The false nine (Hidegkuti dropping deep) and the two genuine strikers (Kocsis and Puskás) in a 4-2-4 created a system that contemporary defences had no answer for. Their 4-year unbeaten run was built on this tactical innovation.

West Germany's manager Sepp Herberger responded with a calculated gamble in the group stage: he fielded a weakened team against Hungary (losing 8-3) to hide his best players and preserve energy for the knockout rounds. It was tactical deception of a sophisticated order. By the Final, Germany were prepared specifically for Hungary's movement patterns.

The match was played in driving rain on a waterlogged Bern pitch. West Germany's more direct, physical approach was better suited to the conditions than Hungary's intricate passing. When Rahn scored the winner in the 84th minute, Puskás appeared to equalise three minutes later — but the linesman flagged for offside in a decision that remains controversial. German television commentator Herbert Zimmermann's cry of "Aus!" became one of sport's iconic broadcasts.`,
    keyMoments: [
      "6'–8': Hungary score twice in two minutes — West Germany appear to face an insurmountable task",
      "10'–18': West Germany score twice in eight minutes — the most dramatic reversal of early goals in Final history",
      "Herberger's group stage deception: deliberately losing 8-3 to Hungary to hide key players was masterful tactical preparation",
      "84': Rahn's winner — struck from the edge of the box in heavy rain, it proved unstoppable for Grosics",
      "87': Puskás' disallowed equaliser — the linesman's offside flag remains one of football's most disputed decisions",
    ],
    historicalSignificance: `West Germany's victory in Bern had significance far beyond football. The country, devastated and divided after World War Two, was still under Allied occupation when the match was played. The victory — against the acknowledged best team in the world — created a moment of national celebration that many historians credit as a significant step in the psychological reconstruction of German identity. The match is depicted in the 2003 film "The Miracle of Bern." Hungary's defeat was traumatic: the country was under Soviet occupation and the Golden Team — which would have continued to dominate — was broken up after the 1956 revolution.`,
    topPerformers: [
      { name: "Helmut Rahn", side: "home", position: "RF · 🇩🇪", rating: 9.5, note: "Two goals including the 84th-minute winner — the man who created the Miracle of Bern" },
      { name: "Fritz Walter", side: "home", position: "CM · 🇩🇪", rating: 8.8, note: "West Germany's captain and tactical brain — the rain helped him, as he excelled in wet conditions" },
      { name: "Ferenc Puskás", side: "away", position: "CF · 🇭🇺", rating: 8.5, note: "Scored and had a goal disallowed — played with an injured ankle sustained in the group stage" },
      { name: "Sándor Kocsis", side: "away", position: "CF · 🇭🇺", rating: 7.9, note: "Dominated aerially throughout; finished the tournament as top scorer (11 goals)" },
    ],
  },

  // ─────────────────────────────────────────────
  // 10. Brazil 0-0 Italy — 1994 Final (BRA 3-2 pens)
  // ─────────────────────────────────────────────
  {
    id: "brazil-vs-italy-1994-final",
    tournament: "FIFA World Cup 1994",
    year: 1994,
    stage: "Final",
    date: "July 17, 1994",
    venue: "Rose Bowl",
    city: "Pasadena, California, USA",
    home: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-4-2",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Taffarel","Cafu","Aldair","Márcio Santos","Branco","Mauro Silva","Mazinho","Zinho","Bebeto","Romário","Rai"],
      score: 0,
    },
    away: {
      name: "Italy",
      flag: "🇮🇹",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Pagliuca","Mussi","Baresi","Costacurta","Maldini","D. Baggio","Albertini","Berti","Evani","Massaro","R. Baggio"],
      score: 0,
    },
    status: "PSO",
    penaltyScore: "3-2",
    xG: { home: 1.1, away: 1.3 },
    possession: { home: 50, away: 50 },
    timeline: [
      { minute: "PSO", side: "away", player: "Baresi", type: "pen_miss", description: "Italy captain fires over the bar — the first penalty miss" },
      { minute: "PSO", side: "home", player: "Márcio Santos", type: "pen_miss", description: "Pagliuca saves — levels the shootout" },
      { minute: "PSO", side: "away", player: "Massaro", type: "pen_miss", description: "Taffarel saves — Brazil take the lead in the shootout" },
      { minute: "PSO", side: "away", player: "R. Baggio", type: "pen_miss", description: "Roberto Baggio's miss over the bar — Brazil are world champions" },
    ],
    stats: [
      { label: "Possession", home: 50, away: 50, homeWidth: 50, awayWidth: 50 },
      { label: "Shots", home: 13, away: 14, homeWidth: 48, awayWidth: 52 },
      { label: "Shots on Target", home: 5, away: 6, homeWidth: 45, awayWidth: 55 },
      { label: "Pass Accuracy", home: "82%", away: "80%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 6, away: 5, homeWidth: 55, awayWidth: 45 },
      { label: "Fouls", home: 22, away: 26, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "1.08", away: "1.31", homeWidth: 45, awayWidth: 55 },
    ],
    tacticalAnalysis: `The 1994 World Cup Final is the only one in the tournament's history to end goalless after extra time and be decided by a penalty shootout. It was also, by common consent, the least entertaining World Cup Final ever played — and yet it produced one of the sport's most harrowing and iconic images.

Brazil, under Carlos Alberto Parreira, had built a pragmatic and disciplined team around the striker partnership of Romário and Bebeto — arguably the finest striking duo at a single World Cup. In 120 minutes against Italy, neither scored. The Italian defensive organisation, orchestrated by the 36-year-old Franco Baresi — playing with a repaired knee injury — was the most effective rearguard action in Final history.

Italy, under Arrigo Sacchi, had reached the Final through resolute defending and the individual brilliance of Roberto Baggio, who had scored five goals in the knockout rounds. But Sacchi's system was tactically conservative: two banks of four, narrow midfield, and minimal width. Against Brazil's equally compact 4-4-2, neither side was willing to take the risks necessary to create genuine chances.

The penalty shootout — played in intense Californian heat — was decided by three misses. Baresi's over-the-bar miss opened the sequence. Massaro's tame kick was saved by Taffarel. And then Roberto Baggio — the tournament's best player — stepped up needing to score to keep Italy in the competition. His shot sailed into the Pasadena sky. The image of Baggio, hands on head, staring into the distance, is one of sport's defining photographs.`,
    keyMoments: [
      "Neither team scores in 120 minutes — the first goalless World Cup Final, decided entirely by penalty shootout",
      "Baresi plays in the Final just 25 days after knee surgery — his presence alone was remarkable, though he missed the first penalty",
      "Romário and Bebeto: the best striking partnership of the tournament combined for 10 goals — and zero in the Final",
      "Massaro's penalty saved by Taffarel: the Italian striker, who had scored in the semi-final, hit it straight at the goalkeeper",
      "Roberto Baggio's miss: the image of his hands on his head as the ball clears the crossbar is one of football's most iconic photographs",
    ],
    historicalSignificance: `Brazil's fourth World Cup came in the most anticlimactic fashion possible — yet it completed a 24-year wait and elevated Romário and Bebeto into national heroes. Roberto Baggio's miss remains the defining narrative of his career; despite being one of the greatest players of his generation, Italian culture remembers him forever through the prism of Pasadena. The match triggered a debate about whether the World Cup Final should use extra time and penalties — a debate still unresolved. Italy would wait 12 years for their next World Cup victory (2006, won on penalties against France).`,
    topPerformers: [
      { name: "Romário", side: "home", position: "CF · 🇧🇷", rating: 8.0, note: "Goalless in the Final but Golden Ball winner — 5 goals in the tournament" },
      { name: "Claudio Taffarel", side: "home", position: "GK · 🇧🇷", rating: 9.2, note: "Decisive penalty save from Massaro — the moment that decided the World Cup" },
      { name: "Franco Baresi", side: "away", position: "CB · 🇮🇹", rating: 8.6, note: "Played 120 minutes 25 days after knee surgery — despite missing his penalty, a heroic performance" },
      { name: "Roberto Baggio", side: "away", position: "CF · 🇮🇹", rating: 7.8, note: "Tournament's best player (5 goals in knockouts) — the miss that defines his legacy" },
    ],
  },
];

// Helper to get a match by ID
export function getMatch(id: string): Match | undefined {
  return MATCHES.find((m) => m.id === id);
}

// Helper to get all match IDs (for generateStaticParams)
export function getAllMatchIds(): string[] {
  return MATCHES.map((m) => m.id);
}

// Helper to compute SVG player positions from formation
export function getXPositions(n: number): number[] {
  if (n === 1) return [340];
  const start = 110, end = 570;
  const step = (end - start) / (n - 1);
  return Array.from({ length: n }, (_, i) => Math.round(start + i * step));
}

export function getPlayerPositions(
  formation: string,
  players: string[],
  side: "home" | "away"
): { x: number; y: number; name: string }[] {
  const rows = formation.split("-").map(Number);
  const allRows = [1, ...rows]; // GK + outfield rows

  // Y positions: home team at bottom (plays up), away team at top (plays down)
  const homeY = [825, 690, 580, 500, 445];
  const awayY  = [75,  200, 310, 395, 435];
  const yBase  = side === "home" ? homeY : awayY;

  let idx = 0;
  const positions: { x: number; y: number; name: string }[] = [];

  allRows.forEach((count, rowIdx) => {
    const xs = getXPositions(count);
    const y  = yBase[rowIdx] ?? yBase[yBase.length - 1];
    for (let i = 0; i < count && idx < players.length; i++) {
      positions.push({ x: xs[i], y, name: players[idx++] });
    }
  });

  return positions;
}
