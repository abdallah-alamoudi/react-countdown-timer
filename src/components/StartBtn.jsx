export function StartBtn(props) {
  return (
    <button
      disabled={props.isRunning}
      className='cursor-pointer px-8 py-3 bg-green-600 rounded-xl disabled:bg-gray-600 disabled:cursor-not-allowed'
      onClick={props.handleStartCounter}
    >
      {props.wasStarted ? 'Continue' : 'start'}
    </button>
  );
}
