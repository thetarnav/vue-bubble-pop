import useLocalReactive from './utils/localReactive';

export const state = useLocalReactive('game-state', {
  score: 0,
  session: false,
  totalBubbles: 50,
  lastScore: null as number | null,
  finalScore: 10,
  bubbles: 50,
});
state.score = 0;
state.session = false;
state.lastScore = state.lastScore || null;

export function startGame() {
  state.session = true;
  state.score = 0;
}

export function resetGame() {
  const lastScore =
    state.lastScore === null
      ? state.score
      : state.score > state.lastScore
      ? state.score
      : state.lastScore;
  state.session = false;
  state.lastScore = lastScore;
}
