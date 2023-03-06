import { Container } from "./styles";
import User from "../User/User";
import { useEffect } from "react";
import { useState } from "react";

interface Iprops {
  name: string;
  comment: string;
  time: string;
}

export default function Comment({ comment, time, name }: Iprops) {
  const [elapsedTime, setElapsedTime] = useState<string | null>(null);
  useEffect(() => {
    const dataPost = new Date(time);
    const dataAtual = new Date();
    const mili = dataAtual.getTime() - dataPost.getTime();
    const segundos = Math.floor(mili / 1000);
    const minutes = Math.floor(segundos / 60);
    const horas = Math.floor(minutes / 60);
    const days = Math.floor(horas / 24);
    const mouth = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    let elapsedTime = "";
    console.log(horas);

    if (years > 0) {
      if (years == 1) {
        elapsedTime = `há ${mouth} ano`;
      }
      elapsedTime = `há ${mouth} anos`;
    }
    if (mouth > 0) {
      if (mouth == 1) {
        elapsedTime = `há ${mouth} mês`;
      }
      elapsedTime = `há ${mouth} meses`;
    } else if (days > 0) {
      if (days == 1) {
        elapsedTime = `há ${horas} dia`;
      }
      elapsedTime = `há ${days} dias`;
    } else if (horas > 0) {
      if (horas == 1) {
        elapsedTime = `há ${horas} hora`;
      }
      elapsedTime = `há ${horas} horas`;
    } else if (minutes > 0) {
      if (minutes == 1) {
        elapsedTime = `há ${minutes} minuto`;
      }
      elapsedTime = `há ${minutes} minutos`;
    } else {
      elapsedTime = "há poucos segundos";
    }
    setElapsedTime(elapsedTime);
  }, [time]);

  return elapsedTime ? (
    <Container>
      <div className="container-user">
        <User
          fontColor="black"
          name={name}
          path={"/profile"}
          type={"navibar"}
        />
        <span>{`• ${elapsedTime}`}</span>
      </div>

      <p>{comment}</p>
    </Container>
  ) : (
    <></>
  );
}
