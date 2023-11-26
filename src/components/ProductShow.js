import React from "react";
import { useParams } from "react-router-dom";

const ProductShow = () => {
    const params = useParams();
    // console.log(params);
    const { productId } = params;

    return <h1>Hello from Product #{productId}</h1>;
};

export default ProductShow;
