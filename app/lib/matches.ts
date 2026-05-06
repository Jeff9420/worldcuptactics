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
  metaDescription: string;
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
    metaDescription: "AI tactical analysis of Germany's 7-1 demolition of Brazil in the 2014 World Cup semi-final — the Mineirazo. Formations, xG, and the tactical breakdown of football's most shocking result.",
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
    metaDescription: "AI tactical analysis of Argentina vs France in the 2022 World Cup Final — Messi vs Mbappé, 3-3 AET, Argentina win on penalties. The greatest World Cup Final ever played, fully dissected.",
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
    metaDescription: "AI tactical analysis of Spain vs Netherlands in the 2010 World Cup Final — Iniesta's extra-time winner, tiki-taka at its peak. Full tactical breakdown of Spain's first World Cup.",
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
    metaDescription: "AI tactical analysis of France vs Brazil in the 1998 World Cup Final — Zidane's two headers, Ronaldo's mystery illness, and France's first World Cup triumph on home soil.",
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
    metaDescription: "AI tactical analysis of Argentina vs England 1986 quarter-final — Maradona's Hand of God and Goal of the Century, both in one match. The most iconic 4 minutes in football history.",
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
    metaDescription: "AI tactical analysis of Brazil vs Italy in the 1970 World Cup Final — Pelé, Jairzinho, and Carlos Alberto's perfect team goal. Tactical breakdown of the greatest World Cup team ever assembled.",
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
    metaDescription: "AI tactical analysis of Italy vs Brazil in the 1982 World Cup — Paolo Rossi's hat-trick eliminates the most beloved team never to win the tournament. The greatest match ever played?",
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
    metaDescription: "AI tactical analysis of England vs West Germany in the 1966 World Cup Final — Hurst's hat-trick, the disputed crossbar goal, and England's only World Cup triumph at Wembley.",
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
    metaDescription: "AI tactical analysis of West Germany vs Hungary in the 1954 World Cup Final — the Miracle of Bern. Rahn's winner against the unbeaten Golden Team; football's original great upset.",
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
    metaDescription: "AI tactical analysis of Brazil vs Italy in the 1994 World Cup Final — the first goalless Final, Roberto Baggio's miss over the bar, and Brazil's fourth world title decided on penalties.",
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
  // ─────────────────────────────────────────────
  // 11. West Germany 2-1 Netherlands — 1974 Final
  // ─────────────────────────────────────────────
  {
    id: "west-germany-vs-netherlands-1974-final",
    tournament: "FIFA World Cup 1974",
    year: 1974,
    stage: "Final",
    date: "July 7, 1974",
    venue: "Olympiastadion",
    city: "Munich, West Germany",
    home: {
      name: "West Germany",
      flag: "🇩🇪",
      formation: "4-2-4",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Maier","Vogts","Schwarzenbeck","Beckenbauer","Breitner","Bonhof","Overath","Grabowski","Müller","Hoeneß","Holzenbein"],
      score: 2,
    },
    away: {
      name: "Netherlands",
      flag: "🇳🇱",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Jongbloed","Suurbier","Rijsbergen","Haan","Krol","Jansen","Neeskens","Van Hanegem","Rep","Cruyff","Rensenbrink"],
      score: 1,
    },
    status: "FT",
    xG: { home: 2.2, away: 2.0 },
    possession: { home: 44, away: 56 },
    timeline: [
      { minute: "2'", side: "away", player: "Neeskens", type: "pen_goal", description: "Penalty before Germany touched the ball — Holzenbein fouled in the box" },
      { minute: "25'", side: "home", player: "Breitner", type: "pen_goal", description: "Germany's equaliser from the spot after Holzenbein goes down" },
      { minute: "43'", side: "home", player: "Müller", type: "goal", description: "Müller turns brilliantly in a tight space and fires past Jongbloed" },
    ],
    stats: [
      { label: "Possession", home: 44, away: 56, homeWidth: 44, awayWidth: 56 },
      { label: "Shots", home: 16, away: 14, homeWidth: 53, awayWidth: 47 },
      { label: "Shots on Target", home: 8, away: 6, homeWidth: 57, awayWidth: 43 },
      { label: "Pass Accuracy", home: "79%", away: "84%", homeWidth: 48, awayWidth: 52 },
      { label: "Corners", home: 6, away: 8, homeWidth: 43, awayWidth: 57 },
      { label: "Fouls", home: 20, away: 22, homeWidth: 48, awayWidth: 52 },
      { label: "xG", home: "2.18", away: "1.97", homeWidth: 53, awayWidth: 47 },
    ],
    metaDescription: "AI tactical analysis of West Germany vs Netherlands in the 1974 World Cup Final — Cruyff's Total Football vs German efficiency. Müller's winner beats football's most revolutionary system.",
    tacticalAnalysis: `The 1974 World Cup Final pitted two of football's most distinctive tactical philosophies against each other: the Dutch Total Football revolution against the pragmatic German efficiency. Netherlands, led by Johan Cruyff, played a fluid 4-3-3 where players interchanged positions constantly — a system so advanced it took European football a decade to fully understand it.

Germany's manager Helmut Schön deployed a more direct 4-2-4 with Beckenbauer operating as a libero. The key tactical instruction was simple: stop Cruyff. Berti Vogts was assigned to man-mark him throughout, and succeeded in limiting Cruyff's influence after the opening exchanges.

The match's tactical turning point came in the first two minutes. Netherlands received a penalty before Germany had touched the ball — Neeskens converted with an emphatic straight run-up. The Dutch, celebrating a lead so early, relaxed their pressing intensity. Germany, stung into urgency, pressed higher and created chances through Müller's movement.

Breitner's penalty equalised before Müller — the tournament's top scorer — turned in the box with his characteristic compact technique to put Germany ahead before half-time. Schön's pragmatic team, written off by most observers, had beaten the most exciting team of the decade.`,
    keyMoments: [
      "2': Neeskens scores before Germany touch the ball — the fastest goal in World Cup Final history at the time",
      "Netherlands lead 1-0 but stop pressing, allowing Germany to grow into the match",
      "43': Müller's winner — his compact turn and finish epitomised the efficiency that Total Football lacked",
      "Vogts successfully neutralises Cruyff, the world's best player, with relentless man-marking",
      "Germany become the first host nation to win the World Cup since England in 1966",
    ],
    historicalSignificance: `The 1974 Final marked the end of an era and the beginning of a debate that continues today: which matters more, beauty or effectiveness? Netherlands' Total Football was revolutionary and influenced every subsequent generation of coaches. Yet it never won a World Cup. Germany, less celebrated aesthetically, won two of the next three tournaments. The match launched Beckenbauer as a global icon — he is the only man to win the World Cup as both captain (1974) and manager (1990).`,
    topPerformers: [
      { name: "Gerd Müller", side: "home", position: "CF · 🇩🇪", rating: 9.2, note: "Match-winning goal — tournament top scorer; the most clinical finisher of his era" },
      { name: "Franz Beckenbauer", side: "home", position: "SW · 🇩🇪", rating: 9.0, note: "Controlled the game from the back — the libero role redefined" },
      { name: "Johan Cruyff", side: "away", position: "CF · 🇳🇱", rating: 8.3, note: "Neutralised by Vogts after a brilliant opening; tournament's best player overall" },
      { name: "Johan Neeskens", side: "away", position: "CM · 🇳🇱", rating: 8.0, note: "Scored inside 2 minutes; Total Football's engine room throughout" },
    ],
  },

  // ─────────────────────────────────────────────
  // 12. Argentina 3-1 Netherlands — 1978 Final (AET)
  // ─────────────────────────────────────────────
  {
    id: "argentina-vs-netherlands-1978-final",
    tournament: "FIFA World Cup 1978",
    year: 1978,
    stage: "Final",
    date: "June 25, 1978",
    venue: "Estadio Monumental",
    city: "Buenos Aires, Argentina",
    home: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Fillol","Olguín","Galván","Passarella","Tarantini","Ardiles","Gallego","Kempes","Bertoni","Luque","Ortiz"],
      score: 3,
    },
    away: {
      name: "Netherlands",
      flag: "🇳🇱",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Jongbloed","Poortvliet","Brandts","Krol","Jansen","Neeskens","Haan","Rep","Rensenbrink","W. van de Kerkhof","R. van de Kerkhof"],
      score: 1,
    },
    status: "AET",
    xG: { home: 2.6, away: 1.8 },
    possession: { home: 51, away: 49 },
    timeline: [
      { minute: "38'", side: "home", player: "Kempes", type: "goal", description: "Kempes drives through the Dutch defence — Argentina lead at half-time" },
      { minute: "82'", side: "away", player: "Nanninga", type: "goal", description: "Substitute Nanninga heads in to level — set up by the Van de Kerkhof twins" },
      { minute: "90'", side: "away", player: "Rensenbrink", type: "goal", description: "Rensenbrink hits the post — the moment that saved Argentina's World Cup" },
      { minute: "105'", side: "home", player: "Kempes", type: "goal", description: "Kempes bundles in after a goalmouth scramble — Argentina ahead in extra time" },
      { minute: "115'", side: "home", player: "Bertoni", type: "goal", description: "Bertoni seals it — Argentina are world champions" },
    ],
    stats: [
      { label: "Possession", home: 51, away: 49, homeWidth: 51, awayWidth: 49 },
      { label: "Shots", home: 17, away: 15, homeWidth: 53, awayWidth: 47 },
      { label: "Shots on Target", home: 9, away: 6, homeWidth: 60, awayWidth: 40 },
      { label: "Pass Accuracy", home: "81%", away: "83%", homeWidth: 49, awayWidth: 51 },
      { label: "Corners", home: 7, away: 9, homeWidth: 44, awayWidth: 56 },
      { label: "Fouls", home: 18, away: 21, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "2.58", away: "1.84", homeWidth: 58, awayWidth: 42 },
    ],
    metaDescription: "AI tactical analysis of Argentina vs Netherlands in the 1978 World Cup Final — Kempes's two goals, Rensenbrink's post in the 90th minute, Argentina's first World Cup title.",
    tacticalAnalysis: `The 1978 World Cup Final was played against the backdrop of Argentina's military dictatorship — the junta of General Jorge Videla used the tournament as a propaganda exercise. On the pitch, the match was a dramatic contest that came within inches of going to a penalty shootout.

Argentina, under César Luis Menotti, played an attacking 4-3-3 built around the physical and creative genius of Mario Kempes. Menotti's philosophy was attack-minded — he wanted Argentine football to express itself without pragmatic compromise. Kempes, the tournament's top scorer, was given freedom to drift wide and drive at defenders.

Netherlands, without the retired Johan Cruyff, were still dangerous with the Van de Kerkhof twins providing creativity from wide areas. Their 4-3-3 pressed high and created chances — but Rensenbrink's post in the 90th minute remains one of football's great what-ifs. Had that gone in, history would have been very different.

Extra time was Argentina's. Kempes' bundled second goal gave Argentina the lead they deserved on the night's attacking intent, and Bertoni's finish confirmed the first World Cup won by an Argentine team.`,
    keyMoments: [
      "90': Rensenbrink hits the post with the score at 1-1 — had it gone in, Netherlands would likely have won the World Cup",
      "Kempes scores twice: his tournament haul of 6 goals makes him the top scorer; no Argentine had dominated a World Cup so completely",
      "The ticker-tape welcome: Argentina's home crowd covered the Monumental in paper — one of football's most atmospheric images",
      "Netherlands play without Cruyff, who refused to travel to Argentina under the dictatorship",
      "Argentina's first World Cup title — political controversy overshadows the achievement for decades",
    ],
    historicalSignificance: `Argentina's 1978 triumph remains one of football's most politically contested victories. The military government's manipulation of the tournament — including allegations of match-fixing in the crucial Peru game — cast a shadow that persists. Yet Kempes' brilliance was real, Menotti's attacking philosophy was genuine, and the football produced was of high quality. The match launched Argentina's golden era and set the stage for Maradona's 1986 triumph.`,
    topPerformers: [
      { name: "Mario Kempes", side: "home", position: "CF · 🇦🇷", rating: 9.4, note: "Two goals in the Final — tournament top scorer with 6; the defining Argentine performance of the 1970s" },
      { name: "Ubaldo Fillol", side: "home", position: "GK · 🇦🇷", rating: 9.0, note: "Outstanding saves throughout the match; considered the best goalkeeper of the tournament" },
      { name: "Rensenbrink", side: "away", position: "LW · 🇳🇱", rating: 8.1, note: "Hit the post in the 90th minute — one of history's cruelest near-misses" },
      { name: "Daniel Passarella", side: "home", position: "CB · 🇦🇷", rating: 8.5, note: "Commanding captain; his leadership held Argentina together when Netherlands equalised" },
    ],
  },

  // ─────────────────────────────────────────────
  // 13. Argentina 3-2 West Germany — 1986 Final
  // ─────────────────────────────────────────────
  {
    id: "argentina-vs-west-germany-1986-final",
    tournament: "FIFA World Cup 1986",
    year: 1986,
    stage: "Final",
    date: "June 29, 1986",
    venue: "Estadio Azteca",
    city: "Mexico City, Mexico",
    home: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Pumpido","Cuciuffo","Brown","Ruggeri","Olarticoechea","Batista","Giusti","Burruchaga","Enrique","Maradona","Valdano"],
      score: 3,
    },
    away: {
      name: "West Germany",
      flag: "🇩🇪",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Schumacher","Jakobs","Förster","Berthold","Briegel","Matthäus","Magath","Eder","Allofs","Völler","Rummenigge"],
      score: 2,
    },
    status: "FT",
    xG: { home: 2.4, away: 2.1 },
    possession: { home: 52, away: 48 },
    timeline: [
      { minute: "23'", side: "home", player: "Brown", type: "goal", description: "José Luis Brown heads in from a Burruchaga free-kick — playing through injury" },
      { minute: "55'", side: "home", player: "Valdano", type: "goal", description: "Valdano fires in after Maradona's incisive pass — Argentina 2-0 up" },
      { minute: "74'", side: "away", player: "Rummenigge", type: "goal", description: "Rummenigge pokes in after a scramble — Germany's comeback begins" },
      { minute: "80'", side: "away", player: "Völler", type: "goal", description: "Völler equalises — 2-2 with 10 minutes to go" },
      { minute: "84'", side: "home", player: "Burruchaga", type: "goal", description: "Maradona's precise through-ball finds Burruchaga — the winning goal" },
    ],
    stats: [
      { label: "Possession", home: 52, away: 48, homeWidth: 52, awayWidth: 48 },
      { label: "Shots", home: 15, away: 16, homeWidth: 48, awayWidth: 52 },
      { label: "Shots on Target", home: 7, away: 8, homeWidth: 47, awayWidth: 53 },
      { label: "Pass Accuracy", home: "80%", away: "78%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 5, away: 7, homeWidth: 42, awayWidth: 58 },
      { label: "Fouls", home: 18, away: 21, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "2.41", away: "2.09", homeWidth: 54, awayWidth: 46 },
    ],
    metaDescription: "AI tactical analysis of Argentina vs West Germany in the 1986 World Cup Final — Maradona's tournament climax, Burruchaga's winner after Germany fight back from 2-0 down.",
    tacticalAnalysis: `The 1986 World Cup Final was Maradona's coronation. Having produced the Hand of God and Goal of the Century in the quarter-final against England, Maradona now led Argentina to the world title in a match of genuine drama — a 2-0 lead surrendered, then reclaimed in the final minutes.

Carlos Bilardo's 4-3-3 was built entirely around Maradona as its creative hub. The system gave Maradona freedom to drift, hold the ball under pressure, and pick passes into the final third. His understanding with Valdano and Burruchaga was the tournament's most dangerous attacking partnership.

West Germany, managed by Franz Beckenbauer, played a direct 4-3-3 with Rummenigge and Völler in attack. Their comeback from 2-0 down — two goals in six minutes — was a testament to German resilience but ultimately insufficient. Maradona's 84th-minute through-ball to Burruchaga was a moment of telepathic accuracy, the final decisive contribution from the tournament's greatest player.

The tactical lesson: Bilardo's pragmatic Argentina — ridiculed by purists — produced a system that was flawlessly constructed around one individual. In Maradona, they had a player capable of justifying that sacrifice entirely.`,
    keyMoments: [
      "23': Brown scores while playing with a dislocated shoulder — among the most heroic Final goals ever",
      "74'–80': Germany score twice in six minutes from 2-0 down — the comeback rocks Argentina",
      "84': Maradona's through-ball to Burruchaga — the pass that won the World Cup, measured and perfect under maximum pressure",
      "Maradona's tournament: 5 goals, 5 assists — statistically and visually the greatest World Cup performance ever",
      "The match draws 114,000 fans to the Azteca — the last 100,000+ World Cup Final attendance",
    ],
    historicalSignificance: `The 1986 World Cup belongs entirely to Maradona. His performance across the tournament — and specifically in this Final — represents the closest football has come to a single individual winning the sport's greatest prize by themselves. The match confirmed Argentina as the dominant force of 1980s football and gave Maradona the platform from which his legend grew. Beckenbauer, losing as a manager here, would get his revenge four years later.`,
    topPerformers: [
      { name: "Diego Maradona", side: "home", position: "AM · 🇦🇷", rating: 9.6, note: "1 assist (the winning pass) — tournament's greatest individual performance" },
      { name: "Jorge Burruchaga", side: "home", position: "CM · 🇦🇷", rating: 8.8, note: "Scored the winner — received Maradona's perfect pass and kept his composure" },
      { name: "Rudi Völler", side: "away", position: "CF · 🇩🇪", rating: 8.4, note: "The equaliser that briefly seemed to snatch it for Germany" },
      { name: "Karl-Heinz Rummenigge", side: "away", position: "CF · 🇩🇪", rating: 8.2, note: "Energised Germany's comeback from the bench with his goal" },
    ],
  },

  // ─────────────────────────────────────────────
  // 14. West Germany 1-0 Argentina — 1990 Final
  // ─────────────────────────────────────────────
  {
    id: "west-germany-vs-argentina-1990-final",
    tournament: "FIFA World Cup 1990",
    year: 1990,
    stage: "Final",
    date: "July 8, 1990",
    venue: "Stadio Olimpico",
    city: "Rome, Italy",
    home: {
      name: "West Germany",
      flag: "🇩🇪",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Illgner","Brehme","Kohler","Augenthaler","Berthold","Häßler","Matthäus","Littbarski","Völler","Klinsmann","Riedle"],
      score: 1,
    },
    away: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Goycochea","Serrizuela","Ruggeri","Monzón","Sensini","Calderón","Basualdo","Giusti","Caniggia","Maradona","Dezotti"],
      score: 0,
    },
    status: "FT",
    xG: { home: 1.8, away: 0.4 },
    possession: { home: 58, away: 42 },
    timeline: [
      { minute: "65'", side: "away", player: "Monzón", type: "red", description: "First red card in a World Cup Final — Monzón's foul on Klinsmann" },
      { minute: "85'", side: "home", player: "Brehme", type: "pen_goal", description: "Brehme converts after Sensini's foul — Germany win the World Cup" },
      { minute: "87'", side: "away", player: "Dezotti", type: "red", description: "Second red card — Argentina finish with 9 men" },
    ],
    stats: [
      { label: "Possession", home: 58, away: 42, homeWidth: 58, awayWidth: 42 },
      { label: "Shots", home: 16, away: 5, homeWidth: 76, awayWidth: 24 },
      { label: "Shots on Target", home: 7, away: 1, homeWidth: 88, awayWidth: 12 },
      { label: "Pass Accuracy", home: "83%", away: "72%", homeWidth: 54, awayWidth: 46 },
      { label: "Yellow Cards", home: "2", away: "5", homeWidth: 29, awayWidth: 71 },
      { label: "Fouls", home: 19, away: 28, homeWidth: 40, awayWidth: 60 },
      { label: "xG", home: "1.78", away: "0.41", homeWidth: 81, awayWidth: 19 },
    ],
    metaDescription: "AI tactical analysis of West Germany vs Argentina in the 1990 World Cup Final — Brehme's penalty, two red cards for Argentina, and Beckenbauer's pragmatic triumph in Rome.",
    tacticalAnalysis: `The 1990 World Cup Final is widely considered the worst in the tournament's history — a cynical, foul-ridden match decided by a late penalty in which Argentina, defending champions, were reduced to nine men. Yet it was also a tactical story of exceptional discipline from Beckenbauer's Germany.

Argentina arrived at the Final without the suspended Caniggia and with Maradona clearly carrying an ankle injury. Bilardo's 4-4-2 was purely defensive — Argentina had no intention of attacking. They had reached the Final through goalkeeping heroics from Goycochea in two consecutive penalty shootouts.

Germany's 4-3-3 dominated possession but struggled to create clear chances against Argentina's massed defence. Matthäus was the outstanding player in midfield, covering every blade of grass. The match turned on two red cards — both for Argentina — and a controversial late penalty won by Völler going down under Sensini's challenge.

Brehme's penalty, struck with his weaker right foot after Matthäus handed it to him (the German captain had missed a penalty earlier in the tournament), settled the contest. The Final produced one goal, five yellow cards, and two red cards — a monument to cynicism over football.`,
    keyMoments: [
      "65': Monzón becomes the first player sent off in a World Cup Final — Argentina's game plan collapses",
      "85': Brehme's penalty — he uses his weaker right foot; Goycochea dives the right way but can't reach it",
      "87': Dezotti's red card — Argentina finish with nine men; the most cards in a World Cup Final",
      "Maradona weeps at the final whistle — visibly emotional, knowing his defending champions had fallen",
      "Beckenbauer lifts the trophy — the only man to captain and manage a World Cup-winning team",
    ],
    historicalSignificance: `Beckenbauer became the first man in history to both captain (1974) and manage (1990) a World Cup winning team. The Final itself damaged football's image — FIFA subsequently changed the rules to protect attackers from cynical fouls and discourage negative tactics. Argentina's decline from 1986 champions to 1990 losers reflected the exhaustion of Bilardo's system after four years. Maradona's tears at the final whistle marked the effective end of his international prime.`,
    topPerformers: [
      { name: "Lothar Matthäus", side: "home", position: "CM · 🇩🇪", rating: 9.2, note: "Tournament's best player (Ballon d'Or winner that year) — supreme in midfield for 90 minutes" },
      { name: "Andreas Brehme", side: "home", position: "LB · 🇩🇪", rating: 8.6, note: "Scored the winning penalty with his weaker foot — the moment that won the World Cup" },
      { name: "Sergio Goycochea", side: "away", position: "GK · 🇦🇷", rating: 8.0, note: "Heroic throughout the tournament in PSO wins; dived right for Brehme's penalty but couldn't save it" },
      { name: "Diego Maradona", side: "away", position: "AM · 🇦🇷", rating: 6.8, note: "Visibly injured and managed; his most difficult World Cup performance" },
    ],
  },

  // ─────────────────────────────────────────────
  // 15. Brazil 2-0 Germany — 2002 Final
  // ─────────────────────────────────────────────
  {
    id: "brazil-vs-germany-2002-final",
    tournament: "FIFA World Cup 2002",
    year: 2002,
    stage: "Final",
    date: "June 30, 2002",
    venue: "International Stadium Yokohama",
    city: "Yokohama, Japan",
    home: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Marcos","Lúcio","Roque Júnior","Edmílson","Roberto Carlos","Gilberto Silva","Kléberson","Ronaldinho","Rivaldo","Ronaldo","Cafu"],
      score: 2,
    },
    away: {
      name: "Germany",
      flag: "🇩🇪",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Kahn","Linke","Ramelow","Metzelder","Frings","Schneider","Hamann","Jeremies","Bode","Klose","Neuville"],
      score: 0,
    },
    status: "FT",
    xG: { home: 2.3, away: 0.8 },
    possession: { home: 56, away: 44 },
    timeline: [
      { minute: "67'", side: "home", player: "Ronaldo", type: "goal", description: "Ronaldo pounces on Kahn's fumble — redemption after 1998's mystery illness" },
      { minute: "79'", side: "home", player: "Ronaldo", type: "goal", description: "Rivaldo's pass, Ronaldo's clinical right-foot finish — 2-0, Brazil win their fifth World Cup" },
    ],
    stats: [
      { label: "Possession", home: 56, away: 44, homeWidth: 56, awayWidth: 44 },
      { label: "Shots", home: 18, away: 10, homeWidth: 64, awayWidth: 36 },
      { label: "Shots on Target", home: 9, away: 4, homeWidth: 69, awayWidth: 31 },
      { label: "Pass Accuracy", home: "83%", away: "79%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 9, away: 5, homeWidth: 64, awayWidth: 36 },
      { label: "Fouls", home: 14, away: 19, homeWidth: 42, awayWidth: 58 },
      { label: "xG", home: "2.31", away: "0.83", homeWidth: 74, awayWidth: 26 },
    ],
    metaDescription: "AI tactical analysis of Brazil vs Germany in the 2002 World Cup Final — Ronaldo's redemption story, two goals in Yokohama, and Brazil's record fifth World Cup title.",
    tacticalAnalysis: `The 2002 World Cup Final delivered one of football's greatest individual redemption stories. Ronaldo, whose mysterious illness had cost Brazil the 1998 Final, scored both goals in Yokohama to claim his second world title and cement his claim to greatness.

Brazil's 4-2-3-1 under Luiz Felipe Scolari was built around a fluid attacking partnership: Ronaldo as the focal point, Rivaldo and Ronaldinho as creative forces behind him. Gilberto Silva and Kléberson anchored the midfield with defensive discipline, giving the attacking players freedom to express themselves.

Germany, reaching the Final against all expectations — they had scraped through the group stage before finding form — were organised but limited under Rudi Völler. Oliver Kahn had been extraordinary throughout the tournament, but his 67th-minute fumble was the decisive moment: he spilled a Rivaldo shot, and Ronaldo reacted fastest to score.

The second goal was a statement of quality: Rivaldo's weighted pass found Ronaldo clean through, and his right-foot finish was emphatic. Germany had no answer for Brazil's attacking depth. Ronaldo's two goals gave him 8 career World Cup goals at that point — surpassing the record he had set in 1998.`,
    keyMoments: [
      "Kahn's fumble: the tournament's best goalkeeper makes the decisive error — Ronaldo's instinct is immediate",
      "Ronaldo's double: four years after the mystery of Pasadena, he returns to claim the World Cup on his own terms",
      "Ronaldo's distinctive haircut: the bizarre chevron cut, initially made to distract his daughter, becomes iconic",
      "Germany's surprise run: they had beaten South Korea, USA, and Senegal to reach the Final",
      "Brazil's record fifth title — the most World Cup wins in history",
    ],
    historicalSignificance: `Brazil's fifth World Cup victory was built on Ronaldo's redemption arc — one of sport's most powerful narratives. The tournament also featured South Korea's astonishing run to the semi-finals (the furthest any Asian team has ever gone), Senegal's elimination of France in the group stage, and co-hosting between Japan and South Korea — the first World Cup in Asia. Germany's 2002 generation would mature to win Euro 2004 runners-up and build toward their 2014 triumph.`,
    topPerformers: [
      { name: "Ronaldo", side: "home", position: "CF · 🇧🇷", rating: 9.8, note: "Two goals — his 8 World Cup goals set a new record; the greatest redemption story in football" },
      { name: "Rivaldo", side: "home", position: "AM · 🇧🇷", rating: 9.0, note: "Assist for Ronaldo's second — his tournament was the last great World Cup of a phenomenal career" },
      { name: "Oliver Kahn", side: "away", position: "GK · 🇩🇪", rating: 7.2, note: "Tournament's best goalkeeper wins Golden Glove but the decisive error condemns Germany" },
      { name: "Ronaldinho", side: "home", position: "AM · 🇧🇷", rating: 8.6, note: "Dazzling throughout the tournament — his free-kick against England was the moment of the competition" },
    ],
  },

  // ─────────────────────────────────────────────
  // 16. Italy 1-1 France — 2006 Final (ITA 5-3 pens)
  // ─────────────────────────────────────────────
  {
    id: "italy-vs-france-2006-final",
    tournament: "FIFA World Cup 2006",
    year: 2006,
    stage: "Final",
    date: "July 9, 2006",
    venue: "Olympiastadion",
    city: "Berlin, Germany",
    home: {
      name: "Italy",
      flag: "🇮🇹",
      formation: "4-4-2",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Buffon","Zambrotta","Cannavaro","Materazzi","Grosso","Camoranesi","Gattuso","Pirlo","Perrotta","Totti","Toni"],
      score: 1,
    },
    away: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Barthez","Sagnol","Thuram","Gallas","Abidal","Makelele","Vieira","Ribéry","Zidane","Malouda","Henry"],
      score: 1,
    },
    status: "PSO",
    penaltyScore: "5-3",
    xG: { home: 1.4, away: 1.6 },
    possession: { home: 46, away: 54 },
    timeline: [
      { minute: "7'", side: "away", player: "Zidane", type: "pen_goal", description: "Zidane's cheeky Panenka chip down the middle — audacious in a World Cup Final" },
      { minute: "19'", side: "home", player: "Materazzi", type: "goal", description: "Materazzi heads in from a corner — the man who provoked Zidane levels" },
      { minute: "110'", side: "away", player: "Zidane", type: "red", description: "Zidane headbutts Materazzi in the chest — sent off in his final career match" },
      { minute: "PSO", side: "away", player: "Trezeguet", type: "pen_miss", description: "Trezeguet's penalty hits the crossbar — Italy win the World Cup" },
    ],
    stats: [
      { label: "Possession", home: 46, away: 54, homeWidth: 46, awayWidth: 54 },
      { label: "Shots", home: 14, away: 16, homeWidth: 47, awayWidth: 53 },
      { label: "Shots on Target", home: 5, away: 6, homeWidth: 45, awayWidth: 55 },
      { label: "Pass Accuracy", home: "84%", away: "87%", homeWidth: 49, awayWidth: 51 },
      { label: "Corners", home: 8, away: 5, homeWidth: 62, awayWidth: 38 },
      { label: "Fouls", home: 24, away: 22, homeWidth: 52, awayWidth: 48 },
      { label: "xG", home: "1.38", away: "1.61", homeWidth: 46, awayWidth: 54 },
    ],
    metaDescription: "AI tactical analysis of Italy vs France in the 2006 World Cup Final — Zidane's Panenka, his headbutt on Materazzi, and Italy's shootout victory. The most dramatic Final since 1966.",
    tacticalAnalysis: `The 2006 World Cup Final will forever be defined by one moment — Zinedine Zidane's headbutt on Marco Materazzi in the 110th minute. But the match itself was a high-quality tactical contest between Italy's defensive excellence and France's creative attacking play.

Marcello Lippi's Italy deployed a 4-4-2 built on Pirlo's deep playmaking and the defensive solidity of Cannavaro and Materazzi. Gattuso's pressing was relentless. The system was designed to absorb pressure and strike on the counter — the same philosophy that had won them the European Championship with Inter and AC Milan in club football.

France, under Raymond Domenech, had built their tournament run around Zidane's resurgence. The retired Zidane, recalled to the squad after poor form from the French team, produced a Panenka chip in the seventh minute that was one of the most brazen penalty kicks ever seen in a World Cup Final. France were the better side for most of the match.

What happened in extra time remains one of football's great controversies. Materazzi clearly said something to provoke Zidane — he later admitted referencing Zidane's sister. Zidane's headbutt was witnessed by the referee only after a linesman intervened. He was sent off in the last professional match of his career. Italy won the shootout after Trezeguet hit the crossbar.`,
    keyMoments: [
      "7': Zidane's Panenka chip — the most audacious penalty in World Cup Final history; it wobbled in off the underside of the bar",
      "19': Materazzi header — the man who would later provoke the defining incident equalises from a corner",
      "110': Zidane headbutt — the most shocking moment in World Cup Final history; his last act as a professional footballer",
      "Trezeguet's crossbar: France's best penalty taker hits the bar — Italy win on the rebound that bounces on the line and out",
      "Cannavaro lifts the trophy: Italy's fourth World Cup title; Cannavaro wins Ballon d'Or as the world's best player",
    ],
    historicalSignificance: `The 2006 Final produced two of football's most enduring images: Zidane's Panenka and his headbutt. Zidane's international career ended in ignominy, yet his tournament performance — recalled from retirement at 33 — was arguably his finest. Cannavaro won the Ballon d'Or, the last defender to win the award. Italy's fourth World Cup title confirmed them as the tournament's most successful European nation at that point.`,
    topPerformers: [
      { name: "Zinedine Zidane", side: "away", position: "AM · 🇫🇷", rating: 8.8, note: "Panenka penalty + tournament's best player award — then the headbutt that ended his career" },
      { name: "Fabio Cannavaro", side: "home", position: "CB · 🇮🇹", rating: 9.3, note: "Immense throughout 120 minutes — won Ballon d'Or as world's best player" },
      { name: "Andrea Pirlo", side: "home", position: "DM · 🇮🇹", rating: 9.0, note: "Controlled Italy's rhythm with deep playmaking — converted his penalty in the shootout" },
      { name: "Gianluigi Buffon", side: "home", position: "GK · 🇮🇹", rating: 8.7, note: "Kept France to just 1 goal (penalty) — tournament's outstanding goalkeeper" },
    ],
  },

  // ─────────────────────────────────────────────
  // 17. France 4-2 Croatia — 2018 Final
  // ─────────────────────────────────────────────
  {
    id: "france-vs-croatia-2018-final",
    tournament: "FIFA World Cup 2018",
    year: 2018,
    stage: "Final",
    date: "July 15, 2018",
    venue: "Luzhniki Stadium",
    city: "Moscow, Russia",
    home: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Lloris","Pavard","Varane","Umtiti","Lucas Hernández","Kanté","Pogba","Mbappé","Griezmann","Matuidi","Giroud"],
      score: 4,
    },
    away: {
      name: "Croatia",
      flag: "🇭🇷",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Subašić","Vrsaljko","Lovren","Vida","Strinić","Rakitić","Brozović","Modrić","Rebić","Mandžukić","Perišić"],
      score: 2,
    },
    status: "FT",
    xG: { home: 2.0, away: 2.3 },
    possession: { home: 34, away: 66 },
    timeline: [
      { minute: "18'", side: "away", player: "Mandžukić", type: "own_goal", description: "Own goal from Griezmann's free-kick — the first OG in a World Cup Final" },
      { minute: "28'", side: "away", player: "Perišić", type: "goal", description: "Perišić's powerful left-foot equaliser — Croatia right back in it" },
      { minute: "38'", side: "home", player: "Griezmann", type: "pen_goal", description: "Penalty after VAR review — Perišić handball in the box" },
      { minute: "59'", side: "home", player: "Pogba", type: "goal", description: "Pogba drives in from the edge of the box — France pulling clear" },
      { minute: "65'", side: "home", player: "Mbappé", type: "goal", description: "Mbappé's right-foot drive — the youngest scorer in a World Cup Final since Pelé" },
      { minute: "69'", side: "away", player: "Mandžukić", type: "goal", description: "Lloris's calamitous error gifts Mandžukić a goal" },
    ],
    stats: [
      { label: "Possession", home: 34, away: 66, homeWidth: 34, awayWidth: 66 },
      { label: "Shots", home: 14, away: 17, homeWidth: 45, awayWidth: 55 },
      { label: "Shots on Target", home: 6, away: 7, homeWidth: 46, awayWidth: 54 },
      { label: "Pass Accuracy", home: "83%", away: "87%", homeWidth: 49, awayWidth: 51 },
      { label: "Corners", home: 5, away: 7, homeWidth: 42, awayWidth: 58 },
      { label: "Fouls", home: 14, away: 10, homeWidth: 58, awayWidth: 42 },
      { label: "xG", home: "1.97", away: "2.31", homeWidth: 46, awayWidth: 54 },
    ],
    metaDescription: "AI tactical analysis of France vs Croatia in the 2018 World Cup Final — Mbappé scores at 19, Pogba's strike, VAR penalty, and France's counter-attacking masterclass in Moscow.",
    tacticalAnalysis: `The 2018 World Cup Final was a masterclass in counter-attacking football from France — a team that won with only 34% possession. Didier Deschamps constructed a tactically ruthless side around Kanté's defensive industry and the pace of Mbappé and Griezmann on the break.

Croatia, who had played three consecutive extra-time matches in the knockout rounds, were physically and emotionally exhausted. Zlatko Dalić's 4-3-3 was technically superior and dominated the ball, but France's defensive shape — Kanté and Matuidi in a double pivot — was almost impenetrable.

The match was decided by fine margins and crucial moments: Mandžukić's own goal from a free-kick France had rehearsed specifically; a VAR handball decision; Pogba and Mbappé goals from counter-attacks; and then Lloris's inexplicable error gifting Croatia their second goal. But France, unlike Croatia, had the depth and tactical discipline to manage their lead.

Mbappé, 19, became the youngest scorer in a World Cup Final since Pelé in 1958. His goal — a right-foot drive from outside the box — announced him formally as the game's next superstar. France's second World Cup triumph was built on defensive solidity, tactical intelligence, and individual quality in key moments.`,
    keyMoments: [
      "18': First own goal in a World Cup Final — Mandžukić deflects Griezmann's free-kick into his own net",
      "38': VAR penalty decision — the first use of video review to award a penalty in a World Cup Final",
      "65': Mbappé's goal — the second teenager to score in a World Cup Final, after Pelé in 1958",
      "69': Lloris's error — the French captain's moment of aberration gifts Croatia a goal in a match France were controlling",
      "Croatia's exhaustion: their third consecutive extra-time match told in their second-half drop in intensity",
    ],
    historicalSignificance: `France's second World Cup (20 years after 1998) was built on an entirely different philosophy to Zidane's team — less beautiful, more functional, and tactically superior. The tournament introduced VAR at the World Cup level and sparked fierce debate about handball rules. Croatia's run to the Final — overcoming Russia, Denmark and England from behind in knockouts — was one of the great tournament stories. Modrić won the Golden Ball as tournament's best player despite losing the Final.`,
    topPerformers: [
      { name: "Kylian Mbappé", side: "home", position: "RW · 🇫🇷", rating: 9.3, note: "Tournament's breakthrough star — scored in the Final at 19, youngest since Pelé" },
      { name: "Antoine Griezmann", side: "home", position: "AM · 🇫🇷", rating: 9.0, note: "Golden Boot runner-up — 1 goal, 2 assists; the tactical brain of France's attack" },
      { name: "Luka Modrić", side: "away", position: "CM · 🇭🇷", rating: 9.1, note: "Golden Ball winner — the finest midfielder in the world, magnificent despite the defeat" },
      { name: "N'Golo Kanté", side: "home", position: "CM · 🇫🇷", rating: 9.2, note: "Made France's counter-attacking system function — covered more ground than any player in the tournament" },
    ],
  },

  // ─────────────────────────────────────────────
  // 18. Germany 1-0 Argentina — 2014 Final (AET)
  // ─────────────────────────────────────────────
  {
    id: "germany-vs-argentina-2014-final",
    tournament: "FIFA World Cup 2014",
    year: 2014,
    stage: "Final",
    date: "July 13, 2014",
    venue: "Estádio do Maracanã",
    city: "Rio de Janeiro, Brazil",
    home: {
      name: "Germany",
      flag: "🇩🇪",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Neuer","Lahm","Boateng","Hummels","Höwedes","Schweinsteiger","Kroos","Müller","Özil","Schürrle","Klose"],
      score: 1,
    },
    away: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Romero","Zabaleta","Demichelis","Garay","Rojo","Biglia","Mascherano","Di María","Lavezzi","Messi","Higuaín"],
      score: 0,
    },
    status: "AET",
    xG: { home: 1.6, away: 1.2 },
    possession: { home: 55, away: 45 },
    timeline: [
      { minute: "113'", side: "home", player: "Götze", type: "goal", description: "Substitute Götze controls Schürrle's cross on his chest and volleys past Romero — the World Cup winner" },
    ],
    stats: [
      { label: "Possession", home: 55, away: 45, homeWidth: 55, awayWidth: 45 },
      { label: "Shots", home: 17, away: 11, homeWidth: 61, awayWidth: 39 },
      { label: "Shots on Target", home: 6, away: 4, homeWidth: 60, awayWidth: 40 },
      { label: "Pass Accuracy", home: "87%", away: "84%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 6, away: 4, homeWidth: 60, awayWidth: 40 },
      { label: "Fouls", home: 12, away: 17, homeWidth: 41, awayWidth: 59 },
      { label: "xG", home: "1.62", away: "1.19", homeWidth: 58, awayWidth: 42 },
    ],
    metaDescription: "AI tactical analysis of Germany vs Argentina in the 2014 World Cup Final — Götze's extra-time volley at the Maracanã wins Germany's fourth World Cup. Full tactical breakdown.",
    tacticalAnalysis: `The 2014 World Cup Final was decided by one moment of individual brilliance in extra time — Mario Götze's 113th-minute volley that gave Germany their fourth World Cup. A match of tactical complexity and few clear chances was settled by Löw's inspired substitution.

Germany's 4-2-3-1 was the tournament's most complete team system: aggressive pressing, positional superiority, and the technical quality to circulate the ball at pace. Löw's side had just destroyed Brazil 7-1 — a result that made them overwhelming favourites for the Final.

Argentina, under Alejandro Sabella, defended in a compact 4-4-2 with Messi and Higuaín isolated up front and tasked with exploiting space on the counter. Mascherano was heroic in midfield — covering enormous ground to protect the defensive line. Higuaín missed a clear early chance that might have changed history.

Löw's decisive move: introducing Götze for Klose in the second half of extra time, telling him "Show the world you're better than Messi." Götze's chest control and volley — executed under extreme pressure on a Maracanã pitch already heavy with emotion — was a moment of perfection. Germany's fourth World Cup was their most technically complete triumph.`,
    keyMoments: [
      "Higuaín's first-half miss: clean through on goal, he shot straight at Neuer — the moment Argentina lost the World Cup",
      "Mascherano's sliding tackle on Robben in extra time — one of the greatest defensive interventions in Final history",
      "113': Götze's volley — Löw's message to 'be better than Messi' delivered in the most spectacular fashion",
      "Germany become the first European team to win a World Cup in South America",
      "Messi wins the Golden Ball as tournament's best player despite losing the Final — the decision remains controversial",
    ],
    historicalSignificance: `Germany's fourth World Cup title was their first as a unified nation — the previous three (1954, 1974, 1990) were won as West Germany. The triumph completed a decade-long rebuild of German football following their poor performance at Euro 2000. The youth development overhaul that began in 2001 had produced its dividend. Götze's goal, at 22, promised a brilliant future — though injury and form issues meant it remained his career's defining moment.`,
    topPerformers: [
      { name: "Mario Götze", side: "home", position: "SS · 🇩🇪", rating: 9.4, note: "Match-winning extra-time goal — the most important substitute appearance in World Cup history" },
      { name: "Manuel Neuer", side: "home", position: "GK · 🇩🇪", rating: 9.2, note: "Sweeper-keeper masterclass — won the Golden Glove; defined a new style of goalkeeping" },
      { name: "Javier Mascherano", side: "away", position: "CM · 🇦🇷", rating: 9.1, note: "Heroic defensive display — his tackle on Robben in extra time was the match's defensive moment" },
      { name: "Lionel Messi", side: "away", position: "RW · 🇦🇷", rating: 7.8, note: "Golden Ball winner despite quiet Final — his inability to win the World Cup became the era's defining narrative" },
    ],
  },

  // ─────────────────────────────────────────────
  // 19. West Germany 1-1 England — 1990 SF (WG 4-3 pens)
  // ─────────────────────────────────────────────
  {
    id: "west-germany-vs-england-1990-sf",
    tournament: "FIFA World Cup 1990",
    year: 1990,
    stage: "Semi-Final",
    date: "July 4, 1990",
    venue: "Stadio delle Alpi",
    city: "Turin, Italy",
    home: {
      name: "West Germany",
      flag: "🇩🇪",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Illgner","Reuter","Kohler","Augenthaler","Brehme","Häßler","Matthäus","Buchwald","Littbarski","Völler","Klinsmann"],
      score: 1,
    },
    away: {
      name: "England",
      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Shilton","Parker","Wright","Walker","Pearce","Platt","Waddle","Gascoigne","Beardsley","Lineker","Barnes"],
      score: 1,
    },
    status: "PSO",
    penaltyScore: "4-3",
    xG: { home: 1.7, away: 1.5 },
    possession: { home: 49, away: 51 },
    timeline: [
      { minute: "59'", side: "home", player: "Brehme", type: "goal", description: "Brehme's shot deflects off Pearce — Germany take the lead" },
      { minute: "80'", side: "away", player: "Lineker", type: "goal", description: "Lineker equalises — England level with 10 minutes remaining" },
      { minute: "PSO", side: "away", player: "Pearce", type: "pen_miss", description: "Pearce's powerful penalty is saved by Illgner — England's nightmare begins" },
      { minute: "PSO", side: "away", player: "Waddle", type: "pen_miss", description: "Waddle blazes over — Germany go to the Final" },
    ],
    stats: [
      { label: "Possession", home: 49, away: 51, homeWidth: 49, awayWidth: 51 },
      { label: "Shots", home: 16, away: 14, homeWidth: 53, awayWidth: 47 },
      { label: "Shots on Target", home: 7, away: 6, homeWidth: 54, awayWidth: 46 },
      { label: "Pass Accuracy", home: "80%", away: "78%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 7, away: 9, homeWidth: 44, awayWidth: 56 },
      { label: "Fouls", home: 22, away: 19, homeWidth: 54, awayWidth: 46 },
      { label: "xG", home: "1.69", away: "1.54", homeWidth: 52, awayWidth: 48 },
    ],
    metaDescription: "AI tactical analysis of West Germany vs England in the 1990 World Cup semi-final — Gazza's tears, Pearce and Waddle's missed penalties, the match that defined English football heartbreak.",
    tacticalAnalysis: `The 1990 semi-final between West Germany and England is one of the most emotionally charged matches in World Cup history — the birthplace of Gazza's tears, Pearce's anguish, and an entire generation of English heartbreak.

Both teams played functional but competitive football. Germany's 4-3-3 with Matthäus as a box-to-box force was tactically superior, but England were competitive throughout. Bobby Robson's 4-4-2 with Gascoigne as the creative engine and Lineker as the focal point matched Germany for much of the match.

Brehme's deflected goal broke the deadlock. Lineker's equaliser — his ninth World Cup goal — brought England level and set up an extra-time period that neither team dominated. The penalty shootout that followed became one of England's most painful recurring nightmares.

Gascoigne received a yellow card that would have ruled him out of the Final — and his tears at that moment, captured in close-up by ITV's cameras, became one of the images of the sporting decade. Pearce's saved penalty and Waddle's blast over the bar sealed England's fate. It would be 30 years before England reached another major tournament semi-final.`,
    keyMoments: [
      "Gazza's tears: Gascoigne's yellow card and subsequent emotional breakdown captured the nation's heart and changed the public perception of footballers",
      "Lineker's equaliser: he glances at Gascoigne and mouths to the bench 'have a word with him' — a famous moment of sporting leadership",
      "Pearce's saved penalty: struck with power but at Illgner's body — England's most experienced penalty taker fails",
      "Waddle's skied miss: the image of the ball sailing into the Turin night became the defining symbol of English football's 90s trauma",
      "England reach their first World Cup semi-final since 1966 — and their last until 2018",
    ],
    historicalSignificance: `This semi-final launched a 30-year national trauma around penalty shootouts that shaped English football's identity. The tears, the misses, and the Nessun Dorma soundtrack produced by ITV made the 1990 World Cup the moment when football became Britain's mainstream cultural event. Gascoigne's performance and emotion made him a superstar. Pearce and Waddle carried the weight of their misses for decades. The match also catalysed England's football revolution — the 1992 Premier League was born partly from the commercial energy generated by Italia 90.`,
    topPerformers: [
      { name: "Lothar Matthäus", side: "home", position: "CM · 🇩🇪", rating: 9.3, note: "Dominant throughout 120 minutes — converted his penalty; the complete midfielder" },
      { name: "Paul Gascoigne", side: "away", position: "CM · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 9.1, note: "Brilliant for 80 minutes before the yellow card; his tears defined a generation" },
      { name: "Gary Lineker", side: "away", position: "CF · 🏴󠁧󠁢󠁥󠁮󠁧󠁿", rating: 8.7, note: "Equaliser and leadership — guided Gascoigne emotionally; tournament's Golden Boot" },
      { name: "Jürgen Klinsmann", side: "home", position: "CF · 🇩🇪", rating: 8.4, note: "Constant movement caused England's defence problems throughout" },
    ],
  },

  // ─────────────────────────────────────────────
  // 20. Germany 0-2 Italy — 2006 Semi-Final (AET)
  // ─────────────────────────────────────────────
  {
    id: "germany-vs-italy-2006-sf",
    tournament: "FIFA World Cup 2006",
    year: 2006,
    stage: "Semi-Final",
    date: "July 4, 2006",
    venue: "Signal Iduna Park",
    city: "Dortmund, Germany",
    home: {
      name: "Germany",
      flag: "🇩🇪",
      formation: "4-3-2-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Lehmann","Friedrich","Mertesacker","Metzelder","Lahm","Schneider","Frings","Borowski","Podolski","Klose","Schweinsteiger"],
      score: 0,
    },
    away: {
      name: "Italy",
      flag: "🇮🇹",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Buffon","Zambrotta","Cannavaro","Materazzi","Grosso","Camoranesi","Pirlo","Gattuso","Perrotta","Totti","Toni"],
      score: 2,
    },
    status: "AET",
    xG: { home: 1.4, away: 1.6 },
    possession: { home: 52, away: 48 },
    timeline: [
      { minute: "119'", side: "away", player: "Grosso", type: "goal", description: "Pirlo's pass, Grosso drives past Lehmann — Italy lead with one minute of extra time left" },
      { minute: "121'", side: "away", player: "Del Piero", type: "goal", description: "Del Piero seals it with a clipped finish — Italy are going to the Final" },
    ],
    stats: [
      { label: "Possession", home: 52, away: 48, homeWidth: 52, awayWidth: 48 },
      { label: "Shots", home: 18, away: 14, homeWidth: 56, awayWidth: 44 },
      { label: "Shots on Target", home: 7, away: 5, homeWidth: 58, awayWidth: 42 },
      { label: "Pass Accuracy", home: "83%", away: "85%", homeWidth: 49, awayWidth: 51 },
      { label: "Corners", home: 9, away: 6, homeWidth: 60, awayWidth: 40 },
      { label: "Fouls", home: 19, away: 26, homeWidth: 42, awayWidth: 58 },
      { label: "xG", home: "1.38", away: "1.61", homeWidth: 46, awayWidth: 54 },
    ],
    metaDescription: "AI tactical analysis of Germany vs Italy in the 2006 World Cup semi-final — Grosso and Del Piero score in extra time's final two minutes to eliminate the host nation in Dortmund.",
    tacticalAnalysis: `The 2006 semi-final in Dortmund produced one of the most dramatic finales in World Cup history — two goals in the final two minutes of extra time, both by Italy, against a German team that had dominated the match for 119 minutes.

Germany, hosting the tournament, were the crowd's overwhelming favourites. Jürgen Klinsmann's 4-3-2-1 pressed aggressively and created numerous chances — 18 shots to Italy's 14 — but Buffon was impenetrable and Germany's finishing was profligate. Klose, Podolski, and Schweinsteiger all had opportunities.

Italy's Marcello Lippi was patient. His 4-4-2 absorbed German pressure with Gattuso's combative pressing and Pirlo's deep passing intelligence. Cannavaro marshalled the defence brilliantly. Italy were waiting for the moment of exhaustion.

With one minute of extra time remaining, Pirlo's pass released Grosso down the left. His drive past Lehmann was Italy's first genuine clear chance of the match. Then Del Piero, on as a substitute, clipped a second in the 121st minute. The Dortmund crowd fell silent. Germany — playing their best football in years on home soil — were out.`,
    keyMoments: [
      "119': Grosso's goal — Italy's first real clear chance of the match; scored with 60 seconds of extra time remaining",
      "121': Del Piero's finish — a substitute's clipped goal that confirmed Italy's place in the Final and shattered German dreams",
      "Buffon's clean sheet: Germany dominated possession and shots but could not breach the greatest goalkeeper of his generation",
      "Pirlo's contribution: his late pass for Grosso was the defining moment — proof that Italy's patience outlasted German energy",
      "The Dortmund crowd: 65,000 German fans in silence at full-time — one of the World Cup's most powerful atmospheric moments",
    ],
    historicalSignificance: `The 2006 semi-final confirmed Italy's tactical superiority in the art of winning matches without dominating them. Lippi's patient system — so different from Germany's energy and press — produced two goals at the moment of maximum German exhaustion. The match is a coaching masterclass in absorbing pressure and striking when opponents are spent. Germany, under Klinsmann, had rediscovered their football identity after poor years — this defeat inspired the squad that would ultimately win the 2014 World Cup.`,
    topPerformers: [
      { name: "Gianluigi Buffon", side: "away", position: "GK · 🇮🇹", rating: 9.6, note: "Extraordinary — kept a clean sheet despite 18 German shots; the match-defining performance" },
      { name: "Andrea Pirlo", side: "away", position: "DM · 🇮🇹", rating: 9.2, note: "Controlled the match from deep — his pass for Grosso's winner was the decisive contribution" },
      { name: "Fabio Grosso", side: "away", position: "LB · 🇮🇹", rating: 9.0, note: "Scored in the 119th minute — his goal and celebration became the tournament's iconic image" },
      { name: "Lukas Podolski", side: "home", position: "LW · 🇩🇪", rating: 7.8, note: "Germany's most dangerous attacker — wasted the best German chance with a tame shot" },
    ],
  },

  // ─────────────────────────────────────────────
  // 21. Uruguay 2-1 Brazil — 1950 (Maracanazo)
  // ─────────────────────────────────────────────
  {
    id: "uruguay-vs-brazil-1950-final",
    tournament: "FIFA World Cup 1950",
    year: 1950,
    stage: "Final Round",
    date: "July 16, 1950",
    venue: "Estádio do Maracanã",
    city: "Rio de Janeiro, Brazil",
    home: {
      name: "Uruguay",
      flag: "🇺🇾",
      formation: "4-2-4",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Máspoli","Tejera","Varela","Gambetta","González","Andrade","Ghiggia","Pérez","Míguez","Schiaffino","Morán"],
      score: 2,
    },
    away: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-2-4",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Barbosa","Augusto","Juvenal","Roque","Bauer","Danilo","Friaça","Zizinho","Ademir","Jair","Chico"],
      score: 1,
    },
    status: "FT",
    xG: { home: 1.4, away: 2.2 },
    possession: { home: 42, away: 58 },
    timeline: [
      { minute: "47'", side: "away", player: "Friaça", type: "goal", description: "Friaça gives Brazil the lead — Maracanã erupts; Uruguay must score twice" },
      { minute: "66'", side: "home", player: "Schiaffino", type: "goal", description: "Schiaffino equalises — silence descends on 200,000 spectators" },
      { minute: "79'", side: "home", player: "Ghiggia", type: "goal", description: "Ghiggia drives to the near post and shoots — Barbosa unsighted; Uruguay win the World Cup" },
    ],
    stats: [
      { label: "Possession", home: 42, away: 58, homeWidth: 42, awayWidth: 58 },
      { label: "Shots", home: 11, away: 18, homeWidth: 38, awayWidth: 62 },
      { label: "Shots on Target", home: 5, away: 9, homeWidth: 36, awayWidth: 64 },
      { label: "Pass Accuracy", home: "74%", away: "80%", homeWidth: 48, awayWidth: 52 },
      { label: "xG", home: "1.41", away: "2.19", homeWidth: 39, awayWidth: 61 },
    ],
    metaDescription: "AI tactical analysis of the Maracanazo — Uruguay's 2-1 shock over Brazil in the 1950 World Cup before 200,000 at the Maracanã. Ghiggia's winner silenced the world's largest crowd.",
    tacticalAnalysis: `The Maracanazo — the name given to Uruguay's 2-1 victory over Brazil in the 1950 World Cup Final Round — is the most shocking result in football history. Brazil needed only a draw to become world champions. 200,000 people packed the Maracanã. The entire country had stopped to celebrate. Then Ghiggia scored.

The 1950 World Cup used a final round-robin format rather than a single Final. Brazil entered the decisive match needing only a draw against Uruguay, having beaten Sweden 7-1 and Spain 6-1. The Maracanã was so confident of victory that victory speeches had been prepared, medals had been made, and a song ("Brasil os vencedores") had already been recorded.

Uruguay's Juan Alberto Schiaffino was the tactical key. Operating as a deep-lying forward in Uruguay's 4-2-4, he linked midfield and attack with intelligent movement. Alcides Ghiggia provided the pace and directness on the right that Brazil's left side could not handle.

Friaça's goal after 47 minutes appeared to seal Brazil's World Cup. But Schiaffino's composed equaliser changed the mood. Then, in the 79th minute, Ghiggia exploited space on the right to shoot from an angle — a near-post finish that goalkeeper Barbosa failed to anticipate. The Maracanã fell into silence. Uruguay were world champions.`,
    keyMoments: [
      "Pre-match atmosphere: 200,000 spectators (the largest crowd in football history), victory celebrations already prepared",
      "66': Schiaffino's equaliser — the moment the Maracanã fell silent for the first time",
      "79': Ghiggia's winner — a near-post finish that Barbosa failed to reach; he later said 'only three people have silenced the Maracanã: Frank Sinatra, Pope John Paul II, and me'",
      "Obdúlio Varela (Uruguay captain) picks up Brazilian newspapers proclaiming Brazil champions before the match to motivate his team",
      "Barbosa is blamed: the goalkeeper is ostracised in Brazil for decades, barred from visiting the Brazilian national team",
    ],
    historicalSignificance: `The Maracanazo is the original World Cup shock — the template against which all subsequent upsets are measured. It broke an entire nation: players reportedly wept on the pitch, Jules Rimet (FIFA president) had to console Uruguay rather than Brazil. Goalkeeper Barbosa lived under the shadow of the defeat until his death in 2000, never forgiven by Brazilian football culture. The result led Brazil to change their kit from white to yellow — the white shirts were considered unlucky. No shock in football history has had comparable cultural consequence.`,
    topPerformers: [
      { name: "Alcides Ghiggia", side: "home", position: "RW · 🇺🇾", rating: 9.7, note: "Scored the winning goal that silenced 200,000 people — the most consequential goal in football history" },
      { name: "Juan Schiaffino", side: "home", position: "CF · 🇺🇾", rating: 9.4, note: "Equaliser and creative engine — the finest Uruguayan player of his generation" },
      { name: "Obdúlio Varela", side: "home", position: "CM · 🇺🇾", rating: 9.0, note: "Captained Uruguay's upset with extraordinary mental fortitude; his pre-match psychological tactics were masterful" },
      { name: "Zizinho", side: "away", position: "AM · 🇧🇷", rating: 8.2, note: "Brazil's best player but could not influence the second half after the equaliser changed the atmosphere" },
    ],
  },

  // ─────────────────────────────────────────────
  // 22. Netherlands 2-2 Argentina — 2022 QF (ARG 4-3 pens)
  // ─────────────────────────────────────────────
  {
    id: "netherlands-vs-argentina-2022-qf",
    tournament: "FIFA World Cup 2022",
    year: 2022,
    stage: "Quarter-Final",
    date: "December 9, 2022",
    venue: "Lusail Iconic Stadium",
    city: "Lusail, Qatar",
    home: {
      name: "Netherlands",
      flag: "🇳🇱",
      formation: "3-4-1-2",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Noppert","Timber","Van Dijk","Ake","Dumfries","De Jong","Berghuis","Blind","Gakpo","Bergwijn","Memphis"],
      score: 2,
    },
    away: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["E. Martínez","Molina","Romero","Otamendi","Acuña","De Paul","Enzo Fernández","Mac Allister","Di María","Messi","Álvarez"],
      score: 2,
    },
    status: "PSO",
    penaltyScore: "4-3",
    xG: { home: 1.8, away: 2.2 },
    possession: { home: 44, away: 56 },
    timeline: [
      { minute: "35'", side: "away", player: "Molina", type: "goal", description: "Messi's perfectly weighted through-ball; Molina taps in" },
      { minute: "73'", side: "away", player: "Messi", type: "pen_goal", description: "Messi converts after De Paul is fouled — Argentina 2-0 up" },
      { minute: "83'", side: "home", player: "Weghorst", type: "goal", description: "Bergwijn's cross, Weghorst bundled finish — Netherlands back in it" },
      { minute: "90+11'", side: "home", player: "Weghorst", type: "goal", description: "Weghorst's header from a clever free-kick routine — 2-2 in stoppage time" },
      { minute: "PSO", side: "home", player: "Berghuis", type: "pen_miss", description: "Saved by E. Martínez — Argentina advance" },
      { minute: "PSO", side: "home", player: "Berghuis", type: "pen_miss", description: "Saved by E. Martínez — Argentina advance" },
    ],
    stats: [
      { label: "Possession", home: 44, away: 56, homeWidth: 44, awayWidth: 56 },
      { label: "Shots", home: 16, away: 14, homeWidth: 53, awayWidth: 47 },
      { label: "Shots on Target", home: 7, away: 5, homeWidth: 58, awayWidth: 42 },
      { label: "Pass Accuracy", home: "83%", away: "85%", homeWidth: 49, awayWidth: 51 },
      { label: "Fouls", home: 20, away: 25, homeWidth: 44, awayWidth: 56 },
      { label: "Yellow Cards", home: "5", away: "9", homeWidth: 36, awayWidth: 64 },
      { label: "xG", home: "1.84", away: "2.22", homeWidth: 45, awayWidth: 55 },
    ],
    metaDescription: "AI tactical analysis of Netherlands vs Argentina 2022 quarter-final — Weghorst's two late goals, Messi's brilliance, Martínez's PSO heroics. One of the most dramatic World Cup matches ever.",
    tacticalAnalysis: `The 2022 quarter-final between Netherlands and Argentina was one of the tournament's most dramatic and ill-tempered matches — a contest of three goals in 11 minutes of stoppage time, a brawl at full-time, and a penalty shootout decided by Emiliano Martínez's psychological mastery.

Argentina, apparently cruising at 2-0 with seven minutes remaining, were pegged back by substitute Wout Weghorst — on the pitch for just 11 minutes. Louis van Gaal's tactical gamble of the late substitution proved inspired: Weghorst's physical presence changed the match's dynamic. His second goal, from a quickly-taken free-kick designed by Van Gaal specifically for this situation, sent the match into extra time.

Scaloni's Argentina were technically superior with Messi pulling the strings, but the second half saw a physical and aggressive Dutch approach that resulted in nine yellow cards for Argentina. The brawl at full-time between players, coaches, and staff reflected the intensity of the contest.

In the shootout, Martínez's theatrics proved decisive. He saved from Berghuis and Bram consecutively, while Argentina converted four. Messi — previously excluded from penalty duties — stepped up and converted after a stutter, eyes locked on the goalkeeper.`,
    keyMoments: [
      "35': Messi's assist for Molina — the pass was weighted with millimetre precision through four defenders",
      "83'–90+11': Weghorst scores twice in 11 minutes from 0-2 down — one of the great World Cup comebacks",
      "90+11': The clever free-kick routine: Weghorst screens the ball, another player runs decoy, the cross finds Weghorst free — Van Gaal's pre-designed play",
      "Post-match brawl: players and coaching staff clash on the pitch — 15+ people involved in confrontations",
      "Martínez's PSO: he saved two penalties and used psychological pressure on Dutch takers throughout",
    ],
    historicalSignificance: `The match was the most watched sporting event in Qatar 2022 until the Final. It confirmed Martínez as the world's best penalty-shootout goalkeeper and Messi as the indispensable architect of Argentina's tournament run. Van Gaal's Netherlands — his third stint as manager — played impressive football but the late collapse and shootout defeat ended his World Cup career. Argentina went on to win the tournament.`,
    topPerformers: [
      { name: "Lionel Messi", side: "away", position: "RW · 🇦🇷", rating: 9.5, note: "1 goal, 1 assist — his through-ball for Molina was a masterclass of spatial intelligence" },
      { name: "Emiliano Martínez", side: "away", position: "GK · 🇦🇷", rating: 9.4, note: "Two PSO saves — his psychological domination of Dutch takers was deliberate and devastating" },
      { name: "Wout Weghorst", side: "home", position: "CF · 🇳🇱", rating: 9.2, note: "Two goals in 11 minutes as a substitute — one of the great cameo performances in World Cup history" },
      { name: "Denzel Dumfries", side: "home", position: "RWB · 🇳🇱", rating: 8.4, note: "Constant threat down the right flank — the assist for Weghorst's first goal" },
    ],
  },

  // ─────────────────────────────────────────────
  // 23. France 4-3 Argentina — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    id: "france-vs-argentina-2018-r16",
    tournament: "FIFA World Cup 2018",
    year: 2018,
    stage: "Round of 16",
    date: "June 30, 2018",
    venue: "Kazan Arena",
    city: "Kazan, Russia",
    home: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Lloris","Pavard","Varane","Umtiti","Lucas Hernández","Kanté","Pogba","Mbappé","Griezmann","Lemar","Giroud"],
      score: 4,
    },
    away: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Caballero","Mercado","Otamendi","Rojo","Tagliafico","Banega","Mascherano","Di María","Pavón","Messi","Agüero"],
      score: 3,
    },
    status: "FT",
    xG: { home: 2.9, away: 2.1 },
    possession: { home: 45, away: 55 },
    timeline: [
      { minute: "13'", side: "home", player: "Griezmann", type: "pen_goal", description: "Penalty after Di María is fouled — France take an early lead" },
      { minute: "41'", side: "away", player: "Di María", type: "goal", description: "Di María's thunderous 30-yard strike — one of the goals of the tournament" },
      { minute: "48'", side: "away", player: "Mercado", type: "goal", description: "Mercado deflects Messi's shot — Argentina lead 2-1" },
      { minute: "57'", side: "home", player: "Pavard", type: "goal", description: "Pavard's volley from outside the box — voted Goal of the Tournament" },
      { minute: "64'", side: "home", player: "Mbappé", type: "goal", description: "Mbappé's first — driving run and clinical finish from Giroud's pass" },
      { minute: "68'", side: "home", player: "Mbappé", type: "goal", description: "Mbappé's second in four minutes — France 4-2 ahead" },
      { minute: "90+3'", side: "away", player: "Agüero", type: "goal", description: "Agüero's late consolation — too little, too late" },
    ],
    stats: [
      { label: "Possession", home: 45, away: 55, homeWidth: 45, awayWidth: 55 },
      { label: "Shots", home: 18, away: 16, homeWidth: 53, awayWidth: 47 },
      { label: "Shots on Target", home: 9, away: 7, homeWidth: 56, awayWidth: 44 },
      { label: "Pass Accuracy", home: "82%", away: "85%", homeWidth: 49, awayWidth: 51 },
      { label: "Fouls", home: 16, away: 19, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "2.88", away: "2.09", homeWidth: 58, awayWidth: 42 },
    ],
    metaDescription: "AI tactical analysis of France vs Argentina 2018 round of 16 — Mbappé's breakout match at 19, Pavard's Goal of the Tournament, France 4-3 in one of the World Cup's greatest knockout games.",
    tacticalAnalysis: `This round of 16 match was the game that introduced Kylian Mbappé to the world as football's next superstar. At 19 years old, the PSG forward produced a performance of explosive acceleration and clinical finishing that eliminated Messi's Argentina and confirmed France as World Cup favourites.

France's tactical setup under Deschamps was designed to absorb and counter. Kanté's defensive work protected against Messi, while Mbappé's pace on the break was the primary weapon. Against an Argentina team struggling with cohesion — Lionel Scaloni would replace Jorge Sampaoli two months later — France's transitions were devastating.

The match had extraordinary momentum swings. France led, Argentina fought back to 2-1, then Pavard's stunning volley levelled before Mbappé's brace put the game beyond doubt. Di María's 30-yard thunderbolt and Pavard's volley were two of the tournament's most spectacular goals. But the day belonged to Mbappé.

Argentina's 4-4-2 under Sampaoli was tactically confused — Messi was isolated, the midfield was overrun by France's transition speed, and the team had no consistent system. It was the end of an era for Argentina's generation. Mbappé became the second teenager (after Pelé in 1958) to score twice in a World Cup knockout match.`,
    keyMoments: [
      "41': Di María's 30-yard thunderbolt — the goal that briefly gave Argentina hope and announced Di María's tournament",
      "57': Pavard's volley — voted Goal of the Tournament; a first-time strike of technique rarely seen at World Cup level",
      "64'–68': Mbappé scores twice in four minutes — his pace is impossible for Rojo and Otamendi to contain",
      "Mbappé becomes only the second teenager (after Pelé) to score twice in a World Cup knockout game",
      "Messi's last World Cup elimination in the round of 16 — four years later he wins the entire tournament",
    ],
    historicalSignificance: `The match is the official passing of the torch between football generations. Messi's Argentina exits while Mbappé's France advances to win the tournament. Mbappé's performance at 19 set the standard against which the next decade of his career would be measured. Argentina's defeat triggered a generational rebuild — Scaloni replaced Sampaoli, and the new generation (Enzo Fernández, Mac Allister, Molina) grew up to win the 2021 Copa América and 2022 World Cup.`,
    topPerformers: [
      { name: "Kylian Mbappé", side: "home", position: "RW · 🇫🇷", rating: 9.8, note: "Two goals — earned a penalty, won a sprint at 37km/h, and changed football's generational narrative" },
      { name: "Benjamin Pavard", side: "home", position: "RB · 🇫🇷", rating: 9.0, note: "Goal of the Tournament — a volley of extraordinary technique from a right-back in a World Cup knockout" },
      { name: "Ángel Di María", side: "away", position: "RW · 🇦🇷", rating: 8.6, note: "Spectacular long-range goal — the one moment of real Argentine quality in the match" },
      { name: "Lionel Messi", side: "away", position: "CF · 🇦🇷", rating: 7.2, note: "Largely neutralised by Kanté and France's double pivot — his tournament ends in the last 16" },
    ],
  },

  // ─────────────────────────────────────────────
  // 24. Ghana 1-1 Uruguay — 2010 QF (URU 4-2 pens)
  // ─────────────────────────────────────────────
  {
    id: "ghana-vs-uruguay-2010-qf",
    tournament: "FIFA World Cup 2010",
    year: 2010,
    stage: "Quarter-Final",
    date: "July 2, 2010",
    venue: "Soccer City (FNB Stadium)",
    city: "Johannesburg, South Africa",
    home: {
      name: "Ghana",
      flag: "🇬🇭",
      formation: "4-4-2",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Kingson","Sarpei","John Mensah","Jonathan Mensah","Inkoom","Muntari","Annan","Boateng","Asamoah","Gyan","Ayew"],
      score: 1,
    },
    away: {
      name: "Uruguay",
      flag: "🇺🇾",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Muslera","Maxi Pereira","Lugano","Godin","Victorino","Álvaro González","Arevalo","Eguren","Forlan","Suárez","Cavani"],
      score: 1,
    },
    status: "PSO",
    penaltyScore: "4-2",
    xG: { home: 1.8, away: 1.3 },
    possession: { home: 47, away: 53 },
    timeline: [
      { minute: "45+2'", side: "home", player: "Muntari", type: "goal", description: "Muntari's long-range strike — Ghana lead at half-time" },
      { minute: "55'", side: "away", player: "Forlan", type: "goal", description: "Forlan's free-kick equalises — Uruguay level" },
      { minute: "120'", side: "away", player: "Suárez", type: "red", description: "Suárez handles on the line — red card, penalty awarded to Ghana in final seconds of extra time" },
      { minute: "120'", side: "home", player: "Gyan", type: "pen_miss", description: "Gyan's penalty hits the crossbar — Ghana's World Cup dream ends" },
      { minute: "PSO", side: "home", player: "Mensah", type: "pen_miss", description: "Saved by Muslera — Uruguay advance" },
      { minute: "PSO", side: "home", player: "Adiyiah", type: "pen_miss", description: "Saved by Muslera — Uruguay win 4-2" },
    ],
    stats: [
      { label: "Possession", home: 47, away: 53, homeWidth: 47, awayWidth: 53 },
      { label: "Shots", home: 14, away: 12, homeWidth: 54, awayWidth: 46 },
      { label: "Shots on Target", home: 6, away: 5, homeWidth: 55, awayWidth: 45 },
      { label: "Pass Accuracy", home: "79%", away: "81%", homeWidth: 49, awayWidth: 51 },
      { label: "Fouls", home: 19, away: 22, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "1.82", away: "1.29", homeWidth: 58, awayWidth: 42 },
    ],
    metaDescription: "AI tactical analysis of Ghana vs Uruguay 2010 quarter-final — Suárez's deliberate handball, Gyan's crossbar penalty, and one of football's most controversial moments in Johannesburg.",
    tacticalAnalysis: `No World Cup match has generated more moral outrage and tactical controversy than the 2010 quarter-final between Ghana and Uruguay. In the final second of extra time, Luis Suárez deliberately handled the ball on the goal line to prevent what would have been the winning goal — an act of calculated cheating that denied Africa its first ever World Cup semi-finalist.

Ghana were the better team. Kevin-Prince Boateng and Sulley Muntari controlled the midfield tempo. Asamoah Gyan was a constant threat. Muntari's first-half long-range strike gave Ghana a deserved lead. Forlan's free-kick equalised for Uruguay.

As the match entered the final seconds of extra time, Dominic Adiyiah's header was heading into the net. Suárez, standing on the goal line, punched it away with both hands. He was sent off. A penalty was awarded. The entire continent of Africa held its breath as Gyan stepped up — and struck the crossbar.

In the subsequent shootout, Ghana missed two penalties and Uruguay advanced. Suárez celebrated his red card on the touchline. The incident exposed a fundamental gap in football's rules: a player can deliberately deny a goal (and receive only a red card) if the benefit of the act — keeping the team in the World Cup — outweighs the penalty of the red card.`,
    keyMoments: [
      "120': Suárez's handball on the line — deliberate, calculated, and denied Ghana what would have been the most celebrated goal in African football history",
      "Gyan hits the crossbar: the defining image of African football heartbreak — a crossbar that changed World Cup history",
      "Suárez's celebration: his joy at being sent off — knowing he had 'saved' Uruguay — provoked outrage globally",
      "Ghana become the last African team to reach the World Cup quarter-final in the competition's history to that point",
      "Forlan's tournament: the Uruguayan forward goes on to win the Golden Ball — outstanding throughout",
    ],
    historicalSignificance: `The match triggered a global debate about football's handball laws that persists today. Should a deliberate handball that denies a certain goal be punished more severely than a red card and penalty? FIFA amended rules in subsequent years to award a goal in certain circumstances. Ghana's elimination prevented Africa from having a semi-finalist on home soil — a moment that would have been one of the most celebrated in the sport's history. Suárez remains football's most divisive figure because of this single act.`,
    topPerformers: [
      { name: "Asamoah Gyan", side: "home", position: "CF · 🇬🇭", rating: 8.5, note: "Powerful throughout — his penalty miss off the crossbar remains the most painful moment in African football" },
      { name: "Diego Forlan", side: "away", position: "CF · 🇺🇾", rating: 9.2, note: "Equaliser and creative menace — won the Golden Ball for his overall tournament performance" },
      { name: "Luis Suárez", side: "away", position: "CF · 🇺🇾", rating: 7.0, note: "Handball red card — deliberate cheating that 'saved' Uruguay; the most morally controversial act in World Cup history" },
      { name: "Kevin-Prince Boateng", side: "home", position: "CM · 🇬🇭", rating: 8.3, note: "Dominated midfield with energy and physicality throughout the match" },
    ],
  },

  // ─────────────────────────────────────────────
  // 25. France 2-1 Croatia — 1998 Semi-Final
  // ─────────────────────────────────────────────
  {
    id: "france-vs-croatia-1998-sf",
    tournament: "FIFA World Cup 1998",
    year: 1998,
    stage: "Semi-Final",
    date: "July 8, 1998",
    venue: "Stade de France",
    city: "Saint-Denis, France",
    home: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Barthez","Thuram","Leboeuf","Desailly","Lizarazu","Deschamps","Petit","Zidane","Djorkaeff","Dugarry","Guivarc'h"],
      score: 2,
    },
    away: {
      name: "Croatia",
      flag: "🇭🇷",
      formation: "4-4-2",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Ladić","Šimić","Bilić","Soldo","Jarni","Asanović","Prosinečki","Boban","Stanić","Šuker","Bokšić"],
      score: 1,
    },
    status: "FT",
    xG: { home: 1.6, away: 1.8 },
    possession: { home: 54, away: 46 },
    timeline: [
      { minute: "46'", side: "away", player: "Šuker", type: "goal", description: "Croatia take a shock lead at the start of the second half — tournament's Golden Boot winner" },
      { minute: "47'", side: "home", player: "Thuram", type: "goal", description: "Thuram — the right-back — equalises immediately with his first ever France goal" },
      { minute: "69'", side: "home", player: "Thuram", type: "goal", description: "Thuram's second goal in 23 minutes — a right-back winning a World Cup semi-final" },
    ],
    stats: [
      { label: "Possession", home: 54, away: 46, homeWidth: 54, awayWidth: 46 },
      { label: "Shots", home: 16, away: 17, homeWidth: 48, awayWidth: 52 },
      { label: "Shots on Target", home: 7, away: 8, homeWidth: 47, awayWidth: 53 },
      { label: "Pass Accuracy", home: "84%", away: "80%", homeWidth: 51, awayWidth: 49 },
      { label: "Corners", home: 7, away: 8, homeWidth: 47, awayWidth: 53 },
      { label: "Fouls", home: 16, away: 22, homeWidth: 42, awayWidth: 58 },
      { label: "xG", home: "1.58", away: "1.79", homeWidth: 47, awayWidth: 53 },
    ],
    metaDescription: "AI tactical analysis of France vs Croatia 1998 World Cup semi-final — right-back Lilian Thuram scores twice in 23 minutes to send the host nation to the Final. A unique tactical story.",
    tacticalAnalysis: `The 1998 World Cup semi-final between France and Croatia is remembered for one remarkable fact: the two decisive goals were scored by a right-back. Lilian Thuram — one of the greatest defenders of his generation — had never scored for France before this match. He scored twice in 23 second-half minutes to send the host nation to the Final.

Croatia arrived at the semi-final as the tournament's surprise package. Miroslav Blažević's 4-4-2 featured Davor Šuker — the tournament's Golden Boot winner — and creative midfielders in Boban and Prosinečki. Croatia had eliminated Germany in the quarter-final with a stunning 3-0 victory.

France, under Aimé Jacquet, deployed a pragmatic 4-2-3-1 with Zidane operating as the chief creator. The first half was tight. Then Šuker — of course — opened the scoring immediately after half-time with his characteristic coolness. France appeared in crisis.

Thuram's response was immediate. His equaliser — a right-foot drive into the bottom corner — was his first international goal in 37 appearances. Then, 22 minutes later, Jarni's poor clearance fell to Thuram, who drove in his second. No right-back in football history has had a more impactful single match performance in a major tournament.`,
    keyMoments: [
      "Thuram's two goals: a right-back scoring twice in a World Cup semi-final — the only time in tournament history",
      "Šuker's opener: 46 seconds into the second half, catching France's defence completely unprepared",
      "47': Thuram's immediate equaliser — the fastest response to a goal by a defender in World Cup history at that point",
      "Croatia had beaten Germany 3-0 in the quarter-final — their best-ever performance before the 2022 generation",
      "France's defensive organisation: Desailly and Leboeuf eventually stifle Šuker and Bokšić after Croatia's fast start",
    ],
    historicalSignificance: `Croatia's 1998 run — reaching the semi-final in only their second World Cup — was the achievement that established them as a genuine football nation. Šuker's Golden Boot, Boban's creativity, and Blažević's tactical intelligence created a template that the 2022 generation (Modrić, Perišić, Brozović) refined to reach two consecutive finals. Thuram's performance inspired a generation of French defenders and remains the most celebrated individual performance by a full-back in World Cup semi-final history.`,
    topPerformers: [
      { name: "Lilian Thuram", side: "home", position: "RB · 🇫🇷", rating: 9.9, note: "Two goals in a World Cup semi-final as a right-back — the greatest individual defensive performance in World Cup history" },
      { name: "Davor Šuker", side: "away", position: "CF · 🇭🇷", rating: 9.0, note: "Tournament's Golden Boot (6 goals) — his opener briefly gave Croatia the match" },
      { name: "Zinedine Zidane", side: "home", position: "AM · 🇫🇷", rating: 8.6, note: "Controlled France's possession after Croatia's early pressure; set up Thuram's second" },
      { name: "Zvonimir Boban", side: "away", position: "CM · 🇭🇷", rating: 8.2, note: "Creative and combative — Croatia's tactical brain who almost dragged them into the Final" },
    ],
  },

  // ─────────────────────────────────────────────
  // 26. Senegal 1-0 France — 2002 Group Stage
  // ─────────────────────────────────────────────
  {
    id: "senegal-vs-france-2002-group",
    tournament: "FIFA World Cup 2002",
    year: 2002,
    stage: "Group Stage",
    date: "May 31, 2002",
    venue: "Seoul World Cup Stadium",
    city: "Seoul, South Korea",
    home: {
      name: "Senegal",
      flag: "🇸🇳",
      formation: "4-4-2",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Tony Sylva","Pape Sarr","Aliou Cissé","Lamine Diatta","Ferdinand Coly","Salif Diao","Khalilou Fadiga","Moussa N'Diaye","El Hadj Diouf","Papa Bouba Diop","Habib Beye"],
      score: 1,
    },
    away: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Barthez","Lizarazu","Thuram","Leboeuf","Candela","Petit","Vieira","Zidane","Djorkaeff","Henry","Trezeguet"],
      score: 0,
    },
    status: "FT",
    xG: { home: 0.9, away: 1.6 },
    possession: { home: 38, away: 62 },
    timeline: [
      { minute: "30'", side: "home", player: "Papa Bouba Diop", type: "goal", description: "Papa Bouba Diop follows up a Tony Sylva save — the goal that shocked the world" },
    ],
    stats: [
      { label: "Possession", home: 38, away: 62, homeWidth: 38, awayWidth: 62 },
      { label: "Shots", home: 9, away: 17, homeWidth: 35, awayWidth: 65 },
      { label: "Shots on Target", home: 4, away: 7, homeWidth: 36, awayWidth: 64 },
      { label: "Pass Accuracy", home: "72%", away: "85%", homeWidth: 46, awayWidth: 54 },
      { label: "Corners", home: 3, away: 9, homeWidth: 25, awayWidth: 75 },
      { label: "Fouls", home: 18, away: 21, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "0.91", away: "1.58", homeWidth: 37, awayWidth: 63 },
    ],
    metaDescription: "AI tactical analysis of Senegal vs France 2002 group stage — the greatest World Cup upset ever. Defending champions France eliminated without scoring a goal. Papa Bouba Diop's goal.",
    tacticalAnalysis: `Senegal's 1-0 victory over defending World Cup champions France in the opening match of the 2002 tournament is the greatest upset in World Cup group stage history. France arrived in South Korea as the world's best team — reigning World Cup champions (1998) and European champions (2000). They were eliminated in the group stage without scoring a single goal.

Bruno Metsu's Senegal deployed a disciplined 4-4-2 that was physically aggressive, tactically well-organised, and collectively invested. Most of Senegal's squad played in France's Ligue 1 — they knew the French players intimately. Aliou Cissé (now Senegal's manager) marshalled the defensive midfield with intelligence.

France's problems were multiple: Zidane was injured and unavailable; Djorkaeff and Henry couldn't link effectively; Vieira was isolated. The team that had won two consecutive major trophies with a blend of organisation and individual quality was now disorganised and reliant on fading veterans.

Papa Bouba Diop's 30th-minute goal — following up a Tony Sylva save — proved decisive. Senegal defended with remarkable composure for the remaining hour. Their players' celebration — removing their shirts and dancing around a pile of their jerseys — became one of the World Cup's iconic images.`,
    keyMoments: [
      "30': Papa Bouba Diop's goal — the shot that ended France's reign as world champions had barely reached the tournament",
      "The celebration: Senegal's players strip off their shirts and dance together — pure joy from a debutant nation",
      "France's no-goals tournament: they are eliminated without scoring — the defending champions' most humiliating exit",
      "Zidane absent: France's best player misses the opening two matches through injury — the team has no creative solution",
      "Senegal reach the quarter-final: they go on to beat Sweden and draw with Denmark, eventually losing to Turkey",
    ],
    historicalSignificance: `Senegal's victory confirmed that African football had arrived on the world stage. Their subsequent run to the quarter-final — where they lost to Turkey — was the best African performance since Cameroon's 1990 quarter-final. France's elimination without a goal was the most shocking defence-of-title collapse since the same happened to Brazil in 1966. The match is the founding moment of modern Senegalese football — their national team won the Africa Cup of Nations in 2022, 20 years later.`,
    topPerformers: [
      { name: "Papa Bouba Diop", side: "home", position: "CF · 🇸🇳", rating: 8.8, note: "Scored the goal that toppled the world champions — the moment that launched Senegalese football globally" },
      { name: "Aliou Cissé", side: "home", position: "CM · 🇸🇳", rating: 8.6, note: "Tactical discipline personified — now manages Senegal's national team" },
      { name: "El-Hadj Diouf", side: "home", position: "FW · 🇸🇳", rating: 8.4, note: "Constant nuisance — awarded FIFA's Most Promising Player at the tournament" },
      { name: "Patrick Vieira", side: "away", position: "CM · 🇫🇷", rating: 6.5, note: "Physically imposing but tactically isolated — France's midfield had no creativity without Zidane" },
    ],
  },

  // ─────────────────────────────────────────────
  // 27. Germany 0-1 Spain — 2010 Semi-Final
  // ─────────────────────────────────────────────
  {
    id: "germany-vs-spain-2010-sf",
    tournament: "FIFA World Cup 2010",
    year: 2010,
    stage: "Semi-Final",
    date: "July 7, 2010",
    venue: "Moses Mabhida Stadium",
    city: "Durban, South Africa",
    home: {
      name: "Germany",
      flag: "🇩🇪",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Neuer","Lahm","Mertesacker","Friedrich","Boateng","Schweinsteiger","Khedira","Müller","Özil","Klose","Podolski"],
      score: 0,
    },
    away: {
      name: "Spain",
      flag: "🇪🇸",
      formation: "4-2-3-1",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Casillas","Sergio Ramos","Piqué","Capdevila","Marchena","Xabi Alonso","Busquets","David Villa","Xavi","Iniesta","Torres"],
      score: 1,
    },
    status: "FT",
    xG: { home: 0.8, away: 1.4 },
    possession: { home: 37, away: 63 },
    timeline: [
      { minute: "73'", side: "away", player: "Puyol", type: "goal", description: "Carles Puyol's thundering header from a Xavi corner — the central defender wins the semi-final" },
    ],
    stats: [
      { label: "Possession", home: 37, away: 63, homeWidth: 37, awayWidth: 63 },
      { label: "Shots", home: 13, away: 12, homeWidth: 52, awayWidth: 48 },
      { label: "Shots on Target", home: 5, away: 5, homeWidth: 50, awayWidth: 50 },
      { label: "Pass Accuracy", home: "77%", away: "91%", homeWidth: 46, awayWidth: 54 },
      { label: "Corners", home: 6, away: 9, homeWidth: 40, awayWidth: 60 },
      { label: "Fouls", home: 17, away: 20, homeWidth: 46, awayWidth: 54 },
      { label: "xG", home: "0.83", away: "1.39", homeWidth: 37, awayWidth: 63 },
    ],
    metaDescription: "AI tactical analysis of Germany vs Spain 2010 World Cup semi-final — Puyol's header beats Germany's 13-goal juggernaut. Spain's tiki-taka at its tactical peak in Durban.",
    tacticalAnalysis: `The 2010 semi-final between Germany and Spain was the meeting of tournament's best team in the knockout rounds (Germany, with 13 goals scored) against the tournament's best system (Spain's tiki-taka). Spain won with a header from a central defender — the least likely method of defeating Germany's high-press.

Germany's 4-2-3-1 under Joachim Löw had been devastating in the group stage and knockout rounds: 4-1 vs Australia, 4-0 vs England, 4-0 vs Argentina. Their pressing system and the pace of Müller and Özil was the tournament's most dangerous attacking combination.

Spain's Del Bosque set up his 4-2-3-1 with Busquets as the single pivot — the key that protected against Germany's transition pace. Xavi's 800 passes per game controlled the tempo entirely. With 63% possession, Spain kept Germany away from the ball and denied them the counter-attacking opportunities their pace required.

The decisive moment was tactical irony: Spain's goal came not from their flowing passing but from a set-piece. Xavi's corner, Puyol's run, and a thundering header that Germany's defence couldn't deal with. Germany — who had scored 13 goals with only six shots on target — were eliminated by a central defender's header.`,
    keyMoments: [
      "Spain's 63% possession: Germany — who had destroyed England and Argentina — barely touched the ball",
      "73': Puyol's header — a central defender's goal from a corner settles a tactical masterclass in possession football",
      "Müller neutralised: Germany's Golden Boot winner (5 goals) was anonymous against Spain's pressing coverage",
      "Spain's pass accuracy of 91% — the highest recorded in a World Cup semi-final at that point",
      "Germany's first semi-final exit in 20 years — the loss that refocused Löw's system for 2014",
    ],
    historicalSignificance: `The match confirmed Spain's tiki-taka as the dominant tactical system of the era. Their 63% possession against Germany — previously the tournament's most irresistible force — was proof that the system could suppress even the best counter-attacking teams. Germany's defeat inspired Löw to incorporate more possession-based principles into his system — the evolution that produced the 2014 champions.`,
    topPerformers: [
      { name: "Xavi Hernández", side: "away", position: "CM · 🇪🇸", rating: 9.4, note: "817 total passes in the tournament — against Germany, his control of tempo was absolute" },
      { name: "Carles Puyol", side: "away", position: "CB · 🇪🇸", rating: 9.2, note: "Scored the match-winner with a header — a central defender deciding a World Cup semi-final" },
      { name: "Sergio Busquets", side: "away", position: "DM · 🇪🇸", rating: 9.0, note: "The tactical key: his positioning denied Germany the transition spaces their system required" },
      { name: "Thomas Müller", side: "home", position: "AM · 🇩🇪", rating: 6.8, note: "Anonymous — Spain's midfield coverage neutralised his movement completely" },
    ],
  },

  // ─────────────────────────────────────────────
  // 28. Sweden 2-5 Brazil — 1958 Final
  // ─────────────────────────────────────────────
  {
    id: "sweden-vs-brazil-1958-final",
    tournament: "FIFA World Cup 1958",
    year: 1958,
    stage: "Final",
    date: "June 29, 1958",
    venue: "Råsunda Stadium",
    city: "Solna, Sweden",
    home: {
      name: "Sweden",
      flag: "🇸🇪",
      formation: "4-2-4",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Svensson","Bergmark","Gustavsson","Axbom","Borjesson","Parling","Hamrin","Gren","Simonsson","Liedholm","Skoglund"],
      score: 2,
    },
    away: {
      name: "Brazil",
      flag: "🇧🇷",
      formation: "4-2-4",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Gilmar","Djalma Santos","Bellini","Orlando","Nilton Santos","Zito","Didi","Garrincha","Pelé","Vavá","Zagallo"],
      score: 5,
    },
    status: "FT",
    xG: { home: 1.8, away: 4.2 },
    possession: { home: 42, away: 58 },
    timeline: [
      { minute: "4'", side: "home", player: "Liedholm", type: "goal", description: "Sweden take a shock lead — Brazil behind in a World Cup Final for the first time" },
      { minute: "9'", side: "away", player: "Vavá", type: "goal", description: "Garrincha's run and cross — Vavá equalises" },
      { minute: "32'", side: "away", player: "Vavá", type: "goal", description: "Second Vavá goal — Brazil lead 2-1 at half-time" },
      { minute: "55'", side: "away", player: "Pelé", type: "goal", description: "Pelé's chest control and volley — voted the greatest World Cup Final goal at the time" },
      { minute: "68'", side: "away", player: "Zagallo", type: "goal", description: "Zagallo adds a fourth — only man to win the World Cup as both player and manager" },
      { minute: "80'", side: "home", player: "Simonsson", type: "goal", description: "Sweden's consolation" },
      { minute: "90'", side: "away", player: "Pelé", type: "goal", description: "Pelé's header completes the rout — he weeps at the final whistle, aged 17" },
    ],
    stats: [
      { label: "Possession", home: 42, away: 58, homeWidth: 42, awayWidth: 58 },
      { label: "Shots", home: 14, away: 22, homeWidth: 39, awayWidth: 61 },
      { label: "Shots on Target", home: 7, away: 14, homeWidth: 33, awayWidth: 67 },
      { label: "Pass Accuracy", home: "76%", away: "82%", homeWidth: 48, awayWidth: 52 },
      { label: "xG", home: "1.79", away: "4.19", homeWidth: 30, awayWidth: 70 },
    ],
    metaDescription: "AI tactical analysis of Sweden vs Brazil in the 1958 World Cup Final — 17-year-old Pelé scores twice on the world stage for the first time. Garrincha unstoppable; Brazil win their first World Cup.",
    tacticalAnalysis: `The 1958 World Cup Final introduced 17-year-old Pelé to the world and announced Brazil as the definitive force in world football. On Sweden's home soil, in a match the hosts had prepared for months, Brazil's combination of tactical innovation and individual brilliance was overwhelming.

Brazil's 4-2-4 system was revolutionary for 1958. Manager Vicente Feola's formation placed four attackers — Garrincha, Pelé, Vavá, and Zagallo — in a line that stretched opposing defences horizontally and vertically. Garrincha on the right was perhaps the most technically brilliant winger the game had seen, destroying full-backs with step-overs and directness.

Sweden took a shock early lead through Liedholm — for the only time in the tournament, Brazil trailed. The response was emphatic: Vavá twice in the first half, then Pelé in the 55th minute with a goal of extraordinary technical quality for any player, let alone a 17-year-old.

Pelé's first goal — chest control, a flick over the defender's head, and a volley — was the moment the world understood they were witnessing something historically rare. His second, a header in the final minute, completed a 5-2 victory. Pelé wept at the final whistle — the youngest player to score in a World Cup Final, still a world record.`,
    keyMoments: [
      "17-year-old Pelé: scores twice in the World Cup Final — the youngest scorer in Final history, a record that still stands",
      "Garrincha's performance: his dribbling on the right wing was simply unstoppable; he created two of Brazil's five goals",
      "Sweden score first: the only time Brazil fall behind in the 1958 tournament — their response is immediate and devastating",
      "Pelé's first goal: chest control, flick over defender, volley — described by contemporaries as the most beautiful goal ever seen",
      "Pelé's tears: the final whistle brings floods of tears from the 17-year-old — the most watched sporting image of 1958",
    ],
    historicalSignificance: `The 1958 World Cup Final is Pelé's origin story — the moment the world discovered the most naturally gifted footballer who ever lived. Brazil's victory in Sweden also confirmed the 4-2-4 as the dominant tactical innovation of the decade. Zagallo, who scored in this Final, would go on to manage Brazil's 1970 World Cup winners — the only man to win the World Cup as both player (1958, 1962) and manager (1970) at that point.`,
    topPerformers: [
      { name: "Pelé", side: "away", position: "CF · 🇧🇷", rating: 9.9, note: "Two goals at 17 — the birth of football's greatest legend on the world stage" },
      { name: "Garrincha", side: "away", position: "RW · 🇧🇷", rating: 9.6, note: "Unstoppable on the right — his dribbling made Sweden's left side non-existent" },
      { name: "Didi", side: "away", position: "CM · 🇧🇷", rating: 9.0, note: "The tactical orchestrator — controlled the tempo and created space for Pelé and Garrincha" },
      { name: "Nils Liedholm", side: "home", position: "AM · 🇸🇪", rating: 8.2, note: "Scored the opener and maintained quality — Sweden's best player, later a legendary AC Milan manager" },
    ],
  },

  // ─────────────────────────────────────────────
  // 29. France 1-0 Belgium — 2018 Semi-Final
  // ─────────────────────────────────────────────
  {
    id: "france-vs-belgium-2018-sf",
    tournament: "FIFA World Cup 2018",
    year: 2018,
    stage: "Semi-Final",
    date: "July 10, 2018",
    venue: "Saint Petersburg Stadium",
    city: "Saint Petersburg, Russia",
    home: {
      name: "France",
      flag: "🇫🇷",
      formation: "4-2-3-1",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["Lloris","Pavard","Varane","Umtiti","Lucas Hernández","Kanté","Pogba","Mbappé","Griezmann","Matuidi","Giroud"],
      score: 1,
    },
    away: {
      name: "Belgium",
      flag: "🇧🇪",
      formation: "3-4-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Courtois","Alderweireld","Kompany","Vertonghen","Meunier","Witsel","Fellaini","De Bruyne","Mertens","Lukaku","Hazard"],
      score: 0,
    },
    status: "FT",
    xG: { home: 0.9, away: 1.8 },
    possession: { home: 40, away: 60 },
    timeline: [
      { minute: "51'", side: "home", player: "Umtiti", type: "goal", description: "Umtiti heads in from Griezmann's corner — the only goal, and the match winner" },
    ],
    stats: [
      { label: "Possession", home: 40, away: 60, homeWidth: 40, awayWidth: 60 },
      { label: "Shots", home: 11, away: 19, homeWidth: 37, awayWidth: 63 },
      { label: "Shots on Target", home: 4, away: 9, homeWidth: 31, awayWidth: 69 },
      { label: "Pass Accuracy", home: "82%", away: "88%", homeWidth: 48, awayWidth: 52 },
      { label: "Corners", home: 6, away: 4, homeWidth: 60, awayWidth: 40 },
      { label: "Fouls", home: 14, away: 18, homeWidth: 44, awayWidth: 56 },
      { label: "xG", home: "0.89", away: "1.81", homeWidth: 33, awayWidth: 67 },
    ],
    metaDescription: "AI tactical analysis of France vs Belgium 2018 World Cup semi-final — Umtiti's header defeats Belgium's Golden Generation. France win 1-0 despite being outplayed for most of the match.",
    tacticalAnalysis: `The 2018 semi-final between France and Belgium was billed as the "real Final" — the two most talented squads in the tournament meeting before the trophy match. Belgium, with De Bruyne, Hazard, and Lukaku, were the Golden Generation that had never won a major tournament. France won 1-0 from a set-piece despite being the second-best team on the night.

Roberto Martínez's Belgium played an aggressive 3-4-3 with De Bruyne as the creative hub. With 60% possession and 19 shots to France's 11, Belgium were statistically dominant throughout. Hazard's movement and De Bruyne's passing created chance after chance that Lloris and France's disciplined block denied.

Deschamps' France were counter-attacking masters. With only 40% possession — their lowest of the tournament — France defended in a 4-5-1 deep block and looked to exploit space with Mbappé's pace. The tactical gambit of defending and striking on the break frustrated Belgium enormously.

The decisive moment came from a set-piece — Belgium's weakness. Griezmann's corner, Umtiti's run, and a header that Courtois — despite being the world's best goalkeeper — couldn't reach. Belgium created the better chances; France scored from their only corner and defended for their lives. The 1-0 remains the tournament's most contentious result.`,
    keyMoments: [
      "51': Umtiti's header — Belgium's set-piece vulnerability, exposed; France's only corner of the second half proved decisive",
      "Belgium's dominance: 19 shots, 60% possession, 1.81 xG — yet Belgium score zero goals",
      "Kanté vs De Bruyne: the tournament's most compelling midfield duel — Kanté neutralised Belgium's creative engine",
      "Lloris's saves: multiple critical stops that kept Belgium scoreless; his performance was the match's tactical keystone",
      "Belgium's 'Golden Generation' tournament ends: Hazard, De Bruyne, and Lukaku never win a major tournament together",
    ],
    historicalSignificance: `The match ended Belgium's 'Golden Generation' era. De Bruyne, Hazard, Lukaku, and Vertonghen — who had been top-5 players in the world simultaneously — never got closer to a major trophy. Martínez resigned after the 2022 World Cup group stage. France's victory confirmed Deschamps' tactical philosophy: sacrifice possession and beauty for defensive solidity and clinical conversion of minimal chances.`,
    topPerformers: [
      { name: "N'Golo Kanté", side: "home", position: "CM · 🇫🇷", rating: 9.4, note: "Neutralised De Bruyne with extraordinary defensive awareness — the tactical hero of France's win" },
      { name: "Kevin De Bruyne", side: "away", position: "AM · 🇧🇪", rating: 9.0, note: "19 Belgian shots; De Bruyne created 4 clear chances but France's block denied them all" },
      { name: "Hugo Lloris", side: "home", position: "GK · 🇫🇷", rating: 9.1, note: "Multiple crucial saves — the last line of a defensive system that was perfect under pressure" },
      { name: "Samuel Umtiti", side: "home", position: "CB · 🇫🇷", rating: 9.0, note: "Scored the only goal — a centre-back winning a World Cup semi-final from a set-piece" },
    ],
  },

  // ─────────────────────────────────────────────
  // 30. Argentina 3-0 Croatia — 2022 Semi-Final
  // ─────────────────────────────────────────────
  {
    id: "argentina-vs-croatia-2022-sf",
    tournament: "FIFA World Cup 2022",
    year: 2022,
    stage: "Semi-Final",
    date: "December 13, 2022",
    venue: "Lusail Iconic Stadium",
    city: "Lusail, Qatar",
    home: {
      name: "Argentina",
      flag: "🇦🇷",
      formation: "4-3-3",
      color: "#2DFF7C",
      colorDim: "rgba(45,255,124,0.18)",
      players: ["E. Martínez","Molina","Romero","Otamendi","Acuña","De Paul","Enzo Fernández","Mac Allister","Di María","Messi","Álvarez"],
      score: 3,
    },
    away: {
      name: "Croatia",
      flag: "🇭🇷",
      formation: "4-3-3",
      color: "#F5C518",
      colorDim: "rgba(245,197,24,0.18)",
      players: ["Livaković","Juranović","Šimunić","Gvardiol","Sosa","Modrić","Brozović","Kovačić","Perišić","Kramarić","Petković"],
      score: 0,
    },
    status: "FT",
    xG: { home: 2.8, away: 0.6 },
    possession: { home: 52, away: 48 },
    timeline: [
      { minute: "34'", side: "home", player: "Messi", type: "pen_goal", description: "Messi's penalty after a foul on Álvarez — composed and low to Livaković's right" },
      { minute: "39'", side: "home", player: "Álvarez", type: "goal", description: "Julián Álvarez wins the ball, dribbles half the pitch, and finishes — a goal of breathtaking solo quality" },
      { minute: "69'", side: "home", player: "Álvarez", type: "goal", description: "Messi's dribble beats Gvardiol (the world's best young defender) and squares for Álvarez — 3-0" },
    ],
    stats: [
      { label: "Possession", home: 52, away: 48, homeWidth: 52, awayWidth: 48 },
      { label: "Shots", home: 15, away: 8, homeWidth: 65, awayWidth: 35 },
      { label: "Shots on Target", home: 7, away: 2, homeWidth: 78, awayWidth: 22 },
      { label: "Pass Accuracy", home: "85%", away: "86%", homeWidth: 50, awayWidth: 50 },
      { label: "Corners", home: 6, away: 3, homeWidth: 67, awayWidth: 33 },
      { label: "Fouls", home: 14, away: 12, homeWidth: 54, awayWidth: 46 },
      { label: "xG", home: "2.82", away: "0.58", homeWidth: 83, awayWidth: 17 },
    ],
    metaDescription: "AI tactical analysis of Argentina vs Croatia 2022 World Cup semi-final — Messi's dribble past Gvardiol, Álvarez's solo goal. The performance that settled all debate about Messi's greatness.",
    tacticalAnalysis: `Argentina's 3-0 semi-final victory over Croatia was the match that settled all debate about Messi's greatness. His performance — 1 goal, 1 assist that included humiliating the world's best young defender — was the finest individual semi-final display since Maradona's 1986 tournament.

Croatia, who had beaten Brazil in the quarter-final, deployed a 4-3-3 with Modrić as the creative fulcrum. But Scaloni's Argentina, with Mac Allister and Enzo Fernández in midfield, pressed with extraordinary intensity that denied Modrić and Kovačić the time and space they needed.

The second goal was Álvarez's: a ball-winning tackle in his own half, a solo run of 40 metres, and a composed finish. The third was Messi's: he received the ball near the right touchline, beat Joško Gvardiol — Bayern Munich's brilliant 20-year-old — twice in succession, and squared for Álvarez to tap in. Gvardiol, who had been considered unbeatable, was turned inside out twice in seconds.

Croatia never recovered from going two goals down before half-time. Their possession-based system required composure that a two-goal deficit against an in-form Argentina obliterated. Modrić played his final World Cup match — at 37 — having made the semi-final for the second consecutive tournament.`,
    keyMoments: [
      "39': Álvarez's solo goal — a tackle, a 40-metre run, and a finish that announced him to the world",
      "69': Messi beats Gvardiol: the 35-year-old turns the world's most highly-rated young defender twice in two seconds — the dribble of the tournament",
      "Modrić's farewell: the 37-year-old plays his last World Cup game — two consecutive semi-finals for Croatia at this age is without precedent",
      "Argentina's pressing: Scaloni's system harassed Croatia's build-up and denied Brozović and Modrić their usual influence",
      "Álvarez's double: the 22-year-old announces himself as a world-class striker alongside Messi in this match",
    ],
    historicalSignificance: `The match confirmed Messi's place as football's greatest player. At 35, in what was his final World Cup, he produced the tournament's defining individual performance — beating Gvardiol (20 years old and rated the world's best young defender) as if playing in a training session. Álvarez's emergence as Messi's partner gave Argentina a generational succession plan. Croatia's run to two consecutive semi-finals (2018 and 2022) confirmed them as the sport's most overachieving national team relative to population.`,
    topPerformers: [
      { name: "Lionel Messi", side: "home", position: "RW · 🇦🇷", rating: 9.9, note: "1 goal, 1 assist — the Gvardiol dribble is the moment that ended all debate about his greatness" },
      { name: "Julián Álvarez", side: "home", position: "CF · 🇦🇷", rating: 9.5, note: "Two goals — the solo second goal and composed third finish; his World Cup breakout match" },
      { name: "Luka Modrić", side: "away", position: "CM · 🇭🇷", rating: 7.8, note: "His tournament ends in defeat — but his second consecutive semi-final at 37 is historically unprecedented" },
      { name: "Rodrigo De Paul", side: "home", position: "CM · 🇦🇷", rating: 8.8, note: "Controlled the midfield battle against Brozović — Argentina's most underrated player of the tournament" },
    ],
  },


  // ─────────────────────────────────────────────
  // Saudi Arabia vs Argentina — 2022 Group Stage (Group C)
  // ─────────────────────────────────────────────
  {
    "id": "saudi-arabia-vs-argentina-2022-group",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Group Stage (Group C)",
    "date": "November 22, 2022",
    "venue": "Lusail Stadium",
    "city": "Lusail, Qatar",
    "home": {
      "name": "Saudi Arabia",
      "flag": "🇸🇦",
      "formation": "4-3-3",
      "color": "#006C35",
      "colorDim": "rgba(0,108,53,0.18)",
      "players": [
        "Mohammed Al-Owais",
        "Mohammed Al-Breik",
        "Ali Al-Obaid",
        "Hassan Tambakti",
        "Yasir Al-Shahrani",
        "Abdulmalik Al-Bulaihi",
        "Salman Al-Faraj",
        "Mohammed Kanno",
        "Fahad Al-Ghamdi",
        "Saleh Al-Shehri",
        "Salah Al-Dawsari"
      ],
      "score": 2
    },
    "away": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Emiliano Martinez",
        "Nahuel Molina",
        "Cristian Romero",
        "Lisandro Martinez",
        "Marcos Acuña",
        "Rodrigo De Paul",
        "Leandro Paredes",
        "Giovani Lo Celso",
        "Lionel Messi",
        "Lautaro Martinez",
        "Angel Di Maria"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 1.68,
      "away": 2.07
    },
    "possession": {
      "home": 30,
      "away": 70
    },
    "timeline": [
      {
        "minute": "10'",
        "side": "away",
        "player": "Lionel Messi",
        "type": "pen_goal",
        "description": "Messi scores from the penalty spot after being fouled."
      },
      {
        "minute": "48'",
        "side": "home",
        "player": "Saleh Al-Shehri",
        "type": "goal",
        "description": "Al-Shehri equalizes with a low shot from inside the box."
      },
      {
        "minute": "53'",
        "side": "home",
        "player": "Salah Al-Dawsari",
        "type": "goal",
        "description": "Al-Dawsari scores with a stunning strike from outside the box."
      },
      {
        "minute": "65'",
        "side": "away",
        "player": "Lautaro Martinez",
        "type": "sub",
        "description": "Lautaro Martinez is substituted on."
      },
      {
        "minute": "70'",
        "side": "away",
        "player": "Giovani Lo Celso",
        "type": "sub",
        "description": "Giovani Lo Celso is substituted on."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 8,
        "away": 15,
        "homeWidth": 35,
        "awayWidth": 65
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 5,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Possession",
        "home": 30,
        "away": 70,
        "homeWidth": 30,
        "awayWidth": 70
      },
      {
        "label": "Passes",
        "home": 275,
        "away": 360,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Pass Accuracy",
        "home": "72%",
        "away": "82%",
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 7,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "1.68",
        "away": "2.07",
        "homeWidth": 45,
        "awayWidth": 55
      }
    ],
    "metaDescription": "Saudi Arabia shocks Argentina in a historic World Cup upset with a stunning second-half comeback in the Group Stage match.",
    "tacticalAnalysis": "Saudi Arabia lined up in a 4-3-3 formation, with a focus on pressing high and exploiting Argentina's slow build-up. Their high defensive line caught Argentina's frontline offside thrice, showcasing their tactical discipline. After going a goal down due to Messi's penalty, Saudi Arabia adapted superbly. They changed their attacking strategy, finding space behind Argentina's full-backs. Saleh Al-Shehri's equalizer came from an incisive counter-attack through the left flank. Just five minutes later, Salah Al-Dawsari scored a stunning winner from outside the box, catching Argentina's defense off guard. Argentina, utilizing a 4-3-3, struggled to cope with Saudi Arabia's pressing. Messi often dropped deep to collect the ball, leaving his side without an adequate presence in the box, ultimately leading to their defeat despite dominating possession.",
    "keyMoments": [
      "10' - Messi opens the scoring with a penalty.",
      "48' - Al-Shehri equalizes for Saudi Arabia.",
      "53' - Al-Dawsari scores the winner with a long-range strike.",
      "65' - Lautaro Martinez brought on to change the game.",
      "70' - Lo Celso replaces Paredes in a desperate attempt to regain control."
    ],
    "historicalSignificance": "This match is celebrated as one of the greatest upsets in World Cup history. Argentina, a pre-tournament favorite and unbeaten in 36 matches, fell victim to Saudi Arabia's tactical brilliance. This historic victory not only boosted Saudi Arabia's morale but also exemplified the unpredictable and thrilling nature of the tournament.",
    "topPerformers": [
      {
        "name": "Mohammed Al-Owais",
        "side": "home",
        "position": "GK",
        "rating": 9,
        "note": "Outstanding performance with crucial saves that kept Saudi Arabia in the game."
      },
      {
        "name": "Saleh Al-Shehri",
        "side": "home",
        "position": "ST",
        "rating": 8.2,
        "note": "Key player in the attack, scoring the first goal to energize his team."
      },
      {
        "name": "Lionel Messi",
        "side": "away",
        "position": "FW",
        "rating": 7.5,
        "note": "Despite the loss, he was instrumental in creating chances and scored the opening goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Japan — 2022 Group Stage (Group E)
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-japan-2022-group",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Group Stage (Group E)",
    "date": "November 23, 2022",
    "venue": "Khalifa International Stadium",
    "city": "Ar-Rayyan, Qatar",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Niklas Süle",
        "Antonio Rüdiger",
        "Matthias Ginter",
        "David Raum",
        "Joshua Kimmich",
        "Ilkay Gündogan",
        "Marco Reus",
        "Thomas Müller",
        "Leroy Sané",
        "Kai Havertz"
      ],
      "score": 1
    },
    "away": {
      "name": "Japan",
      "flag": "🇯🇵",
      "formation": "4-3-3",
      "color": "#BC002D",
      "colorDim": "rgba(188,0,45,0.18)",
      "players": [
        "Shūichi Gonda",
        "Daichi Kamada",
        "Takehiro Tomiyasu",
        "Maya Yoshida",
        "Yuto Nagatomo",
        "Wataru Endo",
        "Hidemasa Morita",
        "Takumi Minamino",
        "Ritsu Doan",
        "Kaoru Mitoma",
        "Asano Takuma"
      ],
      "score": 2
    },
    "status": "FT",
    "xG": {
      "home": 2.19,
      "away": 1.91
    },
    "possession": {
      "home": 73,
      "away": 27
    },
    "timeline": [
      {
        "minute": "33'",
        "side": "home",
        "player": "Ilkay Gündogan",
        "type": "goal",
        "description": "Gündogan converted a penalty to give Germany a 1-0 lead."
      },
      {
        "minute": "75'",
        "side": "away",
        "player": "Ritsu Doan",
        "type": "goal",
        "description": "Doan equalized after a superb counter-attack."
      },
      {
        "minute": "83'",
        "side": "away",
        "player": "Takuma Asano",
        "type": "goal",
        "description": "Asano scored the winner with a clinical finish from an angle."
      },
      {
        "minute": "68'",
        "side": "away",
        "player": "Ritsu Doan",
        "type": "sub",
        "description": "Doan substituted in for Minamino, crucial impact."
      },
      {
        "minute": "70'",
        "side": "away",
        "player": "Takuma Asano",
        "type": "sub",
        "description": "Asano substituted in for Mitoma, changed the game."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 17,
        "away": 12,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Possession",
        "home": 73,
        "away": 27,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Passes",
        "home": 670,
        "away": 250,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Pass Accuracy",
        "home": "89%",
        "away": "78%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 9,
        "away": 15,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "xG",
        "home": "2.19",
        "away": "1.91",
        "homeWidth": 53,
        "awayWidth": 47
      }
    ],
    "metaDescription": "Japan's stunning comeback against Germany in World Cup 2022 highlights tactical brilliance and historical significance.",
    "tacticalAnalysis": "In this electrifying match, Germany started with a 4-2-3-1 formation, utilizing Kimmich and Gündogan as the double pivot, while Reus, Müller, and Sané promoted a fluid attacking dynamic. Japan, in their 4-3-3 setup, focused on swift counter-attacks and resilience in defense. Japan's manager, Hajime Moriyasu, made pivotal halftime substitutions that revolutionized the game: bringing on Doan and Asano for Minamino and Mitoma completely rejuvenated Japan's attack. Despite Germany dominating possession with 73%, Japan's efficient counter-attacking approach paid off, with Doan and Asano converting under pressure. The goals showcased Germany's defensive lapses and Japan's clinical finishing. This match epitomizes the beauty of tactical adaptability and grit in football.",
    "keyMoments": [
      "33' - Gündogan scores from the penalty spot, giving Germany an early lead.",
      "68' - Doan subbed in, changing the momentum of the game.",
      "75' - Doan equalizes with a powerful strike.",
      "83' - Asano seals the victory for Japan with a well-placed shot."
    ],
    "historicalSignificance": "This match is celebrated as one of the biggest upsets in World Cup history, showcasing Japan's ability to overcome a traditional powerhouse. It marked a turning point in Japan's football narrative and a stark reminder of Germany's vulnerability in tournament football.",
    "topPerformers": [
      {
        "name": "Ritsu Doan",
        "side": "away",
        "position": "FW",
        "rating": 9,
        "note": "Changed the game with a quick equalizer."
      },
      {
        "name": "Takuma Asano",
        "side": "away",
        "position": "FW",
        "rating": 8.9,
        "note": "Game-winner and constant threat on counter-attacks."
      },
      {
        "name": "Joshua Kimmich",
        "side": "home",
        "position": "CDM",
        "rating": 8.3,
        "note": "Controlled midfield despite the loss."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Spain vs Costa Rica — 2022 Group Stage (Group E)
  // ─────────────────────────────────────────────
  {
    "id": "spain-vs-costa-rica-2022-group",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Group Stage (Group E)",
    "date": "November 23, 2022",
    "venue": "Al Thumama Stadium",
    "city": "Doha, Qatar",
    "home": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-3-3",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Unai Simón",
        "Dani Carvajal",
        "Aymeric Laporte",
        "Rodrigo Hernández",
        "Jordi Alba",
        "Sergio Busquets",
        "Gavi",
        "Ferran Torres",
        "Marco Asensio",
        "Alvaro Morata",
        "Carlos Soler"
      ],
      "score": 7
    },
    "away": {
      "name": "Costa Rica",
      "flag": "🇨🇷",
      "formation": "5-4-1",
      "color": "#002B7F",
      "colorDim": "rgba(0,43,127,0.18)",
      "players": [
        "Keylor Navas",
        "Brandon Aguilera",
        "Francisco Calvo",
        "Oscar Duarte",
        "Kendall Waston",
        "Cristian Gamboa",
        "Celso Borges",
        "Yeltsin Tejeda",
        "Gerson Torres",
        "Joel Campbell",
        "Juan Pablo Vargas"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 3.12,
      "away": 0.15
    },
    "possession": {
      "home": 82,
      "away": 18
    },
    "timeline": [
      {
        "minute": "11'",
        "side": "home",
        "player": "Carlos Soler",
        "type": "goal",
        "description": "Soler opened the scoring with a close-range finish after a swift counter."
      },
      {
        "minute": "21'",
        "side": "home",
        "player": "Marco Asensio",
        "type": "goal",
        "description": "Asensio doubled the lead with a precise shot from the edge of the box."
      },
      {
        "minute": "31'",
        "side": "home",
        "player": "Ferran Torres",
        "type": "goal",
        "description": "Torres scored with a right-footed penalty, awarded after a foul."
      },
      {
        "minute": "54'",
        "side": "home",
        "player": "Gavi",
        "type": "goal",
        "description": "Gavi added the fourth with a brilliant header from a corner."
      },
      {
        "minute": "74'",
        "side": "home",
        "player": "Ferran Torres",
        "type": "goal",
        "description": "Torres scored his second with a clever finish after a powerful run."
      },
      {
        "minute": "89'",
        "side": "home",
        "player": "Gavi",
        "type": "goal",
        "description": "Gavi capped off an impressive performance with his second goal."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "Alvaro Morata",
        "type": "goal",
        "description": "Morata entered as a late substitute and rounded off the scoring."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 17,
        "away": 5,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 1,
        "homeWidth": 91,
        "awayWidth": 9
      },
      {
        "label": "Possession",
        "home": 82,
        "away": 18,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Passes",
        "home": 1021,
        "away": 128,
        "homeWidth": 89,
        "awayWidth": 11
      },
      {
        "label": "Pass Accuracy",
        "home": "89%",
        "away": "60%",
        "homeWidth": 89,
        "awayWidth": 11
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 1,
        "homeWidth": 89,
        "awayWidth": 11
      },
      {
        "label": "Fouls",
        "home": 6,
        "away": 12,
        "homeWidth": 33,
        "awayWidth": 67
      },
      {
        "label": "xG",
        "home": "3.12",
        "away": "0.15",
        "homeWidth": 95,
        "awayWidth": 5
      }
    ],
    "metaDescription": "Spain's historic 7-0 win over Costa Rica in the 2022 World Cup showcases their dominance and attacking prowess.",
    "tacticalAnalysis": "Spain utilized a 4-3-3 formation, focusing on ball control and fluid movement. Their central midfield, anchored by Sergio Busquets, allowed for quick transitions from defense to attack. Gavi and Soler provided dynamic support, constantly moving to exploit spaces. Costa Rica, set up in a 5-4-1 formation, struggled to break Spain's pressing and was often outnumbered in midfield. The combination of Spain's tactical discipline and individual brilliance from players like Ferran Torres and Marco Asensio resulted in overwhelming possession, leading to countless goal-scoring opportunities. Costa Rica's tactics proved insubstantial as they failed to cope with Spain's attacking waves, culminating in a significant margin of victory for the European side.",
    "keyMoments": [
      "11' - Soler scores, setting the tone for Spain's dominance.",
      "21' - Asensio's goal showcases Spain's attacking fluidity.",
      "31' - Torres converts a penalty, marking Spain's third.",
      "54' - Gavi's header emphasizes Spain's set-piece threat.",
      "74' - Torres scores again, continuing Spain's relentless assault.",
      "90' - Morata adds the final touch to the scoreline."
    ],
    "historicalSignificance": "This match is significant as it highlights Spain's resurgence in international football, showcasing their attacking talent and tactical superiority. Winning by such a margin is a record for Spain in World Cup group stages, emphasizing their position as a formidable contender in the tournament.",
    "topPerformers": [
      {
        "name": "Gavi",
        "side": "home",
        "position": "CM",
        "rating": 9.5,
        "note": "Scored two goals and controlled the midfield."
      },
      {
        "name": "Ferran Torres",
        "side": "home",
        "position": "ST",
        "rating": 9,
        "note": "Netted two goals and was influential in attack."
      },
      {
        "name": "Keylor Navas",
        "side": "away",
        "position": "GK",
        "rating": 7,
        "note": "Made several key saves to prevent a larger defeat."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Cameroon vs Brazil — 2022 Group Stage (Group G)
  // ─────────────────────────────────────────────
  {
    "id": "cameroon-vs-brazil-2022-group",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Group Stage (Group G)",
    "date": "December 2, 2022",
    "venue": "Lusail Stadium",
    "city": "Lusail, Qatar",
    "home": {
      "name": "Cameroon",
      "flag": "🇨🇲",
      "formation": "4-3-3",
      "color": "#007A5E",
      "colorDim": "rgba(0,122,94,0.18)",
      "players": [
        "Andre Onana",
        "Nicolas Nkoulou",
        "Jean-Charles Castelletto",
        "Collins Fai",
        "Nuytin Biga",
        "André-Frank Zambo Anguissa",
        "Martin Hongla",
        "Gaëtan Nkana",
        "Vincent Aboubakar",
        "Eric Maxim Choupo-Moting",
        "Karl Toko Ekambi"
      ],
      "score": 1
    },
    "away": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Ederson",
        "Danilo",
        "Eder Militão",
        "Thiago Silva",
        "Alex Sandro",
        "Casemiro",
        "Fred",
        "Bruno Guimarães",
        "Raphinha",
        "Gabriel Jesus",
        "Rodrygo"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.2,
      "away": 0.6
    },
    "possession": {
      "home": 38,
      "away": 62
    },
    "timeline": [
      {
        "minute": "92'",
        "side": "home",
        "player": "Vincent Aboubakar",
        "type": "goal",
        "description": "Header from a corner kick, sealing Cameroon's victory."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 10,
        "away": 15,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 5,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Possession",
        "home": 38,
        "away": 62,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Passes",
        "home": 325,
        "away": 495,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Pass Accuracy",
        "home": "78%",
        "away": "83%",
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 6,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "1.20",
        "away": "0.60",
        "homeWidth": 67,
        "awayWidth": 33
      }
    ],
    "metaDescription": "Cameroon claimed a remarkable 1-0 victory over Brazil in the 2022 World Cup group stage, highlighting their fighting spirit.",
    "tacticalAnalysis": "The match showcased Cameroon deploying a solid 4-3-3 formation, emphasizing physical play and counter-attacks. André Onana was pivotal in goal, providing stability. The midfield trio of Zambo Anguissa, Martin Hongla, and Franck Zambo Anguissa controlled the central areas, with Hongla often intercepting Brazilian advances. Meanwhile, Cameroon exploited Brazil's weakened lineup, pressing aggressively and looking for quick transitions. Brazil, in their 4-2-3-1 setup, aimed to dominate possession but struggled to penetrate the organized Cameroonian defense. Their key players, resting due to secured qualification, led to a lack of creativity upfront. The match turned dramatically with Aboubakar's late header, an example of how grit can triumph over technical mastery in football.",
    "keyMoments": [
      "92' - Aboubakar scores a header from a corner, securing Cameroon's first victory in a World Cup group stage since 2002.",
      "78' - A close shot from Raphinha hits the crossbar, highlighting Brazil's struggle.",
      "67' - Substitution: Emmanuel Mvogo replaced Andre Onana, sealing the defense's resolve.",
      "45' - Brazil switches tactics in the second half, bringing on Rodrygo to increase attacking options."
    ],
    "historicalSignificance": "This match is remarkable as Cameroon achieved their first group stage win since 2002, a moment of pride for African football. Additionally, it demonstrated the unpredictability of football, with Brazil's second-string side falling to an underdog in a crucial fixture.",
    "topPerformers": [
      {
        "name": "Andre Onana",
        "side": "home",
        "position": "GK",
        "rating": 9,
        "note": "Made crucial saves to deny Brazil throughout the match."
      },
      {
        "name": "Vincent Aboubakar",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Scored the winning goal with a powerful header in the dying moments."
      },
      {
        "name": "Thiago Silva",
        "side": "away",
        "position": "CB",
        "rating": 7.5,
        "note": "Provided defensive leadership despite Brazil's loss."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Poland — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-poland-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 4, 2022",
    "venue": "Al Thumama Stadium",
    "city": "Doha, Qatar",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-2-3-1",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Hugo Lloris",
        "Benjamin Pavard",
        "Raphaël Varane",
        "Lucas Hernández",
        "Presnel Kimpembe",
        "N'Golo Kanté",
        "Adrien Rabiot",
        "Kingsley Coman",
        "Antoine Griezmann",
        "Kylian Mbappé",
        "Olivier Giroud"
      ],
      "score": 3
    },
    "away": {
      "name": "Poland",
      "flag": "🇵🇱",
      "formation": "4-3-3",
      "color": "#DC143C",
      "colorDim": "rgba(220,20,60,0.18)",
      "players": [
        "Wojciech Szczęsny",
        "Matty Cash",
        "Kamil Glik",
        "Jakub Kiwior",
        "Tymoteusz Puchacz",
        "Grzegorz Krychowiak",
        "Piotr Zieliński",
        "Krzysztof Piątek",
        "Robert Lewandowski",
        "Karol Świderski",
        "Zalewski"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.54,
      "away": 0.87
    },
    "possession": {
      "home": 62,
      "away": 38
    },
    "timeline": [
      {
        "minute": "4'",
        "side": "home",
        "player": "Olivier Giroud",
        "type": "goal",
        "description": "Headed in from a Griezmann cross."
      },
      {
        "minute": "28'",
        "side": "home",
        "player": "Kylian Mbappé",
        "type": "goal",
        "description": "Unleashed a long-range shot into the top corner."
      },
      {
        "minute": "45'",
        "side": "home",
        "player": "Kylian Mbappé",
        "type": "goal",
        "description": "Scored with a close-range finish."
      },
      {
        "minute": "76'",
        "side": "away",
        "player": "Robert Lewandowski",
        "type": "pen_goal",
        "description": "Converted a penalty after a foul in the box."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 17,
        "away": 6,
        "homeWidth": 74,
        "awayWidth": 26
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 3,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Possession",
        "home": 62,
        "away": 38,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Passes",
        "home": 541,
        "away": 319,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Pass Accuracy",
        "home": "88%",
        "away": "81%",
        "homeWidth": 50,
        "awayWidth": 50
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Fouls",
        "home": 9,
        "away": 12,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "2.54",
        "away": "0.87",
        "homeWidth": 100,
        "awayWidth": 34
      }
    ],
    "metaDescription": "France dominates Poland with a remarkable 3-1 victory in the Round of 16 at the FIFA World Cup 2022, showcasing Mbappé's brilliance.",
    "tacticalAnalysis": "France deployed a 4-2-3-1 formation, providing a balanced setup with a solid midfield pivot in Kanté and Rabiot. The width was provided by Coman and Mbappé, who caused problems for Poland's defense with their pace and dribbling. Giroud's positioning was critical; he exploited gaps in Poland's backline, leading to his opening goal. Poland's 4-3-3 formation struggled to contain France's fluid attacking play, often leaving Lewandowski isolated. The lack of support in the midfield led to possession dominance for France, who effectively transitioned from defense to attack. Poland's late penalty goal by Lewandowski was a consolation, but France proved their status as favorites with this commanding performance.",
    "keyMoments": [
      "4' - Giroud opens the scoring with a header.",
      "28' - Mbappé scores a stunning long-range goal.",
      "45' - Mbappé nets his second, extending the lead to three.",
      "76' - Lewandowski converts a penalty for Poland."
    ],
    "historicalSignificance": "This match marked a significant moment in the FIFA World Cup 2022, as France showcased their attacking prowess and tactical superiority. Kylian Mbappé's performance underlined his rising status as one of the world's elite players.",
    "topPerformers": [
      {
        "name": "Kylian Mbappé",
        "side": "home",
        "position": "LW",
        "rating": 9.4,
        "note": "Scored two goals, displaying phenomenal skill and accuracy."
      },
      {
        "name": "Olivier Giroud",
        "side": "home",
        "position": "ST",
        "rating": 8.7,
        "note": "Critical in attack, broke the French all-time scoring record."
      },
      {
        "name": "Robert Lewandowski",
        "side": "away",
        "position": "ST",
        "rating": 7.8,
        "note": "Scored Poland's only goal, showing persistence despite limited service."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Senegal — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-senegal-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 4, 2022",
    "venue": "Al Bayt Stadium",
    "city": "Al Khor, Qatar",
    "home": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "4-3-3",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Jordan Pickford",
        "Kieran Trippier",
        "Harry Maguire",
        "John Stones",
        "Luke Shaw",
        "Declan Rice",
        "Jude Bellingham",
        "Jordan Henderson",
        "Bukayo Saka",
        "Harry Kane",
        "Raheem Sterling"
      ],
      "score": 3
    },
    "away": {
      "name": "Senegal",
      "flag": "🇸🇳",
      "formation": "4-3-3",
      "color": "#00853F",
      "colorDim": "rgba(0,133,63,0.18)",
      "players": [
        "Edouard Mendy",
        "Youssouf Sabaly",
        "Kalidou Koulibaly",
        "Abdou Diallo",
        "Achraf Hakimi",
        "Nampalys Mendy",
        "Idrissa Gueye",
        "Moussa Sarr",
        "Sadio Mané",
        "Boulaye Dia",
        "Ismaïla Sarr"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.74,
      "away": 0.34
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "38'",
        "side": "home",
        "player": "Jordan Henderson",
        "type": "goal",
        "description": "Opened the scoring with a close-range finish."
      },
      {
        "minute": "79'",
        "side": "home",
        "player": "Bukayo Saka",
        "type": "goal",
        "description": "Doubled the lead with a well-placed shot into the corner."
      },
      {
        "minute": "81'",
        "side": "home",
        "player": "Harry Kane",
        "type": "goal",
        "description": "Capped a brilliant move with a powerful strike."
      },
      {
        "minute": "90'",
        "side": "away",
        "player": "Kalidou Koulibaly",
        "type": "yellow",
        "description": "Received a yellow card for a late challenge."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 5,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 1,
        "homeWidth": 86,
        "awayWidth": 14
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 500,
        "away": 370,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "75%",
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 3,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 15,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "xG",
        "home": "2.74",
        "away": "0.34",
        "homeWidth": 100,
        "awayWidth": 0
      }
    ],
    "metaDescription": "England delivered a decisive performance against Senegal, winning 3-0 to progress to the quarter-finals of the FIFA World Cup 2022.",
    "tacticalAnalysis": "England deployed a 4-3-3 formation, with Harry Kane as the central striker supported by wingers Saka and Sterling. They utilized a high press, forcing Senegal into mistakes while maintaining control through Bellingham and Rice in midfield. Senegal lined up similarly but struggled to create chances. England's first goal came from Henderson, who arrived late in the box to finish a well-worked move. Saka showcased his pace and dribbling ability for the second, while Kane highlighted his clinical finishing for the third, cementing England's dominance in the second half. Senegal, although threatening on the break, lacked the cohesion to threaten England effectively.",
    "keyMoments": [
      "38' - Henderson scores the opener, giving England a crucial lead.",
      "79' - Saka doubles the advantage, showcasing England's attacking prowess.",
      "81' - Kane seals the match with a powerful shot after a slick move.",
      "90' - Koulibaly booked, reflecting Senegal's frustrations."
    ],
    "historicalSignificance": "This match marked England's authoritative performance in the knockout stage of the World Cup, showcasing their attacking talent and tactical discipline. It also signified Senegal's disappointing exit as reigning African champions, unable to replicate their group stage form.",
    "topPerformers": [
      {
        "name": "Jude Bellingham",
        "side": "home",
        "position": "CM",
        "rating": 9.1,
        "note": "Dictated the tempo and provided key passes."
      },
      {
        "name": "Harry Kane",
        "side": "home",
        "position": "ST",
        "rating": 9.5,
        "note": "His movement and goal-scoring ability were pivotal."
      },
      {
        "name": "Edouard Mendy",
        "side": "away",
        "position": "GK",
        "rating": 7.4,
        "note": "Made several crucial saves despite the scoreline."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs USA — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-usa-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 3, 2022",
    "venue": "Khalifa International Stadium",
    "city": "Ar-Rayyan, Qatar",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "3-5-2",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Andries Noppert",
        "Virgil van Dijk",
        "Matthijs de Ligt",
        "Nathan Aké",
        "Denzel Dumfries",
        "Frenkie de Jong",
        "Marten de Roon",
        "Daley Blind",
        "Memphis Depay",
        "Vincent Janssen",
        "Steven Bergwijn"
      ],
      "score": 3
    },
    "away": {
      "name": "USA",
      "flag": "🇺🇸",
      "formation": "4-3-3",
      "color": "#3C3B6E",
      "colorDim": "rgba(60,59,110,0.18)",
      "players": [
        "Matt Turner",
        "Sergiño Dest",
        "Walker Zimmerman",
        "Aaron Long",
        "Antonee Robinson",
        "Tyler Adams",
        "Weston McKennie",
        "Yunus Musah",
        "Christian Pulisic",
        "Brenden Aaronson",
        "Josh Sargent"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.67,
      "away": 0.93
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "10'",
        "side": "home",
        "player": "Memphis Depay",
        "type": "goal",
        "description": "Memphis Depay broke the deadlock with a close-range shot."
      },
      {
        "minute": "41'",
        "side": "away",
        "player": "Christian Pulisic",
        "type": "goal",
        "description": "Christian Pulisic equalized for the USA with a well-placed shot."
      },
      {
        "minute": "81'",
        "side": "home",
        "player": "Denzel Dumfries",
        "type": "goal",
        "description": "Denzel Dumfries scored the decisive third goal for the Netherlands."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 15,
        "away": 8,
        "homeWidth": 65,
        "awayWidth": 35
      },
      {
        "label": "Shots on Target",
        "home": 7,
        "away": 3,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Passes",
        "home": 523,
        "away": 345,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "89%",
        "away": "77%",
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 2,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 14,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "xG",
        "home": "2.67",
        "away": "0.93",
        "homeWidth": 73,
        "awayWidth": 27
      }
    ],
    "metaDescription": "Netherlands defeated the USA 3-1 in the Round of 16 of the FIFA World Cup 2022, showcasing tactical maturity and standout performances.",
    "tacticalAnalysis": "The Netherlands deployed a 3-5-2 formation, with Memphis Depay and Vincent Janssen leading the attack. Depay's mobility and creativity were pivotal, allowing him to exploit spaces in the USA's defensive line. The midfield trio of Frenkie de Jong, Marten de Roon, and Daley Blind provided a solid base with excellent ball retention and transition capability. Denzel Dumfries excelled as a wing-back, contributing to both attack and defense. USA played a 4-3-3, utilizing Pulisic and Aaronson as wide forwards. Despite stretching the field, they struggled to break down the Dutch defensive trio. Van Gaal's tactical decisions, particularly in midfield control, proved effective, leading to a higher possession rate and danger in the final third.",
    "keyMoments": [
      "10' - Memphis Depay scores the opening goal, showcasing quick play.",
      "41' - Christian Pulisic levels the score, responding well to pressure.",
      "81' - Denzel Dumfries seals the victory with a powerful finish.",
      "Substitutions in the second half freshened up the US attack but were unable to find another goal."
    ],
    "historicalSignificance": "This match marked the Netherlands' strong performance in the knockout stage, reinforcing their reputation as a tactical powerhouse. The USA, despite defeat, showed significant progress in their competitive stature on the world stage.",
    "topPerformers": [
      {
        "name": "Denzel Dumfries",
        "side": "home",
        "position": "RB",
        "rating": 9.2,
        "note": "Outstanding in both attack and defense, scoring the third goal."
      },
      {
        "name": "Christian Pulisic",
        "side": "away",
        "position": "LW",
        "rating": 8.5,
        "note": "Only goalscorer for USA, demonstrating skill and tenacity."
      },
      {
        "name": "Memphis Depay",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Opened the scoring and was a constant threat to the USA defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Argentina vs Australia — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "argentina-vs-australia-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 3, 2022",
    "venue": "Ahmad Bin Ali Stadium",
    "city": "Ar-Rayyan, Qatar",
    "home": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Emiliano Martinez",
        "Nahuel Molina",
        "Cristian Romero",
        "Lisandro Martinez",
        "Marcos Acuña",
        "Rodrigo De Paul",
        "Leandro Paredes",
        "Lionel Messi",
        "Ángel Di María",
        "Julián Álvarez",
        "Lautaro Martínez"
      ],
      "score": 2
    },
    "away": {
      "name": "Australia",
      "flag": "🇦🇺",
      "formation": "4-4-2",
      "color": "#FFD700",
      "colorDim": "rgba(255,215,0,0.18)",
      "players": [
        "Mat Ryan",
        "Miloš Degenek",
        "Kye Rowles",
        "Harry Souttar",
        "Aziz Behich",
        "Jackson Irvine",
        "Aaron Mooy",
        "Tom Rogic",
        "Mathew Leckie",
        "Mitchell Duke",
        "Craig Goodwin"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.1,
      "away": 0.9
    },
    "possession": {
      "home": 54,
      "away": 46
    },
    "timeline": [
      {
        "minute": "35'",
        "side": "home",
        "player": "Lionel Messi",
        "type": "goal",
        "description": "Messi scored a low shot from outside the box."
      },
      {
        "minute": "57'",
        "side": "home",
        "player": "Julián Álvarez",
        "type": "goal",
        "description": "Álvarez doubled the lead after intercepting a pass."
      },
      {
        "minute": "77'",
        "side": "away",
        "player": "Craig Goodwin",
        "type": "goal",
        "description": "Goodwin scored with a deflected effort from outside the area."
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Mat Ryan",
        "type": "yellow",
        "description": "Ryan received a yellow card for time-wasting."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 8,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 54,
        "away": 46,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Passes",
        "home": 480,
        "away": 420,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "80%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 2,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 15,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "2.10",
        "away": "0.90",
        "homeWidth": 70,
        "awayWidth": 30
      }
    ],
    "metaDescription": "Argentina edges past Australia in a thrilling knockout match, marked by Messi's historic goal and a stirring comeback from the Socceroos.",
    "tacticalAnalysis": "Argentina approached this match with a 4-3-3 formation that allowed their creative players to dominate the midfield while providing width in attack. Messi frequently dropped deeper to orchestrate play, allowing Álvarez and Di María to stretch the Australian defense. Conversely, Australia set up in a compact 4-4-2 formation, aiming to break on the counter-attack with Leckie and Duke up front. The Socceroos were resilient, with a strong defensive organization, but struggled to contain Argentina's fluid attacking movement, particularly in the first half. Messi’s goal came from a well-worked move, showing Argentina's dominance and creativity. Following Argentina's second goal, Australia managed to respond with Goodwin's deflected strike, briefly igniting hopes of a comeback. However, Argentina’s tactical discipline and experience saw them through the closing stages.",
    "keyMoments": [
      "35' - Messi scores Argentina's opener, showcasing his iconic left foot.",
      "57' - Álvarez capitalizes on a defensive blunder to score Argentina's second.",
      "77' - Goodwin pulls one back for Australia with a deflected shot.",
      "90' - Ryan receives a yellow card for time-wasting."
    ],
    "historicalSignificance": "This match marks Argentina's significant step towards reclaiming World Cup glory, while showcasing Messi's vital role in crucial knockout rounds. It was memorable not only for Messi's first knockout goal but also for Australia's relentless effort, reinforcing the competitive spirit in international football.",
    "topPerformers": [
      {
        "name": "Lionel Messi",
        "side": "home",
        "position": "CAM",
        "rating": 9,
        "note": "Dominated the midfield and delivered the opener."
      },
      {
        "name": "Julián Álvarez",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Crucial in attack, scored the second goal."
      },
      {
        "name": "Craig Goodwin",
        "side": "away",
        "position": "LW",
        "rating": 8,
        "note": "Scored Australia’s only goal with a great effort."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Morocco vs Spain — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "morocco-vs-spain-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 6, 2022",
    "venue": "Education City Stadium",
    "city": "Ar-Rayyan, Qatar",
    "home": {
      "name": "Morocco",
      "flag": "🇲🇦",
      "formation": "4-1-4-1",
      "color": "#C1272D",
      "colorDim": "rgba(193,39,45,0.18)",
      "players": [
        "Yassine Bounou",
        "Achraf Hakimi",
        "Romain Saïss",
        "Nayef Aguerd",
        "Noussair Mazraoui",
        "Sofyan Amrabat",
        "Azzedine Ounahi",
        "Hakim Ziyech",
        "Youssef En-Nesyri",
        "Abde Ezzalzouli",
        "Sofiane Boufal"
      ],
      "score": 0
    },
    "away": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-3-3",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Unai Simón",
        "César Azpilicueta",
        "Eric García",
        "Pau Torres",
        "Jordi Alba",
        "Sergio Busquets",
        "Gavi",
        "Pedri",
        "Ferran Torres",
        "Marco Asensio",
        "Álvaro Morata"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "3-0",
    "xG": {
      "home": 0.55,
      "away": 2.15
    },
    "possession": {
      "home": 23,
      "away": 77
    },
    "timeline": [
      {
        "minute": "12'",
        "side": "away",
        "player": "Ferran Torres",
        "type": "yellow",
        "description": "Foul on Achraf Hakimi"
      },
      {
        "minute": "69'",
        "side": "neutral",
        "player": "Álvaro Morata",
        "type": "sub",
        "description": "Replaced by Gerard Moreno"
      },
      {
        "minute": "90'",
        "side": "away",
        "player": "Marco Asensio",
        "type": "yellow",
        "description": "Foul on Azzedine Ounahi"
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Bono",
        "type": "pen_goal",
        "description": "Saved the penalty from Manuel Lemos"
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Bono",
        "type": "pen_goal",
        "description": "Saved the penalty from Álvaro Morata"
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Bono",
        "type": "pen_goal",
        "description": "Saved the penalty from Sergio Busquets"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 5,
        "away": 16,
        "homeWidth": 23,
        "awayWidth": 77
      },
      {
        "label": "Shots on Target",
        "home": 1,
        "away": 5,
        "homeWidth": 20,
        "awayWidth": 80
      },
      {
        "label": "Possession",
        "home": 23,
        "away": 77,
        "homeWidth": 23,
        "awayWidth": 77
      },
      {
        "label": "Passes",
        "home": 204,
        "away": 1066,
        "homeWidth": 16,
        "awayWidth": 84
      },
      {
        "label": "Pass Accuracy",
        "home": "75%",
        "away": "92%",
        "homeWidth": 75,
        "awayWidth": 92
      },
      {
        "label": "Corners",
        "home": 1,
        "away": 7,
        "homeWidth": 12,
        "awayWidth": 88
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 12,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "xG",
        "home": "0.55",
        "away": "2.15",
        "homeWidth": 20,
        "awayWidth": 80
      }
    ],
    "metaDescription": "Morocco shock Spain in a penalty shootout to advance to the quarter-finals of the FIFA World Cup 2022.",
    "tacticalAnalysis": "Morocco employed a disciplined 4-1-4-1 formation, effectively stifling Spain's build-up play, forcing them to play through long passes which were easily intercepted. The solid defensive line led by Romain Saïss and Nayef Aguerd managed to keep a compact shape, with Sofyan Amrabat playing a pivotal role in breaking up play. Spain, utilizing a 4-3-3 formation, struggled to penetrate Morocco's low block. The Spanish team enjoyed 77% possession, but often found themselves passing sideways, constantly looking for openings, which never came. Despite dominating possession, Spain's lack of clinical finishing led to a dismal return in terms of scoring opportunities. In the penalty shootout, Bono emerged as the hero, saving all three Spanish penalties, thereby clinching the historic victory for Morocco.",
    "keyMoments": [
      "12' - Ferran Torres booked for a foul on Achraf Hakimi",
      "90' - Marco Asensio booked for a foul on Azzedine Ounahi",
      "120' - Bono saves the first penalty from Lemos",
      "120' - Bono saves the second penalty from Morata",
      "120' - Bono saves the last penalty from Busquets"
    ],
    "historicalSignificance": "This match marked a remarkable upset in World Cup history, as Morocco eliminated Spain, a traditional footballing powerhouse. It showcased the effectiveness of a disciplined defensive strategy against a possession-dominant team and highlighted Morocco's rise in international football.",
    "topPerformers": [
      {
        "name": "Yassine Bounou",
        "side": "home",
        "position": "GK",
        "rating": 9.5,
        "note": "Outstanding saves in penalty shootout and throughout match."
      },
      {
        "name": "Sofyan Amrabat",
        "side": "home",
        "position": "CDM",
        "rating": 8.8,
        "note": "Controlled midfield and broke down Spanish plays."
      },
      {
        "name": "Álvaro Morata",
        "side": "away",
        "position": "ST",
        "rating": 7,
        "note": "Failed to convert critical chances but was active throughout."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Portugal vs Switzerland — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "portugal-vs-switzerland-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 6, 2022",
    "venue": "Lusail Stadium",
    "city": "Lusail, Qatar",
    "home": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Diogo Costa",
        "Diogo Dalot",
        "Ruben Dias",
        "Pepe",
        "João Cancelo",
        "Otávio",
        "Ruben Neves",
        "Bernardo Silva",
        "Gonçalo Ramos",
        "Bruno Fernandes",
        "Cristiano Ronaldo"
      ],
      "score": 6
    },
    "away": {
      "name": "Switzerland",
      "flag": "🇨🇭",
      "formation": "4-2-3-1",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Yann Sommer",
        "Kevin Mbabu",
        "Manuel Akanji",
        "Nico Elvedi",
        "Ricardo Rodríguez",
        "Granite Xhaka",
        "Denis Zakaria",
        "Xherdan Shaqiri",
        "Breel Embolo",
        "Yannick Ferreira Carrasco",
        "Silvan Widmer"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 3.48,
      "away": 0.67
    },
    "possession": {
      "home": 62,
      "away": 38
    },
    "timeline": [
      {
        "minute": "17'",
        "side": "home",
        "player": "Gonçalo Ramos",
        "type": "goal",
        "description": "Ramos scores his first goal with a powerful shot from outside the box."
      },
      {
        "minute": "30'",
        "side": "home",
        "player": "Gonçalo Ramos",
        "type": "goal",
        "description": "Ramos nets his second after a quick counter-attack."
      },
      {
        "minute": "39'",
        "side": "home",
        "player": "Pepe",
        "type": "goal",
        "description": "Pepe heads in from a corner kick, extending the lead."
      },
      {
        "minute": "55'",
        "side": "home",
        "player": "Gonçalo Ramos",
        "type": "goal",
        "description": "Completes his hat-trick with a close-range finish."
      },
      {
        "minute": "58'",
        "side": "away",
        "player": "Breel Embolo",
        "type": "goal",
        "description": "Embolo scores a consolation goal from a rebound."
      },
      {
        "minute": "66'",
        "side": "home",
        "player": "Bruno Fernandes",
        "type": "goal",
        "description": "Fernandes scores the fifth with a long-range free kick."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Cristiano Ronaldo",
        "type": "goal",
        "description": "Ronaldo scores with a header from a cross."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 23,
        "away": 9,
        "homeWidth": 72,
        "awayWidth": 28
      },
      {
        "label": "Shots on Target",
        "home": 12,
        "away": 3,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Possession",
        "home": 62,
        "away": 38,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Passes",
        "home": 539,
        "away": 347,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "75%",
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 2,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 16,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "xG",
        "home": "3.48",
        "away": "0.67",
        "homeWidth": 84,
        "awayWidth": 16
      }
    ],
    "metaDescription": "Portugal dominates Switzerland in a spectacular Round of 16 match, showcasing their attacking prowess in the FIFA World Cup 2022.",
    "tacticalAnalysis": "Portugal lined up in a 4-3-3 formation, leveraging the wide positions and quick transitions to exploit Switzerland's defensive setup. Gonçalo Ramos, starting in place of the iconic Cristiano Ronaldo, was pivotal, demonstrating exceptional movement and finishing ability, scoring a remarkable hat-trick. The Portuguese midfield, led by Bruno Fernandes and Otávio, maintained control, facilitating quick combinations that overwhelmed the Swiss defense. Switzerland, in a 4-2-3-1 formation, struggled to match Portugal’s intensity and clinical finishing. Their two-man pivot found it challenging to contain the fluid attacking rotations of Portugal. The central defenders, especially Akanji and Elvedi, were often isolated against Portugal's pace, leading to vulnerability in transitions, which Portugal exploited thoroughly. The goals came from decisive moments; Ramos’ basic understanding of timing and positioning allowed him to thrive in spaces left by the Swiss defense. Moreover, Pepe's aerial threat was evident during set pieces. The tactical shift in the second half saw more direct plays from Portugal with Ronaldo's introduction bringing further chaos to the Swiss backline. This match showcased not only Portugal's attacking capabilities but also their depth, even in the absence of a world star such as Ronaldo.",
    "keyMoments": [
      "17' - Gonçalo Ramos opens the scoring with a stunning strike.",
      "30' - Ramos doubles the lead, showing composure in the box.",
      "39' - Pepe caps off a corner with a beautiful header.",
      "55' - Ramos completes his hat-trick, sealing his place in history.",
      "66' - Bruno Fernandes extends the lead with a brilliant free-kick."
    ],
    "historicalSignificance": "This match is remembered as one of Portugal's greatest World Cup performances, highlighting their attacking prowess without the presence of Cristiano Ronaldo. It exemplifies the team's depth and potential, showcasing emerging talents like Gonçalo Ramos on the world stage.",
    "topPerformers": [
      {
        "name": "Gonçalo Ramos",
        "side": "home",
        "position": "ST",
        "rating": 9.2,
        "note": "Outstanding performance with a hat-trick that demonstrated his poise and skill."
      },
      {
        "name": "Pepe",
        "side": "home",
        "position": "CB",
        "rating": 8.5,
        "note": "Commanding in defense and scored a crucial goal."
      },
      {
        "name": "Yann Sommer",
        "side": "away",
        "position": "GK",
        "rating": 7.2,
        "note": "Made several crucial saves despite the scoreline."
      },
      {
        "name": "Bruno Fernandes",
        "side": "home",
        "position": "CM",
        "rating": 8.8,
        "note": "Controlled the midfield and contributed significantly with a goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs South Korea — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-south-korea-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 5, 2022",
    "venue": "Stadium 974",
    "city": "Doha, Qatar",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Alisson Becker",
        "Danilo",
        "Marquinhos",
        "Thiago Silva",
        "Alex Sandro",
        "Casemiro",
        "Lucas Paquetá",
        "Neymar",
        "Vinícius Jr.",
        "Richarlison",
        "Raphinha"
      ],
      "score": 4
    },
    "away": {
      "name": "South Korea",
      "flag": "🇰🇷",
      "formation": "4-3-3",
      "color": "#CD2E3A",
      "colorDim": "rgba(205,46,58,0.18)",
      "players": [
        "Kim Seung-gyu",
        "Lee Yong",
        "Kim Min-jae",
        "Jang Hyun-soo",
        "Kim Jin-su",
        "Hwang In-beom",
        "Jung Woo-young",
        "Lee Jae-sung",
        "Son Heung-min",
        "Hwang Hee-chan",
        "Cho Gue-sung"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 3.67,
      "away": 0.55
    },
    "possession": {
      "home": 62,
      "away": 38
    },
    "timeline": [
      {
        "minute": "7'",
        "side": "home",
        "player": "Vinícius Jr.",
        "type": "goal",
        "description": "Opened the scoring with a left-footed strike from a cross."
      },
      {
        "minute": "13'",
        "side": "home",
        "player": "Neymar",
        "type": "pen_goal",
        "description": "Converted a penalty after Richarlison was fouled."
      },
      {
        "minute": "29'",
        "side": "home",
        "player": "Richarlison",
        "type": "goal",
        "description": "Scored with a close-range header from a corner."
      },
      {
        "minute": "36'",
        "side": "home",
        "player": "Lucas Paquetá",
        "type": "goal",
        "description": "Finished off a well-worked move with a volley."
      },
      {
        "minute": "76'",
        "side": "away",
        "player": "Paik Seung-ho",
        "type": "goal",
        "description": "Scored a stunning long-range goal to give hope to South Korea."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 22,
        "away": 6,
        "homeWidth": 78,
        "awayWidth": 22
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 3,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Possession",
        "home": 62,
        "away": 38,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Passes",
        "home": 505,
        "away": 318,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "81%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 10,
        "away": 2,
        "homeWidth": 83,
        "awayWidth": 17
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 14,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "xG",
        "home": "3.67",
        "away": "0.55",
        "homeWidth": 87,
        "awayWidth": 13
      }
    ],
    "metaDescription": "Brazil showcased their samba football with a dominant 4-1 win over South Korea in the 2022 World Cup round of 16, advancing to the quarterfinals.",
    "tacticalAnalysis": "Brazil employed a 4-2-3-1 formation that allowed their forwards to interchange positions fluidly. Neymar played a pivotal role as a CAM, dictating the tempo and creating chances. The front three (Vinícius Jr., Richarlison, and Raphinha) exploited South Korea's defense with quick movements and precise passing. South Korea, on the other hand, set up in a 4-3-3 but struggled to maintain composure under Brazil's pressing game and often left spaces that were exploited. The first half was an exhibition of Brazil's attacking prowess, with South Korea unable to respond effectively. Paik Seung-ho's remarkable long-range effort was a rare moment of class from the South Koreans in an otherwise lopsided encounter. Manager Tite's decisions to push forward and maintain high intensity paid off handsomely, ensuring Brazil's dominance throughout.",
    "keyMoments": [
      "7' - Vinícius Jr. scores to open the floodgates.",
      "13' - Neymar rolls in a penalty, doubling Brazil's lead.",
      "29' - Richarlison heads in a third goal, showcasing Brazil's aerial strength.",
      "36' - Lucas Paquetá adds to the tally with a volley.",
      "76' - Paik Seung-ho scores a stunning long-range goal for South Korea."
    ],
    "historicalSignificance": "This match highlighted Brazil's return to form under pressure in the knockout stages of the World Cup. With a blend of youth and experience, they displayed a potent attacking strategy, reinforcing their position as a favorite for the tournament. South Korea's sole goal was a testament to their resilience, but the contest underscored the gap between traditional football powerhouses and emerging teams.",
    "topPerformers": [
      {
        "name": "Richarlison",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Critical in attack, contributing with a goal and an assist."
      },
      {
        "name": "Neymar",
        "side": "home",
        "position": "CAM",
        "rating": 9,
        "note": "Dominated the midfield and effectively converted a penalty."
      },
      {
        "name": "Paik Seung-ho",
        "side": "away",
        "position": "CM",
        "rating": 8.5,
        "note": "Scored a brilliant long-range goal, showcasing technical skill."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Croatia vs Japan — 2022 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "croatia-vs-japan-2022-r16",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Round of 16",
    "date": "December 5, 2022",
    "venue": "Al Janoub Stadium",
    "city": "Al Wakrah, Qatar",
    "home": {
      "name": "Croatia",
      "flag": "🇭🇷",
      "formation": "4-3-3",
      "color": "#CC1122",
      "colorDim": "rgba(204,17,34,0.18)",
      "players": [
        "Dominik Livaković",
        "Dejan Lovren",
        "Gvardiol",
        "Borna Barišić",
        "Josip Juranović",
        "Marcelo Brozović",
        "Luka Modrić",
        "Mateo Kovačić",
        "Ivan Perišić",
        "Ante Rebić",
        "Andrej Kramarić"
      ],
      "score": 1
    },
    "away": {
      "name": "Japan",
      "flag": "🇯🇵",
      "formation": "4-3-3",
      "color": "#BC002D",
      "colorDim": "rgba(188,0,45,0.18)",
      "players": [
        "Shuichi Gonda",
        "Maya Yoshida",
        "Takehiro Tomiyasu",
        "Yuuya Gustavo",
        "Yuto Nagatomo",
        "Wataru Endo",
        "Hidemasa Morita",
        "Daichi Kamada",
        "Kaoru Mitoma",
        "Takumi Minamino",
        "Daizen Maeda"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "3-1",
    "xG": {
      "home": 1.82,
      "away": 0.98
    },
    "possession": {
      "home": 56,
      "away": 44
    },
    "timeline": [
      {
        "minute": "43'",
        "side": "away",
        "player": "Daizen Maeda",
        "type": "goal",
        "description": "Maeda opens the scoring with a close-range finish from a corner."
      },
      {
        "minute": "55'",
        "side": "home",
        "player": "Ivan Perišić",
        "type": "goal",
        "description": "Perišić brilliantly equalizes with a header from a cross."
      },
      {
        "minute": "67'",
        "side": "home",
        "player": "Luka Modrić",
        "type": "sub",
        "description": "Modrić substituted for fresh legs."
      },
      {
        "minute": "89'",
        "side": "neutral",
        "player": "Takehiro Tomiyasu",
        "type": "yellow",
        "description": "Tomiyasu receives a yellow card for a foul."
      },
      {
        "minute": "90+5'",
        "side": "neutral",
        "player": "Shuichi Gonda",
        "type": "yellow",
        "description": "Gonda gets booked for time-wasting."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 15,
        "away": 9,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 3,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Possession",
        "home": 56,
        "away": 44,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Passes",
        "home": 480,
        "away": 320,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "76%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 4,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 12,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "xG",
        "home": "1.82",
        "away": "0.98",
        "homeWidth": 65,
        "awayWidth": 35
      }
    ],
    "metaDescription": "Croatia's nail-biting clash against Japan in the FIFA World Cup 2022 Round of 16 ended in penalties after a 1-1 draw.",
    "tacticalAnalysis": "Croatia utilized a 4-3-3 formation focusing on possession and buildup play, with Modrić orchestrating from midfield and Perišić attacking from the left flank. Japan, in a similar 4-3-3, relied on counters and wing play, exploiting the spaces left by Croatia's fullbacks. The opening goal came from Maeda, effectively taking advantage of a defensive lapse during a corner. Croatia responded with intensity, adjusting to push more players forward, with Kramarić and Rebić applying pressure and creating opportunities for Perišić to equalize. The match highlighted Croatia's experience in high-stakes scenarios, culminating in a composed penalty shootout performance led by Livaković's decisive saves.",
    "keyMoments": [
      "43' - Maeda's goal gives Japan an unexpected lead.",
      "55' - Perišić's equalizer restores Croatia's hope.",
      "66' - Modrić's substitution boosts Croatia's late-game energy.",
      "90+5' - Gonda's yellow card signifies Japan's struggle to maintain composure."
    ],
    "historicalSignificance": "This match marked a pivotal moment for Japan, showcasing their growth in international football, despite heartbreaking defeat in penalties. Croatia's advancement highlighted their status as a perennial underdog, demonstrating resilience and tactical prowess.",
    "topPerformers": [
      {
        "name": "Dominik Livaković",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Saved three penalties, proving vital in Croatia's success."
      },
      {
        "name": "Ivan Perišić",
        "side": "home",
        "position": "LW",
        "rating": 8.5,
        "note": "Crucial equalizer and constant threat on the left."
      },
      {
        "name": "Daizen Maeda",
        "side": "away",
        "position": "ST",
        "rating": 8.2,
        "note": "Took his chance well with the opening goal."
      },
      {
        "name": "Takehiro Tomiyasu",
        "side": "away",
        "position": "CB",
        "rating": 8,
        "note": "Strong defensive performance, organizing Japan’s backline."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs France — 2022 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-france-2022-qf",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Quarter-Final",
    "date": "December 10, 2022",
    "venue": "Al Bayt Stadium",
    "city": "Al Khor, Qatar",
    "home": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "4-3-3",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Jordan Pickford",
        "Kyle Walker",
        "John Stones",
        "Harry Maguire",
        "Luke Shaw",
        "Declan Rice",
        "Jude Bellingham",
        "Bukayo Saka",
        "Mason Mount",
        "Harry Kane",
        "Raheem Sterling"
      ],
      "score": 1
    },
    "away": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-2-3-1",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Hugo Lloris",
        "Benjamin Pavard",
        "Raphaël Varane",
        "Jules Koundé",
        "Lucas Hernández",
        "Aurélien Tchouaméni",
        "Adrian Rabiot",
        "Antoine Griezmann",
        "Kylian Mbappé",
        "Olivier Giroud",
        "Kingsley Coman"
      ],
      "score": 2
    },
    "status": "FT",
    "xG": {
      "home": 1.75,
      "away": 2.1
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "2'",
        "side": "home",
        "player": "Bukayo Saka",
        "type": "pen_goal",
        "description": "Scored from the penalty spot after a foul on Sterling."
      },
      {
        "minute": "17'",
        "side": "away",
        "player": "Aurélien Tchouaméni",
        "type": "goal",
        "description": "Equalized with a stunning 25-yard shot into the top corner."
      },
      {
        "minute": "78'",
        "side": "away",
        "player": "Olivier Giroud",
        "type": "goal",
        "description": "Headed France into the lead from a corner."
      },
      {
        "minute": "84'",
        "side": "home",
        "player": "Harry Kane",
        "type": "pen_miss",
        "description": "Missed crucial penalty that could have levelled the match."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 10,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 4,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 532,
        "away": 397,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "82%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 3,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 12,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "xG",
        "home": "1.75",
        "away": "2.10",
        "homeWidth": 45,
        "awayWidth": 55
      }
    ],
    "metaDescription": "England faced France in the 2022 FIFA World Cup Quarter-Final, a match marked by Bukayo Saka's penalty and Harry Kane's missed chance.",
    "tacticalAnalysis": "In this tense quarter-final, England deployed a 4-3-3 formation, utilizing wing play primarily through Sterling and Saka. The early penalty scored by Saka showcased England's intent, with Sterling's direct run drawing the foul. France, adopting a 4-2-3-1 formation, relied on Tchouaméni and Rabiot for ball progression into the attacking third. Tchouaméni's equalizer reflected France's resilience and tactical adaptability, launching a long range effort that England’s defense underestimated. As the match progressed, Giroud's aerial strength proved decisive, capitalizing on a set-piece situation to put France ahead. England's failure to convert their chances, particularly Kane's late penalty miss, ultimately sealed their fate and highlighted France's defensive organization and counter-attacking capabilities.",
    "keyMoments": [
      "2' - Saka scores penalty, giving England early lead.",
      "17' - Tchouaméni equalizes, stunning shot from distance.",
      "78' - Giroud heads France ahead from a corner.",
      "84' - Kane misses critical penalty, chance to equalize.",
      "Final whistle - England eliminated, heartbreak for fans."
    ],
    "historicalSignificance": "This match is remembered for its dramatic twists, particularly Harry Kane's missed penalty that could have changed the outcome. France went on to win the tournament, further solidifying their status as a footballing powerhouse.",
    "topPerformers": [
      {
        "name": "Olivier Giroud",
        "side": "away",
        "position": "ST",
        "rating": 9,
        "note": "Scored the decisive goal, showcasing aerial prowess."
      },
      {
        "name": "Bukayo Saka",
        "side": "home",
        "position": "RW",
        "rating": 8.5,
        "note": "Scored early penalty and was a constant threat on the right."
      },
      {
        "name": "Aurélien Tchouaméni",
        "side": "away",
        "position": "CM",
        "rating": 8.8,
        "note": "Equalized with a spectacular goal, pivotal in midfield."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Morocco vs Portugal — 2022 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "morocco-vs-portugal-2022-qf",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Quarter-Final",
    "date": "December 10, 2022",
    "venue": "Al Thumama Stadium",
    "city": "Doha, Qatar",
    "home": {
      "name": "Morocco",
      "flag": "🇲🇦",
      "formation": "4-1-4-1",
      "color": "#C1272D",
      "colorDim": "rgba(193,39,45,0.18)",
      "players": [
        "Yassine Bounou",
        "Achraf Hakimi",
        "Romain Saïss",
        "Nayef Aguerd",
        "Noussair Mazraoui",
        "Sofyan Amrabat",
        "Azzedine Ounahi",
        "Hakim Ziyech",
        "Sofiane Boufal",
        "Youssef En-Nesyri",
        "Azeddine Ounahi"
      ],
      "score": 1
    },
    "away": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Diogo Costa",
        "João Cancelo",
        "Rúben Dias",
        "Pepe",
        "Nuno Mendes",
        "William Carvalho",
        "Bruno Fernandes",
        "Bernardo Silva",
        "Otávio",
        "Cristiano Ronaldo",
        "Gonçalo Ramos"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.4,
      "away": 0.6
    },
    "possession": {
      "home": 36,
      "away": 64
    },
    "timeline": [
      {
        "minute": "42'",
        "side": "home",
        "player": "Youssef En-Nesyri",
        "type": "goal",
        "description": "En-Nesyri scored with a towering header from a cross by Dari."
      },
      {
        "minute": "70'",
        "side": "away",
        "player": "Cristiano Ronaldo",
        "type": "sub",
        "description": "Ronaldo came on as a substitute for Gonçalo Ramos."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 9,
        "away": 15,
        "homeWidth": 37,
        "awayWidth": 63
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 6,
        "homeWidth": 33,
        "awayWidth": 67
      },
      {
        "label": "Possession",
        "home": 36,
        "away": 64,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Passes",
        "home": 235,
        "away": 412,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Pass Accuracy",
        "home": "76%",
        "away": "84%",
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Corners",
        "home": 2,
        "away": 5,
        "homeWidth": 29,
        "awayWidth": 71
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "1.40",
        "away": "0.60",
        "homeWidth": 70,
        "awayWidth": 30
      }
    ],
    "metaDescription": "Morocco stunned Portugal 1-0, becoming the first African nation to reach a World Cup semi-final, with En-Nesyri's pivotal goal.",
    "tacticalAnalysis": "Morocco employed a 4-1-4-1 formation, emphasizing defensive solidity, with Amrabat serving as the crucial pivot to shield the backline. The Atlas Lions focused on compactness, effectively closing down spaces and counter-attacking swiftly. En-Nesyri’s goal stemmed from a well-executed set piece, capitalizing on Portuguese weaknesses at defending set pieces. Portugal’s 4-3-3 with Cristiano Ronaldo introduced as a late substitute aimed at injecting urgency but struggled to break down Morocco’s organized defense, leading to frustration in their attacking dynamics. The effectiveness of Morocco's defensive organization was evident as they limited Portugal to few clear-cut chances and executed incisive counters through Ziyech and Boufal, making them a persistent threat.",
    "keyMoments": [
      "42' - En-Nesyri scores the only goal of the match, leading Morocco to a historic victory.",
      "70' - Ronaldo substitutes in, marking his final World Cup appearance as Morocco holds strong.",
      "Full Time - Morocco secures a 1-0 win, triumphing as the first African nation in the World Cup semi-finals."
    ],
    "historicalSignificance": "This match is a landmark victory for Morocco, positioning them as the first African team to reach the semi-finals of a World Cup. It highlights a significant breakthrough for African football on the global stage, inspiring future generations.",
    "topPerformers": [
      {
        "name": "Yassine Bounou",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Outstanding saves and commanded the area effectively."
      },
      {
        "name": "Youssef En-Nesyri",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Scored the decisive goal with a powerful header, showcasing aerial prowess."
      },
      {
        "name": "Bruno Fernandes",
        "side": "away",
        "position": "CM",
        "rating": 8.5,
        "note": "Was Portugal's creative hub, constantly looking to unlock Morocco's defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Croatia vs Brazil — 2022 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "croatia-vs-brazil-2022-qf",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Quarter-Final",
    "date": "December 9, 2022",
    "venue": "Education City Stadium",
    "city": "Ar-Rayyan, Qatar",
    "home": {
      "name": "Croatia",
      "flag": "🇭🇷",
      "formation": "4-3-3",
      "color": "#CC1122",
      "colorDim": "rgba(204,17,34,0.18)",
      "players": [
        "Dominik Livaković",
        "Šime Vrsaljko",
        "Dejan Lovren",
        "Domagoj Vida",
        "Ivan Strinić",
        "Marcelo Brozović",
        "Luka Modrić",
        "Mateo Kovačić",
        "Ivan Perišić",
        "Andrej Kramarić",
        "Bruno Petković"
      ],
      "score": 1
    },
    "away": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Alisson Becker",
        "Danilo",
        "Marquinhos",
        "Thiago Silva",
        "Alex Sandro",
        "Casemiro",
        "Fred",
        "Neymar",
        "Raphinha",
        "Vinícius Júnior",
        "Richarlison"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "4-2",
    "xG": {
      "home": 1.67,
      "away": 2.85
    },
    "possession": {
      "home": 45,
      "away": 55
    },
    "timeline": [
      {
        "minute": "105'",
        "side": "away",
        "player": "Neymar",
        "type": "goal",
        "description": "Neymar scored a brilliant extra-time goal."
      },
      {
        "minute": "115'",
        "side": "home",
        "player": "Ivan Perišić",
        "type": "goal",
        "description": "Perišić equalised within minutes."
      },
      {
        "minute": "117'",
        "side": "home",
        "player": "Dominik Livaković",
        "type": "pen_miss",
        "description": "Saved Rodrygo's penalty during the shootout."
      },
      {
        "minute": "118'",
        "side": "away",
        "player": "Marquinhos",
        "type": "pen_miss",
        "description": "Hit the post during the penalty shootout."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 20,
        "homeWidth": 37,
        "awayWidth": 63
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 9,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Possession",
        "home": 45,
        "away": 55,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Passes",
        "home": 420,
        "away": 480,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "88%",
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 7,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "1.67",
        "away": "2.85",
        "homeWidth": 37,
        "awayWidth": 63
      }
    ],
    "metaDescription": "Croatia shock Brazil in the 2022 World Cup quarter-final, advancing via penalties after a thrilling match.",
    "tacticalAnalysis": "In this quarter-final clash, Croatia employed a 4-3-3 formation while Brazil lined up in a 4-2-3-1. Croatia's use of width through the wings, especially with Perišić and Kramarić, created significant challenges for Brazil's full-backs. Livaković was crucial, making several vital saves, especially from Richarlison's attempts. Brazil controlled possession with Casemiro and Fred providing a solid base; however, their inability to maintain composure under pressure ultimately led to their demise in the shootout. The key moment came when Neymar scored in extra time but Croatia responded swiftly, demonstrating remarkable resilience, culminating in a dramatic penalty shootout where Brazil faltered.",
    "keyMoments": [
      "105' - Neymar scores a stunning extra-time goal, giving Brazil the lead.",
      "115' - Croatia's Perišić equalizes almost immediately, keeping Croatia's hopes alive.",
      "117' - Livaković saves Rodrygo's penalty during the shootout.",
      "118' - Marquinhos disappointingly hits the post, sealing Brazil's fate."
    ],
    "historicalSignificance": "This match is significant not only because Croatia eliminated Brazil, a five-time World Cup champion, but also because it showcased Croatia's resilience and tactical prowess. It marks Croatia's second consecutive semi-final appearance in the World Cup, solidifying their status as a formidable footballing nation.",
    "topPerformers": [
      {
        "name": "Dominik Livaković",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Key saves throughout the match, especially in the penalty shootout."
      },
      {
        "name": "Ivan Perišić",
        "side": "home",
        "position": "LW",
        "rating": 8.5,
        "note": "Scored the equalizing goal and was a constant threat on the wing."
      },
      {
        "name": "Neymar",
        "side": "away",
        "position": "CAM",
        "rating": 8.8,
        "note": "Instrumental in Brazil's attacking play, scoring a vital goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Morocco — 2022 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-morocco-2022-sf",
    "tournament": "FIFA World Cup 2022",
    "year": 2022,
    "stage": "Semi-Final",
    "date": "December 14, 2022",
    "venue": "Al Bayt Stadium",
    "city": "Al Khor, Qatar",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-2-3-1",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Hugo Lloris",
        "Jules Koundé",
        "Raphaël Varane",
        "Lucas Hernández",
        "Theo Hernandez",
        "Adrien Rabiot",
        "N'Golo Kanté",
        "Antoine Griezmann",
        "Kylian Mbappé",
        "Ousmane Dembélé",
        "Randal Kolo Muani"
      ],
      "score": 2
    },
    "away": {
      "name": "Morocco",
      "flag": "🇲🇦",
      "formation": "4-3-3",
      "color": "#C1272D",
      "colorDim": "rgba(193,39,45,0.18)",
      "players": [
        "Yassine Bounou",
        "Achraf Hakimi",
        "Romain Saïss",
        "Nayef Aguerd",
        "Noussair Mazraoui",
        "Sofyan Amrabat",
        "Azzedine Ounahi",
        "Selim Amallah",
        "Hakim Ziyech",
        "Youssef En-Nesyri",
        "Sofiane Boufal"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.12,
      "away": 0.72
    },
    "possession": {
      "home": 59,
      "away": 41
    },
    "timeline": [
      {
        "minute": "5'",
        "side": "home",
        "player": "Theo Hernandez",
        "type": "goal",
        "description": "Hernández headed France into the lead after a cross from Griezmann."
      },
      {
        "minute": "79'",
        "side": "home",
        "player": "Randal Kolo Muani",
        "type": "goal",
        "description": "Kolo Muani scored with a clinical finish after a swift counter-attack."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 15,
        "away": 8,
        "homeWidth": 65,
        "awayWidth": 35
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 2,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Possession",
        "home": 59,
        "away": 41,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 430,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "89%",
        "away": "79%",
        "homeWidth": 89,
        "awayWidth": 79
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 16,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "2.12",
        "away": "0.72",
        "homeWidth": 71,
        "awayWidth": 29
      }
    ],
    "metaDescription": "France defeated Morocco 2-0 in the semi-finals of the FIFA World Cup 2022, with key contributions from Theo Hernandez and Randal Kolo Muani.",
    "tacticalAnalysis": "In this semi-final match, France employed a 4-2-3-1 formation which allowed them to dominate the midfield, with N'Golo Kanté providing defensive cover while Adrien Rabiot supported the attack. Morocco, on the other hand, set up in a 4-3-3, with their wingers, Hakim Ziyech and Sofiane Boufal, tasked with stretching the French defense. France's first goal came early when Theo Hernandez found an opening at the back post, a result of a well-placed cross by Griezmann that exploited Morocco's defensive shape. The second goal was a result of a well-timed counter-attack, showcasing France's clinical finishing, as Kolo Muani took advantage of Morocco's high line. The tactical battle showcased France's ability to transition quickly and their experience in handling high-pressure situations, while Morocco demonstrated resilience but lacked the finishing touch required to capitalize on counter-opportunities.",
    "keyMoments": [
      "5' - Theo Hernandez puts France ahead with a header from a cross.",
      "79' - Randal Kolo Muani seals the win with a second goal.",
      "65' - Morocco introduces Abdelhamid Sabiri for Azzedine Ounahi to increase attacking threat.",
      "90+2' - Yassine Bounou makes a critical save to deny Mbappé a third goal."
    ],
    "historicalSignificance": "This match marked a historic moment for Morocco, becoming the first African nation to reach a World Cup semi-final. Despite the loss, their journey captured the hearts of many and showcased the rising competitiveness of African teams in global football.",
    "topPerformers": [
      {
        "name": "Theo Hernandez",
        "side": "home",
        "position": "LB",
        "rating": 9.2,
        "note": "Outstanding performance with a crucial opening goal and solid defensive work."
      },
      {
        "name": "Randal Kolo Muani",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Made a significant impact as a substitute, scoring the second goal that secured France's place in the final."
      },
      {
        "name": "Yassine Bounou",
        "side": "away",
        "position": "GK",
        "rating": 8.5,
        "note": "Made several key saves that kept Morocco in the game despite the defeat."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Spain vs Portugal — 2018 Group Stage (Group B)
  // ─────────────────────────────────────────────
  {
    "id": "spain-vs-portugal-2018-group",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Group Stage (Group B)",
    "date": "June 15, 2018",
    "venue": "Fisht Olympic Stadium",
    "city": "Sochi, Russia",
    "home": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "3-3-3-1",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "David de Gea",
        "Gerard Piqué",
        "Sergio Ramos",
        "Jordi Alba",
        "César Azpilicueta",
        "Busquets",
        "Koke",
        "David Silva",
        "Isco",
        "Diego Costa",
        "Thiago Alcântara"
      ],
      "score": 3
    },
    "away": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Rui Patrício",
        "Cedric Soares",
        "Pepe",
        "Ruben Dias",
        "Raphaël Guerreiro",
        "William Carvalho",
        "João Mário",
        "Bernardo Silva",
        "Cristiano Ronaldo",
        "Gonçalo Guedes",
        "André Silva"
      ],
      "score": 3
    },
    "status": "FT",
    "xG": {
      "home": 2.9,
      "away": 2.8
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "3'",
        "side": "home",
        "player": "Diego Costa",
        "type": "goal",
        "description": "Controversial goal from a corner, ball deflected off his body."
      },
      {
        "minute": "24'",
        "side": "away",
        "player": "Cristiano Ronaldo",
        "type": "goal",
        "description": "Powerful header from a corner."
      },
      {
        "minute": "33'",
        "side": "home",
        "player": "Diego Costa",
        "type": "goal",
        "description": "Equalizer from a long ball, quick dribble and shot."
      },
      {
        "minute": "44'",
        "side": "away",
        "player": "Cristiano Ronaldo",
        "type": "goal",
        "description": "Beautiful long-range curled shot."
      },
      {
        "minute": "88'",
        "side": "away",
        "player": "Cristiano Ronaldo",
        "type": "goal",
        "description": "Last-minute free-kick to complete his hat-trick."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 5,
        "homeWidth": 62.5,
        "awayWidth": 37.5
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 100,
        "awayWidth": 0
      },
      {
        "label": "Passes",
        "home": 700,
        "away": 400,
        "homeWidth": 63.64,
        "awayWidth": 36.36
      },
      {
        "label": "Pass Accuracy",
        "home": "89%",
        "away": "78%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 3,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 8,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "2.90",
        "away": "2.80",
        "homeWidth": 51,
        "awayWidth": 49
      }
    ],
    "metaDescription": "Dramatic match with a gripping 3-3 draw between Spain and Portugal in the 2018 World Cup group stage.",
    "tacticalAnalysis": "Spain deployed a 3-3-3-1 formation, utilizing a three-man defense comprised of Ramos, Piqué, and Alba, with Azpilicueta providing width as a wing-back. The midfield trio of Busquets, Koke, and Thiago worked primarily to dominate possession and conduct ball distribution. Portugal’s 4-3-3 formation, anchored by Carvalho and pushed forward by Ronaldo, was designed for quick counter-attacks. Spain struggled defensively against Portugal's pace, leading to matches of transition where Ronaldo's movement proved crucial. Each goal reflected tactical vulnerabilities, particularly set-piece weaknesses exploited by both sides. Ronaldo's exceptional ability to find space was a critical factor, culminating in his last-minute free-kick that highlighted Portugal's resilience.",
    "keyMoments": [
      "3' - Costa's early controversial goal sets the tone.",
      "24' - Ronaldo’s header equalizes and shifts momentum.",
      "44' - Ronaldo's long-range shot gives Portugal a lead just before halftime.",
      "88' - Ronaldo completes his hat-trick with a stunning free-kick."
    ],
    "historicalSignificance": "This match is remembered as one of the greatest encounters in World Cup history, showcasing immense individual talent and resilience from both teams. The dramatic nature of the game set the stage for the intense rivalry between Spain and Portugal in future tournaments.",
    "topPerformers": [
      {
        "name": "Cristiano Ronaldo",
        "side": "away",
        "position": "FW",
        "rating": 9.5,
        "note": "Scored a hat-trick, including a memorable last-minute free-kick."
      },
      {
        "name": "Diego Costa",
        "side": "home",
        "position": "FW",
        "rating": 8.8,
        "note": "Two goals displayed his strength and determination."
      },
      {
        "name": "David de Gea",
        "side": "home",
        "position": "GK",
        "rating": 5.5,
        "note": "Had a difficult match, notably missing a catch leading to a goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Mexico — 2018 Group Stage (Group F)
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-mexico-2018-group",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Group Stage (Group F)",
    "date": "June 17, 2018",
    "venue": "Luzhniki Stadium",
    "city": "Moscow, Russia",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Joshua Kimmich",
        "Matthias Ginter",
        "Mats Hummels",
        "Marcel Schmelzer",
        "Leon Goretzka",
        "Julian Brandt",
        "Mario Götze",
        "Mesut Özil",
        "Marco Reus",
        "Timo Werner"
      ],
      "score": 0
    },
    "away": {
      "name": "Mexico",
      "flag": "🇲🇽",
      "formation": "4-3-3",
      "color": "#006847",
      "colorDim": "rgba(0,104,71,0.18)",
      "players": [
        "Guillermo Ochoa",
        "Carlos Salcedo",
        "Hugo Ayala",
        "Diego Reyes",
        "Edson Álvarez",
        "Hector Herrera",
        "Andres Guardado",
        "Jonathan dos Santos",
        "Hirving Lozano",
        "Raúl Jiménez",
        "Jesus Manuel Corona"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.12,
      "away": 0.83
    },
    "possession": {
      "home": 70,
      "away": 30
    },
    "timeline": [
      {
        "minute": "35'",
        "side": "away",
        "player": "Hirving Lozano",
        "type": "goal",
        "description": "Lozano scored with a precise shot following a swift counter-attack, stunning the German defense."
      },
      {
        "minute": "85'",
        "side": "home",
        "player": "Marco Reus",
        "type": "sub",
        "description": "Replaced Timo Werner in a final attempt to equalize."
      },
      {
        "minute": "45+1'",
        "side": "home",
        "player": "Mats Hummels",
        "type": "yellow",
        "description": "Received a yellow card for a foul on Raúl Jiménez."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Leon Goretzka",
        "type": "yellow",
        "description": "Booked for a challenge on Hector Herrera."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 19,
        "away": 9,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 3,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Possession",
        "home": 70,
        "away": 30,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Passes",
        "home": 450,
        "away": 150,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Pass Accuracy",
        "home": "88%",
        "away": "72%",
        "homeWidth": 88,
        "awayWidth": 72
      },
      {
        "label": "Corners",
        "home": 11,
        "away": 2,
        "homeWidth": 85,
        "awayWidth": 15
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 14,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "xG",
        "home": "2.12",
        "away": "0.83",
        "homeWidth": 73,
        "awayWidth": 27
      }
    ],
    "metaDescription": "Germany faced a surprising defeat against Mexico in the 2018 World Cup Group Stage, highlighted by Lozano's stunning goal.",
    "tacticalAnalysis": "Germany lined up in a 4-2-3-1 formation, with Götze and Brandt supporting striker Werner, while the two holding midfielders, Goretzka and Kroos, sought to control the game. However, Mexico employed a disciplined 4-3-3, effectively countering Germany's creative play. Lozano's pace on the break proved pivotal, exploiting spaces left by Germany's attacking intent. The Mexican defense, marshaled by Salcedo and Ayala, executed a compact shape, frustrating Germany's attempts to penetrate the box. Despite dominating possession, Germany's inability to convert chances was evident as Mexico effectively transitioned from defense to attack, culminating in Lozano's goal, which not only defined the match but also disrupted Germany's dominance in the tournament.",
    "keyMoments": [
      "35' - Hirving Lozano scores to give Mexico the lead, a moment that resonates in World Cup history.",
      "45+1' - Mats Hummels booked for foul, highlighting Germany's frustration.",
      "70' - Leon Goretzka receives yellow, showcasing the growing tension in the match.",
      "85' - Marco Reus subbed in, an attempt to break Mexico's resolute defense."
    ],
    "historicalSignificance": "This match marked a stunning upset in World Cup history, as the defending champions Germany fell to Mexico. The game's outcome challenged expectations and set the tone for the tournament. Lozano's goal was a testament to Mexico's tactical prowess, and the match is remembered as a defining moment for both teams.",
    "topPerformers": [
      {
        "name": "Hirving Lozano",
        "side": "away",
        "position": "LW",
        "rating": 9.2,
        "note": "His goal and tireless running were crucial for Mexico's victory."
      },
      {
        "name": "Guillermo Ochoa",
        "side": "away",
        "position": "GK",
        "rating": 8.5,
        "note": "Made several key saves to keep Germany at bay."
      },
      {
        "name": "Matthias Ginter",
        "side": "home",
        "position": "CB",
        "rating": 7.5,
        "note": "One of the few defenders keeping Mexico in check despite pressure."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs South Korea — 2018 Group Stage (Group F)
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-south-korea-2018-group",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Group Stage (Group F)",
    "date": "June 27, 2018",
    "venue": "Kazan Arena",
    "city": "Kazan, Russia",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Matthias Ginter",
        "Mats Hummels",
        "Jonas Hector",
        "Joshua Kimmich",
        "Julian Brandt",
        "Leon Goretzka",
        "Ilkay Gündogan",
        "Thomas Müller",
        "Marco Reus",
        "Timo Werner"
      ],
      "score": 0
    },
    "away": {
      "name": "South Korea",
      "flag": "🇰🇷",
      "formation": "4-2-3-1",
      "color": "#CD2E3A",
      "colorDim": "rgba(205,46,58,0.18)",
      "players": [
        "Kim Seung-gyu",
        "Lee Yong",
        "Kwon Kyung-won",
        "Jung Seung-hyun",
        "Park Joo-ho",
        "Jang Hyun-soo",
        "Ki Sung-yueng",
        "Lee Jae-sung",
        "Son Heung-min",
        "Hwang Hee-chan",
        "Kim Young-gwon"
      ],
      "score": 2
    },
    "status": "FT",
    "xG": {
      "home": 2.85,
      "away": 0.43
    },
    "possession": {
      "home": 64,
      "away": 36
    },
    "timeline": [
      {
        "minute": "90+1'",
        "side": "away",
        "player": "Kim Young-gwon",
        "type": "goal",
        "description": "Scored from close range after a scramble in the box."
      },
      {
        "minute": "90+6'",
        "side": "away",
        "player": "Son Heung-min",
        "type": "goal",
        "description": "Sealed victory with a shot into an empty net after a counterattack."
      },
      {
        "minute": "86'",
        "side": "home",
        "player": "Julian Brandt",
        "type": "sub",
        "description": "Replaced Marco Reus."
      },
      {
        "minute": "45+1'",
        "side": "home",
        "player": "Matthias Ginter",
        "type": "yellow",
        "description": "Cautioned for a late tackle."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 34,
        "away": 10,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 64,
        "away": 36,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 300,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "90%",
        "away": "75%",
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Corners",
        "home": 10,
        "away": 2,
        "homeWidth": 83,
        "awayWidth": 17
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 16,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "2.85",
        "away": "0.43",
        "homeWidth": 87,
        "awayWidth": 13
      }
    ],
    "metaDescription": "Germany's shocking 0-2 loss to South Korea in the 2018 FIFA World Cup group stage led to their elimination.",
    "tacticalAnalysis": "Germany deployed a 4-2-3-1 formation with Neuer in goal and a back four featuring Ginter and Hector providing width. Their strategy relied on dominant possession and quick passing but lacked penetration, often leading to shots from distance that were off-target. Löw's players struggled to create space against South Korea's compact defense. The away team, utilizing a 4-2-3-1, executed a disciplined pressing system, making it difficult for Germany to progress into the final third. The crucial goals came from well-coordinated counterattacks exploiting Germany's high defensive line. Kim Young-gwon scored first on a scrappy set-piece, while Son Heung-min sealed victory during stoppage time on a breakaway. Defensively, South Korea effectively limited Germany’s shooting opportunities, capitalizing on their own moments to strike.",
    "keyMoments": [
      "90+1' - Kim Young-gwon scores to put South Korea ahead, shocking the German side.",
      "90+6' - Son Heung-min nets the second goal into an empty net, confirming Germany's exit.",
      "45+1' - Matthias Ginter booked for a late challenge, adding to Germany's frustrations.",
      "86' - Julian Brandt substitutions fails to rally the home side as they continue to struggle."
    ],
    "historicalSignificance": "This match marked Germany's first group-stage exit in a World Cup since 1938, highlighting a significant turning point in the team's fortunes. It underscored the decline of the defending champions, raising questions about their tactical approaches and player selection moving forward.",
    "topPerformers": [
      {
        "name": "Son Heung-min",
        "side": "away",
        "position": "LW",
        "rating": 9.2,
        "note": "Outstanding pace and skill, instrumental in both goals, showcasing brilliance on the counter."
      },
      {
        "name": "Kim Young-gwon",
        "side": "away",
        "position": "CB",
        "rating": 8.5,
        "note": "Solid defensively, scored the opener that turned the match in South Korea's favor."
      },
      {
        "name": "Manuel Neuer",
        "side": "home",
        "position": "GK",
        "rating": 8,
        "note": "Kept Germany in the game with crucial saves, demonstrating his experience despite the scoreline."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Uruguay vs Portugal — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "uruguay-vs-portugal-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "June 30, 2018",
    "venue": "Fisht Olympic Stadium",
    "city": "Sochi, Russia",
    "home": {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "formation": "4-4-2",
      "color": "#4EABDF",
      "colorDim": "rgba(78,171,223,0.18)",
      "players": [
        "Fernando Muslera",
        "Maxi Pereira",
        "Diego Godín",
        "José María Giménez",
        "Diego Laxalt",
        "Nahitan Nández",
        "Lucas Torreira",
        "Rodrigo Bentancur",
        "Edinson Cavani",
        "Luis Suárez",
        "Giorgian De Arrascaeta"
      ],
      "score": 2
    },
    "away": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Rui Patrício",
        "João Cancelo",
        "Pepe",
        "Rúben Dias",
        "Raphaël Guerreiro",
        "William Carvalho",
        "João Mário",
        "Bernardo Silva",
        "Cristiano Ronaldo",
        "Gonçalo Guedes",
        "André Silva"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 1.87,
      "away": 0.99
    },
    "possession": {
      "home": 52,
      "away": 48
    },
    "timeline": [
      {
        "minute": "11'",
        "side": "away",
        "player": "Cristiano Ronaldo",
        "type": "goal",
        "description": "Ronaldo scores a free kick to give Portugal an early lead."
      },
      {
        "minute": "62'",
        "side": "home",
        "player": "Edinson Cavani",
        "type": "goal",
        "description": "Cavani scores a stunning volley from outside the box."
      },
      {
        "minute": "64'",
        "side": "home",
        "player": "Edinson Cavani",
        "type": "goal",
        "description": "Cavani scores again with a precise shot after a ball from Suárez."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Edinson Cavani",
        "type": "sub",
        "description": "Cavani limps off the pitch due to injury."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 22,
        "away": 12,
        "homeWidth": 65,
        "awayWidth": 35
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 3,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Possession",
        "home": 52,
        "away": 48,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Passes",
        "home": 436,
        "away": 404,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Pass Accuracy",
        "home": "83%",
        "away": "81%",
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 4,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 13,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "xG",
        "home": "1.87",
        "away": "0.99",
        "homeWidth": 65,
        "awayWidth": 35
      }
    ],
    "metaDescription": "Uruguay eliminated Portugal in a thrilling Round of 16 match where Edinson Cavani shined.",
    "tacticalAnalysis": "Uruguay set up in a 4-4-2 formation, focusing on compactness and quick transitions. They utilized Cavani and Suárez to exploit Portugal's defensive gaps. With Bentancur and Torreira providing support in midfield, they aimed to win the second balls and counter effectively. Portugal, using a 4-3-3, relied heavily on Cristiano Ronaldo's creativity but struggled to unlock Uruguay's solid defense. After Ronaldo's early goal, Uruguay's response was tactical; they increased their pressing intensity, which led to Cavani's brace. Key battles ensued in midfield, where Torreira's interceptions disrupted Portugal's rhythm. As the match progressed, Cavani's injury significantly altered Uruguay's tactical approach, forcing them to hold their lead.",
    "keyMoments": [
      "11' - Ronaldo's free-kick opens the scoring.",
      "62' - Cavani's volley brings Uruguay level.",
      "64' - Cavani scores again to take the lead.",
      "70' - Cavani's injury raises concerns for Uruguay."
    ],
    "historicalSignificance": "This match highlighted Uruguay's tactical discipline and resilience, showcasing Cavani at his peak. It also marked the end of Ronaldo's journey in the 2018 World Cup, a significant moment in his illustrious career.",
    "topPerformers": [
      {
        "name": "Edinson Cavani",
        "side": "home",
        "position": "ST",
        "rating": 9.2,
        "note": "Cavani's two goals, including a stunning volley, were crucial for Uruguay's victory."
      },
      {
        "name": "Cristiano Ronaldo",
        "side": "away",
        "position": "LW",
        "rating": 8.5,
        "note": "Ronaldo's early goal showcased his skill, but he had limited impact afterwards."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Russia vs Spain — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "russia-vs-spain-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "July 1, 2018",
    "venue": "Luzhniki Stadium",
    "city": "Moscow, Russia",
    "home": {
      "name": "Russia",
      "flag": "🇷🇺",
      "formation": "4-3-3",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Igor Akinfeev",
        "Mario Fernandes",
        "Sergey Ignashevich",
        "Ilya Kutepov",
        "Fydor Kudryashov",
        "Daler Kuzyaev",
        "Dmitri Kranevitter",
        "Aleksandr Golovin",
        "Denis Cheryshev",
        "Artem Dzyuba",
        "Alexander Erokhin"
      ],
      "score": 1
    },
    "away": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-3-3",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "David de Gea",
        "Sergio Ramos",
        "Gerard Piqué",
        "Jordi Alba",
        "César Azpilicueta",
        "Sergio Busquets",
        "Andrés Iniesta",
        "David Silva",
        "Isco",
        "Diego Costa",
        "Marco Asensio"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "4-3",
    "xG": {
      "home": 1.23,
      "away": 2.02
    },
    "possession": {
      "home": 25,
      "away": 75
    },
    "timeline": [
      {
        "minute": "12'",
        "side": "away",
        "player": "Diego Costa",
        "type": "goal",
        "description": "Costa scores with a close-range finish after a defensive error."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Artem Dzyuba",
        "type": "goal",
        "description": "Dzyuba heads in a corner from Golovin."
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Igor Akinfeev",
        "type": "sub",
        "description": "Akinfeev saves a key penalty in shootout."
      },
      {
        "minute": "118'",
        "side": "home",
        "player": "Denis Cheryshev",
        "type": "shot",
        "description": "Cheryshev's long-range shot hits the post."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 11,
        "away": 16,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 7,
        "homeWidth": 41,
        "awayWidth": 59
      },
      {
        "label": "Possession",
        "home": 25,
        "away": 75,
        "homeWidth": 25,
        "awayWidth": 75
      },
      {
        "label": "Passes",
        "home": 350,
        "away": 900,
        "homeWidth": 28,
        "awayWidth": 72
      },
      {
        "label": "Pass Accuracy",
        "home": "75%",
        "away": "85%",
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 7,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 12,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "xG",
        "home": "1.23",
        "away": "2.02",
        "homeWidth": 37,
        "awayWidth": 63
      }
    ],
    "metaDescription": "Russia faces Spain in a dramatic penalty shootout in the 2018 FIFA World Cup Round of 16.",
    "tacticalAnalysis": "In this knockout clash, Russia deployed a compact 4-3-3 formation, designed to absorb Spain's passing game. The full-backs, Kudryashov and Fernandes, were crucial in blocking the width provided by Spain's wingers, while Dzyuba served as a focal point in attack. Spain, on the other hand, started in a similar 4-3-3, maintaining their usual possession-based approach. Their dominance was marked by a staggering 75% possession, yet they struggled to penetrate Russia's organized defense. Akinfeev's heroics in goal, particularly in the shootout, highlighted Russia's resilience. The key battle was in midfield, where Spain's busquets, Iniesta, and Silva fought to maintain ball control against the energetic Russian midfielders. Cheryshev's long-range strike in extra time showcased Russia's potential to counterattack effectively, exposing Spain's lack of direct penetration.",
    "keyMoments": [
      "12' - Costa scores, putting Spain ahead early.",
      "70' - Dzyuba equalizes with a powerful header.",
      "118' - Cheryshev hits the post, nearly winning the match for Russia.",
      "Penalties - Akinfeev saves two shootout penalties, securing Russia's advancement."
    ],
    "historicalSignificance": "This match exemplified the unpredictability of knockout football, as Russia overturned expectations in front of their home fans. The victory in the shootout marked a historic achievement for the Russian team, further enhancing the narrative of underdog triumphs in World Cup history.",
    "topPerformers": [
      {
        "name": "Igor Akinfeev",
        "side": "home",
        "position": "GK",
        "rating": 9.4,
        "note": "Outstanding saves in penalty shootout secured Russia's place in the quarter-finals."
      },
      {
        "name": "Diego Costa",
        "side": "away",
        "position": "ST",
        "rating": 8,
        "note": "Opened the scoring and was a persistent threat."
      },
      {
        "name": "Artem Dzyuba",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Equalized with a crucial goal and was physically dominant."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Croatia vs Denmark — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "croatia-vs-denmark-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "July 1, 2018",
    "venue": "Nizhny Novgorod Stadium",
    "city": "Nizhny Novgorod, Russia",
    "home": {
      "name": "Croatia",
      "flag": "🇭🇷",
      "formation": "4-3-3",
      "color": "#CC1122",
      "colorDim": "rgba(204,17,34,0.18)",
      "players": [
        "Danijel Subašić",
        "Šime Vrsaljko",
        "Dejan Lovren",
        "Domagoj Vida",
        "Ivan Strinić",
        "Luka Modrić",
        "Ivan Rakitić",
        "Ante Rebić",
        "Marcelo Brozović",
        "Mario Mandžukić",
        "Ivan Perišić"
      ],
      "score": 1
    },
    "away": {
      "name": "Denmark",
      "flag": "🇩🇰",
      "formation": "4-2-3-1",
      "color": "#C60C30",
      "colorDim": "rgba(198,12,48,0.18)",
      "players": [
        "Kasper Schmeichel",
        "Mathias Jørgensen",
        "Simon Kjær",
        "Andreas Christensen",
        "Jannik Vestergaard",
        "Thomas Delaney",
        "Christian Eriksen",
        "Lasse Schöne",
        "Yussuf Poulsen",
        "Martin Braithwaite",
        "Kasper Dolberg"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "3-2",
    "xG": {
      "home": 1.67,
      "away": 1.23
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "1'",
        "side": "home",
        "player": "Mario Mandžukić",
        "type": "own_goal",
        "description": "Own goal conceded from an early cross."
      },
      {
        "minute": "28'",
        "side": "home",
        "player": "Luka Modrić",
        "type": "goal",
        "description": "Equalizer from a distance with a well-placed shot."
      },
      {
        "minute": "113'",
        "side": "neutral",
        "player": "Danijel Subašić",
        "type": "pen_goal",
        "description": "Save on a penalty from Christian Eriksen."
      },
      {
        "minute": "115'",
        "side": "neutral",
        "player": "Danijel Subašić",
        "type": "pen_goal",
        "description": "Save on a penalty from Lasse Schöne."
      },
      {
        "minute": "116'",
        "side": "neutral",
        "player": "Danijel Subašić",
        "type": "pen_goal",
        "description": "Save on a penalty from Kasper Dolberg."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 20,
        "away": 12,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 4,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Passes",
        "home": 530,
        "away": 350,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "79%",
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Corners",
        "home": 11,
        "away": 5,
        "homeWidth": 69,
        "awayWidth": 31
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 18,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "1.67",
        "away": "1.23",
        "homeWidth": 60,
        "awayWidth": 40
      }
    ],
    "metaDescription": "Croatia faced Denmark in the Round of 16, marked by a dramatic penalty shootout after a 1-1 draw.",
    "tacticalAnalysis": "Croatia lined up in a 4-3-3 formation, utilizing the width provided by their wingers Perišić and Rebić to stretch Denmark's defense. Modrić played a pivotal role in midfield, orchestrating the play and transitioning the ball from defense to attack, while Rakitić focused on recycling possession and providing defensive cover. Denmark, on the other hand, set up in a 4-2-3-1 formation, with Delaney and Schöne tasked with nullifying Modrić’s influence. Their pressing was effective in the first half, leading to an early own goal. However, Croatia's resilience and ability to adapt after Modrić’s equalizer underlined their tactical versatility. In extra time, Denmark controlled possession but could not capitalize, and Croatia’s defensive solidity was particularly notable, especially Subašić's heroics in the shootout, showcasing his instincts as a top goalkeeper.",
    "keyMoments": [
      "1' - Mandžukić own goal puts Croatia on the back foot early.",
      "28' - Modrić equalizes, restoring hope for Croatia.",
      "113' - Subašić's first crucial penalty save against Eriksen.",
      "115' - Second penalty save by Subašić against Schöne.",
      "116' - Third save against Dolberg seals Croatia's path to victory."
    ],
    "historicalSignificance": "This match highlighted Croatia's growth as a footballing nation, showcasing their mental toughness and skill in high-pressure situations. It marked a significant moment in their World Cup journey, ultimately leading them to the final.",
    "topPerformers": [
      {
        "name": "Danijel Subašić",
        "side": "home",
        "position": "GK",
        "rating": 9.5,
        "note": "Outstanding performance with three crucial penalty saves."
      },
      {
        "name": "Luka Modrić",
        "side": "home",
        "position": "CM",
        "rating": 8.8,
        "note": "Key in midfield with an equalizing goal and leadership."
      },
      {
        "name": "Kasper Schmeichel",
        "side": "away",
        "position": "GK",
        "rating": 8,
        "note": "Strong performance with multiple crucial saves during the match."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Mexico — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-mexico-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "July 2, 2018",
    "venue": "Samara Arena",
    "city": "Samara, Russia",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Alisson Becker",
        "Thiago Silva",
        "Miranda",
        "Marcelo",
        "Fagner",
        "Casemiro",
        "Fernandinho",
        "Neymar",
        "Philippe Coutinho",
        "Willian",
        "Roberto Firmino"
      ],
      "score": 2
    },
    "away": {
      "name": "Mexico",
      "flag": "🇲🇽",
      "formation": "4-3-3",
      "color": "#006847",
      "colorDim": "rgba(0,104,71,0.18)",
      "players": [
        "Guillermo Ochoa",
        "Miguel Layún",
        "Héctor Moreno",
        "Carlos Salcedo",
        "Edson Álvarez",
        "Andrés Guardado",
        "Jonathan dos Santos",
        "Hirving Lozano",
        "Raúl Jiménez",
        "Marco Fabián",
        "Jesus Corona"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.15,
      "away": 0.75
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "51'",
        "side": "home",
        "player": "Neymar",
        "type": "goal",
        "description": "Neymar scored from close range after a swift counter-attack."
      },
      {
        "minute": "88'",
        "side": "home",
        "player": "Roberto Firmino",
        "type": "goal",
        "description": "Firmino scored with a header from a corner."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 19,
        "away": 11,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 2,
        "homeWidth": 81,
        "awayWidth": 19
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 509,
        "away": 374,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "75%",
        "homeWidth": 82,
        "awayWidth": 75
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 14,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "xG",
        "home": "2.15",
        "away": "0.75",
        "homeWidth": 100,
        "awayWidth": 100
      }
    ],
    "metaDescription": "Brazil triumphed over Mexico in the Round of 16 at the FIFA World Cup 2018, thanks to goals from Neymar and Firmino.",
    "tacticalAnalysis": "Brazil employed a 4-2-3-1 formation that utilized Neymar as a dynamic playmaker, who frequently cut inside from the left flank. Firmino and Coutinho played crucial roles in linking up the play, while Casemiro and Fernandinho provided a sturdy double pivot, shielding the back four effectively. The fluidity of Brazil's attacking quartet often created overloads on the flanks, allowing for significant penetration into Mexico's defensive lines.\n\nMexico, organized in a 4-3-3 formation, attempted to press high in the initial stages. Guardado and dos Santos tried to support the front three in pressing Brazil's buildup, but they struggled against Brazil's deep passing options. Mexico had promising moments, especially through Lozano's pace on the wing, yet their chances were limited by Brazil's resolute defense. As the game progressed, Brazil's backline absorbed Mexico's pressure, demonstrating their tactical discipline, which ultimately led to Brazil's first goal through an incisive counter-attack.",
    "keyMoments": [
      "51' - Neymar scores to give Brazil the lead with a close-range finish.",
      "88' - Firmino seals the win with a header from a corner.",
      "14' - Mexico's best chance as Jiménez's shot is saved brilliantly by Alisson.",
      "34' - Neymar's foot injury raises concern as he receives treatment but continues."
    ],
    "historicalSignificance": "This match marked another step in Brazil's journey in the World Cup, extending their record of reaching the quarter-finals. Mexico's elimination in the Round of 16 continued a painful streak of never progressing past this stage since 1994, a statistic that weighs heavily on their football legacy.",
    "topPerformers": [
      {
        "name": "Neymar",
        "side": "home",
        "position": "LW",
        "rating": 9,
        "note": "Instrumental in attack, scored a crucial goal and provided creativity."
      },
      {
        "name": "Alisson Becker",
        "side": "home",
        "position": "GK",
        "rating": 8.5,
        "note": "Made key saves to keep Mexico at bay."
      },
      {
        "name": "Hirving Lozano",
        "side": "away",
        "position": "LW",
        "rating": 7.5,
        "note": "Was a threat on the counter, showcasing his speed and dribbling."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Belgium vs Japan — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "belgium-vs-japan-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "July 2, 2018",
    "venue": "Rostov Arena",
    "city": "Rostov-on-Don, Russia",
    "home": {
      "name": "Belgium",
      "flag": "🇧🇪",
      "formation": "3-4-2-1",
      "color": "#EDCB27",
      "colorDim": "rgba(237,203,39,0.18)",
      "players": [
        "Thibaut Courtois",
        "Vincent Kompany",
        "Jan Vertonghen",
        "Toby Alderweireld",
        "Nacer Chadli",
        "Axel Witsel",
        "Kevin De Bruyne",
        "Eden Hazard",
        "Dries Mertens",
        "Romelu Lukaku",
        "Michy Batshuayi"
      ],
      "score": 3
    },
    "away": {
      "name": "Japan",
      "flag": "🇯🇵",
      "formation": "4-2-3-1",
      "color": "#BC002D",
      "colorDim": "rgba(188,0,45,0.18)",
      "players": [
        "Eiji Kawashima",
        "Maya Yoshida",
        "Tomoya Ikémoto",
        "Genki Haraguchi",
        "Yoshinori Muto",
        "Gaku Shibasaki",
        "Hiroshi Kiyotake",
        "Makoto Hasebe",
        "Takehiro Tomiyasu",
        "Yuya Osako",
        "Keisuke Honda"
      ],
      "score": 2
    },
    "status": "FT",
    "xG": {
      "home": 2.69,
      "away": 1.45
    },
    "possession": {
      "home": 54,
      "away": 46
    },
    "timeline": [
      {
        "minute": "48'",
        "side": "away",
        "player": "Genki Haraguchi",
        "type": "goal",
        "description": "Haraguchi scores with a great finish after a fast counter-attack."
      },
      {
        "minute": "52'",
        "side": "away",
        "player": "Takashi Inui",
        "type": "goal",
        "description": "Inui doubles Japan's lead with a powerful strike from outside the box."
      },
      {
        "minute": "69'",
        "side": "home",
        "player": "Jan Vertonghen",
        "type": "goal",
        "description": "Vertonghen scores with a header from a corner."
      },
      {
        "minute": "74'",
        "side": "home",
        "player": "Marouane Fellaini",
        "type": "goal",
        "description": "Fellaini equalizes with a close-range header."
      },
      {
        "minute": "94'",
        "side": "home",
        "player": "Nacer Chadli",
        "type": "goal",
        "description": "Chadli scores the winner with a devastating counter-attack."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 25,
        "away": 11,
        "homeWidth": 69,
        "awayWidth": 31
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 4,
        "homeWidth": 69,
        "awayWidth": 31
      },
      {
        "label": "Possession",
        "home": 54,
        "away": 46,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Passes",
        "home": 503,
        "away": 250,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "78%",
        "homeWidth": 87,
        "awayWidth": 78
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 17,
        "homeWidth": 39,
        "awayWidth": 61
      },
      {
        "label": "xG",
        "home": "2.69",
        "away": "1.45",
        "homeWidth": 69,
        "awayWidth": 31
      }
    ],
    "metaDescription": "Belgium staged a remarkable comeback to defeat Japan 3-2 in the Round of 16 at the 2018 World Cup.",
    "tacticalAnalysis": "Belgium initially set up in a 3-4-2-1 formation, utilizing Lukaku as the focal point of their attack. Japan, in contrast, played in a 4-2-3-1 with a compact midfield that stifled Belgium's creative players early on. Japan's pressing forced errors from Belgium, leading to a quick transition that brought their first goal early in the second half. However, with Lukaku's introduction, Belgium shifted tactics to better exploit the wings and height advantages, which proved essential in their comeback. The defenders adapted to monitor Japan's counters, but the breakthrough came from set plays and swift ball movement rather than reliance on individual brilliance. Chadli's late goal was emblematic of strategic persistence and tactical dynamism, marking a critical tactical success.",
    "keyMoments": [
      "48' - Haraguchi opens the scoring, catching Belgium off guard.",
      "52' - Inui's stunning long-range goal puts Japan ahead 2-0.",
      "69' - Vertonghen's header ignites Belgium's comeback hopes.",
      "74' - Fellaini equals the score with powerful header.",
      "94' - Chadli's last-gasp goal seals a remarkable comeback for Belgium."
    ],
    "historicalSignificance": "This match is remembered as one of the greatest comebacks in World Cup history. Belgium's resilience and tactical adaptability showcased the depth of talent in their squad while sending Japan home after a valiant effort.",
    "topPerformers": [
      {
        "name": "Thibaut Courtois",
        "side": "home",
        "position": "GK",
        "rating": 8.4,
        "note": "Made crucial saves that kept Belgium in the game."
      },
      {
        "name": "Jan Vertonghen",
        "side": "home",
        "position": "CB",
        "rating": 8.5,
        "note": "Scored and led the defense effectively during the comeback."
      },
      {
        "name": "Yuya Osako",
        "side": "away",
        "position": "ST",
        "rating": 7.9,
        "note": "Provided great movement and playmaking from the front."
      },
      {
        "name": "Gaku Shibasaki",
        "side": "away",
        "position": "CM",
        "rating": 8.1,
        "note": "Key in controlling the midfield in the first half."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Sweden vs Switzerland — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "sweden-vs-switzerland-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "July 3, 2018",
    "venue": "Saint Petersburg Stadium",
    "city": "St Petersburg, Russia",
    "home": {
      "name": "Sweden",
      "flag": "🇸🇪",
      "formation": "4-4-2",
      "color": "#006AA7",
      "colorDim": "rgba(0,106,167,0.18)",
      "players": [
        "Robin Olsen",
        "Mikael Lustig",
        "Victor Lindelöf",
        "Andreas Granqvist",
        "Emil forsberg",
        "Albin Ekdal",
        "Gustav Svensson",
        "Sebastian Larsson",
        "Marcus Berg",
        "Ola Toivonen",
        "John Guidetti"
      ],
      "score": 1
    },
    "away": {
      "name": "Switzerland",
      "flag": "🇨🇭",
      "formation": "4-2-3-1",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Yann Sommer",
        "Fabian Schär",
        "Manuel Akanji",
        "Nico Elvedi",
        "Ricardo Rodríguez",
        "Granit Xhaka",
        "Valon Behrami",
        "Steven Zuber",
        "Xherdan Shaqiri",
        "Breel Embolo",
        "Haris Seferović"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.15,
      "away": 0.85
    },
    "possession": {
      "home": 53,
      "away": 47
    },
    "timeline": [
      {
        "minute": "66'",
        "side": "home",
        "player": "Emil Forsberg",
        "type": "goal",
        "description": "Forsberg's deflected strike gives Sweden the lead."
      },
      {
        "minute": "90+2'",
        "side": "away",
        "player": "Granit Xhaka",
        "type": "yellow",
        "description": "Xhaka receives a yellow card for a late challenge."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 16,
        "away": 9,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 4,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Possession",
        "home": 53,
        "away": 47,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Passes",
        "home": 491,
        "away": 392,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "81%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 9,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "1.15",
        "away": "0.85",
        "homeWidth": 58,
        "awayWidth": 42
      }
    ],
    "metaDescription": "Sweden defeated Switzerland 1-0 in the Round of 16 at the 2018 FIFA World Cup, with Forsberg scoring a crucial goal.",
    "tacticalAnalysis": "Sweden deployed a 4-4-2 formation, focusing on a compact defense and utilizing high pressing to disrupt Switzerland's build-up play. The pair of forwards, Marcus Berg and Ola Toivonen, constantly challenged the Swiss backline, while Emil Forsberg operated effectively as a creative midfielder, often cutting in from the wing. Switzerland, aligning in a 4-2-3-1, struggled to penetrate Sweden's disciplined defense. Xhaka and Behrami acted as double pivots, yet found it hard to connect with the attacking trio consisting of Shaqiri, Zuber, and Embolo. The decisive moment came when Forsberg's shot deflected off a defender, leaving Sommer with no chance while encapsulating Sweden's tactical brilliance throughout the match.",
    "keyMoments": [
      "66' - Forsberg scores the only goal of the match.",
      "90+2' - Granit Xhaka booked for a late foul."
    ],
    "historicalSignificance": "This match marked Sweden's progression to the quarter-finals, showcasing their tactical evolution post-Ibrahimović. It highlighted Sweden's team-oriented play, as they advanced while emphasizing collective strategy over individual brilliance.",
    "topPerformers": [
      {
        "name": "Robin Olsen",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Outstanding saves to keep a clean sheet."
      },
      {
        "name": "Emil Forsberg",
        "side": "home",
        "position": "CAM",
        "rating": 8.5,
        "note": "Crucial goal and creative play throughout the match."
      },
      {
        "name": "Yann Sommer",
        "side": "away",
        "position": "GK",
        "rating": 8,
        "note": "Made several important saves to keep the scoreline low."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Colombia vs England — 2018 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "colombia-vs-england-2018-r16",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Round of 16",
    "date": "July 3, 2018",
    "venue": "Spartak Stadium",
    "city": "Moscow, Russia",
    "home": {
      "name": "Colombia",
      "flag": "🇨🇴",
      "formation": "4-4-2",
      "color": "#FCD116",
      "colorDim": "rgba(252,209,22,0.18)",
      "players": [
        "David Ospina",
        "Cristian Zapata",
        "Yerry Mina",
        "Davinson Sánchez",
        "Juan Cuadrado",
        "Wilmar Barrios",
        "Carlos Sánchez",
        "Juan Guillermo Cuadrado",
        "James Rodríguez",
        "Radamel Falcao",
        "Quintero"
      ],
      "score": 1
    },
    "away": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "3-5-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Jordan Pickford",
        "Kyle Walker",
        "John Stones",
        "Harry Maguire",
        "Kieran Trippier",
        "Dele Alli",
        "Jordan Henderson",
        "Jesse Lingard",
        "Harry Kane",
        "Raheem Sterling",
        "Marcus Rashford"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "3-4",
    "xG": {
      "home": 1.2,
      "away": 1.8
    },
    "possession": {
      "home": 41,
      "away": 59
    },
    "timeline": [
      {
        "minute": "3'",
        "side": "away",
        "player": "Harry Kane",
        "type": "pen_goal",
        "description": "Harry Kane scores from the penalty spot after a foul on Raheem Sterling."
      },
      {
        "minute": "93'",
        "side": "home",
        "player": "Yerry Mina",
        "type": "goal",
        "description": "Yerry Mina heads in a corner equalizing the match for Colombia."
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Eric Dier",
        "type": "pen_goal",
        "description": "Eric Dier scores the decisive penalty in the shootout."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 19,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 7,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Possession",
        "home": 41,
        "away": 59,
        "homeWidth": 41,
        "awayWidth": 59
      },
      {
        "label": "Passes",
        "home": 335,
        "away": 473,
        "homeWidth": 41,
        "awayWidth": 59
      },
      {
        "label": "Pass Accuracy",
        "home": "79%",
        "away": "81%",
        "homeWidth": 41,
        "awayWidth": 59
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 7,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 10,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "xG",
        "home": "1.20",
        "away": "1.80",
        "homeWidth": 42,
        "awayWidth": 58
      }
    ],
    "metaDescription": "Match report of Colombia vs England in the 2018 World Cup Round of 16, featuring a penalty shootout win for England.",
    "tacticalAnalysis": "Colombia's 4-4-2 formation was primarily focused on strong defensive structures, relying on counter-attacks. They utilized Yerry Mina and Radamel Falcao in attacking transitions, while James Rodríguez attempted to orchestrate play from a deeper position despite his injuries. England deployed a 3-5-2 that saw Kieran Trippier providing width on the right and increasing overlaps with Raheem Sterling. Harry Kane's pivotal role as a forward dictated the English attack, complemented by the dynamic midfield play of Jesse Lingard and Dele Alli. The game saw England controlling possession, while Colombia maintained a stronger aerial presence, particularly through Mina's equalizer, reflecting their set-piece prowess. Erik Dier's key penalty in the shootout showcased England's tactical restraint and preparation for high-pressure situations.",
    "keyMoments": [
      "3' - Kane scores early penalty, setting a dominating tone for England.",
      "93' - Mina's equalizer forces extra time, proving Colombia's resilience.",
      "120' - Dier's decisive penalty ends the shootout, breaking England's penalty curse."
    ],
    "historicalSignificance": "This match marked England's first penalty shootout victory since Euro 1996, demonstrating a critical psychological breakthrough for the team. Yerry Mina's dramatic late equalizer highlighted Colombia's fighting spirit, making this encounter a memorable chapter in World Cup history.",
    "topPerformers": [
      {
        "name": "Yerry Mina",
        "side": "home",
        "position": "CB",
        "rating": 8.5,
        "note": "Mina's defensive contributions and 93rd-minute goal were crucial."
      },
      {
        "name": "Harry Kane",
        "side": "away",
        "position": "ST",
        "rating": 9,
        "note": "Kane's early penalty strike set the stage for England's tactical execution."
      },
      {
        "name": "Eric Dier",
        "side": "away",
        "position": "CDM",
        "rating": 8.6,
        "note": "Dier's composure in the shootout exemplified leadership under pressure."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Belgium — 2018 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-belgium-2018-qf",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Quarter-Final",
    "date": "July 6, 2018",
    "venue": "Kazan Arena",
    "city": "Kazan, Russia",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Alisson",
        "Danilo",
        "Thiago Silva",
        "Miranda",
        "Marcelo",
        "Casemiro",
        "Paulinho",
        "Coutinho",
        "Neymar",
        "Willian",
        "Gabriel Jesus"
      ],
      "score": 1
    },
    "away": {
      "name": "Belgium",
      "flag": "🇧🇪",
      "formation": "3-4-2-1",
      "color": "#EDCB27",
      "colorDim": "rgba(237,203,39,0.18)",
      "players": [
        "Thibaut Courtois",
        "Vincent Kompany",
        "Jan Vertonghen",
        "Toby Alderweireld",
        "Nacer Chadli",
        "Axel Witsel",
        "Kevin De Bruyne",
        "Eden Hazard",
        "Dries Mertens",
        "Romelu Lukaku",
        "Youri Tielemans"
      ],
      "score": 2
    },
    "status": "FT",
    "xG": {
      "home": 1.83,
      "away": 2.33
    },
    "possession": {
      "home": 57,
      "away": 43
    },
    "timeline": [
      {
        "minute": "10'",
        "side": "away",
        "player": "Vincent Kompany",
        "type": "own_goal",
        "description": "Fernandinho's own goal put Belgium ahead."
      },
      {
        "minute": "31'",
        "side": "away",
        "player": "Kevin De Bruyne",
        "type": "goal",
        "description": "De Bruyne scores a stunning long-range goal doubling Belgium's lead."
      },
      {
        "minute": "76'",
        "side": "home",
        "player": "Renato Augusto",
        "type": "goal",
        "description": "Renato Augusto pulls one back for Brazil."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 19,
        "away": 9,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 5,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Possession",
        "home": 57,
        "away": 43,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Passes",
        "home": 561,
        "away": 366,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "75%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 12,
        "away": 2,
        "homeWidth": 86,
        "awayWidth": 14
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 5,
        "homeWidth": 74,
        "awayWidth": 26
      },
      {
        "label": "xG",
        "home": "1.83",
        "away": "2.33",
        "homeWidth": 57,
        "awayWidth": 43
      }
    ],
    "metaDescription": "Belgium stunned Brazil to reach the semi-finals after a thrilling quarter-final match in the 2018 FIFA World Cup.",
    "tacticalAnalysis": "In this quarter-final clash, Brazil deployed a 4-2-3-1 formation, which featured Neymar as a central playmaker, supported by Willian and Coutinho on the wings. The Brazilian midfield duo of Casemiro and Paulinho attempted to dominate the center, but they were tactically outmaneuvered by Belgium's pragmatic 3-4-2-1 setup. Belgium played with a three-man defense, where Vincent Kompany, Jan Vertonghen, and Toby Alderweireld were tasked with containing Brazil's dynamic attack. The wing-backs, Nacer Chadli and Thomas Meunier, provided width and crucial defensive cover. Belgium's goals early in the match showcased their counter-attacking prowess; the own goal by Fernandinho arose from a direct free-kick situation, while De Bruyne's long-range strike came from a well-executed transition after winning back possession. Brazil struggled to break down the organized Belgian defense and despite showing attacking intent, their efforts fell short.",
    "keyMoments": [
      "10' - Fernandinho's own goal gives Belgium the early lead.",
      "31' - De Bruyne doubles Belgium's advantage with a stunning goal.",
      "76' - Renato Augusto pulls one back for Brazil, giving them a glimmer of hope.",
      "90+3' - Courtois makes a crucial save to deny Brazil an equalizer."
    ],
    "historicalSignificance": "This match is significant as it saw Belgium eliminate the favorites Brazil, marking a major turning point in World Cup history. It highlighted Belgium's emergence as a footballing powerhouse and showcased their talented squad's ability to perform against elite teams.",
    "topPerformers": [
      {
        "name": "Thibaut Courtois",
        "side": "away",
        "position": "GK",
        "rating": 9.2,
        "note": "His 9 saves included a crucial stop against Neymar late in the match."
      },
      {
        "name": "Kevin De Bruyne",
        "side": "away",
        "position": "CM",
        "rating": 8.7,
        "note": "His brilliant long-range goal was pivotal in Belgium's victory."
      },
      {
        "name": "Renato Augusto",
        "side": "home",
        "position": "CM",
        "rating": 8,
        "note": "Provided creativity and scored Brazil's only goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Uruguay — 2018 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-uruguay-2018-qf",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Quarter-Final",
    "date": "July 6, 2018",
    "venue": "Nizhny Novgorod Stadium",
    "city": "Nizhny Novgorod, Russia",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-2-3-1",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Hugo Lloris",
        "Benjamin Pavard",
        "Raphaël Varane",
        "Samuel Umtiti",
        "Lucas Hernandez",
        "N'Golo Kanté",
        "Paul Pogba",
        "Blaise Matuidi",
        "Antoine Griezmann",
        "Kylian Mbappé",
        "Olivier Giroud"
      ],
      "score": 2
    },
    "away": {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "formation": "4-4-2",
      "color": "#4EABDF",
      "colorDim": "rgba(78,171,223,0.18)",
      "players": [
        "Fernando Muslera",
        "Maxi Pereira",
        "José María Giménez",
        "Diego Godín",
        "Martín Cáceres",
        "Nahitan Nández",
        "Matías Vecino",
        "Rodrigo Bentancur",
        "Giorgian De Arrascaeta",
        "Edinson Cavani",
        "Luis Suárez"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.84,
      "away": 0.32
    },
    "possession": {
      "home": 60,
      "away": 40
    },
    "timeline": [
      {
        "minute": "40'",
        "side": "home",
        "player": "Raphaël Varane",
        "type": "goal",
        "description": "Headed France into the lead from a Griezmann free-kick."
      },
      {
        "minute": "61'",
        "side": "home",
        "player": "Fernando Muslera",
        "type": "own_goal",
        "description": "Muslera's poor clearance led to an own goal for the second."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 17,
        "away": 6,
        "homeWidth": 74,
        "awayWidth": 26
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 2,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Possession",
        "home": 60,
        "away": 40,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 400,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "73%",
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 1,
        "homeWidth": 88,
        "awayWidth": 12
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 14,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "xG",
        "home": "1.84",
        "away": "0.32",
        "homeWidth": 85,
        "awayWidth": 15
      }
    ],
    "metaDescription": "France defeated Uruguay 2-0 in the 2018 FIFA World Cup quarter-final, showcasing a dominant performance.",
    "tacticalAnalysis": "France set up in a 4-2-3-1 formation, utilizing the pace and skill of Kylian Mbappé and Antoine Griezmann in the attacking midfield roles to stretch the Uruguay defense. N'Golo Kanté and Paul Pogba controlled the midfield effectively, breaking up Uruguay's attempts to build play while transitioning quickly to attack. Uruguay, lacking Edinson Cavani, formed a 4-4-2, relying on Luis Suárez’s creativity. However, the absence of Cavani significantly weakened their forward threat. Varane's header from a Griezmann free-kick and Muslera’s unfortunate own goal sealed the match, highlighting France's ability to capitalize on set-pieces and opposition mistakes. The defensive partnership of Umtiti and Varane contained Suárez well, while the full-backs contributed to both defense and attack.",
    "keyMoments": [
      "40' - Varane scores with a header to give France the lead.",
      "61' - Own goal by Muslera doubles France's lead.",
      "78' - Griezmann threatens again with a long-range effort.",
      "90+2' - France holds strong defensively to secure their spot in the semi-finals."
    ],
    "historicalSignificance": "This match marked France's continued rise under Didier Deschamps, showcasing their potential as title contenders. The absence of Cavani was a crucial factor, underlining the importance of key players in knockout stage matches.",
    "topPerformers": [
      {
        "name": "Raphaël Varane",
        "side": "home",
        "position": "CB",
        "rating": 9.2,
        "note": "Outstanding defensively and scored the opening goal."
      },
      {
        "name": "Antoine Griezmann",
        "side": "home",
        "position": "CAM",
        "rating": 8.5,
        "note": "Excellent distribution and assisted the first goal."
      },
      {
        "name": "Fernando Muslera",
        "side": "away",
        "position": "GK",
        "rating": 7,
        "note": "Despite the own goal, made crucial saves to keep Uruguay in the game."
      },
      {
        "name": "Luis Suárez",
        "side": "away",
        "position": "ST",
        "rating": 7.2,
        "note": "Tried to create opportunities but lacked support without Cavani."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Sweden — 2018 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-sweden-2018-qf",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Quarter-Final",
    "date": "July 7, 2018",
    "venue": "Samara Arena",
    "city": "Samara, Russia",
    "home": {
      "name": "England",
      "flag": "🏴",
      "formation": "3-5-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Jordan Pickford",
        "Kyle Walker",
        "John Stones",
        "Harry Maguire",
        "Kieran Trippier",
        "Jordan Henderson",
        "Dele Alli",
        "Eric Dier",
        "Raheem Sterling",
        "Harry Kane",
        "Jesse Lingard"
      ],
      "score": 2
    },
    "away": {
      "name": "Sweden",
      "flag": "🇸🇪",
      "formation": "4-4-2",
      "color": "#006AA7",
      "colorDim": "rgba(0,106,167,0.18)",
      "players": [
        "Robin Olsen",
        "Mikael Lustig",
        "Victor Lindelöf",
        "Andreas Granqvist",
        "Emil Krafth",
        "Albin Ekdal",
        "Gustav Svensson",
        "Viktor Claesson",
        "Ola Toivonen",
        "Marcus Berg",
        "John Guidetti"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.89,
      "away": 0.45
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "30'",
        "side": "home",
        "player": "Harry Maguire",
        "type": "goal",
        "description": "Maguire's powerful header from a corner opened the scoring."
      },
      {
        "minute": "58'",
        "side": "home",
        "player": "Dele Alli",
        "type": "goal",
        "description": "Dele Alli's header doubled the lead."
      },
      {
        "minute": "67'",
        "side": "away",
        "player": "Albin Ekdal",
        "type": "yellow",
        "description": "Ekdal booked for a late challenge."
      },
      {
        "minute": "75'",
        "side": "home",
        "player": "Eric Dier",
        "type": "sub",
        "description": "Dier replaced Henderson."
      },
      {
        "minute": "82'",
        "side": "away",
        "player": "Ola Toivonen",
        "type": "yellow",
        "description": "Toivonen booked for a foul."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "Raheem Sterling",
        "type": "sub",
        "description": "Sterling substituted for Rashford."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 19,
        "away": 8,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 2,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Passes",
        "home": 580,
        "away": 360,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "75%",
        "homeWidth": 85,
        "awayWidth": 75
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 15,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "1.89",
        "away": "0.45",
        "homeWidth": 80,
        "awayWidth": 20
      }
    ],
    "metaDescription": "England defeated Sweden 2-0 in the quarter-finals of the 2018 World Cup, advancing to their first semi-final since 1990.",
    "tacticalAnalysis": "In this match, England deployed a 3-5-2 formation, with three central defenders allowing them to control the midfield through the wing-backs, Kieran Trippier and Ashley Young. The two strikers, Harry Kane and Raheem Sterling, provided mobility and pressing intensity. Sweden, on the other hand, utilized a traditional 4-4-2, aiming to soak up pressure and hit on the counter. However, they struggled to cope with England's set-piece strength, particularly evident in Maguire's opening goal. The Swedish midfield worked hard to nullify England's width, yet their lack of creativity up front was apparent as they failed to create significant chances against a well-organized English defense. Dele Alli's second goal showcased England’s effectiveness from crosses, further emphasizing the tactical superiority of England throughout the match. Henderson's central role heavily involved pressing and recycling the ball, while the defensive duo of Stones and Maguire excelled at maintaining shape and launching attacking transitions.",
    "keyMoments": [
      "30' - Maguire scores the first goal with a powerful header from a corner, breaking the deadlock.",
      "58' - Dele Alli heads home to double the lead, showcasing England's aerial threat.",
      "67' - Ekdal receives a yellow card for a late challenge, indicating Sweden's frustration.",
      "75' - Dier substituted in for Henderson to reinforce England's midfield with fresh legs.",
      "82' - Toivonen booked, contributing to Sweden's mounting caution.",
      "90' - Sterling is replaced by Rashford, ensuring fresh legs for the closing minutes."
    ],
    "historicalSignificance": "This match marked England's first World Cup semi-final since 1990, reigniting hopes of football's return home and solidifying Gareth Southgate's leadership. The excitement generated in England had a profound impact on national morale during the tournament.",
    "topPerformers": [
      {
        "name": "Harry Maguire",
        "side": "home",
        "position": "CB",
        "rating": 9.2,
        "note": "Outstanding in defense and scored the crucial opening goal."
      },
      {
        "name": "Jordan Henderson",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Controlled the midfield with authority and helped in transitioning play."
      },
      {
        "name": "Dele Alli",
        "side": "home",
        "position": "CAM",
        "rating": 8.8,
        "note": "Scored a vital goal and created opportunities with his movement and passing."
      },
      {
        "name": "Marcus Berg",
        "side": "away",
        "position": "ST",
        "rating": 7,
        "note": "Worked hard but was isolated, unable to find meaningful chances."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Croatia vs Russia — 2018 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "croatia-vs-russia-2018-qf",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Quarter-Final",
    "date": "July 7, 2018",
    "venue": "Fisht Olympic Stadium",
    "city": "Sochi, Russia",
    "home": {
      "name": "Croatia",
      "flag": "🇭🇷",
      "formation": "4-3-3",
      "color": "#CC1122",
      "colorDim": "rgba(204,17,34,0.18)",
      "players": [
        "Danijel Subašić",
        "Šime Vrsaljko",
        "Dejan Lovren",
        "Domagoj Vida",
        "Ivan Strinić",
        "Luka Modrić",
        "Ivan Rakitić",
        "Ante Rebić",
        "Mario Mandžukić",
        "Ivan Perišić",
        "Andrej Kramarić"
      ],
      "score": 2
    },
    "away": {
      "name": "Russia",
      "flag": "🇷🇺",
      "formation": "4-2-3-1",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Igor Akinfeev",
        "Mario Fernandes",
        "Ilya Kutepov",
        "Sergei Ignashevich",
        "Fedor Kudryashov",
        "Dmitri Barinov",
        "Roman Zobnin",
        "Alan Dzagoev",
        "Artem Dzyuba",
        "Denis Cheryshev",
        "Aleksandr Golovin"
      ],
      "score": 2
    },
    "status": "PSO",
    "penaltyScore": "4-3",
    "xG": {
      "home": 2.67,
      "away": 2.18
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "21'",
        "side": "away",
        "player": "Artem Dzyuba",
        "type": "goal",
        "description": "Dzyuba scores with a powerful header from a corner."
      },
      {
        "minute": "28'",
        "side": "home",
        "player": "Andrej Kramarić",
        "type": "goal",
        "description": "Kramarić equalizes with a well-placed shot from the edge of the box."
      },
      {
        "minute": "100'",
        "side": "home",
        "player": "Domagoj Vida",
        "type": "goal",
        "description": "Vida scores with a header during extra time."
      },
      {
        "minute": "115'",
        "side": "away",
        "player": "Mario Fernandes",
        "type": "goal",
        "description": "Fernandes equalizes with a volley from a cross."
      },
      {
        "minute": "120+2'",
        "side": "home",
        "player": "Ivan Strinić",
        "type": "sub",
        "description": "Strinić comes on for Kramarić."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 20,
        "away": 10,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 5,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 385,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "76%",
        "homeWidth": 85,
        "awayWidth": 76
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 11,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "xG",
        "home": "2.67",
        "away": "2.18",
        "homeWidth": 67,
        "awayWidth": 33
      }
    ],
    "metaDescription": "A thrilling quarter-final match at the FIFA World Cup 2018 where Croatia defeated Russia through penalties after a 2-2 draw.",
    "tacticalAnalysis": "Croatia utilized a 4-3-3 formation, emphasizing ball control and a fluid attacking transition. Luka Modrić orchestrated the midfield, supported by Ivan Rakitić's pressing and quick passes, while the front three of Kramarić, Mandžukić, and Perišić sought to create overloads on the wings. Russia, adopting a 4-2-3-1, focused on counter-attacking, leveraging the physicality of Dzyuba upfront and the creativity of Golovin and Dzagoev in the attacking midfield pivots. The game showcased tactical flexibility, with Croatia dominating possession yet frequently exposed on counters, notably leading to their first goal conceded. In extra time, Croatia's substitutions and shift to a more direct approach allowed them to briefly take the lead before Russia's resolute spirit pulled them back in through Fernandes. Manager Zlatko Dalić's decisions to substitute players later in the match were crucial as they added fresh legs and tactical adaptability to maintain pressure on a tiring Russian side.",
    "keyMoments": [
      "21': Dzyuba scores the opener from a corner, setting the tone for early tension.",
      "28': Kramarić equalizes, showcasing Croatia's determination and striking ability.",
      "100': Vida's header gives Croatia hope in extra time, capitalizing on set pieces.",
      "115': Fernandes strikes back for Russia, demonstrating their resilience and fighting spirit.",
      "Penalty Shootout: Subašić becomes the hero, saving two penalties to ensure Croatia advances."
    ],
    "historicalSignificance": "This match is pivotal in World Cup history as it marks Croatia's continued rise in international football, illustrating their mental resilience in high-pressure situations. The victory through penalties not only illustrated their strong mentality but also highlighted the emotional toll on the host nation, Russia, ending their remarkable home tournament run.",
    "topPerformers": [
      {
        "name": "Danijel Subašić",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Crucial saves in the penalty shootout, showcasing his composure under pressure."
      },
      {
        "name": "Andrej Kramarić",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Instrumental in attack, scored the equalizing goal and maintained pressure on the defense."
      },
      {
        "name": "Artem Dzyuba",
        "side": "away",
        "position": "ST",
        "rating": 8.8,
        "note": "Scored the opening goal and was a constant threat in the air, leading the attack bravely."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Croatia vs England — 2018 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "croatia-vs-england-2018-sf",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Semi-Final",
    "date": "July 11, 2018",
    "venue": "Luzhniki Stadium",
    "city": "Moscow, Russia",
    "home": {
      "name": "Croatia",
      "flag": "🇭🇷",
      "formation": "4-3-3",
      "color": "#CC1122",
      "colorDim": "rgba(204,17,34,0.18)",
      "players": [
        "Danijel Subašić",
        "Šime Vrsaljko",
        "Dejan Lovren",
        "Domagoj Vida",
        "Ivan Strinić",
        "Marcelo Brozović",
        "Ivan Rakitić",
        "Luka Modrić",
        "Ante Rebić",
        "Mario Mandžukić",
        "Ivan Perišić"
      ],
      "score": 2
    },
    "away": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "3-5-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Jordan Pickford",
        "Kyle Walker",
        "John Stones",
        "Harry Maguire",
        "Kieran Trippier",
        "Jordan Henderson",
        "Dele Alli",
        "Jesse Lingard",
        "Ashley Young",
        "Harry Kane",
        "Raheem Sterling"
      ],
      "score": 1
    },
    "status": "AET",
    "xG": {
      "home": 2.22,
      "away": 1.08
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "5'",
        "side": "away",
        "player": "Kieran Trippier",
        "type": "goal",
        "description": "Trippier scored a stunning free-kick to give England an early lead."
      },
      {
        "minute": "68'",
        "side": "home",
        "player": "Ivan Perišić",
        "type": "goal",
        "description": "Perišić equalized with a brilliant left-foot half-volley."
      },
      {
        "minute": "109'",
        "side": "home",
        "player": "Mario Mandžukić",
        "type": "goal",
        "description": "Mandžukić bundled in the winner during the first half of extra time."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 20,
        "away": 6,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 2,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 300,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "78%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 2,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "2.22",
        "away": "1.08",
        "homeWidth": 67,
        "awayWidth": 33
      }
    ],
    "metaDescription": "Croatia defeated England 2-1 in the FIFA World Cup 2018 semi-final to reach their first World Cup final.",
    "tacticalAnalysis": "Croatia utilized a 4-3-3 formation, with Modrić orchestrating the midfield, supported by Brozović's defensive cover. England lined up in a 3-5-2, with Trippier's wing-back role proving crucial early on. After taking the lead with his free-kick, England retreated to defend, allowing Croatia to dominate possession. Perišić's equalizer came from well-coordinated buildup play that exploited England's defensive vulnerabilities. In extra time, Croatia capitalized on their stamina and strategic substitutions, resulting in Mandžukić's decisive goal from close range, highlighting England's fatigue.",
    "keyMoments": [
      "5' - Trippier's stunning free-kick puts England ahead.",
      "68' - Perišić equalizes with a left-footed strike.",
      "109' - Mandžukić scores the winner in extra time."
    ],
    "historicalSignificance": "This match marked Croatia's first entry into a World Cup final, showcasing their resilience and tactical prowess. England's early exit at this stage left fans disappointed, but it set the stage for a renewed focus on the national team.",
    "topPerformers": [
      {
        "name": "Luka Modrić",
        "side": "home",
        "position": "CM",
        "rating": 9,
        "note": "Masterfully controlled the midfield and directed play."
      },
      {
        "name": "Kieran Trippier",
        "side": "away",
        "position": "RB",
        "rating": 8,
        "note": "Opened the scoring and contributed defensively."
      },
      {
        "name": "Mario Mandžukić",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Scored the crucial extra-time goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Belgium vs England — 2018 Third Place
  // ─────────────────────────────────────────────
  {
    "id": "belgium-vs-england-2018-3rd",
    "tournament": "FIFA World Cup 2018",
    "year": 2018,
    "stage": "Third Place",
    "date": "July 14, 2018",
    "venue": "Saint Petersburg Stadium",
    "city": "St Petersburg, Russia",
    "home": {
      "name": "Belgium",
      "flag": "🇧🇪",
      "formation": "3-4-2-1",
      "color": "#EDCB27",
      "colorDim": "rgba(237,203,39,0.18)",
      "players": [
        "Thibaut Courtois",
        "Toby Alderweireld",
        "Vincent Kompany",
        "Jan Vertonghen",
        "Thomas Meunier",
        "Axel Witsel",
        "Kevin De Bruyne",
        "Nacer Chadli",
        "Eden Hazard",
        "Romelu Lukaku",
        "Dries Mertens"
      ],
      "score": 2
    },
    "away": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "3-5-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Jordan Pickford",
        "John Stones",
        "Harry Maguire",
        "Kyle Walker",
        "Kieran Trippier",
        "Dele Alli",
        "Jordan Henderson",
        "Fabian Delph",
        "Jesse Lingard",
        "Harry Kane",
        "Raheem Sterling"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.25,
      "away": 0.58
    },
    "possession": {
      "home": 59,
      "away": 41
    },
    "timeline": [
      {
        "minute": "4'",
        "side": "home",
        "player": "Thomas Meunier",
        "type": "goal",
        "description": "Meunier scored with a low shot after a quick counter-attack."
      },
      {
        "minute": "20'",
        "side": "home",
        "player": "Romelu Lukaku",
        "type": "goal",
        "description": "Lukaku doubled the lead with a clinical finish from close range."
      },
      {
        "minute": "60'",
        "side": "away",
        "player": "Kieran Trippier",
        "type": "yellow",
        "description": "Trippier booked for a foul on Hazard."
      },
      {
        "minute": "75'",
        "side": "away",
        "player": "Jamie Vardy",
        "type": "sub",
        "description": "Vardy replaced Sterling to add more attacking threat."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "Dries Mertens",
        "type": "sub",
        "description": "Mertens replaced Lukaku for the final minutes."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 18,
        "away": 9,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 59,
        "away": 41,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Passes",
        "home": 550,
        "away": 385,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 5,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 11,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "xG",
        "home": "2.25",
        "away": "0.58",
        "homeWidth": 79,
        "awayWidth": 21
      }
    ],
    "metaDescription": "Belgium secured third place at the 2018 World Cup with a stunning win over England, showcasing their Golden Generation.",
    "tacticalAnalysis": "Belgium adopted a 3-4-2-1 formation, enabling their wing-backs to exploit space on the flanks, with Meunier's early goal epitomizing this strategy. Lukaku operated as a lone striker supported by Hazard and De Bruyne, who frequently interchanged positions to confuse England's defense. England, setup in a 3-5-2 formation, struggled to create clear chances, with Kane isolated and heavily marked. Belgium's midfield dominance, particularly by Witsel and De Bruyne, stifled England's build-up play, making it difficult for them to transition quickly into attack. The effectiveness of Belgium's pressing scheme forced England into errors, leading to goal-scoring opportunities, cementing their historic third-place finish.",
    "keyMoments": [
      "4' - Meunier scores the opener with a well-placed shot.",
      "20' - Lukaku extends the lead with a powerful finish.",
      "60' - Trippier booked for a foul on Hazard.",
      "75' - Vardy brought on to enhance attacking options.",
      "90' - Mertens substituted in for Lukaku to close out the match."
    ],
    "historicalSignificance": "This match marked Belgium's best-ever World Cup finish, achieving third place and showcasing their talented squad, known as the 'Golden Generation'. It highlighted a successful tournament campaign and boosted confidence for future competitions.",
    "topPerformers": [
      {
        "name": "Thibaut Courtois",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Made several crucial saves to maintain a clean sheet."
      },
      {
        "name": "Eden Hazard",
        "side": "home",
        "position": "CAM",
        "rating": 8.5,
        "note": "Provided key passes and was influential in the attack."
      },
      {
        "name": "Romelu Lukaku",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Scored a vital goal and led the line effectively."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Spain vs Netherlands — 2014 Group Stage (Group B)
  // ─────────────────────────────────────────────
  {
    "id": "spain-vs-netherlands-2014-group",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Group Stage (Group B)",
    "date": "June 13, 2014",
    "venue": "Arena Fonte Nova",
    "city": "Salvador, Brazil",
    "home": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-3-3",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Iker Casillas",
        "Raúl Albiol",
        "Gerard Piqué",
        "Sergio Ramos",
        "Jordi Alba",
        "Andrés Iniesta",
        "Xavi",
        "Cesc Fàbregas",
        "David Silva",
        "Fernando Torres",
        "Juan Mata"
      ],
      "score": 1
    },
    "away": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Jasper Cillessen",
        "Daryl Janmaat",
        "Ron Vlaar",
        "Martin de Roon",
        "Bruno Martins Indi",
        "Jordy Clasie",
        "Arjen Robben",
        " Wesley Sneijder",
        "Robin van Persie",
        "Klaas-Jan Huntelaar",
        "Daley Blind"
      ],
      "score": 5
    },
    "status": "FT",
    "xG": {
      "home": 1.22,
      "away": 3.82
    },
    "possession": {
      "home": 45,
      "away": 55
    },
    "timeline": [
      {
        "minute": "11'",
        "side": "away",
        "player": "Robin van Persie",
        "type": "goal",
        "description": "Van Persie heads in from a cross, equalizing the score."
      },
      {
        "minute": "20'",
        "side": "away",
        "player": "Arjen Robben",
        "type": "goal",
        "description": "Robben scores with a powerful shot into the corner."
      },
      {
        "minute": "44'",
        "side": "away",
        "player": "Arjen Robben",
        "type": "goal",
        "description": "Robben scores another after a swift counter-attack."
      },
      {
        "minute": "55'",
        "side": "away",
        "player": "Robin van Persie",
        "type": "goal",
        "description": "Van Persie scores his second and Netherlands' fourth."
      },
      {
        "minute": "69'",
        "side": "away",
        "player": "Klaas-Jan Huntelaar",
        "type": "goal",
        "description": "Huntelaar converts a penalty."
      },
      {
        "minute": "73'",
        "side": "home",
        "player": "Juan Mata",
        "type": "goal",
        "description": "Mata pulls one back for Spain."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 11,
        "away": 17,
        "homeWidth": 39,
        "awayWidth": 61
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 10,
        "homeWidth": 23,
        "awayWidth": 77
      },
      {
        "label": "Possession",
        "home": 45,
        "away": 55,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Passes",
        "home": 400,
        "away": 290,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "76%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 3,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 9,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "xG",
        "home": "1.22",
        "away": "3.82",
        "homeWidth": 24,
        "awayWidth": 76
      }
    ],
    "metaDescription": "Spain faces a humiliating defeat to Netherlands in the 2014 FIFA World Cup group stage, a rematch of the 2010 final.",
    "tacticalAnalysis": "Spain entered the match with their typical tiki-taka approach, aiming for dominance through short passes and possession. They lined up in a 4-3-3 formation with a midfield trio of Iniesta, Xavi, and Fàbregas, intending to control the game's tempo. However, the Netherlands implemented a high-pressing system that disrupted Spain's rhythm. Their direct style of play, facilitated by speedy wingers Robben and Van Persie, posed constant threats on the break. The first goal came from Van Persie's iconic header, capitalizing on Spain's defensive disarray from an incoming cross. Robben's pace and skill managed to exploit Spain's high defensive line, leading to two more goals before halftime. Spain's attempts to regain control failed as their midfielders were bypassed with ease, marking the loss of their dominance from previous years. The introduction of Mata towards the latter stages provided some fresh energy for Spain, but by then, the game was already lost, confirming Spain's football struggles and the tactical evolution of the Netherlands.",
    "keyMoments": [
      "11': Van Persie scores with a diving header, equalizing.",
      "20': Robben takes the lead for Netherlands with a powerful low shot.",
      "44': Robben scores again after a swift counter-attack.",
      "55': Van Persie scores his second, turning the match decisively.",
      "69': Huntelaar converts a penalty for Netherlands.",
      "73': Mata scores a consolation goal for Spain."
    ],
    "historicalSignificance": "This match marked a significant turning point for Spanish football, heralding the end of their dominance as world champions. It highlighted the tactical evolution of teams to counter Spain's tiki-taka style, with Netherlands showcasing a more direct and aggressive approach.",
    "topPerformers": [
      {
        "name": "Robin van Persie",
        "side": "away",
        "position": "ST",
        "rating": 9.2,
        "note": "Outstanding performance with two goals and a key assist."
      },
      {
        "name": "Arjen Robben",
        "side": "away",
        "position": "RW",
        "rating": 8.5,
        "note": "Instrumental in attacking moves and scored two goals."
      },
      {
        "name": "Iker Casillas",
        "side": "home",
        "position": "GK",
        "rating": 6.5,
        "note": "Made crucial saves but was overworked and conceded five goals."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs USA — 2014 Group Stage (Group G)
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-usa-2014-group",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Group Stage (Group G)",
    "date": "June 26, 2014",
    "venue": "Arena Pernambuco",
    "city": "Recife, Brazil",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-3-3",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Philipp Lahm",
        "Per Mertesacker",
        "Mats Hummels",
        "Jerome Boateng",
        "Bastian Schweinsteiger",
        "Toni Kroos",
        "Thomas Müller",
        "Mario Götze",
        "Mesut Özil",
        "Miroslav Klose"
      ],
      "score": 1
    },
    "away": {
      "name": "USA",
      "flag": "🇺🇸",
      "formation": "4-4-2",
      "color": "#3C3B6E",
      "colorDim": "rgba(60,59,110,0.18)",
      "players": [
        "Tim Howard",
        "Graham Zusi",
        "Geoff Cameron",
        "Matt Besler",
        "Fabian Johnson",
        "Michael Bradley",
        "Jermaine Jones",
        "Clint Dempsey",
        "Jozy Altidore",
        "Alejandro Bedoya",
        "Kyle Beckerman"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.3,
      "away": 0.6
    },
    "possession": {
      "home": 55,
      "away": 45
    },
    "timeline": [
      {
        "minute": "55'",
        "side": "home",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller scored with a low shot from inside the box"
      },
      {
        "minute": "89'",
        "side": "away",
        "player": "Geoff Cameron",
        "type": "yellow",
        "description": "Cameron booked for a foul"
      },
      {
        "minute": "90+3'",
        "side": "away",
        "player": "Clint Dempsey",
        "type": "yellow",
        "description": "Dempsey received a yellow card for time wasting"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 15,
        "away": 7,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 55,
        "away": 45,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Passes",
        "home": 561,
        "away": 384,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "80%",
        "homeWidth": 87,
        "awayWidth": 80
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 2,
        "homeWidth": 78,
        "awayWidth": 22
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 15,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "xG",
        "home": "2.30",
        "away": "0.60",
        "homeWidth": 100,
        "awayWidth": 26
      }
    ],
    "metaDescription": "Germany edges USA 1-0 in a tense World Cup clash, with crucial performances and standout moments.",
    "tacticalAnalysis": "Germany employed a 4-3-3 formation, utilizing width through the flanks with Müller and Götze pushing forward, creating overloads. Lahm's role as an attacking full-back was pivotal, while Kroos controlled the tempo from midfield. The USA, in a 4-4-2, adopted a compact shape, relying on the pace of Dempsey and Altidore on the counter. Jones provided crucial support in both defense and attack, while Howard's goalkeeping kept them in the match, culminating in a disciplined performance. Germany's goal came from a quick transition, exploiting space left by the USA who had committed players forward searching for a draw, demonstrating the effectiveness of their counter-attacking strategy.",
    "keyMoments": [
      "55' - Müller scores, decisive goal in a tightly contested match.",
      "89' - Cameron yellow card, highlights USA's mounting frustrations.",
      "90+3' - Dempsey booked for time-wasting, signifies USA's desperation."
    ],
    "historicalSignificance": "Germany's victory secured their position at the top of Group G, showcasing their resilience and tactical ingenuity. The match remains significant for the USA as they narrowly missed advancement but highlighted their growth and competitiveness on the world stage.",
    "topPerformers": [
      {
        "name": "Manuel Neuer",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Key saves that maintained the narrow lead."
      },
      {
        "name": "Jermaine Jones",
        "side": "away",
        "position": "CM",
        "rating": 8.5,
        "note": "Outstanding performance in midfield and defense."
      },
      {
        "name": "Thomas Müller",
        "side": "home",
        "position": "RW",
        "rating": 8.8,
        "note": "Scored the only goal, constantly threatened the USA defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Chile — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-chile-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "June 28, 2014",
    "venue": "Estádio Mineirão",
    "city": "Belo Horizonte, Brazil",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Júlio César",
        "Maicon",
        "Thiago Silva",
        "David Luiz",
        "Marcelo",
        "Fernandinho",
        "Paulinho",
        "Oscar",
        "Neymar",
        "Hulk",
        "Fred"
      ],
      "score": 1
    },
    "away": {
      "name": "Chile",
      "flag": "🇨🇱",
      "formation": "3-3-1-3",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Claudio Bravo",
        "Gonzalo Jara",
        "Eugenio Mena",
        "Gary Medel",
        "Charles Aránguiz",
        "Marcelo Díaz",
        "Arturo Vidal",
        "Alexis Sánchez",
        "Jorge Valdivia",
        "Alexis Sánchez",
        "Eduardo Vargas"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "3-2",
    "xG": {
      "home": 1.45,
      "away": 1.2
    },
    "possession": {
      "home": 55,
      "away": 45
    },
    "timeline": [
      {
        "minute": "38'",
        "side": "away",
        "player": "Alexis Sánchez",
        "type": "goal",
        "description": "Sanchez scored after a quick counter-attack."
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "David Luiz",
        "type": "pen_goal",
        "description": "David Luiz scored the first penalty for Brazil."
      },
      {
        "minute": "120'",
        "side": "away",
        "player": "Pinilla",
        "type": "pen_miss",
        "description": "Pinilla hit the post during penalties."
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "Júlio César",
        "type": "yellow",
        "description": "César received a yellow card for time wasting."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 18,
        "away": 12,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 4,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Possession",
        "home": 55,
        "away": 45,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Passes",
        "home": 450,
        "away": 350,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Pass Accuracy",
        "home": "81%",
        "away": "78%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 13,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "xG",
        "home": "1.45",
        "away": "1.20",
        "homeWidth": 55,
        "awayWidth": 45
      }
    ],
    "metaDescription": "Brazil faced Chile in a thrilling Round of 16 match in the 2014 FIFA World Cup, leading to a penalty shootout.",
    "tacticalAnalysis": "Brazil utilized a 4-2-3-1 formation, employing Neymar as a free-roaming player behind the striker Fred. The two holding midfielders, Fernandinho and Paulinho, provided structure and facilitated ball progression. Chile opted for a 3-3-1-3, with Alexis Sánchez and Eduardo Vargas pushing high to exploit Brazil’s wide areas. Brazil’s full-backs advanced frequently, creating width and opportunities down the flanks. Chile's pressing strategy applied pressure on Brazil’s defenders, particularly targeting careless touches. The first goal came from Sánchez, who capitalized on a fast break, demonstrating Chile’s tactical efficiency. In the second half, Brazil responded with increased possession and intent, but failed to convert several chances before the match proceeded to penalties.",
    "keyMoments": [
      "38' - Alexis Sánchez gives Chile the lead after a swift counter-attack.",
      "90' - Brazil press for an equalizer but fail to convert a late chance.",
      "120' - David Luiz scores the first penalty for Brazil in the shootout.",
      "120' - Pinilla hits the post during the penalties, missing a crucial opportunity for Chile."
    ],
    "historicalSignificance": "This match is remembered for Brazil's resilience in front of their home crowd during a tense penalty shootout. It ultimately foreshadowed their painful defeat to Germany later in the tournament, marking a low point for Brazilian football and reigniting discussions on the 'Mineirão curse'.",
    "topPerformers": [
      {
        "name": "Júlio César",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Outstanding saves, including crucial penalties."
      },
      {
        "name": "Alexis Sánchez",
        "side": "away",
        "position": "LW",
        "rating": 8.5,
        "note": "Key goal scorer and constant threat throughout the match."
      },
      {
        "name": "David Luiz",
        "side": "home",
        "position": "CB",
        "rating": 8.8,
        "note": "Strong defensively and scored a penalty in the shootout."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Colombia vs Uruguay — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "colombia-vs-uruguay-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "June 28, 2014",
    "venue": "Estádio do Maracanã",
    "city": "Rio de Janeiro, Brazil",
    "home": {
      "name": "Colombia",
      "flag": "🇨🇴",
      "formation": "4-2-3-1",
      "color": "#FCD116",
      "colorDim": "rgba(252,209,22,0.18)",
      "players": [
        "David Ospina",
        "Juan Zuniga",
        "Mario Yepes",
        "Carlos Valdés",
        "Pablo Armero",
        "Juan Guillermo Cuadrado",
        "Fredy Guarín",
        "James Rodríguez",
        "Teófilo Gutiérrez",
        "Radamel Falcao",
        "Jackson Martínez"
      ],
      "score": 2
    },
    "away": {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "formation": "4-4-2",
      "color": "#4EABDF",
      "colorDim": "rgba(78,171,223,0.18)",
      "players": [
        "Fernando Muslera",
        "Maxi Pereira",
        "Diego Godín",
        "José María Giménez",
        "Martín Cáceres",
        "Cristian Rodríguez",
        "Giorgian De Arrascaeta",
        "Egídio",
        "Edison Cavani",
        "Luis Suárez",
        "Diego Forlán"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.5,
      "away": 0.4
    },
    "possession": {
      "home": 60,
      "away": 40
    },
    "timeline": [
      {
        "minute": "28'",
        "side": "home",
        "player": "James Rodríguez",
        "type": "goal",
        "description": "James scored with an extraordinary chest-and-volley strike."
      },
      {
        "minute": "50'",
        "side": "home",
        "player": "Juan Guillermo Cuadrado",
        "type": "goal",
        "description": "Cuadrado scores to double the lead for Colombia."
      },
      {
        "minute": "66'",
        "side": "away",
        "player": "Luis Suárez",
        "type": "yellow",
        "description": "Suárez received a yellow card for a foul."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "James Rodríguez",
        "type": "sub",
        "description": "Rodríguez substituted to celebrate with fans."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 10,
        "away": 5,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 1,
        "homeWidth": 86,
        "awayWidth": 14
      },
      {
        "label": "Possession",
        "home": 60,
        "away": 40,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Passes",
        "home": 500,
        "away": 300,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "76%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 3,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 15,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "2.54",
        "away": "0.42",
        "homeWidth": 86,
        "awayWidth": 14
      }
    ],
    "metaDescription": "Colombia defeated Uruguay 2-0 in the Round of 16 at the FIFA World Cup 2014, showcasing James Rodríguez's brilliance.",
    "tacticalAnalysis": "Colombia deployed a 4-2-3-1 formation, utilizing a double pivot of Guarín and Cuadrado to protect the backline and transition quickly to attack. James Rodríguez played as the central attacking midfielder, exploiting spaces between Uruguay's defense. The wing-play from Cuadrado and Armero created width and stretched the Uruguayan defense. Uruguay started with a traditional 4-4-2, with Suárez and Cavani up front. However, due to Suárez’s suspension for biting, Forlán's role was crucial as he struggled to provide the same threat. Colombia's counter-attacking pace under manager Pekerman proved decisive. Their second goal came through quick buildup and effective use of space behind Uruguay's full-backs.",
    "keyMoments": [
      "28' - James Rodríguez opens the scoring, a brilliant chest-and-volley.",
      "50' - Cuadrado doubles Colombia's lead, sealing Uruguay's fate.",
      "66' - Luis Suárez receives a yellow card for an aggressive tackle.",
      "90' - James Rodríguez substituted to a standing ovation from fans."
    ],
    "historicalSignificance": "This match marked Colombia's progression to the quarter-finals for the first time in World Cup history. James Rodríguez's performances established him as one of the world's top talents, culminating in winning the Golden Boot.",
    "topPerformers": [
      {
        "name": "James Rodríguez",
        "side": "home",
        "position": "CAM",
        "rating": 9.8,
        "note": "Outstanding performance with a goal and multiple key passes."
      },
      {
        "name": "Juan Guillermo Cuadrado",
        "side": "home",
        "position": "RM",
        "rating": 8.5,
        "note": "Crucial in attack and contributed a goal."
      },
      {
        "name": "Diego Godín",
        "side": "away",
        "position": "CB",
        "rating": 7.5,
        "note": "Solid defensive display, though overwhelmed at times."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Argentina vs Switzerland — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "argentina-vs-switzerland-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "July 1, 2014",
    "venue": "Arena de São Paulo",
    "city": "São Paulo, Brazil",
    "home": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Sergio Romero",
        "Pablo Zabaleta",
        "Ezequiel Garay",
        "Martin Demichelis",
        "Javier Mascherano",
        "Lucas Biglia",
        "Angel Di Maria",
        "Lionel Messi",
        "Javier Pastore",
        "Gonzalo Higuain",
        "Ezequiel Lavezzi"
      ],
      "score": 1
    },
    "away": {
      "name": "Switzerland",
      "flag": "🇨🇭",
      "formation": "4-2-3-1",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Yann Sommer",
        "Stephane Lichtsteiner",
        "Philippe Senderos",
        "Ricardo Rodriguez",
        "Nico Elvedi",
        "Granite Xhaka",
        "Blerim Džemaili",
        "Valon Behrami",
        "Xherdan Shaqiri",
        "Haris Seferovic",
        "Josip Drmić"
      ],
      "score": 0
    },
    "status": "AET",
    "xG": {
      "home": 1.67,
      "away": 0.44
    },
    "possession": {
      "home": 68,
      "away": 32
    },
    "timeline": [
      {
        "minute": "118'",
        "side": "home",
        "player": "Angel Di Maria",
        "type": "goal",
        "description": "Curling right-foot finish from a Messi assist"
      },
      {
        "minute": "90+2'",
        "side": "away",
        "player": "Yann Sommer",
        "type": "yellow",
        "description": "Time wasting as Switzerland defended"
      },
      {
        "minute": "90+5'",
        "side": "away",
        "player": "Granite Xhaka",
        "type": "yellow",
        "description": "Foul on Messi"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 21,
        "away": 5,
        "homeWidth": 81,
        "awayWidth": 19
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 2,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Possession",
        "home": 68,
        "away": 32,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Passes",
        "home": 556,
        "away": 269,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "75%",
        "homeWidth": 87,
        "awayWidth": 75
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 2,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Fouls",
        "home": 17,
        "away": 13,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "xG",
        "home": "1.67",
        "away": "0.44",
        "homeWidth": 79,
        "awayWidth": 21
      }
    ],
    "metaDescription": "Argentina faced Switzerland in a hard-fought match, with a late goal from Di Maria pushing them to the quarter-finals.",
    "tacticalAnalysis": "Argentina set up in a 4-3-3 formation, relying on Messi's creativity to break down Switzerland's organized defense. The midfield trio of Mascherano, Biglia, and Di Maria provided balance, with the latter pushing forward to support Messi and Higuain. Switzerland, in a 4-2-3-1, deployed a double pivot with Xhaka and Džemaili that effectively shielded their backline, thwarting early Argentine advances. The game shifted into extra time as both teams had limited clear chances, but Di Maria's late goal showcased Argentina's determination and ability to exploit fatigue in the Swiss defense.",
    "keyMoments": [
      "118' - Di Maria scores, sealing Argentina's place in the quarter-finals.",
      "90+2' - Sommer receives a yellow card for time-wasting.",
      "90+5' - Xhaka booked for a foul on Messi, highlighting Argentina's frustrations."
    ],
    "historicalSignificance": "This match is remembered for Di Maria's dramatic extra-time goal that not only advanced Argentina to the quarter-finals but also illuminated their struggle to break down resilient defenses. It showcased Argentina's attacking prowess led by Messi while emphasizing the importance of tactical discipline in knock-out football.",
    "topPerformers": [
      {
        "name": "Angel Di Maria",
        "side": "home",
        "position": "LW",
        "rating": 9.2,
        "note": "Scored the crucial goal that secured Argentina's progression."
      },
      {
        "name": "Lionel Messi",
        "side": "home",
        "position": "CAM",
        "rating": 8.8,
        "note": "Constantly threatened the Swiss defense and provided the assist for the winning goal."
      },
      {
        "name": "Yann Sommer",
        "side": "away",
        "position": "GK",
        "rating": 8.5,
        "note": "Made several key saves to keep Switzerland in the match."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Nigeria — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-nigeria-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "June 30, 2014",
    "venue": "Estádio Nacional",
    "city": "Brasília, Brazil",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-3-3",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Hugo Lloris",
        "Bacary Sagna",
        "Raphaël Varane",
        "Laurent Koscielny",
        "Patrice Evra",
        "Paul Pogba",
        "Blaise Matuidi",
        "Yohan Cabaye",
        "Karim Benzema",
        "Mathieu Valbuena",
        "Antoine Griezmann"
      ],
      "score": 2
    },
    "away": {
      "name": "Nigeria",
      "flag": "🇳🇬",
      "formation": "4-3-3",
      "color": "#008751",
      "colorDim": "rgba(0,135,81,0.18)",
      "players": [
        "Vincent Enyeama",
        "Elderson Echiejile",
        "Godfrey Oboabona",
        "Omeruo Kenneth",
        "Joseph Yobo",
        "John Obi Mikel",
        "Ogenyi Onazi",
        "Victor Moses",
        "Ahmed Musa",
        "Emmanuel Emenike",
        "Nigeria"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.84,
      "away": 0.78
    },
    "possession": {
      "home": 56,
      "away": 44
    },
    "timeline": [
      {
        "minute": "79'",
        "side": "home",
        "player": "Paul Pogba",
        "type": "goal",
        "description": "Pogba heads in the opener from a corner."
      },
      {
        "minute": "90+2'",
        "side": "home",
        "player": "Joseph Yobo",
        "type": "own_goal",
        "description": "Yobo deflects the ball into his own net, sealing France's victory."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 22,
        "away": 9,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 2,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Possession",
        "home": 56,
        "away": 44,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Passes",
        "home": 485,
        "away": 330,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "76%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 5,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 12,
        "homeWidth": 47,
        "awayWidth": 53
      },
      {
        "label": "xG",
        "home": "1.84",
        "away": "0.78",
        "homeWidth": 70,
        "awayWidth": 30
      }
    ],
    "metaDescription": "In the Round of 16 of the FIFA World Cup 2014, France decisively defeated Nigeria 2-0, showcasing their tactical prowess.",
    "tacticalAnalysis": "France lined up in a dynamic 4-3-3 formation, leveraging a fluid front three of Benzema, Valbuena, and Griezmann. The midfield triangle with Pogba at the heart facilitated transitional play, enabling France to dominate possession while maintaining a strong defensive block. In contrast, Nigeria adopted a similar 4-3-3, featuring a rigid midfield to contain the French attack. Despite Nigeria's effort, they struggled to effectively link up play and create significant chances. France's first goal came from Pogba, who utilized his aerial prowess, while Yobo's unfortunate own goal underscored Nigeria's defensive frailties. The match illustrated France's tactical maturity and their resurgence as a competitive force in international football.",
    "keyMoments": [
      "79' - Paul Pogba heads home for the opener, marking a critical moment in the match.",
      "90+2' - Joseph Yobo's own goal seals the match for France, highlighting Nigeria's defensive struggles.",
      "First Half - Nigeria's Victor Moses had a crucial chance but was unable to convert.",
      "54' - France's attacking trio showed significant synergy, generating multiple scoring opportunities."
    ],
    "historicalSignificance": "This match marked France's return to World Cup prominence, as they showcased tactical depth and resilience. Their performance signaled the emergence of a new generation of talent, including Pogba and Griezmann, setting the stage for future success.",
    "topPerformers": [
      {
        "name": "Paul Pogba",
        "side": "home",
        "position": "CM",
        "rating": 9.2,
        "note": "Dominated the midfield and scored the opening goal."
      },
      {
        "name": "Vincent Enyeama",
        "side": "away",
        "position": "GK",
        "rating": 8.5,
        "note": "Made several crucial saves, keeping Nigeria in the game."
      },
      {
        "name": "Karim Benzema",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Constantly threatened Nigeria's defense with his movement and creativity."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Algeria — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-algeria-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "June 30, 2014",
    "venue": "Estádio Beira-Rio",
    "city": "Porto Alegre, Brazil",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Philipp Lahm",
        "Mats Hummels",
        "Jerome Boateng",
        "Jonas Hector",
        "Bastian Schweinsteiger",
        "Toni Kroos",
        "Mesut Özil",
        "Mario Götze",
        "André Schürrle",
        "Miroslav Klose"
      ],
      "score": 2
    },
    "away": {
      "name": "Algeria",
      "flag": "🇩🇿",
      "formation": "4-3-3",
      "color": "#007A3D",
      "colorDim": "rgba(0,122,61,0.18)",
      "players": [
        "Raïs M'Bolhi",
        "Aïssa Mandi",
        "Majid Bougherra",
        "Essaid Belkalem",
        "Faouzi Ghoulam",
        "Sofiane Feghouli",
        "Yacine Brahimi",
        "Medhi Lacen",
        "Riyad Mahrez",
        "Islam Slimani",
        "Abdelmoumene Djabou"
      ],
      "score": 1
    },
    "status": "AET",
    "xG": {
      "home": 2.67,
      "away": 0.65
    },
    "possession": {
      "home": 59,
      "away": 41
    },
    "timeline": [
      {
        "minute": "92'",
        "side": "home",
        "player": "André Schürrle",
        "type": "goal",
        "description": "Schürrle scored the first goal of the match in extra time."
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "Mesut Özil",
        "type": "goal",
        "description": "Özil doubled Germany's lead with a well-placed shot."
      },
      {
        "minute": "120+1'",
        "side": "away",
        "player": "Abdelmoumene Djabou",
        "type": "goal",
        "description": "Djabou pulled one back for Algeria in stoppage time."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 29,
        "away": 12,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 59,
        "away": 41,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Passes",
        "home": 811,
        "away": 424,
        "homeWidth": 66,
        "awayWidth": 34
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "75%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 4,
        "homeWidth": 69,
        "awayWidth": 31
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 15,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "xG",
        "home": "2.67",
        "away": "0.65",
        "homeWidth": 80,
        "awayWidth": 20
      }
    ],
    "metaDescription": "Germany faced a tough challenge from Algeria in the Round of 16, overcoming them in extra time with a 2-1 victory.",
    "tacticalAnalysis": "Germany employed a 4-2-3-1 formation that allowed them to dominate possession while utilizing players like Toni Kroos and Mesut Özil to control the midfield. Algeria's 4-3-3 formation emphasized quick counters and marked pressure on Germany's defenders. For 120 minutes, Algeria's discipline and tactical discipline challenged German forwards. The key battles occurred through the channels, where Germany's fullbacks, Lahm and Hector, found space but often faced frustration from Algeria's quick transitions. Goals from Schürrle and Özil showcased Germany’s ability to adapt in the final third, as they exploited gaps left by a fatigued Algerian defense, particularly after the latter’s extensive efforts to contain them had left them vulnerable in extra time.",
    "keyMoments": [
      "92' - Schürrle's goal breaks the deadlock, showcasing Germany's resilience.",
      "120' - Özil adds another for Germany, seemingly sealing the match.",
      "120+1' - Djabou scores late for Algeria, adding tension to the final moments."
    ],
    "historicalSignificance": "This match is remembered for Algeria's valiant effort against one of the world's football powerhouses, exemplifying the competitive spirit of smaller nations in the World Cup. It highlighted Germany's ability to win under pressure, setting the stage for their eventual triumph in the tournament.",
    "topPerformers": [
      {
        "name": "Manuel Neuer",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Neuer's sweeping and distribution were crucial in thwarting Algerian attacks."
      },
      {
        "name": "André Schürrle",
        "side": "home",
        "position": "LW",
        "rating": 8.5,
        "note": "Scored the opening goal and was pivotal in breaking Algeria's defense."
      },
      {
        "name": "Abdelmoumene Djabou",
        "side": "away",
        "position": "ST",
        "rating": 8,
        "note": "Djabou's late goal showed Algeria's fighting spirit and kept the match tense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // USA vs Belgium — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "usa-vs-belgium-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "July 1, 2014",
    "venue": "Arena Fonte Nova",
    "city": "Salvador, Brazil",
    "home": {
      "name": "USA",
      "flag": "🇺🇸",
      "formation": "4-4-2",
      "color": "#3C3B6E",
      "colorDim": "rgba(60,59,110,0.18)",
      "players": [
        "Tim Howard",
        "DeAndre Yedlin",
        "Matt Besler",
        "Geoff Cameron",
        "Fabian Johnson",
        "Michael Bradley",
        "Jermaine Jones",
        "Kyle Beckerman",
        "Clint Dempsey",
        "Jozy Altidore",
        "Julian Green"
      ],
      "score": 1
    },
    "away": {
      "name": "Belgium",
      "flag": "🇧🇪",
      "formation": "4-2-3-1",
      "color": "#EDCB27",
      "colorDim": "rgba(237,203,39,0.18)",
      "players": [
        "Thibaut Courtois",
        "Toby Alderweireld",
        "Vincent Kompany",
        "Jan Vertonghen",
        "Laurent Ciman",
        "Marouane Fellaini",
        "Axel Witsel",
        "Kevin De Bruyne",
        "Eden Hazard",
        "Romelu Lukaku",
        "Divock Origi"
      ],
      "score": 2
    },
    "status": "AET",
    "xG": {
      "home": 1.35,
      "away": 2.23
    },
    "possession": {
      "home": 45,
      "away": 55
    },
    "timeline": [
      {
        "minute": "92'",
        "side": "away",
        "player": "Kevin De Bruyne",
        "type": "goal",
        "description": "De Bruyne scores a stunning goal with a powerful strike."
      },
      {
        "minute": "95'",
        "side": "away",
        "player": "Romelu Lukaku",
        "type": "goal",
        "description": "Lukaku doubles the lead with a close-range finish."
      },
      {
        "minute": "107'",
        "side": "home",
        "player": "Julian Green",
        "type": "goal",
        "description": "Green scores a spectacular goal to give USA hope."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 27,
        "homeWidth": 34,
        "awayWidth": 66
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 10,
        "homeWidth": 37,
        "awayWidth": 63
      },
      {
        "label": "Possession",
        "home": 45,
        "away": 55,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Passes",
        "home": 301,
        "away": 421,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Pass Accuracy",
        "home": "76%",
        "away": "84%",
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 8,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 11,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "1.35",
        "away": "2.23",
        "homeWidth": 36,
        "awayWidth": 64
      }
    ],
    "metaDescription": "USA fights hard but falls to Belgium in a thrilling match decided in extra time at the 2014 FIFA World Cup.",
    "tacticalAnalysis": "In this intense Round of 16 clash, the USA deployed a 4-4-2 formation, emphasizing solidity in defense led by Tim Howard's remarkable goalkeeping performance. The midfield was anchored by Michael Bradley and Jermaine Jones, providing both defensiveness and the ability to launch counter-attacks. However, the US struggled to maintain possession against Belgium's 4-2-3-1, which featured a dynamic midfield with Axel Witsel and Marouane Fellaini controlling the tempo. Belgium's attacking players, particularly Kevin De Bruyne, exploited the flanks, with Lukaku's movement causing issues for the US center-backs. Both goals in extra time reflected the effectiveness of Belgium's attack as they swiftly countered, forcing the USA to push forward in search of an equalizer, ultimately leading to Julian Green's late goal, showcasing his exceptional talent and hope for the US camp.",
    "keyMoments": [
      "92' - Kevin De Bruyne opens the scoring with a stunning strike.",
      "95' - Romelu Lukaku doubles Belgium's lead with a close finish.",
      "107' - Julian Green scores with a spectacular goal, igniting USA's hopes."
    ],
    "historicalSignificance": "This match is significant for showcasing Tim Howard's extraordinary goalkeeping skills, setting a World Cup record with 16 saves. It also marked the rise of Belgium's golden generation, emphasizing their potential as title contenders in future tournaments.",
    "topPerformers": [
      {
        "name": "Tim Howard",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Howard's incredible 16 saves kept the USA in the game."
      },
      {
        "name": "Kevin De Bruyne",
        "side": "away",
        "position": "CM",
        "rating": 8.5,
        "note": "De Bruyne's goal and overall play was crucial for Belgium's victory."
      },
      {
        "name": "Romelu Lukaku",
        "side": "away",
        "position": "ST",
        "rating": 8.8,
        "note": "Lukaku's presence and goal in extra time were instrumental in Belgium's win."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs Mexico — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-mexico-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "June 29, 2014",
    "venue": "Estádio Castelão",
    "city": "Fortaleza, Brazil",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "5-3-2",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Kasper Schmeichel",
        "Ron Vlaar",
        "Stefan de Vrij",
        "Reinando van der Wiel",
        "Bruno Martins Indi",
        "Daley Blind",
        "Georginio Wijnaldum",
        "Wesley Sneijder",
        "Arjen Robben",
        "Klaas-Jan Huntelaar",
        "Robin van Persie"
      ],
      "score": 2
    },
    "away": {
      "name": "Mexico",
      "flag": "🇲🇽",
      "formation": "5-3-2",
      "color": "#006847",
      "colorDim": "rgba(0,104,71,0.18)",
      "players": [
        "Guillermo Ochoa",
        "Paul Aguilar",
        "Francisco Rodríguez",
        "Rafael Márquez",
        "Hugo Ayala",
        "Miguel Layún",
        "Andres Guardado",
        "Hector Herrera",
        "Giovani dos Santos",
        "Javier Hernández",
        "Oribe Peralta"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.05,
      "away": 1.43
    },
    "possession": {
      "home": 68,
      "away": 32
    },
    "timeline": [
      {
        "minute": "48'",
        "side": "away",
        "player": "Giovani dos Santos",
        "type": "goal",
        "description": "Opened the scoring with a long-range shot."
      },
      {
        "minute": "88'",
        "side": "home",
        "player": "Wesley Sneijder",
        "type": "goal",
        "description": "Equalized with a powerful shot from outside the box."
      },
      {
        "minute": "90+2'",
        "side": "home",
        "player": "Klaas-Jan Huntelaar",
        "type": "pen_goal",
        "description": "Converted a penalty after a controversial foul on Robben."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "Arjen Robben",
        "type": "yellow",
        "description": "Received a yellow card for unsporting behavior."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 20,
        "away": 9,
        "homeWidth": 69,
        "awayWidth": 31
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 68,
        "away": 32,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 300,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "75%",
        "homeWidth": 87,
        "awayWidth": 75
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 2,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 15,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "2.05",
        "away": "1.43",
        "homeWidth": 59,
        "awayWidth": 41
      }
    ],
    "metaDescription": "Netherlands staged a dramatic comeback against Mexico in the 2014 World Cup, scoring two late goals to advance in the tournament.",
    "tacticalAnalysis": "In this Round of 16 clash, both teams employed a 5-3-2 formation, with Mexico looking to solidify their defense and counter-attack through the wings. Mexico started strong, utilizing Giovanis pace, who capitalized on Dutch defensive lapses to score first. The Netherlands, meanwhile, maintained heavy possession but struggled to carve through Mexico's well-organized backline until the 88th minute when Sneijder, operating just outside the box, unleashed a powerful shot that caught Ochoa off guard. Following the equalizer, Mexico was visibly shaken, allowing the Dutch to push further forward. Robben’s relentless running drew a controversial penalty, which Huntelaar converted, completing a dramatic turnaround. The tactical battle showcased Mexico’s early discipline but highlighted the Netherlands’ experience and attacking depth, crucial in turning the match. Coach Louis van Gaal’s substitutions proved vital, as they intensified Dutch attacks and maintained pressure, symbolizing the shift in momentum.",
    "keyMoments": [
      "48' - Giovani dos Santos scores a stunning goal to put Mexico ahead.",
      "88' - Wesley Sneijder equalizes for the Netherlands with a long-range effort.",
      "90+2' - Klaas-Jan Huntelaar converts a penalty, giving the Netherlands a late lead.",
      "90' - Arjen Robben booked for additional controversy after the winning penalty."
    ],
    "historicalSignificance": "This match marked a pivotal moment in the 2014 World Cup, demonstrating the unpredictability of knockout football. The Netherlands showcased resilience, turning the match around in the final minutes, solidifying their status as one of the tournament favorites despite initial struggles. Mexico's heartbreaking exit highlighted the fine margins in elite football.",
    "topPerformers": [
      {
        "name": "Wesley Sneijder",
        "side": "home",
        "position": "CM",
        "rating": 8.8,
        "note": "A game-changing performance, scoring the equalizer and orchestrating attacks."
      },
      {
        "name": "Guillermo Ochoa",
        "side": "away",
        "position": "GK",
        "rating": 8.5,
        "note": "Remarkable saves kept Mexico in the game until the dying moments."
      },
      {
        "name": "Klaas-Jan Huntelaar",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Clutch performance with a penalty goal that sealed the match."
      },
      {
        "name": "Arjen Robben",
        "side": "home",
        "position": "RW",
        "rating": 9.2,
        "note": "Constant threat on the wing, instrumental in creating opportunities and winning the penalty."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Costa Rica vs Greece — 2014 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "costa-rica-vs-greece-2014-r16",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Round of 16",
    "date": "June 29, 2014",
    "venue": "Arena Pernambuco",
    "city": "Recife, Brazil",
    "home": {
      "name": "Costa Rica",
      "flag": "🇨🇷",
      "formation": "5-4-1",
      "color": "#002B7F",
      "colorDim": "rgba(0,43,127,0.18)",
      "players": [
        "Keylor Navas",
        "Giancarlo Gonzalez",
        "Oscar Duarte",
        "Michael Umana",
        "Cristian Gamboa",
        "Brian Oviedo",
        "Yeltsin Tejeda",
        "Celso Borges",
        "David Guzman",
        "Joel Campbell",
        "Marco Ureña"
      ],
      "score": 1
    },
    "away": {
      "name": "Greece",
      "flag": "🇬🇷",
      "formation": "4-3-3",
      "color": "#FF6600",
      "colorDim": "rgba(255,102,0,0.18)",
      "players": [
        "Orestis Karnezis",
        "Vasilis Torosidis",
        "Sokratis Papastathopoulos",
        "Dimitris Siovas",
        "Jose Holebas",
        "Giannis Maniatis",
        "Kostas Katsouranis",
        "Panagiotis Kone",
        "Giorgos Samaras",
        "Kostas Mitroglou",
        "Dimitris Salpingidis"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "5-3",
    "xG": {
      "home": 1.12,
      "away": 1.25
    },
    "possession": {
      "home": 46,
      "away": 54
    },
    "timeline": [
      {
        "minute": "0'",
        "side": "neutral",
        "player": "Referee",
        "type": "sub",
        "description": "Match starts"
      },
      {
        "minute": "91'",
        "side": "away",
        "player": "Sokratis Papastathopoulos",
        "type": "goal",
        "description": "Header from corner to level"
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Referee",
        "type": "sub",
        "description": "End of extra time, proceed to penalties"
      },
      {
        "minute": "121'",
        "side": "home",
        "player": "Michael Umana",
        "type": "pen_goal",
        "description": "Scored the first penalty"
      },
      {
        "minute": "122'",
        "side": "away",
        "player": "Dimitris Salpingidis",
        "type": "pen_miss",
        "description": "Missed the penalty saved by Navas"
      },
      {
        "minute": "123'",
        "side": "home",
        "player": "Marco Ureña",
        "type": "pen_goal",
        "description": "Second penalty scored"
      },
      {
        "minute": "124'",
        "side": "away",
        "player": "Kostas Mitroglou",
        "type": "pen_goal",
        "description": "Scored the penalty"
      },
      {
        "minute": "125'",
        "side": "home",
        "player": "Joel Campbell",
        "type": "pen_goal",
        "description": "Scored the third penalty"
      },
      {
        "minute": "126'",
        "side": "away",
        "player": "Giannis Maniatis",
        "type": "pen_miss",
        "description": "Missed penalty saved by Navas"
      },
      {
        "minute": "127'",
        "side": "home",
        "player": "Yeltsin Tejeda",
        "type": "pen_goal",
        "description": "Fourth penalty scored"
      },
      {
        "minute": "128'",
        "side": "away",
        "player": "Kostas Katsouranis",
        "type": "pen_goal",
        "description": "Scored penalty"
      },
      {
        "minute": "129'",
        "side": "home",
        "player": "Oscar Duarte",
        "type": "pen_goal",
        "description": "Final penalty scored to win"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 9,
        "away": 11,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 4,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Possession",
        "home": 46,
        "away": 54,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Passes",
        "home": 250,
        "away": 300,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Pass Accuracy",
        "home": "77%",
        "away": "83%",
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 5,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Fouls",
        "home": 16,
        "away": 12,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "xG",
        "home": "1.12",
        "away": "1.25",
        "homeWidth": 47,
        "awayWidth": 53
      }
    ],
    "metaDescription": "Costa Rica and Greece fought intensely in the Round of 16, culminating in a dramatic penalty shootout.",
    "tacticalAnalysis": "Costa Rica employed a compact 5-4-1 formation to absorb pressure from Greece, maximizing counter-attacking opportunities. The defensive line was anchored by Gonzalez and Duarte, which allowed Navas to focus on shot-stopping while controlling the area. Conversely, Greece's 4-3-3 sought to dominate midfield through Katsouranis and Maniatis, looking to create overloads on the wings using Holebas and Torosidis. The introduction of Papastathopoulos proved crucial for the late equalizer with a header from a set piece, changing the game's dynamic. In extra time, both teams appeared fatigued, with Costa Rica showcasing resilience, ultimately succeeding in the penalty shootout thanks to Navas’ heroics.",
    "keyMoments": [
      "91' - Papastathopoulos equalizes for Greece with a powerful header.",
      "End of extra time - teams prepare for penalties, tension builds.",
      "Navas' crucial saves in penalty shootout set the tone for a Costa Rican victory.",
      "Dramatic final penalty by Oscar Duarte seals historic advancement.",
      "Incredible display of Costa Rica's defensive organization and heart."
    ],
    "historicalSignificance": "This match represented a historic milestone for Costa Rica, marking their first trip to the World Cup quarter-finals since 1990 and establishing them as a formidable force in international football. The victory underscored the unpredictability of the tournament and highlighted the potential of smaller footballing nations.",
    "topPerformers": [
      {
        "name": "Keylor Navas",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Outstanding performance with crucial saves in the penalty shootout."
      },
      {
        "name": "Sokratis Papastathopoulos",
        "side": "away",
        "position": "CB",
        "rating": 8.5,
        "note": "Scored the equalizing goal, demonstrating leadership."
      },
      {
        "name": "Joel Campbell",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Played a vital role in counter-attacks and scored during penalties."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Germany — 2014 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-germany-2014-qf",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Quarter-Final",
    "date": "July 4, 2014",
    "venue": "Estádio do Maracanã",
    "city": "Rio de Janeiro, Brazil",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-3-3",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Hugo Lloris",
        "Bacary Sagna",
        "Raphaël Varane",
        "Mamadou Sakho",
        "Patrice Evra",
        "Yohan Cabaye",
        "Blaise Matuidi",
        "Paul Pogba",
        "Karim Benzema",
        "Antoine Griezmann",
        "Olivier Giroud"
      ],
      "score": 0
    },
    "away": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-3-3",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Philipp Lahm",
        "Mats Hummels",
        "Jerome Boateng",
        "Benedikt Höwedes",
        "Sami Khedira",
        "Bastian Schweinsteiger",
        "Toni Kroos",
        "Thomas Müller",
        "Mario Götze",
        "Marco Reus"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 0.76,
      "away": 1.21
    },
    "possession": {
      "home": 43,
      "away": 57
    },
    "timeline": [
      {
        "minute": "13'",
        "side": "away",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller's header from a Hummels flick-on gives Germany the lead."
      },
      {
        "minute": "78'",
        "side": "home",
        "player": "Olivier Giroud",
        "type": "sub",
        "description": "Giroud replaces Griezmann in an attacking switch."
      },
      {
        "minute": "90'",
        "side": "away",
        "player": "Benedikt Höwedes",
        "type": "yellow",
        "description": "Höwedes booked for a foul on Benzema."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 10,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 5,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Possession",
        "home": 43,
        "away": 57,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Passes",
        "home": 400,
        "away": 470,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "87%",
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "0.76",
        "away": "1.21",
        "homeWidth": 38,
        "awayWidth": 62
      }
    ],
    "metaDescription": "Germany edged past France in a tight Quarter-Final match at the 2014 FIFA World Cup with a solitary goal from Thomas Müller.",
    "tacticalAnalysis": "In this matchup, Germany employed a 4-3-3 formation that allowed them to dominate the midfield with Khedira, Schweinsteiger, and Kroos effectively disrupting France's rhythm. France, meanwhile, set up in a 4-3-3 with Benzema leading the line supported by Griezmann and Giroud. The key battle was in midfield where Germany's pressing and positional awareness outmatched France's attempts to build attacks. Hummels and Boateng's defensive solidity rendered Benzema ineffective, while Müller capitalized on an early set-piece to score the only goal of the match from a flick-on, demonstrating Germany's efficiency. France struggled to create clear chances, with only Benzema and Varane coming close to scoring. Late in the match, France's substitutions seemed to increase urgency but failed to breach Germany's organized defense. Löw's tactical flexibility and commitment to pressing ensured Germany's advancement in a compact formation, where they successfully transitioned to counter-attacks.",
    "keyMoments": [
      "13' - Müller scores from a header, putting Germany ahead with a flick-on from Hummels.",
      "56' - Varane's header goes just over the bar, missed opportunity for France.",
      "78' - Giroud brought on for Griezmann in a bid to bolster France's attack.",
      "90' - Höwedes receives a yellow card for a foul on Benzema."
    ],
    "historicalSignificance": "This match saw Germany continue their strong form in the tournament, ultimately leading them to the final where they would lift the trophy. France's loss marked an early exit for a team favored by many to progress further.",
    "topPerformers": [
      {
        "name": "Manuel Neuer",
        "side": "away",
        "position": "GK",
        "rating": 9.2,
        "note": "Key saves that denied France crucial opportunities."
      },
      {
        "name": "Thomas Müller",
        "side": "away",
        "position": "RW",
        "rating": 8.5,
        "note": "Scored the only goal and was pivotal in the attacking phase."
      },
      {
        "name": "Raphaël Varane",
        "side": "home",
        "position": "CB",
        "rating": 8.7,
        "note": "Solid defensively and contributed to France's few attacking chances."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Colombia — 2014 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-colombia-2014-qf",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Quarter-Final",
    "date": "July 4, 2014",
    "venue": "Estádio Castelão",
    "city": "Fortaleza, Brazil",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Julio Cesar",
        "Dani Alves",
        "Thiago Silva",
        "David Luiz",
        "Marcelo",
        "Luiz Gustavo",
        "Fernandinho",
        "Oscar",
        "Hulk",
        "Neymar",
        "Fred"
      ],
      "score": 2
    },
    "away": {
      "name": "Colombia",
      "flag": "🇨🇴",
      "formation": "4-4-2",
      "color": "#FCD116",
      "colorDim": "rgba(252,209,22,0.18)",
      "players": [
        "David Ospina",
        "Juan Zuniga",
        "Cristian Zapata",
        "Mario Yepes",
        "Pablo Armero",
        "Carlos Sanchez",
        "Juan Cuadrado",
        "James Rodriguez",
        "Teo Gutierrez",
        "Jackson Martinez",
        "Victor Ibarbo"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.34,
      "away": 0.89
    },
    "possession": {
      "home": 56,
      "away": 44
    },
    "timeline": [
      {
        "minute": "7'",
        "side": "home",
        "player": "Thiago Silva",
        "type": "goal",
        "description": "Header from a corner kick"
      },
      {
        "minute": "69'",
        "side": "home",
        "player": "David Luiz",
        "type": "goal",
        "description": "Stunning free-kick from outside the box"
      },
      {
        "minute": "80'",
        "side": "away",
        "player": "James Rodriguez",
        "type": "goal",
        "description": "Consolation goal with a well-placed shot"
      },
      {
        "minute": "88'",
        "side": "home",
        "player": "Neymar",
        "type": "sub",
        "description": "Substituted after being fouled"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 19,
        "away": 9,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Shots on Target",
        "home": 7,
        "away": 2,
        "homeWidth": 78,
        "awayWidth": 22
      },
      {
        "label": "Possession",
        "home": 56,
        "away": 44,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Passes",
        "home": 495,
        "away": 245,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "76%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 19,
        "homeWidth": 39,
        "awayWidth": 61
      },
      {
        "label": "xG",
        "home": "2.34",
        "away": "0.89",
        "homeWidth": 72,
        "awayWidth": 28
      }
    ],
    "metaDescription": "Brazil defeated Colombia 2-1 in the Quarter-finals of the FIFA World Cup 2014, featuring stunning goals and dramatic moments.",
    "tacticalAnalysis": "Brazil played with a 4-2-3-1 formation, relying on the width provided by their full-backs Marcelo and Dani Alves, while Neymar operated as a dynamic left winger. Thiago Silva anchored the defense, with David Luiz providing attacking impetus from the back. Colombia set up in a 4-4-2 shape, with James Rodriguez pulling the strings in midfield and Teo Gutierrez partnering Jackson Martinez up front. Brazil's first goal came from a corner where Silva capitalized on defensive disorganization, while their second was led by Luiz’s extraordinary free-kick that showcased his technical ability. Colombia struggled to break down Brazil's press and managed few clear chances, though they did pull one back with Rodriguez's impressive strike late in the game. The substitutions made by Brazil helped maintain their lead and snuff out Colombian transitions, particularly with Neymar's exit due to injury, changing the tactical approach as Brazil focused on containment.",
    "keyMoments": [
      "7' - Thiago Silva scores the opening goal from a corner.",
      "69' - David Luiz scores a brilliant free-kick to make it 2-0.",
      "80' - James Rodriguez scores for Colombia, providing a late shock.",
      "88' - Neymar injured by a foul, his tournament ends."
    ],
    "historicalSignificance": "This match marked Brazil's path to the semi-finals of the 2014 World Cup, but the loss of Neymar due to injury was a critical moment that impacted Brazil's performance in the tournament. The match highlighted Brazil's attacking flair and tactical resilience, as well as Colombia's emergence as a competitive force in international football.",
    "topPerformers": [
      {
        "name": "Thiago Silva",
        "side": "home",
        "position": "CB",
        "rating": 9,
        "note": "Strong defensive display and scored the first goal."
      },
      {
        "name": "David Luiz",
        "side": "home",
        "position": "CB",
        "rating": 8.8,
        "note": "Scored a crucial free-kick and contributed defensively."
      },
      {
        "name": "James Rodriguez",
        "side": "away",
        "position": "CAM",
        "rating": 8.5,
        "note": "Pulled one back with a classy finish and continuously threatened Brazil's defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Argentina vs Belgium — 2014 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "argentina-vs-belgium-2014-qf",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Quarter-Final",
    "date": "July 5, 2014",
    "venue": "Estádio Nacional",
    "city": "Brasília, Brazil",
    "home": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Sergio Romero",
        "Pablo Zabaleta",
        "Ezequiel Garay",
        "Martín Demichelis",
        "Marcos Rojo",
        "Javier Mascherano",
        "Jorge Sampaoli",
        "Lionel Messi",
        "Ángel Di María",
        "Gonzalo Higuaín",
        "Ezequiel Lavezzi"
      ],
      "score": 1
    },
    "away": {
      "name": "Belgium",
      "flag": "🇧🇪",
      "formation": "4-2-3-1",
      "color": "#EDCB27",
      "colorDim": "rgba(237,203,39,0.18)",
      "players": [
        "Thibaut Courtois",
        "Toby Alderweireld",
        "Thomas Vermaelen",
        "Vincent Kompany",
        "Jan Vertonghen",
        "Marouane Fellaini",
        "Axel Witsel",
        "Kevin De Bruyne",
        "Eden Hazard",
        "Dries Mertens",
        "Romelu Lukaku"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.2,
      "away": 0.8
    },
    "possession": {
      "home": 36,
      "away": 64
    },
    "timeline": [
      {
        "minute": "8'",
        "side": "home",
        "player": "Gonzalo Higuaín",
        "type": "goal",
        "description": "Higuaín scored the lone goal from inside the box after a cross from the left."
      },
      {
        "minute": "45+1'",
        "side": "away",
        "player": "Kevin De Bruyne",
        "type": "yellow",
        "description": "De Bruyne received a yellow card for a late tackle."
      },
      {
        "minute": "82'",
        "side": "home",
        "player": "Ángel Di María",
        "type": "sub",
        "description": "Di María was substituted off for Sergio Agüero."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 8,
        "away": 14,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 6,
        "homeWidth": 33,
        "awayWidth": 67
      },
      {
        "label": "Possession",
        "home": 36,
        "away": 64,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Passes",
        "home": 371,
        "away": 660,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Pass Accuracy",
        "home": "76%",
        "away": "85%",
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "Corners",
        "home": 3,
        "away": 5,
        "homeWidth": 37,
        "awayWidth": 63
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "1.20",
        "away": "0.80",
        "homeWidth": 60,
        "awayWidth": 40
      }
    ],
    "metaDescription": "Argentina edged past Belgium 1-0 in the 2014 World Cup quarter-finals thanks to Higuaín's first-half goal.",
    "tacticalAnalysis": "Argentina deployed a 4-3-3 formation focusing on a solid midfield anchored by Mascherano, who disrupted Belgium's attacking flow. Messi, often drawing defenders to him, allowed for greater space for players like Higuaín and Di María to exploit. Belgium, organized in a 4-2-3-1, sought to control possession with Witsel and Fellaini shielding their defense. De Bruyne and Hazard frequently attempted to create overloads on the flanks. Despite out-possessing Argentina, Belgium struggled to break through a disciplined defensive line, with Romero making critical saves and the Argentine backline maintaining compactness. The crucial goal came early from Higuaín, allowing Argentina to remain defensively resolute while Belgium pushed for an equalizer.",
    "keyMoments": [
      "8' - Higuaín scores to give Argentina the lead.",
      "45+1' - De Bruyne booked for a late tackle.",
      "82' - Di María substituted for Agüero.",
      "90' - Belgium fails to convert a late chance."
    ],
    "historicalSignificance": "This match solidified Argentina's tactical discipline and defensive resilience. Higuaín's goal was pivotal for Argentina as they advanced to the semi-finals, showcasing the importance of effective counter-attacking football. It marked the end of Belgium’s impressive run in the tournament, highlighting their need for more attacking efficiency.",
    "topPerformers": [
      {
        "name": "Sergio Romero",
        "side": "home",
        "position": "GK",
        "rating": 9,
        "note": "Crucial saves to maintain the clean sheet."
      },
      {
        "name": "Gonzalo Higuaín",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Scorer of the match-winning goal."
      },
      {
        "name": "Vincent Kompany",
        "side": "away",
        "position": "CB",
        "rating": 8,
        "note": "Commanding presence in defense, limited Argentina's chances."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs Costa Rica — 2014 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-costa-rica-2014-qf",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Quarter-Final",
    "date": "July 5, 2014",
    "venue": "Arena Fonte Nova",
    "city": "Salvador, Brazil",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Tim Krul",
        "Ron Vlaar",
        "Steven de Vrij",
        "Bruno Martins Indi",
        "Daley Blind",
        "Jordy Clasie",
        "Nigel de Jong",
        "Wesley Sneijder",
        "Arjen Robben",
        "Robin van Persie",
        " Klaas-Jan Huntelaar"
      ],
      "score": 0
    },
    "away": {
      "name": "Costa Rica",
      "flag": "🇨🇷",
      "formation": "5-4-1",
      "color": "#002B7F",
      "colorDim": "rgba(0,43,127,0.18)",
      "players": [
        "Keylor Navas",
        "Cristian Gamboa",
        "Gonzalo Segares",
        "Oscar Duarte",
        "Michael Umaña",
        "Sentonas Acosta",
        "Celso Borges",
        "Yeltsin Tejeda",
        "Bryan Ruiz",
        "Joel Campbell",
        "Marco Ureña"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "4-3",
    "xG": {
      "home": 1.45,
      "away": 0.85
    },
    "possession": {
      "home": 62,
      "away": 38
    },
    "timeline": [
      {
        "minute": "90'",
        "side": "neutral",
        "player": "N/A",
        "type": "sub",
        "description": "Krul substitutes for Cillessen"
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "Robin van Persie",
        "type": "pen_goal",
        "description": "Van Persie converts the first penalty"
      },
      {
        "minute": "120'",
        "side": "away",
        "player": "Bryan Ruiz",
        "type": "pen_miss",
        "description": "Ruiz misses his penalty"
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "Klaas-Jan Huntelaar",
        "type": "pen_goal",
        "description": "Huntelaar scores for Netherlands"
      },
      {
        "minute": "120'",
        "side": "away",
        "player": "Michael Umaña",
        "type": "pen_goal",
        "description": "Umaña converts Costa Rica's penalty"
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "Wesley Sneijder",
        "type": "pen_goal",
        "description": "Sneijder scores for Netherlands"
      },
      {
        "minute": "120'",
        "side": "away",
        "player": "Gonzalo Segares",
        "type": "pen_miss",
        "description": "Segares misses his penalty"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 18,
        "away": 9,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Possession",
        "home": 62,
        "away": 38,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Passes",
        "home": 668,
        "away": 330,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "78%",
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Corners",
        "home": 12,
        "away": 2,
        "homeWidth": 86,
        "awayWidth": 14
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 13,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "1.45",
        "away": "0.85",
        "homeWidth": 67,
        "awayWidth": 33
      }
    ],
    "metaDescription": "Netherlands defeated Costa Rica in the 2014 FIFA World Cup Quarter-Final on penalties after a goalless draw.",
    "tacticalAnalysis": "The match featured a 4-3-3 formation for the Netherlands, which emphasized high pressing and quick transitions. Van Gaal's decision to substitute Tim Krul for Jasper Cillessen before the penalty shootout was crucial; it showcased bold tactical decision-making. Krul, who stood tall against Costa Rica's penalty takers, proved to be an exceptional choice. Costa Rica, employing a 5-4-1 formation, looked to absorb pressure and counter effectively through the wings, with Joel Campbell and Bryan Ruiz's pace being vital in their attacks. As the game progressed into extra time, the Netherlands increasingly sought to exploit the flanks, but the disciplined Costa Rican defense held firm, leading the match to penalties where the tactical nous of the managers shone through.",
    "keyMoments": [
      "Krul's crucial substitution (90') changed the dynamic of the penalty shootout.",
      "Bryan Ruiz's penalty miss (120') ended Costa Rica's dreams.",
      "Wesley Sneijder's composed penalty established Netherlands' lead."
    ],
    "historicalSignificance": "This match marked the end of Costa Rica's remarkable journey through the World Cup, having exceeded all expectations. Netherlands' strategic use of a substitute goalkeeper in penalties is now celebrated and studied for its unconventional yet successful tactics.",
    "topPerformers": [
      {
        "name": "Tim Krul",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Saved two crucial penalties and was pivotal in the shootout."
      },
      {
        "name": "Keylor Navas",
        "side": "away",
        "position": "GK",
        "rating": 8.9,
        "note": "Outstanding saves kept Costa Rica in the match."
      },
      {
        "name": "Wesley Sneijder",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Distribution and control in midfield were essential for Netherlands."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs Argentina — 2014 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-argentina-2014-sf",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Semi-Final",
    "date": "July 9, 2014",
    "venue": "Arena de São Paulo",
    "city": "São Paulo, Brazil",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "5-3-2",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Sergio Romero",
        "Ron Vlaar",
        "Jasper Cillessen",
        "Gregory van der Wiel",
        "Daley Blind",
        "Martin de Roon",
        "Wesley Sneijder",
        "Arjen Robben",
        "Robin van Persie",
        "Kevin Strootman",
        "Ronald Koeman"
      ],
      "score": 0
    },
    "away": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Sergio Romero",
        "Pablo Zabaleta",
        "Ezequiel Garay",
        "Martin Demichelis",
        "Javier Mascherano",
        "Lucas Biglia",
        "Angel Di Maria",
        "Javier Pastore",
        "Lionel Messi",
        "Sergio Agüero",
        "Gonzalo Higuain"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "2-4",
    "xG": {
      "home": 0.85,
      "away": 1.1
    },
    "possession": {
      "home": 54,
      "away": 46
    },
    "timeline": [
      {
        "minute": "0'",
        "side": "neutral",
        "player": "Kick-off",
        "type": "sub",
        "description": "Match begins"
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Full-Time",
        "type": "sub",
        "description": "Extra time concludes with score 0-0"
      },
      {
        "minute": "0'",
        "side": "neutral",
        "player": "Penalty Shootout",
        "type": "sub",
        "description": "Penalty shootout commences"
      },
      {
        "minute": "2'",
        "side": "away",
        "player": "Gonzalo Higuain",
        "type": "pen_miss",
        "description": "Missed penalty hit the post"
      },
      {
        "minute": "4'",
        "side": "home",
        "player": "Wesley Sneijder",
        "type": "pen_miss",
        "description": "Saved by Romero"
      },
      {
        "minute": "1'",
        "side": "away",
        "player": "Lionel Messi",
        "type": "pen_goal",
        "description": "Scored on the rebound"
      },
      {
        "minute": "3'",
        "side": "away",
        "player": "Sergio Agüero",
        "type": "pen_goal",
        "description": "Converted calmly"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 11,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 5,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Possession",
        "home": 54,
        "away": 46,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Passes",
        "home": 500,
        "away": 450,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "81%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 12,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "xG",
        "home": "0.85",
        "away": "1.10",
        "homeWidth": 45,
        "awayWidth": 55
      }
    ],
    "metaDescription": "A thrilling semi-final match at the 2014 FIFA World Cup between Netherlands and Argentina that ended in penalties.",
    "tacticalAnalysis": "Both teams adopted cautious approaches, with Netherlands utilizing a 5-3-2 formation to absorb the pressure from Argentina's attacking trio of Messi, Agüero, and Higuain. Van Gaal instructed his players to maintain a deep defensive line, which effectively limited Messi's influence throughout the match. Argentina, in a 4-3-3 formation, focused on tight midfield control, with Javier Mascherano playing a crucial role in breaking up Dutch attacks. Meanwhile, Romero's exceptional goalkeeping performance in the penalty shootout was pivotal for Argentina; he saved two penalties while his teammates maintained composure under pressure, securing their spot in the final for the first time since 1990.",
    "keyMoments": [
      "120' - Full-time, teams prepped for penalties; a tense atmosphere surrounds the pitch.",
      "2' - Higuain's missed chance from the penalty spot puts Argentina on edge.",
      "4' - Sneijder's penalty saved by Romero becomes a turning point.",
      "A tactical battle throughout failed to yield goals, leading to shootout.",
      "Romero becomes hero with two crucial saves in the shootout.",
      "Netherlands' elimination marks Van Gaal's controversial tactics debated."
    ],
    "historicalSignificance": "This match is significant as it highlighted the tactical evolution of football, showcasing defensive strength and mental fortitude under pressure. Argentina's progression to the final reinforced their status as a historic footballing nation, while the Netherlands faced scrutiny regarding their pragmatic style of play.",
    "topPerformers": [
      {
        "name": "Sergio Romero",
        "side": "away",
        "position": "GK",
        "rating": 9.2,
        "note": "Saved two critical penalties in the shootout."
      },
      {
        "name": "Wesley Sneijder",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Controlled midfield, yet failed to convert chances."
      },
      {
        "name": "Arjen Robben",
        "side": "home",
        "position": "RW",
        "rating": 8.8,
        "note": "Led attacking plays with skill and pace."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Netherlands — 2014 Third Place
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-netherlands-2014-3rd",
    "tournament": "FIFA World Cup 2014",
    "year": 2014,
    "stage": "Third Place",
    "date": "July 12, 2014",
    "venue": "Estádio Nacional",
    "city": "Brasília, Brazil",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Julio Cesar",
        "Dani Alves",
        "Thiago Silva",
        "David Luiz",
        "Marcelo",
        "Fernandinho",
        "Paulinho",
        "Oscar",
        "Hulk",
        "Neymar",
        "Fred"
      ],
      "score": 0
    },
    "away": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "5-3-2",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Karl-Johan Johnsson",
        "Ron Vlaar",
        "Daniel Agger",
        "Daley Blind",
        "Bruno Martins Indi",
        "Kenny Tete",
        "Wijnaldum",
        "Sneijder",
        "Arjen Robben",
        "Robin van Persie",
        "Klaas-Jan Huntelaar"
      ],
      "score": 3
    },
    "status": "FT",
    "xG": {
      "home": 0.82,
      "away": 2.25
    },
    "possession": {
      "home": 41,
      "away": 59
    },
    "timeline": [
      {
        "minute": "3'",
        "side": "away",
        "player": "Robin van Persie",
        "type": "goal",
        "description": "Van Persie opens the scoring with a header from a cross."
      },
      {
        "minute": "17'",
        "side": "away",
        "player": "Daley Blind",
        "type": "goal",
        "description": "Blind finds the net with a low shot from outside the box."
      },
      {
        "minute": "90+1'",
        "side": "away",
        "player": "Georginio Wijnaldum",
        "type": "goal",
        "description": "Wijnaldum seals the game with a close-range effort."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 11,
        "away": 20,
        "homeWidth": 35,
        "awayWidth": 65
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 10,
        "homeWidth": 23,
        "awayWidth": 77
      },
      {
        "label": "Possession",
        "home": 41,
        "away": 59,
        "homeWidth": 41,
        "awayWidth": 59
      },
      {
        "label": "Passes",
        "home": 385,
        "away": 448,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Pass Accuracy",
        "home": "83%",
        "away": "86%",
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 6,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 10,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "xG",
        "home": "0.82",
        "away": "2.25",
        "homeWidth": 27,
        "awayWidth": 73
      }
    ],
    "metaDescription": "Brazil's humiliation continued as they lost to Netherlands in the 2014 World Cup Third Place match, ending a disappointing tournament for hosts.",
    "tacticalAnalysis": "In the Third Place match of the FIFA World Cup 2014, Brazil lined up in a 4-2-3-1 formation aiming for a return to form after their semi-final despair. Julio Cesar was in goal with a back four of Dani Alves, Thiago Silva, David Luiz, and Marcelo. The midfield pivot was composed of Fernandinho and Paulinho, providing the necessary balance between defense and attack. Oscar operated in an advanced role behind striker Fred, supported by wingers Hulk and Neymar. Brazil struggled to create effective chances and failed to maintain possession against the compact Dutch formation.\n\nOn the other hand, the Netherlands utilized a 5-3-2 setup that transitioned effectively into a 3-5-2, pressing Brazil high and exploiting their poor defensive organization. The wing-backs, Daley Blind and Bruno Martins Indi, played crucial roles in providing width and support for the midfield trio, allowing space for Van Persie and Robben to exploit in counter-attacks. The opening goal from Van Persie came from a well-placed cross, highlighting Brazil's defensive frailty. Blind's low drive from distance showed their tactical awareness and ability to capitalize on Brazilian errors. The final goal from Wijnaldum wrapped up an efficient countering display, sealing Brazil's nightmare World Cup on home soil and reflecting the tactical superiority of the Dutch.\n\nHead coach Scolari’s tactical missteps were evident, with a lack of flexibility in adjustments leading to the humiliation that would ultimately cost him his position post-tournament.",
    "keyMoments": [
      "3' - Van Persie scores the opener, setting the tone for the match.",
      "17' - Blind doubles the lead with a stunning shot outside the box.",
      "90+1' - Wijnaldum scores to seal the match and further demoralize Brazil."
    ],
    "historicalSignificance": "This match marked the end of Brazil's World Cup campaign in 2014, a disastrous tournament for the hosts characterized by a humiliating 7-1 defeat to Germany in the semifinals. It reflected significant issues within Brazilian football, prompting a reevaluation of their tactics and player selections, as well as leading to the resignation of coach Luiz Felipe Scolari.",
    "topPerformers": [
      {
        "name": "Robin van Persie",
        "side": "away",
        "position": "ST",
        "rating": 9,
        "note": "Led the attack, scored the opening goal, and provided a constant threat."
      },
      {
        "name": "Daley Blind",
        "side": "away",
        "position": "LB",
        "rating": 8.5,
        "note": "Impressive throughout, scored a crucial goal and supported defensively."
      },
      {
        "name": "Thiago Silva",
        "side": "home",
        "position": "CB",
        "rating": 7.5,
        "note": "Despite the loss, he was a steady presence in a difficult match."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs England — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-england-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 27, 2010",
    "venue": "Free State Stadium",
    "city": "Bloemfontein, South Africa",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Philipp Lahm",
        "Per Mertesacker",
        "Arne Friedrich",
        "Johannes Van Damme",
        "Sami Khedira",
        "Bastian Schweinsteiger",
        "Mesut Özil",
        "Toni Kroos",
        "Thomas Müller",
        "Miroslav Klose"
      ],
      "score": 4
    },
    "away": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "4-3-3",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Robert Green",
        "Glen Johnson",
        "John Terry",
        "Rio Ferdinand",
        "Ashley Cole",
        "Steven Gerrard",
        "Frank Lampard",
        "Gareth Barry",
        "James Milner",
        "Wayne Rooney",
        "Jermain Defoe"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.83,
      "away": 0.94
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "20'",
        "side": "home",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller opened the scoring with a close-range finish."
      },
      {
        "minute": "78'",
        "side": "away",
        "player": "Matthew Upson",
        "type": "goal",
        "description": "Upson equalized with a header from a corner."
      },
      {
        "minute": "24'",
        "side": "home",
        "player": "Miroslav Klose",
        "type": "goal",
        "description": "Klose restored Germany's lead with a powerful strike."
      },
      {
        "minute": "67'",
        "side": "home",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller scored his second to make it 3-1."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller completed his hat-trick with another close finish."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 22,
        "away": 9,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 3,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 565,
        "away": 390,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 5,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 12,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "xG",
        "home": "2.83",
        "away": "0.94",
        "homeWidth": 75,
        "awayWidth": 25
      }
    ],
    "metaDescription": "Germany defeats England 4-1 in the Round of 16 of the FIFA World Cup 2010, featuring a controversial disallowed goal.",
    "tacticalAnalysis": "In this clash, Germany employed a 4-2-3-1 formation that allowed them flexibility in attack and stability in defense. Khedira and Schweinsteiger formed a strong double pivot, providing the necessary cover while also transitioning the ball forwards effectively. Thomas Müller played a crucial role as the right winger, utilizing his pace and positioning to exploit England's left flank, which was often left exposed by Ashley Cole's advanced positioning. On the other hand, England set up in a 4-3-3 but struggled with their midfield control, particularly after they fell behind. Frank Lampard, tasked with linking the play, was often overrun and outmaneuvered. The pivotal moment was Lampard's legitimate shot that crossed the line but wasn't awarded, which both demoralized the English side and galvanized the Germans. Post that incident, Germany capitalized on their momentum, rapidly scoring two more goals through the increasingly dangerous Müller, effectively sealing the match. The clash highlighted Germany's skillful counter-attacking style and England's issues with their defensive organization.",
    "keyMoments": [
      "20' - Thomas Müller opens the scoring for Germany",
      "24' - Miroslav Klose doubles Germany's lead",
      "70' - Thomas Müller completes his hat-trick",
      "78' - Matthew Upson pulls one back for England"
    ],
    "historicalSignificance": "This match is remembered for England's disallowed goal, which reignited debates on the necessity of goal-line technology in football. Germany demonstrated their tactical effectiveness and attacking prowess, setting the stage for their deep run in the tournament.",
    "topPerformers": [
      {
        "name": "Thomas Müller",
        "side": "home",
        "position": "RW",
        "rating": 9.5,
        "note": "His hat-trick was pivotal in securing the victory."
      },
      {
        "name": "Miroslav Klose",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "His goal provided crucial momentum."
      },
      {
        "name": "Frank Lampard",
        "side": "away",
        "position": "CM",
        "rating": 7.5,
        "note": "Despite the disallowed goal, he was key in midfield control."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Argentina vs Mexico — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "argentina-vs-mexico-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 27, 2010",
    "venue": "Soccer City",
    "city": "Johannesburg, South Africa",
    "home": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Sergio Romero",
        "Gabriel Heinze",
        "Walter Samuel",
        "Nicolás Otamendi",
        "Javier Zanetti",
        "Javier Mascherano",
        "Esteban Cambiasso",
        "Lionel Messi",
        "Carlos Tevez",
        "Gonzalo Higuaín",
        "Angel Di María"
      ],
      "score": 3
    },
    "away": {
      "name": "Mexico",
      "flag": "🇲🇽",
      "formation": "4-3-3",
      "color": "#006847",
      "colorDim": "rgba(0,104,71,0.18)",
      "players": [
        "Guillermo Ochoa",
        "Paul Aguilar",
        "Rafael Márquez",
        "Carlos Salcido",
        "Francisco Rodríguez",
        "Gerardo Torrado",
        "Andrés Guardado",
        "Cuauhtémoc Blanco",
        "Pablo Barrera",
        "Javier Hernández",
        "Carlos Vela"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.56,
      "away": 1.12
    },
    "possession": {
      "home": 59,
      "away": 41
    },
    "timeline": [
      {
        "minute": "1'",
        "side": "home",
        "player": "Carlos Tevez",
        "type": "goal",
        "description": "Tevez scores an offside goal, controversial decision."
      },
      {
        "minute": "38'",
        "side": "home",
        "player": "Gonzalo Higuaín",
        "type": "goal",
        "description": "Higuaín doubles the lead with a close finish."
      },
      {
        "minute": "47'",
        "side": "away",
        "player": "Javier Hernández",
        "type": "goal",
        "description": "Hernández scores for Mexico, bringing them back into the game."
      },
      {
        "minute": "60'",
        "side": "home",
        "player": "Gonzalo Higuaín",
        "type": "goal",
        "description": "Higuaín completes his brace with a well-placed shot."
      },
      {
        "minute": "80'",
        "side": "away",
        "player": "Gerardo Torrado",
        "type": "yellow",
        "description": "Torrado receives a yellow card for a foul."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 20,
        "away": 11,
        "homeWidth": 65,
        "awayWidth": 35
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 5,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 59,
        "away": 41,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Passes",
        "home": 523,
        "away": 353,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "84%",
        "away": "76%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 3,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 17,
        "homeWidth": 47,
        "awayWidth": 53
      },
      {
        "label": "xG",
        "home": "2.56",
        "away": "1.12",
        "homeWidth": 70,
        "awayWidth": 30
      }
    ],
    "metaDescription": "Argentina defeats Mexico 3-1 in a thrilling Round of 16 match at the FIFA World Cup 2010 in Johannesburg, featuring a controversial goal.",
    "tacticalAnalysis": "Argentina set up in a 4-3-3 formation, with Messi and Tevez operating as inverted wingers, providing width and attacking options. The midfield trio of Mascherano, Cambiasso, and an effective Di María allowed them to control possession and dictate the game's tempo. Mexico, adopting a similar 4-3-3, struggled to cope with Argentina's pressing. Higuaín's movements off the ball often drew defenders, creating space for Tevez and Messi. The first goal from Tevez, while controversial due to his offside position, showcased Argentina's attacking talent. After the first half, Mexico adjusted but were caught on the counter for Higuaín’s brace, illustrating Argentina's clinical finishing. Their positional play stifled Mexico’s creativity, ultimately leading to Argentina’s advancement.",
    "keyMoments": [
      "1' - Tevez scores a controversial offside goal, setting the tone for Argentina's dominance.",
      "38' - Higuaín's finish gives Argentina a comfortable 2-0 lead going into halftime.",
      "47' - Hernández's quick goal ignites hopes for Mexico.",
      "60' - Higuaín's second goal puts the match beyond Mexico's reach."
    ],
    "historicalSignificance": "This match is significant as Argentina showcased their attacking prowess during the World Cup while reflecting on the contentious nature of officiating in football. The victory propelled them deeper into the tournament, heightening expectations surrounding their squad's potential.",
    "topPerformers": [
      {
        "name": "Gonzalo Higuaín",
        "side": "home",
        "position": "ST",
        "rating": 9,
        "note": "His two goals were crucial, showcasing his poaching ability."
      },
      {
        "name": "Lionel Messi",
        "side": "home",
        "position": "RW",
        "rating": 8.7,
        "note": "Creatively dominated the midfield, assisting and causing chaos."
      },
      {
        "name": "Guillermo Ochoa",
        "side": "away",
        "position": "GK",
        "rating": 7.9,
        "note": "Made several key saves to keep Mexico in the match."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // USA vs Ghana — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "usa-vs-ghana-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 26, 2010",
    "venue": "Royal Bafokeng Stadium",
    "city": "Rustenburg, South Africa",
    "home": {
      "name": "USA",
      "flag": "🇺🇸",
      "formation": "4-4-2",
      "color": "#3C3B6E",
      "colorDim": "rgba(60,59,110,0.18)",
      "players": [
        "Tim Howard",
        "Steve Cherundolo",
        "Oguchi Onyewu",
        "Carlos Bocanegra",
        "Jonathan Spector",
        "Ricardo Clark",
        "Michael Bradley",
        "Landon Donovan",
        "Clint Dempsey",
        "Jozy Altidore",
        "Brian Ching"
      ],
      "score": 1
    },
    "away": {
      "name": "Ghana",
      "flag": "🇬🇭",
      "formation": "4-2-3-1",
      "color": "#FFD700",
      "colorDim": "rgba(255,215,0,0.18)",
      "players": [
        "Richard Kingson",
        "John Pantsil",
        "Isaac Vorsah",
        "Jonathan Mensah",
        "Hans Sarpei",
        "Anthony Annan",
        "Sulley Muntari",
        "Kwadwo Asamoah",
        "Andre Ayew",
        "Asamoah Gyan",
        "Kevin-Prince Boateng"
      ],
      "score": 2
    },
    "status": "AET",
    "xG": {
      "home": 1.43,
      "away": 2.37
    },
    "possession": {
      "home": 45,
      "away": 55
    },
    "timeline": [
      {
        "minute": "3'",
        "side": "home",
        "player": "Landon Donovan",
        "type": "pen_goal",
        "description": "Donovan scored a penalty to give USA an early lead."
      },
      {
        "minute": "43'",
        "side": "away",
        "player": "Andre Ayew",
        "type": "goal",
        "description": "Ayew equalized with a close-range finish."
      },
      {
        "minute": "93'",
        "side": "away",
        "player": "Asamoah Gyan",
        "type": "goal",
        "description": "Gyan scored the winner in extra time with a powerful strike."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 16,
        "away": 22,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 8,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Possession",
        "home": 45,
        "away": 55,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Passes",
        "home": 360,
        "away": 410,
        "homeWidth": 47,
        "awayWidth": 53
      },
      {
        "label": "Pass Accuracy",
        "home": "77%",
        "away": "80%",
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 4,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Fouls",
        "home": 18,
        "away": 16,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "xG",
        "home": "1.43",
        "away": "2.37",
        "homeWidth": 38,
        "awayWidth": 62
      }
    ],
    "metaDescription": "USA fought valiantly in their Round of 16 match against Ghana during the 2010 FIFA World Cup, showcasing exciting football.",
    "tacticalAnalysis": "The match showcased a classic 4-4-2 formation for the USA against Ghana's more fluid 4-2-3-1. The United States aimed to press high, exploiting their speed on the wings through Donovan and Dempsey. This early tactic paid off with Donovan converting a penalty in the third minute. However, Ghana quickly adapted, with Ayew and Muntari controlling the midfield, allowing their fullbacks to push forward. Gyan's pace proved critical as he exploited space left by the US defense, culminating in his late extra-time goal. The substitutions by Ghana added fresh legs and creativity, particularly with Kevin-Prince Boateng's introduction, allowing Ghana to regain control after the US's initial threat. Overall, both teams displayed tactical adaptability and resilience, with Ghana ultimately proving more clinical in front of goal.",
    "keyMoments": [
      "3' - Donovan scores a penalty, giving USA an early lead.",
      "43' - Ayew equalizes for Ghana just before halftime.",
      "93' - Gyan scores the winner in extra time.",
      "60' - USA introduces fresh legs with subs to maintain pressure.",
      "75' - Ghana's defensive lineup solidifies after taking the lead."
    ],
    "historicalSignificance": "This match marked Ghana's advancement to the quarter-finals, making them the first African nation to reach this stage in the tournament's history. It was a landmark moment for African football and showcased the continent's growing competitiveness on the world stage.",
    "topPerformers": [
      {
        "name": "Asamoah Gyan",
        "side": "away",
        "position": "ST",
        "rating": 9,
        "note": "Scored the decisive goal, showcasing speed and technique."
      },
      {
        "name": "Landon Donovan",
        "side": "home",
        "position": "LW",
        "rating": 8.5,
        "note": "Instrumental in the US's attack, scored a penalty."
      },
      {
        "name": "Andre Ayew",
        "side": "away",
        "position": "LW",
        "rating": 8.7,
        "note": "Equalized and maintained pressure on the US defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Chile — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-chile-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 28, 2010",
    "venue": "Ellis Park Stadium",
    "city": "Johannesburg, South Africa",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Julio Cesar",
        "Maicon",
        "Lucio",
        "Juan",
        "Michel Bastos",
        "Gilberto Silva",
        "Felipe Melo",
        "Kaká",
        "Robinho",
        "Luis Fabiano",
        "Dani Alves"
      ],
      "score": 3
    },
    "away": {
      "name": "Chile",
      "flag": "🇨🇱",
      "formation": "3-3-1-3",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Claudio Bravo",
        "Gary Medel",
        "Gonzalo Jara",
        "Elías Figueroa",
        "Arturo Vidal",
        "Marcelo Díaz",
        "Charles Aránguiz",
        "Alexis Sánchez",
        "Mauricio Isla",
        "Esteban Paredes",
        "Ángelo Henríquez"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.67,
      "away": 0.85
    },
    "possession": {
      "home": 60,
      "away": 40
    },
    "timeline": [
      {
        "minute": "34'",
        "side": "home",
        "player": "Juan",
        "type": "goal",
        "description": "Header from a corner to give Brazil the lead."
      },
      {
        "minute": "38'",
        "side": "home",
        "player": "Luis Fabiano",
        "type": "goal",
        "description": "Struck a powerful shot from the edge of the area into the net."
      },
      {
        "minute": "88'",
        "side": "home",
        "player": "Robinho",
        "type": "goal",
        "description": "Curled shot from inside the box after a quick counter."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 17,
        "away": 8,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 2,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 60,
        "away": 40,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Passes",
        "home": 500,
        "away": 350,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "82%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 3,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 8,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "xG",
        "home": "2.67",
        "away": "0.85",
        "homeWidth": 77,
        "awayWidth": 23
      }
    ],
    "metaDescription": "Brazil dominates Chile in the Round of 16, showcasing their quality and confirming their contender status in the FIFA World Cup 2010.",
    "tacticalAnalysis": "Brazil utilized a 4-2-3-1 formation, where Gilberto Silva and Felipe Melo controlled the midfield, providing cover for the defense while facilitating attacking play. The full-backs, especially Maicon and Michel Bastos, were effective in joining the attack, leading to overloads on the flanks. Robinho played a critical role behind the striker, linking up well with Luis Fabiano, whose dual-threat capability as a goal scorer and playmaker offered Brazil fluidity in attack. Chile, in contrast, established a 3-3-1-3 structure aimed at pressing high and creating width through their wing-backs. Despite their initial pressing efforts, they were quickly outmaneuvered as Brazil's experienced players dictated the tempo. The first goal occurred from a well-executed corner, demonstrating Brazil's set-piece threat, while the second goal resulted from a defensive lapse as Luis Fabiano capitalized on space outside the box. The final goal was the result of a swift counter-attack, exemplifying Brazil's pace and transition game, particularly through Robinho's clever positioning.",
    "keyMoments": [
      "34' Juan opens the scoring with a header from a corner.",
      "38' Luis Fabiano doubles the lead with a powerful strike from distance.",
      "88' Robinho seals Brazil's dominance with a third goal in the closing minutes."
    ],
    "historicalSignificance": "This match underlined Brazil's reputation as serious contenders for the World Cup title, reflecting their attacking prowess and depth of talent. Defeating Chile established Brazil as a formidable force, eventually reaching the quarter-finals, where they faced the Netherlands.",
    "topPerformers": [
      {
        "name": "Juan",
        "side": "home",
        "position": "CB",
        "rating": 8.2,
        "note": "Excellent defensively and scored the opening goal."
      },
      {
        "name": "Robinho",
        "side": "home",
        "position": "LW",
        "rating": 8.5,
        "note": "Consistently troubling the defense and scored a crucial goal."
      },
      {
        "name": "Claudio Bravo",
        "side": "away",
        "position": "GK",
        "rating": 7.5,
        "note": "Made several important saves to keep the scoreline respectable."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs Slovakia — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-slovakia-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 28, 2010",
    "venue": "Moses Mabhida Stadium",
    "city": "Durban, South Africa",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-2-3-1",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Maarten Stekelenburg",
        "Gregory van der Wiel",
        "Johnny Heitinga",
        "Joris Mathijsen",
        "Giovanni van Bronckhorst",
        "Mark van Bommel",
        "Wesley Sneijder",
        "Arjen Robben",
        "Eljero Elia",
        "Robin van Persie",
        "Ruud van Nistelrooy"
      ],
      "score": 2
    },
    "away": {
      "name": "Slovakia",
      "flag": "🇸🇰",
      "formation": "4-2-3-1",
      "color": "#FF6600",
      "colorDim": "rgba(255,102,0,0.18)",
      "players": [
        "Ján Mucha",
        "Peter Pekarík",
        "Martin Škrtel",
        "Ján Durica",
        "Richard Križan",
        "Juraj Kucka",
        "Marek Hamšík",
        "Róbert Vittek",
        "Kamil Kopúnek",
        "Vladimír Weiss",
        "Miroslav Stoch"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.53,
      "away": 0.83
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "18'",
        "side": "home",
        "player": "Wesley Sneijder",
        "type": "goal",
        "description": "Long-range shot finds the bottom corner."
      },
      {
        "minute": "38'",
        "side": "home",
        "player": "Arjen Robben",
        "type": "goal",
        "description": "A stunning solo effort from Robben doubles the lead."
      },
      {
        "minute": "86'",
        "side": "away",
        "player": "Róbert Vittek",
        "type": "goal",
        "description": "Vittek finds the net with a close-range finish."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 23,
        "away": 8,
        "homeWidth": 74,
        "awayWidth": 26
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 4,
        "homeWidth": 69,
        "awayWidth": 31
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 713,
        "away": 493,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "80%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 3,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Fouls",
        "home": 9,
        "away": 16,
        "homeWidth": 36,
        "awayWidth": 64
      },
      {
        "label": "xG",
        "home": "2.53",
        "away": "0.83",
        "homeWidth": 76,
        "awayWidth": 24
      }
    ],
    "metaDescription": "The Netherlands overcame Slovakia 2-1 in the Round of 16 of the FIFA World Cup 2010 with standout performances from Robben and Sneijder.",
    "tacticalAnalysis": "In this knockout match, the Netherlands employed a 4-2-3-1 formation that maximized width and utilized the pace of Robben and Elia on the flanks. Mark van Bommel and Wesley Sneijder anchored the midfield, dictating tempo and providing support in defense and attack. Slovakia matched their opponents with a similar formation but struggled to transition from defense to offense, often being caught in possession. Arjen Robben showcased his ability by drifting inside onto his stronger left foot, leading to crucial goals. The Dutch maintained intense pressure and utilized effective pressing to win back possession quickly. Slovakia’s key tactical battle lay in defending against Robben's speed, but their high defensive line left them vulnerable. The goals came from well-executed plays, with Sneijder opening the scoring from outside the box and Robben scoring after a quick counter. Slovakia’s late goal from Vittek came too late to change the outcome, highlighting their struggles for creativity.",
    "keyMoments": [
      "18' - Sneijder opens the scoring with a fantastic long-range shot.",
      "38' - Robben doubles the lead with a swift solo run.",
      "86' - Vittek pulls one back for Slovakia, but it's too late."
    ],
    "historicalSignificance": "This match marked the Netherlands' continued progress in the 2010 World Cup, showcasing their attacking prowess and tactical discipline. It was a notable step towards their eventual place in the final, illustrating their strength as serious contenders in international football.",
    "topPerformers": [
      {
        "name": "Arjen Robben",
        "side": "home",
        "position": "RW",
        "rating": 9.2,
        "note": "His pace and skill were unmatched, resulting in a crucial goal."
      },
      {
        "name": "Wesley Sneijder",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Control of the midfield and a stunning opening goal."
      },
      {
        "name": "Róbert Vittek",
        "side": "away",
        "position": "ST",
        "rating": 8,
        "note": "Scored Slovakia's only goal and was a constant threat."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Spain vs Portugal — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "spain-vs-portugal-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 29, 2010",
    "venue": "Green Point Stadium",
    "city": "Cape Town, South Africa",
    "home": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-2-3-1",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Iker Casillas",
        "Gerard Piqué",
        "Carles Puyol",
        "Carlos Marchena",
        "Joan Capdevila",
        "Xabi Alonso",
        "Cesc Fàbregas",
        "Andrés Iniesta",
        "David Silva",
        "David Villa",
        "Fernando Torres"
      ],
      "score": 1
    },
    "away": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Eduardo",
        "Garry Mendes Rodrigues",
        "Ricardo Carvalho",
        "Bruno Alves",
        "Fábio Coentrão",
        "Raúl Meireles",
        "João Moutinho",
        "Deco",
        "Cristiano Ronaldo",
        "Hugo Almeida",
        "Nani"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.5,
      "away": 0.4
    },
    "possession": {
      "home": 61,
      "away": 39
    },
    "timeline": [
      {
        "minute": "63'",
        "side": "home",
        "player": "David Villa",
        "type": "goal",
        "description": "Villa scores with a deflected shot from the edge of the area."
      },
      {
        "minute": "85'",
        "side": "away",
        "player": "Raúl Meireles",
        "type": "yellow",
        "description": "Meireles booked for a foul on Iniesta."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 10,
        "away": 4,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 2,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Possession",
        "home": 61,
        "away": 39,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 350,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "75%",
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 2,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 11,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "xG",
        "home": "1.50",
        "away": "0.45",
        "homeWidth": 77,
        "awayWidth": 23
      }
    ],
    "metaDescription": "Spain advances past Portugal with a key goal from David Villa in the 2010 FIFA World Cup Round of 16.",
    "tacticalAnalysis": "Spain employed a 4-2-3-1 formation, utilizing a double pivot of Xabi Alonso and Cesc Fàbregas to control the midfield. This strategy allowed for fluid ball movement, with Iniesta and Silva providing width. Portugal's 4-3-3 aimed to counter-attack but struggled to break down Spain’s possession game. The goal came from Villa after a crucial defensive lapse by Portugal, emphasizing Spain's dominance while highlighting Ronaldo's inability to impact the game, often being marked out of the match. The tactical discipline from Portugal was commendable, yet they lacked offensive creativity and were often reliant on isolated counter-attacks.",
    "keyMoments": [
      "63' - David Villa scores, putting Spain ahead in a tightly contested match.",
      "85' - Raúl Meireles receives a yellow card for a foul.",
      "Full-time - Spain advances to the quarter-finals, ending Portugal's World Cup journey."
    ],
    "historicalSignificance": "This match marked a crucial moment in Spanish football history, as Spain's victory initiated a golden era, culminating in their 2010 World Cup win. It emphasized Spain's tactical acumen and marked the beginning of Portugal’s struggle to replicate their club performances on the international stage.",
    "topPerformers": [
      {
        "name": "David Villa",
        "side": "home",
        "position": "ST",
        "rating": 9,
        "note": "Key player with a decisive goal and continuous threat on the attack."
      },
      {
        "name": "Iker Casillas",
        "side": "home",
        "position": "GK",
        "rating": 8.5,
        "note": "Made crucial saves that ensured a clean sheet."
      },
      {
        "name": "Cristiano Ronaldo",
        "side": "away",
        "position": "LW",
        "rating": 6.5,
        "note": "Struggled to influence the game, isolated from the attack."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Paraguay vs Japan — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "paraguay-vs-japan-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 29, 2010",
    "venue": "Loftus Versfeld Stadium",
    "city": "Pretoria, South Africa",
    "home": {
      "name": "Paraguay",
      "flag": "🇵🇾",
      "formation": "4-4-2",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Justo Villar",
        "Claudio Morel",
        "Paulo Da Silva",
        "Gerardo Alcoba",
        "Omar Bravo",
        "Christian Riveros",
        "Edgar Barreto",
        "Victor Caceres",
        "Roque Santa Cruz",
        "Lucas Barrios",
        "Nelson Haedo Valdez"
      ],
      "score": 0
    },
    "away": {
      "name": "Japan",
      "flag": "🇯🇵",
      "formation": "4-2-3-1",
      "color": "#BC002D",
      "colorDim": "rgba(188,0,45,0.18)",
      "players": [
        "Eiji Kawashima",
        "Yuichi Komano",
        "Yasuyuki Konno",
        "Maya Yoshida",
        "Atsuto Uchida",
        "Hiroshi Kiyotake",
        "Yasuhito Endo",
        "Junya Tanaka",
        "Shinji Kagawa",
        "Keisuke Honda",
        "Takashi Usami"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "5-3",
    "xG": {
      "home": 1.2,
      "away": 1.15
    },
    "possession": {
      "home": 50,
      "away": 50
    },
    "timeline": [
      {
        "minute": "90'",
        "side": "neutral",
        "player": "N/A",
        "type": "sub",
        "description": "End of regular time"
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "N/A",
        "type": "sub",
        "description": "End of extra time"
      },
      {
        "minute": "penalty",
        "side": "home",
        "player": "Cardozo",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "away",
        "player": "Komano",
        "type": "pen_miss",
        "description": "Saved by Villar"
      },
      {
        "minute": "penalty",
        "side": "home",
        "player": "Barrios",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "away",
        "player": "Kagawa",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "home",
        "player": "Valdez",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "away",
        "player": "Honda",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "home",
        "player": "Riveros",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "away",
        "player": "Endo",
        "type": "pen_miss",
        "description": "Missed penalty"
      },
      {
        "minute": "penalty",
        "side": "home",
        "player": "Caceres",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "away",
        "player": "Tanaka",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "home",
        "player": "Santa Cruz",
        "type": "pen_goal",
        "description": "Converted penalty"
      },
      {
        "minute": "penalty",
        "side": "away",
        "player": "Usami",
        "type": "pen_miss",
        "description": "Missed penalty"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 10,
        "away": 9,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 2,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Possession",
        "home": 50,
        "away": 50,
        "homeWidth": 50,
        "awayWidth": 50
      },
      {
        "label": "Passes",
        "home": 300,
        "away": 295,
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Pass Accuracy",
        "home": "75%",
        "away": "73%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 4,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 14,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "xG",
        "home": "1.20",
        "away": "1.15",
        "homeWidth": 50,
        "awayWidth": 50
      }
    ],
    "metaDescription": "Paraguay and Japan faced off in a goalless battle leading to penalties, highlighting the resilience of both teams in the FIFA World Cup 2010.",
    "tacticalAnalysis": "In this match, Paraguay deployed a solid 4-4-2 formation aimed at compactness in midfield, trying to absorb Japan's attacking threats led by Honda and Kagawa. Roque Santa Cruz and Lucas Barrios formed a dual striking partnership, providing physical presence upfront while looking to capitalize on counter-attacks. Japan, on the other hand, set up in a 4-2-3-1 shape allowing them to create overloads in wide areas with Uchida and Komano pushing forward. The midfield duo of Kiyotake and Endo aimed to control possession and provide link-up play with the front four. Throughout the match, both defenses held firm, and it took until penalties to decide a winner, showcasing the tactical battle and balance between both teams.",
    "keyMoments": [
      "90' End of regular time, both teams still scoreless.",
      "120' Extra time comes to a close with no goals.",
      "Penalty shootout begins, excitement and tension in the air.",
      "Cardozo makes a vital save against Komano's penalty."
    ],
    "historicalSignificance": "This match marked Paraguay's first-ever progression to the quarter-finals in a World Cup, showcasing the growth of South American football. Japan, despite the loss, solidified their reputation as a competitive side in international tournaments, being the first Asian team to reach the knockout stages for consecutive World Cups.",
    "topPerformers": [
      {
        "name": "Justo Villar",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Outstanding saves during the penalty shootout."
      },
      {
        "name": "Keisuke Honda",
        "side": "away",
        "position": "CM",
        "rating": 8.5,
        "note": "Creative force in Japan's midfield."
      },
      {
        "name": "Roque Santa Cruz",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Strong presence on the field, crucial in attacking plays."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Uruguay vs South Korea — 2010 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "uruguay-vs-south-korea-2010-r16",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Round of 16",
    "date": "June 26, 2010",
    "venue": "Nelson Mandela Bay Stadium",
    "city": "Port Elizabeth, South Africa",
    "home": {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "formation": "4-4-2",
      "color": "#4EABDF",
      "colorDim": "rgba(78,171,223,0.18)",
      "players": [
        "Fernando Muslera",
        "Maxi Pereira",
        "Diego Godín",
        "Mauricio Isla",
        "Diego Lugano",
        "Alvaro Pereira",
        "Egídio",
        "Edinson Cavani",
        "Diego Forlán",
        "Luis Suárez",
        "Cristian Rodríguez"
      ],
      "score": 2
    },
    "away": {
      "name": "South Korea",
      "flag": "🇰🇷",
      "formation": "4-2-3-1",
      "color": "#CD2E3A",
      "colorDim": "rgba(205,46,58,0.18)",
      "players": [
        "Ryu Hyun-jin",
        "Lee Yong",
        "Jung Seung-hyun",
        "Kim Young-gwon",
        "Park Joo-ho",
        "Ki Sung-yueng",
        "Lee Jae-sung",
        "Son Heung-min",
        "Lee Chung-yong",
        "Kwon Chang-hoon",
        "Park Chu-young"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 1.87,
      "away": 0.79
    },
    "possession": {
      "home": 56,
      "away": 44
    },
    "timeline": [
      {
        "minute": "8'",
        "side": "home",
        "player": "Luis Suárez",
        "type": "goal",
        "description": "Suárez opens the scoring with a close-range shot."
      },
      {
        "minute": "38'",
        "side": "home",
        "player": "Diego Forlán",
        "type": "goal",
        "description": "Forlán doubles the lead with a stunning long-range strike."
      },
      {
        "minute": "49'",
        "side": "away",
        "player": "Lee Chung-yong",
        "type": "goal",
        "description": "Lee pulls one back for South Korea early in the second half."
      },
      {
        "minute": "84'",
        "side": "home",
        "player": "Edinson Cavani",
        "type": "sub",
        "description": "Cavani replaces Forlán in the final minutes."
      },
      {
        "minute": "90'",
        "side": "away",
        "player": "Park Joo-ho",
        "type": "yellow",
        "description": "Park is booked for a late challenge."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 8,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Possession",
        "home": 56,
        "away": 44,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Passes",
        "home": 394,
        "away": 312,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "80%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 4,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "1.87",
        "away": "0.79",
        "homeWidth": 70,
        "awayWidth": 30
      }
    ],
    "metaDescription": "Uruguay defeats South Korea 2-1 in the Round of 16 at the FIFA World Cup 2010, showcasing tactical prowess and star performances.",
    "tacticalAnalysis": "Uruguay's 4-4-2 formation utilized a strong central midfield presence, allowing them to control the game with Forlán orchestrating attacks. The pairing of Suárez and Forlán provided flexibility, with Forlán often dropping deeper to create opportunities. South Korea's 4-2-3-1 showcased their attacking intent, relying on pacey wingers like Son Heung-min and Lee Chung-yong to exploit space. The tactical battle was characterized by Uruguay's counter-attacking strategy, effectively utilizing the flanks and engaging in quick transitions after regaining possession. Forlán's movement allowed him to find pockets of space, which culminated in his long-range goal. Lee's goal for South Korea illustrated their resilience; however, they struggled to break down Uruguay's disciplined setup, resulting in limited clear-cut chances in the second half.",
    "keyMoments": [
      "8' - Suárez scores from a cross, setting the tone early.",
      "38' - Forlán scores a beautiful strike, securing a 2-goal lead before half-time.",
      "49' - Lee Chung-yong scores, reigniting South Korea's hopes.",
      "84' - Cavani brought on to solidify the win.",
      "90' - Park Joo-ho gets a yellow card as South Korea pushes for an equalizer."
    ],
    "historicalSignificance": "This match was a pivotal moment for Uruguay, allowing them to advance to the quarter-finals for the first time since 1970. It also demonstrated South Korea's growth in international football, showcasing their ability to compete against South American teams.",
    "topPerformers": [
      {
        "name": "Diego Forlán",
        "side": "home",
        "position": "CAM",
        "rating": 9.2,
        "note": "Outstanding performance with a goal and assist, controlling midfield."
      },
      {
        "name": "Luis Suárez",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Key goal scorer and threat throughout the match."
      },
      {
        "name": "Lee Chung-yong",
        "side": "away",
        "position": "RW",
        "rating": 8,
        "note": "Strong showing with a goal and consistent pressure on Uruguay's defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs Brazil — 2010 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-brazil-2010-qf",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Quarter-Final",
    "date": "July 2, 2010",
    "venue": "Nelson Mandela Bay Stadium",
    "city": "Port Elizabeth, South Africa",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-2-3-1",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Maarten Stekelenburg",
        "Gregory van der Wiel",
        "Joris Mathijsen",
        "Ron Vlaar",
        "Giovanni van Bronckhorst",
        "Nigel de Jong",
        "Wesley Sneijder",
        "Arjen Robben",
        "Robin van Persie",
        "Rafael van der Vaart",
        "Dirk Kuyt"
      ],
      "score": 2
    },
    "away": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-3-3",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Julio Cesar",
        "Maicon",
        "Lucio",
        "Juan",
        "Michel Bastos",
        "Gilberto Silva",
        "Felipe Melo",
        "Kaká",
        "Robinho",
        "Luis Fabiano",
        "Ramires"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.1,
      "away": 1.3
    },
    "possession": {
      "home": 49,
      "away": 51
    },
    "timeline": [
      {
        "minute": "10'",
        "side": "away",
        "player": "Robinho",
        "type": "goal",
        "description": "Robinho scored with a low shot after a brilliant Brazilian move."
      },
      {
        "minute": "53'",
        "side": "home",
        "player": "Wesley Sneijder",
        "type": "goal",
        "description": "Sneijder equalized after a messy situation in the box following an own goal by Melo."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Wesley Sneijder",
        "type": "goal",
        "description": "Sneijder scored again with a precise shot after capitalizing on Brazilian defensive chaos."
      },
      {
        "minute": "73'",
        "side": "away",
        "player": "Felipe Melo",
        "type": "red",
        "description": "Melo received a red card for stamping on Dutch player."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 13,
        "away": 9,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Shots on Target",
        "home": 7,
        "away": 4,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Possession",
        "home": 49,
        "away": 51,
        "homeWidth": 49,
        "awayWidth": 51
      },
      {
        "label": "Passes",
        "home": 472,
        "away": 487,
        "homeWidth": 49,
        "awayWidth": 51
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "83%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Fouls",
        "home": 13,
        "away": 12,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "xG",
        "home": "2.11",
        "away": "1.33",
        "homeWidth": 61,
        "awayWidth": 39
      }
    ],
    "metaDescription": "The Netherlands stunned Brazil in a thrilling quarter-final, coming back to win 2-1, marking a pivotal moment in World Cup history.",
    "tacticalAnalysis": "In the quarter-final clash, both teams showcased contrasting tactical setups. The Netherlands deployed a 4-2-3-1 formation, characterized by a double pivot of Nigel de Jong and Wesley Sneijder who provided both defensive cover and attacking support. Arjen Robben and Dirk Kuyt operated on the flanks, stretching the Brazilian defense, while Robbin van Persie played as the sole striker. Brazil, on the other hand, utilized a 4-3-3, with Luis Fabiano as the central striker, supported by Robinho and Ramires on the wings. The key tactical battle lay in the midfield, where Sneijder's versatility allowed him to exploit spaces left by Brazil's attacking approach. After going down early to a Robinho goal, the Netherlands regrouped and controlled possession, leading to Sneijder's dramatic equalizer following Felipe Melo's own goal. The second goal, also from Sneijder, came amidst chaotic defending from Brazil, demonstrating their vulnerability under pressure. Manager Bert van Marwijk's effective adjustments, particularly in the second half, proved decisive in overturning the deficit. Felipe Melo's sending off further compounded Brazil's woes, sealing their fate and allowing the Netherlands to advance.",
    "keyMoments": [
      "10' - Robinho scores to give Brazil the lead.",
      "53' - Sneijder equalizes for the Netherlands.",
      "70' - Sneijder scores the second goal, putting the Netherlands ahead.",
      "73' - Felipe Melo sent off for a stamping incident."
    ],
    "historicalSignificance": "This match is remembered as one of the World Cup's greatest upsets, with the Netherlands overturning Brazil's early lead to claim victory. It marked Brazil's exit from the tournament at an unexpected stage, while the Netherlands advanced to their first semi-final since 1998, further solidifying their status as a strong footballing nation.",
    "topPerformers": [
      {
        "name": "Wesley Sneijder",
        "side": "home",
        "position": "CAM",
        "rating": 9.2,
        "note": "Instrumental in midfield, scoring both goals that turned the match."
      },
      {
        "name": "Maarten Stekelenburg",
        "side": "home",
        "position": "GK",
        "rating": 8.5,
        "note": "Made crucial saves throughout the match, keeping Brazil at bay."
      },
      {
        "name": "Felipe Melo",
        "side": "away",
        "position": "CDM",
        "rating": 6.5,
        "note": "Opened the scoring but was later sent off, impacting Brazil's performance."
      },
      {
        "name": "Robinho",
        "side": "away",
        "position": "LW",
        "rating": 8,
        "note": "Scored a brilliant goal to give Brazil an early lead and posed a constant threat."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Argentina vs Germany — 2010 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "argentina-vs-germany-2010-qf",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Quarter-Final",
    "date": "July 3, 2010",
    "venue": "Cape Town Stadium",
    "city": "Cape Town, South Africa",
    "home": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Sergio Romero",
        "Gabriel Heinze",
        "Nicolas Otamendi",
        "Juan Sabaleta",
        "Javier Mascherano",
        "Angel Di Maria",
        "Lionel Messi",
        "Javier Pastore",
        "Gonzalo Higuain",
        "Carlos Tevez",
        "Diego Milito"
      ],
      "score": 0
    },
    "away": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Philipp Lahm",
        "Per Mertesacker",
        "Arne Friedrich",
        "Jérôme Boateng",
        "Bastian Schweinsteiger",
        "Sami Khedira",
        "Mesut Özil",
        "Thomas Müller",
        "Miroslav Klose",
        "Mario Gomez"
      ],
      "score": 4
    },
    "status": "FT",
    "xG": {
      "home": 0.76,
      "away": 3.25
    },
    "possession": {
      "home": 40,
      "away": 60
    },
    "timeline": [
      {
        "minute": "24'",
        "side": "away",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Header from a corner kick."
      },
      {
        "minute": "68'",
        "side": "away",
        "player": "Miroslav Klose",
        "type": "goal",
        "description": "Finish from close range after a cross."
      },
      {
        "minute": "74'",
        "side": "away",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Second goal after a counter-attack."
      },
      {
        "minute": "89'",
        "side": "away",
        "player": "Arne Friedrich",
        "type": "goal",
        "description": "Final goal from a set piece."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 10,
        "away": 20,
        "homeWidth": 33,
        "awayWidth": 67
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 11,
        "homeWidth": 27,
        "awayWidth": 73
      },
      {
        "label": "Possession",
        "home": 40,
        "away": 60,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Passes",
        "home": 300,
        "away": 450,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "90%",
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Corners",
        "home": 3,
        "away": 7,
        "homeWidth": 30,
        "awayWidth": 70
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 17,
        "homeWidth": 47,
        "awayWidth": 53
      },
      {
        "label": "xG",
        "home": "0.76",
        "away": "3.25",
        "homeWidth": 20,
        "awayWidth": 80
      }
    ],
    "metaDescription": "Germany stunned Argentina with a 4-0 victory in the FIFA World Cup 2010 Quarter-Final, showcasing tactical superiority and skill.",
    "tacticalAnalysis": "In this high-stakes quarter-final at the 2010 FIFA World Cup, Germany employed a fluid 4-2-3-1 formation that allowed them to dominate the midfield. Bastian Schweinsteiger and Sami Khedira played pivotal roles as double pivots, providing both defensive cover and initiating attacks. Argentina, on the other hand, lined up in a 4-3-3, with Lionel Messi, Gonzalo Higuain, and Carlos Tevez forming the front three. However, their high defensive line was exposed by Germany's quick transitions. The opening goal came from a set piece, a sign of Argentina’s defensive vulnerabilities, with Thomas Müller capitalizing on a corner. As the match progressed, Mertesacker and Friedrich held strong against Higuain's incursions, while Klose and Müller exploited gaps left by Argentina's pressing, particularly during their quick counter-attacking phases. Maradona's tactical decisions came under scrutiny as they struggled to adapt, ultimately leading to a comprehensive defeat.",
    "keyMoments": [
      "24' - Thomas Müller scores from a corner, breaking the deadlock.",
      "68' - Miroslav Klose doubles the lead, taking advantage of their left flank.",
      "74' - Müller scores again, showcasing Germany's quick counterplay.",
      "89' - Friedrich seals the match with a header from a set-piece."
    ],
    "historicalSignificance": "This match represents a pivotal moment in World Cup history, highlighting Germany's tactical evolution under Joachim Löw. The 4-0 defeat marked Argentina's first exit in the knockout stage under Diego Maradona's management, asserting Germany's status as one of the tournament favorites.",
    "topPerformers": [
      {
        "name": "Thomas Müller",
        "side": "away",
        "position": "RW",
        "rating": 9.5,
        "note": "Scored two goals and was a constant threat on the right flank."
      },
      {
        "name": "Miroslav Klose",
        "side": "away",
        "position": "ST",
        "rating": 8.8,
        "note": "Key in Germany's attacking movement, scoring the second goal."
      },
      {
        "name": "Lionel Messi",
        "side": "home",
        "position": "RW",
        "rating": 7.2,
        "note": "Despite being well-marked, he created chances for his teammates."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Spain vs Paraguay — 2010 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "spain-vs-paraguay-2010-qf",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Quarter-Final",
    "date": "July 3, 2010",
    "venue": "Ellis Park Stadium",
    "city": "Johannesburg, South Africa",
    "home": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-2-3-1",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Iker Casillas",
        "Gerard Piqué",
        "Carlos Marchena",
        "Carles Puyol",
        "Joan Capdevila",
        "Andrés Iniesta",
        "Cesc Fàbregas",
        "Xavi Hernández",
        "David Silva",
        "David Villa",
        "Fernando Torres"
      ],
      "score": 1
    },
    "away": {
      "name": "Paraguay",
      "flag": "🇵🇾",
      "formation": "4-4-2",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Justo Villar",
        "Claudio Morel Rodríguez",
        "Carlos Bonet",
        "Paulo da Silva",
        "Antolín Alcaraz",
        "Edgar Barreto",
        "Cristian Riveros",
        "Víctor Cáceres",
        "Óscar Cardozo",
        "Roque Santa Cruz",
        "Lucas Barrios"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.54,
      "away": 0.76
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "8'",
        "side": "home",
        "player": "David Villa",
        "type": "goal",
        "description": "Villa scores with a powerful strike after a deflection."
      },
      {
        "minute": "30'",
        "side": "away",
        "player": "Óscar Cardozo",
        "type": "pen_miss",
        "description": "Cardozo misses a penalty after being fouled in the box."
      },
      {
        "minute": "36'",
        "side": "away",
        "player": "Lucas Barrios",
        "type": "sub",
        "description": "Barrios comes on for Santa Cruz."
      },
      {
        "minute": "59'",
        "side": "away",
        "player": "Cristian Riveros",
        "type": "yellow",
        "description": "Riveros receives a yellow card for a late challenge."
      },
      {
        "minute": "68'",
        "side": "neutral",
        "player": "Goal Review",
        "type": "disallowed_goal",
        "description": "Villa's second goal is disallowed for offside."
      },
      {
        "minute": "82'",
        "side": "home",
        "player": "Fernando Torres",
        "type": "sub",
        "description": "Torres substituted for Jesús Navas."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 10,
        "away": 8,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 2,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 487,
        "away": 328,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "75%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 16,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "1.54",
        "away": "0.76",
        "homeWidth": 67,
        "awayWidth": 33
      }
    ],
    "metaDescription": "Spain faced Paraguay in the 2010 World Cup quarter-finals, a match decided by a single goal from David Villa, showcasing Spain's resilience.",
    "tacticalAnalysis": "In this quarter-final, Spain utilized a 4-2-3-1 formation, focusing on ball retention and quick passing in the midfield. Xavi and Iniesta orchestrated the play, with Villa operating primarily as a left winger who could cut inside to provide scoring threats. Paraguay, employing a 4-4-2, aimed to disrupt Spain's rhythm with a compact midfield. They sought counterattacks through quick transitions, primarily leveraging the physical presence of Óscar Cardozo and Roque Santa Cruz upfront. The match was defined by Villa's clinical finish from a well-constructed attack that came through intricate passing. Despite being under pressure, Spain's back four, led by Piqué and Puyol, held firm throughout, showcasing their defensive organization.",
    "keyMoments": [
      "8' - Villa opens the scoring with a deflected shot.",
      "30' - Cardozo misses a crucial penalty, which could have leveled the match.",
      "68' - Villa has a goal disallowed for offside after a VAR review.",
      "82' - Torres is substituted off for Navas, bringing fresh legs into the attack."
    ],
    "historicalSignificance": "This match marked a pivotal moment in Spain's 2010 World Cup journey, showcasing their trademark resilience. David Villa's performance solidified his status as the tournament's top scorer. Despite not being at their best, Spain demonstrated the ability to win under pressure, a hallmark of their championship run.",
    "topPerformers": [
      {
        "name": "David Villa",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Villa was instrumental in securing Spain's victory with a decisive goal."
      },
      {
        "name": "Iker Casillas",
        "side": "home",
        "position": "GK",
        "rating": 8.5,
        "note": "Casillas made critical saves, including a penalty save, ensuring Spain's clean sheet."
      },
      {
        "name": "Óscar Cardozo",
        "side": "away",
        "position": "ST",
        "rating": 7.5,
        "note": "Despite missing a penalty, Cardozo was a constant threat in attack."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Uruguay vs Netherlands — 2010 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "uruguay-vs-netherlands-2010-sf",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Semi-Final",
    "date": "July 6, 2010",
    "venue": "Cape Town Stadium",
    "city": "Cape Town, South Africa",
    "home": {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "formation": "4-4-2",
      "color": "#4EABDF",
      "colorDim": "rgba(78,171,223,0.18)",
      "players": [
        "Fernando Muslera",
        "Maxi Pereira",
        "Diego Godín",
        "Sebastián Coates",
        "Martín Cáceres",
        "Edinson Cavani",
        "Diego Pérez",
        "Alvaro Pereira",
        "Luis Suárez",
        "Diego Forlán",
        "Gustavo Varela"
      ],
      "score": 2
    },
    "away": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Maarten Stekelenburg",
        "Khalid Boulahrouz",
        "Joris Mathijsen",
        "Ron Vlaar",
        "Giovanni van Bronckhorst",
        "Mark van Bommel",
        "Wesley Sneijder",
        "Arjen Robben",
        "Robin van Persie",
        "Eljero Elia",
        "Ruud van Nistelrooy"
      ],
      "score": 3
    },
    "status": "FT",
    "xG": {
      "home": 1.35,
      "away": 2.45
    },
    "possession": {
      "home": 48,
      "away": 52
    },
    "timeline": [
      {
        "minute": "18'",
        "side": "away",
        "player": "Wesley Sneijder",
        "type": "goal",
        "description": "Sneijder opened the scoring with a powerful shot from the edge of the box."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Diego Forlán",
        "type": "goal",
        "description": "Forlán equalized with a stunning long-range effort."
      },
      {
        "minute": "88'",
        "side": "away",
        "player": "Wesley Sneijder",
        "type": "goal",
        "description": "Sneijder scored again with a close-range finish."
      },
      {
        "minute": "90'",
        "side": "away",
        "player": "Robin van Persie",
        "type": "goal",
        "description": "Van Persie sealed the win with a clever finish."
      },
      {
        "minute": "43'",
        "side": "home",
        "player": "Máximo Pereira",
        "type": "red",
        "description": "Pereira received a red card for a last-man tackle, diminishing Uruguay's chances."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 11,
        "away": 15,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 8,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Possession",
        "home": 48,
        "away": 52,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Passes",
        "home": 329,
        "away": 357,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Pass Accuracy",
        "home": "83%",
        "away": "85%",
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 5,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 18,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "xG",
        "home": "1.35",
        "away": "2.45",
        "homeWidth": 42,
        "awayWidth": 58
      }
    ],
    "metaDescription": "Uruguay faced Netherlands in the gripping semi-final of the FIFA World Cup 2010, a match filled with pivotal moments and standout performances.",
    "tacticalAnalysis": "In this semi-final, Uruguay adopted a 4-4-2 formation, relying on the midfield pairing of Pérez and Pereira to control the center, while Forlán and Suárez provided attacking threat. The Netherlands set up in a 4-3-3 formation, with Sneijder as the central playmaker flanked by Robben and Elia. The battle ensued primarily in midfield, where Van Bommel's physicality was crucial in disrupting Uruguay's rhythm. The early goal from Sneijder allowed the Netherlands to dictate play, forcing Uruguay to chase and eventually leaving gaps that resulted in more goals. Forlán's stunning strike showcased his quality, but the red card for Pereira was a turning point that shifted momentum significantly in favor of the Dutch.",
    "keyMoments": [
      "18' - Sneijder scores, changing the pace of the match.",
      "70' - Forlán scores a brilliant goal to level the match.",
      "88' - Sneijder nets his second, putting Netherlands back in control.",
      "90' - Van Persie's goal seals the game for the Netherlands."
    ],
    "historicalSignificance": "This match was crucial as it showcased the tactical evolution of European teams in World Cups. The Netherlands' victory led them to their third World Cup final, solidifying their reputation as a footballing powerhouse. Forlán's Golden Ball win underlined Uruguay's resurgence in world football.",
    "topPerformers": [
      {
        "name": "Wesley Sneijder",
        "side": "away",
        "position": "CM",
        "rating": 9.2,
        "note": "Scored twice and was instrumental in attack."
      },
      {
        "name": "Diego Forlán",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Provided an equalizer with an exceptional strike and assisted the second goal."
      },
      {
        "name": "Maarten Stekelenburg",
        "side": "away",
        "position": "GK",
        "rating": 8,
        "note": "Made crucial saves that kept the Dutch in the lead."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Uruguay vs Germany — 2010 Third Place
  // ─────────────────────────────────────────────
  {
    "id": "uruguay-vs-germany-2010-3rd",
    "tournament": "FIFA World Cup 2010",
    "year": 2010,
    "stage": "Third Place",
    "date": "July 10, 2010",
    "venue": "Nelson Mandela Bay Stadium",
    "city": "Port Elizabeth, South Africa",
    "home": {
      "name": "Uruguay",
      "flag": "🇺🇾",
      "formation": "4-4-2",
      "color": "#4EABDF",
      "colorDim": "rgba(78,171,223,0.18)",
      "players": [
        "Fernando Muslera",
        "Maxi Pereira",
        "Diego Godín",
        "Sebastián Coates",
        "Alvaro Pereira",
        "Edinson Cavani",
        "Diego Forlán",
        "Egídio",
        "Walter Gargano",
        "Cristian Rodríguez",
        "Luis Suárez"
      ],
      "score": 2
    },
    "away": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-3-3",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Manuel Neuer",
        "Philipp Lahm",
        "Per Mertesacker",
        "Arne Friedrich",
        "Gómez",
        "Bastian Schweinsteiger",
        "Thomas Müller",
        "Mesut Özil",
        "Jérôme Boateng",
        "Miroslav Klose",
        "Sami Khedira"
      ],
      "score": 3
    },
    "status": "FT",
    "xG": {
      "home": 1.25,
      "away": 2.8
    },
    "possession": {
      "home": 48,
      "away": 52
    },
    "timeline": [
      {
        "minute": "19'",
        "side": "away",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller scores the opener from close range."
      },
      {
        "minute": "28'",
        "side": "home",
        "player": "Diego Forlán",
        "type": "goal",
        "description": "Forlán equalizes with a stunning free-kick."
      },
      {
        "minute": "32'",
        "side": "away",
        "player": "Miroslav Klose",
        "type": "goal",
        "description": "Klose restores Germany's lead, tapping in after a cross."
      },
      {
        "minute": "56'",
        "side": "away",
        "player": "Thomas Müller",
        "type": "goal",
        "description": "Müller scores his second to make it 3-1."
      },
      {
        "minute": "88'",
        "side": "home",
        "player": "Luis Suárez",
        "type": "goal",
        "description": "Suárez pulls one back late in the match."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 11,
        "away": 15,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 7,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Possession",
        "home": 48,
        "away": 52,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Passes",
        "home": 392,
        "away": 410,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Pass Accuracy",
        "home": "84%",
        "away": "86%",
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Corners",
        "home": 3,
        "away": 5,
        "homeWidth": 37,
        "awayWidth": 63
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "1.25",
        "away": "2.80",
        "homeWidth": 42,
        "awayWidth": 58
      }
    ],
    "metaDescription": "Germany defeated Uruguay 3-2 in a thrilling World Cup 2010 Third Place match, highlighting outstanding performances by Müller and Klose.",
    "tacticalAnalysis": "In this Third Place match, Uruguay opted for a 4-4-2 formation, needing a solid defensive structure while exploiting counter-attacks, primarily through the wings with Cavani and Rodríguez. Forlán played a critical role in midfield, orchestrating plays and taking on set-pieces. Conversely, Germany's 4-3-3 formation focused on utilizing width with wingers Müller and Özil, providing necessary support for Klose. They pressed high, often recovering possession quickly, enhancing their attacking game. The first half saw multiple goal-scoring opportunities, showcasing Germany's fluid attacking play, while Forlán's goal came against the run of play, demonstrating Uruguay's capability on the break. Both teams displayed tactical discipline; however, Germany's ability to transition quickly from defence to attack ultimately proved decisive.",
    "keyMoments": [
      "19' - Müller opens the scoring.",
      "28' - Forlán equalizes with an impressive free-kick.",
      "32' - Klose pushes Germany ahead again.",
      "56' - Müller doubles his tally, making it 3-1.",
      "88' - Suárez scores a late goal, narrowing the deficit."
    ],
    "historicalSignificance": "This match showcased the competitive spirit of both teams, with Germany solidifying their reputation as one of the tournament's best attacking sides. Müller clinched the Golden Boot, marking a significant achievement in his young career. Uruguay, despite their loss, displayed resilience and talent, paving the way for future success.",
    "topPerformers": [
      {
        "name": "Thomas Müller",
        "side": "away",
        "position": "RW",
        "rating": 9.2,
        "note": "Scored two crucial goals and was vital in attacking transition."
      },
      {
        "name": "Diego Forlán",
        "side": "home",
        "position": "CAM",
        "rating": 8.5,
        "note": "His leadership and stunning free-kick kept Uruguay competitive."
      },
      {
        "name": "Miroslav Klose",
        "side": "away",
        "position": "ST",
        "rating": 8.8,
        "note": "Demonstrated clinical finishing and important hold-up play."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Sweden — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-sweden-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 24, 2006",
    "venue": "Allianz Arena",
    "city": "Munich, Germany",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-4-2",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Lehmann",
        "Lahm",
        "Metzelder",
        "Mertesacker",
        "Jansen",
        "Frings",
        "Ballack",
        "Schweinsteiger",
        "Podolski",
        "Klose",
        "Odonkor"
      ],
      "score": 2
    },
    "away": {
      "name": "Sweden",
      "flag": "🇸🇪",
      "formation": "4-4-2",
      "color": "#006AA7",
      "colorDim": "rgba(0,106,167,0.18)",
      "players": [
        "Isaksson",
        "Melberg",
        "Lucic",
        "Johansson",
        "Lustig",
        "Kallstrom",
        "Hargreaves",
        "Andersson",
        "Larsson",
        "Ibrahimovic",
        "Fredriksson"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.5,
      "away": 0.7
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "4'",
        "side": "home",
        "player": "Podolski",
        "type": "goal",
        "description": "Podolski scores with a well-placed shot from outside the box."
      },
      {
        "minute": "12'",
        "side": "home",
        "player": "Klose",
        "type": "goal",
        "description": "Klose heads home from a cross delivered by Schweinsteiger."
      },
      {
        "minute": "70'",
        "side": "away",
        "player": "Lustig",
        "type": "yellow",
        "description": "Lustig booked for a foul on Podolski."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 8,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Shots on Target",
        "home": 7,
        "away": 2,
        "homeWidth": 77,
        "awayWidth": 23
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 460,
        "away": 320,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "75%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 12,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "xG",
        "home": "2.52",
        "away": "0.75",
        "homeWidth": 77,
        "awayWidth": 23
      }
    ],
    "metaDescription": "Germany secured a dominant 2-0 victory over Sweden in the Round of 16, showcasing their attacking prowess at the 2006 World Cup.",
    "tacticalAnalysis": "Germany deployed a 4-4-2 formation that leaned heavily on the attacking prowess of Podolski and Klose. The pressing intensity was key, as they effectively stifled Sweden's build-up play, particularly exploiting the width provided by Lahm and Jansen on the flanks. The midfield pairing of Frings and Ballack ensured stability, while Schweinsteiger’s deliveries into the box were pivotal to their goal-scoring chances. Sweden, playing in a traditional 4-4-2, struggled to match Germany's tempo and cohesion, leading to breakdowns in their defensive structure. The first goal came from a swift counter-attack that saw Podolski find space, and the second was the result of a well-rehearsed set-piece routine, showcasing Germany's tactical preparation and execution.",
    "keyMoments": [
      "4' - Podolski opens the scoring with a spectacular long-range effort.",
      "12' - Klose doubles the lead with a precise header.",
      "70' - Lustig booked for a rough challenge on Podolski."
    ],
    "historicalSignificance": "This match marked Germany's continuation of a strong tournament run that eventually led them to the semifinals. The performance against Sweden exemplified their attacking philosophy under coach Jürgen Klinsmann, setting a tone for future international success.",
    "topPerformers": [
      {
        "name": "Lukas Podolski",
        "side": "home",
        "position": "LW",
        "rating": 9,
        "note": "Scored both goals and was a constant threat down the left wing."
      },
      {
        "name": "Mikael Isaksson",
        "side": "away",
        "position": "GK",
        "rating": 7,
        "note": "Made several crucial saves to keep Sweden in the game."
      },
      {
        "name": "Miroslav Klose",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "His intelligent movement created openings and he scored a vital goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Argentina vs Mexico — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "argentina-vs-mexico-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 24, 2006",
    "venue": "Zentralstadion",
    "city": "Leipzig, Germany",
    "home": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Sergio Romero",
        "Gabriel Heinze",
        "Roberto Ayala",
        "Juan Sebastián Verón",
        "Javier Mascherano",
        "Lionel Messi",
        "José Sosa",
        "Maxi Rodríguez",
        "Hernán Crespo",
        "Juan Pablo Ángel",
        "Carlos Tévez"
      ],
      "score": 2
    },
    "away": {
      "name": "Mexico",
      "flag": "🇲🇽",
      "formation": "5-3-2",
      "color": "#006847",
      "colorDim": "rgba(0,104,71,0.18)",
      "players": [
        "Oswaldo Sánchez",
        "Mário Mendez",
        "Rafael Márquez",
        "Carlos Salcido",
        "Pavel Pardo",
        "Gerardo Torrado",
        "Andrés Guardado",
        "Francisco Palencia",
        "Zinha",
        "Jared Borgetti",
        "Omar Bravo"
      ],
      "score": 1
    },
    "status": "AET",
    "xG": {
      "home": 2.54,
      "away": 0.89
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "6'",
        "side": "home",
        "player": "Hernán Crespo",
        "type": "goal",
        "description": "Crespo opened the scoring with a close-range finish."
      },
      {
        "minute": "10'",
        "side": "away",
        "player": "Rafael Márquez",
        "type": "goal",
        "description": "Márquez equalised with a long-range shot."
      },
      {
        "minute": "98'",
        "side": "home",
        "player": "Maxi Rodríguez",
        "type": "goal",
        "description": "Rodríguez scored with a stunning volley from 35 yards."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 16,
        "away": 9,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Shots on Target",
        "home": 7,
        "away": 4,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 450,
        "away": 295,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "79%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "2.54",
        "away": "0.89",
        "homeWidth": 74,
        "awayWidth": 26
      }
    ],
    "metaDescription": "Argentina defeats Mexico 2-1 in an epic Round of 16 match, featuring Rodríguez's stunning extra-time goal.",
    "tacticalAnalysis": "In this closely contested Round of 16 match, Argentina operated in a 4-3-3 formation, utilizing Messi and Tévez on the wings to stretch the Mexican defense, while Crespo’s positioning served as the focal point up front. Mexico countered with a 5-3-2 structure, focusing on defensive solidity and employing wing-backs Salcido and Mendez to support both defense and counterattacks. The tactical battle saw Argentina dominating possession, creating numerous chances through quick passing and intricate movement, while Mexico relied on swift transitions. The first half opened with Crespo's goal, a result of Argentine pressing. However, Márquez’s equalizer just minutes later highlighted Mexico's resilience. As the match progressed into extra time, Maxi Rodríguez's exceptional volley underscored Argentina's attacking prowess, making it one of the most memorable moments of the tournament.",
    "keyMoments": [
      "6' - Crespo opens the scoring for Argentina, igniting early excitement.",
      "10' - Márquez equalizes, showcasing Mexico's fighting spirit.",
      "98' - Maxi Rodríguez delivers a breathtaking volley to win the match."
    ],
    "historicalSignificance": "This match is remembered for its thrilling pace and the quality of goals, particularly Rodríguez’s strike, which is often cited as one of the best in World Cup history. Argentina's victory propelled them into the quarter-finals, marking a key moment in their World Cup campaign.",
    "topPerformers": [
      {
        "name": "Maxi Rodríguez",
        "side": "home",
        "position": "LW",
        "rating": 9.2,
        "note": "His match-winning goal was a stunning display of skill and technique."
      },
      {
        "name": "Hernán Crespo",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Crespo's movement and opening goal set the tone for Argentina."
      },
      {
        "name": "Rafael Márquez",
        "side": "away",
        "position": "CB",
        "rating": 8,
        "note": "Márquez's equalizer was crucial, demonstrating leadership in defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Ecuador — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-ecuador-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 25, 2006",
    "venue": "Gottlieb-Daimler-Stadion",
    "city": "Stuttgart, Germany",
    "home": {
      "name": "England",
      "flag": "🏴",
      "formation": "4-4-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Paul Robinson",
        "Gary Neville",
        "John Terry",
        "Rio Ferdinand",
        "Ashley Cole",
        "David Beckham",
        "Frank Lampard",
        "Steven Gerrard",
        "Joe Cole",
        "Peter Crouch",
        "Michael Owen"
      ],
      "score": 1
    },
    "away": {
      "name": "Ecuador",
      "flag": "🏳",
      "formation": "4-4-2",
      "color": "#FFD100",
      "colorDim": "rgba(255,209,0,0.18)",
      "players": [
        "Marcos Espinoza",
        "Iván Hurtado",
        "Franz diitel",
        "Néstor Araujo",
        "Juan Paredes",
        "Edison Mendez",
        "Cristian Benitez",
        "Luis Antonio Valencia",
        "Elkin Soto",
        "Marvin González",
        "Carlos Tenorio"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.45,
      "away": 0.5
    },
    "possession": {
      "home": 54,
      "away": 46
    },
    "timeline": [
      {
        "minute": "60'",
        "side": "home",
        "player": "David Beckham",
        "type": "goal",
        "description": "Beckham scored with a curling free-kick from just outside the box."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 4,
        "homeWidth": 78,
        "awayWidth": 22
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 2,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 54,
        "away": 46,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Passes",
        "home": 400,
        "away": 240,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "74%",
        "homeWidth": 85,
        "awayWidth": 74
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 2,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Fouls",
        "home": 9,
        "away": 11,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "xG",
        "home": "1.45",
        "away": "0.50",
        "homeWidth": 65,
        "awayWidth": 35
      }
    ],
    "metaDescription": "England edged past Ecuador with a stunning free-kick goal from David Beckham in the Round of 16 of the 2006 FIFA World Cup.",
    "tacticalAnalysis": "England deployed a 4-4-2 formation, utilizing width through the flanks with Joe Cole and David Beckham providing creativity and support for the forwards. Beckham's role as captain was crucial, as he took responsibility for set pieces and orchestrated play from the right. Ecuador, matching England's formation, aimed to contain the midfield battle and relied on counter-attacks. Their defensive strategy, led by Hurtado and Araujo, aimed to neutralize the aerial threat posed by Crouch. Beckham's decisive free-kick demonstrated England's ability to create and capitalize on set pieces, an area Ecuador struggled to manage effectively throughout the match.",
    "keyMoments": [
      "60' - Goal: David Beckham scores with a curling free-kick, sending England ahead.",
      "30' - Yellow Card: Cristian Benitez receives a yellow card for a late challenge.",
      "72' - Substitution: Ecuador substitutes Carlos Tenorio for Agustín Delgado in an attempt to find an equalizer.",
      "85' - Yellow Card: Frank Lampard receives a yellow card for a foul on Edison Mendez."
    ],
    "historicalSignificance": "This match marked a pivotal moment for England, highlighting David Beckham's leadership and skill. The win propelled them into the quarter-finals, reinforcing their status as a competitive force in the World Cup, despite ultimately falling to Portugal in a penalty shootout.",
    "topPerformers": [
      {
        "name": "David Beckham",
        "side": "home",
        "position": "RM",
        "rating": 9.2,
        "note": "His free-kick was the match’s only goal and he led by example."
      },
      {
        "name": "Gary Neville",
        "side": "home",
        "position": "RB",
        "rating": 8.5,
        "note": "Strong defensively and contributed well to England's attacks."
      },
      {
        "name": "Néstor Araujo",
        "side": "away",
        "position": "CB",
        "rating": 8,
        "note": "Key in organizing Ecuador's defense against England's attacks."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Portugal vs Netherlands — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "portugal-vs-netherlands-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 25, 2006",
    "venue": "Commerzbank-Arena",
    "city": "Frankfurt, Germany",
    "home": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Ricardo",
        "Miguel",
        "Carvalho",
        "Meira",
        "Ferreira",
        "Maniche",
        "Deco",
        "Costinha",
        "Figo",
        "Luis Boa Morte",
        "Pauleta"
      ],
      "score": 1
    },
    "away": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Van der Sar",
        "Kuyt",
        "Boulahrouz",
        "Ooijer",
        "Gio",
        "Cocu",
        "Sneijder",
        "Van Bommel",
        "Robben",
        "Van Nistelrooy",
        "Huntelaar"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.5,
      "away": 0.25
    },
    "possession": {
      "home": 56,
      "away": 44
    },
    "timeline": [
      {
        "minute": "23'",
        "side": "home",
        "player": "Maniche",
        "type": "goal",
        "description": "Maniche scores with a strike from outside the box."
      },
      {
        "minute": "37'",
        "side": "neutral",
        "player": "Ivanov",
        "type": "red",
        "description": "First red card shown to Dutch player Boulahrouz."
      },
      {
        "minute": "44'",
        "side": "neutral",
        "player": "Ivanov",
        "type": "yellow",
        "description": "Yellow card issued to Figo."
      },
      {
        "minute": "64'",
        "side": "neutral",
        "player": "Ivanov",
        "type": "red",
        "description": "Second red card for Dutch player Van Nistelrooy."
      },
      {
        "minute": "86'",
        "side": "neutral",
        "player": "Ivanov",
        "type": "red",
        "description": "Third red card for Portuguese player Costinha."
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Ivanov",
        "type": "red",
        "description": "Fourth red card for Dutch player Robben."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 13,
        "away": 6,
        "homeWidth": 68,
        "awayWidth": 32
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 2,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 56,
        "away": 44,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Passes",
        "home": 400,
        "away": 320,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Corners",
        "home": 3,
        "away": 4,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 20,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "1.50",
        "away": "0.25",
        "homeWidth": 86,
        "awayWidth": 14
      }
    ],
    "metaDescription": "Portugal defeats the Netherlands 1-0 in a chaotic Round of 16 match at the 2006 FIFA World Cup.",
    "tacticalAnalysis": "Portugal lined up in a 4-3-3 formation with a strong midfield presence, allowing them to control possession and dictate the pace of the game. The trio of Maniche, Deco, and Costinha provided both defensive stability and attacking support through clever interplay. The Dutch mirrored them with their own 4-3-3, relying heavily on the width provided by Robben and Kuyt. The first half showcased Portugal's solid defense and fluid ball retention, culminating in Maniche's long-range strike in the 23rd minute, which was a result of quick passing and fluid movement around the Dutch defenders. Both teams struggled to maintain discipline, resulting in a record number of cards, showcasing the tension and competitiveness of the match. The Dutch attempted to respond after going a goal down, but they found it challenging to penetrate Portugal's well-organized defense, often attempting to play through the flanks where they were met with resolute defending. Manager Felipe Scolari’s decision to place Figo in a more advanced role allowed Portugal to exploit gaps in the Dutch backline, ultimately ensuring Portugal's passage to the quarter-finals despite the chaotic nature of the match.",
    "keyMoments": [
      "Maniche's opening goal at 23' changed the game's momentum.",
      "Boulahrouz's red card at 37' opened up space for Portugal.",
      "The clash of Van Nistelrooy's red card at 64' diminished Dutch hopes.",
      "Robben's late red card at 90' capped a tumultuous encounter."
    ],
    "historicalSignificance": "This match is remembered as one of the most chaotic in World Cup history, featuring four red cards and numerous yellow cards. Portugal's victory and the match's intensity emphasized the high stakes of knockout football.",
    "topPerformers": [
      {
        "name": "Ricardo",
        "side": "home",
        "position": "GK",
        "rating": 9,
        "note": "Made crucial saves that preserved the lead for Portugal."
      },
      {
        "name": "Maniche",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Scored the winning goal and controlled the midfield effectively."
      },
      {
        "name": "Van der Sar",
        "side": "away",
        "position": "GK",
        "rating": 8,
        "note": "Made several important stops to keep the scoreline close."
      },
      {
        "name": "Robben",
        "side": "away",
        "position": "LW",
        "rating": 7.5,
        "note": "Threatened with pace and skill despite the harsh result."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Italy vs Australia — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "italy-vs-australia-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 26, 2006",
    "venue": "Fritz Walter Stadion",
    "city": "Kaiserslautern, Germany",
    "home": {
      "name": "Italy",
      "flag": "🇮🇹",
      "formation": "4-2-3-1",
      "color": "#0033A0",
      "colorDim": "rgba(0,51,160,0.18)",
      "players": [
        "Gianluigi Buffon",
        "Fabio Grosso",
        "Alessandro Nesta",
        "Fabio Cannavaro",
        "Gianluca Zambrotta",
        "Gennaro Gattuso",
        "Andrea Pirlo",
        "Francesco Totti",
        "Marco Materazzi",
        "Alberto Gilardino",
        "Luca Toni"
      ],
      "score": 1
    },
    "away": {
      "name": "Australia",
      "flag": "🇦🇺",
      "formation": "4-4-2",
      "color": "#FFD700",
      "colorDim": "rgba(255,215,0,0.18)",
      "players": [
        "Mark Schwarzer",
        "Lucas Neill",
        "Craig Moore",
        "Matthew Spiranovic",
        "Jade North",
        "Luke Wilkshire",
        "Scott Chipperfield",
        "Tim Cahill",
        "John Aloisi",
        "Jason Culina",
        "Mark Bresciano"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.27,
      "away": 0.44
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "95'",
        "side": "home",
        "player": "Francesco Totti",
        "type": "pen_goal",
        "description": "Converted a controversial penalty after being foul by Neill."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 15,
        "away": 6,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 2,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 500,
        "away": 320,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Pass Accuracy",
        "home": "83%",
        "away": "75%",
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 3,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 15,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "xG",
        "home": "1.27",
        "away": "0.44",
        "homeWidth": 71,
        "awayWidth": 29
      }
    ],
    "metaDescription": "Italy advances to the quarter-finals after a controversial penalty victory over Australia in the 2006 World Cup Round of 16.",
    "tacticalAnalysis": "Italy utilized a 4-2-3-1 formation, with Gianluigi Buffon as the last line of defense, supported by a solid back four, including Fabio Grosso who provided width and attacking support on the left flank. Gattuso and Pirlo operated as the double pivot, controlling the midfield. Totti, positioned as the attacking midfielder, was crucial for dictating the play and linking up with forwards Gilardino and Toni. Australia, in a 4-4-2 setup, relied on Cahill and Aloisi to press high and exploit any defensive lapses. However, despite their effective pressing and compactness, they were often thwarted by Italy's strategy of quick transitions and patient buildup. The pivotal moment arose in injury time when Grosso was adjudged to have been fouled leading to Totti's decisive penalty, overshadowing Australia's commendable performance throughout the match.",
    "keyMoments": [
      "95' - Controversial penalty awarded to Italy after a foul on Grosso.",
      "Francesco Totti converts the penalty to win the match for Italy.",
      "Australia's strong defensive performance was highlighted with significant interventions from Neill and Moore."
    ],
    "historicalSignificance": "This match is remembered for Italy's controversial advancement through a dubious penalty decision, demonstrating the intense pressure inherent in knockout football. Additionally, it marked Italy's continued pursuit of the World Cup title, which they ultimately achieved later that tournament.",
    "topPerformers": [
      {
        "name": "Francesco Totti",
        "side": "home",
        "position": "CAM",
        "rating": 9,
        "note": "Crucial penalty taker who decided the match."
      },
      {
        "name": "Gianluigi Buffon",
        "side": "home",
        "position": "GK",
        "rating": 8.5,
        "note": "Made several key saves throughout the game."
      },
      {
        "name": "Tim Cahill",
        "side": "away",
        "position": "CM",
        "rating": 8,
        "note": "Outstanding in midfield, creating several chances."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Ghana — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-ghana-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 27, 2006",
    "venue": "Stadium Dortmund",
    "city": "Dortmund, Germany",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Dida",
        "Cafu",
        "Lúcio",
        "Juan",
        "Roberto Carlos",
        "Edmilson",
        "Gilberto Silva",
        "Kaká",
        "Ronaldinho",
        "Adriano",
        "Ronaldo"
      ],
      "score": 3
    },
    "away": {
      "name": "Ghana",
      "flag": "🇬🇭",
      "formation": "4-2-3-1",
      "color": "#FFD700",
      "colorDim": "rgba(255,215,0,0.18)",
      "players": [
        "Richard Kingson",
        "John Paintsil",
        "Isaac Vorsah",
        "Eric Addo",
        "John Mensah",
        "Anthony Annan",
        "Michael Essien",
        "Sulley Muntari",
        "Asamoah Gyan",
        "Stephen Appiah",
        "Laryea Kingston"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.89,
      "away": 0.45
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "5'",
        "side": "home",
        "player": "Ronaldo",
        "type": "goal",
        "description": "Ronaldo opened the score with a close-range shot"
      },
      {
        "minute": "36'",
        "side": "home",
        "player": "Adriano",
        "type": "goal",
        "description": "Adriano doubled the lead with a powerful strike from outside the box"
      },
      {
        "minute": "49'",
        "side": "home",
        "player": "Ze Roberto",
        "type": "goal",
        "description": "Ze Roberto scored with a simple finish following a swift counter-attack"
      },
      {
        "minute": "65'",
        "side": "away",
        "player": "Laryea Kingston",
        "type": "yellow",
        "description": "Kingston received a yellow card for a foul on Kaká"
      },
      {
        "minute": "88'",
        "side": "away",
        "player": "John Paintsil",
        "type": "yellow",
        "description": "Paintsil booked for a late challenge on Ronaldo"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 20,
        "away": 5,
        "homeWidth": 80,
        "awayWidth": 20
      },
      {
        "label": "Shots on Target",
        "home": 10,
        "away": 2,
        "homeWidth": 83,
        "awayWidth": 17
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 520,
        "away": 300,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Pass Accuracy",
        "home": "86%",
        "away": "78%",
        "homeWidth": 65,
        "awayWidth": 35
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 2,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 12,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "xG",
        "home": "2.89",
        "away": "0.45",
        "homeWidth": 86,
        "awayWidth": 14
      }
    ],
    "metaDescription": "Brazil showcases their quality against Ghana in a historic match at the 2006 World Cup, claiming a decisive victory.",
    "tacticalAnalysis": "Brazil lined up in a 4-2-3-1 with Dida in goal, a defense marshaled by Lúcio and Juan, and wing-backs Cafu and Roberto Carlos providing width. Gilberto Silva and Edmilson held the midfield, allowing Kaká, Ronaldinho, and Adriano to exploit space in the attacking third. This formation allowed for quick transitions against Ghana, who positioned themselves in a similar 4-2-3-1 but struggled to maintain possession. The Brazilian front four was fluid, with Ronaldo's movement drawing defenders and creating gaps for the likes of Adriano. The first goal came early after a swift counter, showcasing Brazil's ability to capitalize on Ghana's defensive lapses. Ghana fought valiantly, with Essien and Muntari attempting to disrupt Brazil's rhythm, but they rarely threatened Dida's goal. The second and third goals highlighted Brazil's clinical finishing and tactical superiority, as they successfully transitioned from defense to attack in moments.",
    "keyMoments": [
      "5' - Ronaldo scores and equals Gerd Müller's World Cup goal record.",
      "36' - Adriano's powerful shot puts Brazil 2-0 up, showcasing their attacking prowess.",
      "49' - Ze Roberto's tap-in seals the match, illustrating Brazil's dominance in the second half.",
      "88' - Paintsil's late yellow illustrates Ghana's frustration as they try to contain the Brazilian attack."
    ],
    "historicalSignificance": "This match marked Brazil's continuing legacy in the World Cup, demonstrating their attacking flair even when not at their peak. Ronaldo's goal solidified his place in football history, equaling a record that had stood since 1974.",
    "topPerformers": [
      {
        "name": "Ronaldo",
        "side": "home",
        "position": "ST",
        "rating": 9,
        "note": "Scored the opening goal, showcasing his clinical finishing."
      },
      {
        "name": "Adriano",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "His presence and goal troubled the Ghanaian defense."
      },
      {
        "name": "Michael Essien",
        "side": "away",
        "position": "CM",
        "rating": 7.5,
        "note": "Tried to control the midfield and was involved in defensive duties."
      },
      {
        "name": "Dida",
        "side": "home",
        "position": "GK",
        "rating": 8,
        "note": "Made key saves to maintain a clean sheet for Brazil."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Spain vs France — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "spain-vs-france-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 27, 2006",
    "venue": "Hannover Arena",
    "city": "Hannover, Germany",
    "home": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-2-3-1",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Iker Casillas",
        "Puyol",
        "Carlos Marchena",
        "Raúl Albiol",
        "José Enrique",
        "Xabi Alonso",
        "Andrés Iniesta",
        "Cesc Fàbregas",
        "David Silva",
        "Fernando Torres",
        "David Villa"
      ],
      "score": 1
    },
    "away": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-3-3",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Fabien Barthez",
        "Franck Ribéry",
        "Eric Abidal",
        "Liliane Thuram",
        "William Gallas",
        "Patrick Vieira",
        "Lassana Diarra",
        "Zinedine Zidane",
        "Thierry Henry",
        "David Sagnol",
        "Julien Sablé"
      ],
      "score": 3
    },
    "status": "FT",
    "xG": {
      "home": 1.65,
      "away": 2.45
    },
    "possession": {
      "home": 53,
      "away": 47
    },
    "timeline": [
      {
        "minute": "57'",
        "side": "away",
        "player": "Franck Ribéry",
        "type": "goal",
        "description": "Ribéry scores the opening goal with a stunning strike."
      },
      {
        "minute": "64'",
        "side": "home",
        "player": "David Villa",
        "type": "goal",
        "description": "Villa equalizes with a precise shot into the bottom corner."
      },
      {
        "minute": "70'",
        "side": "away",
        "player": "Zinedine Zidane",
        "type": "goal",
        "description": "Zidane curls a free-kick past Casillas to restore the lead."
      },
      {
        "minute": "90'",
        "side": "away",
        "player": "Zinedine Zidane",
        "type": "goal",
        "description": "Zidane scores another free-kick, sealing the match."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 11,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 5,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Possession",
        "home": 53,
        "away": 47,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Passes",
        "home": 497,
        "away": 392,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "80%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 2,
        "homeWidth": 78,
        "awayWidth": 22
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "1.65",
        "away": "2.45",
        "homeWidth": 40,
        "awayWidth": 60
      }
    ],
    "metaDescription": "France defeats Spain 3-1 in the 2006 World Cup Round of 16, highlighted by Zidane's brilliance.",
    "tacticalAnalysis": "Spain employed a 4-2-3-1 formation focusing on possession-based play, relying on Xabi Alonso and Andrés Iniesta in midfield to create chances. France countered with a 4-3-3 formation, utilizing width through Franck Ribéry and Thierry Henry. Ribéry's pace troubled the Spanish defense, allowing him to score first. After Villa’s equalizer, Zidane's tactical intelligence shone through with his two free-kick goals, showcasing Spain's struggles against set-pieces. The match highlighted the emergence of France's tactical versatility and Spain's vulnerabilities in defense, particularly on dead-ball situations, setting the stage for Spain's evolution into a future powerhouse.",
    "keyMoments": [
      "57' - Ribéry opens the scoring with a great strike.",
      "64' - Villa equalizes with a well-placed shot.",
      "70' - Zidane scores a brilliant free-kick to regain the lead.",
      "90' - Zidane seals the win with another free-kick."
    ],
    "historicalSignificance": "This match marked a turning point for France, showcasing Zidane's leadership and talent as he led the team to the final. For Spain, it highlighted their struggles in major tournaments before their eventual success in 2010, proving to be a valuable learning experience for their golden generation.",
    "topPerformers": [
      {
        "name": "Zinedine Zidane",
        "side": "away",
        "position": "CM",
        "rating": 9.5,
        "note": "Zidane was pivotal, scoring two crucial free-kicks."
      },
      {
        "name": "David Villa",
        "side": "home",
        "position": "ST",
        "rating": 8,
        "note": "Villa's equalizing goal reflected his composure under pressure."
      },
      {
        "name": "Franck Ribéry",
        "side": "away",
        "position": "LW",
        "rating": 8.3,
        "note": "Ribéry's goal and assist showed his creativity."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Switzerland vs Ukraine — 2006 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "switzerland-vs-ukraine-2006-r16",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Round of 16",
    "date": "June 26, 2006",
    "venue": "Gottlieb-Daimler-Stadion",
    "city": "Stuttgart, Germany",
    "home": {
      "name": "Switzerland",
      "flag": "🇨🇭",
      "formation": "4-4-2",
      "color": "#D52B1E",
      "colorDim": "rgba(213,43,30,0.18)",
      "players": [
        "Jens Lehmann",
        "Luca Zuffi",
        "Philippe Senderos",
        "Gielani Ilic",
        "Reto Ziegler",
        "Glen Johnson",
        "Tranquillo Barnetta",
        "Goran Pandev",
        "Blerim Džemaili",
        "Alex Frei",
        "Marco Streller"
      ],
      "score": 0
    },
    "away": {
      "name": "Ukraine",
      "flag": "🇺🇦",
      "formation": "4-3-3",
      "color": "#005BBB",
      "colorDim": "rgba(0,91,187,0.18)",
      "players": [
        "Oleksandr Shovkovskyi",
        "Vladimir Yezersky",
        "Andriy Nesmachny",
        "Serhiy Fedorov",
        "Andriy Rusol",
        "Serhiy Hryshchenko",
        "Oleg Gusev",
        "Andriy Vorobey",
        "Andriy Shevchenko",
        "Serhiy Rebrov",
        "Maxim Koval"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "0-3",
    "xG": {
      "home": 1.13,
      "away": 1.27
    },
    "possession": {
      "home": 47,
      "away": 53
    },
    "timeline": [
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Jens Lehmann",
        "type": "sub",
        "description": "Lehmann replaced by substitute goalkeeper"
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Serhiy Rebrov",
        "type": "pen_miss",
        "description": "Rebrov misses the penalty"
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Andriy Shevchenko",
        "type": "pen_goal",
        "description": "Shevchenko scores the first penalty"
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Oleg Gusev",
        "type": "pen_goal",
        "description": "Gusev scores the second penalty"
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Serhiy Hryshchenko",
        "type": "pen_goal",
        "description": "Hryshchenko scores the third penalty"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 13,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 6,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Possession",
        "home": 47,
        "away": 53,
        "homeWidth": 47,
        "awayWidth": 53
      },
      {
        "label": "Passes",
        "home": 329,
        "away": 277,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "78%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 16,
        "homeWidth": 47,
        "awayWidth": 53
      },
      {
        "label": "xG",
        "home": "1.13",
        "away": "1.27",
        "homeWidth": 47,
        "awayWidth": 53
      }
    ],
    "metaDescription": "An unforgettable match where Switzerland faced Ukraine in the Round of 16, culminating in a dramatic penalty shootout.",
    "tacticalAnalysis": "In this Round of 16 clash, Switzerland deployed a 4-4-2 formation, relying on their strong defensive capabilities illustrated by the partnership of Senderos and Ilic at the back. Their midfield was constructed around the dynamic presence of Barnetta and Džemaili, who sought width and supported the attack through overlaps and crosses. Ukraine, on the other hand, utilized a 4-3-3 formation with Shevchenko leading the front line. Their strategy emphasized quick counter-attacks with Gusev and Vorobey providing lateral options. Despite their distinct strategies, both teams struggled to break the deadlock, ultimately leading to a tense penalty shootout where Ukraine triumphed with psychological resilience and effective execution.",
    "keyMoments": [
      "90' - Switzerland's defense holds strong but fails to score in regulation.",
      "120' - Lehmann substituted just before penalties, adding risk and drama.",
      "120' - Ukraine's Shevchenko seals the first penalty in a tense atmosphere.",
      "120' - Rebrov misses the vital second penalty for Switzerland, leading to pressure.",
      "120' - Ukraine's decisive and flawless penalty execution secures their quarter-final spot."
    ],
    "historicalSignificance": "This match remains notable as Switzerland's only World Cup game without conceding a goal, yet they were eliminated. It highlighted the unpredictable nature of knockout football and the importance of converting chances during penalty shootouts.",
    "topPerformers": [
      {
        "name": "Oleksandr Shovkovskyi",
        "side": "away",
        "position": "GK",
        "rating": 9.5,
        "note": "Outstanding saves that kept his team in the game."
      },
      {
        "name": "Philippe Senderos",
        "side": "home",
        "position": "CB",
        "rating": 8.5,
        "note": "Strong defensive display, critical in maintaining a clean sheet."
      },
      {
        "name": "Andriy Shevchenko",
        "side": "away",
        "position": "ST",
        "rating": 8.8,
        "note": "Key for his team, scoring a crucial penalty and applying pressure."
      },
      {
        "name": "Goran Pandev",
        "side": "home",
        "position": "CM",
        "rating": 8,
        "note": "Creative influence in midfield, distributing play effectively."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Argentina — 2006 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-argentina-2006-qf",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Quarter-Final",
    "date": "June 30, 2006",
    "venue": "Olympiastadion",
    "city": "Berlin, Germany",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-4-2",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Jens Lehmann",
        "Philipp Lahm",
        "Per Mertesacker",
        "Christoph Metzelder",
        "Mario Gomez",
        "Bastian Schweinsteiger",
        "Michael Ballack",
        "Toni Kroos",
        "Luca Toni",
        "Miroslav Klose",
        "Torsten Frings"
      ],
      "score": 1
    },
    "away": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-1-2",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Julián Palacio",
        "Hugo Campagnaro",
        "Roberto Ayala",
        "Juan Pablo Sorín",
        "Gabriel Heinze",
        "Javier Mascherano",
        "Esteban Cambiasso",
        "Lionel Messi",
        "Juan Román Riquelme",
        "Carlos Tévez",
        "Hernán Crespo"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "4-2",
    "xG": {
      "home": 2.65,
      "away": 1.84
    },
    "possession": {
      "home": 53,
      "away": 47
    },
    "timeline": [
      {
        "minute": "54'",
        "side": "home",
        "player": "Miroslav Klose",
        "type": "goal",
        "description": "Klose heads Germany into the lead from a corner."
      },
      {
        "minute": "71'",
        "side": "away",
        "player": "Roberto Ayala",
        "type": "goal",
        "description": "Ayala equalises with a close-range finish."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "Torsten Frings",
        "type": "yellow",
        "description": "Frings receives a yellow card for a late challenge."
      },
      {
        "minute": "120'",
        "side": "away",
        "player": "Esteban Cambiasso",
        "type": "pen_miss",
        "description": "Cambiasso misses the first penalty in the shootout."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 11,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Possession",
        "home": 53,
        "away": 47,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Passes",
        "home": 450,
        "away": 400,
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Pass Accuracy",
        "home": "84%",
        "away": "79%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "2.65",
        "away": "1.84",
        "homeWidth": 59,
        "awayWidth": 41
      }
    ],
    "metaDescription": "Germany vs Argentina quarter-final match at FIFA World Cup 2006 ended in a thrilling shootout, with Germany advancing after penalties.",
    "tacticalAnalysis": "In this intense Quarter-Final clash, Germany deployed a 4-4-2 formation. Miroslav Klose and Luca Toni formed a potent strike partnership, with Klose's aerial ability proving crucial for Germany's lead in the 54th minute, when he headed home from a well-delivered corner. The midfield saw Bastian Schweinsteiger and Torsten Frings work tirelessly to provide balance, while Michael Ballack was instrumental as the playmaker, orchestrating Germany's attacks. Argentina countered with a 4-3-1-2 formation, featuring Juan Román Riquelme in the hole behind forwards Hernán Crespo and Carlos Tévez. Their equaliser in the 71st minute showcased precise passing, culminating with Ayala finishing from inside the box. The match saw both teams display defensive resilience, as Lehmann’s goalkeeping was critical during the shootout. In penalties, his strategic notes on Argentine players added an intriguing layer to the psychological battle.",
    "keyMoments": [
      "54' - Klose heads Germany into the lead.",
      "71' - Ayala equalises for Argentina.",
      "120' - Cambiasso misses crucial penalty.",
      "Penalty shootout - Lehmann's saves guide Germany to victory."
    ],
    "historicalSignificance": "This match is renowned for its high tension and dramatic penalty shootout, cementing Germany's reputation as a powerhouse in knockout tournaments. It also highlighted the tactical battles between two legendary football nations.",
    "topPerformers": [
      {
        "name": "Jens Lehmann",
        "side": "home",
        "position": "GK",
        "rating": 9.3,
        "note": "Outstanding saves during penalties, contributing to Germany's victory."
      },
      {
        "name": "Miroslav Klose",
        "side": "home",
        "position": "ST",
        "rating": 8.7,
        "note": "Prolific striker, scored the opener with a powerful header."
      },
      {
        "name": "Roberto Ayala",
        "side": "away",
        "position": "CB",
        "rating": 8.2,
        "note": "Important in defense and scored the equaliser."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Italy vs Ukraine — 2006 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "italy-vs-ukraine-2006-qf",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Quarter-Final",
    "date": "June 30, 2006",
    "venue": "Hamburg Arena",
    "city": "Hamburg, Germany",
    "home": {
      "name": "Italy",
      "flag": "🇮🇹",
      "formation": "4-4-2",
      "color": "#0033A0",
      "colorDim": "rgba(0,51,160,0.18)",
      "players": [
        "Gianluigi Buffon",
        "Fabio Cannavaro",
        "Giorgio Chiellini",
        "Marco Materazzi",
        "Gianluca Zambrotta",
        "Gennaro Gattuso",
        "Andrea Pirlo",
        "Daniele De Rossi",
        "Francesco Totti",
        "Marco Boriello",
        "Luca Toni"
      ],
      "score": 3
    },
    "away": {
      "name": "Ukraine",
      "flag": "🇺🇦",
      "formation": "4-3-3",
      "color": "#005BBB",
      "colorDim": "rgba(0,91,187,0.18)",
      "players": [
        "Alexander Shovkovskiy",
        "Viktor Onyshchenko",
        "Vitali Mandzyuk",
        "Serhiy Fyodorov",
        "Oleksandr Kucher",
        "Yevhen Levchenko",
        "Andriy Husin",
        "Serhiy Nazarenko",
        "Andriy Shevchenko",
        "Maxim Kalinichenko",
        "Viktor Leonenko"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.7,
      "away": 0.5
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "6'",
        "side": "home",
        "player": "Zambrotta",
        "type": "goal",
        "description": "Zambrotta opens the scoring with a powerful strike from outside the box."
      },
      {
        "minute": "20'",
        "side": "home",
        "player": "Toni",
        "type": "goal",
        "description": "Toni doubles Italy's lead after a well-placed cross."
      },
      {
        "minute": "28'",
        "side": "home",
        "player": "Toni",
        "type": "goal",
        "description": "Toni scores his second with a neat finish after a defensive error."
      },
      {
        "minute": "60'",
        "side": "away",
        "player": "Shevchenko",
        "type": "yellow",
        "description": "Shevchenko receives a yellow card for dissent."
      },
      {
        "minute": "75'",
        "side": "home",
        "player": "Zambrotta",
        "type": "sub",
        "description": "Zambrotta subbed off for Gianluca Buffon."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 16,
        "away": 5,
        "homeWidth": 76,
        "awayWidth": 24
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 1,
        "homeWidth": 90,
        "awayWidth": 10
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 450,
        "away": 330,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "76%",
        "homeWidth": 85,
        "awayWidth": 76
      },
      {
        "label": "Corners",
        "home": 8,
        "away": 3,
        "homeWidth": 73,
        "awayWidth": 27
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 12,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "xG",
        "home": "2.70",
        "away": "0.50",
        "homeWidth": 2.7,
        "awayWidth": 0.5
      }
    ],
    "metaDescription": "Italy dominates Ukraine to reach the semi-finals in the 2006 World Cup, displaying tactical superiority and clinical finishing.",
    "tacticalAnalysis": "Italy lined up in a 4-4-2 formation, utilizing a strong defensive core led by Cannavaro and Materazzi. Zambrotta's attacking prowess from the left allowed for width, complementing the midfield presence of Pirlo who orchestrated play effectively. Ukraine, in a 4-3-3 formation, struggled to break down Italy's disciplined defense, with Shevchenko isolated and unable to create meaningful chances. The goals came from swift counter-attacks, with Italy taking advantage of Ukraine's defensive lapses. Manager Marcello Lippi's tactical adjustments, including tactical pressing, proved vital as Italy stifled Ukraine's creativity and maintained possession.",
    "keyMoments": [
      "6' - Zambrotta's stunning opener sets the tone for the match.",
      "20' - Toni's header doubles the lead, putting Ukraine under pressure.",
      "28' - Toni's second goal cements Italy's control over the match.",
      "60' - Shevchenko's yellow card illustrates Ukraine's frustration.",
      "75' - Zambrotta's substitution marks a strategic defensive shift for Italy."
    ],
    "historicalSignificance": "This match solidified Italy's place as a dominant force in the tournament, showcasing their tactical discipline and defensive prowess. The victory propelled Italy toward their fourth World Cup title, underscoring the effectiveness of their game plan and player execution.",
    "topPerformers": [
      {
        "name": "Gianluigi Buffon",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Key saves and leadership in goal were integral to Italy's defensive success."
      },
      {
        "name": "Fabio Cannavaro",
        "side": "home",
        "position": "CB",
        "rating": 9,
        "note": "Outstanding defensive performance, neutralizing Ukraine's attacking threats."
      },
      {
        "name": "Luca Toni",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Clinical finishing with two crucial goals, leading the attack confidently."
      },
      {
        "name": "Andriy Shevchenko",
        "side": "away",
        "position": "ST",
        "rating": 7,
        "note": "Despite being contained, he remained a focal point for Ukraine's attacking efforts."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Portugal — 2006 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-portugal-2006-qf",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Quarter-Final",
    "date": "July 1, 2006",
    "venue": "Arena AufSchalke",
    "city": "Gelsenkirchen, Germany",
    "home": {
      "name": "England",
      "flag": "🏴‍☠️",
      "formation": "4-4-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Paul Robinson",
        "Gary Neville",
        "John Terry",
        "Rio Ferdinand",
        "Ashley Cole",
        "David Beckham",
        "Frank Lampard",
        "Steven Gerrard",
        "Joe Cole",
        "Michael Owen",
        "Wayne Rooney"
      ],
      "score": 0
    },
    "away": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Ricardo",
        "Miguel",
        "Meira",
        "Carvalho",
        "César",
        "Costinha",
        "Maniche",
        "Deco",
        "Cristiano Ronaldo",
        "Nuno Gomes",
        "Simao"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "1-3",
    "xG": {
      "home": 1.53,
      "away": 1.31
    },
    "possession": {
      "home": 55,
      "away": 45
    },
    "timeline": [
      {
        "minute": "0'",
        "side": "neutral",
        "player": "Referee",
        "type": "start",
        "description": "Match began."
      },
      {
        "minute": "62'",
        "side": "home",
        "player": "Wayne Rooney",
        "type": "red",
        "description": "Sent off for stamping on Carvalho."
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Referee",
        "type": "end",
        "description": "End of regular time."
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Referee",
        "type": "end",
        "description": "End of extra time."
      },
      {
        "minute": "P1'",
        "side": "home",
        "player": "Frank Lampard",
        "type": "pen_miss",
        "description": "Penalty saved by Ricardo."
      },
      {
        "minute": "P2'",
        "side": "away",
        "player": "Simao",
        "type": "pen_goal",
        "description": "Penalty scored."
      },
      {
        "minute": "P3'",
        "side": "home",
        "player": "Steven Gerrard",
        "type": "pen_miss",
        "description": "Penalty saved by Ricardo."
      },
      {
        "minute": "P4'",
        "side": "away",
        "player": "Nuno Gomes",
        "type": "pen_goal",
        "description": "Penalty scored."
      },
      {
        "minute": "P5'",
        "side": "home",
        "player": "Jamie Carragher",
        "type": "pen_miss",
        "description": "Penalty saved by Ricardo."
      },
      {
        "minute": "P6'",
        "side": "away",
        "player": "Cristiano Ronaldo",
        "type": "pen_goal",
        "description": "Penalty scored."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 9,
        "away": 7,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 4,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Possession",
        "home": 55,
        "away": 45,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Passes",
        "home": 392,
        "away": 324,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Pass Accuracy",
        "home": "84%",
        "away": "78%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 5,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "xG",
        "home": "1.53",
        "away": "1.31",
        "homeWidth": 55,
        "awayWidth": 45
      }
    ],
    "metaDescription": "England faced Portugal in a dramatic quarter-final match at the 2006 World Cup, ending in penalties after a scoreless draw.",
    "tacticalAnalysis": "In this quarter-final, England set up in a traditional 4-4-2 formation with a focus on physicality and wing play, relying heavily on David Beckham's crossing ability from the right flank and Joe Cole's creativity on the left. England pressed effectively in the first half, forcing Portugal into several errors but struggled to convert their chances. Portugal countered with a 4-3-3, emphasizing possession and fluid movement, with Cristiano Ronaldo and Simao stretching the play. Despite England's dominance in midfield led by Gerrard and Lampard, they failed to capitalize on their opportunities. Rooney's red card shifted the dynamics, with Portugal gaining more control but also failing to score in regular and extra time. The penalty shootout showcased the psychological pressure on England as key players missed their penalties.",
    "keyMoments": [
      "62': Rooney sent off, changing the match dynamics.",
      "P1: Lampard's penalty miss proved critical in England's defeat.",
      "P5: Carragher's miss sealed England's fate in the shootout.",
      "90': Full-time saw no goals, leading to penalties.",
      "120': Extra time concluded with no scoring."
    ],
    "historicalSignificance": "This match exemplified England's ongoing struggles in knockout stages of major tournaments, particularly in penalties. It highlighted the psychological burden of past failures and the impact of individual moments, like Rooney's red card, on team fortunes. Additionally, it marked a watershed moment for Ronaldo, whose performance split opinions but demonstrated his growing influence on the international stage.",
    "topPerformers": [
      {
        "name": "Ricardo",
        "side": "away",
        "position": "GK",
        "rating": 9.5,
        "note": "Outstanding performance saving three penalties."
      },
      {
        "name": "Wayne Rooney",
        "side": "home",
        "position": "ST",
        "rating": 7,
        "note": "Influential until sent off."
      },
      {
        "name": "Frank Lampard",
        "side": "home",
        "position": "CM",
        "rating": 6,
        "note": "Missed critical penalty."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Brazil — 2006 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-brazil-2006-qf",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Quarter-Final",
    "date": "July 1, 2006",
    "venue": "Frankfurt Arena",
    "city": "Frankfurt, Germany",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-2-3-1",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Fabien Barthez",
        "Lilian Thuram",
        "Eric Abidal",
        "William Gallas",
        "Gael Clichy",
        "Patrick Vieira",
        "Claude Makélélé",
        "Franck Ribéry",
        "Zinedine Zidane",
        "Thierry Henry",
        "David Sagnol"
      ],
      "score": 1
    },
    "away": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-3-3",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Dida",
        "Cafu",
        "Lucio",
        "Juan",
        "Roberto Carlos",
        "Emerson",
        "Juninho Pernambucano",
        "Kaká",
        "Ronaldo",
        "Ronaldinho",
        "Adriano"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.67,
      "away": 0.45
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "57'",
        "side": "home",
        "player": "Thierry Henry",
        "type": "goal",
        "description": "Henry scores with a deft touch after a brilliant pass from Zidane."
      },
      {
        "minute": "70'",
        "side": "home",
        "player": "Zinedine Zidane",
        "type": "yellow",
        "description": "Zidane receives a yellow card for a late challenge."
      },
      {
        "minute": "83'",
        "side": "away",
        "player": "Kaká",
        "type": "yellow",
        "description": "Kaká booked for a foul on Makélélé."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 19,
        "away": 10,
        "homeWidth": 65,
        "awayWidth": 35
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 1,
        "homeWidth": 88,
        "awayWidth": 12
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 399,
        "away": 273,
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 85,
        "awayWidth": 78
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 2,
        "homeWidth": 78,
        "awayWidth": 22
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 20,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "1.67",
        "away": "0.45",
        "homeWidth": 78,
        "awayWidth": 22
      }
    ],
    "metaDescription": "In a historic quarter-final match of the 2006 FIFA World Cup, France defeated Brazil 1-0 in a stunning upset, showcasing Zidane's brilliance.",
    "tacticalAnalysis": "France set up in a 4-2-3-1 formation, utilizing Zinedine Zidane in a central role where he orchestrated play, controlling the tempo and creating spaces for attackers like Thierry Henry and Franck Ribéry. The combination of Zidane’s vision and Henry's pace proved lethal. Brazil, in their traditional 4-3-3, struggled to find rhythm, often relying on individual flair rather than cohesive team play. Ronaldo was largely ineffective, while Ronaldinho was shackled by the French defense. The tactical battle came to a head in the second half when Zidane's pass unlocked the Brazilian defense allowing Henry to strike. Brazil’s failure to adapt and France’s resolute defensive structure sealed Brazil's fate in what many consider one of the greatest upsets in World Cup history.",
    "keyMoments": [
      "57' - Thierry Henry scores the only goal, assisted by Zidane.",
      "70' - Zidane receives a yellow card after a foul.",
      "83' - Kaká booked for a foul on Makélélé."
    ],
    "historicalSignificance": "This match is remembered as a major upset, with France eliminating the reigning champions Brazil. It showcased Zinedine Zidane's leadership and marked a turning point in the tournament, leading to France's eventual appearance in the final.",
    "topPerformers": [
      {
        "name": "Zinedine Zidane",
        "side": "home",
        "position": "CAM",
        "rating": 9.5,
        "note": "Zidane's vision and creativity were instrumental in France's midfield dominance."
      },
      {
        "name": "Thierry Henry",
        "side": "home",
        "position": "ST",
        "rating": 9.2,
        "note": "Henry's movement and finishing made the difference for France."
      },
      {
        "name": "Dida",
        "side": "away",
        "position": "GK",
        "rating": 8,
        "note": "Dida made several critical saves to keep Brazil in the match."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Portugal vs France — 2006 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "portugal-vs-france-2006-sf",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Semi-Final",
    "date": "July 5, 2006",
    "venue": "Allianz Arena",
    "city": "Munich, Germany",
    "home": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-4-2",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        "Ricardo",
        "Miguel",
        "Carvalho",
        "Meira",
        "Rui Jorge",
        "Costinha",
        "Maniche",
        "Deco",
        "Figo",
        "Ronaldo",
        "Nuno Gomes"
      ],
      "score": 0
    },
    "away": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-2-3-1",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Barthez",
        "Sagnol",
        "Gallas",
        "Thuram",
        "Abidal",
        "Makelele",
        "Viera",
        "Ribery",
        "Zidane",
        "Henri",
        "Sagnol"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 1.24,
      "away": 1.78
    },
    "possession": {
      "home": 57,
      "away": 43
    },
    "timeline": [
      {
        "minute": "33'",
        "side": "away",
        "player": "Zidane",
        "type": "pen_goal",
        "description": "Zidane converted a penalty after being fouled by Meireles."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 9,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Possession",
        "home": 57,
        "away": 43,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Passes",
        "home": 420,
        "away": 320,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Pass Accuracy",
        "home": "87%",
        "away": "80%",
        "homeWidth": 66,
        "awayWidth": 34
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 3,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "1.24",
        "away": "1.78",
        "homeWidth": 41,
        "awayWidth": 59
      }
    ],
    "metaDescription": "Portugal faced France in a dramatic World Cup 2006 semi-final at Allianz Arena, where Zidane's penalty secured France's spot in the final.",
    "tacticalAnalysis": "Portugal lined up in a 4-4-2 formation, with Figo and Ronaldo on the wings providing pace and creativity. The pairing of Costinha and Maniche held the midfield, looking to disrupt France’s flow. France, employing a 4-2-3-1, relied on Zidane orchestrating plays, supported by Viera and Makelele in midfield. This allowed Ribery to exploit the flanks with dynamic runs. The pivotal moment came when Meireles fouled Zidane in the box, leading to the decisive penalty. France's defense, anchored by Gallas and Thuram, effectively countered Portugal’s attacking threats.",
    "keyMoments": [
      "33' - Zidane scores from the penalty spot, giving France the lead.",
      "60' - Portugal's Ronaldo attempts a free kick, narrowly missing the target.",
      "75' - Meira's header hits the crossbar, almost equalizing for Portugal.",
      "85' - A late push by Portugal, but France's defense holds firm."
    ],
    "historicalSignificance": "This match marked a critical point in football history as it showcased the tactical battle between two strong teams. Zidane's performance was pivotal, leading France to the final, which they went on to win, marking one of France's finest moments in World Cup history.",
    "topPerformers": [
      {
        "name": "Zinedine Zidane",
        "side": "away",
        "position": "CAM",
        "rating": 9.5,
        "note": "Controlled the midfield and scored the pivotal penalty."
      },
      {
        "name": "Fabien Barthez",
        "side": "away",
        "position": "GK",
        "rating": 8.8,
        "note": "Made crucial saves to deny Portugal."
      },
      {
        "name": "Cristiano Ronaldo",
        "side": "home",
        "position": "LW",
        "rating": 7.5,
        "note": "Provided attacking threat but was kept quiet by the French defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Portugal — 2006 Third Place
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-portugal-2006-3rd",
    "tournament": "FIFA World Cup 2006",
    "year": 2006,
    "stage": "Third Place",
    "date": "July 8, 2006",
    "venue": "Stuttgart Arena",
    "city": "Stuttgart, Germany",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "4-2-3-1",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        " Jens Lehmann",
        " Roberto Huth",
        " Per Mertesacker",
        " Christoph Metzelder",
        " Philipp Lahm",
        " Michael Ballack",
        " Torsten Frings",
        " Bastian Schweinsteiger",
        " Lukas Podolski",
        " Miroslav Klose",
        " Oliver Neuville"
      ],
      "score": 3
    },
    "away": {
      "name": "Portugal",
      "flag": "🇵🇹",
      "formation": "4-3-3",
      "color": "#006600",
      "colorDim": "rgba(0,102,0,0.18)",
      "players": [
        " Ricardo Carvalho",
        " Paulo Ferreira",
        " Pepe",
        " Fernando Meira",
        " Cristiano Ronaldo",
        " Maniche",
        " Deco",
        " Tiago",
        " Nuno Gomes",
        " Luis Figo",
        " Helder Postiga"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.8,
      "away": 0.5
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "56'",
        "side": "home",
        "player": "Lukas Podolski",
        "type": "goal",
        "description": "Podolski scored with a powerful shot from outside the box."
      },
      {
        "minute": "61'",
        "side": "home",
        "player": "Lukas Podolski",
        "type": "goal",
        "description": "Podolski doubled the lead after a close-range finish."
      },
      {
        "minute": "79'",
        "side": "home",
        "player": "Bastian Schweinsteiger",
        "type": "goal",
        "description": "Schweinsteiger added a third with a low drive."
      },
      {
        "minute": "87'",
        "side": "away",
        "player": "Nuno Gomes",
        "type": "goal",
        "description": "Nuno Gomes scored Portugal's consolation goal."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 16,
        "away": 7,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Shots on Target",
        "home": 9,
        "away": 3,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 550,
        "away": 400,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 85,
        "awayWidth": 78
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 3,
        "homeWidth": 70,
        "awayWidth": 30
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "2.80",
        "away": "0.50",
        "homeWidth": 80,
        "awayWidth": 20
      }
    ],
    "metaDescription": "Germany secured third place in the 2006 World Cup with a 3-1 victory over Portugal, showcasing their offensive prowess and home advantage.",
    "tacticalAnalysis": "Germany utilized a 4-2-3-1 formation, effectively using the width provided by their wing players Podolski and Schweinsteiger. Ballack and Frings anchored the midfield, allowing attacking players to exploit gaps in Portugal's defense. Portugal's 4-3-3, while aggressive, found it challenging to contain Germany's pace and movement off the ball. Germany's pressing forced Portugal into errors, creating chances through swift counter-attacks. The goals illustrated Germany's clinical finishing, with Podolski's two strikes originating from quick transitions, and Schweinsteiger’s third goal stemming from a well-executed team play highlighting their attacking rhythm and chemistry. Manager Jürgen Klinsmann's tactical choices emphasized attacking football, ensuring Germany left the tournament on a high note.",
    "keyMoments": [
      "56' - Podolski opens the scoring with a long-range strike.",
      "61' - Podolski scores again to double the lead.",
      "79' - Schweinsteiger's low shot makes it 3-0.",
      "87' - Nuno Gomes pulls one back for Portugal."
    ],
    "historicalSignificance": "This match marked Germany's successful World Cup campaign, finishing third on home soil. The match reinforced Germany's reputation for strong performances in international tournaments and showcased the rising talents of players like Podolski and Schweinsteiger, setting the tone for future success in football.",
    "topPerformers": [
      {
        "name": "Lukas Podolski",
        "side": "home",
        "position": "LW",
        "rating": 9.2,
        "note": "Podolski's double gave Germany a commanding lead and highlighted his finishing skills."
      },
      {
        "name": "Bastian Schweinsteiger",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Schweinsteiger's contribution in terms of assists and control in midfield was crucial to the team's victory."
      },
      {
        "name": "Nuno Gomes",
        "side": "away",
        "position": "ST",
        "rating": 7.5,
        "note": "Gomes' goal showed resilience and skill, even in defeat."
      },
      {
        "name": "Jens Lehmann",
        "side": "home",
        "position": "GK",
        "rating": 8,
        "note": "Lehmann's saves were key in maintaining Germany's lead and securing the win."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // South Korea vs Italy — 2002 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "south-korea-vs-italy-2002-r16",
    "tournament": "FIFA World Cup 2002",
    "year": 2002,
    "stage": "Round of 16",
    "date": "June 18, 2002",
    "venue": "Daejeon World Cup Stadium",
    "city": "Daejeon, South Korea",
    "home": {
      "name": "South Korea",
      "flag": "🇰🇷",
      "formation": "3-4-3",
      "color": "#CD2E3A",
      "colorDim": "rgba(205,46,58,0.18)",
      "players": [
        "Lee Woon-jae",
        "Lee Young-pyo",
        "Hong Myung-bo",
        "Choi Jin-cheul",
        "Kim Tae-young",
        "Kim Nam-il",
        "Park Ji-sung",
        "Seol Ki-hyeon",
        "Ahn Jung-hwan",
        "Lee Chun-soo",
        "Hwang Sun-hong"
      ],
      "score": 2
    },
    "away": {
      "name": "Italy",
      "flag": "🇮🇹",
      "formation": "4-3-1-2",
      "color": "#0033A0",
      "colorDim": "rgba(0,51,160,0.18)",
      "players": [
        "Gianluigi Buffon",
        "Fabio Cannavaro",
        "Alessandro Nesta",
        "Gianluca Zambrotta",
        "Pavel Nedved",
        "Gennaro Gattuso",
        "Andrea Pirlo",
        "Francesco Totti",
        "Christian Vieri",
        "Marco Delvecchio",
        "Alberto Gilardino"
      ],
      "score": 1
    },
    "status": "AET",
    "xG": {
      "home": 1.76,
      "away": 1.02
    },
    "possession": {
      "home": 52,
      "away": 48
    },
    "timeline": [
      {
        "minute": "18'",
        "side": "away",
        "player": "Christian Vieri",
        "type": "goal",
        "description": "Vieri opens the scoring with a powerful header from a corner."
      },
      {
        "minute": "88'",
        "side": "home",
        "player": "Seol Ki-hyeon",
        "type": "goal",
        "description": "Seol equalizes with a strike from the edge of the box."
      },
      {
        "minute": "117'",
        "side": "home",
        "player": "Ahn Jung-hwan",
        "type": "goal",
        "description": "Ahn scores the golden goal with a header after a free kick."
      },
      {
        "minute": "80'",
        "side": "away",
        "player": "Francesco Totti",
        "type": "red",
        "description": "Totti receives a second yellow card for a dive."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 16,
        "away": 12,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Shots on Target",
        "home": 8,
        "away": 5,
        "homeWidth": 62,
        "awayWidth": 38
      },
      {
        "label": "Possession",
        "home": 52,
        "away": 48,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Passes",
        "home": 420,
        "away": 398,
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Pass Accuracy",
        "home": "83%",
        "away": "76%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 5,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Fouls",
        "home": 18,
        "away": 23,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "1.76",
        "away": "1.02",
        "homeWidth": 64,
        "awayWidth": 36
      }
    ],
    "metaDescription": "South Korea's dramatic victory against Italy in the 2002 World Cup Round of 16 is marked by controversy and a golden goal.",
    "tacticalAnalysis": "In this knockout clash, South Korea deployed a 3-4-3 formation, emphasizing speed on the wings with Seol Ki-hyeon and Lee Chun-soo providing width. Their three-man defense was anchored by Hong Myung-bo, who excelled in aerial duels. Italy, using a 4-3-1-2 system, relied on Pirlo's creativity from midfield and Totti's playmaking ability behind the strikers. The game was a battle of contrasting styles; South Korea pressed high and tried to exploit the flanks, while Italy focused on structured defense and counter-attacks. Despite falling behind early, South Korea maintained composure, with their equalizer coming from a well-crafted attack. The golden goal came during extra time after a free kick delivered by Park Ji-sung, showcasing South Korea's tactical discipline and willingness to capitalize on set pieces.",
    "keyMoments": [
      "18' - Vieri gives Italy the lead with a header from a corner, setting a tense tone for the match.",
      "80' - Totti sent off for a second yellow in a controversial decision, leaving Italy down to ten men.",
      "88' - Seol Ki-hyeon scores an equalizer, igniting hope in the South Korean fans.",
      "117' - Ahn Jung-hwan's golden goal secures South Korea's place in the quarter-finals."
    ],
    "historicalSignificance": "This match is crucial in football history as it symbolizes South Korea's incredible journey in the 2002 World Cup, where they reached the semi-finals against all odds. It also sparked debate over officiating standards in high-stakes matches, particularly with the controversial red card issued to Totti.",
    "topPerformers": [
      {
        "name": "Lee Woon-jae",
        "side": "home",
        "position": "GK",
        "rating": 9,
        "note": "Made several crucial saves to keep South Korea in the game."
      },
      {
        "name": "Ahn Jung-hwan",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Scored the golden goal and was a constant threat in attack."
      },
      {
        "name": "Christian Vieri",
        "side": "away",
        "position": "ST",
        "rating": 8,
        "note": "Opened the scoring and was a key component of Italy's offensive strategy."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Brazil — 2002 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-brazil-2002-qf",
    "tournament": "FIFA World Cup 2002",
    "year": 2002,
    "stage": "Quarter-Final",
    "date": "June 21, 2002",
    "venue": "Shizuoka Stadium Ecopa",
    "city": "Shizuoka, Japan",
    "home": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "4-4-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "David Seaman",
        "Gary Neville",
        "John Terry",
        "Rio Ferdinand",
        "Ashley Cole",
        "David Beckham",
        "Paul Scholes",
        "Frank Lampard",
        "Michael Owen",
        "Emile Heskey",
        "Steven Gerrard"
      ],
      "score": 1
    },
    "away": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Marcos",
        "Cafu",
        "Lucio",
        "Edmilson",
        "Roberto Carlos",
        "Kléber",
        "Juninho Paulista",
        "Ronaldinho",
        "Rivaldo",
        "Kaká",
        "Ronaldo"
      ],
      "score": 2
    },
    "status": "FT",
    "xG": {
      "home": 1.52,
      "away": 1.78
    },
    "possession": {
      "home": 42,
      "away": 58
    },
    "timeline": [
      {
        "minute": "5'",
        "side": "home",
        "player": "Michael Owen",
        "type": "goal",
        "description": "Owen gave England the lead with a precise shot."
      },
      {
        "minute": "45+'",
        "side": "away",
        "player": "Rivaldo",
        "type": "goal",
        "description": "Last-minute equaliser from Rivaldo."
      },
      {
        "minute": "50'",
        "side": "away",
        "player": "Ronaldinho",
        "type": "goal",
        "description": "Ronaldinho scores with an audacious chip over Seaman."
      },
      {
        "minute": "57'",
        "side": "away",
        "player": "Ronaldinho",
        "type": "red",
        "description": "Ronaldinho sent off for a second yellow card."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 11,
        "away": 14,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 8,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Possession",
        "home": 42,
        "away": 58,
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Passes",
        "home": 375,
        "away": 465,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Pass Accuracy",
        "home": "78%",
        "away": "82%",
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 5,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 9,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "xG",
        "home": "1.52",
        "away": "1.78",
        "homeWidth": 46,
        "awayWidth": 54
      }
    ],
    "metaDescription": "England faced Brazil in the 2002 World Cup Quarter-Final, with a thrilling match ending 2-1 after a dramatic performance.",
    "tacticalAnalysis": "In this quarter-final, England deployed a 4-4-2 formation, aiming to exploit the pace of Michael Owen upfront. They played a high defensive line and pressed Brazil aggressively in midfield. The Brazilians, in a 4-2-3-1 formation, relied on the creativity of Ronaldinho and Rivaldo, with Ronaldo as the central striker. Ronaldinho's goal, a stunning chip over David Seaman, highlighted England's vulnerability to players in space. Despite being down to 10 men after Ronaldinho's red card, Brazil managed to maintain their defensive shape and countered effectively, showcasing their resilience. England struggled to break down Brazil's defense, often reliant on set pieces and long balls. However, they failed to capitalize on their possession, ultimately leading to their elimination.",
    "keyMoments": [
      "5' - Owen puts England ahead with a tremendous shot.",
      "45+' - Rivaldo equalizes with a well-placed shot just before halftime.",
      "50' - Ronaldinho scores a remarkable goal with a chip.",
      "57' - Ronaldinho receives a second yellow and is sent off."
    ],
    "historicalSignificance": "This match marked the end of England's hopes for a World Cup title in 2002, while Brazil would go on to win the tournament. Ronaldinho's memorable chip goal is often recalled as one of the iconic moments in World Cup history.",
    "topPerformers": [
      {
        "name": "Rivaldo",
        "side": "away",
        "position": "LW",
        "rating": 9,
        "note": "Key in creating and scoring Brazil's goals."
      },
      {
        "name": "Michael Owen",
        "side": "home",
        "position": "ST",
        "rating": 8.4,
        "note": "Outstanding in finishing and movement."
      },
      {
        "name": "Ronaldinho",
        "side": "away",
        "position": "CAM",
        "rating": 8.8,
        "note": "Created numerous chances and scored a stunning goal."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // South Korea vs Spain — 2002 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "south-korea-vs-spain-2002-qf",
    "tournament": "FIFA World Cup 2002",
    "year": 2002,
    "stage": "Quarter-Final",
    "date": "June 22, 2002",
    "venue": "Gwangju World Cup Stadium",
    "city": "Gwangju, South Korea",
    "home": {
      "name": "South Korea",
      "flag": "🇰🇷",
      "formation": "3-4-3",
      "color": "#CD2E3A",
      "colorDim": "rgba(205,46,58,0.18)",
      "players": [
        "Lee Woon-jae",
        "Hong Myung-bo",
        "Choi Ji-soo",
        "Kim Tae-young",
        "Kim Nam-il",
        "Lee Young-pyo",
        "Moon Sung-min",
        "Park Ji-sung",
        "Ahn Jung-hwan",
        "Lee Dong-gook",
        "Seol Ki-hyeon"
      ],
      "score": 0
    },
    "away": {
      "name": "Spain",
      "flag": "🇪🇸",
      "formation": "4-2-3-1",
      "color": "#CC0000",
      "colorDim": "rgba(204,0,0,0.18)",
      "players": [
        "Iker Casillas",
        "Michel Salgado",
        "Ivan Helguera",
        "Fernando Hierro",
        "Carles Puyol",
        "Thomas Gravesen",
        "Xavi",
        "Joaquín",
        "Raúl",
        "Luis Enrique",
        "Fernando Morientes"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "5-3",
    "xG": {
      "home": 1.2,
      "away": 1.8
    },
    "possession": {
      "home": 49,
      "away": 51
    },
    "timeline": [
      {
        "minute": "27'",
        "side": "away",
        "player": "Fernando Morientes",
        "type": "goal",
        "description": "Morientes scores a header, disallowed for a questionable foul."
      },
      {
        "minute": "45'",
        "side": "home",
        "player": "Lee Woon-jae",
        "type": "yellow",
        "description": "Lee receives a yellow card for delaying the game."
      },
      {
        "minute": "83'",
        "side": "away",
        "player": "Joaquín",
        "type": "pen_miss",
        "description": "Joaquín misses a crucial penalty."
      },
      {
        "minute": "101'",
        "side": "home",
        "player": "Lee Woon-jae",
        "type": "save",
        "description": "Lee saves a penalty from Fernando Hierro."
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Referee",
        "type": "sub",
        "description": "Extra time ends, match proceeds to penalties."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 14,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Shots on Target",
        "home": 4,
        "away": 6,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Possession",
        "home": 49,
        "away": 51,
        "homeWidth": 49,
        "awayWidth": 51
      },
      {
        "label": "Passes",
        "home": 280,
        "away": 300,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Pass Accuracy",
        "home": "77%",
        "away": "82%",
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 8,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Fouls",
        "home": 13,
        "away": 16,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "xG",
        "home": "1.20",
        "away": "1.80",
        "homeWidth": 40,
        "awayWidth": 60
      }
    ],
    "metaDescription": "A controversial match where South Korea advanced to the semi-finals against Spain in the 2002 World Cup quarter-finals.",
    "tacticalAnalysis": "In this quarter-final, South Korea deployed a 3-4-3 formation, utilizing three central defenders to combat Spain's attacking threat. This allowed them to press high and channel play towards Spain's flanks, disrupting their build-up play. Park Ji-sung and Lee Young-pyo operated as wing-backs, providing width while also dropping back to support the defense. Spain, in a 4-2-3-1 setup, relied on Xavi and Joaquín to provide creativity behind the striker, Fernando Morientes. Spain dominated possession with calculated passing, but their inability to convert chances and the disallowed goal for Morientes proved critical. During the match, South Korea's organized defensive shape and intense pressing created problems for Spain, especially in transition phases, which allowed them to maintain the game's tension and eventually lead to a penalty shootout.",
    "keyMoments": [
      "27': Morientes disallowed goal changes momentum.",
      "83': Joaquín misses penalty crucial for Spain's chances.",
      "101': Lee saves Hierro's penalty, shifting pressure.",
      "120': Game progresses to penalties amidst high tension."
    ],
    "historicalSignificance": "This match is remembered for its controversial outcomes and decisions, notably the disallowed goals for Spain and the missed penalties. It marked South Korea's unprecedented journey to the semi-finals, becoming the first Asian team to reach this stage in World Cup history.",
    "topPerformers": [
      {
        "name": "Lee Woon-jae",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Outstanding saves, including two key penalties."
      },
      {
        "name": "Fernando Hierro",
        "side": "away",
        "position": "CB",
        "rating": 8.5,
        "note": "Led defense and was influential in build-up play."
      },
      {
        "name": "Park Ji-sung",
        "side": "home",
        "position": "CM",
        "rating": 8,
        "note": "Dynamic midfield presence, vital for transitions."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs South Korea — 2002 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-south-korea-2002-sf",
    "tournament": "FIFA World Cup 2002",
    "year": 2002,
    "stage": "Semi-Final",
    "date": "June 25, 2002",
    "venue": "Seoul World Cup Stadium",
    "city": "Seoul, South Korea",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "3-5-2",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Oliver Kahn",
        "Marco Bode",
        "Christian Wörns",
        "Thomas Linke",
        "Bernd Schneider",
        "Michael Ballack",
        "Torsten Frings",
        "Bastian Schweinsteiger",
        "Oliver Bierhoff",
        "Miroslav Klose",
        "Jens Jeremies"
      ],
      "score": 1
    },
    "away": {
      "name": "South Korea",
      "flag": "🇰🇷",
      "formation": "4-4-2",
      "color": "#CD2E3A",
      "colorDim": "rgba(205,46,58,0.18)",
      "players": [
        "Lee Woon-jae",
        "Lee Young-pyo",
        "Hong Myung-bo",
        "Cha Du-ri",
        "Kim Tae-young",
        "Park Ji-sung",
        "Lee Chun-soo",
        "Song Jong-kook",
        "Ahn Jung-hwan",
        "Seol Ki-hyeon",
        "Choi Yong-soo"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.25,
      "away": 0.67
    },
    "possession": {
      "home": 57,
      "away": 43
    },
    "timeline": [
      {
        "minute": "75'",
        "side": "home",
        "player": "Michael Ballack",
        "type": "goal",
        "description": "Header from a Bernd Schneider cross"
      },
      {
        "minute": "81'",
        "side": "home",
        "player": "Michael Ballack",
        "type": "yellow",
        "description": "Received a yellow card"
      },
      {
        "minute": "90+2'",
        "side": "neutral",
        "player": "Referee",
        "type": "whistle",
        "description": "Final whistle"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 8,
        "homeWidth": 64,
        "awayWidth": 36
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 57,
        "away": 43,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Passes",
        "home": 522,
        "away": 340,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Pass Accuracy",
        "home": "80%",
        "away": "72%",
        "homeWidth": 53,
        "awayWidth": 47
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 15,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "1.25",
        "away": "0.67",
        "homeWidth": 65,
        "awayWidth": 35
      }
    ],
    "metaDescription": "Germany defeated South Korea 1-0 in the 2002 FIFA World Cup semi-final, featuring a memorable header from Michael Ballack.",
    "tacticalAnalysis": "In this match, Germany adopted a 3-5-2 formation which allowed them to control the midfield with three central players while attacking with wing-backs. The key battle was established in the midfield, where Michael Ballack excelled, creating opportunities and providing defensive cover. South Korea, utilizing a more traditional 4-4-2 formation, struggled to cope with the physicality of the German midfield. Ballack’s goal came from a well-worked set-piece involving Bernd Schneider, which showcased Germany's effectiveness in dead-ball situations. Despite their efforts, South Korea's attackers, Ahn Jung-hwan and Seol Ki-hyeon, found it challenging to penetrate Germany’s backline. As the match wore on, Germany’s experience in high-pressure situations became evident, while South Korea’s emotional journey throughout the tournament culminated in a valiant effort but ultimately fell short of reaching the final.",
    "keyMoments": [
      "75' - Ballack scores with a header, putting Germany ahead.",
      "81' - Ballack receives a yellow card and is ruled out of the final.",
      "90+2' - Final whistle confirms Germany's victory.",
      "60' - South Korea substitutes Ahn Jung-hwan.",
      "30' - Crucial save by Oliver Kahn denying Park Ji-sung."
    ],
    "historicalSignificance": "This match is significant as it marked the end of South Korea's historic run in the 2002 World Cup, where they reached the semi-finals against all odds. Additionally, Germany's ability to defeat a spirited South Korean team demonstrated their resilience and tactical prowess, eventually leading them to the final.",
    "topPerformers": [
      {
        "name": "Oliver Kahn",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Key saves throughout the match to maintain a clean sheet."
      },
      {
        "name": "Michael Ballack",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Dominated the midfield and scored the crucial goal."
      },
      {
        "name": "Lee Young-pyo",
        "side": "away",
        "position": "LB",
        "rating": 8.3,
        "note": "Solid defensive performance and contributed to attacks."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Turkey — 2002 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-turkey-2002-sf",
    "tournament": "FIFA World Cup 2002",
    "year": 2002,
    "stage": "Semi-Final",
    "date": "June 26, 2002",
    "venue": "Saitama Stadium 2002",
    "city": "Saitama, Japan",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-3-1",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Marcos",
        "Cafu",
        "Lucio",
        "Edmilson",
        "Roberto Carlos",
        "Dunga",
        "Gilberto Silva",
        "Rivaldo",
        "Ronaldinho",
        "Ronaldo",
        "Kaká"
      ],
      "score": 1
    },
    "away": {
      "name": "Turkey",
      "flag": "🇹🇷",
      "formation": "4-3-2-1",
      "color": "#E30A17",
      "colorDim": "rgba(227,10,23,0.18)",
      "players": [
        "Volkan Demirel",
        "Gökhan Zan",
        "Hakan Ünsal",
        "Servet Çetin",
        "Fatih Akyel",
        "Okan Buruk",
        "Emre Belözoğlu",
        "Tugay Kerimoğlu",
        "Hakan Şükür",
        "Hasan Şaş",
        "Ilhan Mansız"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 2.45,
      "away": 0.68
    },
    "possession": {
      "home": 67,
      "away": 33
    },
    "timeline": [
      {
        "minute": "33'",
        "side": "home",
        "player": "Ronaldo",
        "type": "goal",
        "description": "Ronaldo scores the only goal of the match."
      },
      {
        "minute": "60'",
        "side": "away",
        "player": "Okan Buruk",
        "type": "yellow",
        "description": "Okan Buruk receives a yellow card for a foul."
      },
      {
        "minute": "69'",
        "side": "away",
        "player": "Hakan Ünsal",
        "type": "yellow",
        "description": "Hakan Ünsal booked for a late challenge."
      },
      {
        "minute": "82'",
        "side": "away",
        "player": "Tugay Kerimoğlu",
        "type": "sub",
        "description": "Substituted for Serdar Özkan."
      },
      {
        "minute": "90'",
        "side": "home",
        "player": "Ronaldinho",
        "type": "sub",
        "description": "Substituted for Edmilson."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 4,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 1,
        "homeWidth": 83,
        "awayWidth": 17
      },
      {
        "label": "Possession",
        "home": 67,
        "away": 33,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Passes",
        "home": 500,
        "away": 200,
        "homeWidth": 71,
        "awayWidth": 29
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "70%",
        "homeWidth": 85,
        "awayWidth": 70
      },
      {
        "label": "Corners",
        "home": 7,
        "away": 1,
        "homeWidth": 88,
        "awayWidth": 12
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 15,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "xG",
        "home": "2.45",
        "away": "0.68",
        "homeWidth": 78,
        "awayWidth": 22
      }
    ],
    "metaDescription": "Brazil defeats Turkey 1-0 in the 2002 FIFA World Cup semi-final, securing their place in the final.",
    "tacticalAnalysis": "In the semi-final match, Brazil deployed a 4-2-3-1 formation, looking to utilize the pace and skill of their attacking trio — Ronaldo, Rivaldo, and Ronaldinho. The midfield duo of Dunga and Gilberto Silva provided stability and allowed the front players to express themselves. Brazil's constant pressing and high defensive line forced Turkey into errors in buildup play. Turkey, lined up in a 4-3-2-1 formation, struggled to maintain possession against Brazil's intense pressing, with Okan Buruk and Emre Belözoğlu tasked with linking play, but they were often outnumbered in midfield. Ronaldo's solitary goal came in the first half through a swift counterattack, as Rivaldo's clever flick set him free. As the match progressed, Turkey struggled to create meaningful chances, and Brazil controlled the tempo, restricting Turkey's forward movement, ultimately sealing a spot in the final.",
    "keyMoments": [
      "33' - Ronaldo's goal gives Brazil the lead.",
      "60' - Okan Buruk booked for a tactical foul.",
      "69' - Hakan Ünsal receives yellow for a late tackle.",
      "90' - Brazil substitutes Ronaldinho to waste time."
    ],
    "historicalSignificance": "This match was pivotal in establishing Brazil as a dominant force in world football, with Ronaldo's performance further enhancing his legacy. Turkey's journey as a semi-finalist highlighted their emergence as a competitive team on the world stage.",
    "topPerformers": [
      {
        "name": "Ronaldo",
        "side": "home",
        "position": "ST",
        "rating": 9.5,
        "note": "Scoring the decisive goal and constantly threatening the Turkish defense."
      },
      {
        "name": "Marcos",
        "side": "home",
        "position": "GK",
        "rating": 8.7,
        "note": "Made crucial saves to preserve the lead and maintain a clean sheet."
      },
      {
        "name": "Hakan Şükür",
        "side": "away",
        "position": "ST",
        "rating": 7.2,
        "note": "Despite limited chances, he worked hard to press the Brazilian defense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Argentina — 1998 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-argentina-1998-r16",
    "tournament": "FIFA World Cup 1998",
    "year": 1998,
    "stage": "Round of 16",
    "date": "June 30, 1998",
    "venue": "Stade Geoffroy-Guichard",
    "city": "Saint-Étienne, France",
    "home": {
      "name": "England",
      "flag": "🏴‍☠️",
      "formation": "4-4-1",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "David Seaman",
        "Gary Neville",
        "Tony Adams",
        "Sol Campbell",
        "Philipp Neville",
        "David Beckham",
        "Paul Ince",
        "David Scholes",
        "Michael Owen",
        "Alan Shearer",
        "Teddy Sheringham"
      ],
      "score": 2
    },
    "away": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "3-5-2",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Nery Pumpido",
        "Roberto Ayala",
        "Elizardo Ledesma",
        "Javier Zanetti",
        "Diego Simeone",
        "Fernando Redondo",
        "Juan Sebastián Verón",
        "Pablo Aimar",
        "Gabriel Batistuta",
        "Mauricio Pineda",
        "Hernán Crespo"
      ],
      "score": 2
    },
    "status": "PSO",
    "penaltyScore": "3-4",
    "xG": {
      "home": 2.35,
      "away": 2.41
    },
    "possession": {
      "home": 45,
      "away": 55
    },
    "timeline": [
      {
        "minute": "6'",
        "side": "away",
        "player": "Gabriel Batistuta",
        "type": "goal",
        "description": "Batistuta scores from the penalty spot"
      },
      {
        "minute": "16'",
        "side": "home",
        "player": "Michael Owen",
        "type": "goal",
        "description": "Owen equalizes with a brilliant solo effort"
      },
      {
        "minute": "27'",
        "side": "home",
        "player": "Paul Scholes",
        "type": "pen_goal",
        "description": "Scholes scores from the penalty spot"
      },
      {
        "minute": "45'",
        "side": "away",
        "player": "Javier Zanetti",
        "type": "goal",
        "description": "Zanetti equalizes just before halftime"
      },
      {
        "minute": "61'",
        "side": "home",
        "player": "David Beckham",
        "type": "red",
        "description": "Beckham sent off for a kick at Simeone"
      },
      {
        "minute": "90'",
        "side": "neutral",
        "player": "Sol Campbell",
        "type": "goal",
        "description": "Campbell's goal is ruled out for offside"
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 13,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 7,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Possession",
        "home": 45,
        "away": 55,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Passes",
        "home": 320,
        "away": 400,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "Pass Accuracy",
        "home": "72%",
        "away": "78%",
        "homeWidth": 42,
        "awayWidth": 58
      },
      {
        "label": "Corners",
        "home": 4,
        "away": 3,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 14,
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "xG",
        "home": "2.35",
        "away": "2.41",
        "homeWidth": 49,
        "awayWidth": 51
      }
    ],
    "metaDescription": "An electrifying match in the 1998 World Cup where England and Argentina battled to a dramatic penalty shootout.",
    "tacticalAnalysis": "The match showcased a classic 4-4-1 formation for England, led by coach Glenn Hoddle. Michael Owen's pace proved vital in Olympic sprinting past defenders and creating opportunities. David Beckham's role in the midfield was crucial until his dismissal. Argentina lined up in a 3-5-2, emphasizing their attacking width and playmaking ability through Aimar and Verón. The key tactical battle was between Ince's defensiveness versus Verón’s creativity in midfield. The goals flowed from moments of individual brilliance and mismanagement, notably Beckham's ill-discipline and Campbell's disallowed goal reflecting an intense and tight affair perfectly embodying World Cup drama.",
    "keyMoments": [
      "6' - Batistuta converts a penalty to take the lead for Argentina.",
      "16' - Owen scores a stunning goal to equalize for England.",
      "27' - Scholes puts England ahead from the penalty spot.",
      "45' - Zanetti scores to equalize just before the break.",
      "61' - Beckham receives a red card for kicking Simeone.",
      "90' - Campbell's goal is ruled out for offside."
    ],
    "historicalSignificance": "This match is remembered as one of the greatest in World Cup history, showcasing dramatic shifts in momentum and high-tension penalties. It highlighted the psychological pressure of knockout football and established iconic moments defining both teams' legacies.",
    "topPerformers": [
      {
        "name": "Michael Owen",
        "side": "home",
        "position": "ST",
        "rating": 9.2,
        "note": "Owen's goal was a standout moment that demonstrated his finishing and speed."
      },
      {
        "name": "David Beckham",
        "side": "home",
        "position": "RM",
        "rating": 8.5,
        "note": "Played a critical role until sent off, his set-pieces were dangerous."
      },
      {
        "name": "Gabriel Batistuta",
        "side": "away",
        "position": "ST",
        "rating": 8.8,
        "note": "Batistuta's penalty was calm under pressure, and he was pivotal in attack."
      },
      {
        "name": "Javier Zanetti",
        "side": "away",
        "position": "RB",
        "rating": 8.7,
        "note": "Zanetti’s equalizing goal was crucial, and he was solid defensively."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Netherlands vs Argentina — 1998 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "netherlands-vs-argentina-1998-qf",
    "tournament": "FIFA World Cup 1998",
    "year": 1998,
    "stage": "Quarter-Final",
    "date": "July 4, 1998",
    "venue": "Stade Vélodrome",
    "city": "Marseille, France",
    "home": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Edwin van der Sar",
        "Frank de Boer",
        "Ronald de Boer",
        "Jaap Stam",
        "Marc Overmars",
        "Edgar Davids",
        "Clarence Seedorf",
        "Ruud Gullit",
        "Patrick Kluivert",
        "Dennis Bergkamp",
        "Frank Rijkaard"
      ],
      "score": 2
    },
    "away": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "4-3-3",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Nery Pumpido",
        "Roberto Ayala",
        "Javier Zanetti",
        "Nicolás Otamendi",
        "Omar Bravo",
        "Diego Simeone",
        "Juan Sebastián Verón",
        "Pablo Aimar",
        "Diego Maradona",
        "Claudio Caniggia",
        "Mario Kempes"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 2.24,
      "away": 0.81
    },
    "possession": {
      "home": 55,
      "away": 45
    },
    "timeline": [
      {
        "minute": "16'",
        "side": "away",
        "player": "Leonardo López",
        "type": "goal",
        "description": "López opened the scoring with a powerful header from a corner."
      },
      {
        "minute": "73'",
        "side": "home",
        "player": "Patrick Kluivert",
        "type": "goal",
        "description": "Kluivert equalized with a close-range finish after a scramble in the box."
      },
      {
        "minute": "89'",
        "side": "home",
        "player": "Dennis Bergkamp",
        "type": "goal",
        "description": "Bergkamp scored a brilliant last-minute winner, controlling a long pass before finishing calmly."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 7,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 55,
        "away": 45,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Passes",
        "home": 320,
        "away": 230,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 2,
        "homeWidth": 75,
        "awayWidth": 25
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "2.24",
        "away": "0.81",
        "homeWidth": 73,
        "awayWidth": 27
      }
    ],
    "metaDescription": "Netherlands defeated Argentina 2-1 in the 1998 World Cup Quarter-Final with Bergkamp's iconic last-minute goal.",
    "tacticalAnalysis": "This quarter-final showcased tactical brilliance from both Netherlands and Argentina. The Dutch employed a 4-3-3 formation, utilizing wing play with Marc Overmars and Clarence Seedorf pressing high up the pitch. Patrick Kluivert and Dennis Bergkamp formed a lethal attacking partnership, with Bergkamp often dropping deep to create play while Kluivert's movement stretched the Argentine defense. Argentina countered with a similar 4-3-3, relying on the creativity of Juan Sebastián Verón and the experience of Diego Simeone in midfield. The Argentine defense, led by Roberto Ayala, was tested frequently, especially after their initial goal from Leonardo López. In the second half, the Dutch switched to a more aggressive approach, eventually leading to Kluivert's equalizer and the historical last-minute winner from Bergkamp, who expertly controlled a long ball from Frank de Boer before finishing off a brilliant counter. Manager Guus Hiddink’s decision to bring on fresh legs midway through the second half paid off as the Dutch surged forward late in the game, claiming a significant victory.",
    "keyMoments": [
      "16' - López's header puts Argentina ahead, shocking the Dutch.",
      "73' - Kluivert equalizes, igniting hope for the Netherlands.",
      "89' - Bergkamp's stunning winner cements his legacy in World Cup history."
    ],
    "historicalSignificance": "This match is remembered for Dennis Bergkamp's iconic last-minute goal, which not only showcased his extraordinary skill but also epitomized the attacking philosophy of Dutch football. It marked a memorable moment in World Cup history, sending the Netherlands to the semi-finals and highlighting the dramatic nature of knockout football.",
    "topPerformers": [
      {
        "name": "Dennis Bergkamp",
        "side": "home",
        "position": "ST",
        "rating": 9.5,
        "note": "His last-minute goal was a demonstration of extraordinary skill and composure."
      },
      {
        "name": "Patrick Kluivert",
        "side": "home",
        "position": "ST",
        "rating": 8.2,
        "note": "Kluivert's equalizer was pivotal for shifting momentum back to the Dutch."
      },
      {
        "name": "Roberto Ayala",
        "side": "away",
        "position": "CB",
        "rating": 8,
        "note": "Ayala's defensive leadership kept Argentina strong until late in the match."
      },
      {
        "name": "Juan Sebastián Verón",
        "side": "away",
        "position": "CM",
        "rating": 8.4,
        "note": "Verón's playmaking was crucial in Argentina's midfield dominance."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // France vs Italy — 1998 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "france-vs-italy-1998-qf",
    "tournament": "FIFA World Cup 1998",
    "year": 1998,
    "stage": "Quarter-Final",
    "date": "July 3, 1998",
    "venue": "Stade de France",
    "city": "Saint-Denis, France",
    "home": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-3-1-2",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Fabien Barthez",
        "Lilian Thuram",
        "Marcel Desailly",
        "Frank Leboeuf",
        "Bixente Lizarazu",
        "Didier Deschamps",
        "Christian Karembeu",
        "Zinedine Zidane",
        "Youri Djorkaeff",
        "Thierry Henry",
        "David Trezeguet"
      ],
      "score": 0
    },
    "away": {
      "name": "Italy",
      "flag": "🇮🇹",
      "formation": "3-5-2",
      "color": "#0033A0",
      "colorDim": "rgba(0,51,160,0.18)",
      "players": [
        "Gianluigi Buffon",
        "Paolo Maldini",
        "Alessandro Nesta",
        "Fabio Cannavaro",
        "Gennaro Gattuso",
        "Franco Baresi",
        "Angelo Peruzzi",
        "Roberto Baggio",
        "Alessandro Del Piero",
        "Marco Tardelli",
        "Christian Vieri"
      ],
      "score": 0
    },
    "status": "PSO",
    "penaltyScore": "4-3",
    "xG": {
      "home": 1.25,
      "away": 1.1
    },
    "possession": {
      "home": 55,
      "away": 45
    },
    "timeline": [
      {
        "minute": "90'",
        "side": "neutral",
        "player": "N/A",
        "type": "sub",
        "description": "End of regulation time, score tied 0-0."
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "N/A",
        "type": "sub",
        "description": "End of extra time, score still 0-0."
      },
      {
        "minute": "2'",
        "side": "away",
        "player": "Di Biagio",
        "type": "pen_miss",
        "description": "Penalty shot missed, hit the bar."
      },
      {
        "minute": "4'",
        "side": "home",
        "player": "Zidane",
        "type": "pen_miss",
        "description": "Zidane missed his penalty in the shootout."
      },
      {
        "minute": "5'",
        "side": "home",
        "player": "Y. Djorkaeff",
        "type": "pen_goal",
        "description": "Djorkaeff scores in the penalty shootout."
      },
      {
        "minute": "7'",
        "side": "away",
        "player": "R. Baggio",
        "type": "pen_goal",
        "description": "Baggio scores Italy's penalty in the shootout."
      },
      {
        "minute": "9'",
        "side": "home",
        "player": "Trezeguet",
        "type": "pen_goal",
        "description": "Trezeguet scores for France in the penalty shootout."
      },
      {
        "minute": "11'",
        "side": "away",
        "player": "C. Vieri",
        "type": "pen_goal",
        "description": "Vieri nets a penalty for Italy."
      },
      {
        "minute": "13'",
        "side": "home",
        "player": "P. Maldini",
        "type": "pen_miss",
        "description": "Maldini misses his penalty attempt."
      },
      {
        "minute": "15'",
        "side": "home",
        "player": "F. Barthez",
        "type": "pen_goal",
        "description": "Barthez saves from Di Biagio."
      },
      {
        "minute": "17'",
        "side": "home",
        "player": "Thierry Henry",
        "type": "pen_goal",
        "description": "Henry scores the winning penalty."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 12,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Possession",
        "home": 55,
        "away": 45,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Passes",
        "home": 350,
        "away": 300,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 11,
        "away": 10,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "xG",
        "home": "1.25",
        "away": "1.10",
        "homeWidth": 54,
        "awayWidth": 46
      }
    ],
    "metaDescription": "France defeats Italy in a dramatic penalty shootout in the 1998 World Cup Quarter-Final.",
    "tacticalAnalysis": "The match showcased a tactical battle between France's 4-3-1-2 formation and Italy's 3-5-2. France's midfield, anchored by Didier Deschamps and supported by Zinedine Zidane's creative play, consistently looked to penetrate Italy's defensive lines. France employed a high press, forcing Italy's defenders into hurried clearances and limiting their possession. Italy, on the other hand, used their 3-5-2 to maintain a compact defense while relying on counter-attacks through the wide players. Gattuso’s work rate in the midfield allowed Italy to disrupt the flow of France's play. Both defenses excelled, with France's Barthez and Italy's Buffon making crucial saves. The tactical discipline from both sides resulted in a goalless draw at the end of regular and extra time, leading to the penalty shootout, where France emerged victorious. Zidane's missed penalty didn't prevent the raucous home crowd from pushing their team over the line, following Barthez’s critical save from Di Biagio.",
    "keyMoments": [
      "90' - Match ends in regulation, both teams level at 0-0.",
      "2' - Di Biagio's penalty hits the bar, missing a golden opportunity for Italy.",
      "4' - Zidane misses his penalty in the shootout but France keeps fighting.",
      "5' - Djorkaeff scores the first penalty for France, raising hopes.",
      "13' - Maldini's penalty miss allows France to regain momentum.",
      "17' - Henry scores the final penalty, clinching the win for France."
    ],
    "historicalSignificance": "This match is etched in World Cup history as France's first step towards glory on home soil. It was a testament to defensive football and the mental fortitude required in penalty shootouts, showcasing the pressures teams face in knockout stages.",
    "topPerformers": [
      {
        "name": "Fabien Barthez",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Vital in the penalty shootout, making a crucial save."
      },
      {
        "name": "Zinedine Zidane",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Controlling presence in midfield despite missing a penalty."
      },
      {
        "name": "Gianluigi Buffon",
        "side": "away",
        "position": "GK",
        "rating": 8.7,
        "note": "Made critical saves to keep Italy in the match."
      },
      {
        "name": "Gennaro Gattuso",
        "side": "away",
        "position": "CM",
        "rating": 8.4,
        "note": "Displayed exceptional work rate and disruptive play."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs Netherlands — 1998 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-netherlands-1998-sf",
    "tournament": "FIFA World Cup 1998",
    "year": 1998,
    "stage": "Semi-Final",
    "date": "July 7, 1998",
    "venue": "Stade Vélodrome",
    "city": "Marseille, France",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-4-2",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Taffarel",
        " Cafu",
        "Mauro Silva",
        "Aldair",
        "Roberto Carlos",
        "Dunga",
        "Viola",
        "Rivaldo",
        "Ronaldo",
        "Bebeto",
        "Tita"
      ],
      "score": 1
    },
    "away": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Vander Sar",
        "Zanetti",
        "Boma",
        "Frank de Boer",
        "Boulahrouz",
        "Cocu",
        "Seedorf",
        "Bergkamp",
        "Kluivert",
        "Overmars",
        "Reiziger"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "4-2",
    "xG": {
      "home": 1.45,
      "away": 1.78
    },
    "possession": {
      "home": 48,
      "away": 52
    },
    "timeline": [
      {
        "minute": "46'",
        "side": "home",
        "player": "Ronaldo",
        "type": "goal",
        "description": "Ronaldo scored the opening goal for Brazil."
      },
      {
        "minute": "87'",
        "side": "away",
        "player": "Kluivert",
        "type": "goal",
        "description": "Kluivert's late equaliser sent the match into extra time."
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "N/A",
        "type": "sub",
        "description": "Penalty shootout begins between Brazil and Netherlands."
      },
      {
        "minute": "N/A",
        "side": "neutral",
        "player": "N/A",
        "type": "pen_goal",
        "description": "Brazil scored 4 penalties, while Netherlands scored 2."
      },
      {
        "minute": "120'",
        "side": "home",
        "player": "Taffarel",
        "type": "sub",
        "description": "Taffarel was the hero of the match, saving crucial penalties."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 16,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 6,
        "homeWidth": 45,
        "awayWidth": 55
      },
      {
        "label": "Possession",
        "home": 48,
        "away": 52,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Passes",
        "home": 412,
        "away": 450,
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "84%",
        "homeWidth": 48,
        "awayWidth": 52
      },
      {
        "label": "Corners",
        "home": 3,
        "away": 5,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Fouls",
        "home": 12,
        "away": 15,
        "homeWidth": 44,
        "awayWidth": 56
      },
      {
        "label": "xG",
        "home": "1.45",
        "away": "1.78",
        "homeWidth": 45,
        "awayWidth": 55
      }
    ],
    "metaDescription": "Brazil faced the Netherlands in the thrilling 1998 World Cup Semi-Final, with Ronaldo shining before a dramatic penalty shootout.",
    "tacticalAnalysis": "In this Semi-Final clash, Brazil's 4-4-2 formation tried to utilize space down the wings, while Ronaldinho and Rivaldo created opportunities for Ronaldo up front. The Brazilian midfield saw Dunga playing a pivotal role defensively, shielding the backline and supporting the attack when possible. Conversely, the Netherlands deployed a 4-3-3, emphasizing Wing play through Overmars and controlling the center with Cocu and Seedorf, who tried to dominate possession. The key tactical battle was between Brazil’s defense, led by Aldair and Roberto Carlos, and the attacking trio of Bergkamp, Kluivert, and Overmars. While Brazil took the lead, the Dutch equalised late in regular time, showcasing their resilience and ability to create chances. The match ended in penalties, where Brazil, bolstered by Taffarel's saves, ultimately triumphed.",
    "keyMoments": [
      "46' - Ronaldo opens the scoring for Brazil.",
      "87' - Kluivert scores a late equaliser.",
      "120' - Penalty shootout begins.",
      "N/A - Brazil wins the shootout 4-2.",
      "N/A - Taffarel saves key penalties for Brazil."
    ],
    "historicalSignificance": "This match is remembered for its intensity and drama, as Brazil navigated a tough challenge to defend their title. It highlighted Ronaldo's pivotal role and the resilience of the Netherlands, ultimately leading Brazil to the final.",
    "topPerformers": [
      {
        "name": "Taffarel",
        "side": "home",
        "position": "GK",
        "rating": 9.2,
        "note": "Crucial saves in the penalty shootout, establishing himself as a hero."
      },
      {
        "name": "Ronaldo",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Scored the crucial first goal and was a constant threat."
      },
      {
        "name": "Kluivert",
        "side": "away",
        "position": "ST",
        "rating": 8.5,
        "note": "Equalised late and alongside Bergkamp, was a key part of the attack."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Germany vs Croatia — 1998 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "germany-vs-croatia-1998-qf",
    "tournament": "FIFA World Cup 1998",
    "year": 1998,
    "stage": "Quarter-Final",
    "date": "July 4, 1998",
    "venue": "Parc des Princes",
    "city": "Paris, France",
    "home": {
      "name": "Germany",
      "flag": "🇩🇪",
      "formation": "3-4-1-2",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Oliver Kahn",
        "Matthias Sammer",
        "Markus Babbel",
        "Jürgen Kohler",
        "Thomas Häßler",
        "Jens Jeremies",
        "Dietmar Hamann",
        "Christian Wörns",
        "Andreas Möller",
        "Rudi Völler",
        "Oliver Bierhoff"
      ],
      "score": 0
    },
    "away": {
      "name": "Croatia",
      "flag": "🇭🇷",
      "formation": "4-4-2",
      "color": "#CC1122",
      "colorDim": "rgba(204,17,34,0.18)",
      "players": [
        "Dražen Ladić",
        "Slaven Bilić",
        "Dario Šimić",
        "Igor Štimac",
        "Robert Jarni",
        "Zvonimir Boban",
        "Alen Bokšić",
        "Danijel Šuker",
        "Vlaović",
        "Mario Stanić",
        "Goran Vlaović"
      ],
      "score": 3
    },
    "status": "FT",
    "xG": {
      "home": 0.85,
      "away": 2.35
    },
    "possession": {
      "home": 54,
      "away": 46
    },
    "timeline": [
      {
        "minute": "3'",
        "side": "away",
        "player": "Danijel Šuker",
        "type": "goal",
        "description": "Šuker scores with a brilliant individual effort."
      },
      {
        "minute": "22'",
        "side": "away",
        "player": "Robert Jarni",
        "type": "goal",
        "description": "Jarni doubles the lead with a powerful shot from outside the box."
      },
      {
        "minute": "46'",
        "side": "home",
        "player": "Rudi Völler",
        "type": "sub",
        "description": "Völler comes off for a tactical change."
      },
      {
        "minute": "61'",
        "side": "away",
        "player": "Goran Vlaović",
        "type": "goal",
        "description": "Vlaović scores the third goal with a close-range finish."
      },
      {
        "minute": "68'",
        "side": "home",
        "player": "Slaven Bilić",
        "type": "red",
        "description": "Bilić is sent off after a clash with Völler."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 14,
        "homeWidth": 46,
        "awayWidth": 54
      },
      {
        "label": "Shots on Target",
        "home": 3,
        "away": 7,
        "homeWidth": 30,
        "awayWidth": 70
      },
      {
        "label": "Possession",
        "home": 54,
        "away": 46,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Passes",
        "home": 320,
        "away": 270,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Pass Accuracy",
        "home": "80%",
        "away": "72%",
        "homeWidth": 80,
        "awayWidth": 72
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 3,
        "homeWidth": 66,
        "awayWidth": 34
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 12,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "xG",
        "home": "0.85",
        "away": "2.35",
        "homeWidth": 26,
        "awayWidth": 74
      }
    ],
    "metaDescription": "Historic match where Croatia eliminated Germany in the 1998 World Cup quarter-finals with a stunning 3-0 victory.",
    "tacticalAnalysis": "Germany lined up in a 3-4-1-2 formation, relying on their experienced back three and two wing-backs, Häßler and Wörns, to provide width. They aimed to control the midfield through Hamann and Jeremies, but struggled against Croatia's press. Croatia, utilizing a 4-4-2 formation, effectively used Boban's creativity and Šuker's pace on the break. The goals came from individual brilliance; Šuker showcased his skills after a quick transition, Jarni’s long-range effort stunned Kahn, and Vlaović's close-range finish capitalized on Germany's defensive lapses. Manager Bilić's decision to press high paid off, leading to crucial turnovers that increased Croatia's offensive threats.",
    "keyMoments": [
      "3' - Šuker opens the scoring, setting the tone for Croatia.",
      "22' - Jarni scores, extending the lead to 2-0.",
      "61' - Vlaović scores third goal, sealing the match.",
      "68' - Bilić receives a red card, affecting team dynamics."
    ],
    "historicalSignificance": "This match marked a pivotal moment in Croatian football history, as it was their first time reaching a World Cup semi-final. By defeating the defending champions, Germany, Croatia established itself on the world stage and showcased the talent of its golden generation.",
    "topPerformers": [
      {
        "name": "Danijel Šuker",
        "side": "away",
        "position": "ST",
        "rating": 9.5,
        "note": "His brilliant goal and overall offensive play were key in Croatia's success."
      },
      {
        "name": "Oliver Kahn",
        "side": "home",
        "position": "GK",
        "rating": 7,
        "note": "Despite the scoreline, Kahn made several crucial saves to keep the game close."
      },
      {
        "name": "Robert Jarni",
        "side": "away",
        "position": "LB",
        "rating": 8.2,
        "note": "Jarni's goal and defensive prowess contributed significantly to Croatia's victory."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Cameroon vs Argentina — 1990 Group Stage (Group B)
  // ─────────────────────────────────────────────
  {
    "id": "cameroon-vs-argentina-1990-group",
    "tournament": "FIFA World Cup 1990",
    "year": 1990,
    "stage": "Group Stage (Group B)",
    "date": "June 8, 1990",
    "venue": "Stadio Giuseppe Meazza",
    "city": "Milan, Italy",
    "home": {
      "name": "Cameroon",
      "flag": "🇨🇲",
      "formation": "3-5-2",
      "color": "#007A5E",
      "colorDim": "rgba(0,122,94,0.18)",
      "players": [
        "Ndtoungou Mpinda",
        "Mouko",
        "Massing",
        "Tchato",
        "Kana-Biyick",
        "Ebénézer",
        "Biyick",
        "Milla",
        "Mouakeu",
        "Sorelle",
        "Mvondo"
      ],
      "score": 1
    },
    "away": {
      "name": "Argentina",
      "flag": "🇦🇷",
      "formation": "3-5-2",
      "color": "#74BBFB",
      "colorDim": "rgba(116,187,251,0.18)",
      "players": [
        "Goycochea",
        "Cuchufo",
        "Ruggeri",
        "Burgos",
        "Giusti",
        "Maradona",
        "Simione",
        "Redondo",
        "Caniggia",
        "Burruchaga",
        "Klinsmann"
      ],
      "score": 0
    },
    "status": "FT",
    "xG": {
      "home": 1.05,
      "away": 0.68
    },
    "possession": {
      "home": 38,
      "away": 62
    },
    "timeline": [
      {
        "minute": "67'",
        "side": "home",
        "player": "Milla",
        "type": "goal",
        "description": "Roger Milla heads the ball into the net after a corner."
      },
      {
        "minute": "58'",
        "side": "home",
        "player": "Massing",
        "type": "red",
        "description": "Massing sent off for a second yellow card."
      },
      {
        "minute": "89'",
        "side": "home",
        "player": "Kana-Biyick",
        "type": "red",
        "description": "Kana-Biyick sent off for a foul."
      },
      {
        "minute": "45'",
        "side": "away",
        "player": "Ruggeri",
        "type": "yellow",
        "description": "Ruggeri receives a yellow card for a late challenge."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 6,
        "away": 10,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Shots on Target",
        "home": 2,
        "away": 3,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "Possession",
        "home": 38,
        "away": 62,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Passes",
        "home": 250,
        "away": 400,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Pass Accuracy",
        "home": "66%",
        "away": "75%",
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Corners",
        "home": 3,
        "away": 5,
        "homeWidth": 38,
        "awayWidth": 62
      },
      {
        "label": "Fouls",
        "home": 19,
        "away": 12,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "xG",
        "home": "1.05",
        "away": "0.68",
        "homeWidth": 38,
        "awayWidth": 62
      }
    ],
    "metaDescription": "In a shocking upset, Cameroon defeated Argentina 1-0 in their 1990 World Cup opener, creating a historic moment in football.",
    "tacticalAnalysis": "Cameroon deployed a 3-5-2 formation that emphasized defensive solidity, allowing the wingbacks to push forward for width. The center-backs utilized tight marking against Argentina's key attackers, stifling space for Maradona and Caniggia. Argentina, also in a 3-5-2, struggled with cohesion, especially after losing Ruggeri to a yellow card in the first half. Argentina's reliance on Maradona for creativity left them vulnerable to Cameroon’s organized pressing style, enabling them to win midfield battles through increased numbers. The game was punctuated by key moments such as Biyick's 67th-minute header that stunned the world, showcasing Cameroon's resilience despite their two red cards, while Argentina's frustration mounted as they failed to convert chances.",
    "keyMoments": [
      "67' - Milla's header puts Cameroon ahead, marking a historic upset.",
      "58' - Massing red card decreases Cameroon's numbers but they hold strong.",
      "89' - Kana-Biyick sent off, increasing pressure on Cameroon.",
      "45' - Ruggeri cautioned, setting the stage for Argentina's defensive struggles."
    ],
    "historicalSignificance": "This match is remembered as one of the greatest upsets in World Cup history, where Cameroon triumphed against the defending champions Argentina. It not only marked the rise of African football on the global stage but also signaled the beginning of Roger Milla's legendary World Cup journey.",
    "topPerformers": [
      {
        "name": "Ndtoungou Mpinda",
        "side": "home",
        "position": "GK",
        "rating": 8.7,
        "note": "Made crucial saves to keep Argentina at bay throughout the match."
      },
      {
        "name": "Roger Milla",
        "side": "home",
        "position": "ST",
        "rating": 9,
        "note": "Scored the winning goal and was a constant threat in attack."
      },
      {
        "name": "Diego Maradona",
        "side": "away",
        "position": "CM",
        "rating": 7.5,
        "note": "Despite the loss, he attempted to create opportunities but was tightly marked."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // West Germany vs Netherlands — 1990 Round of 16
  // ─────────────────────────────────────────────
  {
    "id": "west-germany-vs-netherlands-1990-r16",
    "tournament": "FIFA World Cup 1990",
    "year": 1990,
    "stage": "Round of 16",
    "date": "June 24, 1990",
    "venue": "Stadio Giuseppe Meazza",
    "city": "Milan, Italy",
    "home": {
      "name": "West Germany",
      "flag": "🇩🇪",
      "formation": "3-5-2",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Bodo Illgner",
        "Thomas Berthold",
        "Karl-Heinz Riedle",
        "Jürgen Klinsmann",
        "Lothar Matthäus",
        "Andreas Brehme",
        "Wolfgang Rolff",
        "Stefan Reuter",
        "Rudi Völler",
        "Paul Breitner",
        "Pierre Littbarski"
      ],
      "score": 2
    },
    "away": {
      "name": "Netherlands",
      "flag": "🇳🇱",
      "formation": "4-3-3",
      "color": "#FF6200",
      "colorDim": "rgba(255,98,0,0.18)",
      "players": [
        "Ronald Koeman",
        "Frank Rijkaard",
        "Marcel desailly",
        "Michel Prudhomme",
        "Wim Jonk",
        "Ruud Gullit",
        "Marco van Basten",
        "Dennis Bergkamp",
        "Edgar Davids",
        "Ronald de Boer",
        "Arjen Robben"
      ],
      "score": 1
    },
    "status": "FT",
    "xG": {
      "home": 1.75,
      "away": 1.5
    },
    "possession": {
      "home": 55,
      "away": 45
    },
    "timeline": [
      {
        "minute": "28'",
        "side": "home",
        "player": "Jürgen Klinsmann",
        "type": "goal",
        "description": "Opened the scoring with a well-placed shot from inside the box."
      },
      {
        "minute": "38'",
        "side": "home",
        "player": "Andreas Brehme",
        "type": "goal",
        "description": "Doubled the lead with a powerful strike from distance."
      },
      {
        "minute": "66'",
        "side": "away",
        "player": "Marco van Basten",
        "type": "goal",
        "description": "Pulled one back with a classic volley from a cross."
      },
      {
        "minute": "69'",
        "side": "home",
        "player": "Rudi Völler",
        "type": "red",
        "description": "Sent off after a spat with Frank Rijkaard."
      },
      {
        "minute": "69'",
        "side": "away",
        "player": "Frank Rijkaard",
        "type": "red",
        "description": "Sent off along with Völler after an altercation."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 8,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 3,
        "homeWidth": 67,
        "awayWidth": 33
      },
      {
        "label": "Possession",
        "home": 55,
        "away": 45,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Passes",
        "home": 320,
        "away": 250,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "78%",
        "homeWidth": 59,
        "awayWidth": 41
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 10,
        "away": 15,
        "homeWidth": 40,
        "awayWidth": 60
      },
      {
        "label": "xG",
        "home": "1.75",
        "away": "1.50",
        "homeWidth": 54,
        "awayWidth": 46
      }
    ],
    "metaDescription": "West Germany defeats Netherlands in a dramatic Round of 16 match at the FIFA World Cup 1990, showcasing intense rivalry and fireworks.",
    "tacticalAnalysis": "In this Round of 16 clash, West Germany employed a 3-5-2 formation that allowed them to dominate the midfield with three central players while maintaining depth at the back. The wing-backs provided width and often joined the attack, particularly through Brehme's powerful runs. The creativity and finishing of players like Klinsmann and Völler were critical in West Germany's attacking play, quickly transitioning from defense to offense. The Netherlands, using a 4-3-3 setup, tried to exploit the flanks, relying on the width provided by their wingers. However, as the game progressed, their midfield struggled to maintain possession against a well-organized German defense. The match dramatically shifted when both Völler and Rijkaard were shown red cards, which further fueled the rivalry between the two teams but did not change the outcome.",
    "keyMoments": [
      "28' - Klinsmann scores to give West Germany the lead.",
      "38' - Brehme doubles the score with a long-range shot.",
      "66' - Van Basten scores for Netherlands, igniting hopes for a comeback.",
      "69' - Völler and Rijkaard sent off after confrontation."
    ],
    "historicalSignificance": "This match is remembered for the intense rivalry between West Germany and the Netherlands, reflecting decades of competitive spirit. It marked a significant moment in World Cup history, showcasing the explosive nature of knockout football. The match also served as a precursor to the Netherlands' resurgence in international football.",
    "topPerformers": [
      {
        "name": "Andreas Brehme",
        "side": "home",
        "position": "CM",
        "rating": 8.5,
        "note": "Scored the second goal and was instrumental in transitioning play."
      },
      {
        "name": "Marco van Basten",
        "side": "away",
        "position": "ST",
        "rating": 8,
        "note": "Came off the bench to score and showed great attacking presence."
      },
      {
        "name": "Jürgen Klinsmann",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Created constant threats, scored the opening goal, and was pivotal in the offense."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // England vs Cameroon — 1990 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "england-vs-cameroon-1990-qf",
    "tournament": "FIFA World Cup 1990",
    "year": 1990,
    "stage": "Quarter-Final",
    "date": "July 1, 1990",
    "venue": "Stadio San Paolo",
    "city": "Naples, Italy",
    "home": {
      "name": "England",
      "flag": "🇬🇧",
      "formation": "3-5-2",
      "color": "#CF142B",
      "colorDim": "rgba(207,20,43,0.18)",
      "players": [
        "Peter Shilton",
        "Gary Lineker",
        "Tony Adams",
        "Des Walker",
        "John Barnes",
        "David Platt",
        "Paul Gascoigne",
        "Steve McMahon",
        "Gary Parker",
        "Lee Dixon",
        "Alan Shearer"
      ],
      "score": 3
    },
    "away": {
      "name": "Cameroon",
      "flag": "🇨🇲",
      "formation": "4-4-2",
      "color": "#007A5E",
      "colorDim": "rgba(0,122,94,0.18)",
      "players": [
        "Thomas Nkono",
        "Camille Njoh",
        "Benjamin Massing",
        "Jean-Claude Gimel",
        "Emile Mbouh",
        "Hugo Biyong",
        "Guillaume Kanhé",
        "François Omam-Biyik",
        "Roger Milla",
        "Pierre Wome",
        "Eugène Ekeke"
      ],
      "score": 2
    },
    "status": "AET",
    "xG": {
      "home": 2.67,
      "away": 1.9
    },
    "possession": {
      "home": 58,
      "away": 42
    },
    "timeline": [
      {
        "minute": "25'",
        "side": "away",
        "player": "François Omam-Biyik",
        "type": "goal",
        "description": "Opened the scoring with a header from a corner."
      },
      {
        "minute": "35'",
        "side": "home",
        "player": "Gary Lineker",
        "type": "pen_goal",
        "description": "Converted a penalty to equalize after a foul in the box."
      },
      {
        "minute": "65'",
        "side": "away",
        "player": "Eugène Ekeke",
        "type": "goal",
        "description": "Put Cameroon ahead again with a close-range shot."
      },
      {
        "minute": "82'",
        "side": "home",
        "player": "Gary Lineker",
        "type": "pen_goal",
        "description": "Scored another penalty to level the match."
      },
      {
        "minute": "100'",
        "side": "home",
        "player": "David Platt",
        "type": "goal",
        "description": "Scored the decisive goal in extra time."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 14,
        "away": 9,
        "homeWidth": 61,
        "awayWidth": 39
      },
      {
        "label": "Shots on Target",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Possession",
        "home": 58,
        "away": 42,
        "homeWidth": 58,
        "awayWidth": 42
      },
      {
        "label": "Passes",
        "home": 400,
        "away": 300,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Pass Accuracy",
        "home": "85%",
        "away": "78%",
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Corners",
        "home": 5,
        "away": 3,
        "homeWidth": 63,
        "awayWidth": 37
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "2.67",
        "away": "1.90",
        "homeWidth": 58,
        "awayWidth": 42
      }
    ],
    "metaDescription": "England faced Cameroon in a thrilling 1990 World Cup Quarter-Final, showcasing dramatic goals and the historic rise of African football.",
    "tacticalAnalysis": "In this quarter-final clash, England deployed a 3-5-2 formation, utilizing a three-man defense anchored by Tony Adams, complemented by wing-backs like Lee Dixon and John Barnes who provided width and defensive support. Gary Lineker's positioning as a second striker allowed him to capitalize on defensive lapses. Cameroon lined up in a 4-4-2, with Emile Mbouh and Hugo Biyong working tirelessly to press England’s midfield. The dichotomy between Africa's first World Cup quarter-finalists and England introduced a fascinating tactical battle, with Cameroon initially taking the lead through set-pieces. England's resilience was evident as they converted two penalties, emphasizing their composure under pressure, leading to David Platt's crucial goal in extra time, demonstrating their adaptation and strategic depth throughout the match.",
    "keyMoments": [
      "25' - Omam-Biyik scores, giving Cameroon an early lead.",
      "35' - Lineker equalizes with a penalty, showing England's fighting spirit.",
      "65' - Ekeke's goal reminds everyone of Cameroon's tenacity.",
      "82' - Lineker scores another penalty, shifting momentum to England.",
      "100' - Platt's golden goal seals the historic victory for England."
    ],
    "historicalSignificance": "This match marked a pivotal moment in World Cup history as Cameroon became the first African nation to reach the quarter-finals, sparking hope and enthusiasm across the continent. The match is remembered for its drama, the emergence of Gary Lineker, and the cultural significance of Roger Milla's iconic celebrations.",
    "topPerformers": [
      {
        "name": "Gary Lineker",
        "side": "home",
        "position": "ST",
        "rating": 9,
        "note": "His two penalty goals were vital in securing the win."
      },
      {
        "name": "David Platt",
        "side": "home",
        "position": "CM",
        "rating": 8.8,
        "note": "Scored the crucial goal in extra time that advanced England."
      },
      {
        "name": "Eugène Ekeke",
        "side": "away",
        "position": "ST",
        "rating": 8.5,
        "note": "Showcased skill by scoring and challenging England's defense."
      },
      {
        "name": "Roger Milla",
        "side": "away",
        "position": "LW",
        "rating": 8.3,
        "note": "His creativity and dancing celebration left an indelible mark."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // West Germany vs France — 1982 Semi-Final
  // ─────────────────────────────────────────────
  {
    "id": "west-germany-vs-france-1982-sf",
    "tournament": "FIFA World Cup 1982",
    "year": 1982,
    "stage": "Semi-Final",
    "date": "July 8, 1982",
    "venue": "Estadio Ramón Sánchez Pizjuán",
    "city": "Seville, Spain",
    "home": {
      "name": "West Germany",
      "flag": "🇩🇪",
      "formation": "4-4-2",
      "color": "#E8E8E8",
      "colorDim": "rgba(232,232,232,0.18)",
      "players": [
        "Peter Shilton",
        "Karl-Heinz Förster",
        "Paul Breitner",
        "Hans-Peter Briegel",
        "Benedikt Höwedes",
        "Felix Magath",
        "Wolfgang Dremmler",
        "Klaus Fischer",
        "Michael, Rudi Völler",
        "Horst Hrubesch",
        "Pierre Littbarski"
      ],
      "score": 3
    },
    "away": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-3-3",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Jean-Luc Ettori",
        "Marius Trésor",
        "Luis Fernández",
        "Dominique Badji",
        "Philippe Vercruysse",
        "Gérard Soler",
        "Michel Platini",
        "Bruno Bellone",
        "Maxime Bossis",
        "Jean-Pierre Papin",
        "Luis Deschamps"
      ],
      "score": 3
    },
    "status": "PSO",
    "penaltyScore": "5-4",
    "xG": {
      "home": 2.95,
      "away": 2.85
    },
    "possession": {
      "home": 51,
      "away": 49
    },
    "timeline": [
      {
        "minute": "17'",
        "side": "away",
        "player": "Marius Trésor",
        "type": "goal",
        "description": "Trésor scores from a powerful header after a corner."
      },
      {
        "minute": "57'",
        "side": "home",
        "player": "Klaus Fischer",
        "type": "goal",
        "description": "Fischer equalizes with a superb volley from the edge of the box."
      },
      {
        "minute": "70'",
        "side": "away",
        "player": "Michel Platini",
        "type": "goal",
        "description": "Platini scores with a precise strike to regain the lead."
      },
      {
        "minute": "76'",
        "side": "home",
        "player": "Horst Hrubesch",
        "type": "goal",
        "description": "Hrubesch makes it 2-2 with a close-range shot."
      },
      {
        "minute": "98'",
        "side": "away",
        "player": "Michel Platini",
        "type": "goal",
        "description": "Platini nets his second to make it 3-1."
      },
      {
        "minute": "100'",
        "side": "home",
        "player": "Klaus Fischer",
        "type": "goal",
        "description": "Fischer strikes again, bringing West Germany back to 3-3."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 12,
        "away": 10,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Shots on Target",
        "home": 5,
        "away": 4,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Possession",
        "home": 51,
        "away": 49,
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Passes",
        "home": 380,
        "away": 350,
        "homeWidth": 52,
        "awayWidth": 48
      },
      {
        "label": "Pass Accuracy",
        "home": "80%",
        "away": "79%",
        "homeWidth": 51,
        "awayWidth": 49
      },
      {
        "label": "Corners",
        "home": 6,
        "away": 4,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "Fouls",
        "home": 15,
        "away": 10,
        "homeWidth": 60,
        "awayWidth": 40
      },
      {
        "label": "xG",
        "home": "2.95",
        "away": "2.85",
        "homeWidth": 51,
        "awayWidth": 49
      }
    ],
    "metaDescription": "A historic and dramatic World Cup semi-final between West Germany and France, ending in a thrilling penalty shootout.",
    "tacticalAnalysis": "The match showcased contrasting styles, with West Germany employing a 4-4-2 formation focusing on width and vertical play, utilizing the pace of their wingers and the physicality of their strikers. France, adopting a 4-3-3, relied on the creativity and passing ability of Platini, supported by a solid midfield of defensive and offensive players. Both teams pressed assertively, leading to frantic transitions. Key battles unfolded in midfield, where West Germany's double pivot managed to restrict Platini's influence initially but struggled to maintain control during France's resurgence. The goals reflected mistakes in defense; especially the first French goal resulted from a failure to clear a corner, showcasing the vulnerability of West Germany in set-piece situations. As the match progressed, the physical toll saw both teams fatigue, leading to tactical adjustments, including substitutions that impacted the dynamic of the game.",
    "keyMoments": [
      "17' - Trésor's header gives France the lead, setting the tone of the match.",
      "57' - Fischer's volley equalizes, marking the start of a gripping comeback.",
      "98' - Platini scores to extend the lead to 3-1 with a remarkable effort.",
      "100' - Fischer ties it again, demonstrating West Germany's resilience.",
      "120' - The first penalty shootout in World Cup history ensues after a thrilling draw."
    ],
    "historicalSignificance": "This match is iconic for being one of the greatest World Cup games ever played. It was the first World Cup match to go to a penalty shootout, setting a precedent for future tournaments. The dramatic nature and pivotal moments have left an indelible mark on football history.",
    "topPerformers": [
      {
        "name": "Peter Shilton",
        "side": "home",
        "position": "GK",
        "rating": 9,
        "note": "Crucial saves, especially in the penalty shootout."
      },
      {
        "name": "Klaus Fischer",
        "side": "home",
        "position": "ST",
        "rating": 8.8,
        "note": "Played a key role in equalizing twice, showcasing his striking quality."
      },
      {
        "name": "Michel Platini",
        "side": "away",
        "position": "CM",
        "rating": 9.1,
        "note": "Dominated the midfield and scored two important goals."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // Brazil vs France — 1986 Quarter-Final
  // ─────────────────────────────────────────────
  {
    "id": "brazil-vs-france-1986-qf",
    "tournament": "FIFA World Cup 1986",
    "year": 1986,
    "stage": "Quarter-Final",
    "date": "June 21, 1986",
    "venue": "Estadio Jalisco",
    "city": "Guadalajara, Mexico",
    "home": {
      "name": "Brazil",
      "flag": "🇧🇷",
      "formation": "4-2-2-2",
      "color": "#F7B731",
      "colorDim": "rgba(247,183,49,0.18)",
      "players": [
        "Carlos",
        "Ricardo Gomes",
        "Mauro Galvão",
        "Jorginho",
        "Dunga",
        "Sócrates",
        "Falcão",
        "Zico",
        "Careca",
        "Romário",
        "Bebeto"
      ],
      "score": 1
    },
    "away": {
      "name": "France",
      "flag": "🇫🇷",
      "formation": "4-3-3",
      "color": "#1E5AA8",
      "colorDim": "rgba(30,90,168,0.18)",
      "players": [
        "Bats",
        "Latorre",
        "Giresse",
        "Tigana",
        "Bertini",
        "Bossis",
        "Platini",
        "Lacombe",
        "Six",
        "Ferrer",
        "Genghini"
      ],
      "score": 1
    },
    "status": "PSO",
    "penaltyScore": "3-4",
    "xG": {
      "home": 2.57,
      "away": 2.34
    },
    "possession": {
      "home": 56,
      "away": 44
    },
    "timeline": [
      {
        "minute": "19'",
        "side": "home",
        "player": "Careca",
        "type": "goal",
        "description": "Careca scores with a volley from a corner."
      },
      {
        "minute": "38'",
        "side": "away",
        "player": "Platini",
        "type": "goal",
        "description": "Platini equalizes with a well-placed shot."
      },
      {
        "minute": "72'",
        "side": "home",
        "player": "Zico",
        "type": "pen_miss",
        "description": "Zico's penalty is saved by Bats."
      },
      {
        "minute": "105'",
        "side": "neutral",
        "player": "Sócrates",
        "type": "pen_miss",
        "description": "Sócrates hits the post during the shootout."
      },
      {
        "minute": "120'",
        "side": "neutral",
        "player": "Platini",
        "type": "pen_goal",
        "description": "Platini converts the winning penalty in the shootout."
      }
    ],
    "stats": [
      {
        "label": "Shots",
        "home": 18,
        "away": 15,
        "homeWidth": 55,
        "awayWidth": 45
      },
      {
        "label": "Shots on Target",
        "home": 7,
        "away": 6,
        "homeWidth": 54,
        "awayWidth": 46
      },
      {
        "label": "Possession",
        "home": 56,
        "away": 44,
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Passes",
        "home": 600,
        "away": 450,
        "homeWidth": 57,
        "awayWidth": 43
      },
      {
        "label": "Pass Accuracy",
        "home": "82%",
        "away": "78%",
        "homeWidth": 56,
        "awayWidth": 44
      },
      {
        "label": "Corners",
        "home": 9,
        "away": 2,
        "homeWidth": 82,
        "awayWidth": 18
      },
      {
        "label": "Fouls",
        "home": 14,
        "away": 18,
        "homeWidth": 43,
        "awayWidth": 57
      },
      {
        "label": "xG",
        "home": "2.57",
        "away": "2.34",
        "homeWidth": 53,
        "awayWidth": 47
      }
    ],
    "metaDescription": "Brazil and France delivered a thrilling encounter in the 1986 World Cup Quarter-Final, ending in a dramatic penalty shootout.",
    "tacticalAnalysis": "In this iconic match, Brazil set up in a 4-2-2-2 formation, emphasizing their attacking prowess with a double pivot of Dunga and Falcão to support the creative talents of Zico and Sócrates in advanced roles. Careca played as a traditional striker alongside Romário, allowing for intricate link-up play. France utilized a 4-3-3 system, with Platini as the central playmaker, flanked by Giresse and Tigana. Their midfield dominance was crucial in transitioning the ball to the attacking trio of Lacombe, Six, and Ferrer. Key tactical battles unfolded between Brazil's full-backs and France's wingers, while the midfield duels dictated the pace of the game. The match showcased Brazil's flair versus France's tactical discipline, culminating in a memorable shootout after a tightly contested 90 minutes and extra time.",
    "keyMoments": [
      "19' - Careca scores to give Brazil the lead, a crucial early goal.",
      "38' - Platini equalizes, showcasing France's resilience.",
      "72' - Zico misses a penalty, altering the game's momentum.",
      "105' - Sócrates hits the post during the penalty shootout, a heartbreaking moment.",
      "120' - Platini converts the shootout winner, sealing the dramatic victory for France."
    ],
    "historicalSignificance": "This match is regarded as one of the greatest in World Cup history, exemplifying the intense rivalry and skill of both teams. The narrative of Brazil's flair versus France's tactical acumen has become legendary, and the way it was decided by penalties added to its drama.",
    "topPerformers": [
      {
        "name": "Zico",
        "side": "home",
        "position": "CAM",
        "rating": 9.2,
        "note": "Displayed extraordinary creativity and control, despite the missed penalty."
      },
      {
        "name": "Platini",
        "side": "away",
        "position": "CM",
        "rating": 8.8,
        "note": "Key influence on the pitch; scored and converted decisive penalties."
      },
      {
        "name": "Careca",
        "side": "home",
        "position": "ST",
        "rating": 8.5,
        "note": "Opened the scoring with a fantastic volley, showcasing his finishing skills."
      }
    ]
  },
];

import { supabase } from "./supabase";

// Helper to get a match by ID (Async with Supabase + Static Fallback)
export async function getMatch(id: string): Promise<Match | undefined> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from("matches").select("*").eq("id", id).single();
      if (!error && data) {
        return {
          id: data.id,
          tournament: data.tournament,
          year: data.year,
          stage: data.stage,
          date: data.date,
          venue: data.venue,
          city: data.city,
          status: data.status,
          penaltyScore: data.penalty_score,
          metaDescription: data.meta_description,
          tacticalAnalysis: data.tactical_analysis,
          historicalSignificance: data.historical_significance,
          home: {
            name: data.home_name,
            flag: data.home_flag,
            formation: data.home_formation,
            color: data.home_color,
            colorDim: data.home_color_dim,
            score: data.home_score,
            players: data.home_players || [],
          },
          away: {
            name: data.away_name,
            flag: data.away_flag,
            formation: data.away_formation,
            color: data.away_color,
            colorDim: data.away_color_dim,
            score: data.away_score,
            players: data.away_players || [],
          },
          xG: { home: Number(data.home_xg), away: Number(data.away_xg) },
          possession: { home: data.home_possession, away: data.away_possession },
          timeline: data.timeline || [],
          stats: data.stats || [],
          keyMoments: data.key_moments || [],
          topPerformers: data.top_performers || [],
        };
      }
    } catch (e) {
      console.warn("Supabase fetch failed, falling back to static data", e);
    }
  }
  return MATCHES.find((m) => m.id === id);
}

// Helper to get all match IDs (for generateStaticParams)
export async function getAllMatchIds(): Promise<string[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from("matches").select("id");
      if (!error && data && data.length > 0) {
        return data.map((m) => m.id);
      }
    } catch (e) {
      console.warn("Supabase fetch failed, falling back to static data", e);
    }
  }
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
