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
import { useUpdateSlotMutation } from "@/redux/api/slotApi";
import Loading from "@/utils/Loading";
import { FormEvent } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const SlotStatusChange = ({ slot }: { slot: any }) => {
  const [slotUpdate, { isLoading }] = useUpdateSlotMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    try {
      const updateSlotStatus = {
        id: slot?._id,
        data: {
          isBooked: (form.elements.namedItem("slotStatus") as HTMLInputElement)
            .value,
        },
      };
      const newData = await slotUpdate(updateSlotStatus).unwrap();
      if (newData?.success) {
        toast.success("Slot status has been updated!");
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
        <Button
          className="px-1 py-2 h-fit rounded w-fit"
          disabled={slot?.isBooked === "booked" || slot?.isBooked === "expired"}
        >
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Slot Status</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Change Status
              </label>
              <select
                name="slotStatus"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={slot?.isBooked}
              >
                <option value="">Select status</option>
                <option value="available">Available</option>
                <option value="cancelled">Cancelled</option>
                <option value="expired">Expired</option>
                <option value="booked" disabled>
                  Booked
                </option>
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

export default SlotStatusChange;
