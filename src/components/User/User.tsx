import { ContainerUser } from "./styles";
import Router from "next/router";
import { useEffect } from "react";
import { useState } from "react";
interface Iprops {
  name: string | undefined;
  fontColor: string;
  path?: string;
  type?: "navibar" | "profile";
  typeUser?: string;
  center?: boolean;
  fontWeight?: number;
  pColor?: string;
}

export default function User({
  name,
  fontColor,
  path,
  type,
  typeUser,
  center,
  fontWeight,
  pColor,
}: Iprops) {
  const [siglaUser, setSiglaUser] = useState("");

  useEffect(() => {
    if (name) {
      const nameUser = name.trim().toUpperCase().split(" ");
      if (nameUser[1]) {
        setSiglaUser(nameUser[0][0] + nameUser[1][0]);
      } else {
        setSiglaUser(nameUser[0][0] + nameUser[0][1]);
      }
    }
  }, [name]);

  const redirect = (data: string) => {
    console.log(data)
    Router.push(data);
  };
  return (
    <ContainerUser
      pColor={pColor}
      type={type}
      fontColor={fontColor}
      center={center}
      fontWeight={fontWeight}
      onClick={() => path && redirect(path)}
    >
      <div>
        <div>
          <p className="sigla-name">{siglaUser}</p>
        </div>
        <div>
          <p className="profile-name">{name}</p>
          {typeUser && <div className="profile-type">{typeUser}</div>}
        </div>
      </div>
    </ContainerUser>
  );
}
