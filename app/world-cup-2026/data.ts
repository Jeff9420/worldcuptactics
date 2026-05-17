export interface WorldCup2026Group {
  slug: string;
  name: string;
  teams: string[];
  tacticalFocus: string;
  keyQuestion: string;
}

export interface WorldCup2026Team {
  slug: string;
  name: string;
  groupSlug: string;
  groupName: string;
  confederation: string;
  profile: string;
  likelyShape: string;
  tacticalFocus: string;
  keyQuestion: string;
  knockoutCeiling: string;
  relatedArticleSlugs: string[];
}

export const WORLD_CUP_2026_GROUPS: WorldCup2026Group[] = [
  {
    slug: "a",
    name: "Group A",
    teams: ["Mexico", "South Africa", "Korea Republic", "Czechia"],
    tacticalFocus: "Mexico's home-game pressure against three teams comfortable without long possession spells.",
    keyQuestion: "Can Mexico control emotional tempo while avoiding transition exposure?",
  },
  {
    slug: "b",
    name: "Group B",
    teams: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
    tacticalFocus: "Canada's vertical pace meets Switzerland's tournament control and Bosnia's set-piece threat.",
    keyQuestion: "Does Canada have enough midfield security to turn home energy into points?",
  },
  {
    slug: "c",
    name: "Group C",
    teams: ["Brazil", "Morocco", "Haiti", "Scotland"],
    tacticalFocus: "Brazil's attacking width against Morocco's compact block and Scotland's direct pressure.",
    keyQuestion: "Can Brazil break disciplined mid-blocks without leaving counter space?",
  },
  {
    slug: "d",
    name: "Group D",
    teams: ["United States", "Paraguay", "Australia", "Türkiye"],
    tacticalFocus: "A physically intense group built around pressing, second balls, and fullback space.",
    keyQuestion: "Can the United States convert athletic superiority into settled attacking control?",
  },
  {
    slug: "e",
    name: "Group E",
    teams: ["Germany", "Curaçao", "Côte d'Ivoire", "Ecuador"],
    tacticalFocus: "Germany's possession structure against three opponents with different counter-attacking speeds.",
    keyQuestion: "Will Germany defend transitions cleanly enough to avoid another group-stage crisis?",
  },
  {
    slug: "f",
    name: "Group F",
    teams: ["Netherlands", "Japan", "Tunisia", "Sweden"],
    tacticalFocus: "One of the most tactically varied groups: Dutch build-up, Japan's press, Sweden's aerial game, Tunisia's block.",
    keyQuestion: "Which team controls the spaces behind aggressive wide pressing?",
  },
  {
    slug: "g",
    name: "Group G",
    teams: ["Belgium", "Egypt", "IR Iran", "New Zealand"],
    tacticalFocus: "Belgium's possession quality against Egypt's star-led transitions and Iran's deep defensive discipline.",
    keyQuestion: "Can Belgium create enough central penetration against lower, compact blocks?",
  },
  {
    slug: "h",
    name: "Group H",
    teams: ["Spain", "Cabo Verde", "Saudi Arabia", "Uruguay"],
    tacticalFocus: "Spain's positional play faces Uruguay's pressure, Saudi Arabia's compactness, and Cabo Verde's transition threat.",
    keyQuestion: "Can Spain protect rest defense when fullbacks and interiors advance together?",
  },
  {
    slug: "i",
    name: "Group I",
    teams: ["France", "Senegal", "Norway", "Iraq"],
    tacticalFocus: "France's depth and transition power against Senegal's athleticism and Norway's penalty-box threat.",
    keyQuestion: "Who controls the direct channel battles around France and Norway's forwards?",
  },
  {
    slug: "j",
    name: "Group J",
    teams: ["Argentina", "Algeria", "Austria", "Jordan"],
    tacticalFocus: "Argentina's tempo control meets Austria's pressing, Algeria's carrying power, and Jordan's low-block survival plan.",
    keyQuestion: "Can Argentina manage minutes while still winning the group cleanly?",
  },
  {
    slug: "k",
    name: "Group K",
    teams: ["Portugal", "Congo DR", "Uzbekistan", "Colombia"],
    tacticalFocus: "Portugal's creators, Colombia's duels, Uzbekistan's compact spacing, and Congo DR's transition power.",
    keyQuestion: "Can Portugal turn territorial control into clean chances before Colombia's direct test?",
  },
  {
    slug: "l",
    name: "Group L",
    teams: ["England", "Croatia", "Ghana", "Panama"],
    tacticalFocus: "England's attacking depth against Croatia's control, Ghana's pace, and Panama's defensive resilience.",
    keyQuestion: "Can England dictate midfield tempo without becoming predictable in settled possession?",
  },
];

