import { Slide, useScrollTrigger } from "@mui/material";


interface Props {
    window?: () => Window;
    children: React.ReactElement;
  }

  
const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <div>
            {children}
            </div>
        </Slide>
    );
}
export default HideOnScroll;