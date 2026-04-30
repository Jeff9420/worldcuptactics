export interface ArticleSection {
  type: "paragraph" | "heading" | "subheading" | "quote";
  text: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: number;
  metaDescription: string;
  relatedMatchIds: string[];
  content: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: "5-greatest-tactical-masterclasses-world-cup-history",
    title: "5 Greatest Tactical Masterclasses in World Cup History",
    excerpt:
      "From Total Football to the 7-1, these are the moments when tactical preparation separated genius from the rest.",
    category: "Tactics",
    categoryColor: "#2DFF7C",
    date: "2026-04-28",
    readTime: 8,
    metaDescription:
      "The five greatest tactical masterclasses in World Cup history — from Brazil 1970 to Germany vs Brazil 2014. Deep analysis of the formations and ideas that changed football.",
    relatedMatchIds: [
      "germany-vs-brazil-2014-sf",
      "netherlands-vs-west-germany-1974-final",
      "brazil-vs-italy-1970-final",
    ],
    content: [
      {
        type: "paragraph",
        text: "A tactical masterclass is not just about winning. It is about imposing your idea of football so completely that the opponent never finds a foothold — where every decision looks inevitable in hindsight and yet was the product of weeks of meticulous preparation. The World Cup, played under maximum pressure with the world watching, has produced a handful of such performances. These are the five that stand above the rest.",
      },
      {
        type: "heading",
        text: "1. Brazil vs Italy, 1970 Final — The Perfect Team",
      },
      {
        type: "paragraph",
        text: "Mario Zagallo's Brazil entered the 1970 final not just as favorites but as the living embodiment of what football could be. Their 4-2-4 was fluid in a way that no formation label can fully capture. Pelé dropped deep to link play. Jairzinho ran channels. Rivelino struck from distance. And Carlos Alberto Torres orchestrated everything from right back — culminating in what remains the greatest team goal in World Cup history: a 10-pass move finished with a thunderbolt right-foot drive.",
      },
      {
        type: "paragraph",
        text: "What made Brazil 1970 a tactical masterclass was their positional intelligence. Players constantly swapped roles without losing structural shape. Italy, organized and defensively disciplined under Ferruccio Valcareggi, were simply overwhelmed by the variety and speed of Brazilian combinations. The 4-1 scoreline flattered nobody. Brazil were simply playing a different sport.",
      },
      {
        type: "heading",
        text: "2. Netherlands, 1974 — Total Football Arrives",
      },
      {
        type: "paragraph",
        text: "Rinus Michels had spent years building Total Football at Ajax. In 1974, he unleashed it on the world. The idea was radical: every outfield player could occupy every position. When a midfielder advanced, a forward dropped. When a winger cut inside, a fullback overlapped. The result was a team that generated numerical superiority in every zone of the pitch simultaneously.",
      },
      {
        type: "paragraph",
        text: "Johan Cruyff was the conductor. His turn — what would become known as the Cruyff Turn — debuted in that tournament against Sweden. But it was the collective rather than the individual that made the Netherlands extraordinary. They dismantled Argentina 4-0 in the group stage with a display of high pressing and positional rotation that seemed to belong to a future era of football. West Germany won the final, but the tactical legacy belonged to the Dutch.",
      },
      {
        type: "heading",
        text: "3. France vs Argentina, 2018 Round of 16 — The Counter-Attack Blueprint",
      },
      {
        type: "paragraph",
        text: "France's 4-2 victory over Messi's Argentina is one of the most studied tactical performances in recent World Cup history. Didier Deschamps deployed a compact 4-2-3-1 that invited Argentina to possess the ball in non-threatening areas, then unleashed Kylian Mbappé on transitions. At 19 years old, Mbappé produced what may be the most devastating 45-minute display in a knockout game — winning a penalty, scoring twice, and exposing Argentina's high defensive line with terrifying repetition.",
      },
      {
        type: "paragraph",
        text: "The lesson was simple but ruthlessly executed: pace in behind a high line is unanswerable if you have the right striker. Antoine Griezmann controlled the game between the lines. N'Golo Kanté shut down every counter-attack Argentina attempted. It was a tactical blueprint for how to beat a possession-heavy team — and Deschamps used it all the way to the trophy.",
      },
      {
        type: "heading",
        text: "4. Spain 2010 — Tiki-Taka at Its Peak",
      },
      {
        type: "paragraph",
        text: "Spain's 2010 World Cup campaign was the fullest expression of positional play — tiki-taka — at international level. Vicente del Bosque's squad, built from the spine of Pep Guardiola's Barcelona, played with a false 9 (David Villa eventually providing the cutting edge) surrounded by players who could keep possession in tight spaces indefinitely. Their average possession across the tournament was over 60%.",
      },
      {
        type: "paragraph",
        text: "The final against the Netherlands is often remembered for its brutality — five yellow cards, late tackles, extra time. But tactically, Spain were relentless. Xavi Hernández completed 91 passes that night. Andrés Iniesta, who scored the winner, was everywhere: receiving between the lines, circulating play, appearing in spaces that should not have existed. The Netherlands had no answer because they could not win the ball.",
      },
      {
        type: "heading",
        text: "5. Germany vs Brazil, 2014 Semifinal — Surgical Deconstruction",
      },
      {
        type: "paragraph",
        text: "Germany's 7-1 defeat of Brazil in the Belo Horizonte semi-final was not an accident. Joachim Löw had identified Brazil's structural weaknesses for months: David Luiz's habit of stepping out of the defensive line, the lack of cover on transition, the emotional fragility of a host nation under pressure. When Neymar and Thiago Silva were ruled out, those weaknesses became fatal.",
      },
      {
        type: "paragraph",
        text: "Germany's pressing was relentless and organized. Their positional rotations in the final third — Thomas Müller drifting, Toni Kroos finding pockets, Sami Khedira running late from deep — generated a goal every 69 seconds at one point. Four goals in a six-minute spell is not fortune. It is the consequence of perfect tactical preparation meeting a psychologically shattered opponent. It remains the most devastating single-game tactical display in World Cup history.",
      },
    ],
  },
  {
    slug: "germany-7-1-brazil-tactical-autopsy",
    title: "Germany 7-1 Brazil: A Tactical Autopsy",
    excerpt:
      "How Löw's meticulous preparation and Brazil's structural vulnerabilities combined to produce the most shocking result in World Cup history.",
    category: "Match Analysis",
    categoryColor: "#F5C518",
    date: "2026-04-27",
    readTime: 9,
    metaDescription:
      "A deep tactical autopsy of Germany's 7-1 destruction of Brazil in the 2014 World Cup semifinal — how Löw exposed every weakness in Scolari's system.",
    relatedMatchIds: ["germany-vs-brazil-2014-sf"],
    content: [
      {
        type: "paragraph",
        text: "The Estádio Mineirão in Belo Horizonte is nicknamed the Mineirinho — the Little Miner. On the night of July 8, 2014, it witnessed the most seismic result in the history of the World Cup. Germany 7, Brazil 1. The host nation, missing their talisman Neymar and captain Thiago Silva, were not just beaten. They were systematically dismantled by a German team operating at the tactical peak of Joachim Löw's decade-long project.",
      },
      {
        type: "heading",
        text: "The Setup: Germany's Relentless Pressing Structure",
      },
      {
        type: "paragraph",
        text: "Löw lined up in a 4-2-3-1 that was more fluid in practice than its label suggests. Thomas Müller led the press from the front, supported by Mesut Özil and André Schürrle. The two holding midfielders — Bastian Schweinsteiger and Toni Kroos — provided the platform for everything: intercepting, circulating, and finding the late runners from deep.",
      },
      {
        type: "paragraph",
        text: "The key tactical instruction was to press Brazil's center backs immediately whenever they received the ball. Without Thiago Silva's composure and Neymar's ability to release pressure quickly, Brazil's defensive line was forced to play long — which suited Germany's aerial presence and second-ball aggression perfectly. Within 11 minutes, Müller had already scored. The press was working.",
      },
      {
        type: "heading",
        text: "Brazil's Structural Collapse: What Went Wrong",
      },
      {
        type: "paragraph",
        text: "Luiz Felipe Scolari had built his Brazil team around Neymar's individual brilliance. Remove that, and the tactical structure had no spine. Oscar dropped into midfield but offered neither defensive discipline nor creative output. Hulk worked hard but was isolated. Fred, the target striker, was physically outmatched by Germany's mobile center backs.",
      },
      {
        type: "paragraph",
        text: "The most catastrophic decision was defensive. David Luiz, deputizing as captain in Thiago Silva's absence, had a tendency to step forward aggressively to win the ball. Against a team with the movement of Müller, Kroos, and Khedira — who were constantly making late runs into the box — this was suicidal. Germany's second, third, fourth, fifth goals all came through the same mechanism: a Brazil center back drawn forward, a runner exploiting the space behind.",
      },
      {
        type: "quote",
        text: "Four goals in six minutes is not fortune. It is the consequence of perfect tactical preparation meeting a psychologically shattered opponent.",
      },
      {
        type: "heading",
        text: "The 29th to 35th Minute: Six Minutes That Changed Football",
      },
      {
        type: "paragraph",
        text: "Müller's 11th-minute goal was stunning. But the match's decisive period came when Germany scored four times in six minutes. Kroos scored twice in two minutes. Khedira added a fifth. Brazil's shape had completely disintegrated. Players were standing still, unable to process what was happening. The crowd fell silent.",
      },
      {
        type: "paragraph",
        text: "What made this spell tactically significant was not just the speed of the goals — it was how each one was constructed differently. Müller's goals came from set-piece movement and crosses. Klose's came from a defensive error under pressure. Kroos's first was a one-two combination in a tight space; the second was a clinical driven finish after a quick throw-in. Germany were attacking from multiple angles simultaneously, and Brazil had no answer to any of them.",
      },
      {
        type: "heading",
        text: "The Legacy: What 7-1 Changed",
      },
      {
        type: "paragraph",
        text: "The 7-1 changed how Brazil approached international football. The CBF commissioned a full tactical review. The dependency on a single player — replicated four years later with Neymar again — remained a structural problem. But the deeper lesson was about collective organization: no individual talent, however great, can compensate for a team with no coherent pressing structure, no defensive cover mechanisms, and no plan B.",
      },
      {
        type: "paragraph",
        text: "For Germany, the 7-1 was validation of Löw's decade-long project: build a team of technically excellent, positionally intelligent players who can press as a unit and exploit space at speed. They won the World Cup four days later against Argentina. The 7-1 was not an aberration. It was the system working exactly as designed.",
      },
    ],
  },
  {
    slug: "spain-tiki-taka-2010-world-cup-tactical-breakdown",
    title: "Tiki-Taka: How Spain's Possession Game Conquered the 2010 World Cup",
    excerpt:
      "Spain won in South Africa by controlling the ball for so long that opponents simply ran out of chances. A deep look at the system that changed football.",
    category: "Tactics",
    categoryColor: "#2DFF7C",
    date: "2026-04-26",
    readTime: 8,
    metaDescription:
      "How Spain's tiki-taka possession system won the 2010 World Cup — the tactical principles, key players, and why it worked against every opponent in South Africa.",
    relatedMatchIds: ["spain-vs-netherlands-2010-final"],
    content: [
      {
        type: "paragraph",
        text: "In the summer of 2010, Spain played a style of football that had never been seen at a World Cup before — and has never been replicated since. Tiki-taka: short passes, constant movement, relentless pressing when out of possession, and an almost religious belief that controlling the ball meant controlling the game. They scored just eight goals in seven matches. They did not need to score more.",
      },
      {
        type: "heading",
        text: "Where It Came From: Cruyff, Guardiola, and Barcelona",
      },
      {
        type: "paragraph",
        text: "The intellectual lineage of Spain's 2010 system runs directly from Johan Cruyff to Pep Guardiola to Vicente del Bosque. When Cruyff managed Barcelona in the late 1980s and early 1990s, he installed the principles of positional play — keeping the ball in defined zones, creating superiority in every area of the pitch, pressing immediately after losing possession. Guardiola, who played under Cruyff, absorbed these ideas and rebuilt them into the Barcelona team that would win two Champions Leagues between 2009 and 2011.",
      },
      {
        type: "paragraph",
        text: "Del Bosque's genius was recognizing that the Spain squad — built from the core of that Guardiola Barcelona team — had the players to execute these principles at international level. Xavi and Iniesta in midfield. Busquets as the deep-lying controller. David Villa as the striker willing to press from the front. This was not a national team borrowing club tactics. This was a club system transplanted wholesale onto the international stage.",
      },
      {
        type: "heading",
        text: "The System: How Tiki-Taka Actually Worked",
      },
      {
        type: "paragraph",
        text: "Spain's 4-2-3-1 (or 4-3-3 in possession) was built on a simple but demanding principle: the team always had numerical superiority around the ball. This was achieved through constant positional adjustments — if a central midfielder pushed forward, a striker dropped. If a fullback overlapped, a winger tucked in. The result was that Spain always had a passing option, which meant they rarely needed to take risks.",
      },
      {
        type: "paragraph",
        text: "Sergio Busquets was the linchpin. Playing as the single pivot in front of the back four, he screened the defense while simultaneously acting as the first passing station from deep. His spatial awareness — the ability to know where every player on the pitch was without looking — made him the quiet engine of the entire system. He rarely lost the ball. When he did, Spain's pressing triggered immediately: every player within a few meters of the ball converged simultaneously to win it back.",
      },
      {
        type: "quote",
        text: "You can watch an entire Busquets game and see him touch the ball 80 times. Watch the spaces he creates and you understand everything about how Spain played.",
      },
      {
        type: "heading",
        text: "The 2010 Final: 120 Minutes Against the Netherlands",
      },
      {
        type: "paragraph",
        text: "The final against the Netherlands was not the tournament's most entertaining match — Bert van Marwijk's side were physical and aggressive, with Nigel de Jong's kung-fu kick on Xabi Alonso going unpunished early. But tactically, Spain were in complete control. Xavi completed 91 passes. Iniesta touched the ball 113 times. The Netherlands touched the ball 44 times in the attacking third. Spain won by limiting their opponents' opportunities to play at all.",
      },
      {
        type: "paragraph",
        text: "Iniesta's winner in the 116th minute of extra time was the culmination of everything Spain had built. A quick combination in the Dutch half, Cesc Fàbregas releasing the ball into his run, a first-time right-foot finish. No elaborate buildup — just the automatic, trained response of a player who had spent years making exactly that movement, in exactly that space.",
      },
      {
        type: "heading",
        text: "Why Tiki-Taka Faded — and What Replaced It",
      },
      {
        type: "paragraph",
        text: "Spain's system was vulnerable to one thing: a team willing and able to press their center backs aggressively with speed. At the 2014 World Cup, the Netherlands — remembering exactly what had beaten them four years earlier — deployed Robin van Persie and Arjen Robben on long balls in behind the Spanish high line. The result was a 5-1 thrashing that ended Spain's tournament in the group stage.",
      },
      {
        type: "paragraph",
        text: "Tiki-taka was not defeated by a better tactical idea — it was defeated by evolution. Teams studied Spain's weaknesses for four years and found the answer. That is how football works: every system creates a counter. The legacy of tiki-taka is not just Spain's trophies but the generation of coaches — from Guardiola at City to Arteta at Arsenal — who continue to build on its principles.",
      },
    ],
  },
  {
    slug: "brazil-1970-greatest-team-world-cup-history",
    title: "Brazil 1970: Why Pelé's Team Remains the Greatest in World Cup History",
    excerpt:
      "Fifty-six years on, Brazil's 1970 squad — with their fluid 4-2-4, total technical mastery, and Carlos Alberto's legendary goal — still set the standard.",
    category: "Legends",
    categoryColor: "#FF8C00",
    date: "2026-04-25",
    readTime: 7,
    metaDescription:
      "Why Brazil 1970 remains the greatest team in World Cup history — the tactical brilliance of Zagallo's 4-2-4, Pelé at his peak, and the Carlos Alberto goal explained.",
    relatedMatchIds: ["brazil-vs-italy-1970-final"],
    content: [
      {
        type: "paragraph",
        text: "Every generation produces a new contender for the greatest World Cup team ever assembled. Germany 2014 were relentless and clinical. Spain 2010 were technically peerless. France 2018 were devastatingly efficient. And yet, fifty-six years after their triumph in Mexico, Brazil 1970 remains the benchmark against which all others are measured. Not because of nostalgia, but because of how they played.",
      },
      {
        type: "heading",
        text: "Zagallo's System: The 4-2-4 That Defied Convention",
      },
      {
        type: "paragraph",
        text: "Mario Zagallo had been a World Cup winner as a player in 1958 and 1962. As a manager, he returned to the tournament with a philosophy that was radical for its era: Brazil would play with four forwards. Not notionally four, but genuinely four — Pelé, Jairzinho, Tostão, and Rivelino were all expected to attack from their starting positions, with the two holding midfielders, Gérson and Clodoaldo, providing the platform.",
      },
      {
        type: "paragraph",
        text: "What made this work was not just individual talent — though the talent was generational — but collective positional intelligence. Pelé, nominally a center forward, would drop into midfield to combine and then arrive late into the box. Jairzinho operated on the right with extraordinary directness: he scored in every single match of the tournament. Rivelino carried the threat of a devastating left foot from the left side. Tostão was the archetypal second striker — technically brilliant, constantly making runs that opened space for others.",
      },
      {
        type: "heading",
        text: "The Squad: Technical Quality on an Unmatched Scale",
      },
      {
        type: "paragraph",
        text: "The individual quality in that Brazil squad is almost impossible to comprehend in the abstract. Pelé, at 29, was in his prime and determined to prove himself after injury had curtailed his 1962 and 1966 campaigns. His performance against Czechoslovakia in the group stage — a dummy shot that confused the goalkeeper before a composed finish — announced what was coming.",
      },
      {
        type: "paragraph",
        text: "Carlos Alberto Torres at right back was the template for the modern attacking fullback — 56 years before the position became fashionable. Gérson controlled the tempo from deep with a passing range that no midfielder of his era could match. Clodoaldo, just 20 years old, was given the defensive responsibility that allowed the more technically gifted players in front of him to express themselves without restraint.",
      },
      {
        type: "quote",
        text: "Carlos Alberto's goal was not scored in the last minute. It was planned in the first. Every player knew his role in that move before it began.",
      },
      {
        type: "heading",
        text: "The Final Against Italy: Football as Art",
      },
      {
        type: "paragraph",
        text: "The 1970 final against Italy is one of the most studied matches in football history — not because it was competitive (Brazil won 4-1) but because it demonstrated what a team playing at their absolute ceiling looks like. Italy, organized under Ferruccio Valcareggi and built on the defensive principles of catenaccio, were fundamentally outclassed.",
      },
      {
        type: "paragraph",
        text: "Brazil's fourth goal — the Carlos Alberto goal — has been analyzed frame by frame by coaches for half a century. It began with Clodoaldo in his own half, shimmying past four Italian players with a series of feints that would not have looked out of place in a futsal court. The ball moved to Rivelino, then to Jairzinho, then to Pelé at the edge of the box — who drew three defenders and laid the ball square for Carlos Alberto, arriving at full pace, to drive it into the far corner. Ten passes. Zero Italian touches. The most complete team goal in football history.",
      },
      {
        type: "heading",
        text: "The Lasting Standard",
      },
      {
        type: "paragraph",
        text: "Brazil 1970 won the Jules Rimet Trophy permanently with their third title. They won it playing football that was equal parts tactical intelligence and artistic expression — a combination that has never been fully replicated. Modern teams are faster, stronger, more data-driven. But none have matched that particular combination of beauty and effectiveness, individual brilliance and collective purpose, that made Brazil 1970 the greatest team the World Cup has ever seen.",
      },
    ],
  },
  {
    slug: "messi-2022-world-cup-greatest-tournament-performance",
    title: "Messi's 2022 World Cup: The Greatest Tournament Performance Ever?",
    excerpt:
      "Seven goals, three assists, and a World Cup winner's medal. Was Qatar 2022 the finest individual performance in the tournament's 92-year history?",
    category: "Player Analysis",
    categoryColor: "#FF69B4",
    date: "2026-04-24",
    readTime: 8,
    metaDescription:
      "Lionel Messi's 2022 World Cup performance analyzed — 7 goals, 3 assists, and carrying Argentina to glory. The case for the greatest individual tournament in history.",
    relatedMatchIds: [
      "argentina-vs-france-2022-final",
      "argentina-vs-netherlands-2022-qf",
    ],
    content: [
      {
        type: "paragraph",
        text: "The debate about Lionel Messi's place in football history was, for many years, blocked by a single question: why had he never won a World Cup? In the summer of 2022, at the age of 35, he answered it — and in doing so produced what many consider the greatest individual tournament performance in the 92 years of the FIFA World Cup.",
      },
      {
        type: "heading",
        text: "The Weight of Expectation: Messi Before 2022",
      },
      {
        type: "paragraph",
        text: "Messi had played in four previous World Cups. He had been the tournament's best player in 2014 — the Golden Ball — despite Argentina losing the final to Germany in extra time. He had been anonymous in 2018, eliminated in the round of 16. In 2006 and 2010, he had shown flashes but the team had never been built around him properly.",
      },
      {
        type: "paragraph",
        text: "Qatar 2022 was different. Coach Lionel Scaloni had spent four years building a team — a collective — in which Messi was the central reference point but not the only player capable of winning a game. Julián Álvarez was a revelation as the striker. Enzo Fernández controlled midfield. The defensive organization was compact and disciplined. For the first time, Messi had a team worthy of him.",
      },
      {
        type: "heading",
        text: "The Statistics: What Messi Actually Did",
      },
      {
        type: "paragraph",
        text: "Seven goals. Three assists. Every single match played. A penalty shootout save from Emiliano Martínez in the quarterfinal. A tournament-defining performance in the final against France that produced two goals — including a penalty and a first-time volley — plus one assist. His expected goals total across the tournament was 5.2, meaning he significantly outperformed even that elevated benchmark.",
      },
      {
        type: "paragraph",
        text: "But statistics alone do not capture what Messi did at Qatar 2022. He carried Argentina through the psychological crisis of losing to Saudi Arabia in the group stage. He scored the goal that beat Australia in the last 16 — a delicate, deliberate right-foot finish that announced he was playing at a different level. He scored twice against Croatia in the semifinal. And then came the final.",
      },
      {
        type: "quote",
        text: "In the final, Messi scored twice, won a penalty, and created one goal. At 35 years old, in the biggest match of his career, he was the best player on the pitch.",
      },
      {
        type: "heading",
        text: "The Final: 120 Minutes of the Highest Level",
      },
      {
        type: "paragraph",
        text: "Argentina's 3-3 draw with France — won on penalties — was possibly the greatest World Cup final ever played. Messi opened the scoring with a penalty after winning the foul himself. He added the second with a cool finish after an Ángel Di María cross. France came back through Kylian Mbappé's hat-trick, including a stunning equalizer in the 118th minute.",
      },
      {
        type: "paragraph",
        text: "Then came Messi's penalty shootout moment. In the 108th minute — extra time, score level at 3-3, every decision carrying the weight of legacy — he struck a powerful left-foot volley from outside the box that beat Hugo Lloris, only to be disallowed by VAR for an offside in the buildup. He stood and watched it ruled out, composed, and then went and scored his penalty in the shootout with the kind of certainty that comes only from a player who has fully accepted his own greatness.",
      },
      {
        type: "heading",
        text: "The Case for the Greatest: Historical Context",
      },
      {
        type: "paragraph",
        text: "The benchmark for the greatest individual World Cup performance has historically been Pelé in 1958 — 17 years old, scoring six goals, arriving like a supernatural visitation. Maradona in 1986 carries the argument for the greatest series of individual performances: the Hand of God goal, the Goal of the Century, carrying a limited Argentina squad to the trophy.",
      },
      {
        type: "paragraph",
        text: "Messi 2022 compares to both. Unlike Pelé, he carried a team over a full tournament as the undisputed best player at 35. Unlike Maradona, he did it against the deepest and most tactically sophisticated generation of opponents in football history. His 7 goals and 3 assists from a wide attacking role — dropping deep, drifting in behind, pressing from the front — represented the full tactical portfolio of the modern footballer played at maximum intensity throughout a seven-game tournament. Whether it is the greatest individual World Cup performance depends on your era. It is certainly the greatest of the modern era.",
      },
    ],
  },
  {
    slug: "evolution-of-the-false-9-world-cup",
    title: "The False 9: How a Tactical Idea Changed the World Cup",
    excerpt:
      "From Hidegkuti in 1954 to Messi in 2010 — the story of football's most disorienting attacking idea and how it rewrote World Cup history.",
    category: "Tactics",
    categoryColor: "#2DFF7C",
    date: "2026-04-23",
    readTime: 7,
    metaDescription:
      "The history and evolution of the false 9 in the World Cup — from Hungary's Nándor Hidegkuti in 1954 to Messi and beyond. How football's most disorienting tactic works.",
    relatedMatchIds: ["hungary-vs-west-germany-1954-final"],
    content: [
      {
        type: "paragraph",
        text: "The false 9 sounds simple: instead of a traditional center forward who stays high and stretches the defense, you use a player who drops deep — into midfield — pulling center backs out of position and creating space for runners from behind. The reality is one of football's most tactically disorienting ideas, and it has produced some of the World Cup's most memorable passages of play.",
      },
      {
        type: "heading",
        text: "The Origin: Hungary 1954 and Nándor Hidegkuti",
      },
      {
        type: "paragraph",
        text: "The false 9's World Cup origin can be traced to Hungary's extraordinary 1954 squad — the Mighty Magyars. Under coach Gusztáv Sebes, the Hungarians played a system that assigned Nándor Hidegkuti the role of a nominal center forward who dropped deep to combine in midfield. This left their actual scorers — the incomparable Ferenc Puskás and Sándor Kocsis — in space behind the opposition's center backs.",
      },
      {
        type: "paragraph",
        text: "The system was devastatingly effective. Hungary entered the 1954 World Cup having scored 25 goals in the group stages and semifinals. The problem was not tactical. Against West Germany in the final, Puskás was playing through injury, and a team that had seemed invincible stumbled to a 3-2 defeat. But the tactical idea — the deep-lying forward who serves and exploits simultaneously — had been demonstrated to the world.",
      },
      {
        type: "heading",
        text: "The Modern Reinvention: Messi at the 2010 World Cup",
      },
      {
        type: "paragraph",
        text: "When Pep Guardiola assigned Messi the false 9 role at Barcelona in late 2008, he was building on an idea that had lain dormant in mainstream football for decades. The results were spectacular: Real Madrid were beaten 6-2, then 5-0. Spain watched closely. At the 2010 World Cup, del Bosque experimented with the same idea — no fixed center forward, with Villa as a fluid striker and Messi's influence filtering into the Spanish template.",
      },
      {
        type: "paragraph",
        text: "What made the modern false 9 different from Hidegkuti's version was the space-creation mechanism. Hidegkuti dropped deep primarily to combine and then arrive late. Messi's false 9 generated overloads in central midfield that allowed fullbacks and wide players to advance into the spaces vacated on the wings. It was positional play operating on a more complex level — false 9 as a structural disruptor rather than just a positional variant.",
      },
      {
        type: "heading",
        text: "Why It Works: The Tactical Logic",
      },
      {
        type: "paragraph",
        text: "The false 9 creates a specific dilemma for opposing center backs. If they follow the false 9 into midfield, they leave space in behind for runners. If they hold their position, the false 9 receives the ball with no pressure and time to pick passes. There is no right answer — both responses create problems. The only defense is to assign a defensive midfielder to track the false 9, which creates its own numerical imbalances elsewhere.",
      },
      {
        type: "paragraph",
        text: "The false 9 also stretches the opposition's defensive shape horizontally. A traditional center forward encourages a defense to concentrate centrally. A false 9 who drops to the left or right of center pulls at least one center back sideways, which opens channels for wide forwards to cut inside and find the pockets the false 9 has vacated.",
      },
      {
        type: "quote",
        text: "The brilliance of the false 9 is that it does not ask the opposition to solve one problem. It asks them to solve three simultaneously.",
      },
      {
        type: "heading",
        text: "The Counter-Evolution: Why Teams Found the Answer",
      },
      {
        type: "paragraph",
        text: "Spain's defeat at the 2014 World Cup signaled that the tactical world had caught up with the false 9. Teams began pressing Spain's fullbacks rather than sitting deep, removing the time and space that made the positional rotations possible. The center backs who had been tormented by Messi at club level had also become more comfortable dropping into midfield themselves to track the false 9's movement.",
      },
      {
        type: "paragraph",
        text: "By 2022, the pure false 9 as Spain had played it in 2010 was largely extinct at the highest level. But its influence was everywhere: in the second striker who drops to combine, in the center forward who drifts to the left channel, in every modern system that uses a nominal forward to create midfield overloads. The false 9 did not disappear. It was absorbed into everything.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
