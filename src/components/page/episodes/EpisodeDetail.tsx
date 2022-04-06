import { Box, Modal, Typography } from "@mui/material";
import { EpisodeSelectAction } from "@redux/actions/EpisodeAction";
import { useAppDispatch, useAppSelector } from "@redux/hooks";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const EpisodeDetail = () => {

    const distpatch = useAppDispatch();

    const { selected } = useAppSelector(store => store.episodes);


    const ClearSelected = () => {
        distpatch(EpisodeSelectAction(null))
    }

    return <Modal
        open={!!selected}
        onClose={ClearSelected}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {selected?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Episode: { selected?.episode}
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary">
                Salida al aire: {selected?.air_date}
            </Typography>
        </Box>
    </Modal>
}


export default EpisodeDetail;