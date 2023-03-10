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
        <Link href={"/"}>MAGONOTE</Link>
      </Typography>
      <Divider />
      <List sx={{ display: "flex", flexDirection: "column" }}>
        <Link href={"/pricing"}>
          <a className="text-black py-2" data-testid="header-pricing-link-sp">
            料金プラン
          </a>
        </Link>
        <Link href={"/portfolio"}>
          <a className="text-black py-2" data-testid="header-portfolio-link-sp">
            レポートギャラリー
          </a>
        </Link>
        <Link href={"https://next-report.jp/"}>
          <a className="text-black py-2" target="_blank" data-testid="header-blog-link-sp">
            ブログ
          </a>
        </Link>
        <Link href={"/contact"}>
          <a className="text-black py-2" data-testid="header-contact-link-sp">
            お問い合わせ
          </a>
        </Link>
        <Link href={"/trial"}>
          <a className="text-black py-2" data-testid="header-trial-link-sp">
            無料で始める
          </a>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header className="sticky top-0 z-50">
      <AppBar component="nav" className="rounded-full bg-white border border-solid border-black my-20">
        <Toolbar>
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
            <Link href={"/"}>MAGONOTE</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href={"/pricing"}>
              <a className="text-black px-2" data-testid="header-pricing-link">
                料金プラン
              </a>
            </Link>
            <Link href={"/portfolio"}>
              <a className="text-black px-2" data-testid="header-portfolio-link">
                レポートギャラリー
              </a>
            </Link>
            <Link href={"https://next-report.jp/"}>
              <a className="text-black px-2" target="_blank" data-testid="header-blog-link">
                ブログ
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="text-black px-2" data-testid="header-contact-link">
                お問い合わせ
              </a>
            </Link>
            <Link href={"/trial"}>
              <a className="text-black px-2" data-testid="header-trial-link">
                無料で始める
              </a>
            </Link>
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
    </header>
  );
}

export default Header;
