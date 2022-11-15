import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href={'/'}>MAGONOTE</Link>
      </Typography>
      <Divider />
      <List>
        <Link href={"/pricing"}>料金プラン</Link>
        <Link href={"/portfolio"}>レポートギャラリー</Link>
        <Link href={"/contact"}>お問い合わせ</Link>
        <Link href={"/trial"}>無料で始める</Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar sx={{ backgroundColor: "#fff" }}>
            <IconButton
              className="text-black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block", color: "#000" } }}
            >
              MAGONOTE
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link href={"/pricing"}><a className="text-black px-2">料金プラン</a></Link>
              <Link href={"/portfolio"}><a className="text-black px-2">レポートギャラリー</a></Link>
              <Link href={"/contact"}><a className="text-black px-2">お問い合わせ</a></Link>
              <Link href={"/trial"}><a className="text-black px-2">無料で始める</a></Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
