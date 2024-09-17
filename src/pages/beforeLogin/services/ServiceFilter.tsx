import { Button } from "@/components/ui/button";
import { TServicesFilterProps } from "@/types";
import { FC } from "react";
import { FaArrowRotateLeft } from "react-icons/fa6";

const ServiceFilter: FC<TServicesFilterProps> = ({
  setSearchItem,
  setFilterByMinPrice,
  setFilterByMaxPrice,
  setSortBy,
}) => {
  // reset filter
  const handleAllFilterToReset = () => {
    setSearchItem("");
    setFilterByMinPrice("");
    setFilterByMaxPrice("");
    setSortBy("");
  };
  return (
    <section className="mb-10">
      <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_200px_1fr_96px] gap-2">
        <div>
          <input
            type="text"
            name="search"
            id="search"
            className="border border-gray-300 w-full h-9 px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
            placeholder="Search by name"
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <input
            type="number"
            name="minPrice"
            className="border border-gray-300 w-full h-9 px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
            placeholder="Min Price"
            onChange={(e) => setFilterByMinPrice(e.target.value)}
          />
          <input
            type="number"
            name="maxPrice"
            className="border border-gray-300 w-full h-9 px-2 py-2 text-sm rounded-sm placeholder:text-black outline-none"
            placeholder="Max Price"
            onChange={(e) => setFilterByMaxPrice(e.target.value)}
          />
        </div>
        <div>
          <select
            name="sorting"
            id="sorting"
            className="border border-gray-300 w-full h-9 px-1 py-1 text-sm rounded-sm"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="-price">High Price</option>
            <option value="price">Low Price</option>
          </select>
        </div>
        <Button
          type="reset"
          className="py-2 w-24 h-9 rounded"
          onClick={handleAllFilterToReset}
        >
          <FaArrowRotateLeft /> <span className="ml-2">Reset</span>
        </Button>
      </form>
    </section>
  );
};

export default ServiceFilter;
