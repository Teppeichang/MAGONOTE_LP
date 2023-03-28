import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Toolbar from "@mui/material/Toolbar";

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-end">
        <CloseRoundedIcon
          className="text-purple-800 p-0"
          aria-label="close drawer"
          onClick={handleDrawerToggle}
          sx={{ textAlign: "right", mt: 6, mr: 3, width: 48, height: 40 }}
        />
      </div>
      <div className="flex flex-col justify-center items-left mt-4 mx-auto">
        <Link href={"/portfolio"}>
          <a
            className="font-mPlus2c text-black font-bold my-6 tracking-wide lg:tracking-wider hover:text-purple-800"
            data-testid="header-portfolio-link-sp"
          >
            レポートギャラリー
          </a>
        </Link>
        <Link href={"https://next-report.jp/"}>
          <a
            className="font-mPlus2c text-black font-bold my-6 tracking-wide lg:tracking-wider hover:text-purple-800"
            target="_blank"
            data-testid="header-blog-link-sp"
          >
            ブログ
          </a>
        </Link>
        <Link href={"/contact"}>
          <a
            className="font-mPlus2c text-black font-bold my-6 tracking-wide lg:tracking-wider hover:text-purple-800"
            data-testid="header-contact-link-sp"
          >
            お問い合わせ
          </a>
        </Link>
        <Link href={"/trial"}>
          <button
            className="font-mPlus2c bg-purple-800 border-solid border border-purple-800 text-white transform active:bg-white active:text-purple-800 active:border-solid active:border active:border-purple-800 active:scale-90 transition-transform font-bold my-6 py-2 rounded-full  w-44 tracking-wide lg:tracking-wider"
            data-testid="header-trial-link"
          >
            無料で始める
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center mt-20">
        <Link href={"/"}>
          <Image
            src="/images/header_logo.svg"
            alt="MAGONOTE"
            width={262}
            height={40}
            quality={90}
          />
        </Link>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <div className="fixed left-5 right-5 z-10 rounded-full bg-white border border-black mt-10 lg:left-20 lg:right-20 lg:mt-10">
        <Toolbar className="flex flex-row-reverse justify-between lg:flex lg:flex-row lg:justify-between lg:py-4">
          <IconButton
            className="text-purple-800 p-0"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuRoundedIcon sx={{ width: 48, height: 40 }} className="text-purple-800 p-0" />
          </IconButton>
          <div className="relative w-40 h-6 lg:w-64 lg:h-10">
            <Link href={"/"}>
              <a>
                <Image src="/images/header_logo.svg" alt="MAGONOTE" layout="fill" />
              </a>
            </Link>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href={"/"}>
              <a
                className="font-mPlus2c text-black font-semibold px-2 tracking-wide lg:tracking-wider hover:text-purple-800"
                data-testid="header-home-link"
              >
                ホーム
              </a>
            </Link>
            <Link href={"/portfolio"}>
              <a
                className="font-mPlus2c text-black font-semibold px-2 tracking-wide lg:tracking-wider hover:text-purple-800"
                data-testid="header-portfolio-link"
              >
                レポートギャラリー
              </a>
            </Link>
            <Link href={"https://next-report.jp/"}>
              <a
                className="font-mPlus2c text-black font-semibold px-2 tracking-wide lg:tracking-wider hover:text-purple-800"
                target="_blank"
                data-testid="header-blog-link"
              >
                ブログ
              </a>
            </Link>
            <Link href={"/contact"}>
              <a
                className="font-mPlus2c text-black font-semibold px-2 tracking-wide lg:tracking-wider hover:text-purple-800"
                data-testid="header-contact-link"
              >
                お問い合わせ
              </a>
            </Link>
            <Link href={"/trial"}>
              <button
                className="font-mPlus2c bg-purple-800 border border-purple-800 text-white transform active:bg-white active:text-purple-800 active:border active:border-purple-800 active:scale-90 transition-transform font-bold py-2 rounded-full ml-4 w-48 tracking-wide lg:tracking-wider"
                data-testid="header-trial-link"
              >
                無料で始める
              </button>
            </Link>
          </Box>
        </Toolbar>
        <Box component="nav" className="container">
          <Drawer
            container={container}
            variant="temporary"
            anchor="top"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
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
