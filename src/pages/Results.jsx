import Icon from '../components/Icon';

function ProbabilityMeter({ value, isDemo }) {
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.round(value * 100);
  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 240 240" role="img" aria-label={`${isDemo ? 'Sample ' : ''}toxicity probability: ${percentage} percent`}>
        <defs><linearGradient id="toxicity-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffa39b"/><stop offset="1" stopColor="#ff668a"/></linearGradient></defs>
        <circle className="gauge-bg" cx="120" cy="120" r={radius}/>
        <circle className="gauge-track" cx="120" cy="120" r={radius} stroke="url(#toxicity-gradient)" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - value)}/>
        <circle cx="120" cy="120" r="65" stroke="#37425f" strokeWidth="1" strokeDasharray="3 8" fill="none" />
      </svg>
      <div className="gauge-center"><strong>{percentage}<small>%</small></strong><span>TOXICITY</span></div>
    </div>
  );
}

export default function Results({ result, onNewAnalysis }) {
  if (!result) return (
    <div className="page entrance result-page">
      <div className="page-head"><span className="eyebrow">RESULTS</span><h1>Clear insights, when you need them<span className="title-dot">.</span></h1><p>Your message classification will appear here after an analysis.</p></div>
      <section className="empty-results"><div className="empty-illustration"><Icon name="analysis" size={52}/><span className="empty-orbit"/></div><h2>Nothing to show yet.</h2><p>Enter a gaming message in the analyzer to see the toxicity classification and score.</p><button className="primary-action" type="button" onClick={onNewAnalysis}>Open Analyzer <Icon name="arrow" size={18}/></button></section>
    </div>
  );

  const toxic = result.label === 'Toxic';
  return (
    <div className="page entrance result-page">
      <div className="page-head page-head-actions"><div><span className="eyebrow">ANALYSIS RESULTS</span><h1>Your message, analyzed<span className="title-dot">.</span></h1><p>{result.isDemo ? 'Explore how analysis results will appear.' : 'A toxicity classification for your submitted message.'}</p></div><button type="button" className="outline-action" onClick={onNewAnalysis}><Icon name="back" size={16}/> New Analysis</button></div>
      {result.isDemo && <div className="demo-banner" role="status"><Icon name="info" size={21}/><div><strong>Sample result — not a model prediction</strong><span>This page uses illustrative values to show the results layout. No analysis was performed.</span></div></div>}
      <div className="result-layout">
        <section className={`result-verdict-card ${toxic ? 'verdict-toxic' : 'verdict-safe'}`}>
          <div className="result-head"><span className="mini-label">CLASSIFICATION</span><span className="result-corner-icon"><Icon name={toxic ? 'alert' : 'check'} size={23}/></span></div>
          <div className="result-center"><span className="verdict-rune"><Icon name={toxic ? 'alert' : 'shield'} size={34}/></span><span className="verdict-overline">{result.isDemo ? 'SAMPLE CLASSIFICATION' : 'CLASSIFICATION RESULT'}</span><h2>{result.label}</h2><p>{toxic ? 'The message was classified as toxic.' : 'The message was classified as not toxic.'}</p></div>
          <div className="result-base"><span><Icon name="message" size={15}/> Gaming chat analysis</span><span>{result.isDemo ? 'SAMPLE DATA' : 'ANALYZED'}</span></div>
        </section>
        <section className="result-score-card"><div className="result-head"><span className="mini-label">TOXICITY PROBABILITY</span><Icon name="target" size={20}/></div><ProbabilityMeter value={result.toxicityProbability} isDemo={result.isDemo}/><div className="result-gauge-bottom"><strong>{result.isDemo ? 'Illustrative score' : 'Estimated toxicity probability'}</strong><p>A model's score is an estimate, not a guarantee of correctness.</p></div></section>
      </div>
      <section className="result-message-card"><div className="result-head"><span className="mini-label">ANALYZED MESSAGE</span><Icon name="message" size={19}/></div><blockquote>“{result.message}”</blockquote>
        {result.previousMessages?.length > 0 && <div className="result-context"><span className="mini-label">EARLIER CHAT MESSAGES</span>{result.previousMessages.map((line, idx) => <div key={`${idx}-${line}`} className="context-line">{line}</div>)}</div>}
        <div className="result-details"><span>ANALYSIS <strong>{result.previousMessages?.length ? 'Conversation context' : 'Single message'}</strong></span><span>MODEL <strong>{result.modelName}</strong></span></div>
      </section>
      <div className="lower-strip"><div className="strip-icon"><Icon name="shield" size={18}/></div><span>These classifications are intended to support understanding, not automatic punishment.</span></div>
    </div>
  );
}
