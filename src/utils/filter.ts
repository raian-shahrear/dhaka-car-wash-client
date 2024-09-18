import { TServiceOption } from "@/types";

type TFilterObj = {
  searchTerm?: string;
  services?: string;
  service?: string;
  date?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  limit?: number;
  page?: number;
};

type TFilterFunProps = {
  search?: string;
  filterByService?: TServiceOption[];
  serviceId?: string;
  slotDate?: string;
  filterByMinPrice?: string;
  filterByMaxPrice?: string;
  sortBy?: string;
  dataLimit?: number;
  pageCount?: number;
};

export const filterFun = ({
  search,
  filterByService,
  serviceId,
  slotDate,
  filterByMinPrice,
  filterByMaxPrice,
  sortBy,
  dataLimit,
  pageCount,
}: TFilterFunProps): TFilterObj => {
  const filterObj: TFilterObj = {};

  if (search) {
    filterObj.searchTerm = search;
  }
  if (filterByService?.length) {
    filterObj.services = filterByService.map((val) => val.value).join(",");
  }
  if (serviceId) {
    filterObj.service = serviceId;
  }
  if (slotDate) {
    filterObj.date = slotDate;
  }
  if (filterByMinPrice) {
    filterObj.minPrice = parseFloat(filterByMinPrice);
  }
  if (filterByMaxPrice) {
    filterObj.maxPrice = parseFloat(filterByMaxPrice);
  }
  if (sortBy) {
    filterObj.sort = sortBy;
  }
  if (dataLimit) {
    filterObj.limit = dataLimit;
  }
  if (pageCount) {
    filterObj.page = pageCount;
  }

  return filterObj;
};
