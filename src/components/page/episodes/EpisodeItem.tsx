import { IEpisode } from "@interfaces/models/IEpisode";
import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { EpisodeSelectAction } from "@redux/actions/EpisodeAction";
import { useAppDispatch } from "@redux/hooks";

const EpisodeItem = (episode: IEpisode) => {

    const distpatch = useAppDispatch();

    const SelectEpisode = () => {
        distpatch(EpisodeSelectAction(episode));
    }


    return (
        <Grid container item xs={12} sm={6} md={4} lg={3}>

            <Card sx={{ width: 300, marginRight: 0.5, my: 5 }}>
                <CardActionArea onClick={SelectEpisode}>

                    <CardContent sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {episode.name}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default EpisodeItem;
