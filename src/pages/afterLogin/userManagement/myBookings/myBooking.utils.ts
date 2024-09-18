export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeLeft = (date: string, endTime: string): TimeLeft => {
  const endDateTime = new Date(`${date}T${endTime}`).getTime();
  const now = new Date().getTime();
  const difference = endDateTime - now;

  let timeLeft: TimeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return timeLeft;
};
