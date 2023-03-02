import { Container } from "./styles";
import CarData from "../CarData/CarData";
import Price from "../Price/Price";
import Button from "../Button/Button";
interface Iprops{
  title: string
  year: number
  km: number
  price: number
}

export default function InfoCar({title, km, year, price}: Iprops) {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <CarData  km={km} year={year}/>
        <Price fontColor="black" price={price}/>
       
      </div>
      <Button value="Comprar" color="#4529E6" width="100px"  fontColor="white"/>
    </Container>
  );
}
