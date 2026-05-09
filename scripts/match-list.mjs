// 待生成的比赛列表，按优先级排序
// home/away color = 球队在球场可视化中的主色调

export const TEAM_COLORS = {
  "France":        { color: "#1E5AA8", colorDim: "rgba(30,90,168,0.18)" },
  "Brazil":        { color: "#F7B731", colorDim: "rgba(247,183,49,0.18)" },
  "Germany":       { color: "#E8E8E8", colorDim: "rgba(232,232,232,0.18)" },
  "West Germany":  { color: "#E8E8E8", colorDim: "rgba(232,232,232,0.18)" },
  "Argentina":     { color: "#74BBFB", colorDim: "rgba(116,187,251,0.18)" },
  "England":       { color: "#CF142B", colorDim: "rgba(207,20,43,0.18)" },
  "Spain":         { color: "#CC0000", colorDim: "rgba(204,0,0,0.18)" },
  "Italy":         { color: "#0033A0", colorDim: "rgba(0,51,160,0.18)" },
  "Netherlands":   { color: "#FF6200", colorDim: "rgba(255,98,0,0.18)" },
  "Portugal":      { color: "#006600", colorDim: "rgba(0,102,0,0.18)" },
  "Croatia":       { color: "#CC1122", colorDim: "rgba(204,17,34,0.18)" },
  "Belgium":       { color: "#EDCB27", colorDim: "rgba(237,203,39,0.18)" },
  "Uruguay":       { color: "#4EABDF", colorDim: "rgba(78,171,223,0.18)" },
  "Morocco":       { color: "#C1272D", colorDim: "rgba(193,39,45,0.18)" },
  "Japan":         { color: "#BC002D", colorDim: "rgba(188,0,45,0.18)" },
  "South Korea":   { color: "#CD2E3A", colorDim: "rgba(205,46,58,0.18)" },
  "USA":           { color: "#3C3B6E", colorDim: "rgba(60,59,110,0.18)" },
  "Mexico":        { color: "#006847", colorDim: "rgba(0,104,71,0.18)" },
  "Sweden":        { color: "#006AA7", colorDim: "rgba(0,106,167,0.18)" },
  "Poland":        { color: "#DC143C", colorDim: "rgba(220,20,60,0.18)" },
  "Switzerland":   { color: "#D52B1E", colorDim: "rgba(213,43,30,0.18)" },
  "Senegal":       { color: "#00853F", colorDim: "rgba(0,133,63,0.18)" },
  "Cameroon":      { color: "#007A5E", colorDim: "rgba(0,122,94,0.18)" },
  "Australia":     { color: "#FFD700", colorDim: "rgba(255,215,0,0.18)" },
  "Ghana":         { color: "#FFD700", colorDim: "rgba(255,215,0,0.18)" },
  "Colombia":      { color: "#FCD116", colorDim: "rgba(252,209,22,0.18)" },
  "Chile":         { color: "#D52B1E", colorDim: "rgba(213,43,30,0.18)" },
  "Costa Rica":    { color: "#002B7F", colorDim: "rgba(0,43,127,0.18)" },
  "Russia":        { color: "#CC0000", colorDim: "rgba(204,0,0,0.18)" },
  "Denmark":       { color: "#C60C30", colorDim: "rgba(198,12,48,0.18)" },
  "Turkey":        { color: "#E30A17", colorDim: "rgba(227,10,23,0.18)" },
  "Algeria":       { color: "#007A3D", colorDim: "rgba(0,122,61,0.18)" },
  "Nigeria":       { color: "#008751", colorDim: "rgba(0,135,81,0.18)" },
  "Ecuador":       { color: "#FFD100", colorDim: "rgba(255,209,0,0.18)" },
  "Paraguay":      { color: "#D52B1E", colorDim: "rgba(213,43,30,0.18)" },
  "Romania":       { color: "#FFD700", colorDim: "rgba(255,215,0,0.18)" },
  "Yugoslavia":    { color: "#C6363C", colorDim: "rgba(198,54,60,0.18)" },
  "Ireland":       { color: "#169B62", colorDim: "rgba(22,155,98,0.18)" },
  "Saudi Arabia":  { color: "#006C35", colorDim: "rgba(0,108,53,0.18)" },
  "Ukraine":       { color: "#005BBB", colorDim: "rgba(0,91,187,0.18)" },
  "Hungary":       { color: "#C8102E", colorDim: "rgba(200,16,46,0.18)" },
  "Bulgaria":      { color: "#00966E", colorDim: "rgba(0,150,110,0.18)" },
  "Czechoslovakia":{ color: "#D7141A", colorDim: "rgba(215,20,26,0.18)" },
  "Iran":          { color: "#239F40", colorDim: "rgba(35,159,64,0.18)" },
  "Wales":         { color: "#C8102E", colorDim: "rgba(200,16,46,0.18)" },
  "Canada":        { color: "#FF0000", colorDim: "rgba(255,0,0,0.18)" },
};

