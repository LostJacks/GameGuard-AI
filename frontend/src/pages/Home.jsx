import Icon from '../components/Icon';
import SignalArt from '../components/SignalArt';
import Analyzer from '../components/Analyzer';
import ExampleLibrary from '../components/ExampleLibrary';

export default function Home({ analyzer, onChooseExample, onPreview }) {
  return (
    <div className="page home-page entrance">
      <section className="hero-card" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true"/>
        <div className="hero-content">
          <div className="hero-overline"><span className="overline-led"/> GAMEGUARD AI · CHAT INTELLIGENCE</div>
          <h1 id="hero-title">Better games start<br/>with <em>better chat.</em></h1>
          <p>Understand the difference between competitive banter and toxic language with intelligent gaming-chat analysis.</p>
          <div className="hero-signals"><span><Icon name="shield" size={16}/> Toxicity detection</span><span className="hero-signal-divider"/><span><Icon name="message" size={16}/> Gaming conversations</span></div>
        </div>
        <SignalArt/>
        <span className="hero-bottom-label">PROTECT THE PLAY. <b>UNDERSTAND THE CHAT.</b></span>
      </section>
      <div className="workspace-title"><div><span className="eyebrow">MESSAGE INTELLIGENCE</span><h2>Start an analysis<span className="title-dot">.</span></h2></div><span className="workspace-description">YOUR MESSAGE <Icon name="arrow" size={16}/> CLEAR RESULTS</span></div>
      <div className="workspace-grid"><Analyzer {...analyzer}/><ExampleLibrary onSelect={onChooseExample} onPreview={onPreview}/></div>
      <div className="lower-strip"><div className="strip-icon"><Icon name="shield" size={18}/></div><span>Built for analysis and learning. Predictions are not a substitute for human judgment.</span></div>
    </div>
  );
}
