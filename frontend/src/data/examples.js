export const EXAMPLES = [
  { id: 'friendly', category: 'FRIENDLY', tone: 'safe', icon: 'check', message: 'gg wp, that was a close match!', description: 'Positive sportsmanship' },
  { id: 'hostile', category: 'HOSTILE', tone: 'danger', icon: 'alert', message: "You're trash, uninstall the game.", description: 'Directly insulting another player' },
  { id: 'ambiguous', category: 'AMBIGUOUS', tone: 'neutral', icon: 'message', message: 'Nice job, genius.', description: 'Meaning may depend on tone or context' },
  { id: 'gameplay', category: 'GAMEPLAY', tone: 'safe', icon: 'target', message: 'Can you ward dragon before we fight?', description: 'Normal team coordination' },
];

// Deliberately not a prediction. Only shown after clicking "View sample result".
export const SAMPLE_RESULT = {
  rawInput: "You're trash, uninstall the game.",
  message: "You're trash, uninstall the game.",
  previousMessages: [],
  label: 'Toxic',
  toxicityProbability: 0.88,
  modelName: 'Illustrative example',
  isDemo: true,
};
