import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Select from "react-select";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const serviceOptions = [
  {
    value: "01",
    label: "Car Disinfecting",
  },
  {
    value: "02",
    label: "Car Wrapping",
  },
  {
    value: "03",
    label: "Clay Bar Treatment",
  },
  {
    value: "04",
    label: "Electric Car Maintenance",
  },
  {
    value: "05",
    label: "Engine Bay Cleaning",
  },
  {
    value: "06",
    label: "Engine Maintenance",
  },
];

const ServiceComparison = () => {
  const [selectService, setSelectService] = useState([]);
  console.log(selectService);

  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <div className="mb-10">
        <p className="font-bold text-xl sm:text-2xl mb-3">Service Comparison</p>
        <div className="w-full md:w-8/12">
          <Select
            isMulti
            name="categories"
            options={serviceOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            placeholder="Select categories"
            onChange={(selectedOptions) => setSelectService(selectedOptions)}
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
            <TableHead>Service Title</TableHead>
            <TableHead>Service Cost</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-bold">Car Disinfecting</TableCell>
            <TableCell className="font-medium">$50</TableCell>
            <TableCell className="font-medium">60min</TableCell>
            <TableCell>
              <Link to="/services/1" className="inline-block">
                <Button className="px-1 py-2 h-fit rounded w-fit">
                  <BsBoxArrowInUpRight />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell className="font-bold">Car Wrapping</TableCell>
            <TableCell className="font-medium">$60</TableCell>
            <TableCell className="font-medium">50min</TableCell>
            <TableCell>
              <Link to="/services/1" className="inline-block">
                <Button className="px-1 py-2 h-fit rounded w-fit">
                  <BsBoxArrowInUpRight />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell className="font-bold">Clay Bar Treatment</TableCell>
            <TableCell className="font-medium">$50</TableCell>
            <TableCell className="font-medium">60min</TableCell>
            <TableCell>
              <Link to="/services/1" className="inline-block">
                <Button className="px-1 py-2 h-fit rounded w-fit">
                  <BsBoxArrowInUpRight />
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceComparison;
