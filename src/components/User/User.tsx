import { ContainerUser } from "./styles";

interface Iprops{
  name:string
  fontColor: string
}

export default function User({name, fontColor}: Iprops){
  const acronymName = name.trim().toUpperCase().split(" ");
  return (
    <ContainerUser fontColor={fontColor}>
      <div>
        <p>{acronymName[0][0] + acronymName[1][0]}</p>
      </div>
      <p>{name}</p>
    </ContainerUser>
  );
}
