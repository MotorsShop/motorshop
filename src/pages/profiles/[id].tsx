import { ProfileMain } from "@/patterns/ProfileMain/ProfileMain";
import { useRouter } from "next/router";
import { ApiContext } from "@/contexts/ApiContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
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

export const getServerSideProps: GetServerSideProps = async(ctx)=> {
  
  const {['nextAuth.token']: token} = parseCookies(ctx)
  if(!token){
    return{
      redirect:{
        destination:'/register',
        permanent: false,
      }
    }
  }
  return{
    props:{}
  }
}