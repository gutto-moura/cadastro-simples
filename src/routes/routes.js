import { BrowserRouter, Routes,  Route} from "react-router-dom";

import Home from "../pages/Cadastro";
import Admin from "../pages/Admin";
import Error from "../pages/Erro";

const Router = (() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/admin" element={<Admin />} exact/>
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
})

export default Router;