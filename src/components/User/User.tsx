import { ContainerUser } from "./styles";
import Router from "next/router";

interface Iprops {
  name: string;
  fontColor: string;
  path?: string;
  type?: "navibar"| "profile";
  typeUser?: "advertiser" | "buyer";
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
  pColor
  
}: Iprops) {
  const acronymName = name.trim().toUpperCase().split(" ");
  const redirect = (data: string) => {
      Router.push(data);
  };
  return (
    <ContainerUser
      pColor={pColor}
      type={type}
      fontColor={fontColor}
      center ={center}
      fontWeight ={fontWeight}
      onClick={() => path && redirect(path)}
    >
      <div>
        <div>
          <p className="sigla-name">
            {acronymName[0][0] + acronymName[1][0]}
          </p>
        </div>
        <div>
          <p className="profile-name">{name}</p>
          {typeUser && <div className="profile-type">{typeUser}</div>}
        </div>
      </div>
    </ContainerUser>
  );
}
