import { ILocation } from "@interfaces/models/ILocation";
import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { LocationSelectAction } from "@redux/actions/LocationAction";

import { useAppDispatch } from "@redux/hooks";

const LocationItem = (location: ILocation) => {

    const distpatch = useAppDispatch();

    const SelectLocation = () => {
        distpatch(LocationSelectAction(location));
    }


    return (
        <Grid container item xs={12} sm={6} md={4} lg={3}>

            <Card sx={{ width: 300, marginRight: 0.5, my: 5 }}>
                <CardActionArea onClick={SelectLocation}>

                    <CardContent sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {location.name}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default LocationItem;
