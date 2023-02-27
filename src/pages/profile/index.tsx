import Announcement from "@/components/Announcement/Announcement";
import Auction from "@/components/Auction/Auction";
import Carousel from "@/components/Carousel/Carousel";
import { array } from "public/mockup";
import { useState } from "react";
import Carousels from "@/patterns/Carousels/Carousels";
import {
  Container,
  ContainerBlue,
  ContainerDescriptonUser,
  ContainerImgUser,
  ContainerIntern,
  ContainerUserAdm,
  ContainerUserAdmTag,
  Demostrativo,
} from "./styles";
import ModalAnnounce from "@/components/AnnouncementsModals/CreateAnnounce/CreateModal";
import SucessModal from "@/components/AnnouncementsModals/SucessModal/SucessModal";
import ModalUpdateAnnounce from "@/components/AnnouncementsModals/UpdateAnnounce/UpdateModal";
import DeleteModal from "@/components/AnnouncementsModals/DeleteModal/DeleteModal";
import User from "@/components/User/User";
export default function Profile() {
  const [user, SetUser] = useState({});

  return (
    <>
      <ContainerBlue></ContainerBlue>
      <Container>
        <ContainerDescriptonUser>
        <ContainerIntern>
           <User path="/profile" typeUser="advertiser" profile fontColor="white" name="Usuário doidão"/>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, accusantium recusandae, totam explicabo fuga non quo
              quasi natus maxime dignissimos quia facilis fugiat. Blanditiis
              facere tempore officia totam? Suscipit, consectetur.
            </p>
            <ModalAnnounce />
          </ContainerIntern>
        </ContainerDescriptonUser>
        <Demostrativo>
          <ModalUpdateAnnounce />
          <SucessModal />
          <DeleteModal />
        </Demostrativo>
      </Container>
      <div>
      <div>
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
      <Carousels/>
      </div>
      </div>
    </>
  );
}
