import Icon from './Icon';

export default function SignalArt() {
  return (
    <div className="signal-art" aria-hidden="true">
      <div className="art-grid"/><div className="art-glow"/>
      <span className="art-corner a-tl"/><span className="art-corner a-tr"/><span className="art-corner a-bl"/><span className="art-corner a-br"/>
      <div className="orbit orbit-outer"/><div className="orbit orbit-middle"/><div className="orbit orbit-inner"/><div className="orbit-ticks"/>
      <div className="signal-core"><div className="core-ring"><Icon name="shield" size={94} strokeWidth={1.15}/></div><span className="core-scan"/></div>
      <div className="art-callout callout-one"><span className="callout-dot green"/><span>gg wp</span><span className="callout-bars">▰▰▰▱</span></div>
      <div className="art-callout callout-two"><span className="callout-dot red"/><span>you're trash</span><span className="callout-bars">▰▰▱▱</span></div>
      <span className="pulse-point point-a"/><span className="pulse-point point-b"/>
      <div className="signal-caption"><span className="signal-caption-line"/><span>MESSAGE INTELLIGENCE</span></div>
    </div>
  );
}
