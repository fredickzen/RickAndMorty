import { Box, Modal, Typography } from "@mui/material";
import { LocationSelectAction } from "@redux/actions/LocationAction";
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

const LocationDetail = () => {

    const distpatch = useAppDispatch();

    const { selected } = useAppSelector(store => store.location);


    const ClearSelected = () => {
        distpatch(LocationSelectAction(null))
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
                Estado: { selected?.status}
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary">
                Dimensión: {selected?.dimension}
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary">
                Tipo: {selected?.type}
            </Typography>
        </Box>
    </Modal>
}


export default LocationDetail;