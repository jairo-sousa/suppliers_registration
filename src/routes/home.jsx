import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Input, Typography } from "antd";

import { fakeDbUrl } from "../main";
import { SearchOutlined } from "@ant-design/icons";

import "../styles/home.css";

export default function Home() {
    const [suppliers, setSuppliers] = useState();
    const [searchText, setSearchText] = useState("");

    const getAllSuppliers = () => {
        axios
            .get(`${fakeDbUrl}/suppliers`)
            .then((res) => {
                setSuppliers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getAllSuppliers();
    }, []);

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const filteredSuppliers = suppliers?.filter((supplier) =>
        supplier.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className="flex-col" id="layout">
                <header className="flex-col" id="header">
                    <Typography.Title level={1} id="pageTitle">
                        REGISTRO DE FORNECEDORES
                    </Typography.Title>

                    <div className="divider">
                        <SearchOutlined />
                        <Input
                            id="searchBar"
                            placeholder="Digite para pesquisar..."
                            allowClear
                            variant="borderless"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                </header>
                <div id="content">
                    <a href="/suppliers">
                        <Card className="supplierCard">
                            <span className="cardTitle">
                                Adicionar fornecedor
                            </span>
                        </Card>
                    </a>

                    {filteredSuppliers &&
                        filteredSuppliers.map((supplier) => {
                            return (
                                <a
                                    href={`/suppliers/${supplier.id}`}
                                    key={supplier.id}
                                >
                                    <Card className="supplierCard">
                                        <div className="flex-col cardBody">
                                            <div className="cardHeader flex-col">
                                                <span className="cardTitle ">
                                                    {supplier.nome}
                                                </span>
                                                <span className="cardContent">
                                                    {supplier.ramo}
                                                </span>
                                            </div>

                                            <span className="cardContent">
                                                {supplier.telefone}
                                                <br />
                                                {supplier.email}
                                                <br />
                                                {supplier.website}
                                            </span>

                                            <span className="cardContent">
                                                {supplier.endereço}
                                                <br />
                                                {supplier.localização}
                                            </span>
                                        </div>
                                    </Card>
                                </a>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
