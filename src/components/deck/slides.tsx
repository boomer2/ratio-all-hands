import { useState } from "react";
import {
  ArrowLeftRight,
  Banknote,
  Landmark,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/cn";
import {
  ASSETS,
  COVERAGE,
  COLUMNS,
  FEES,
  FILTERS,
  FRICTIONS,
  LAYERS,
  MARKET,
  MATRIX,
  MATRIX_TAKEAWAY,
  MOATS,
  STATS,
  STEPS,
  TAXES,
  TITLES,
  type FeeId,
  type MatrixFilter,
} from "@/components/deck/content";

const tap =
  "transition-[transform,border-color,background-color,opacity] duration-200 ease-out active:enabled:scale-[0.96]";

function SlideFrame({
  eyebrow,
  title,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-8",
        compact ? "gap-2.5 py-3" : "gap-4 py-4 sm:py-5",
      )}
    >
      <header>
        <div className="kicker-rule mb-3" />
        <p className="text-xs font-medium tracking-tight text-plum">{eyebrow}</p>
        <h1
          className={cn(
            "mt-1 font-display font-semibold leading-tight text-ink",
            compact ? "text-2xl sm:text-3xl" : "text-2xl sm:text-3xl lg:text-4xl",
          )}
        >
          {title}
        </h1>
      </header>
      {children}
    </section>
  );
}

