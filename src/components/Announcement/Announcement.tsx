import { Container } from "./styles";
import Description from "../Description/Description";
import CarData from "../CarData/CarData";
import User from "../User/User";
import Price from "../Price/Price";

interface Iprops {
  title: string;
  description: string;
  year: number;
  km: number;
  advertiser: string;
  price: number;
  imageUrl: string
}

export default function Announcement({
  title,
  description,
  year,
  km,
  advertiser,
  price,
  imageUrl
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
        <User path="/profile" fontColor="white" profile={false} name={advertiser} />
        <div className="data">
          <CarData year={year} km={km} />
          <Price fontColor="black" price={price} />
        </div>
      </div>
    </Container>
  );
}
