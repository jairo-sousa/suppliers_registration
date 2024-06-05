import axios from "axios";
import { useEffect, useState } from "react";

import { fakeDbUrl } from "../main";

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
        console.log(suppliers);
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <div>
                <a href={`/`}>HOME</a>
                <a href={`/suppliers`}>SUPPLIERS</a>
            </div>
        </div>
    );
}
