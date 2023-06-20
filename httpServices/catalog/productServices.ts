import { GET } from "../service";

export const getProductListService = () => {
    return GET(`/api/product/getproducts`);
};

export const getProductService = (id: any) => {
    return GET(`/api/products/GetProductById?productId=${id}`);
};