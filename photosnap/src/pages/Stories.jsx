import HeroFullWidth from "../components/HeroFullWidth";
import StoriesGrid from "../components/StoriesGrid";
import { heroFullWidthData, storiesGridData, storiesGridData2, storiesGridData3, storiesGridData4 } from '../data/storiesData';

function Stories() {
  return (
    <div>
      <HeroFullWidth {...heroFullWidthData} />
      <StoriesGrid storiesData={storiesGridData} />
      <StoriesGrid storiesData={storiesGridData2} />
      <StoriesGrid storiesData={storiesGridData3} />
      <StoriesGrid storiesData={storiesGridData4} />
    </div>
  );
}

export default Stories;
