import { ArrowRight, Home } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function Lista({handleAbrir}) {
    return (
        <List component="nav" sx={{width: 240}} >
            <ListItemButton component="a" href="https://www.linkedin.com/in/joseph-angel-herrera-mantilla/">
              <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Smart Delta"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon color="primary" ></HomeIcon>
              </ListItemIcon>
              <ListItemText primary="Home" ></ListItemText>
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <AccountCircleIcon color="primary" ></AccountCircleIcon>
                </ListItemIcon>
                <ListItemText
                  primary="Perfil"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  onClick={handleAbrir}
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'black',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-4px) rotate(-20deg)',
                      },
                      '& svg:last-of-type': {
                        right: 0,
                        opacity: 1,
                      },
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      height: '80%',
                      display: 'block',
                      left: 0,
                      width: '1px',
                      bgcolor: 'divider',
                    },
                  }}
                >
                  <SettingsIcon></SettingsIcon>
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
              </Tooltip>
            </ListItem>
        </List>
    );
  }