export function Cover({ onJump }: { onJump: (index: number) => void }) {
  return (
    <div className="flex min-h-full flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-8 px-4 py-6 sm:px-8 sm:py-8">
        <div>
          <div className="kicker-rule mb-4" />
          <p className="text-sm font-medium tracking-tight text-plum">
            Ratio Monthly All-Hands · Strategy & Tech Outlook
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-none text-ink sm:text-5xl lg:text-6xl">
            {TITLES.cover}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Asia-centric regulated middleware for stablecoin FX. The intro deck, checked against the product docs.
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-2 sm:gap-3">
          {STATS.map((stat) => (
            <li key={stat.value}>
              <button
                type="button"
                onClick={() => onJump(stat.slide)}
                className={cn(tap, "h-full w-full border border-line bg-surface p-3 text-left sm:p-5")}
              >
                <span className="block font-display text-2xl font-semibold text-accent tabular-nums sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs leading-snug text-muted sm:text-sm">{stat.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div>
          <ol className="grid grid-cols-5 gap-2">
            {["TWD", "JPYC", "USDT", "IDRX", "IDR"].map((asset, index) => (
              <li key={asset} className="relative">
                {index > 0 && <span className="absolute top-3 right-1/2 hidden h-px w-full bg-line sm:block" />}
                <div className="relative flex flex-col items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center border border-line bg-surface font-display text-xs text-plum">
                    {index + 1}
                  </span>
                  <span className="font-display text-sm font-medium text-ink">{asset}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-center text-xs text-faint">
            Arrow keys to move · N notes · F fullscreen · 1–9 jump
          </p>
        </div>
      </section>
      <div className="brand-band shrink-0" aria-hidden="true" />
    </div>
  );
}

export function Market() {
  return (
    <SlideFrame eyebrow="02  ·  SEAKJ, 2022–2027E" title={TITLES.market}>
      <div className="grid gap-3 lg:grid-cols-3">
        {MARKET.map((item) => (
          <article key={item.kicker} className="border border-line bg-surface p-4 sm:p-5">
            <p className="text-xs font-medium tracking-tight text-plum">{item.kicker}</p>
            <p className="mt-3 font-display text-5xl font-semibold text-accent tabular-nums">{item.growth}</p>
            <p className="mt-2 text-sm text-ink">{item.added}</p>
            <p className="mt-1 text-sm text-muted">{item.path}</p>
          </article>
        ))}
      </div>
      <p className="text-sm text-muted">
        Printed on the intro deck. Ecommerce is the headline only — the bars on that slide do not foot to 70% or $61B.
      </p>
    </SlideFrame>
  );
}

export function Taxes({ selected, setSelected }: { selected: number; setSelected: (index: number) => void }) {
  return (
    <SlideFrame eyebrow="03  ·  Where the cost hides" title={TITLES.taxes}>
      <div className="grid gap-3 sm:grid-cols-2">
        {TAXES.map((item, index) => {
          const on = selected === index;
          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={on}
              onClick={() => setSelected(index)}
              className={cn(
                tap,
                "border bg-surface p-4 text-left sm:p-5",
                on ? "border-accent" : "border-line",
              )}
            >
              <span className="text-xs font-medium tracking-tight text-plum">{item.kicker}</span>
              <span className="mt-1 block font-display text-xl font-semibold text-ink">{item.title}</span>
              <span className="mt-2 block text-sm leading-snug text-muted">{item.body}</span>
            </button>
          );
        })}
      </div>
    </SlideFrame>
  );
}

export function Complexity() {
  return (
    <SlideFrame eyebrow="04  ·  After the stablecoin" title={TITLES.complexity}>
      <div className="grid gap-3 sm:grid-cols-2">
        {FRICTIONS.map((item) => (
          <article key={item.title} className="border border-line bg-surface p-4 sm:p-5">
            <h2 className="font-display text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-snug text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </SlideFrame>
  );
}

export function Stack({ selected, setSelected }: { selected: number; setSelected: (index: number) => void }) {
  const current = LAYERS[selected] ?? LAYERS[0];
  return (
    <SlideFrame eyebrow="05  ·  No forks" title={TITLES.stack}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {LAYERS.map((item, index) => {
          const on = selected === index;
          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={on}
              onClick={() => setSelected(index)}
              className={cn(
                tap,
                "min-h-11 border px-3 py-3 text-left font-display text-sm font-semibold sm:text-base",
                on ? "border-accent bg-surface-2 text-ink" : "border-line bg-surface text-ink",
              )}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="border border-line bg-surface p-4 sm:p-5">
        <h2 className="font-display text-xl font-semibold text-ink">{current.title}</h2>
        <p className="mt-2 text-sm text-muted sm:text-base">{current.body}</p>
      </div>
    </SlideFrame>
  );
}

export function Coverage() {
  return (
    <SlideFrame eyebrow="08  ·  Intro legend" title={TITLES.coverage}>
      <div className="grid gap-3 lg:grid-cols-3">
        {COVERAGE.map((group, index) => (
          <article
            key={group.status}
            className={cn("border bg-surface p-4 sm:p-5", index === 0 ? "border-accent" : "border-line")}
          >
            <p className="text-xs font-medium tracking-tight text-plum">{group.status}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="font-display text-lg font-semibold text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="border border-line bg-canvas-2 px-4 py-3 text-sm leading-snug text-ink">
        JPYC matches the product docs: USDT, IDRX, and IDRP all swap against it. MYR is the one still in progress.
      </p>
    </SlideFrame>
  );
}

const STEP_ICONS = [Wallet, ArrowLeftRight, Landmark, Banknote] as const;

const HOT: number[][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3],
];

export function Flow({ step, setStep }: { step: number; setStep: (index: number) => void }) {
  const current = STEPS[step];
  const hot = HOT[step] ?? [];

  return (
    <SlideFrame eyebrow="09  ·  Taiwan → Indonesia" title={TITLES.flow}>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STEPS.map((item, index) => {
          const Icon = STEP_ICONS[index];
          const on = step === index;
          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={on}
              onClick={() => setStep(index)}
              className={cn(
                tap,
                "rounded-none border px-3 py-3 text-left",
                on ? "border-accent bg-surface-2" : "border-line bg-surface",
              )}
            >
              <Icon className={cn("h-4 w-4", on ? "text-accent-soft" : "text-faint")} aria-hidden />
              <span className="mt-2 block text-xs text-faint">0{index + 1}</span>
              <span className="block font-display text-sm font-semibold text-ink sm:text-base">
                {item.short}
              </span>
            </button>
          );
        })}
      </div>

      <ol className="grid grid-cols-4 gap-1 px-1">
        {ASSETS.map((asset, index) => {
          const isHot = hot.includes(index);
          const done = index < Math.min(...hot);
          const lit = isHot || done;
          return (
            <li key={asset} className="relative flex flex-col items-center gap-1.5">
              {index > 0 && (
                <span
                  className={cn(
                    "absolute top-3 right-1/2 h-px w-full",
                    lit ? "bg-accent" : "bg-line",
                  )}
                />
              )}
              <span
                className={cn(
                  "relative z-10 h-6 w-6 rounded-none border",
                  isHot && "border-accent bg-accent",
                  done && "border-accent bg-canvas",
                  !isHot && !done && "border-line bg-canvas",
                )}
              />
              <span className={cn("font-display text-xs sm:text-sm", isHot ? "text-ink" : "text-faint")}>
                {asset}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="rounded-none border border-line bg-surface p-4 sm:p-5">
        <p className="text-xs font-medium tracking-tight text-plum">{current.owner}</p>
        <h2 className="mt-1 font-display text-xl font-semibold text-ink">{current.title}</h2>
        <p className="mt-2 text-sm text-muted sm:text-base">{current.body}</p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <p className="border border-line bg-surface px-4 py-3 text-sm text-plum">
          Correspondent rails · 1–3 days · FX often priced after you commit
        </p>
        <p className="border border-accent bg-surface-2 px-4 py-3 text-sm text-ink">
          Ratio swap · under 1 second on Kaia · fiat timing is the partner’s
        </p>
      </div>
    </SlideFrame>
  );
}

export function Matrix({
  filter,
  setFilter,
}: {
  filter: MatrixFilter;
  setFilter: (filter: MatrixFilter) => void;
}) {
  const rival = filter === "all" ? null : COLUMNS.find((column) => column.id === filter);
  const ratio = COLUMNS[0];

  return (
    <SlideFrame eyebrow="07  ·  Intro comparison" title={TITLES.matrix} compact>
      <div role="radiogroup" aria-label="Isolate a competitor" className="flex flex-wrap gap-2">
        {FILTERS.map((item) => {
          const on = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setFilter(item.id)}
              className={cn(
                tap,
                "min-h-11 border px-3 text-sm font-medium",
                on ? "border-ink bg-ink text-paper" : "border-line bg-surface text-ink",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {rival ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {[ratio, rival].map((column) => (
            <article
              key={column.id}
              className={cn("border p-4", column.id === "ratio" ? "border-accent bg-surface-2" : "border-line bg-surface")}
            >
              <p className="font-display text-2xl font-semibold text-ink">{column.name}</p>
              <p className="text-xs text-plum">{column.sub}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {MATRIX.map((row) => {
                  const yes = row.cells[column.id] === "Yes";
                  return (
                    <li key={row.dimension} className="flex items-center gap-3">
                      <span
                        className={cn("h-4 w-4 shrink-0", yes ? "bg-accent" : "border border-line bg-canvas")}
                        aria-hidden
                      />
                      <span className={cn("text-sm", yes ? "text-ink" : "text-faint")}>{row.dimension}</span>
                      <span className="sr-only">{yes ? "Yes" : "No"}</span>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {MATRIX.map((row) => {
            const holders = COLUMNS.filter((column) => row.cells[column.id] === "Yes");
            return (
              <div key={row.dimension} className="border border-line bg-surface px-3 py-2.5 sm:px-4">
                <p className="text-xs font-medium tracking-tight text-plum">{row.dimension}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {holders.map((column) => (
                    <span
                      key={column.id}
                      className={cn(
                        "inline-flex min-h-8 items-center px-3 font-display text-sm font-semibold",
                        column.id === "ratio" ? "bg-accent text-paper" : "bg-plum text-paper",
                      )}
                    >
                      {column.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p className="text-sm leading-snug text-ink">{MATRIX_TAKEAWAY[filter]}</p>
    </SlideFrame>
  );
}

export function Moats({ open, setOpen }: { open: number; setOpen: (index: number) => void }) {
  return (
    <SlideFrame eyebrow="06  ·  Five parts" title={TITLES.moats} compact>
      <div className="flex flex-col gap-2">
        {MOATS.map((moat, index) => {
          const on = open === index;
          return (
            <button
              key={moat.title}
              type="button"
              aria-expanded={on}
              onClick={() => setOpen(on ? -1 : index)}
              className={cn(
                tap,
                "border bg-surface px-4 py-3 text-left",
                on ? "border-accent" : "border-line",
              )}
            >
              <span className="flex items-baseline gap-3">
                <span className="font-display text-sm text-accent-soft">0{index + 1}</span>
                <span className="font-display text-lg font-semibold text-ink sm:text-xl">{moat.title}</span>
              </span>
              <span className="mt-1 block pl-8 text-sm text-muted">{moat.lede}</span>
              <div className="expand-panel pl-8" data-open={on ? "true" : "false"}>
                <div>
                  <p className="pt-3 text-sm leading-relaxed text-ink">{moat.body}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </SlideFrame>
  );
}

export function Economics({ fee, setFee }: { fee: FeeId; setFee: (id: FeeId) => void }) {
  const [hover, setHover] = useState<FeeId | null>(null);
  const active = hover ?? fee;
  const current = FEES.find((item) => item.id === active) ?? FEES[0];

  return (
    <SlideFrame eyebrow="10  ·  What the quote actually contains" title={TITLES.economics}>
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-none border border-line bg-surface p-4 sm:p-5">
          <p className="font-display text-5xl font-semibold text-accent leading-none">Shown</p>
          <p className="mt-2 font-display text-lg text-ink">before you send</p>
          <p className="mt-2 text-sm leading-snug text-muted">
            Platform fee plus spread. Both are in the firm quote. The docs do not publish an IDR total.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted">
            {FEES.map((item, index) => (
              <span key={item.id} className={active === item.id ? "text-ink" : "text-faint"}>
                {index > 0 ? " + " : ""}
                {item.short}
              </span>
            ))}
            <span className="font-medium text-ink"> = all-in, in the quote</span>
          </p>
          {FEES.map((item) => {
            const on = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={fee === item.id}
                onMouseEnter={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(item.id)}
                onBlur={() => setHover(null)}
                onClick={() => setFee(item.id)}
                className={cn(
                  tap,
                  "rounded-none border px-4 py-3 text-left",
                  on ? "border-accent bg-surface-2" : "border-line bg-surface",
                )}
              >
                <span className="font-display text-base font-semibold text-ink">{item.label}</span>
                {on && <span className="mt-1 block text-sm leading-snug text-muted">{item.body}</span>}
              </button>
            );
          })}
          <p className="sr-only">{current.body}</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <p className="border border-line bg-surface px-4 py-3 text-sm leading-snug text-plum">
          38 bps is a sales-draft placeholder. The component split was never sourced.
        </p>
        <p className="border border-accent bg-surface-2 px-4 py-3 text-sm leading-snug text-ink">
          No curve slippage. A larger ticket takes a lower fee tier, not the same bps.
        </p>
      </div>
    </SlideFrame>
  );
}
