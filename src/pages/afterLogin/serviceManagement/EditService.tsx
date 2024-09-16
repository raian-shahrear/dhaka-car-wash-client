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
import { useUpdateServiceMutation } from "@/redux/api/serviceApi";
import { getImageUrl } from "@/utils/getImageUrl";
import Loading from "@/utils/Loading";
import { FormEvent, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "sonner";

const EditService = ({ service }: { service: any }) => {
  const [preview, setPreview] = useState(service?.image);
  const [serviceUpdate, { isLoading }] = useUpdateServiceMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const profileInput = form.elements.namedItem("image") as HTMLInputElement;
    const profileFile = profileInput.files && profileInput.files[0];

    try {
      let imageUrl = service?.image;
      if (profileFile) {
        imageUrl = await getImageUrl(profileFile);
      }

      const updateService = {
        id: service?._id,
        data: {
          name: (form.elements.namedItem("title") as HTMLInputElement).value,
          description: (
            form.elements.namedItem("description") as HTMLTextAreaElement
          ).value,
          price: Number(
            (form.elements.namedItem("price") as HTMLInputElement).value
          ),
          duration: Number(
            (form.elements.namedItem("duration") as HTMLInputElement).value
          ),
          image: imageUrl,
        },
      };
      const newData = await serviceUpdate(updateService).unwrap();
      if (newData?.success) {
        toast.success("Service has been updated!");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  // Update the preview image when a new file is selected
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-1 py-2 h-fit rounded">
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 py-8">
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={service?.name}
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service cost (in num)
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter cost"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={service?.price}
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Duration (in min)
              </label>
              <input
                type="number"
                name="duration"
                placeholder="Enter duration"
                className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                defaultValue={service?.duration}
              />
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Service Image
              </label>
              <div className="grid grid-cols-[36px_1fr] gap-2">
                <img
                  src={preview}
                  alt="service"
                  className="w-9 h-9 rounded-sm object-cover object-center"
                />
                <input
                  type="file"
                  name="image"
                  className="border border-gray-300 w-full h-9 px-2 py-1 text-sm rounded-sm"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold mb-1 inline-block">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="border border-gray-300 w-full min-h-20 px-2 py-1 text-sm rounded-sm"
                defaultValue={service?.description}
              ></textarea>
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

export default EditService;
