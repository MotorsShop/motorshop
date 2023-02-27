import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import { array } from "public/mockup";
import Auction from "@/components/Auction/Auction";
import Announcement from "@/components/Announcement/Announcement";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
export default function Home() {
  const { annoucements } = useContext(ApiContext);
  return (
    <>
      <Banner />
      <Carousel title={"Leilão"} list={array}>
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
      {annoucements.length && (
        <Carousel title={"Motos"} list={array}>
          {annoucements.map((ele, index) => (
            <Announcement
              price={ele.price}
              advertiser="Pedro Silva"
              year={ele.year}
              km={ele.km}
              title={ele.title}
              imageUrl={ele.cover_img}
              description={ele.description}
              key={index}
            />
          ))}
        </Carousel>
      )}

      {annoucements.length && (
        <Carousel title={"Motos"} list={array}>
          {annoucements.map((ele, index) => (
            <Announcement
              price={ele.price}
              advertiser="Pedro Silva"
              year={ele.year}
              km={ele.km}
              title={ele.title}
              imageUrl={ele.cover_img}
              description={ele.description}
              key={index}
            />
          ))}
        </Carousel>
      )}
    </>
  );
}
