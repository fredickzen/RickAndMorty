
import { ApiEpisode } from "@api/rickandmorty/ApiEpisode";
import { Grid } from "@mui/material";
import { EpisodeChangePageAction, EpisodeInitAction } from "@redux/actions/EpisodeAction";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";
import EpisodeItem from "./EpisodeItem";
import Loading from "../../controls/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import EpisodeDetail from "./EpisodeDetail";

const Episodes = () => {
    const { list } = useAppSelector((store) => store.episodes);
    const distpatch = useAppDispatch();


    const LoadInitData = () => {
        ApiEpisode.GetAll().then((resp) => {
            if (resp.status === 200) {
                distpatch(EpisodeInitAction(resp.data));
            }
        });
    };

    const ChangePage = (url: string | null) => {
        if (url !== null) {
            ApiEpisode.GetPage(url).then((resp) => {
                if (resp.status === 200) {
                    distpatch(EpisodeChangePageAction(resp.data));
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
            >
                <Grid container m={5} >
                    {!!list &&
                        list.results &&
                        list.results.map((c) => <EpisodeItem key={c.id} {...c} />)}

                </Grid>
            </InfiniteScroll>
            <EpisodeDetail/>
        </>
    );
};

export default Episodes;
