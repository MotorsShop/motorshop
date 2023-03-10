import Announcement from "@/components/Announcement/Announcement";
import Carousel from "@/components/Carousel/Carousel";
import { IAnouncement } from "@/@types/PropsComponents";
import { Container } from "./styles";
interface Iprops {
  profile?: boolean;
  listVehicle?: IAnouncement[];
  userTag?: boolean;
}

export default function Carousels({ profile, listVehicle, userTag }: Iprops) {
  return (

    <Container>
      {listVehicle?.length ? (
        <>
          <Carousel title={"Carros"}>
            {listVehicle
              .filter((ele) => ele.vehicle_type === "car").sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
              .map((ele, index) => (
                <Announcement
                  key={index}
                  data={ele}
                  userTag={userTag}
                  profile={profile}
                />
              ))}
          </Carousel>
          <Carousel title={"Motos"}>
            {listVehicle
              .filter((ele) => ele.vehicle_type === "motorbike")
              .map((ele, index) => (
                <Announcement
                  key={index}
                  data={ele}
                  userTag={userTag}
                  profile={profile}
                />
              ))}
          </Carousel>
        </>
      ):
      <div>
          <h2>Não há anúncios</h2>
      </div>
    }
    </Container>
  )
    
  
   

}
