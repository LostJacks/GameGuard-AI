import Icon from './Icon';

const TITLES = { home: 'Analyzer', results: 'Results', how: 'How it works', about: 'About' };

export default function Header({ page, onNavigate }) {
  return (
    <header className="topbar">
      <div className="crumbs"><span className="crumb-root">GameGuard AI</span><Icon name="chevron" size={15}/><strong>{TITLES[page]}</strong></div>
      <div className="topbar-right">
        <span className="topbar-description">Intelligent chat analysis</span>
        <button className="top-mini-brand" type="button" onClick={() => onNavigate('home')} aria-label="Return to analyzer"><Icon name="shield" size={18}/></button>
      </div>
    </header>
  );
}
