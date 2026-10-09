import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ScrollText, X } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  NOTES,
  SLIDES,
  TITLES,
  type FeeId,
  type MatrixFilter,
  type SlideId,
} from "@/components/deck/content";
import { Cover, Coverage, Complexity, Economics, Flow, Market, Matrix, Moats, Stack, Taxes } from "@/components/deck/slides";

const tap =
  "transition-transform duration-150 ease-out active:enabled:scale-[0.96]";

function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden>
      <path
        d="M0 18.8589H13.7099C17.709 18.8589 20.9509 22.1008 20.9509 26.0999V44H0V18.8589Z"
        fill="currentColor"
      />
      <path d="M0 0H29.3313V9.51976C29.3313 13.5188 26.0894 16.7607 22.0903 16.7607H0V0Z" fill="currentColor" />
      <path
        d="M31.4252 0H43.9957V25.1411H38.6662C34.6671 25.1411 31.4252 21.8992 31.4252 17.9001V0Z"
        fill="currentColor"
      />
      <path
        d="M23.0451 34.4724C23.0451 30.4733 26.287 27.2314 30.2861 27.2314H43.996V43.9922H23.0451V34.4724Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [full, setFull] = useState(false);
  const [tax, setTax] = useState(0);
  const [engine, setEngine] = useState(0);
  const [step, setStep] = useState(0);
  const [filter, setFilter] = useState<MatrixFilter>("all");
  const [moat, setMoat] = useState(0);
  const [fee, setFee] = useState<FeeId>("variable");
  const regionRef = useRef<HTMLDivElement>(null);
  const origin = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(SLIDES.length - 1, next)));
  }, []);

  const toggleFull = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      /* Embedded previews can refuse fullscreen. The shortcut still works outside one. */
    }
  }, []);

  useEffect(() => {
    const sync = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.repeat) return;
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      const key = event.key;
      if (key === "ArrowRight" || key === "PageDown") {
        event.preventDefault();
        setIndex((current) => Math.min(SLIDES.length - 1, current + 1));
        return;
      }
      if (key === "ArrowLeft" || key === "PageUp") {
        event.preventDefault();
        setIndex((current) => Math.max(0, current - 1));
        return;
      }
      if (key === " " || key === "Spacebar") {
        if (tag === "BUTTON" || target?.getAttribute("role") === "button") return;
        event.preventDefault();
        setIndex((current) => Math.min(SLIDES.length - 1, current + 1));
        return;
      }
      if (key === "Home") {
        event.preventDefault();
        setIndex(0);
        return;
      }
      if (key === "End") {
        event.preventDefault();
        setIndex(SLIDES.length - 1);
        return;
      }
      if (key === "f" || key === "F") {
        event.preventDefault();
        void toggleFull();
        return;
      }
      if (key === "n" || key === "N") {
        event.preventDefault();
        setNotesOpen((open) => !open);
        return;
      }
      if (key === "Escape") {
        if (notesOpen) {
          event.preventDefault();
          setNotesOpen(false);
        }
        return;
      }
      if (key >= "1" && key <= "9") {
        event.preventDefault();
        setIndex(Number(key) - 1);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [notesOpen, toggleFull]);

  useEffect(() => {
    if (!notesOpen) regionRef.current?.focus({ preventScroll: true });
  }, [index, notesOpen]);

  const slide = SLIDES[index];

  function onPointerDown(event: React.PointerEvent) {
    if ((event.target as HTMLElement).closest("button, a, input, textarea")) return;
    origin.current = { x: event.clientX, y: event.clientY };
  }

  function onPointerUp(event: React.PointerEvent) {
    if (!origin.current) return;
    const dx = event.clientX - origin.current.x;
    const dy = event.clientY - origin.current.y;
    origin.current = null;
    if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
    go(dx < 0 ? index + 1 : index - 1);
  }

  return (
    <div className="deck-bg relative flex h-full min-h-0 flex-col">
      <header className="flex h-14 shrink-0 items-center justify-between gap-3 border-b border-line bg-canvas px-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <Mark className="h-7 w-7 shrink-0 text-plum" />
          <span className="font-display text-base font-semibold tracking-tight text-ink">Ratio</span>
          <span className="hidden text-xs text-faint sm:inline">Internal all-hands</span>
        </div>
        <p className="hidden truncate text-sm text-muted md:block">
          {String(index + 1).padStart(2, "0")} · {slide.label}
        </p>
        <div className="flex items-center gap-1">
          <IconButton
            label="Presenter notes"
            shortcut="N"
            pressed={notesOpen}
            onClick={() => setNotesOpen((open) => !open)}
          >
            <ScrollText className="h-4 w-4" />
          </IconButton>
          <IconButton label={full ? "Exit fullscreen" : "Fullscreen"} shortcut="F" pressed={full} onClick={() => void toggleFull()}>
            {full ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </IconButton>
        </div>
      </header>

      <main className="min-h-0 flex-1" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <div
          ref={regionRef}
          tabIndex={-1}
          className="h-full overflow-y-auto outline-none"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${SLIDES.length}: ${slide.label}`}
        >
          <p className="sr-only" aria-live="polite">
            Slide {index + 1} of {SLIDES.length}. {TITLES[slide.id]}.
          </p>
          <div key={slide.id} className={cn("deck-in", slide.id === "cover" && "flex min-h-full flex-col")}>
            <SlideSwitch
              id={slide.id}
              go={go}
              tax={tax}
              setTax={setTax}
              engine={engine}
              setEngine={setEngine}
              step={step}
              setStep={setStep}
              filter={filter}
              setFilter={setFilter}
              moat={moat}
              setMoat={setMoat}
              fee={fee}
              setFee={setFee}
            />
          </div>
        </div>
      </main>

      <div className="relative z-50 shrink-0 border-t border-line bg-surface pb-14 sm:pb-0">
        <div className="h-0.5 bg-line">
          <div
            className="deck-motion h-full bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
          />
        </div>
        <div className="mx-auto flex max-w-3xl items-center gap-1 px-2 py-1">
          <IconButton label="Previous slide" shortcut="Left arrow" disabled={index === 0} onClick={() => go(index - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </IconButton>
          <div className="flex min-w-0 flex-1 items-center justify-center gap-0.5">
            {SLIDES.map((item, itemIndex) => {
              const on = itemIndex === index;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to slide ${itemIndex + 1}: ${item.label}`}
                  aria-current={on ? "true" : undefined}
                  onClick={() => go(itemIndex)}
                  className={cn(tap, "flex h-11 min-w-0 flex-1 items-center justify-center")}
                >
                  <span
                    className={cn(
                      "deck-motion block h-1.5 transition-all duration-200",
                      on ? "w-5 bg-accent" : itemIndex < index ? "w-1.5 bg-plum" : "w-1.5 bg-line",
                    )}
                  />
                </button>
              );
            })}
          </div>
          <span className="w-10 text-center text-xs text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <IconButton
            label="Next slide"
            shortcut="Right arrow"
            disabled={index === SLIDES.length - 1}
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </IconButton>
        </div>
      </div>

      {notesOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-ink/40"
          aria-label="Close presenter notes"
          onClick={() => setNotesOpen(false)}
        />
      )}
      <aside
        inert={!notesOpen ? true : undefined}
        aria-label="Presenter notes"
        className={cn(
          "deck-motion fixed top-0 right-0 z-40 flex h-full w-full max-w-md translate-x-full flex-col border-l border-line bg-surface transition-transform duration-200 ease-out",
          notesOpen && "translate-x-0",
        )}
      >
        <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <p className="text-xs font-medium tracking-tight text-plum">Presenter notes</p>
            <h2 className="mt-1 font-display text-lg font-semibold text-ink">{slide.label}</h2>
          </div>
          <IconButton label="Close notes" shortcut="Esc" onClick={() => setNotesOpen(false)}>
            <X className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 pb-28">
          <p className="text-sm font-medium text-ink">{TITLES[slide.id]}</p>
          <ul className="mt-4 flex flex-col gap-3">
            {NOTES[slide.id].map((note) => (
              <li key={note} className="border-l-2 border-accent pl-3 text-sm leading-relaxed text-muted">
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-faint">
            ← → or Space moves · N notes · F fullscreen · 1–9 jumps · Esc closes notes
          </p>
        </div>
      </aside>
    </div>
  );
}

function IconButton({
  label,
  shortcut,
  pressed,
  disabled,
  onClick,
  children,
}: {
  label: string;
  shortcut?: string;
  pressed?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={shortcut ? `${label} (${shortcut})` : label}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        tap,
        "flex h-11 w-11 items-center justify-center text-muted hover:text-ink disabled:opacity-30",
        pressed && "bg-surface-2 text-ink",
      )}
    >
      {children}
    </button>
  );
}

