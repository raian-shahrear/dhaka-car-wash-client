import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ChangeUserRole from "./ChangeUserRole";
import { useGetAllUsersQuery } from "@/redux/api/authApi";
import Loading from "@/utils/Loading";
import { useState } from "react";
import { filterFun } from "@/utils/filter";
import Pagination from "@/components/shared/pagination/Pagination";

const Users = () => {
  const [dataLimit, setDataLimit] = useState(10);
  const [pageCount, setPageCount] = useState(1);
  // get filter data from the utility
  const filterObj = filterFun({
    dataLimit,
    pageCount,
  });
  const { data: allUsers, isLoading: isGetUserLoading } =
    useGetAllUsersQuery(filterObj);

  if (isGetUserLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">All Users</h1>
      </div>
      {allUsers?.data?.length ? (
        <>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">SL</TableHead>
                <TableHead className="w-8">Profile</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="w-36">Change Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allUsers?.data?.map((user: any, idx: number) => (
                <TableRow key={user?._id}>
                  <TableCell className="font-medium">{(pageCount - 1) * dataLimit + idx + 1}</TableCell>
                  <TableCell>
                      <img src={user?.profile} alt="profile" className="w-8 h-8 rounded-full object-cover object-center" />
                  </TableCell>
                  <TableCell className="font-bold">{user?.name}</TableCell>
                  <TableCell className="font-medium">
                    <div className="max-w-48 text-ellipsis overflow-hidden">
                      {user?.email}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{user?.phone}</TableCell>
                  <TableCell className="font-medium">{user?.address}</TableCell>
                  <TableCell className="font-medium">{user?.role}</TableCell>
                  <TableCell>
                    <ChangeUserRole userInfo={user} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <section className="pt-10 mb-10">
            <Pagination
              data={allUsers}
              dataLimit={dataLimit}
              setDataLimit={setDataLimit}
              pageCount={pageCount}
              setPageCount={setPageCount}
            />
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center h-[30vh]">
          <p className="text-xl sm:text-2xl text-gray-300 font-medium">
            No user data found
          </p>
        </div>
      )}
    </div>
  );
};

export default Users;
