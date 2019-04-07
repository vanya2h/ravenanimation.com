import axios from "axios";
import { config } from "@utils/config";

class ClientService {
	client = axios.create({
		baseURL: config.url
	});
}

export const clientService = new ClientService();
