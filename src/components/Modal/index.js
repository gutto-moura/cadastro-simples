import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ContainerModal, InputSenha, BotaoEntrar } from "./styleModal"
import { useNavigate  } from "react-router-dom";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #bbb',
    boxShadow: 20,
    p: 4,
    textAlign: 'center',
    fontFamily:'inherit',
    borderRadius: 2,
  };

export default function BasicModal() {
    const adminPassword = '1234';
    let navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function acessAdmin(){

        if(adminPassword === password){
            navigate("/admin", {replace: true})
        }else{
            console.log('erro')
        }
        }


  return (
    <ContainerModal>
      <Button onClick={handleOpen} sx={{color:"white", fontFamily: 'inherit'}}>Ver cadastros</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1" sx={{fontFamily: 'inherit', fontSize: 25, fontWeight:'bold'}}>
            ACESSAR CADASTROS
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', flexDirection: 'column'}}>
            <InputSenha 
                type = 'text'
                placeholder= " Digite sua senha"
                value = {password}
                onChange={e => setPassword(e.target.value)}
            />
            <BotaoEntrar onClick={acessAdmin}>Entrar</BotaoEntrar>
          </Typography>
        </Box>
      </Modal>
    </ContainerModal>
  );
}