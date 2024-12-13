import { jwtDecode } from "jwt-decode";
import useStorage from "../hooks/useStorage";

const storage = useStorage();

const handleToken = () => {
    if(storage.find("token")){
        return jwtDecode(storage.get("token"));
    }
}

export default handleToken;