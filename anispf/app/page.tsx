import Image from "next/image";
import Sidebar from "./components/sidebar";
import Roadmap from "./components/Roadmap";
import Message from "./components/Message";
import { div } from "framer-motion/client";


export default function Home() {
  return (
    <div>
<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>



    <Sidebar />

    <Roadmap />
</div>

    <Message />
    </div>

  );
}
