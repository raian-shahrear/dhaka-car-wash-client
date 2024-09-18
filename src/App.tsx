import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import 'swiper/css/bundle';
import "react-day-picker/style.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
