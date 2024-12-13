import useStorage from "../hooks/useStorage";
import { setAuth } from "../redux/features/auth";
import store from "../redux/store";

const storage = useStorage();

const handleLogout = () => {
    store.dispatch(setAuth({ role: null, token: null, user: null }));
    storage.clear();
    window.location.replace("/login");
}

export default handleLogout;