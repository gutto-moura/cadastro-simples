import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "./routes/routes";
import GlobalStyle from "./pages/styles/global";

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000}/>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
