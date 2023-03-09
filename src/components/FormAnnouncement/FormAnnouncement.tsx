import React  from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../Button/Button";
import { ContainerButton, Container } from "./styles";
import { AnnouncementRequest, Images } from "@/contexts/ApiContext";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";

interface Values {
  title?: string;
  year?: number | "";
  description?: string;
  km?: number | "";
  vehicle_type?: string;
  cover_img?: string;
  ad_type?: string;
  images?: never[] | string[];
  price?: number | "";
  userId?: string;
  published?: boolean;
  sold?: boolean;
}

interface Iprops {
  closeHandler: () => void;
  functionRequest: (
    data: AnnouncementRequest,
    closemodal: any,
    id?: string
  ) => void;
  id?: string;
  type: string;
  description?: string;
  title?: string;
  price?: number;
  year?: number;
  km?: number;
  sold?: boolean;
  published?: boolean;
  imageUrl?: string;
  vehicle_type?: string;
  images?: any;
}

export default function FormAnnouncement({
  closeHandler,
  functionRequest,
  id,
  type,
  description,
  imageUrl,
  images,
  price,
  title,
  year,
  vehicle_type,
  published,
  km,
}: Iprops) {
  const [typeCar, setTypeCar] = useState("car");
  const [adCar, setAdCar] = useState("sale");
  const [publicAnnoucement, setpublic] = useState(true);
  const changeTypeVehicle = (type: string) => {
    setTypeCar(type);
  };
  const { setConfirmeModal, deleteAnnouncement } = useContext(ApiContext);
  const { currentUser } = useContext(ApiContext);
  const changeTypeAd = (type: string) => {
    setAdCar(type);
  };

  const handleSubmit = (values: Values) => {
    values.ad_type = adCar;
    values.vehicle_type = typeCar;
    values.sold = false;
    values.km = Number(values.km);
    values.price = Number(values.price);
    values.year = Number(values.year);
    functionRequest(values, closeHandler, id);
  };
  const remove = (id: string) => {
    console.log(id);
    closeHandler();
    setTimeout(() => {
      setConfirmeModal([
        {
          title: "Tem certeza que deseja remover este anúncio?",
          text: "Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.",
          header: "Excluir anúncio",
          functionAction: () => {
            deleteAnnouncement(id);
          },
        },
      ]);
    }, 500);
  };
  const initialValues: Values = {
    title: type == "update" ? title : "",
    year: type == "update" ? year : "",
    description: type == "update" ? description : "",
    km: type == "update" ? km : "",
    vehicle_type: type == "update" ? vehicle_type : typeCar,
    cover_img: type == "update" ? imageUrl : "",
    ad_type: adCar,
    published: type == "update" ? published : publicAnnoucement,
    price: type == "update" ? price : "",
    images: type == "update" ? images : [""],
    userId: currentUser?.id,
  };
  const schema = Yup.object().shape({
    title: Yup.string().required("O campo é obrigatório"),
    year: Yup.number()
      .typeError("Deve ser um número")
      .required("O campo é obrigatório"),
    description: Yup.string(),
    price: Yup.number()
      .typeError("Deve ser um número")
      .required("O campo é obrigatório"),
    km: Yup.number()
      .typeError("Deve ser um número")
      .required("O campo é obrigatório"),
  });

  return (
    <>
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
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
                {errors.title && touched.title ? (
                  <p className="error-message">{errors.title}</p>
                ) : null}
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
                    {errors.year && touched.year ? (
                      <p className="error-message">{errors.year}</p>
                    ) : null}
                  </div>
                  <div>
                    <label>Quilometragem</label>
                    <Field name="km" id="km" type="text" placeholder="0" />
                    {errors.km && touched.km ? (
                      <p className="error-message">{errors.km}</p>
                    ) : null}
                  </div>
                  <div>
                    <label>Preço</label>
                    <Field
                      name="price"
                      type="text"
                      placeholder="Digitar preço"
                    />
                    {errors.price && touched.price ? (
                      <p className="error-message">{errors.price}</p>
                    ) : null}
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
              {type == "update" && (
                <div className="row">
                  <p>Publicado</p>
                  <ContainerButton>
                    <Button
                      Propsfunction={() => setpublic(true)}
                      value={"Sim"}
                      fontColor={publicAnnoucement ? "#ffffff" : "black"}
                      width="228px"
                      borderColor={publicAnnoucement ? undefined : "#504f51"}
                      color={publicAnnoucement ? "#4529E6" : undefined}
                    />
                    <Button
                      value={"Não"}
                      Propsfunction={() => setpublic(false)}
                      fontColor={!publicAnnoucement ? "#ffffff" : "black"}
                      width="228px"
                      borderColor={!publicAnnoucement ? undefined : "#504f51"}
                      color={!publicAnnoucement ? "#4529E6" : undefined}
                    />
                  </ContainerButton>
                </div>
              )}

              <div className="row">
                <label>Imagem da capa</label>
                <Field
                  name="cover_img"
                  id="cover_img"
                  type="text"
                  placeholder="Inserir URL da imagem"
                />
              </div>
              <div className="row">
                <FieldArray name="images">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { images } = values;
                    return (
                      <div className="input-url">
                        {images?.map((image: string, index: number) => (
                          <div key={index}>
                            <label>{`${index + 1}° Imagem da galeria`}</label>
                            <div>
                              <Field
                                name={`images[${index}]`}
                                placeholder={"Inserir URL da imagem"}
                              />

                              <Button
                                value="-"
                                color="#4529E6"
                                fontColor="white"
                                Propsfunction={() => remove(index)}
                              />
                            </div>
                          </div>
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
                  Propsfunction={() => {
                    type === "create" ? closeHandler() : remove(id!);
                  }}
                  value={type === "create" ? "Cancelar" : "Excluir anúncio"}
                  fontColor={"#495057"}
                  width={type === "create" ? "120px" : "200px"}
                  color={"#DEE2E6"}
                />
                <Button
                  type="submit"
                  value={
                    type === "create" ? "Criar anúncio" : "Salvar alterações"
                  }
                  width="165px"
                  color={"#B0A6F0"}
                  fontColor={"#EDEAFD"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
