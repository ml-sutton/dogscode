import { AboutUs } from "@/components/index/about_us";
import { CTA } from "@/components/index/cta";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <AboutUs/>
      </div>
      <div className="bg-white py-0.5 pb-14">
        <CTA/>
      </div>
    </>
  );
}
