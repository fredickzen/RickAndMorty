import { Box, Modal, Typography } from "@mui/material";
import { CharacterSelectAction } from "@redux/actions/CharacterAction";
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

const CharacterDetail = () => {

    const distpatch = useAppDispatch();

    const { selected } = useAppSelector(store => store.characters);


    const ClearSelected = () => {
        distpatch(CharacterSelectAction(null))
    }

    return <Modal
        open={!!selected}
        onClose={ClearSelected}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <img src={selected?.image} alt="Character" />
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {selected?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Especie: { selected?.species}
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary">
                Estado: {selected?.status}
            </Typography>
            <Typography display="block" variant="caption" color="text.secondary">
                Género: {selected?.gender}
            </Typography>
            {
                selected?.type &&
                <Typography display="block" variant="caption" color="text.secondary">
                Tipo: {selected?.type}
            </Typography>
            }
            <Typography display="block" variant="caption" color="text.secondary">
                Origen: {selected?.origin.name}
            </Typography>
        </Box>
    </Modal>
}


export default CharacterDetail;