import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Input, Typography } from "antd";

import { fakeDbUrl } from "../main";
import { SearchOutlined } from "@ant-design/icons";

import "../styles/home.css";

export default function Home() {
    const [suppliers, setSuppliers] = useState([]);

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
                        />
                    </div>
                </header>
                <div id="content">
                    <a href="/suppliers">
                        <Card className="supplierCard">
                            <span className="cardTitle">Add supplier</span>
                        </Card>
                    </a>

                    {suppliers &&
                        suppliers.map((supplier) => {
                            return (
                                <Card
                                    className="supplierCard"
                                    key={supplier.id}
                                >
                                    <div className="flex-col cardBody">
                                        <div className="cardHeader flex-col">
                                            <span className="cardTitle ">
                                                {supplier.name}
                                            </span>
                                            <span className="cardContent">
                                                {supplier.branch}
                                            </span>
                                        </div>

                                        <span className="cardContent">
                                            {supplier.phone}
                                            <br />
                                            {supplier.email}
                                            <br />
                                            {supplier.website}
                                        </span>

                                        <span className="cardContent">
                                            {supplier.streetAddress}
                                            <br />
                                            {supplier.location}
                                        </span>
                                    </div>
                                </Card>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
