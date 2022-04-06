import { Box, Grid, Skeleton } from "@mui/material";

const Loading = () => {
    return (
        <Grid container wrap="nowrap">
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                <Skeleton variant="rectangular" width={210} height={118} />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                <Skeleton variant="rectangular" width={210} height={118} />
            </Box>
            <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                <Skeleton variant="rectangular" width={210} height={118} />
            </Box>
        </Grid>
    );
};

export default Loading;
