import { Container } from "./styles"
import User from "../User/User"
interface Iprops{
  name: string
  comment: string
  time: number
}

export default function Comment({comment, time, name}: Iprops) {
  return (
    <Container>
            <div className="container-user">
            <User fontColor="black" name={name} path={"/profile"} type={"navibar"} />
            <span>• há {time} unidade de tempo</span>
            </div>
            
            <p>
                {
                  comment
                }
            </p>
      
    </Container>
  );
}
