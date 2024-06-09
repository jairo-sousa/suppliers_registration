import { Button, Input, Typography } from "antd";
import "../styles/suppliers.css";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function Suppliers() {
    const { supplierCode } = useParams();
    const [dataToSend, setDataToSend] = useState({ ...dataModel });
    const navigate = useNavigate();

    const getSupplier = () => {
        axios
            .get(`${fakeDbUrl}/suppliers/${supplierCode}`)
            .then((res) => {
                setDataToSend(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const postSupplier = (data) => {
        axios
            .post(`${fakeDbUrl}/suppliers`, data)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const updateSupplier = (data, id) => {
        axios
            .put(`${fakeDbUrl}/suppliers/${id}`, data)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteSupplier = (data, id) => {
        axios
            .delete(`${fakeDbUrl}/suppliers/${id}`, data)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (supplierCode) {
            getSupplier();
        }
    }, [supplierCode]);

    const handleInputChange = (key, value) => {
        setDataToSend((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSave = () => {
        postSupplier(dataToSend);
    };

    const handleEdit = () => {
        updateSupplier(dataToSend, dataToSend.id);
    };

    const handleDelete = () => {
        deleteSupplier(dataToSend, dataToSend.id);
    };

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
                {Object.keys(dataToSend).map((key) => {
                    if (key !== "id") {
                        return (
                            <fieldset key={key} className="flex-col">
                                <label htmlFor={`${key}`}>{key}</label>
                                <Input
                                    id={`${key}`}
                                    className="dataInput"
                                    value={dataToSend[key]}
                                    allowClear
                                    variant="borderles"
                                    onChange={(e) =>
                                        handleInputChange(key, e.target.value)
                                    }
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
                        onClick={handleDelete}
                    >
                        Remover
                    </Button>
                )}
                <Button
                    type="primary"
                    id="saveBtn"
                    onClick={() => {
                        if (supplierCode) {
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
