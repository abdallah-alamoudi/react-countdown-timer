export function ResetBtn(props) {
  return (
    <button
      className='cursor-pointer px-8 py-3 bg-purple-500 rounded-xl disabled:bg-gray-600 disabled:cursor-not-allowed'
      onClick={props.handleReset}
    >
      Reset
    </button>
  );
}
