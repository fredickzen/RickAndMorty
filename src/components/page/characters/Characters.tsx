import { ApiCharacter } from "@api/rickandmorty/ApiCharacter";
import { Grid } from "@mui/material";
import { CharacterChangePageAction, CharacterInitAction } from "@redux/actions/CharacterAction";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";
import CharactersItem from "./CharactersItem";
import Loading from "../../controls/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import CharacterDetail from "./CharacterDetail";

const Characters = () => {
    const { list } = useAppSelector((store) => store.characters);
    const distpatch = useAppDispatch();


    const LoadInitData = () => {
        ApiCharacter.GetAll().then((resp) => {
            if (resp.status === 200) {
                distpatch(CharacterInitAction(resp.data));
            }
        });
    };

    const ChangePage = (url: string | null) => {
        if (url !== null) {
            ApiCharacter.GetPage(url).then((resp) => {
                if (resp.status === 200) {
                    distpatch(CharacterChangePageAction(resp.data));
                }
            });
        }

    };

    useEffect(() => {
        if(!list?.results)
        {
            LoadInitData();
            window.scrollTo({top: 0});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!list) return <Loading />;

    return (
        <>
            <InfiniteScroll
                dataLength={list.results.length}
                next={() => ChangePage(list.info.next)}
                hasMore={!!list.info.next}
                loader={<Loading />}
                style={{ width: "100%" }}
            >
                <Grid container m={5} >
                    {!!list &&
                        list.results &&
                        list.results.map((c) => <CharactersItem key={c.id} {...c} />)}

                </Grid>
            </InfiniteScroll>
            <CharacterDetail/>
        </>
    );
};

export default Characters;
