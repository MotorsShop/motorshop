/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";
import Description from "../Description/Description";
import CarData from "../CarData/CarData";
import User from "../User/User";
import Price from "../Price/Price";
import Button from "../Button/Button";
import ModalUpdateAnnounce from "../AnnouncementsModals/UpdateAnnounce/UpdateModal";
import Router from "next/router";
interface Iprops {
  id: string;
  title: string;
  description: string;
  year: number;
  km: number;
  advertiser: string;
  price: number;
  imageUrl: string;
  profile?: boolean;
}

export default function Announcement({
  id,
  title,
  description,
  year,
  km,
  advertiser,
  price,
  imageUrl,
  profile,
}: Iprops) {
  return (
    <Container>
      <figure>
        <img draggable="false" src={imageUrl} alt="car"></img>
      </figure>
      <div className="container-text">
        <Description
          lines="2"
          size="small"
          fontColor="black"
          title={title}
          description={description}
        />
        {!profile && (
          <User path="/profile" fontColor="white" name={advertiser} />
        )}

        <div className="data">
          <CarData year={year} km={km} />
          <Price fontColor="black" price={price} />
        </div>
      </div>
      {profile && (
        <div className="container-btns">
          <ModalUpdateAnnounce />
          <Button
            value="Ver como"
            Propsfunction={() => Router.push(`/vehicle/${id}`)}
            borderColor="black"
          />
        </div>
      )}
    </Container>
  );
}
