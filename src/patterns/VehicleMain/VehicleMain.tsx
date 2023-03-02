import { ContainerVehicle } from "./styles";
import { ContainerBack } from "./styles";
import { StickyContainer, Sticky } from "react-sticky";
import Aside from "@/components/Aside/Aside";
import PhotoCar from "@/components/PhotoCar/PhotoCar";
import DescriptionCar from "@/components/DescriptionCar/DescriptionCar";
import InfoCar from "@/components/InfoCar/InfoCar";
import { arrayComments } from "public/mockup";
import { CommentsMain } from "../CommentsMain/CommentsMain";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useEffect } from "react";
export function VehicleMain() {
  const { annoucement, retriveAnnoucement ,setAnnoucement} = useContext(ApiContext);

  const router = useRouter();
  useEffect(() => {
    if (router.query.vehicleId) {
      retriveAnnoucement(router.query.vehicleId);
    }
    return setAnnoucement(null)
  }, [router.query.vehicleId]);

  return (
    <ContainerVehicle>
      <div className="row">
        <section>
          {
           annoucement && <PhotoCar img={annoucement?.cover_img}/>
          }
          
          {annoucement && (
            <>
              <InfoCar
                title={annoucement.title}
                year={annoucement.year}
                price={annoucement.price}
                km={annoucement.km}
              />
              <DescriptionCar description={annoucement.description} />
              <CommentsMain list={arrayComments} />
            </>
          )}
        </section>

        <StickyContainer className="aside">
          <Sticky>
            {({ style }) => (
              <div style={style}>
                <Aside />
              </div>
            )}
          </Sticky>
        </StickyContainer>
      </div>

      <ContainerBack />
    </ContainerVehicle>
  );
}