// 格式: { id, tournament, year, stage, date, venue, city, home, away, homeScore, awayScore, status, penaltyScore?, notes }
export const MATCHES_TO_GENERATE = [

  // ═══════════════════════════════════════════════
  // 2022 FIFA WORLD CUP — QATAR
  // ═══════════════════════════════════════════════

  // Group Stage (iconic upsets)
  {
    id: "saudi-arabia-vs-argentina-2022-group",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Group Stage (Group C)",
    date: "November 22, 2022", venue: "Lusail Stadium", city: "Lusail, Qatar",
    home: "Saudi Arabia", away: "Argentina", homeScore: 2, awayScore: 1, status: "FT",
    notes: "One of the greatest upsets in World Cup history. Argentina were unbeaten in 36 matches. Messi opened scoring from penalty. Saudi Arabia's high defensive line caught Argentina's attackers offside repeatedly (3 disallowed goals), then scored two second-half goals in 5 minutes. Manager Hervé Renard's tactical masterclass."
  },
  {
    id: "germany-vs-japan-2022-group",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Group Stage (Group E)",
    date: "November 23, 2022", venue: "Khalifa International Stadium", city: "Ar-Rayyan, Qatar",
    home: "Germany", away: "Japan", homeScore: 1, awayScore: 2, status: "FT",
    notes: "Japan came back from 1-0 down after halftime substitutions by Hajime Moriyasu changed the game completely. Doan and Asano scored within 8 minutes. Germany dominated possession (73%) but Japan's counter-attacking game was devastating. Germany eventually eliminated in group stage."
  },
  {
    id: "spain-vs-costa-rica-2022-group",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Group Stage (Group E)",
    date: "November 23, 2022", venue: "Al Thumama Stadium", city: "Doha, Qatar",
    home: "Spain", away: "Costa Rica", homeScore: 7, awayScore: 0, status: "FT",
    notes: "Spain's most convincing World Cup group stage victory in years. Gavi, Ferran Torres, Marco Asensio, Carlos Soler all scored. Spain had 1021 passes vs Costa Rica's 128 — a record possession dominance. Every outfield starter contributed to the buildup play."
  },
  {
    id: "cameroon-vs-brazil-2022-group",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Group Stage (Group G)",
    date: "December 2, 2022", venue: "Lusail Stadium", city: "Lusail, Qatar",
    home: "Cameroon", away: "Brazil", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Cameroon's famous last-gasp victory through Aboubakar's 92nd minute header, but Brazil still qualified as group winners. Brazil had already secured qualification and rested key players including Neymar. Cameroon's first win in a World Cup group stage since 2002."
  },

  // Round of 16
  {
    id: "france-vs-poland-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 4, 2022", venue: "Al Thumama Stadium", city: "Doha, Qatar",
    home: "France", away: "Poland", homeScore: 3, awayScore: 1, status: "FT",
    notes: "Mbappé was irresistible with two goals including a stunning long-range strike. Giroud broke the French all-time scoring record with his 52nd international goal. Lewandowski scored consolation from penalty. France looked like genuine favourites from this performance."
  },
  {
    id: "england-vs-senegal-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 4, 2022", venue: "Al Bayt Stadium", city: "Al Khor, Qatar",
    home: "England", away: "Senegal", homeScore: 3, awayScore: 0, status: "FT",
    notes: "England were clinical in the second half after a cagey first. Jordan Henderson, Saka, and Kane scored. Bellingham was exceptional throughout the tournament. Senegal — Africa Cup of Nations holders — couldn't replicate their group stage form. England advanced to face France."
  },
  {
    id: "netherlands-vs-usa-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 3, 2022", venue: "Khalifa International Stadium", city: "Ar-Rayyan, Qatar",
    home: "Netherlands", away: "USA", homeScore: 3, awayScore: 1, status: "FT",
    notes: "Memphis Depay broke the deadlock after 10 minutes. The Netherlands were in control until USA pulled one back through Pulisic. Denzel Dumfries settled it with a third. The Netherlands showed tactical maturity under Van Gaal despite criticisms of their cautious style."
  },
  {
    id: "argentina-vs-australia-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 3, 2022", venue: "Ahmad Bin Ali Stadium", city: "Ar-Rayyan, Qatar",
    home: "Argentina", away: "Australia", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Messi's first World Cup knockout goal plus a stunning Álvarez strike put Argentina ahead. Australia's Goodwin scored with a deflected effort and pushed Argentina hard in the second half. Argentina nervous but advanced. Messi's jubilant celebration captured global attention."
  },
  {
    id: "morocco-vs-spain-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 6, 2022", venue: "Education City Stadium", city: "Ar-Rayyan, Qatar",
    home: "Morocco", away: "Spain", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "3-0",
    notes: "Morocco eliminated Spain in one of the biggest upsets of the tournament. Spain had 77% possession and 1000+ passes but couldn't find a way through Morocco's disciplined low block. Bono saved all three Spanish penalties. Morocco's tactical organisation under Regragui was extraordinary."
  },
  {
    id: "portugal-vs-switzerland-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 6, 2022", venue: "Lusail Stadium", city: "Lusail, Qatar",
    home: "Portugal", away: "Switzerland", homeScore: 6, awayScore: 1, status: "FT",
    notes: "Goncalo Ramos started instead of Ronaldo and scored a hat-trick. Portugal were breathtaking in attack. Pepe (39) scored with a header. Switzerland couldn't cope with Portugal's attacking movement. One of Portugal's greatest World Cup performances — without their most famous player."
  },
  {
    id: "brazil-vs-south-korea-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 5, 2022", venue: "Stadium 974", city: "Doha, Qatar",
    home: "Brazil", away: "South Korea", homeScore: 4, awayScore: 1, status: "FT",
    notes: "Brazil's samba football at its finest in the first half — Vinícius, Neymar (pen), Richarlison, Lucas Paquetá all scored. The players danced after goals. Paik Seung-ho's stunning long-range consolation for South Korea. Brazil looked unstoppable and were heavy favourites before their quarterfinal against Croatia."
  },
  {
    id: "croatia-vs-japan-2022-r16",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Round of 16",
    date: "December 5, 2022", venue: "Al Janoub Stadium", city: "Al Wakrah, Qatar",
    home: "Croatia", away: "Japan", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "3-1",
    notes: "Daizen Maeda gave Japan the lead, Perišić equalised brilliantly. Croatia's penalty shootout experience proved decisive — goalkeeper Livaković saved three Japanese penalties. Japan were heartbroken despite a remarkable tournament. Croatia advanced to face Brazil."
  },

  // Quarter-Finals
  {
    id: "england-vs-france-2022-qf",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Quarter-Final",
    date: "December 10, 2022", venue: "Al Bayt Stadium", city: "Al Khor, Qatar",
    home: "England", away: "France", homeScore: 1, awayScore: 2, status: "FT",
    notes: "Bukayo Saka's early penalty put England ahead. Aurélien Tchouaméni's spectacular 25-yard strike equalized. Giroud headed France into the lead. Harry Kane missed a crucial penalty in the 84th minute that would have levelled. England eliminated in heartbreaking fashion. Mbappé largely quiet but France's defensive discipline won the day."
  },
  {
    id: "morocco-vs-portugal-2022-qf",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Quarter-Final",
    date: "December 10, 2022", venue: "Al Thumama Stadium", city: "Doha, Qatar",
    home: "Morocco", away: "Portugal", homeScore: 1, awayScore: 0, status: "FT",
    notes: "En-Nesyri's towering header from Dari's cross won it for Morocco. Ronaldo came on as substitute — his last World Cup appearance. Morocco became the first African nation to reach a World Cup semi-final. The Atlas Lions' defensive organisation and counter-attacking effectiveness were masterful. An entire continent celebrated."
  },
  {
    id: "croatia-vs-brazil-2022-qf",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Quarter-Final",
    date: "December 9, 2022", venue: "Education City Stadium", city: "Ar-Rayyan, Qatar",
    home: "Croatia", away: "Brazil", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "4-2",
    notes: "Neymar scored a brilliant extra-time goal that sent Brazil into raptures. But Perišić equalised within minutes. Croatia's Livaković saved Rodrygo's penalty and Marquinhos hit the post. Brazil — overwhelming favourites — were eliminated. Neymar wept. Croatia advanced to their second consecutive semi-final."
  },

  // Semi-Finals & Final
  {
    id: "france-vs-morocco-2022-sf",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Semi-Final",
    date: "December 14, 2022", venue: "Al Bayt Stadium", city: "Al Khor, Qatar",
    home: "France", away: "Morocco", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Théo Hernández headed France into the lead after 5 minutes — Morocco's earliest concession in the tournament. Kolo Muani added a late second. Morocco's run ended but their achievement was historic — Africa's greatest ever World Cup story. The neutrals wanted Morocco to win but France were clinically efficient."
  },
  {
    id: "argentina-vs-croatia-2022-sf",
    tournament: "FIFA World Cup 2022", year: 2022, stage: "Semi-Final",
    date: "December 13, 2022", venue: "Lusail Stadium", city: "Lusail, Qatar",
    home: "Argentina", away: "Croatia", homeScore: 3, awayScore: 0, status: "FT",
    notes: "Messi's penalty gave Argentina the lead. Then Julián Álvarez scored twice in spectacular fashion — first after a brilliant individual run, then after intercepting Livaković's poor clearance. Argentina were dominant throughout. Croatia's fairy-tale run ended against a team that was simply on another level."
  },

  // ═══════════════════════════════════════════════
  // 2018 FIFA WORLD CUP — RUSSIA
  // ═══════════════════════════════════════════════

  // Group Stage
  {
    id: "spain-vs-portugal-2018-group",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Group Stage (Group B)",
    date: "June 15, 2018", venue: "Fisht Olympic Stadium", city: "Sochi, Russia",
    home: "Spain", away: "Portugal", homeScore: 3, awayScore: 3, status: "FT",
    notes: "Ronaldo's hat-trick including a stunning last-minute free-kick. Costa's controversial early goal for Spain. One of the most dramatic group stage games in World Cup history. Spain's keeper De Gea had a match to forget. The game ended 3-3 in a classic encounter between the Iberian rivals."
  },
  {
    id: "germany-vs-mexico-2018-group",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Group Stage (Group F)",
    date: "June 17, 2018", venue: "Luzhniki Stadium", city: "Moscow, Russia",
    home: "Germany", away: "Mexico", homeScore: 0, awayScore: 1, status: "FT",
    notes: "Hirving Lozano's 35th minute goal stunned the defending world champions. Mexico's compact defending and explosive counter-attacks frustrated Germany's possession game. Joachim Löw's 4-2-3-1 was unable to break through. Mexico supporters caused a seismic event detected on earthquake monitors in Mexico City when Lozano scored."
  },
  {
    id: "germany-vs-south-korea-2018-group",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Group Stage (Group F)",
    date: "June 27, 2018", venue: "Kazan Arena", city: "Kazan, Russia",
    home: "Germany", away: "South Korea", homeScore: 0, awayScore: 2, status: "FT",
    notes: "Germany eliminated at group stage for first time since 1938. South Korea scored twice in injury time through Kim Young-gwon and Son Heung-min (empty net). Germany had 34 shots but were wasteful. The defending world champions were exposed as tactically stale. Löw's side never recovered from the Mexico defeat."
  },

  // Round of 16
  {
    id: "uruguay-vs-portugal-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "June 30, 2018", venue: "Fisht Olympic Stadium", city: "Sochi, Russia",
    home: "Uruguay", away: "Portugal", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Cavani was brilliant with two goals, including an outstanding 62nd-minute volley. Ronaldo's free-kick gave Portugal early hope but Cavani's brace won it. Cavani limped off injured — a huge blow for Uruguay going forward. Ronaldo's World Cup ended at the Round of 16 stage."
  },
  {
    id: "russia-vs-spain-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "July 1, 2018", venue: "Luzhniki Stadium", city: "Moscow, Russia",
    home: "Russia", away: "Spain", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "4-3",
    notes: "Spain dominated with 75% possession and 1000+ passes but couldn't break Russia's deep block. Akinfeev saved two penalties in the shootout. Cheryshev's long-range effort in extra time nearly won it. Spain's patient style without direct penetration was exposed by a defensively resolute Russian side playing on home soil."
  },
  {
    id: "croatia-vs-denmark-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "July 1, 2018", venue: "Nizhny Novgorod Stadium", city: "Nizhny Novgorod, Russia",
    home: "Croatia", away: "Denmark", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "3-2",
    notes: "Mario Mandžukić own goal in the first minute. Modrić equalised on 28 minutes. Denmark had the better of extra time. Goalkeeper Subašić saved three Danish penalties. Croatia's mental resilience in shootouts was a defining characteristic of their tournament run."
  },
  {
    id: "brazil-vs-mexico-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "July 2, 2018", venue: "Samara Arena", city: "Samara, Russia",
    home: "Brazil", away: "Mexico", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Neymar and Firmino goals ended Mexico's excellent tournament. Neymar was controversial — his dramatic reactions to fouls frustrated neutrals — but his direct running created Brazil's opener. Mexico had chances in the first half but Brazil's defensive solidity proved too much. Brazil's attacking quartet of Neymar, Coutinho, Firmino and Willian looked formidable."
  },
  {
    id: "belgium-vs-japan-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "July 2, 2018", venue: "Rostov Arena", city: "Rostov-on-Don, Russia",
    home: "Belgium", away: "Japan", homeScore: 3, awayScore: 2, status: "FT",
    notes: "Japan led 2-0 with 24 minutes remaining. Belgium scored three times to win 3-2 with the final goal a devastating counter-attack finished by Chadli in the 94th minute. One of the great World Cup comebacks. Japan had dominated and looked certain to qualify for the quarter-finals. Lukaku's introduction changed the game completely."
  },
  {
    id: "sweden-vs-switzerland-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "July 3, 2018", venue: "Saint Petersburg Stadium", city: "St Petersburg, Russia",
    home: "Sweden", away: "Switzerland", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Emil Forsberg's deflected strike after 66 minutes separated the sides. Sweden were organised and disciplined. Without Zlatan Ibrahimović, this Swedish team operated as a genuine collective — compact, high-pressing, and tactically diligent. Switzerland had chances but Sweden's goalkeeper Olsen was excellent."
  },
  {
    id: "colombia-vs-england-2018-r16",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Round of 16",
    date: "July 3, 2018", venue: "Spartak Stadium", city: "Moscow, Russia",
    home: "Colombia", away: "England", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "3-4",
    notes: "England's first penalty shootout win since 1996. Harry Kane's early penalty gave England the lead. Yerry Mina's 93rd-minute header forced extra time. England dominated extra time but Colombia held on. Eric Dier scored the decisive penalty. England's relief was palpable — the penalty curse seemed broken."
  },

  // Quarter-Finals
  {
    id: "brazil-vs-belgium-2018-qf",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Quarter-Final",
    date: "July 6, 2018", venue: "Kazan Arena", city: "Kazan, Russia",
    home: "Brazil", away: "Belgium", homeScore: 1, awayScore: 2, status: "FT",
    notes: "Belgium eliminated tournament favourites Brazil with two goals in the first 31 minutes. Fernandinho own goal and De Bruyne's brilliant long-range strike. Renato Augusto pulled one back but Brazil couldn't equalise. Courtois was outstanding with 27 saves across the tournament. Brazil's 4-2-3-1 was tactically outmanoeuvred by Martinez's pragmatic Belgium."
  },
  {
    id: "france-vs-uruguay-2018-qf",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Quarter-Final",
    date: "July 6, 2018", venue: "Nizhny Novgorod Stadium", city: "Nizhny Novgorod, Russia",
    home: "France", away: "Uruguay", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Varane headed France into the lead from a Griezmann free-kick. Lloris's poor clearance led to a Muslera own goal for the second. Cavani was absent injured — a huge blow for Uruguay's attacking threat. Griezmann was excellent and France looked formidable in attack. Uruguay, without their best striker, lacked the cutting edge."
  },
  {
    id: "england-vs-sweden-2018-qf",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Quarter-Final",
    date: "July 7, 2018", venue: "Samara Arena", city: "Samara, Russia",
    home: "England", away: "Sweden", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Maguire's powerful header from a corner opened the scoring. Dele Alli's header doubled the lead. England were dominant throughout — set pieces were a key weapon. Henderson had an excellent game in midfield. England advanced to their first World Cup semi-final since 1990, generating massive excitement back home."
  },
  {
    id: "croatia-vs-russia-2018-qf",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Quarter-Final",
    date: "July 7, 2018", venue: "Fisht Olympic Stadium", city: "Sochi, Russia",
    home: "Croatia", away: "Russia", homeScore: 2, awayScore: 2, status: "PSO",
    penaltyScore: "4-3",
    notes: "Kramarić and Vida put Croatia 2-1 ahead in extra time but Russia equalised through Fernandes. Another penalty shootout for Croatia — their third in the tournament. Subašić was the hero again. Russia's incredible home tournament run finally ended. Croatia's experience in shootouts — a product of their mental resilience — was unmatched."
  },

  // Semi-Finals
  {
    id: "croatia-vs-england-2018-sf",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Semi-Final",
    date: "July 11, 2018", venue: "Luzhniki Stadium", city: "Moscow, Russia",
    home: "Croatia", away: "England", homeScore: 2, awayScore: 1, status: "AET",
    notes: "Trippier's stunning free-kick put England ahead after 5 minutes. England sat back and invited pressure. Perišić equalized with a brilliant left-foot half-volley. In extra time, Mandžukić bundled in the winner. England were exhausted by extra-time. Modrić conducted Croatia's possession game masterfully. England's dreams of coming home ended at the semi-final."
  },

  // 3rd Place
  {
    id: "belgium-vs-england-2018-3rd",
    tournament: "FIFA World Cup 2018", year: 2018, stage: "Third Place",
    date: "July 14, 2018", venue: "Saint Petersburg Stadium", city: "St Petersburg, Russia",
    home: "Belgium", away: "England", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Thomas Meunier opened the scoring early. Lukaku added a second with a clinical finish. Belgium collected their best-ever World Cup finish (3rd). The Golden Generation finally delivered. England were tired and unfocused. Eden Hazard was outstanding throughout and won the Bronze Ball. Belgium's tournament was a genuine success."
  },

  // ═══════════════════════════════════════════════
  // 2014 FIFA WORLD CUP — BRAZIL
  // ═══════════════════════════════════════════════

  // Group Stage
  {
    id: "spain-vs-netherlands-2014-group",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Group Stage (Group B)",
    date: "June 13, 2014", venue: "Arena Fonte Nova", city: "Salvador, Brazil",
    home: "Spain", away: "Netherlands", homeScore: 1, awayScore: 5, status: "FT",
    notes: "A rematch of the 2010 final. Van Persie's flying header and Robben's solo run were iconic moments. Spain's tiki-taka was completely dismantled. The world champions were humiliated. Iniesta, Xavi, and Busquets were bypassed by Netherlands' direct pressing and pace. The end of an era for Spanish football."
  },
  {
    id: "germany-vs-usa-2014-group",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Group Stage (Group G)",
    date: "June 26, 2014", venue: "Arena Pernambuco", city: "Recife, Brazil",
    home: "Germany", away: "USA", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Müller's goal decided a match where both teams knew a draw would see them both advance. The USA defended heroically and could have stolen a draw. Clint Dempsey and Jermaine Jones were excellent. Germany qualified top of the group. The game was dubbed the 'Disgrace of Recife' by some, though unlike 1982 both teams genuinely attacked."
  },

  // Round of 16
  {
    id: "brazil-vs-chile-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "June 28, 2014", venue: "Estádio Mineirão", city: "Belo Horizonte, Brazil",
    home: "Brazil", away: "Chile", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "3-2",
    notes: "One of the most dramatic matches of the tournament. Chile pushed Brazil to penalties in front of a deafening home crowd. Sanchez scored for Chile. Julio César saved from Pinilla who hit the post seconds before. Brazil were shaken but survived. The 'Mineirão curse' would return weeks later against Germany."
  },
  {
    id: "colombia-vs-uruguay-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "June 28, 2014", venue: "Estádio do Maracanã", city: "Rio de Janeiro, Brazil",
    home: "Colombia", away: "Uruguay", homeScore: 2, awayScore: 0, status: "FT",
    notes: "James Rodríguez opened scoring with an extraordinary chest-and-volley strike that became the goal of the tournament. Rodríguez would go on to win the Golden Boot. Uruguay's Suárez was suspended (biting Chiellini). Colombia's exciting counter-attacking football under Pekerman was a revelation of the tournament."
  },
  {
    id: "argentina-vs-switzerland-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "July 1, 2014", venue: "Arena de São Paulo", city: "São Paulo, Brazil",
    home: "Argentina", away: "Switzerland", homeScore: 1, awayScore: 0, status: "AET",
    notes: "Di María's 118th-minute goal with a curling right-foot finish settled it. Switzerland defended magnificently for 117 minutes — Argentina couldn't find a way through despite Messi's persistent probing. The game showed both Argentina's brilliance (Messi) and their struggle to break down organised defences."
  },
  {
    id: "france-vs-nigeria-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "June 30, 2014", venue: "Estádio Nacional", city: "Brasília, Brazil",
    home: "France", away: "Nigeria", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Paul Pogba headed the opener and Joseph Yobo's own goal sealed it. France were in control but Nigeria competed hard in the first hour. Victor Moses had excellent chances. France's Benzema-Valbuena-Griezmann front three was starting to click. The tournament was France's emergence as a genuine force again."
  },
  {
    id: "germany-vs-algeria-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "June 30, 2014", venue: "Estádio Beira-Rio", city: "Porto Alegre, Brazil",
    home: "Germany", away: "Algeria", homeScore: 2, awayScore: 1, status: "AET",
    notes: "Algeria were outstanding for 120 minutes, nearly eliminating Germany. Schürrle and Özil scored in extra time before Djabou pulled one back. Neuer had an extraordinary match — sweeping up behind his defence and distributing like a libero. Algeria's tactical organisation and physical intensity troubled Germany more than any opponent except the USA."
  },
  {
    id: "usa-vs-belgium-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "July 1, 2014", venue: "Arena Fonte Nova", city: "Salvador, Brazil",
    home: "USA", away: "Belgium", homeScore: 1, awayScore: 2, status: "AET",
    notes: "Tim Howard made a record 16 saves — the most in a World Cup match since 1966. De Bruyne and Lukaku goals in extra time were decisive. Julian Green's spectacular goal gave USA hope. Howard's performance made him a national hero. Belgium's golden generation was beginning to look dangerous."
  },
  {
    id: "netherlands-vs-mexico-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "June 29, 2014", venue: "Estádio Castelão", city: "Fortaleza, Brazil",
    home: "Netherlands", away: "Mexico", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Mexico led 1-0 until the 88th minute when Sneijder equalised. Then Robben won a controversial penalty — replays suggested he dived. Huntelaar scored from the spot. Mexico were devastated. The Netherlands' comeback was seen as lucky but clinical. Robben was excellent throughout the tournament despite the penalty controversy."
  },
  {
    id: "costa-rica-vs-greece-2014-r16",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Round of 16",
    date: "June 29, 2014", venue: "Arena Pernambuco", city: "Recife, Brazil",
    home: "Costa Rica", away: "Greece", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "5-3",
    notes: "Costa Rica's fairytale continued after eliminating England and Italy in the group stage. Papasthopoulos' header for Greece in the 91st minute levelled it. Navas made two penalty saves. Costa Rica — a nation of 5 million — made the quarter-finals for the first time since 1990. Central America erupted."
  },

  // Quarter-Finals
  {
    id: "france-vs-germany-2014-qf",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Quarter-Final",
    date: "July 4, 2014", venue: "Estádio do Maracanã", city: "Rio de Janeiro, Brazil",
    home: "France", away: "Germany", homeScore: 0, awayScore: 1, status: "FT",
    notes: "Müller's 13th-minute header from a Hummels flick-on was the only goal. Germany's defensive organisation was exceptional — France's attack was almost completely smothered. Benzema and Varane both had chances. Germany advanced to face Brazil in what would become the most shocking result in World Cup history."
  },
  {
    id: "brazil-vs-colombia-2014-qf",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Quarter-Final",
    date: "July 4, 2014", venue: "Estádio Castelão", city: "Fortaleza, Brazil",
    home: "Brazil", away: "Colombia", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Thiago Silva headed Brazil's opener in a tournament where he had been outstanding. David Luiz's free-kick was stunning. Neymar was fouled by Zúñiga late on — the challenge fractured a vertebra, ending Neymar's tournament. The moment changed the course of the World Cup completely, as Brazil would face Germany without their talisman."
  },
  {
    id: "argentina-vs-belgium-2014-qf",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Quarter-Final",
    date: "July 5, 2014", venue: "Estádio Nacional", city: "Brasília, Brazil",
    home: "Argentina", away: "Belgium", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Higuaín's first-half goal separated the sides in a tight contest. Belgium had 64% possession but Argentina defended with discipline. Messi had quieter games but his mere presence forced Belgium to deploy extra men to track him. Argentina advanced to the semi-finals where they would meet Netherlands."
  },
  {
    id: "netherlands-vs-costa-rica-2014-qf",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Quarter-Final",
    date: "July 5, 2014", venue: "Arena Fonte Nova", city: "Salvador, Brazil",
    home: "Netherlands", away: "Costa Rica", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "4-3",
    notes: "Van Gaal substituted goalkeeper Krul just before the penalty shootout — a masterstroke. Krul saved two penalties as Netherlands won 4-3. Costa Rica's fairytale ended but they had exceeded all expectations. The tactical substitution was widely praised as bold and inspired. Costa Rica's Navas was outstanding throughout the tournament."
  },

  // Semi-Final
  {
    id: "netherlands-vs-argentina-2014-sf",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Semi-Final",
    date: "July 9, 2014", venue: "Arena de São Paulo", city: "São Paulo, Brazil",
    home: "Netherlands", away: "Argentina", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "2-4",
    notes: "A tactical chess match that ended 0-0 after 120 minutes. Van Gaal set up with a deep block to frustrate Messi. Argentina were equally cautious. Messi was subdued. Romero was the hero in goal for Argentina, saving from Sneijder and Robben. Argentina advanced to the final to face Germany — a repeat of 1990."
  },

  // 3rd Place
  {
    id: "brazil-vs-netherlands-2014-3rd",
    tournament: "FIFA World Cup 2014", year: 2014, stage: "Third Place",
    date: "July 12, 2014", venue: "Estádio Nacional", city: "Brasília, Brazil",
    home: "Brazil", away: "Netherlands", homeScore: 0, awayScore: 3, status: "FT",
    notes: "Brazil's humiliation was complete. Van Persie, Blind, and Wijnaldum scored. Brazil were shell-shocked after the 7-1 semi-final defeat. Their tournament, played as hosts and supposed favourites, ended with consecutive heavy defeats. Coach Scolari resigned within days. The end of an era for Brazilian football."
  },

  // ═══════════════════════════════════════════════
  // 2010 FIFA WORLD CUP — SOUTH AFRICA
  // ═══════════════════════════════════════════════

  // Round of 16
  {
    id: "germany-vs-england-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 27, 2010", venue: "Free State Stadium", city: "Bloemfontein, South Africa",
    home: "Germany", away: "England", homeScore: 4, awayScore: 1, status: "FT",
    notes: "Lampard's shot clearly crossed the line but was not given — a decisive no-goal that haunts English football to this day. Germany were 2-1 up when the phantom goal was disallowed. Germany then scored two more through Müller to win 4-1. The injustice galvanised calls for goal-line technology. Müller scored four goals in the match."
  },
  {
    id: "argentina-vs-mexico-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 27, 2010", venue: "Soccer City", city: "Johannesburg, South Africa",
    home: "Argentina", away: "Mexico", homeScore: 3, awayScore: 1, status: "FT",
    notes: "Tevez scored a clearly offside goal in the first minute that stood — another controversial decision. Argentina won 3-1 with Higuaín completing his brace and Tevez adding another. Mexico played well once they stopped protesting the offside. Messi was in excellent form. Maradona's sideline celebrations were increasingly theatrical."
  },
  {
    id: "usa-vs-ghana-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 26, 2010", venue: "Royal Bafokeng Stadium", city: "Rustenburg, South Africa",
    home: "USA", away: "Ghana", homeScore: 1, awayScore: 2, status: "AET",
    notes: "Donovan's penalty gave USA an early lead. Ayew levelled before half-time. Gyan scored Ghana's winner in extra time. USA fought back brilliantly from difficult group stage moments to reach the knockout rounds for the first time since 2002. Ghana advanced to make Africa proud — they would come agonisingly close to the semi-finals."
  },
  {
    id: "brazil-vs-chile-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 28, 2010", venue: "Ellis Park Stadium", city: "Johannesburg, South Africa",
    home: "Brazil", away: "Chile", homeScore: 3, awayScore: 0, status: "FT",
    notes: "Juan and Luis Fabiano and Robinho scored for Brazil. Chile pressed well early but Brazil's quality told. Robinho was excellent in his last major impact in a Brazilian shirt. Brazil looked like genuine contenders — fluid, physical, and creative. But they would be knocked out by Netherlands in the quarters."
  },
  {
    id: "netherlands-vs-slovakia-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 28, 2010", venue: "Moses Mabhida Stadium", city: "Durban, South Africa",
    home: "Netherlands", away: "Slovakia", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Arjen Robben was at his best — quick, direct, and menacing. Sneijder and Robben scored. Vittek pulled one back for Slovakia. Netherlands were convincing despite not playing their best football. Van Bommel's combative midfield play was key. The Dutch were quietly building momentum."
  },
  {
    id: "spain-vs-portugal-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 29, 2010", venue: "Green Point Stadium", city: "Cape Town, South Africa",
    home: "Spain", away: "Portugal", homeScore: 1, awayScore: 0, status: "FT",
    notes: "David Villa's deflected goal separated the Iberian rivals. Spain dominated possession but Portugal defended heroically. Ronaldo was largely anonymous — his partnership with Messi at club level didn't translate internationally. Villa's tournament was magnificent and he would finish as top scorer."
  },
  {
    id: "paraguay-vs-japan-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 29, 2010", venue: "Loftus Versfeld Stadium", city: "Pretoria, South Africa",
    home: "Paraguay", away: "Japan", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "5-3",
    notes: "Japan's thrilling tournament run ended in penalties. Both teams cancelled each other out in 120 minutes. Paraguay's Cardozo saved his team's blushes with a stunning save on Japan's Komano. Japan had been one of Asia's great representatives in 2010, finishing second in their group ahead of Denmark."
  },
  {
    id: "uruguay-vs-south-korea-2010-r16",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Round of 16",
    date: "June 26, 2010", venue: "Nelson Mandela Bay Stadium", city: "Port Elizabeth, South Africa",
    home: "Uruguay", away: "South Korea", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Suárez and Forlán goals gave Uruguay victory. South Korea had qualified impressively from Group B. Lee Chung-yong's quality was evident throughout the tournament. Uruguay were finding their stride with Forlán as the conductor of their precise, counter-attacking play."
  },

  // Quarter-Finals
  {
    id: "netherlands-vs-brazil-2010-qf",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Quarter-Final",
    date: "July 2, 2010", venue: "Nelson Mandela Bay Stadium", city: "Port Elizabeth, South Africa",
    home: "Netherlands", away: "Brazil", homeScore: 2, awayScore: 1, status: "FT",
    notes: "One of the great World Cup upsets. Brazil led through Robinho. Sneijder scored twice — first after Felipe Melo's own goal, then a stunning second when Brazil's defence was disorganised. Melo was sent off for stamping. Brazil's yellow and gold army was stunned. The Netherlands advanced to the semi-final."
  },
  {
    id: "argentina-vs-germany-2010-qf",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Quarter-Final",
    date: "July 3, 2010", venue: "Cape Town Stadium", city: "Cape Town, South Africa",
    home: "Argentina", away: "Germany", homeScore: 0, awayScore: 4, status: "FT",
    notes: "Germany dismantled Maradona's Argentina 4-0. Müller scored twice, Klose and Friedrich added others. Germany's fluid attacking movements completely exposed Argentina's high defensive line. Messi was shackled by Germany's midfield press. Maradona's tactical naivety was brutally exposed. Germany looked capable of winning the tournament."
  },
  {
    id: "spain-vs-paraguay-2010-qf",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Quarter-Final",
    date: "July 3, 2010", venue: "Ellis Park Stadium", city: "Johannesburg, South Africa",
    home: "Spain", away: "Paraguay", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Villa's goal after a controversial miss and a disallowed Villa effort. Spain were far from their best but Villa's quality decided the match. Paraguay hit the post and had a penalty saved. Spain's resilience in difficult moments was a hallmark of their championship-winning run. Villa finished as top scorer of the tournament with 5 goals."
  },
  {
    id: "uruguay-vs-netherlands-2010-sf",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Semi-Final",
    date: "July 6, 2010", venue: "Cape Town Stadium", city: "Cape Town, South Africa",
    home: "Uruguay", away: "Netherlands", homeScore: 2, awayScore: 3, status: "FT",
    notes: "Sneijder scored twice and van Persie added a third. Forlán was outstanding for Uruguay with a brilliant goal and assist. Máximo Pereira's red card ended Uruguay's hopes. The Netherlands advanced to their third World Cup final. Forlán won the Golden Ball as the tournament's best player."
  },

  // 3rd Place
  {
    id: "uruguay-vs-germany-2010-3rd",
    tournament: "FIFA World Cup 2010", year: 2010, stage: "Third Place",
    date: "July 10, 2010", venue: "Nelson Mandela Bay Stadium", city: "Port Elizabeth, South Africa",
    home: "Uruguay", away: "Germany", homeScore: 2, awayScore: 3, status: "FT",
    notes: "Germany won a high-quality third-place game 3-2. Müller won the Golden Boot with his 5th and 6th goals of the tournament. Forlán's brilliant free-kick gave Uruguay hope. Germany's attacking display showed why they were one of the best attacking sides in the tournament. Müller and Klose were outstanding strikers."
  },

  // ═══════════════════════════════════════════════
  // 2006 FIFA WORLD CUP — GERMANY
  // ═══════════════════════════════════════════════

  // Round of 16
  {
    id: "germany-vs-sweden-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 24, 2006", venue: "Allianz Arena", city: "Munich, Germany",
    home: "Germany", away: "Sweden", homeScore: 2, awayScore: 0, status: "FT",
    notes: "Podolski scored twice on his home ground in a comfortable German victory. Klose added the second. The home crowd was electric throughout the tournament. Germany played an attacking, high-energy brand of football that captivated audiences. Sweden couldn't cope with Germany's pressing intensity and pace in wide areas."
  },
  {
    id: "argentina-vs-mexico-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 24, 2006", venue: "Zentralstadion", city: "Leipzig, Germany",
    home: "Argentina", away: "Mexico", homeScore: 2, awayScore: 1, status: "AET",
    notes: "Rodríguez scored in extra time after Maxi Rodriguez's stunning volley. One of the great World Cup goals — 35 yards, first-time, left-footed. Crespo had opened the scoring, Márquez equalised. The match needed extra time and Rodriguez's brilliance decided it. Considered one of the best Round of 16 games ever."
  },
  {
    id: "england-vs-ecuador-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 25, 2006", venue: "Gottlieb-Daimler-Stadion", city: "Stuttgart, Germany",
    home: "England", away: "Ecuador", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Beckham's curling free-kick was the only goal. Ecuador competed well but England's quality in individual moments was decisive. Beckham was captain and scored the decisive moment of his tournament. England qualified for the quarter-finals where they would face Portugal in another penalty shootout defeat."
  },
  {
    id: "portugal-vs-netherlands-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 25, 2006", venue: "Commerzbank-Arena", city: "Frankfurt, Germany",
    home: "Portugal", away: "Netherlands", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Known as the 'Battle of Nuremberg' — four red cards and 16 yellows. Maniche scored the only goal. Russian referee Ivanov lost control of the physical match. Figo and van Nistelrooy among the main protagonists. Despite the chaos, Portugal advanced through Maniche's goal and organised defensive display."
  },
  {
    id: "italy-vs-australia-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 26, 2006", venue: "Fritz Walter Stadion", city: "Kaiserslautern, Germany",
    home: "Italy", away: "Australia", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Francesco Totti's controversial injury-time penalty won it for Italy. Grosso was adjudged to have been fouled by Neill. Australia were furious — it appeared a minimal contact at best. Hiddink's Australia had been outstanding all tournament. Italy's cynicism in winning the penalty was criticised but they advanced to face Ukraine."
  },
  {
    id: "brazil-vs-ghana-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 27, 2006", venue: "Stadium Dortmund", city: "Dortmund, Germany",
    home: "Brazil", away: "Ghana", homeScore: 3, awayScore: 0, status: "FT",
    notes: "Ronaldo, Adriano, and Ze Roberto scored. Brazil were impressive but still not playing their best football. Ghana — Africa's sole remaining representative — fought well but Brazil's quality was decisive. Ronaldo's goal was his 15th World Cup goal at the time, equalling Gerd Müller's record."
  },
  {
    id: "spain-vs-france-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 27, 2006", venue: "Hannover Arena", city: "Hannover, Germany",
    home: "Spain", away: "France", homeScore: 1, awayScore: 3, status: "FT",
    notes: "Zidane was masterful. Ribéry opened the scoring and Villa equalised. Then Zidane's two free-kicks destroyed Spain's resistance, both curling unstoppably past Casillas. Spain's golden generation was still three years from its prime. Zidane's late-career renaissance in France's run to the final was one of the great tournament stories."
  },
  {
    id: "switzerland-vs-ukraine-2006-r16",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Round of 16",
    date: "June 26, 2006", venue: "Gottlieb-Daimler-Stadion", city: "Stuttgart, Germany",
    home: "Switzerland", away: "Ukraine", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "0-3",
    notes: "Switzerland's only World Cup game without conceding a goal — and they lost. They failed to score in normal time or extra time and then missed all three penalties while Ukraine scored all three. Shevchenko, Rebrov and Ukraine advanced to a surprising quarter-final. Switzerland's defensive tournament ended in bizarre and historic fashion."
  },

  // Quarter-Finals
  {
    id: "germany-vs-argentina-2006-qf",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Quarter-Final",
    date: "June 30, 2006", venue: "Olympiastadion", city: "Berlin, Germany",
    home: "Germany", away: "Argentina", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "4-2",
    notes: "Klose headed Germany into the lead, Ayala equalised. Germany won the shootout despite Cambiasso missing the first penalty. Lehmann's sealed-envelope notes for the shootout became famous — he supposedly had information on each Argentine penalty taker's preferred style. The atmosphere in Berlin was extraordinary."
  },
  {
    id: "italy-vs-ukraine-2006-qf",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Quarter-Final",
    date: "June 30, 2006", venue: "Hamburg Arena", city: "Hamburg, Germany",
    home: "Italy", away: "Ukraine", homeScore: 3, awayScore: 0, status: "FT",
    notes: "Zambrotta, Toni (twice) ended Ukraine's Cinderella run. Shevchenko was subdued by Italy's world-class defenders. Cannavaro and Materazzi were outstanding throughout the Italian defensive operation. Italy were finding their best form at exactly the right moment and would go on to win the World Cup."
  },
  {
    id: "england-vs-portugal-2006-qf",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Quarter-Final",
    date: "July 1, 2006", venue: "Arena AufSchalke", city: "Gelsenkirchen, Germany",
    home: "England", away: "Portugal", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "1-3",
    notes: "Wayne Rooney was sent off for stamping on Carvalho. England lost on penalties with Lampard, Gerrard, and Carragher all missing. Ronaldo winked at teammates after Rooney's red card, infuriating England fans. Ricardo saved England's first three kicks. England's World Cup hopes ended in familiar agony."
  },
  {
    id: "france-vs-brazil-2006-qf",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Quarter-Final",
    date: "July 1, 2006", venue: "Frankfurt Arena", city: "Frankfurt, Germany",
    home: "France", away: "Brazil", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Zidane's masterclass. His diagonal pass created the space for Henry to cross for Zidane to control and shoot — but it was Thierry Henry's goal that counted. Zidane's presence in midfield made France almost unstoppable. Brazil's Ronaldo, despite his famous tooth, was a peripheral figure. One of the great upsets."
  },

  // Semi-Final & 3rd Place
  {
    id: "portugal-vs-france-2006-sf",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Semi-Final",
    date: "July 5, 2006", venue: "Allianz Arena", city: "Munich, Germany",
    home: "Portugal", away: "France", homeScore: 0, awayScore: 1, status: "FT",
    notes: "Zidane's winning penalty after Meireles fouled him in the box. France were clinical and organised. Portugal's golden generation — Figo, Ronaldo, Deco, Maniche, Carvalho — fell short in their best ever tournament. Ronaldo scored 3 goals but was less effective in the semi-final. France went on to the final."
  },
  {
    id: "germany-vs-portugal-2006-3rd",
    tournament: "FIFA World Cup 2006", year: 2006, stage: "Third Place",
    date: "July 8, 2006", venue: "Stuttgart Arena", city: "Stuttgart, Germany",
    home: "Germany", away: "Portugal", homeScore: 3, awayScore: 1, status: "FT",
    notes: "Podolski scored twice and Schweinsteiger added the third. Nuno Gomes replied for Portugal. Germany's home tournament exceeded all expectations — the Summer Fairy Tale ended with bronze. The atmosphere throughout Germany was joyful. Klose finished as joint top scorer with five goals."
  },

  // ═══════════════════════════════════════════════
  // 2002 FIFA WORLD CUP — KOREA/JAPAN
  // ═══════════════════════════════════════════════

  {
    id: "south-korea-vs-italy-2002-r16",
    tournament: "FIFA World Cup 2002", year: 2002, stage: "Round of 16",
    date: "June 18, 2002", venue: "Daejeon World Cup Stadium", city: "Daejeon, South Korea",
    home: "South Korea", away: "Italy", homeScore: 2, awayScore: 1, status: "AET",
    notes: "Vieri had Italy ahead but Seol Ki-hyeon equalised late. In extra time, Ahn Jung-hwan's golden goal header eliminated Italy. The referee's decisions were extremely controversial — Totti was sent off. Italian coach Trapattoni called it a scandal. South Korea's run was creating disbelief across the footballing world."
  },
  {
    id: "england-vs-brazil-2002-qf",
    tournament: "FIFA World Cup 2002", year: 2002, stage: "Quarter-Final",
    date: "June 21, 2002", venue: "Shizuoka Stadium Ecopa", city: "Shizuoka, Japan",
    home: "England", away: "Brazil", homeScore: 1, awayScore: 2, status: "FT",
    notes: "Rivaldo's last-minute equaliser and Ronaldinho's audacious chip over Seaman in the second half. Owen had given England the lead. Ronaldinho was sent off but Brazil held on with 10 men. Seaman's positioning for the chip was poor. England were eliminated and Sven-Göran Eriksson's tournament ended."
  },
  {
    id: "south-korea-vs-spain-2002-qf",
    tournament: "FIFA World Cup 2002", year: 2002, stage: "Quarter-Final",
    date: "June 22, 2002", venue: "Gwangju World Cup Stadium", city: "Gwangju, South Korea",
    home: "South Korea", away: "Spain", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "5-3",
    notes: "Two Spanish goals were disallowed — Morientes header ruled out for a dubious infringement. Hierro and Joaquín missed penalties. South Korea's Lee Woon-jae saved two. The most controversial result of the tournament — Spain felt robbed, but South Korea celebrated wildly as they advanced to their historic semi-final."
  },
  {
    id: "germany-vs-south-korea-2002-sf",
    tournament: "FIFA World Cup 2002", year: 2002, stage: "Semi-Final",
    date: "June 25, 2002", venue: "Seoul World Cup Stadium", city: "Seoul, South Korea",
    home: "Germany", away: "South Korea", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Michael Ballack's header from a Bernd Schneider cross was the only goal. Ballack received a yellow card that ruled him out of the final — a bitter moment. South Korea's incredible run ended against a determined German side. 60,000 Koreans in red shirts created an unforgettable atmosphere. The red devils had taken the whole world on a journey."
  },
  {
    id: "brazil-vs-turkey-2002-sf",
    tournament: "FIFA World Cup 2002", year: 2002, stage: "Semi-Final",
    date: "June 26, 2002", venue: "Saitama Stadium 2002", city: "Saitama, Japan",
    home: "Brazil", away: "Turkey", homeScore: 1, awayScore: 0, status: "FT",
    notes: "Ronaldo's goal separated the sides. Ronaldo had recovered from his mysterious pre-final fit in 1998 to become the world's best again. Turkey had been the surprise package of the tournament. Brazil's attacking trio of Ronaldo, Rivaldo, and Ronaldinho was arguably the most feared in World Cup history."
  },

  // ═══════════════════════════════════════════════
  // 1998 FIFA WORLD CUP — FRANCE
  // ═══════════════════════════════════════════════

  {
    id: "england-vs-argentina-1998-r16",
    tournament: "FIFA World Cup 1998", year: 1998, stage: "Round of 16",
    date: "June 30, 1998", venue: "Stade Geoffroy-Guichard", city: "Saint-Étienne, France",
    home: "England", away: "Argentina", homeScore: 2, awayScore: 2, status: "PSO",
    penaltyScore: "3-4",
    notes: "One of the great World Cup matches. Batistuta penalty, Owen goal, Scholes penalty, Zanetti equaliser before half time. Beckham sent off for a petulant kick at Simeone. Shearer and Ince missed. Sol Campbell's goal ruled out controversially. England played with 10 men and nearly pulled off an extraordinary result. A match remembered for generations."
  },
  {
    id: "netherlands-vs-argentina-1998-qf",
    tournament: "FIFA World Cup 1998", year: 1998, stage: "Quarter-Final",
    date: "July 4, 1998", venue: "Stade Vélodrome", city: "Marseille, France",
    home: "Netherlands", away: "Argentina", homeScore: 2, awayScore: 1, status: "FT",
    notes: "Bergkamp's last-minute winner — a perfect touch and composed side-foot finish — is one of the greatest World Cup goals ever scored. Argentina led through López. Kluivert equalised. Then Bergkamp controlled Frank De Boer's 60-yard pass and finished past Roa with the final touch of a lifetime. Football perfection."
  },
  {
    id: "france-vs-italy-1998-qf",
    tournament: "FIFA World Cup 1998", year: 1998, stage: "Quarter-Final",
    date: "July 3, 1998", venue: "Stade de France", city: "Saint-Denis, France",
    home: "France", away: "Italy", homeScore: 0, awayScore: 0, status: "PSO",
    penaltyScore: "4-3",
    notes: "Defensive masterclass from both sides in 90 minutes. Zidane missed his penalty in the shootout but France prevailed. Barthez saved from Di Biagio whose spot-kick hit the bar. France's home crowd propelled them through. Italy were defensively brilliant but their tournament ended at the quarter-final stage again."
  },
  {
    id: "brazil-vs-netherlands-1998-sf",
    tournament: "FIFA World Cup 1998", year: 1998, stage: "Semi-Final",
    date: "July 7, 1998", venue: "Stade Vélodrome", city: "Marseille, France",
    home: "Brazil", away: "Netherlands", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "4-2",
    notes: "Ronaldo scored for Brazil. Kluivert's late equaliser took it to extra time. Brazil won the shootout. Taffarel was the hero. Netherlands hit the post in extra time through Bergkamp. The Netherlands outplayed Brazil for long periods but couldn't convert their superiority. Brazil advanced to defend their title."
  },
  {
    id: "germany-vs-croatia-1998-qf",
    tournament: "FIFA World Cup 1998", year: 1998, stage: "Quarter-Final",
    date: "July 4, 1998", venue: "Parc des Princes", city: "Paris, France",
    home: "Germany", away: "Croatia", homeScore: 0, awayScore: 3, status: "FT",
    notes: "Croatia's greatest footballing achievement at the time — eliminating the defending champions Germany 3-0. Bilic was sent off after a clash with Rudi Völler. Šuker scored with a brilliant individual goal. Jarni and Vlaović added others. Germany's Boban and Šuker were the stars of Croatia's golden generation at their peak."
  },

  // ═══════════════════════════════════════════════
  // 1990 FIFA WORLD CUP — ITALY
  // ═══════════════════════════════════════════════

  {
    id: "cameroon-vs-argentina-1990-group",
    tournament: "FIFA World Cup 1990", year: 1990, stage: "Group Stage (Group B)",
    date: "June 8, 1990", venue: "Stadio Giuseppe Meazza", city: "Milan, Italy",
    home: "Cameroon", away: "Argentina", homeScore: 1, awayScore: 0, status: "FT",
    notes: "The opening match of the 1990 World Cup produced one of the greatest upsets. Defending champions Argentina — with Maradona — were beaten by Cameroon's Biyick header despite having two players sent off. Massing and Kana-Biyick received red cards yet Cameroon held on. Roger Milla, at 38, was about to become a World Cup legend."
  },
  {
    id: "west-germany-vs-netherlands-1990-r16",
    tournament: "FIFA World Cup 1990", year: 1990, stage: "Round of 16",
    date: "June 24, 1990", venue: "Stadio Giuseppe Meazza", city: "Milan, Italy",
    home: "West Germany", away: "Netherlands", homeScore: 2, awayScore: 1, status: "FT",
    notes: "The most ferocious club rivalry in German football — Bayern vs Ajax — playing out at World Cup level. Völler and Rijkaard spat at each other and were both sent off. Klinsmann and Brehme scored for West Germany. Van Basten pulled one back. Despite the drama, West Germany's quality and organisation won through."
  },
  {
    id: "england-vs-cameroon-1990-qf",
    tournament: "FIFA World Cup 1990", year: 1990, stage: "Quarter-Final",
    date: "July 1, 1990", venue: "Stadio San Paolo", city: "Naples, Italy",
    home: "England", away: "Cameroon", homeScore: 3, awayScore: 2, status: "AET",
    notes: "Cameroon were the first African nation to reach the World Cup quarter-finals. They led twice with Ekeke's goal making it 2-1 in 65 minutes. Lineker scored two controversial penalties to take England through in extra time. Roger Milla's dancing celebrations became iconic. Africa fell in love with its own team."
  },

  // ═══════════════════════════════════════════════
  // CLASSIC SEMI-FINALS
  // ═══════════════════════════════════════════════

  {
    id: "west-germany-vs-france-1982-sf",
    tournament: "FIFA World Cup 1982", year: 1982, stage: "Semi-Final",
    date: "July 8, 1982", venue: "Estadio Ramón Sánchez Pizjuán", city: "Seville, Spain",
    home: "West Germany", away: "France", homeScore: 3, awayScore: 3, status: "PSO",
    penaltyScore: "5-4",
    notes: "Considered one of the greatest matches ever played. Schumacher's brutal foul on Battiston — no card, no penalty. Platini and Trésor scored in extra time to make it 3-1. West Germany came back to 3-3. The first World Cup penalty shootout in history. Hrubesch scored the winner. Football's most dramatic semi-final until at least 2022."
  },
  {
    id: "brazil-vs-france-1986-qf",
    tournament: "FIFA World Cup 1986", year: 1986, stage: "Quarter-Final",
    date: "June 21, 1986", venue: "Estadio Jalisco", city: "Guadalajara, Mexico",
    home: "Brazil", away: "France", homeScore: 1, awayScore: 1, status: "PSO",
    penaltyScore: "3-4",
    notes: "Perhaps the greatest match in World Cup history that ended in a penalty shootout. Brazil of Zico, Sócrates, Falcão and Careca against France of Platini, Giresse, Tigana. Careca opened, Zico missed a penalty (saved by Bats), Platini equalised. Sócrates famously hit the post in the shootout. Platini converted the winner."
  },
];
