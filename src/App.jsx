import { useState, useRef } from 'react';
import calcTimeLeft from './utils/calcTimeLeft';
import { Content } from './components/Content';
import { InputFields } from './components/InputFields';
import { StartBtn } from './components/StartBtn';
import { StopBtn } from './components/StopBtn';
import { ResetBtn } from './components/ResetBtn';
const counterInitState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function FinishMsg({ children }) {
  return <p className='text-center text-2xl'>{children}</p>;
}

function RestartBtn(props) {
  return (
    <button
      className='cursor-pointer px-8 py-3 bg-green-600 rounded-xl disabled:bg-gray-600 disabled:cursor-not-allowed'
      onClick={props.handleRestart}
    >
      restart
    </button>
  );
}

function App() {
  const [inputTime, setInputTime] = useState(counterInitState);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [wasStarted, setWasStarted] = useState(false);
  const timerRef = useRef();

  const handleStartCounter = () => {
    let targetDate =
      Date.now() +
      inputTime.days * 24 * 60 * 60 * 1000 +
      inputTime.hours * 60 * 60 * 1000 +
      inputTime.minutes * 60 * 1000 +
      inputTime.seconds * 1000;
    let diff = Math.floor(targetDate / 1000) - Math.floor(Date.now() / 1000);
    if (diff === 0) return;
    setIsRunning(true);
    setWasStarted(true);
    timerRef.current = setInterval(() => {
      let diff = Math.floor(targetDate / 1000) - Math.floor(Date.now() / 1000);
      if (diff === 0) {
        setIsFinished(true);
        handleReset();
      }
      const newTimeLeft = calcTimeLeft(targetDate);
      setInputTime(newTimeLeft);
    }, 1000);
  };
  const handleStopCounter = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const limits = {
      days: 365,
      hours: 23,
      minutes: 59,
      seconds: 59,
    };
    if (parseInt(value) > limits[name])
      return setInputTime((prevState) => {
        return {
          ...prevState,
          [name]: limits[name],
        };
      });

    setInputTime((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleReset = () => {
    handleStopCounter();
    setWasStarted(false);
    setInputTime(counterInitState);
  };
  const handleRestart = () => {
    setIsFinished(false);
    handleReset();
  };
  return (
    <>
      <Content>
        <div className='container mx-auto flex flex-col gap-6'>
          {!isFinished ? (
            <InputFields
              handleChange={handleChange}
              inputTime={inputTime}
            ></InputFields>
          ) : (
            <FinishMsg>Finished</FinishMsg>
          )}

          <div className='btns flex justify-center gap-4 text-lg z-20 relative text-white font-bold tracking-widest'>
            {!isFinished && !isRunning ? (
              <StartBtn
                isRunning={isRunning}
                isFinished={isFinished}
                wasStarted={wasStarted}
                handleStartCounter={handleStartCounter}
              ></StartBtn>
            ) : (
              !isRunning && (
                <RestartBtn handleRestart={handleRestart}></RestartBtn>
              )
            )}
            {wasStarted && isRunning && (
              <StopBtn
                isRunning={isRunning}
                handleStopCounter={handleStopCounter}
              ></StopBtn>
            )}
            {wasStarted && <ResetBtn handleReset={handleReset}></ResetBtn>}
          </div>
        </div>
      </Content>
    </>
  );
}

export default App;
