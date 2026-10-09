export const SLIDES = [
  { id: "cover", label: "Opening" },
  { id: "market", label: "The market" },
  { id: "taxes", label: "The cost stack" },
  { id: "complexity", label: "The complexity" },
  { id: "stack", label: "The stack" },
  { id: "moats", label: "The moat" },
  { id: "matrix", label: "The set" },
  { id: "coverage", label: "Coverage" },
  { id: "flow", label: "The corridor" },
  { id: "economics", label: "The quote" },
] as const;

export type SlideId = (typeof SLIDES)[number]["id"];

export const TITLES: Record<SlideId, string> = {
  cover: "Moving Asian Currencies on Stablecoin Rails",
  market: "Inter-Asian Cross-Border Volume Is Still Compounding",
  taxes: "A Hidden Cost Stack Sits in Every Cross-Border Payment",
  complexity: "Stablecoins Cut Settlement Friction and Raise FX Complexity",
  stack: "Asia-Centric Middleware, Built as One Stack",
  moats: "Institutional-Grade Stablecoin FX Is the Moat",
  matrix: "No Incumbent Controls On-Chain FX Execution in Asia",
  coverage: "Compliant Asian Stablecoins, by the Intro’s Own Status",
  flow: "How Value Moves: TWD Collection, Then a Sub-Second IDR Swap",
  economics: "The All-In Cost Is in the Quote — Not a Published Bps",
};

export const NOTES: Record<SlideId, string[]> = {
  cover: [
    "This room is the intro deck plus the product docs. Where they disagree, brief the docs.",
    "Do not say 38 bps. That figure is only in the sales draft.",
    "Do not say zero slippage at any size. There is no AMM curve. The fee tier still changes with size.",
    "Live book in the docs: five corridors across USDT, IDRX, IDRP, and JPYC.",
  ],
  market: [
    "SEAKJ, 2022 to 2027E, as printed on the intro slide. The slide cites no underlying source.",
    "Revenue foots: 138.5 to 370.9 is 232.4 added, 168% growth. Tourism foots: 51.3 to 222.7 is 171.4 added, 334%.",
    "Ecommerce does not foot. The headline says 70% and 61 billion added. The bars read 460.6 and 763.2, and the stacks are all labeled 129.1%. Do not present those bars.",
    "Tourism’s 51.3 and 222.7 are the same numbers as the lime portion of the revenue stack. Say that if someone notices.",
  ],
  taxes: [
    "Four taxes, in the intro’s words: compliance, execution, timing, capital.",
    "This replaces the old TradFi-versus-AMM opener. The AMM point is the next slide.",
    "Do not attach the 6.4% World Bank figure here. That is a 200-dollar retail average, and it is not on this slide.",
  ],
  complexity: [
    "About 99% USD-pegged is the intro’s figure. It was not re-pulled from a supply dashboard in this pass.",
    "The punchline: local stablecoins remove a settlement problem and create an FX problem. That is the product.",
  ],
  stack: [
    "Six blocks, from the intro: on-ramp, yield, FX, liquidity hub, off-ramp, communication.",
    "Docs agree Ratio runs the FX leg and the pools. On-ramp and off-ramp are partner types. Ratio does not custody the swap.",
    "Say ‘no forks’ only as the intro’s line. It is a positioning claim, not an audit.",
  ],
  moats: [
    "Five pillars, intro slide 11. Click if the room wants the caveat.",
    "Zero slippage at scale and structurally lowest spreads are intro claims. Docs: no curve slippage inside limits, and the spread widens with volatility, off-hours, and inventory.",
    "Single-asset pools are real. USDT, IDRX, IDRP, and JPYC are the live tokens, not a 16-coin book.",
  ],
  matrix: [
    "This is the intro’s competitor page, not a new study. Source line on their slide: Pitchbook and the internet.",
    "Ratio is marked at 16 stablecoins. Coverage now shows four deployed: USD, IDRX, IDRP, JPYC. The docs list those four live tokens.",
    "StableFX on that slide is US and EU, 11 coins. Public StableFX launched on Arc with USDC and EURC.",
    "Seed marks — Ratio 15.0, DFX 46.2, Bridge 44.0 — are the intro’s Pitchbook line. Do not update them from memory.",
  ],
  coverage: [
    "Deployment complete: USD, IDRX, IDRP, and JPYC. That matches the product docs.",
    "MYR stays in progress. KRW, THB, SGD, PHP, and AED stay confirmed or in discussion.",
    "Docs future table is narrower: KRW confirmed, CNH, PHP, and THB in discussion. AED, SGD, and MYR are not on that table.",
  ],
  flow: [
    "Ratio does not touch TWD. The operator must already hold or source USDT.",
    "The Ratio leg is USDT to IDRX or IDRP, firm quote, Kaia, under one second.",
    "Do not say under ten minutes end to end, and do not name GoPay or OVO.",
  ],
  economics: [
    "Do not quote 38 bps. Public docs publish a structure, not an IDR total.",
    "Platform fee is a variable bps by size tier plus a small fixed amount. Spread has six parts.",
    "Larger tickets get a lower variable fee. That is the opposite of an AMM, and it is not a flat fee.",
  ],
};

