import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ChangeUserRole from "./ChangeUserRole";

const Users = () => {
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
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-bold">Mr. Admin</TableCell>
            <TableCell className="font-medium">
              <div className="max-w-48 text-ellipsis overflow-hidden">
                admin10@example.com
              </div>
            </TableCell>
            <TableCell className="font-medium">234-567-8901</TableCell>
            <TableCell className="font-medium">
              456 Elm St, Metropolis
            </TableCell>
            <TableCell className="font-medium">admin</TableCell>
            <TableCell>
              <ChangeUserRole />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-bold">Moye G. Bright</TableCell>
            <TableCell className="font-medium">
              <div className="max-w-48 text-ellipsis overflow-hidden">
                moye.bright@example.com
              </div>
            </TableCell>
            <TableCell className="font-medium">234-567-8901</TableCell>
            <TableCell className="font-medium">
              456 Elm St, Metropolis
            </TableCell>
            <TableCell className="font-medium">user</TableCell>
            <TableCell>
              <ChangeUserRole />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;
