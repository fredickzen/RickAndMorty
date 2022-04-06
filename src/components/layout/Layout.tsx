import HideOnScroll from "@controls/HideOnScroll";
import ScrollTop from "@controls/ScrollTop";
import { Fab, Toolbar } from "@mui/material";
import Navbar from "./partial/Nabvar";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Layout = ({ children }: any) => {
    return (
        <>
            <Toolbar id="back-to-top-anchor" />
            <HideOnScroll >
                <Navbar />
            </HideOnScroll>
            {children}

            <ScrollTop >
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
};

export default Layout;
