import { Box, Button, Modal, Typography } from "@mui/material";

export default function Ventana(options) {

    return(
        <>
            
            <Modal
                sx={{
                    display: "flex",
                    width: "auto",
                    textAlign: "center",
                    height: "auto",
                    alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    boxShadow: 24,
                    p: 4,

                }}

                open={options.apertura}
                onClose={options.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Titulo dentro del modal variante 6
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ratione saepe obcaecati aut facilis est ab voluptates perspiciatis laborum, sunt iusto deserunt iste atque, earum explicabo hic necessitatibus tempore cupiditate!
                    </Typography>
                    <Button sx={{
                        // width: "auto",
                        // textAlign: "center",
                        // height: "5%",
                        // alignItems: "center",
                        // position: "absolute",
                        // top: "50%",
                        // left: "50%",
                        // transform: "translate(-50%, -50%)",
                        backgroundColor: "rosybrown",
                        // boxShadow: 24,
                        // p: 3,
                        }} 
                     onClick={options.handleClose}>Cerrar</Button>
                </Box>
            </Modal>
        </>
    )
}