import { Api_Key_Imagbb } from "@/config";

export const getImageUrl = async (image: any) => {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${Api_Key_Imagbb}`;
    const res = await fetch(url, {
        method: "POST",
        body: formData,
    });
    const data = await res.json();
    return data?.data?.display_url;
};