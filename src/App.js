import Cadastro from "./pages/Cadastro";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <Cadastro />
    </div>
  );
}

export default App;