export const STATS = [
  {
    value: "< 1s",
    label: "On-chain finality on Kaia",
    slide: 8,
  },
  {
    value: "5",
    label: "Live corridors in the docs",
    slide: 7,
  },
  {
    value: "60s",
    label: "Firm quote, then it expires",
    slide: 9,
  },
] as const;

export const MARKET = [
  {
    kicker: "Total cross-border revenue",
    growth: "168%",
    added: "$232.4B added",
    path: "$138.5B → $370.9B",
  },
  {
    kicker: "Cross-border ecommerce",
    growth: "70%",
    added: "$61B added",
    path: "2022 → 2027E",
  },
  {
    kicker: "Tourism spend",
    growth: "334%",
    added: "$171.4B added",
    path: "$51.3B → $222.7B",
  },
] as const;

export const TAXES = [
  {
    kicker: "Compliance tax",
    title: "Regulatory patchwork",
    body: "Corridor-by-corridor approvals, limits, and reporting. The misalignment is an operating cost, not a legal footnote.",
  },
  {
    kicker: "Execution tax",
    title: "Execution leakage",
    body: "Multi-hop conversion across fragmented pools stacks the spread, adds slippage, and fails quotes.",
  },
  {
    kicker: "Timing tax",
    title: "T+ delays",
    body: "Domestic payout rails run on cutoffs. Operators carry float, manage breaks, and pay late.",
  },
  {
    kicker: "Capital tax",
    title: "Working-capital drag",
    body: "Cutoffs and payout SLAs force prefunding. Capital sits in buffers instead of moving.",
  },
] as const;

export const FRICTIONS = [
  {
    title: "USD benchmark rail",
    body: "About 99% of stablecoin supply is USD-pegged, so local rails in Asia still do not meet.",
  },
  {
    title: "Pair and pool explosion",
    body: "Each new local stablecoin multiplies routes. Operations get heavier corridor by corridor.",
  },
  {
    title: "Liquidity fragmentation",
    body: "Without coordination, depth splits across venues. Pricing gets worse and fills get slower.",
  },
  {
    title: "AMM slippage",
    body: "A curve gets worse as size grows. Institutional tickets pay for that with a wider effective spread.",
  },
] as const;

export const LAYERS = [
  {
    title: "On-ramp",
    body: "Fiat becomes a stablecoin before Ratio sees it. In the docs this is a partner type, not a Ratio balance.",
  },
  {
    title: "FX engine",
    body: "The leg Ratio runs: an oracle mid, a firm quote, and an atomic swap on Kaia.",
  },
  {
    title: "Yield engine",
    body: "Idle inventory can be deployed. Docs pay LP rewards in USDT. Class B is the yield sleeve.",
  },
  {
    title: "Liquidity hub",
    body: "One pool per stablecoin. An LP posts a single asset and does not take impermanent loss.",
  },
  {
    title: "Off-ramp",
    body: "Local fiat is the partner’s contract. Ratio does not pay the beneficiary.",
  },
  {
    title: "Communication",
    body: "Payment and compliance fields move with the ticket. ‘Zero lost in translation’ is the intro’s claim, not a measured rate.",
  },
] as const;

