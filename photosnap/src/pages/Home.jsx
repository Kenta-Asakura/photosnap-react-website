import HeroTwoBlocks from "../components/HeroTwoBlocks";
import StoriesGrid from "../components/StoriesGrid";
import { heroBlocksData, storiesGridData } from "../data/homeData";

function Home() {
  return (
    <>
      {heroBlocksData.map((block, index) => (
        <HeroTwoBlocks
          key={index}
          blocksLayout={block.blocksLayout}
          contentsBgColor={block.contentsBgColor}
          heading={block.heading}
          paragraph={block.paragraph}
          btnText={block.btnText}
          imgHeight={block.imgHeight}
          imgSrc={block.imgSrc}
        />
      ))}

      <StoriesGrid storiesData={storiesGridData} />
    </>
  )
}

export default Home;
