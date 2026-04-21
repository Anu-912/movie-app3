import Image from "next/image";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <Navigation />
      <div className='w-full h-150 my-3'></div>
      <div className='grid grid-cols-5 grid-rows-2 my-20 space-x-2'> </div>

      <Footer />
    </div>
  );
}
