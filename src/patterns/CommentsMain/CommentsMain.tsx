import { Container } from "./styles";
import Comment from "@/components/Comment/Comment";

interface Iprops {
list: CommentProps[];
}

interface CommentProps{
  comment: string
  time: number
  name: string
}

export function CommentsMain({list}: Iprops) {
  return (
    <Container>
      <h2>Comentários</h2>
      {list.map((ele, index) => (
        <li key={index}>
          <Comment  name={ele.name} comment={ele.comment} time={ele.time} />
        </li>
      ))}
    </Container>
  );
}
