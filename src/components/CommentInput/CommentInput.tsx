import { Container } from "./styles";
import User from "../User/User";
import Button from "../Button/Button";
import { arrayComments } from "public/mockup";
import { useFormikContext, Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useEffect } from "react";
interface Iprops {
  name: string;
  anoucementId: string;
}

interface Values {
  comment: string;
}


export default function CommentInput({ name, anoucementId}: Iprops) {
  const { comment } = useContext(ApiContext);

  return (
    <Container>
      <div className="container-user">
        <User
          fontColor="black"
          name={name}
          path={"/profile"}
          type={"navibar"}
        />
      </div>
      <div>
        <Formik
          initialValues={{ comment: "" }}
          validationSchema={Yup.object({
            comment: Yup.string(),
          })}
          onSubmit={(
            values: Values, {resetForm}
          ) => {
              const data = {
                comment: values.comment,
                authorId: "b7f6da2f-fe36-455c-94e4-7bd3de9a2ddf",
              };
              comment(anoucementId, "b7f6da2f-fe36-455c-94e4-7bd3de9a2ddf", data);
            resetForm();
          }}
        >
          <Form className="container-input">
            <Field
              as="textarea"
              className="text-area"
              type="text"
              name="comment"
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            />
            <Button
              color={"#4529E6"}
              value="Comentar"
              fontColor="white"
              width="108px"
            />
          </Form>
        
        </Formik>
        
      </div>
      <div className="container-btns">
        {arrayComments.map((ele, index) => (
          <button key={index}>{ele.comment}</button>
        ))}
      </div>
    </Container>
  );
}
