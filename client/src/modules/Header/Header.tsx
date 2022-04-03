import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { Logo } from "components";
import { ReactComponent as MenuIcon } from "assets/icons/menu-icon.svg";
import { ReactComponent as AccountIcon } from "assets/icons/account-icon.svg";
import React from "react";
import COLORS from "constants/colors";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
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
          <IconButton sx={{ color: COLORS.PRIMARY }} onClick={handleMenu2}>
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
            onClose={handleClose2}
          >
            <MenuItem onClick={handleClose2}>Profile 1</MenuItem>
            <MenuItem onClick={handleClose2}>My account 2</MenuItem>
          </Menu>
          <Logo />
          <div>
            <IconButton onClick={handleMenu}>
              <AccountIcon width={"1.6rem"} height={"1.6rem"} fill={COLORS.PRIMARY} />
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
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
