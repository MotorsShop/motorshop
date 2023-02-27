import { ContainerUser } from "./styles";
import Router from "next/router";
import { ReactNode } from "react";
interface Iprops {
  name: string;
  fontColor: string;
  path: string;
  profile?: boolean;
  typeUser?: "advertiser" | "buyer";
}

export default function User({
  name,
  fontColor,
  path,
  profile,
  typeUser,
}: Iprops) {
  const acronymName = name.trim().toUpperCase().split(" ");
  const redirect = (data: string) => {
    Router.push(data);
  };
  return (
    <ContainerUser
      profile={profile}
      fontColor={fontColor}
      onClick={() => redirect(path)}
    >
      <div>
        <div>
          <p className="profile-name">
            {acronymName[0][0] + acronymName[1][0]}
          </p>
        </div>
        <div>
          <p>{name}</p>
          {typeUser && <div className="profile-type">{typeUser}</div>}
        </div>
      </div>
    </ContainerUser>
  );
}
