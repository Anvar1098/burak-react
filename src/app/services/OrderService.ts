import axios from "axios";
import { serverApi } from "../../lib/config";
import { server } from "typescript";

class OrderService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }
}

export default OrderService;