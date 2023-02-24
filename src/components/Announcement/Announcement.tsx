import { Container } from "./styles";
import Timer from "../Timer/Timer";
import Description from "../Description/Description";
import Image from "next/image";
import CarData from "../CarData/CarData";
import User from "../User/User";
import Price from "../Price/Price";

interface Iprops {
  title: string;
  description: string;
  year: string;
  km: string;
  advertiser: string;
  price: string;
}

export default function Announcement({
  title,
  description,
  year,
  km,
  advertiser,
  price,
}: Iprops) {
  return (
    <Container>
      <figure>
        <img draggable="false" src={"/carI.jpg"} alt="car"></img>
      </figure>
      <div className="container-text">
        <Description lines="2" size="small" fontColor="black" title={title} description={description} />
        <User fontColor="black" name={advertiser} />
        <div className="data">
          <CarData year={year} km={km} />
          <Price fontColor="black" price={price} />
        </div>
      </div>
    </Container>
  );
}