function SlideSwitch({
  id,
  go,
  tax,
  setTax,
  engine,
  setEngine,
  step,
  setStep,
  filter,
  setFilter,
  moat,
  setMoat,
  fee,
  setFee,
}: {
  id: SlideId;
  go: (index: number) => void;
  tax: number;
  setTax: (index: number) => void;
  engine: number;
  setEngine: (index: number) => void;
  step: number;
  setStep: (index: number) => void;
  filter: MatrixFilter;
  setFilter: (filter: MatrixFilter) => void;
  moat: number;
  setMoat: (index: number) => void;
  fee: FeeId;
  setFee: (id: FeeId) => void;
}) {
  if (id === "cover") return <Cover onJump={go} />;
  if (id === "market") return <Market />;
  if (id === "taxes") return <Taxes selected={tax} setSelected={setTax} />;
  if (id === "complexity") return <Complexity />;
  if (id === "stack") return <Stack selected={engine} setSelected={setEngine} />;
  if (id === "moats") return <Moats open={moat} setOpen={setMoat} />;
  if (id === "matrix") return <Matrix filter={filter} setFilter={setFilter} />;
  if (id === "coverage") return <Coverage />;
  if (id === "flow") return <Flow step={step} setStep={setStep} />;
  return <Economics fee={fee} setFee={setFee} />;
}
