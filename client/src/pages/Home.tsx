import { useMemo, useState, type ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  FileSearch,
  FlaskConical,
  Layers3,
  Menu,
  RotateCcw,
  Sparkles,
  Target,
  UserRound,
  X,
  Zap,
} from "lucide-react";

type Stage = "brief" | "proposal" | "review" | "approved";

const task = {
  title: "Reconcile a cross-border food supply variance",
  employer: "Regional food systems partner",
  location: "Member State pilot · food and nutrition",
  description:
    "Compare the programme dashboard with partner reports, identify the cause of a delivery variance, and record the corrective action before the next coordination review.",
  signal: "3 recurring delivery gaps reported this quarter",
};

const evidence = [
  { label: "Partner task brief", value: "Regional coordination note · 17 Sep", kind: "verified" },
  { label: "Related capability", value: "Programme delivery & data use", kind: "verified" },
  { label: "Provider module", value: "Evidence-led programme management", kind: "context" },
  { label: "Evidence quality", value: "Good enough for a Member State pilot", kind: "verified" },
];

function Pill({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "lime" | "amber" | "red" }) {
  return <span className={`pill pill-${tone}`}>{children}</span>;
}

function Step({ number, label, active, done }: { number: string; label: string; active?: boolean; done?: boolean }) {
  return (
    <div className={`step ${active ? "step-active" : ""} ${done ? "step-done" : ""}`}>
      <span className="step-number">{done ? <Check size={13} strokeWidth={3} /> : number}</span>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  const [stage, setStage] = useState<Stage>("brief");
  const [showUncertain, setShowUncertain] = useState(false);
  const [correction, setCorrection] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const stageCopy = useMemo(() => {
    if (stage === "approved") return { eyebrow: "Pilot ready", title: "Intervention approved", accent: "The programme planner has created a testable next step for a regional pilot." };
    if (stage === "review") return { eyebrow: "Human review", title: "One decision remains", accent: "Check the evidence, then approve or correct the technical-assistance proposal." };
    if (stage === "proposal") return { eyebrow: "New partner signal received", title: "A next step is ready", accent: "This proposal is triggered by a simulated regional partner update." };
    return { eyebrow: "Start with the work", title: "Turn a partner task into a learning test", accent: "A focused pilot for the programme planner coordinating employers, providers and Member State teams." };
  }, [stage]);

  const reset = () => {
    setStage("brief");
    setCorrection("");
    setShowUncertain(false);
  };

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileNav ? "sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark"><span /></div>
          <div><strong>AUDA-NEPAD</strong><small>skills programme planner · exercise</small></div>
        </div>
        <div className="sidebar-section-label">Workspace</div>
        <nav className="side-nav">
          <button className="nav-item nav-item-active"><Layers3 size={17} /> Regional pilots <span className="nav-count">04</span></button>
          <button className="nav-item"><Target size={17} /> Partner signals</button>
          <button className="nav-item"><BookOpen size={17} /> Provider library</button>
          <button className="nav-item"><ClipboardCheck size={17} /> Evidence & decisions</button>
        </nav>
        <div className="sidebar-bottom">
          <div className="pilot-card">
            <div className="pilot-card-icon"><FlaskConical size={16} /></div>
            <div><strong>Agenda 2063 pilot</strong><span>1 partner · 1 provider</span></div>
            <ArrowRight size={15} />
          </div>
          <button className="profile-button"><span className="avatar">MP</span><span className="profile-copy"><strong>Maya Patel</strong><small>Programme planner</small></span><ChevronDown size={15} /></button>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileNav(!mobileNav)} aria-label="Open navigation"><Menu size={21} /></button>
          <div className="crumbs"><span>Regional pilots</span><ArrowRight size={14} /><strong>Task intervention</strong></div>
          <div className="topbar-actions"><span className="environment"><span className="status-dot" /> Local simulation</span><button className="icon-button" aria-label="Notifications"><Bell size={18} /><i /></button><button className="help-button"><CircleHelp size={17} /> Help</button></div>
        </header>

        <div className="content-wrap">
          <section className="hero-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> {stageCopy.eyebrow}</div>
              <h1>{stageCopy.title}</h1>
              <p className="hero-subtitle">{stageCopy.accent}</p>
            </div>
            <div className="hero-actions"><button className="ghost-button" onClick={reset}><RotateCcw size={15} /> Reset demo</button><div className="demo-time"><Clock3 size={15} /> 3 min walkthrough</div></div>
          </section>

          <section className="progress-strip" aria-label="Workflow progress">
            <Step number="01" label="Partner task" active={stage === "brief"} done={stage !== "brief"} />
            <div className="progress-line" />
            <Step number="02" label="Evidence-backed proposal" active={stage === "proposal"} done={stage === "review" || stage === "approved"} />
            <div className="progress-line" />
            <Step number="03" label="Human decision" active={stage === "review"} done={stage === "approved"} />
            <div className="progress-line" />
            <Step number="04" label="Pilot state" active={stage === "approved"} />
          </section>

          <div className="workspace-grid">
            <section className="task-column">
              <div className="section-kicker"><span className="kicker-icon"><Target size={15} /></span> Partner signal</div>
              <article className="task-card">
                <div className="task-card-head"><div><Pill tone="lime">TASK · NEW</Pill><span className="task-id">C06</span></div><button className="more-button" aria-label="More options">•••</button></div>
                <div className="company-line"><span className="company-avatar">AU</span><span><strong>{task.employer}</strong><small>{task.location}</small></span></div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <div className="signal-note"><Zap size={14} /><span>{task.signal}</span></div>
                <div className="task-footer"><span><Clock3 size={14} /> Added 18 min ago</span><span className="owner"><span className="mini-avatar">AR</span> yassine boujrada</span></div>
              </article>

              <div className="section-kicker evidence-kicker"><span className="kicker-icon"><FileSearch size={15} /></span> Inspectable evidence <Pill>synthetic records</Pill></div>
              <article className="evidence-card">
                {evidence.map((item) => <div className="evidence-row" key={item.label}><div className={`evidence-status evidence-${item.kind}`}>{item.kind === "verified" ? <Check size={13} /> : <span>i</span>}</div><div><span>{item.label}</span><strong>{item.value}</strong></div><ArrowRight size={15} /></div>)}
                <div className="evidence-footnote"><AlertCircle size={14} /> Official Skills Bank is context only — no live API connection.</div>
              </article>
            </section>

            <section className="decision-column">
              <div className="section-kicker"><span className="kicker-icon kicker-orange"><Sparkles size={15} /></span> Proposed intervention {stage !== "brief" && <Pill tone={stage === "approved" ? "lime" : "amber"}>{stage === "approved" ? "approved" : "ready for review"}</Pill>}</div>
              <article className={`proposal-card ${stage === "brief" ? "proposal-empty" : ""} ${stage === "approved" ? "proposal-approved" : ""}`}>
                {stage === "brief" ? <>
                  <div className="empty-orbit"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core"><Sparkles size={20} /></div></div>
                  <h2>Build the smallest useful test</h2>
                  <p>Use the partner task and evidence on the left to create a focused intervention a provider can run for the regional pilot.</p>
                  <button className="primary-button" onClick={() => setStage("proposal")}>Generate intervention <ArrowRight size={16} /></button>
                  <div className="button-caption"><Zap size={13} /> Uses only the evidence shown above</div>
                </> : <>
                  <div className="proposal-topline"><div className="proposal-icon"><Sparkles size={17} /></div><div><span className="proposal-label">FOCUSED TECHNICAL ASSISTANCE INTERVENTION</span><h2>Regional delivery sprint</h2></div><Pill tone="lime">0.82 confidence</Pill></div>
                  <p className="proposal-summary">A two-session practical sprint that asks a programme team to reconcile a delivery variance, explain the cause, and log a corrective action for the next coordination review.</p>
                  <div className="outcome-box"><div className="outcome-icon"><BadgeCheck size={18} /></div><div><span>Observable outcome</span><strong>Complete a delivery reconciliation with an evidence trail</strong></div></div>
                  <div className="proposal-grid"><div><span>Format</span><strong>2 × 90 min practicals</strong></div><div><span>Provider module</span><strong>Evidence-led programme management</strong></div><div><span>Pass signal</span><strong>Cause + action recorded</strong></div><div><span>Owner</span><strong>Member State delivery team</strong></div></div>
                  {stage === "proposal" && <div className="event-banner"><div className="event-icon"><Bell size={16} /></div><div><strong>Simulated partner event received</strong><span>Regional partner added “before next coordination review” as a constraint.</span></div><Pill tone="amber">SIMULATION</Pill></div>}
                  {stage === "review" && <div className="review-box"><div className="review-head"><UserRound size={16} /><strong>Your decision</strong><span>human approval required</span></div><label htmlFor="correction">Correction or note <span>optional</span></label><textarea id="correction" value={correction} onChange={(event) => setCorrection(event.target.value)} placeholder="e.g. Add a 15-minute supervisor debrief..." rows={3} /><div className="review-actions"><button className="secondary-button" onClick={() => setStage("proposal")}><X size={15} /> Send back</button><button className="primary-button small" onClick={() => setStage("approved")}><Check size={15} /> Approve pilot</button></div></div>}
                  {stage === "approved" && <div className="approved-banner"><div className="approved-icon"><Check size={16} /></div><div><strong>Pilot state recorded</strong><span>Approved by Maya Patel · just now {correction && "· correction added"}</span></div><BadgeCheck size={18} /></div>}
                  {stage === "proposal" && <button className="primary-button full" onClick={() => setStage("review")}>Review proposal <ArrowRight size={16} /></button>}
                </>}
              </article>

              <div className="section-kicker risk-kicker"><span className="kicker-icon kicker-red"><AlertCircle size={15} /></span> Boundary test <Pill tone="red">uncertainty case</Pill></div>
              <article className={`uncertainty-card ${showUncertain ? "uncertainty-open" : ""}`}>
                <button className="uncertainty-toggle" onClick={() => setShowUncertain(!showUncertain)}><div><strong>What if the evidence is not enough?</strong><span>Show the responsible failure state</span></div><span className="toggle-chevron">{showUncertain ? <X size={17} /> : <ArrowRight size={17} />}</span></button>
                {showUncertain && <div className="uncertainty-detail"><div className="warning-graphic"><AlertCircle size={19} /></div><div><strong>No responsible match yet</strong><p>The employer task has no agreed performance signal. Ask for the missing success measure instead of inventing a confident intervention.</p><Pill tone="red">needs clarification</Pill></div></div>}
              </article>
            </section>
          </div>

          <footer className="page-footer"><div><span className="footer-dot" /> Exercise prototype</div><span>AUDA-NEPAD assignment context · Records are synthetic · Partner event is simulated · No endorsement implied</span><a href="#next-case">Next validation case <ArrowRight size={14} /></a></footer>
        </div>
      </main>
    </div>
  );
}
