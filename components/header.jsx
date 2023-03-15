import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Toolbar from "@mui/material/Toolbar";

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} className="container">
      <Link href={"/"}>
        <a>
          <Image
            src="/images/header_logo.svg"
            alt="MAGONOTE"
            width={262}
            height={40}
            quality={90}
          />
        </a>
      </Link>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        <Link href={"/pricing"}>
          <a className="text-black py-2 tracking-wide lg:tracking-wider" data-testid="header-pricing-link-sp">
            料金プラン
          </a>
        </Link>
        <Link href={"/portfolio"}>
          <a className="text-black py-2 tracking-wide lg:tracking-wider" data-testid="header-portfolio-link-sp">
            レポートギャラリー
          </a>
        </Link>
        <Link href={"https://next-report.jp/"}>
          <a className="text-black py-2 tracking-wide lg:tracking-wider" target="_blank" data-testid="header-blog-link-sp">
            ブログ
          </a>
        </Link>
        <Link href={"/contact"}>
          <a className="text-black py-2 tracking-wide lg:tracking-wider" data-testid="header-contact-link-sp">
            お問い合わせ
          </a>
        </Link>
        <Link href={"/trial"}>
          <a className="text-black py-2 tracking-wide lg:tracking-wider" data-testid="header-trial-link-sp">
            無料で始める
          </a>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <div className="fixed left-5 right-5 z-10 rounded-full bg-white border border-black mt-10 lg:fixed lg:left-20 lg:right-20 lg:mt-20">
        <Toolbar className="flex flex-row-reverse justify-between lg:flex lg:flex-row lg:justify-between lg:py-4">
          <IconButton
            className="text-purple-800 p-0"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuRoundedIcon sx={{ width: 48, height: 40 }} />
          </IconButton>
          <div className="relative w-40 h-6 lg:w-64 lg:h-10">
            <Link href={"/"}>
              <a>
                <Image src="/images/header_logo.svg" alt="MAGONOTE" layout="fill" />
              </a>
            </Link>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href={"/portfolio"}>
              <a className="text-black font-semibold px-2 tracking-wide lg:tracking-wider" data-testid="header-portfolio-link">
                レポートギャラリー
              </a>
            </Link>
            <Link href={"https://next-report.jp/"}>
              <a
                className="text-black font-semibold px-2 tracking-wide lg:tracking-wider"
                target="_blank"
                data-testid="header-blog-link"
              >
                ブログ
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="text-black font-semibold px-2 tracking-wide lg:tracking-wider" data-testid="header-contact-link">
                お問い合わせ
              </a>
            </Link>
            <Link href={"/trial"}>
              <a
                className="bg-purple-800 text-white hover:bg-white hover:text-purple-800 hover:border-solid hover:border hover:border-purple-800 font-bold py-2 px-12 rounded-full mb-10 ml-4 w-48 tracking-wide lg:tracking-wider"
                data-testid="header-trial-link"
              >
                無料で始める
              </a>
            </Link>
          </Box>
        </Toolbar>
        <Box component="nav" className="container">
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
      </div>
    </header>
  );
}

export default Header;
