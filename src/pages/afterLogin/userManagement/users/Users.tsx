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

const Users = () => {
  const { data: allUsers, isLoading: getUserLoading } =
    useGetAllUsersQuery(undefined);

  if (getUserLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex items-center justify-between flex-col sm:flex-row gap-2 mb-10">
        <h1 className="text-lg sm:text-xl font-bold">All Users</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">SL</TableHead>
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
              <TableCell className="font-medium">{idx + 1}</TableCell>
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
                <ChangeUserRole user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
