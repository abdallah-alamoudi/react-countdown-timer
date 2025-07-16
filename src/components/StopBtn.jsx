export function StopBtn(props) {
  return (
    <button
      disabled={!props.isRunning}
      onClick={props.handleStopCounter}
      className='cursor-pointer px-8 py-3 bg-red-600 rounded-xl disabled:bg-gray-600 disabled:cursor-not-allowed'
    >
      stop
    </button>
  );
}
