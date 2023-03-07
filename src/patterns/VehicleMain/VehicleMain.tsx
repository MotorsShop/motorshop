import { ContainerVehicle } from "./styles";
import { ContainerBack } from "./styles";
import { StickyContainer, Sticky } from "react-sticky";
import Aside from "@/components/Aside/Aside";
import PhotoCar from "@/components/PhotoCar/PhotoCar";
import DescriptionCar from "@/components/DescriptionCar/DescriptionCar";
import InfoCar from "@/components/InfoCar/InfoCar";
import { CommentsMain } from "../CommentsMain/CommentsMain";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ApiContext, IList } from "@/contexts/ApiContext";
import { useEffect } from "react";
import CommentInput from "@/components/CommentInput/CommentInput";
import { useState } from "react";

export function VehicleMain() {
  const {annoucements} = useContext(ApiContext);
  const router = useRouter();
  const [annoucement, setAnnoucement] = useState<IList>()
 
  useEffect(() => {
  setAnnoucement(annoucements.find(element => element.id === router.query.vehicleId))
  }, [annoucements, router.query.vehicleId]);

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
              <CommentsMain comments={annoucement.comments}/>
              <CommentInput anoucementId={annoucement.id} name="Usuário doidão"/>
            </>
          )}
        </section>

        <StickyContainer className="aside">
          <Sticky>
            {({ style }) => (
              <div style={style}>
                <Aside images={annoucement?.images}/>
              </div>
            )}
          </Sticky>
        </StickyContainer>
      </div>

      <ContainerBack />
    </ContainerVehicle>
  );
}