export const COVERAGE = [
  {
    status: "Deployment complete",
    items: ["USD · USDT", "IDR · IDRX", "IDR · IDRP", "JPY · JPYC"],
  },
  {
    status: "In progress",
    items: ["MYR"],
  },
  {
    status: "Confirmed or in discussion",
    items: ["KRW", "THB", "SGD", "PHP", "AED"],
  },
] as const;

export const PARTNERS = [
  {
    name: "LINE",
    role: "No.1 messenger in Japan and Southeast Asia",
    points: ["196M+ MAU", "10M+ LINE Bank users in TH, TW, ID", "12.7M+ LINE Pay users in TW", "7+ currencies in the stablecoin app"],
  },
  {
    name: "Kaia",
    role: "The chain Ratio settles on",
    points: ["100M+ wallets", "8.0M+ unique users a month", "357M+ on-chain transactions", "16 issuers onboarded or in discussion"],
  },
] as const;

export const STEPS = [
  {
    short: "On-ramp",
    title: "Sender on-ramp",
    owner: "Client",
    body: "The operator collects TWD and must already hold or source USDT. Ratio does not convert TWD.",
  },
  {
    short: "Atomic swap",
    title: "Ratio atomic swap",
    owner: "Ratio",
    body: "Firm quote, then USDT to IDRX or IDRP on Kaia. Finality is under one second.",
  },
  {
    short: "Redeem",
    title: "Fiat redemption",
    owner: "Local partner",
    body: "A regulated Indonesian partner redeems the local stablecoin one-for-one into rupiah.",
  },
  {
    short: "Payout",
    title: "Recipient payout",
    owner: "Local partner",
    body: "The partner pays a bank account or e-wallet. That timing is not published.",
  },
] as const;

export const ASSETS = ["TWD", "USDT", "IDRX", "IDR"] as const;

export const COLUMN_IDS = ["ratio", "mento", "xweave", "metacomp", "dfx", "stablefx", "bridge"] as const;
export type ColumnId = (typeof COLUMN_IDS)[number];
export type MatrixFilter = "all" | Exclude<ColumnId, "ratio">;

export const COLUMNS: { id: ColumnId; name: string; sub: string }[] = [
  { id: "ratio", name: "Ratio", sub: "APAC" },
  { id: "mento", name: "Mento", sub: "Global" },
  { id: "xweave", name: "Xweave", sub: "Asia & ME" },
  { id: "metacomp", name: "Metacomp", sub: "SEA & ME" },
  { id: "dfx", name: "DFX", sub: "Global" },
  { id: "stablefx", name: "StableFX", sub: "US & EU" },
  { id: "bridge", name: "Bridge", sub: "US" },
];

export const FILTERS: { id: MatrixFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mento", label: "Mento" },
  { id: "xweave", label: "Xweave" },
  { id: "metacomp", label: "Metacomp" },
  { id: "dfx", label: "DFX" },
  { id: "stablefx", label: "StableFX" },
  { id: "bridge", label: "Bridge" },
];

export const MATRIX: { dimension: string; cells: Record<ColumnId, string> }[] = [
  {
    dimension: "Single-sided pools",
    cells: { ratio: "Yes", mento: "No", xweave: "No", metacomp: "No", dfx: "No", stablefx: "No", bridge: "No" },
  },
  {
    dimension: "No curve slippage",
    cells: { ratio: "Yes", mento: "No", xweave: "No", metacomp: "No", dfx: "No", stablefx: "No", bridge: "No" },
  },
  {
    dimension: "Oracle price",
    cells: { ratio: "Yes", mento: "Yes", xweave: "No", metacomp: "No", dfx: "Yes", stablefx: "No", bridge: "No" },
  },
  {
    dimension: "Direct issuer",
    cells: { ratio: "Yes", mento: "No", xweave: "No", metacomp: "Yes", dfx: "No", stablefx: "Yes", bridge: "Yes" },
  },
];

