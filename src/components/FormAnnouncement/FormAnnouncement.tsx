import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { useState, useRef } from "react";
import Button from "../Button/Button";
import { ContainerButton, Container, InputForm, ContainerUrl } from "./styles";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
interface Values {
  title: string;
  year: number | "";
  description: string;
  km: number | "";
  vehicle_type: string;
  cover_img: string;
  ad_type: string;
  images: never[] | string[];
  price: number | "";
  userId: string;
}

interface Iprops {
  closeHandler: () => void;
}
export default function FormAnnouncement({ closeHandler }: Iprops) {
  const [typeCar, setTypeCar] = useState("car");
  const [adCar, setAdCar] = useState("sale");
  const { post } = useContext(ApiContext);
  const changeTypeVehicle = (type: string) => {
    setTypeCar(type);
  };

  const changeTypeAd = (type: string) => {
    setAdCar(type);
  };

  const handleSubmit = (values: Values) => {
    values.ad_type = adCar;
    values.vehicle_type = typeCar;
    values.km = Number(values.km);
    values.price = Number(values.price);
    values.year = Number(values.year);
    post(values, closeHandler);
  };

  const initialValues: Values = {
    title: "",
    year: "",
    description: "",
    km: "",
    vehicle_type: typeCar,
    cover_img: "",
    ad_type: adCar,
    price: "",
    images: [""],
    userId: "b7f6da2f-fe36-455c-94e4-7bd3de9a2ddf",
  };
  const schema = Yup.object().shape({
    title: Yup.string().required("O campo é obrigatório"),
    year: Yup.number().typeError("Deve ser um número").required("O campo é obrigatório"),
    description: Yup.string(),
    price: Yup.number().typeError("Deve ser um número").required("O campo é obrigatório"),
    km: Yup.number().typeError("Deve ser um número").required("O campo é obrigatório"),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <h2 className="row">Criar anuncio</h2>
            <div className="row">
              <p>Tipo de anuncio</p>
              <ContainerButton>
                <Button
                  Propsfunction={() => changeTypeAd("sale")}
                  value={"Venda"}
                  fontColor={adCar === "sale" ? "#ffffff" : "black"}
                  width="228px"
                  borderColor={adCar === "sale" ? undefined : "#504f51"}
                  color={adCar === "sale" ? "#4529E6" : undefined}
                />
                <Button
                  value={"Leilão"}
                  Propsfunction={() => changeTypeAd("auction")}
                  fontColor={adCar === "auction" ? "#ffffff" : "black"}
                  width="228px"
                  borderColor={adCar === "auction" ? undefined : "#504f51"}
                  color={adCar === "auction" ? "#4529E6" : undefined}
                />
              </ContainerButton>
            </div>
            <p className="row">Informações do veículo</p>
            <div className="row">
              <label>Título</label>
              <Field
                type="text"
                name="title"
                id="title"
                placeholder="Digitar título"
              />
              {errors.title && touched.title ? <p className="error-message">{errors.title}</p> : null}
            </div>
            <div className="row">
              <div className="container-flex">
                <div>
                  <label>Ano</label>
                  <Field
                    name="year"
                    id="year"
                    type="text"
                    placeholder="Digitar ano"
                  />
                  {errors.year && touched.year ? <p className="error-message">{errors.year}</p> : null}
                </div>
                <div>
                  <label>Quilometragem</label>
                  <Field name="km" id="km" type="text" placeholder="0" />
                  {errors.km && touched.km ? <p className="error-message">{errors.km}</p> : null}
                </div>
                <div>
                  <label>Preço</label>
                  <Field name="price" type="text" placeholder="Digitar preço" />
                  {errors.price && touched.price ? <p className="error-message">{errors.price}</p> : null}
                </div>
              </div>
            </div>
            <div className="row">
              <label>Descrição</label>
              <Field
                as="textarea"
                name="description"
                id="description"
                cols={parseInt("30")}
                rows={parseInt("4")}
              />
            </div>
            <ContainerButton>
              <Button
                Propsfunction={() => changeTypeVehicle("car")}
                value={"Carro"}
                fontColor={typeCar === "car" ? "#ffffff" : "black"}
                width="228px"
                borderColor={typeCar === "car" ? undefined : "#504f51"}
                color={typeCar === "car" ? "#4529E6" : undefined}
              />
              <Button
                Propsfunction={() => changeTypeVehicle("motorbike")}
                value={"Moto"}
                fontColor={typeCar === "motorbike" ? "#ffffff" : "black"}
                width="228px"
                borderColor={typeCar === "motorbike" ? undefined : "#504f51"}
                color={typeCar === "motorbike" ? "#4529E6" : undefined}
              />
            </ContainerButton>
            <div className="rows">
              <label>Imagem da capa</label>
              <Field
                name="cover_img"
                id="cover_img"
                type="text"
                placeholder="Inserir URL da imagem"
              />
            </div>
            <div className="list">
              <FieldArray name="images">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { images } = values;
                  return (
                    <div className="input-url">
                      {images.map((image: string, index: number) => (
                        <>
                          <label>{`${index + 1}° Imagem da galeria`}</label>
                          <div key={index}>
                            <Field
                              name={`images[${index}]`}
                              placeholder={"Inserir URL da imagem"}
                            />
                            {index > 0 && (
                              <Button
                                value="-"
                                color="#4529E6"
                                fontColor="white"
                                Propsfunction={() => remove(index)}
                              />
                            )}
                          </div>
                        </>
                      ))}
                      <Button
                        Propsfunction={() => push("")}
                        value={"Adicionar campo para imagem da galeria"}
                        fontColor={"#4529e6"}
                        width="370px"
                        color={"#EDEAFD"}
                      />
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            <div className={"container-btns_create"}>
              <Button
                value={"Cancelar"}
                fontColor={"#495057"}
                width="126px"
                color={"#DEE2E6"}
              />
              <Button
                type="submit"
                value={"Criar anúncio"}
                width="193px"
                color={"#B0A6F0"}
                fontColor={"#EDEAFD"}
              />
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
