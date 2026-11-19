import Icon from '../components/Icon';

export default function About() {
  return (
    <div className="page entrance info-page about-page">
      <div className="page-head"><span className="eyebrow">ABOUT GAMEGUARD AI</span><h1>Making sense of the game<span className="title-dot">.</span></h1><p>Exploring accurate detection of toxic language in online multiplayer conversations.</p></div>
      <section className="about-feature"><div className="about-copy"><span className="mini-label">THE MOTIVATION</span><h2>Competition belongs in gaming.<br/><em>Harassment doesn't.</em></h2><p>Multiplayer chat is fast, emotional, and full of inside jokes. A message can be friendly, hostile, or sarcastic depending on who said it and what came before.</p><p>GameGuard AI investigates how machine learning can identify harmful language reliably, and whether an instruction-tuned language model benefits from seeing more of the conversation.</p></div>
        <div className="about-art" aria-hidden="true"><div className="about-art-grid"/><div className="about-art-orbit"/><div className="about-art-icon"><Icon name="shield" size={82} strokeWidth={1.2}/></div></div>
      </section>
      <div className="about-grid"><div className="about-metric"><span>SOURCE DATA</span><strong>42,959</strong><small>Gaming messages in the initial dataset</small></div><div className="about-metric"><span>PREPARED DATA</span><strong>27,423</strong><small>Messages after initial cleaning</small></div><div className="about-metric"><span>CLASSIFICATION</span><strong>2 <em>labels</em></strong><small>Toxic and Not Toxic</small></div></div>
      <div className="about-principles"><article className="about-principle"><Icon name="target" size={23}/><h3>Quality first</h3><p>We assess accuracy alongside precision, recall, F1, and the mistakes models make.</p></article><article className="about-principle"><Icon name="message" size={23}/><h3>Context matters</h3><p>We investigate whether previous chat messages improve the interpretation of difficult cases.</p></article><article className="about-principle"><Icon name="shield" size={23}/><h3>Responsible by design</h3><p>Predictions provide analytical support, never automatic disciplinary decisions.</p></article></div>
      <div className="about-end"><span>GAMEGUARD AI</span><strong>Better games start with better chat.</strong><Icon name="sparkles" size={27}/></div>
    </div>
  );
}
