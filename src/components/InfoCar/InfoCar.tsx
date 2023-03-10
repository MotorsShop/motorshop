import { Container } from "./styles";
import CarData from "../CarData/CarData";
import Price from "../Price/Price";
import Button from "../Button/Button";
import Router from "next/router";
interface Iprops {
  title: string;
  year: number;
  km: number;
  price: number;
  userPhone: string;
}

export default function InfoCar({ title, km, year, price, userPhone }: Iprops) {
  const redirect = (data: string) => {
    Router.push(`https:wa.me/${userPhone}`);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <CarData km={km} year={year} />
        <Price fontColor="black" price={price} />
      </div>

      <Button
        Propsfunction={() => redirect(userPhone)}
        value="Comprar"
        color="#4529E6"
        width="100px"
        fontColor="white"
      />
    </Container>
  );
}
