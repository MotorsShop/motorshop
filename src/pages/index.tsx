import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import { array } from "public/mockup";
import Auction from "@/components/Auction/Auction";
import Carousels from "@/patterns/Carousels/Carousels";

export default function Home() {
 
  return (
    <>
      <Banner />
      <Carousel title={"Leilão"} >
        {array.map((ele, index) => (
          <Auction
            price={ele.price}
            advertiser="Pedro Silva"
            year={ele.year}
            km={ele.km}
            title={ele.title}
            description={ele.description}
            key={index}
            imageUrl={ele.cover_img}
          />
        ))}
      </Carousel>
     <Carousels></Carousels>
    </>
  );
}
