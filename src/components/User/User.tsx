import { ContainerUser } from "./styles";
export default function User() {
  const name = "Samuel Leão";
  const acronymName = name.trim().toUpperCase().split(" ");
  return (
    <ContainerUser>
      <div>
        <p>{acronymName[0][0] + acronymName[1][0]}</p>
      </div>
      <p>{name}</p>
    </ContainerUser>
  );
}
