import { Container } from "./styles";

interface Iprops {
  year: string;
  km: string;
}

export default function CarData({ year, km }: Iprops) {
  return (
    <Container>
      <span>{km}</span>
      <span>{year}</span>
    </Container>
  );
}
