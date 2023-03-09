import Announcement from "@/components/Announcement/Announcement";
import Carousel from "@/components/Carousel/Carousel";
import { IAnouncement } from "@/@types/PropsComponents";

interface Iprops {
  profile?: boolean;
  listVehicle?: IAnouncement[];
  userTag?: boolean;
}

export default function Carousels({ profile, listVehicle, userTag }: Iprops) {
  return listVehicle ? (
    <>
      {listVehicle.length && (
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
      )}
    </>
  ) : (
    <h2>Sem aunúncios</h2>
  );
}
