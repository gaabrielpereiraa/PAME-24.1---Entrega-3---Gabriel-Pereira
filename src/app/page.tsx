import Image from "next/image";
import Sidebar from "./components/sidebar"

export default function Home() {
  return (
    <div className="w-screen h-[100vh] flex" >
      <Sidebar></Sidebar>
    </div>
  );
}
