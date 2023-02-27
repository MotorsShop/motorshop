import { ContainerAuction } from "./styles";
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

export default function Auction({
  title,
  description,
  year,
  km,
  advertiser,
  price,
}: Iprops) {
  return (
    <ContainerAuction>
      <div className="container-front">
        <div className="container-text">
          <Timer />
          <Description fontColor="white" size="big" title={title} description={description} />
          <User fontColor="white" name={advertiser} />
          <div className="data">
          <CarData year={year} km={km} />
          <Price fontColor="white" price={price}/>
          </div>
          
        </div>
        <button>
          <p>Acessar página do leilão</p>
          <Image src={"Seta.svg"} alt="seta" width={26} height={14}></Image>
        </button>
      </div>

      <figure>
        <img draggable="false" src={"/carI.jpg"} alt="car"></img>
      </figure>
    </ContainerAuction>
  );
}
