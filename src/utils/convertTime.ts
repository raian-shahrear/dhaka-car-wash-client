// convert minutes into hours and minutes
export const convertToHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours > 0 ? `${hours}hr ` : ""}${minutes > 0 ? `${minutes}min` : ""}`;
};
