import { Container } from "./styles";

interface Iprops {
  year: number;
  km: number;
}

export default function CarData({ year, km }: Iprops) {
  return (
    <Container>
      <span>{year}</span>
      <span>{km}km</span>
    </Container>
  );
}