export const MATRIX_TAKEAWAY: Record<MatrixFilter, string> = {
  all: "The intro marks Ratio at 16 stablecoins and a $15.0M seed. Coverage shows four deployed assets: USD, IDRX, IDRP, and JPYC. Brief that, not the 16.",
  mento: "Mento: decentralized multi-currency protocol. 17 stablecoins, global, oracle pricing, seed not shown.",
  xweave: "Xweave: fiat-to-fiat orchestration, Asia and the Middle East. Stablecoin count and seed not shown.",
  metacomp: "Metacomp: FX and digital-asset infrastructure. 10 stablecoins, direct issuer mark, seed not shown.",
  dfx: "DFX: decentralized FX for stablecoins. 9 assets, global, oracle pricing. Intro seed: $46.2M.",
  stablefx: "StableFX, as this intro prints it: institutional FX, US and EU, 11 stablecoins, direct issuer, seed not shown.",
  bridge: "Bridge: payments platform, US, 5 stablecoins, direct issuer. Intro seed: $44.0M.",
};

export const MOATS = [
  {
    title: "FX engine",
    lede: "Rules-based prices inside Ratio’s own pools, through one API.",
    body: "The intro calls these real-world FX rates. The docs name the sources: Pyth, RedStone as fallback, OANDA as a cross-check, Orakl on the fill.",
  },
  {
    title: "Rebalancing",
    lede: "Inventory is managed continuously, not by a second live taker.",
    body: "Skew attracts the other side first. Past a threshold, Ratio goes to external makers. Thin inventory widens the spread. It does not guarantee the tightest price in the market.",
  },
  {
    title: "Liquidity hub",
    lede: "Single-asset pools. The intro’s picture is USDT, IDRX, and JPYC.",
    body: "‘Zero slippage at scale’ means no bonding curve. It does not mean the same bps at $10k and $1M. Larger tickets take a lower fee tier.",
  },
  {
    title: "Communication layer",
    lede: "Beneficiary and compliance fields travel in one format.",
    body: "The intro’s line is zero lost-in-translation errors. Treat that as a design goal. There is no published error rate.",
  },
  {
    title: "Yield engine",
    lede: "Fees and idle inventory are meant to return to LPs.",
    body: "Docs support this shape: pool LPs earn swap fees, paid in USDT, and Class B can sit in a yield strategy. It is not a second customer product.",
  },
] as const;

export const FEES = [
  {
    id: "variable",
    short: "Variable",
    label: "Variable platform fee",
    body: "A bps rate by size tier. Larger tickets pay a lower rate. The schedule is per corridor, read from the API, not from a slide.",
  },
  {
    id: "fixed",
    short: "Fixed",
    label: "Fixed platform fee",
    body: "A small flat amount per destination currency and tier, charged in the input token.",
  },
  {
    id: "spread",
    short: "Spread",
    label: "Dynamic spread",
    body: "Six parts: base, volatility, liquidity, off-market hours, risk state, and inventory skew. Skew can be negative. This is not a hidden markup on the oracle mid.",
  },
] as const;

export type FeeId = (typeof FEES)[number]["id"];

export const PHASES = [
  {
    when: "~26.Q1",
    state: "Build · passed",
    title: "Core tech",
    points: ["Strategy and architecture", "Core stack", "Foundational partnerships"],
  },
  {
    when: "26.Q2",
    state: "Establish · docs are ahead",
    title: "FX on mainnet",
    points: ["Intro: deploy FX and liquidity", "Docs already list five live corridors", "First flows are no longer a future tense"],
  },
  {
    when: "26.Q4",
    state: "Expand · still open",
    title: "Orchestration",
    points: ["Ramp integrations", "Communication channel", "Orchestration API as the product"],
  },
] as const;
