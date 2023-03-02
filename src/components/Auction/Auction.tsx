import { ContainerAuction } from "./styles";
import Timer from "../Timer/Timer";
import Description from "../Description/Description";
import Image from "next/image";
import CarData from "../CarData/CarData";
import User from "../User/User";
import Price from "../Price/Price";
import React from "react";
import Button from "../Button/Button";

interface Iprops {
  title: string;
  description: string;
  year: number;
  km: number;
  advertiser: string;
  price: number;
  imageUrl: string;
  profile?: boolean;
}

export default function Auction({
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
    <ContainerAuction>
      <div className="container-front">
        <div className="container-text">
          <Timer />
          <Description
            fontColor="white"
            size="big"
            title={title}
            description={description}
          />
          <User path="/profile" pColor={"white"} fontColor="white" name={advertiser} />
          <div className="data">
            <CarData year={year} km={km} />
            <Price fontColor="white" price={price} />
          </div>
        </div>
        {profile ? (
          <div className="container-btns flex-start">
            <Button value="Editar" borderColor="white" fontColor="white" />
            <Button value="Ver como" borderColor="white" fontColor="white"  />
          </div>
        ) : (
          <button className="container-btns">
            <p>Acessar página do leilão</p>
            <Image src={"Seta.svg"} alt="seta" width={26} height={14}></Image>
          </button>
        )}
      </div>

      <figure>
        <img draggable="false" src={imageUrl} alt="car"></img>
      </figure>
    </ContainerAuction>
  );
}
