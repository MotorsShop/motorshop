import Announcement from "@/components/Announcement/Announcement";
import Auction from "@/components/Auction/Auction";
import Carousel from "@/components/Carousel/Carousel";
import { array } from "public/mockup";
import { useState } from "react";
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
export default function Profile() {
  const [user, SetUser] = useState({});

  return (
    <>
      <ContainerBlue></ContainerBlue>
      <Container>
        <ContainerDescriptonUser>
          <ContainerIntern>
            <ContainerImgUser fontColor="black">
              {user.img ? (
                <img src={user.img} alt={user.name} />
              ) : (
                <div>
                  <p>SL</p>
                </div>
              )}
            </ContainerImgUser>
            <ContainerUserAdm>
              <p>Samuel Leão</p>
              <ContainerUserAdmTag>Anunciante</ContainerUserAdmTag>
            </ContainerUserAdm>
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
      </div>
    </>
  );
}
