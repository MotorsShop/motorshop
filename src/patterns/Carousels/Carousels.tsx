import { ContainerCarousels} from "./styles";
import Announcement from "@/components/Announcement/Announcement";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Carousel from "@/components/Carousel/Carousel";

interface Iprops{
  profile?: boolean;
  
}
export default function Carousels({profile}:Iprops) {

  const { annoucements } = useContext(ApiContext);
  
  return (
    <ContainerCarousels>
    {annoucements.length && (
        <Carousel title={"Motos"}>
          {annoucements.map((ele, index) => (
            <Announcement
              id={ele.id}
              profile={profile}
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
        <Carousel title={"Motos"}>
          {annoucements.map((ele, index) => (
            <Announcement
              id={ele.id}
              profile={profile}
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
    

    </ContainerCarousels>
  );
}
