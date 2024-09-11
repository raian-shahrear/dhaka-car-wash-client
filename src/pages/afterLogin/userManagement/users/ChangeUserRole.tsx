import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent } from "react";
import { FaEdit } from "react-icons/fa";

const ChangeUserRole = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-1 py-2 h-fit rounded w-fit">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit User Role</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                User Role
              </label>
              <select
                name="slotStatus"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
              >
                <option value="">Select role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="submit"
                className="w-fit h-fit text-xs py-2 px-2 rounded"
              >
                Save change
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeUserRole;
