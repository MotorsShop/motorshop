import { Container } from "./styles";
import { Comment as IComment} from "@/contexts/ApiContext";
import Comment from "@/components/Comment/Comment";


interface Iprops {
  comments:   IComment[]
}
export function CommentsMain({ comments}: Iprops) {
  return (
    <Container>
      <h2>Comentários</h2>
      {comments &&
        comments.map((ele, index) => (
          <li key={index}>
            <Comment
              name={"Usuário doidão"}
              comment={ele.comment}
              time={ele.created}
            />
          </li>
        ))}
    </Container>
  );
}
