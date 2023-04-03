import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery } from "react-responsive";

function Header(props) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const { window } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

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
        <Link href={"/"}>
          <a
            className="font-mPlus2c text-black font-bold my-6 tracking-wide lg:tracking-wider hover:text-purple-800"
            data-testid="header-portfolio-link-sp"
          >
            ホーム
          </a>
        </Link>
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
            rel="noopener noreferrer"
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
            className="font-mPlus2c bg-purple-800 border-solid border border-purple-800 text-white transform focus:bg-white focus:text-purple-800 focus:border-solid focus:border focus:border-purple-800 focus:scale-95 focus:delay-75 hover:scale-105 transition-transform font-bold my-6 py-2 rounded-full w-44 tracking-wide lg:tracking-wider"
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

  return (
    <header>
      {isDesktopOrLaptop && (
        <div className="fixed left-5 right-5 z-10 rounded-full bg-white border border-black mt-10 lg:left-20 lg:right-20 lg:mt-10">
          <Toolbar className="flex flex-row-reverse justify-between lg:flex lg:flex-row lg:justify-between lg:py-4">
            <div className="relative w-40 h-6 lg:w-52 lg:h-10">
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
                  rel="noopener noreferrer"
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
                  className="font-mPlus2c bg-purple-800 border border-purple-800 text-white transform focus:bg-white focus:text-purple-800 focus:border focus:border-purple-800 focus:scale-95 focus:delay-75 hover:scale-105 transition-transform font-bold py-2 rounded-full ml-4 lg:w-40 tracking-wide lg:tracking-wider"
                  data-testid="header-trial-link"
                >
                  無料で始める
                </button>
              </Link>
            </Box>
          </Toolbar>
        </div>
      )}

      {isTablet && !isMobile && (
        <div className="fixed left-5 right-5 z-10 rounded-full bg-white border border-black mt-10">
          <Toolbar className="flex flex-row justify-between py-4">
            <div className="relative w-40 h-6">
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
                  rel="noopener noreferrer"
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
                  className="font-mPlus2c bg-purple-800 border border-purple-800 text-white transform focus:bg-white focus:text-purple-800 focus:border focus:border-purple-800 focus:scale-95 focus:delay-75 hover:scale-105 transition-transform font-bold py-2 px-4 rounded-full ml-2 tracking-wide"
                  data-testid="header-trial-link"
                >
                  無料で始める
                </button>
              </Link>
            </Box>
          </Toolbar>
        </div>
      )}

      {isMobile && (
        <div className="fixed left-5 right-5 z-10 rounded-full bg-white border border-black mt-10">
          <Toolbar className="flex flex-row-reverse justify-between">
            <IconButton
              className="text-purple-800 p-0"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuRoundedIcon sx={{ width: 48, height: 40 }} className="text-purple-800 p-0" />
            </IconButton>
            <div className="relative w-40 h-6">
              <Link href={"/"}>
                <a>
                  <Image src="/images/header_logo.svg" alt="MAGONOTE" layout="fill" />
                </a>
              </Link>
            </div>
          </Toolbar>
          <Box component="nav" className="container">
            <Drawer
              container={container}
              variant="temporary"
              anchor="top"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
              sx={{
                "& .MuiDrawer-paper": { boxSizing: "border-box" },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </div>
      )}
    </header>
  );
}

export default Header;
