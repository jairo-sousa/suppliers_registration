import { Button, Input, Typography } from "antd";
import "../styles/suppliers.css";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { fakeDbUrl } from "../main";

const dataModel = {
    id: "",
    nome: "",
    ramo: "",
    email: "",
    telefone: "",
    website: "",
    endereço: "",
    localização: "",
};

const handleSave = () => {
    console.log("SAVE");
};

const handleEdit = () => {
    console.log("EDIT");
};

const handleDelete = () => {
    console.log("DELETE");
};

export default function Suppliers() {
    const { supplierCode } = useParams();
    const [supplier, setSupplier] = useState();

    const getSupplier = () => {
        axios
            .get(`${fakeDbUrl}/suppliers/${supplierCode}`)
            .then((res) => {
                setSupplier(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (supplierCode) {
            getSupplier();
        }
    }, []);

    return (
        <div id="suppliersLayout" className="items-start flex-col">
            <div id="supplierHeader" className="flex-col">
                <a href="/">
                    <CloseOutlined id="closeBtn" />
                </a>
                <Typography.Title level={1} id="suppliersTitle">
                    {supplierCode ? "Editar" : "Novo"} Fornecedor
                </Typography.Title>
                <span id="supplersSubTitle">
                    {supplierCode
                        ? "Modifique os campos para editar o"
                        : "Preencha as informações para adicionar um"}{" "}
                    Fornecedor
                </span>
            </div>

            <form id="supplierForm" className="flex-col">
                {supplier
                    ? Object.keys(supplier).map((key) => {
                          if (key !== "id") {
                              return (
                                  <fieldset key={key} className="flex-col">
                                      <label htmlFor={`${key}`}>{key}</label>
                                      <Input
                                          id={`${key}`}
                                          className="dataInput"
                                          value={supplier[key]}
                                          allowClear
                                          variant="borderles"
                                      />
                                  </fieldset>
                              );
                          }
                          return null;
                      })
                    : Object.keys(dataModel).map((key) => {
                          if (key !== "id") {
                              return (
                                  <fieldset key={key} className="flex-col">
                                      <label htmlFor={`${key}`}>{key}</label>
                                      <Input
                                          id={`${key}`}
                                          className="dataInput"
                                          placeholder={`Digite ${key}`}
                                          allowClear
                                          variant="borderles"
                                      />
                                  </fieldset>
                              );
                          }
                          return null;
                      })}
            </form>

            <div id="btns">
                {supplierCode && (
                    <Button
                        type="primary"
                        danger
                        id="removeBtn"
                        onClick={() => {
                            handleDelete();
                        }}
                    >
                        Remover
                    </Button>
                )}
                <Button
                    type="primary"
                    id="saveBtn"
                    onClick={() => {
                        if (supplier) {
                            handleEdit();
                        } else {
                            handleSave();
                        }
                    }}
                >
                    Salvar
                </Button>
            </div>
        </div>
    );
}
