import Mainpage from "@/components/Mainpage";
import MouseMoveEffect from "@/components/MouseMoveEffect";
import Sidepage from "@/components/Sidepage";

export default function Home() {
  return (
    <main className="bg-primary bg-cover bg-center relative flex flex-col laptop:flex-row selection:bg-secondary selection:text-black">
      <div className="laptop:flex-col">
        <Sidepage />
      </div>
      <div className="laptop:pl-[750px] mt-[500px] laptop:mt-[100px] ">
        <Mainpage />
      </div>
      <MouseMoveEffect />
    </main>
  );
}
