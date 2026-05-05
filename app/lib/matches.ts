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
