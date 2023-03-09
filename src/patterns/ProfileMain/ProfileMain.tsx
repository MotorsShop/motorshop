import { ContainerProfile } from "./styles";
import Carousels from "../Carousels/Carousels";
import User from "@/components/User/User";
import Carousel from "@/components/Carousel/Carousel";
import Auction from "@/components/Auction/Auction";
import ModalUpdateAnnounce from "@/components/AnnouncementsModals/UpdateAnnounce/UpdateModal";
import Button from "@/components/Button/Button";
import { IUser } from "@/@types/PropsComponents";
import { ModalContext } from "@/contexts/ModalContext";
import ModalAnnounce from "@/components/AnnouncementsModals/CreateAnnounce/CreateModal";
import { useContext } from "react";
interface Iprops {
  profile?: boolean;
  auction?: any[];
  author: IUser | null;
  userTag?: boolean;
}

export function ProfileMain({ profile, auction, author, userTag }: Iprops) {
  const { modalCreate, setModalCreate } = useContext(ModalContext);
  return (
    <ContainerProfile>
      {profile && (
        <>
          <ModalAnnounce />
          <ModalUpdateAnnounce />
        </>
      )}
      {author && (
        <>
          <div className="container">
            <div className="container-user">
              <User
                fontColor="white"
                typeUser={author?.type}
                name={author?.name}
                type="profile"
                path={`${author?.id}`}
              />
              <div>{author?.description}</div>
              {profile && (
                <Button
                  Propsfunction={() => setModalCreate(true)}
                  value={"Criar anuncio"}
                  fontColor={" #4529E6;"}
                  width="160px"
                  borderColor={"#4529E6"}
                />
              )}
            </div>
            <div className="container-back" />
          </div>

          {profile && (
            <Carousel title={"Leilão"}>
              {auction &&
                auction.map((ele, index) => (
                  <Auction
                    profile
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
          )}
          <Carousels
            userTag={userTag}
            listVehicle={author?.anouncements}
            profile={profile}
          />
        </>
      )}
    </ContainerProfile>
  );
}


