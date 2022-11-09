import { Toaster } from "react-hot-toast";
import { PhotoProvider } from "react-photo-view";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";


function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      <PhotoProvider></PhotoProvider>
    </div>
  );
}

export default App;
