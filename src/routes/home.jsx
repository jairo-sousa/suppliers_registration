import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Input, Typography } from "antd";

import { fakeDbUrl } from "../main";
import { SearchOutlined } from "@ant-design/icons";

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
                    <Typography.Title level={1} id="page-title">
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
                <div>CARD</div>
            </div>
        </>
    );
}
