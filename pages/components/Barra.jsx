import { createTheme } from "@mui/material/styles";
import { ThemeContext } from "@emotion/react";
import { Box, styled, Drawer } from "@mui/material";


const CustomToolbar = styled("div")(({ theme }) => ({
    ...theme.mixins.toolbar
}));
const Root = styled("div")(({ theme }) => ({
    display: "flex"
}));
const Content = styled("div")(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
}));


export default function Barra(options) {
    
    return (
        <Root theme={theme} >
            <Content theme={theme}>
                <CustomToolbar theme={theme} />
                contenido
            </Content>
        </Root>
    )
}