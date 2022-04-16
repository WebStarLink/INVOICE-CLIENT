import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
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
import React, { useState } from "react";
import COLORS from "constants/colors";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

const Header = () => {
  const navigate = useNavigate();
  const [controlMenu, setControlMenu] = useState<null | HTMLElement>(null);
  const [accountMenu, setAccountMenu] = useState<null | HTMLElement>(null);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleOpenControlMenu = (event: React.MouseEvent<HTMLElement>) => {
    setControlMenu(event.currentTarget);
  };
  const handleOpenAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenu(event.currentTarget);
  };

  const handleCloseControlMenu = () => {
    setControlMenu(null);
  };
  const handleCloseAccountMenu = () => {
    setAccountMenu(null);
  };

  const handleLogoNavigate = () => {
    navigate("/");
  };

  const handleAddNewClientNavigate = () => {
    handleCloseControlMenu();
    navigate(ROUTES.ADD_CLIENT);
  };
  const handleAddManageClientsNavigate = () => {
    handleCloseControlMenu();
    navigate(ROUTES.CLIENTS);
  };
  const handleCreateInvoiceNavigate = () => {
    handleCloseControlMenu();
    navigate(ROUTES.ADD_INVOICE);
  };
  const handleCreateContractNavigate = () => {
    handleCloseControlMenu();
    navigate(ROUTES.ADD_CONTRACT);
  };
  const handleProfileNavigate = () => {
    handleCloseAccountMenu();
    navigate(ROUTES.PROFILE);
  };

  const handleOpenConfirmLogout = () => {
    handleCloseAccountMenu();
    setOpenConfirmModal(true);
  };
  const handleCloseConfirmLogout = () => {
    setOpenConfirmModal(false);
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
          <IconButton sx={{ color: COLORS.PRIMARY }} onClick={handleOpenControlMenu}>
            <MenuIcon width={"1.6rem"} height={"1.6rem"} fill={COLORS.PRIMARY} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={controlMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(controlMenu)}
            onClose={handleCloseControlMenu}
          >
            <MenuItem onClick={handleAddNewClientNavigate}>
              <ListItemIcon>
                <AddNewClientIcon width={20} height={20} />
              </ListItemIcon>
              Add new client
            </MenuItem>
            <MenuItem onClick={handleAddManageClientsNavigate}>
              <ListItemIcon>
                <ManageClientsIcon width={20} height={20} />
              </ListItemIcon>
              Manage clients
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCreateInvoiceNavigate}>
              <ListItemIcon>
                <CreateInvoiceIcon width={20} height={20} />
              </ListItemIcon>
              Create invoice
            </MenuItem>
            <MenuItem onClick={handleCreateContractNavigate}>
              <ListItemIcon>
                <CreateContractIcon width={20} height={20} />
              </ListItemIcon>
              Create contract
            </MenuItem>
          </Menu>
          <Logo onClick={handleLogoNavigate} />

          <IconButton onClick={handleOpenAccountMenu}>
            <MenuAccountIcon width={"1.6rem"} height={"1.6rem"} fill={COLORS.PRIMARY} />
          </IconButton>
          <Menu
            id="menu-profilebar"
            anchorEl={accountMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(accountMenu)}
            onClose={handleCloseAccountMenu}
          >
            <MenuItem onClick={handleProfileNavigate}>
              <ListItemIcon>
                <MyProfileIcon width={20} height={20} />
              </ListItemIcon>
              My Profile
            </MenuItem>
            <MenuItem onClick={handleOpenConfirmLogout}>
              <ListItemIcon>
                <LogoutIcon width={20} height={20} />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Dialog
        open={openConfirmModal}
        onClose={handleCloseConfirmLogout}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>{"Do you want logout?"}</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleCloseConfirmLogout}
            sx={{
              color: COLORS.PRIMARY,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCloseConfirmLogout}
            autoFocus
            sx={{
              color: COLORS.WHITE,
              background: COLORS.PRIMARY,
              ":hover": {
                color: COLORS.PRIMARY,
              },
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Header;
