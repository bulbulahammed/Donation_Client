import Banner from "@/components/ui/Banner";
import FooterSection from "@/components/ui/FooterSection";
import NewsLetter from "@/components/ui/NewsLetter";
import Program from "@/components/ui/Program";
import Testimonial from "@/components/ui/Testimonial";
import Video from "@/components/ui/Video";

export default function Home() {
  return (
      <div className="bg-gradient-to-b from-green-500 to-white">
        <Banner/>
        <Program/>
        <Video/>
        <NewsLetter/>
        <Testimonial/>
        <FooterSection/>
      </div>
  );
}
