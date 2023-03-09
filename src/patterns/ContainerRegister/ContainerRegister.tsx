import { ContainerTotal } from "./styles";
import Button from "@/components/Button/Button";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";

export default function ContainerRegister() {

  const {register} = useContext(ApiContext)
  
  const initialValues = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    date_of_birth: "",
    description: "",
    type: "anunciante",
    password: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("O campo é obrigatório"),
    email: Yup.string().required("O campo é obrigatório").email(),
    cpf: Yup.string().required("O campo é obrigatório"),
    phone: Yup.string().required("O campo é obrigatório"),
    date_of_birth: Yup.string().required("O campo é obrigatório"),
    description: Yup.string().required("O campo é obrigatório"),
    type: Yup.string().required("O campo é obrigatório"),
    password: Yup.string().required("O campo é obrigatório"),
  });

  const [typeUser, setTypeUser] = useState("anunciante");

  const changeTypeUser = (type: string) => {
    setTypeUser(type);
  };

  const handleSubmit = (values: any) => {
    values.type = typeUser;
    register(values)
  };

  return (
    <>
      <ContainerTotal>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>Cadastro</h1>
              <p>Informações Pessoais</p>
              <div className="row">
                <label>Nome</label>
                <Field
                  name="name"
                  placeholder="Ex: Samuel leao"
                  required
                  type="text"
                />
                {errors.name && touched.name ? (
                  <p className="error-message">{errors.name}</p>
                ) : null}
              </div>
              <div className="row">
                <label>Email</label>
                <Field
                  name="email"
                  placeholder="Ex: samuel@kenzie.com.br"
                  required
                  type="email"
                />
                {errors.email && touched.email ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>
              <div className="row">
                <label>CPF</label>
                <Field
                  name="cpf"
                  placeholder="000.000.000-00"
                  required
                  type="text"
                />
                {errors.cpf && touched.cpf ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>
              <div className="row">
                <label>Celular</label>
                <Field
                  name="phone"
                  placeholder="(DDD) 90000-0000"
                  required
                  type="tel"
                />
                {errors.phone && touched.phone ? (
                  <p className="error-message">{errors.email}</p>
                ) : null}
              </div>

              <div className="row">
                <label>Data de Nascimento</label>
                <Field
                  name="date_of_birth"
                  placeholder="00/00/00"
                  required
                  type="date"
                />
                {errors.date_of_birth && touched.date_of_birth ? (
                  <p className="error-message">{errors.date_of_birth}</p>
                ) : null}
              </div>
              <div className="row">
                <label>Descrição</label>
                <Field
                  name="description"
                  placeholder="Digitar descrição"
                  required
                  type="text"
                />
                {errors.description && touched.description ? (
                  <p className="error-message">{errors.description}</p>
                ) : null}
              </div>

              <div className="row">
                <p>Tipo de Conta</p>
                <div>
                  <Button
                    Propsfunction={() => changeTypeUser("anunciante")}
                    value={"Anunciante"}
                    fontColor={typeUser === "anunciante" ? "#ffffff" : "black"}
                    width="228px"
                    borderColor={
                      typeUser === "anunciante" ? undefined : "#504f51"
                    }
                    color={typeUser === "anunciante" ? "#4529E6" : undefined}
                  />
                  <Button
                    Propsfunction={() => changeTypeUser("comprador")}
                    value={"Comprador"}
                    fontColor={typeUser === "comprador" ? "#ffffff" : "black"}
                    width="228px"
                    borderColor={
                      typeUser === "comprador" ? undefined : "#504f51"
                    }
                    color={typeUser === "comprador" ? "#4529E6" : undefined}
                  />
                </div>
              </div>

              <div className="row">
                <label>Senha</label>
                <Field
                  name={"password"}
                  placeholder="Digitar senha"
                  required
                  type="password"
                />
                {errors.description && touched.description ? (
                  <p className="error-message">{errors.description}</p>
                ) : null}
              </div>

              {/* <label>Confirmar senha</label> */}
              {/* <Field  placeholder="Confirmar senha" required type="text" /> */}
              <div className="row">
                <Button
                  type="submit"
                  value="Finalizar cadastro"
                  borderColor="#4529E6"
                  color="#4529E6"
                  width="100%"
                  fontColor="#DEE2E6"
                />
              </div>
            </Form>
          )}
        </Formik>
      </ContainerTotal>
    </>
  );
}
