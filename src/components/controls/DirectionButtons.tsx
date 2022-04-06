import { Button } from "@mui/material";
import { Box } from "@mui/system";

type TDirectionButons = {
    next: string | null;
    prev: string | null;
    OnClick: (url: string) => void;
};

const DirectionButons = (props: TDirectionButons) => {
    const handlerOnClick = (url: string | null) => {
        if (!!url) {
            props.OnClick(url);
        }
    };
    return (
        <Box>
            <Button onClick={() => handlerOnClick(props.prev)} disabled={!props.prev}>
                Anterior
            </Button>
            <Button onClick={() => handlerOnClick(props.next)} disabled={!props.next}>
                Siguiente
            </Button>
        </Box>
    );
};

export default DirectionButons;
