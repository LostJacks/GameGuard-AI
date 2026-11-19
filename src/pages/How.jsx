import Icon from '../components/Icon';

const STEPS = [
  { icon: 'message', title: 'Enter a message', description: 'Paste a gaming message into the analyzer, or a clearly formatted conversation with player names.' },
  { icon: 'sliders', title: 'Understand the input', description: 'The application keeps useful slang and expressions. When a chat transcript is supplied, the last message is the one to classify.' },
  { icon: 'cpu', title: 'Run classification', description: 'A trained model predicts whether the target message is Toxic or Not Toxic. Context can be evaluated separately where supported.' },
  { icon: 'analysis', title: 'Understand the result', description: 'Read the classification and its estimated toxicity probability. Model performance is evaluated on held-out examples.' },
];

export default function How() {
  return (
    <div className="page entrance info-page">
      <div className="page-head"><span className="eyebrow">HOW IT WORKS</span><h1>From message to meaning<span className="title-dot">.</span></h1><p>A simple experience built on careful machine learning research.</p></div>
      <section className="how-banner"><div><span className="mini-label">ONE CLEAR GOAL</span><h2>Understand the message.</h2><p>GameGuard AI is designed to distinguish toxic chat from everyday gaming communication, while investigating when conversation history provides useful context.</p></div><div className="how-pipeline-art" aria-hidden="true"><span>CHAT</span><Icon name="arrow" size={19}/><span className="how-pipeline-highlight"><Icon name="cpu" size={24}/></span><Icon name="arrow" size={19}/><span>RESULT</span></div></section>
      <div className="steps-grid">{STEPS.map(({ icon, title, description }) => <article key={title} className="step-card"><div className="step-card-top"><span className="step-icon"><Icon name={icon} size={24}/></span></div><h3>{title}</h3><p>{description}</p></article>)}</div>
      <section className="model-compare"><div className="model-compare-head"><span className="eyebrow">UNDER THE HOOD</span><h2>Evidence over assumptions.</h2><p>These approaches are part of the model development plan. Their accuracy has not yet been established.</p></div>
        <div className="compare-pair"><article className="compare-box"><span className="model-tag">TRADITIONAL BASELINE</span><div className="compare-icon"><Icon name="analysis" size={25}/></div><h3>TF-IDF + Logistic Regression</h3><p>Transforms message text into features and learns a transparent binary classification baseline.</p><span className="compare-footer">MESSAGE-LEVEL CLASSIFICATION</span></article>
          <article className="compare-box"><span className="model-tag">CONTEXT RESEARCH</span><div className="compare-icon alt"><Icon name="sparkles" size={25}/></div><h3>Qwen2.5-1.5B-Instruct</h3><p>Compares classifications of isolated messages against the same model with preceding chat included.</p><span className="compare-footer">CONTEXT EXPERIMENTS</span></article></div>
      </section>
    </div>
  );
}
