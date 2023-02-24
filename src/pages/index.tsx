import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import { array } from "public/mockup";
import Auction from "@/components/Auction/Auction";
import Announcement from "@/components/Announcement/Announcement";
export default function Home() {
  return (
    <>
      <Banner />
      <Carousel title={"Leilão"} list={array}>
        {array.map((ele, index) => (
          <Auction
            price="R$ 00.000,00"
            advertiser="Pedro Silva"
            year="2015"
            km="0km"
            title={ele.title}
            description={ele.description}
            key={index}
          />
        ))}
      </Carousel>
      <Carousel title={"Carros"} list={array}>
        {array.map((ele, index) => (
          <Announcement
            price="R$ 00.000,00"
            advertiser="Pedro Silva"
            year="2015"
            km="0km"
            title={ele.title}
            description={ele.description}
            key={index}
          />
        ))}
      </Carousel>
      <Carousel title={"Motos"} list={array}>
        {array.map((ele, index) => (
          <Announcement
            price="R$ 00.000,00"
            advertiser="Pedro Silva"
            year="2015"
            km="0km"
            title={ele.title}
            description={ele.description}
            key={index}
          />
        ))}
      </Carousel>
    </>
  );
}
