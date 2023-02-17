import axios from "axios";

const multisigClient = axios.create({
  baseURL: "http://localhost:5001",
});

export default multisigClient;
