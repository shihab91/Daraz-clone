import httpReq from "./http.service";
class ProductService {
  //! change any to a proper type
  async getAllProducts(): Promise<any[]> {
    const { data } = await httpReq.get("/product");
    return data;
  }
}

export default new ProductService();
