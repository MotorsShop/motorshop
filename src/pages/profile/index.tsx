import {ProfileMain} from "@/patterns/ProfileMain/ProfileMain";
import { array } from "public/mockup";
import { useContext, useState } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useEffect } from "react";
import { IUser } from "@/@types/PropsComponents";

export default function Profile() {
  const {currentUser, retriveUser} = useContext(ApiContext)
  const [user, setUser] = useState<IUser | null>(null)
  
  useEffect(()=>{
    async function data() {
      const data = await retriveUser(currentUser?.id);
      setUser(data?.data);
    }
    if(currentUser?.id){
      data();
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currentUser])

  return (
     <ProfileMain auction={array}  author={user} profile/>
  );
}