export const WORLD_CUP_2026_TEAMS: WorldCup2026Team[] = [
  {
    slug: "portugal",
    name: "Portugal",
    groupSlug: "k",
    groupName: "Group K",
    confederation: "UEFA",
    profile:
      "Portugal enter 2026 with one of the deepest attacking squads in the tournament and a group path that should reward controlled possession.",
    likelyShape: "4-2-3-1 shifting into a 3-2-5 in possession",
    tacticalFocus:
      "Bruno Fernandes, Bernardo Silva, Rafael Leão and the striker choice define whether Portugal become a fluid chance-creation team or a slower crossing side.",
    keyQuestion:
      "Can Portugal build the attack around spacing and pressing balance rather than nostalgia around Cristiano Ronaldo's role?",
    knockoutCeiling:
      "Title contender if the front line presses coherently and the fullbacks do not leave transition lanes open.",
    relatedArticleSlugs: [
      "portugal-2026-world-cup-squad-analysis",
      "portugal-2026-world-cup-tactical-analysis",
      "2026-world-cup-group-k-preview",
    ],
  },
  {
    slug: "colombia",
    name: "Colombia",
    groupSlug: "k",
    groupName: "Group K",
    confederation: "CONMEBOL",
    profile:
      "Colombia are the main tactical threat to Portugal in Group K because they can turn long defensive spells into direct attacks quickly.",
    likelyShape: "4-2-3-1 or 4-3-3 with aggressive wide transitions",
    tacticalFocus:
      "Luis Díaz gives Colombia a route to punish high fullbacks, while their midfield duels can disrupt opponents who want clean central circulation.",
    keyQuestion:
      "Can Colombia keep enough compactness behind the ball while still releasing their wide runners early?",
    knockoutCeiling:
      "Dangerous knockout opponent if they finish chances from transition and keep the back line connected.",
    relatedArticleSlugs: [
      "2026-world-cup-group-k-preview",
      "portugal-2026-world-cup-squad-analysis",
      "world-cup-2026-standings-explained",
    ],
  },
  {
    slug: "brazil",
    name: "Brazil",
    groupSlug: "c",
    groupName: "Group C",
    confederation: "CONMEBOL",
    profile:
      "Brazil have the individual quality to dominate Group C, but the tournament question is whether their rest defense matches their attacking ambition.",
    likelyShape: "4-3-3 with wide isolation and aggressive fullback support",
    tacticalFocus:
      "Brazil's wide forwards can decide games early, but Morocco and Scotland can expose the spaces left when both fullbacks advance.",
    keyQuestion:
      "Can Brazil create sustained pressure without becoming vulnerable to the first pass after losing the ball?",
    knockoutCeiling:
      "Title contender if midfield control and transition defense hold under knockout pressure.",
    relatedArticleSlugs: [
      "brazil-2026-world-cup-squad-analysis",
      "brazil-2026-world-cup-tactical-analysis",
      "brazil-2026-opening-match-preview",
    ],
  },
  {
    slug: "france",
    name: "France",
    groupSlug: "i",
    groupName: "Group I",
    confederation: "UEFA",
    profile:
      "France remain one of the deepest squads in world football, with enough pace and ball-winning power to win games in several different ways.",
    likelyShape: "4-2-3-1 or 4-3-3 built around transition speed",
    tacticalFocus:
      "France can absorb pressure and break quickly, but Senegal and Norway make Group I a real test of aerial defending and direct-channel control.",
    keyQuestion:
      "Does France use its depth to control the group efficiently, or does the attack become too dependent on transition moments?",
    knockoutCeiling:
      "Final contender because their bench quality should matter more in the expanded eight-match route.",
    relatedArticleSlugs: [
      "france-2026-world-cup-squad-analysis",
      "france-2026-world-cup-tactical-analysis",
      "france-2026-opening-match-preview",
    ],
  },
  {
    slug: "england",
    name: "England",
    groupSlug: "l",
    groupName: "Group L",
    confederation: "UEFA",
    profile:
      "England's draw is manageable on paper, but Croatia, Ghana and Panama create three different problems for a squad with major attacking depth.",
    likelyShape: "4-2-3-1 with heavy competition between creators",
    tacticalFocus:
      "England need a stable midfield platform so their attackers can rotate without the side becoming slow and predictable against compact blocks.",
    keyQuestion:
      "Can England use their attacking depth without losing tempo control in midfield?",
    knockoutCeiling:
      "Semi-final or better if the midfield selection gives the front line enough rhythm and the defense enough protection.",
    relatedArticleSlugs: [
      "england-2026-world-cup-squad-analysis",
      "england-2026-world-cup-tactical-analysis",
      "england-vs-croatia-2026-preview",
    ],
  },
];

export function getWorldCup2026Group(slug: string) {
  return WORLD_CUP_2026_GROUPS.find((group) => group.slug === slug.toLowerCase());
}

export function getWorldCup2026Team(slug: string) {
  return WORLD_CUP_2026_TEAMS.find((team) => team.slug === slug.toLowerCase());
}

export function getWorldCup2026TeamByName(name: string) {
  return WORLD_CUP_2026_TEAMS.find((team) => team.name.toLowerCase() === name.toLowerCase());
}
