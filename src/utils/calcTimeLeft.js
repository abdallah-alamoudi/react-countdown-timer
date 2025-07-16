const calculateTimeLeft = (targetDate) => {
  const difference = targetDate - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.ceil(difference / 1000);
  const timeLeft = {
    days: Math.floor(totalSeconds / (60 * 60 * 24)),
    hours: Math.floor((totalSeconds / (60 * 60)) % 24),
    minutes: Math.floor((totalSeconds / 60) % 60),
    seconds: totalSeconds % 60,
  };

  return timeLeft;
};
export default calculateTimeLeft;
