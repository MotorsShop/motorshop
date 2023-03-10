import { ProfileMain } from "@/patterns/ProfileMain/ProfileMain";
import { useRouter } from "next/router";
import { ApiContext } from "@/contexts/ApiContext";
import { useContext, useEffect } from "react";
import { useState } from "react";


export default function ProfileView() {
  const [user, setUser] = useState<any>()
  const {retriveUser} = useContext(ApiContext)
  const router = useRouter()
  const { id } = router.query
  
  useEffect(()=>{
      async function data() {
        const data = await retriveUser(id);
        setUser(data?.data);
      }
      if(id){
        data();
      }
      return
  },[id])
  
  return (
     <ProfileMain  author={user} />
  );
}

