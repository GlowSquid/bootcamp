const TrackBar = (_ => {
  // state
  const state = {
    currentTime: 0,
    fullTime: 0,
    fillWidth: 0
  };

  // const trackBarEl = document.querySelector('.track-bar');
  const trackBarFillEl = document.querySelector('.track-bar__fill');

  const init = _ => {
    render();
  };

  const render = _ => {
    trackBarFillEl.style.width = `${state.fillWidth}%`;
  };

  const getPercent = (current, full) => {
    return (current / full) * 100;
  };

  const setState = obj => {
    state.currentTime = obj.currentTime;
    state.fullTime = obj.duration;
    state.fillWidth = getPercent(state.currentTime, state.fullTime);
    render();
  };

  return {
    init,
    setState
  };
})();

export default TrackBar;
