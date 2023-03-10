import {ProfileMain} from "@/patterns/ProfileMain/ProfileMain";
import { array } from "public/mockup";
import { useContext, useState } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useEffect } from "react";
import { IUser } from "@/@types/PropsComponents";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "@/services/axios";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  await apiClient.get('/anouncement')

  return {
    props: {}
  }
}