export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const calculateTimeLeft = (date: string, startTime: string): TimeLeft => {
  const startDateTime = new Date(`${date}T${startTime}`).getTime();
  const now = new Date().getTime();
  const difference = startDateTime - now;

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


export const formatTimeLeft = (timeLeft: TimeLeft) => {
  const { days, hours, minutes, seconds } = timeLeft;

  // Create an array to store non-zero units
  const formattedTime: string[] = [];

  if (days > 0) formattedTime.push(`${days}d`);
  if (hours > 0 || days > 0) formattedTime.push(`${hours.toString().padStart(2, "0")}h`);
  if (minutes > 0 || hours > 0 || days > 0) formattedTime.push(`${minutes.toString().padStart(2, "0")}m`);
  formattedTime.push(`${seconds.toString().padStart(2, "0")}s`); // Always show seconds

  // Join the array with colons
  return formattedTime.join(':');
};
