import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./routes/routes";
function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <Router />
    </div>
  );
}

export default App;
