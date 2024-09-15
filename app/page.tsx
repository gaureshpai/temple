import HomeAboutSection from "@/components/HomeAboutSection";
import HomeImageSlider from "@/components/HomeImageSlider";
import HomeTrusteeTab from "@/components/HomeTrusteeTab";
import HomeLatestUpdates from "@/components/HomeLatestUpdates";

export default function Home() {
  return (
    <div className='min-h-[80vh]'>
      <HomeImageSlider/>
      <HomeAboutSection/>
      <HomeTrusteeTab/>
      <HomeLatestUpdates/>
    </div>
  );
}
