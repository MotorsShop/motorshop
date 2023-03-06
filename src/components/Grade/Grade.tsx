/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";
import { Images } from "@/contexts/ApiContext";
interface Iprops {
  list?: Images[];
}

export default function Grade({ list }: Iprops) {
  return (
    <Container>
      <div>
      <h2>Fotos</h2>
      <ul>
        {
          // eslint-disable-next-line @next/next/no-img-element
          list?.map((ele, index) => (
            <li key={index}>
              <figure>
                <img alt={`car_${index}`} src={ele.url} />
              </figure>
            </li>
          ))
        }
      </ul>
      </div>
     
    </Container>
  );
}
