import { ICharacter } from "@interfaces/models/ICharacter";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { CharacterSelectAction } from "@redux/actions/CharacterAction";
import { useAppDispatch } from "@redux/hooks";

const CharactersItem = (character: ICharacter) => {
    
    const distpatch = useAppDispatch();

    const SelectCharacter = () => {
        distpatch(CharacterSelectAction(character));
    }


    return (
        <Grid container item xs={12} sm={6} md={4} lg={3}>

            <Card sx={{ width: 300, marginRight: 0.5, my: 5 }}>
                <CardActionArea onClick={SelectCharacter}>
                    <CardMedia
                        component="img"
                        style={{ width: 300, height: 300 }}
                        alt={character.name}
                        image={character.image}
                    />
                    <CardContent sx={{ pr: 2 }}>
                        <Typography gutterBottom variant="body2">
                            {character.name}
                        </Typography>
                        <Typography display="block" variant="caption" color="text.secondary">
                            {character.gender}
                        </Typography>
                        {/* <Typography display="block" variant="caption" color="text.secondary">
                            {character.species}
                        </Typography>
                        <Typography display="block" variant="caption" color="text.secondary">
                            {character.status}
                        </Typography> */}
                        {/* <Typography variant="caption" color="text.secondary">
      {`${item.views} • ${item.createdAt}`}
    </Typography> */}
                    </CardContent>

                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default CharactersItem;
