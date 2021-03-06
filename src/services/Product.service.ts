import httpReq from "./http.service";
class ProductService {
  //! change any to a proper type
  async getAllProducts(): Promise<IProduct[]> {
    const { data } = await httpReq.get("/product");
    return data;
  }
  async getProductDetailsById(id: string): Promise<IProduct> {
    const { data } = await httpReq.get("/product/" + id);
    return data;
  }
}

export default new ProductService();
