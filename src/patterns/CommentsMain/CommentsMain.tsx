import { Container } from "./styles";
import { IComment } from "@/@types/PropsComponents";
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
              name={ele.author.name}
              comment={ele.comment}
              time={ele.created}
            />
          </li>
        ))}
    </Container>
  );
}
