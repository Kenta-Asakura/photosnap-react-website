import HeroFullWidth from "../components/HeroFullWidth";
import StoriesGrid from "../components/StoriesGrid";
import { heroFullWidthData } from '../data/storiesData';

function Stories() {
  return (
    <div>
      <HeroFullWidth {...heroFullWidthData}/>
    </div>
  );
}

export default Stories;
