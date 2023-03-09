import { Container, ContainerTotal } from "./styles";
import Button from "@/components/Button/Button";
import Router from "next/router";
import { Formik, Field, Form } from "formik";
import { ApiContext } from "@/contexts/ApiContext";
import { useContext } from "react";
import * as Yup from "yup";

export default function ContainerLogin() {

 const {login} = useContext(ApiContext)

  const redirect = (data: string) => {
    Router.push(data);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const schema = Yup.object().shape({
    email: Yup.string().required("O campo é obrigatório").email(),
    password: Yup.string().required("O campo é obrigatório"),
  });

  const handleSubmit = (values: any) => {
    login(values)
  };
  return (
    <ContainerTotal>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form>
            <Container>
              <h1>Login</h1>
              <label>Usuário</label>
              <Field type="text" name="email" placeholder="Digitar usuário" />
              {errors.email && <span>{errors.email}</span>}
              <label>Senha</label>
              <Field
                type="password"
                name="password"
                placeholder="Digitar senha"
              />
              {errors.password && <span>{errors.password}</span>}
              <button className="buttonForgotPassword">
                Esqueci minha senha
              </button>

              <Button
                type="submit"
                value="Entrar"
                borderColor="#4529E6"
                color="#4529E6"
                width="100%"
                fontColor="#DEE2E6"
              />

              <div>
                <p>Ainda não possui conta?</p>
              </div>
              <Button
                value="Cadastre-se"
                borderColor="#4529E6"
                color="#4529E6"
                width="100%"
                fontColor="#DEE2E6"
                Propsfunction={() => redirect("/register")}
              />
            </Container>
          </Form>
        )}
      </Formik>
    </ContainerTotal>
  );
}
