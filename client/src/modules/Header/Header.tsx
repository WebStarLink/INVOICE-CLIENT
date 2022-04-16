import {
  AppBar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { Logo } from "components";
import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as MenuAccountIcon } from "assets/icons/account-icon.svg";
import { ReactComponent as AddNewClientIcon } from "assets/icons/add-new-client.svg";
import { ReactComponent as ManageClientsIcon } from "assets/icons/manage-clients.svg";
import { ReactComponent as CreateInvoiceIcon } from "assets/icons/create-invoice.svg";
import { ReactComponent as CreateContractIcon } from "assets/icons/create-contract.svg";
import { ReactComponent as MyProfileIcon } from "assets/icons/my-profile.svg";
import { ReactComponent as LogoutIcon } from "assets/icons/logout.svg";
import React from "react";
import COLORS from "constants/colors";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleCloseAccountMenu = () => {
    setAnchorEl2(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: COLORS.LIGHTGRAY,
          }}
        >
          <IconButton sx={{ color: COLORS.PRIMARY }} onClick={handleAccountMenu}>
            <MenuIcon width={"1.6rem"} height={"1.6rem"} fill={COLORS.PRIMARY} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl2)}
            onClose={handleCloseAccountMenu}
          >
            <MenuItem onClick={handleCloseAccountMenu}>
              <ListItemIcon>
                <AddNewClientIcon width={20} height={20} />
              </ListItemIcon>
              Add new client
            </MenuItem>
            <MenuItem onClick={handleCloseAccountMenu}>
              <ListItemIcon>
                <ManageClientsIcon width={20} height={20} />
              </ListItemIcon>
              Manage clients
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseAccountMenu}>
              <ListItemIcon>
                <CreateInvoiceIcon width={20} height={20} />
              </ListItemIcon>
              Create invoice
            </MenuItem>
            <MenuItem onClick={handleCloseAccountMenu}>
              <ListItemIcon>
                <CreateContractIcon width={20} height={20} />
              </ListItemIcon>
              Create contract
            </MenuItem>
          </Menu>
          <Logo />
          <div>
            <IconButton onClick={handleMenu}>
              <MenuAccountIcon width={"1.6rem"} height={"1.6rem"} fill={COLORS.PRIMARY} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>
                <ListItemIcon>
                  <MyProfileIcon width={20} height={20} />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <ListItemIcon>
                  <LogoutIcon width={20} height={20} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
