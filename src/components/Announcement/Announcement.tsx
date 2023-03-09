/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";
import Description from "../Description/Description";
import CarData from "../CarData/CarData";
import User from "../User/User";
import Price from "../Price/Price";
import Button from "../Button/Button";
import Router from "next/router";
import { IAnouncement } from "@/@types/PropsComponents";

import { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext";

export interface Iprops {
  data: IAnouncement;
  profile?: boolean;
  userTag?: boolean;
}

export default function Announcement({ data, profile, userTag }: Iprops) {
  const {
    modalCreate,
    setModalCreate,
    setModalEditeData,
    modalEdite,
    setModalEdite,
  } = useContext(ModalContext);

  const selectModal = () =>{
    setModalEditeData(data);
    setModalEdite(true)
    
  }
 
  return (
    <>
      <Container>
        <figure onDoubleClick={() => Router.push(`/vehicle/${data.id}`)}>
          <img draggable="false" src={data.cover_img} alt="car"></img>
        </figure>
        <div className="container-text">
          <Description
            lines="2"
            size="small"
            fontColor="black"
            title={data.title}
            description={data.description}
          />
          {userTag && (
            <User
              path={`profiles/${data.user?.id}`}
              fontColor="white"
              name={data.user?.name}
            />
          )}

          <div className="data">
            <CarData year={data.year} km={data.km} />
            <Price fontColor="black" price={data.price} />
          </div>
        </div>
        {profile && (
          <div className="container-btns">
            <Button
              Propsfunction={selectModal}
              value={"Editar"}
              fontColor={"#000000"}
              width="100px"
              borderColor={"#000000"}
            />
            <Button
              value="Ver como"
              Propsfunction={() => Router.push(`/vehicle/${data.id}`)}
              borderColor="black"
            />
          </div>
        )}
      </Container>
    </>
  );
}
