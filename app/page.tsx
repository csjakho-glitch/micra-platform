'use client';

import { useState } from 'react';

const nav = [
  ['Overview', '⌂'],
  ['Farms', '◈'],
  ['Assessments', '◎'],
  ['Digital Farm Twin', '◇'],
  ['Retrofit & Engineering', '△'],
  ['MRV & Evidence', '▣'],
  ['Network', '○'],
];

const farms = [
  { id: 'FARM-001', name: 'Lhokseumawe Pilot', location: 'Aceh, Indonesia', area: '0.50 ha', status: 'Monitoring', score: 82, risk: 'R2' },
  { id: 'FARM-002', name: 'Cluster North', location: 'Aceh, Indonesia', area: '8.00 ha', status: 'Baseline', score: 67, risk: 'R3' },
  { id: 'FARM-003', name: 'Coastal Demonstrator', location: 'Aceh, Indonesia', area: '1.20 ha', status: 'Assessment', score: 74, risk: 'R2' },
];

const modules = [
  { title: 'Field Assessment', eyebrow: 'WP-01', body: 'Capture baseline, GPS, evidence and sampling in one controlled workflow.', action: 'Open assessment' },
  { title: 'Digital Farm Twin', eyebrow: 'SYSTEM', body: 'Translate farm geometry, environment and operational data into a decision-ready twin.', action: 'View twin' },
  { title: 'Risk Engine', eyebrow: 'DECISION', body: 'Surface validated risk classes without replacing the authoritative decision layer.', action: 'Review risks' },
  { title: 'Retrofit & Engineering', eyebrow: 'DESIGN', body: 'Move from field constraints to traceable retrofit, hydraulic and BoQ packages.', action: 'Open design' },
];

export default function Home() {
  const [active, setActive] = useState('Overview');
  const [search, setSearch] = useState('');

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">M</div>
          <div><strong>MICRA</strong><span>Platform OS</span></div>
        </div>
        <div className="workspace"><span className="dot" /> Regenerative Aquaculture</div>
        <nav>
          {nav.map(([label, icon]) => (
            <button key={label} className={active === label ? 'navItem active' : 'navItem'} onClick={() => setActive(label)}>
              <span className="navIcon">{icon}</span>{label}
            </button>
          ))}
        </nav>
        <div className="sideBottom">
          <div className="gateCard"><span className="label">SYSTEM GATES</span><div className="gate"><i /> G-ENV <b>Pending</b></div><div className="gate"><i /> G-FIX <b>Locked</b></div><div className="gate"><i /> G-CONTRACT <b>Locked</b></div></div>
          <button className="user"><span className="avatar">JS</span><span><strong>MICRA Admin</strong><small>Workspace owner</small></span><span>•••</span></button>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div className="crumb">MICRA / <strong>{active}</strong></div>
          <div className="topActions"><label className="search"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search farms, assessments..." /></label><button className="iconBtn">?</button><button className="bell">♢<em /></button></div>
        </header>

        <div className="page">
          <div className="heroRow"><div><div className="kicker">PLATFORM CONTROL CENTER</div><h1>Good afternoon.</h1><p>One operating layer for resilient farms, evidence and better coastal outcomes.</p></div><button className="primary">+ New assessment</button></div>

          <div className="metricGrid">
            <Metric label="Active farms" value="03" note="Across 2 clusters" />
            <Metric label="Baseline readiness" value="76%" note="+8% this cycle" trend />
            <Metric label="Open risk signals" value="07" note="2 require attention" alert />
            <Metric label="Evidence records" value="184" note="96% verified" />
          </div>

          <div className="sectionHead"><div><h2>Farm network</h2><span>Live operating picture</span></div><button className="textBtn" onClick={() => setActive('Farms')}>View all →</button></div>
          <div className="farmTable">
            <div className="tableHead"><span>FARM</span><span>LOCATION</span><span>AREA</span><span>STATUS</span><span>BASELINE</span><span>RISK</span></div>
            {farms.filter(f => !search || `${f.id} ${f.name}`.toLowerCase().includes(search.toLowerCase())).map(f => <div className="tableRow" key={f.id}><span className="farmName"><strong>{f.name}</strong><small>{f.id}</small></span><span>{f.location}</span><span>{f.area}</span><span><b className="status">● {f.status}</b></span><span><strong>{f.score}</strong><small>/100</small></span><span><b className={`risk ${f.risk.toLowerCase()}`}>{f.risk}</b></span></div>)}
          </div>

          <div className="sectionHead moduleHead"><div><h2>MICRA operating modules</h2><span>Architecture-aligned workflows</span></div></div>
          <div className="moduleGrid">{modules.map((m, i) => <article className="module" key={m.title}><div className="moduleTop"><span>{m.eyebrow}</span><div className={`moduleNo n${i}`}>0{i + 1}</div></div><h3>{m.title}</h3><p>{m.body}</p><button>{m.action} <span>↗</span></button></article>)}</div>

          <div className="lowerGrid"><div className="panel progress"><div className="panelTitle"><div><h2>Readiness pathway</h2><span>Controlled execution sequence</span></div><span className="miniBadge">CURRENT: G-ENV</span></div><div className="steps"><Step n="01" title="Field baseline" state="complete" /><Step n="02" title="G-ENV validation" state="current" /><Step n="03" title="G-FIX" state="locked" /><Step n="04" title="G-CONTRACT" state="locked" /></div></div><div className="panel insight"><span className="label">DECISION SIGNAL</span><h2>Cluster-level intervention is the priority.</h2><p>Current evidence suggests individual-pond improvements should be coordinated through a shared water, environmental and governance layer.</p><button className="textBtn">Open evidence →</button></div></div>

          <footer><span>MICRA Platform OS · Architecture baseline v1.0</span><span>Evidence-first · Traceable · Regenerative</span></footer>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value, note, trend, alert }: { label: string; value: string; note: string; trend?: boolean; alert?: boolean }) { return <div className="metric"><span className="label">{label}</span><strong>{value}</strong><small className={alert ? 'warn' : trend ? 'up' : ''}>{trend ? '↗ ' : alert ? '!' : '•'} {note}</small></div>; }
function Step({ n, title, state }: { n: string; title: string; state: string }) { return <div className={`step ${state}`}><div className="stepCircle">{state === 'complete' ? '✓' : n}</div><div><strong>{title}</strong><small>{state === 'complete' ? 'Validated' : state === 'current' ? 'Ready to execute' : 'Awaiting previous gate'}</small></div></div>; }
