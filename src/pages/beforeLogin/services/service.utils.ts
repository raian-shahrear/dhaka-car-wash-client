const currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);

export const upcomingSlotExist = (slotsByService: any) => {
  return slotsByService?.data?.find((info: any) => {
    if (info?.date) {
      const [year, month, day] = info.date.split("-").map(Number);
      const slotDate = new Date(year, month - 1, day);
      return slotDate.getTime() >= currentDate.getTime();
    }
    return false;
  });
};
