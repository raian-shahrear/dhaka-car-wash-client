import { TServiceOption } from "@/types";

type TFilterObj = {
  searchTerm?: string;
  services?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  limit?: number;
  page?: number
};

type TProductFilterFunProps = {
  search?: string;
  filterByService?: TServiceOption[];
  filterByMinPrice?: string;
  filterByMaxPrice?: string;
  sortByPrice?: string;
  dataLimit?: number;
  pageCount?: number;
};

export const productFilterFun = ({
  search,
  filterByService,
  filterByMinPrice,
  filterByMaxPrice,
  sortByPrice,
  dataLimit,
  pageCount
}: TProductFilterFunProps): TFilterObj => {
  const filterObj: TFilterObj = {};

  if (search) {
    filterObj.searchTerm = search;
  }
  if (filterByService?.length) {
    filterObj.services = filterByService.map((val) => val.value).join(",");
  }
  if (filterByMinPrice) {
    filterObj.minPrice = parseFloat(filterByMinPrice);
  }
  if (filterByMaxPrice) {
    filterObj.maxPrice = parseFloat(filterByMaxPrice);
  }
  if (sortByPrice) {
    filterObj.sort = sortByPrice;
  }
  if (dataLimit) {
    filterObj.limit = dataLimit;
  }
  if (pageCount) {
    filterObj.page = pageCount;
  }

  return filterObj;
};
