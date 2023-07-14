import { Box, Button, Modal, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Aviso({ handlefailclose, failed }) {

    return(
        <>
            <Modal
                sx={{
                    display: "flex",
                    width: "auto",
                    textAlign: "center",
                    height: 500,
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // backgroundColor: "HighlightText",
                    // backgroundColor: "ghostwhite",
                    // backgroundColor: "lightblue",
                    backgroundColor: "orchid",
                    boxShadow: 30,
                    p: 6,

                }}

                open={failed}
                onClose={handlefailclose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography>
                        HOLA! Parece que tu usuario no sé encuentra en nuestra base de datos 
                    </Typography>
                    <Typography>
                        Registrate y unete al equipo!
                    </Typography>
                    <Button onClick={handlefailclose} variant="contained" sx={{ marginTop: 2, marginLeft: "3%"}} color="primary" size="large" > <ChevronLeftIcon /> <ChevronLeftIcon sx={{margin:-2}} /> <ChevronLeftIcon/> Atras </Button>
                    
                </Box>
            </Modal>
        </>
    )
}