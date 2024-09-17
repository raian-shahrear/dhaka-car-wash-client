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
import { useUpdateUserRoleMutation } from "@/redux/api/authApi";
import { useAppSelector } from "@/redux/hooks";
import Loading from "@/utils/Loading";
import { FormEvent } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const ChangeUserRole = ({ userInfo }: any) => {
  const [userUpdate, { isLoading }] = useUpdateUserRoleMutation();
  const { user } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const updateRole = {
        id: userInfo?._id,
        data: {
          role: (form.elements.namedItem("role") as HTMLInputElement).value,
        },
      };
      const newData = await userUpdate(updateRole).unwrap();
      if (newData?.success) {
        toast.success("User role has been updated!");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-1 py-2 h-fit rounded w-fit" disabled={user?._id === userInfo?._id}>
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
                name="role"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={userInfo?.role}
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
