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
  const [tempoDecorrido, setTempoDecorrido] = useState<string | null >(null);
  useEffect(() => {
    const dataPost = new Date(time);
    const dataAtual = new Date();
    const mili = dataAtual.getTime() - dataPost.getTime();
    const segundos = Math.floor(mili / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    let tempoDecorridoTexto = '';
    console.log(horas)
    if (horas > 0) {
      tempoDecorridoTexto = `há ${horas} horas`;
    } else if (minutos > 0) {
      tempoDecorridoTexto = `há ${minutos} minutos`;
    } else {
      tempoDecorridoTexto = 'há poucos segundos';
    }
    setTempoDecorrido(tempoDecorridoTexto);
  }, [time]);

  
  return (
    tempoDecorrido ?
    <Container>
      <div className="container-user">
        <User
          fontColor="black"
          name={name}
          path={"/profile"}
          type={"navibar"}
        />
         <span>{`• ${tempoDecorrido}`}</span>
      </div>

      <p>{comment}</p>
    </Container>
    :
    <></>
  );
}
