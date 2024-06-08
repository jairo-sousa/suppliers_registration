import { Input, Typography } from "antd";

import "../styles/suppliers.css";
import { CloseOutlined } from "@ant-design/icons";

export default function Suppliers() {
    return (
        <div id="suppliersLayout" className="items-start flex-col">
            <div id="supplierHeader">
                <Typography.Title level={1} id="suppliersTitle">
                    Novo Fornecedor
                </Typography.Title>
                <span id="supplersSubTitle">
                    Por favor preencha as informações do fornecedor
                </span>

                <a href="/">
                    <CloseOutlined id="closeBtn" />
                </a>
            </div>
        </div>
    );
}
