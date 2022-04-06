
import { ApiLocation } from "@api/rickandmorty/ApiLocation";
import { Grid } from "@mui/material";
import { LocationChangePageAction, LocationInitAction } from "@redux/actions/LocationAction";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";
import LocationItem from "./LocationItem";
import Loading from "../../controls/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import LocationDetail from "./LocationDetail";

const Locations = () => {
    const { list } = useAppSelector((store) => store.location);
    const distpatch = useAppDispatch();


    const LoadInitData = () => {
        ApiLocation.GetAll().then((resp) => {
            if (resp.status === 200) {
                distpatch(LocationInitAction(resp.data));
            }
        });
    };

    const ChangePage = (url: string | null) => {
        if (url !== null) {
            ApiLocation.GetPage(url).then((resp) => {
                if (resp.status === 200) {
                    distpatch(LocationChangePageAction(resp.data));
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
                        list.results.map((c) => <LocationItem key={c.id} {...c} />)}

                </Grid>
            </InfiniteScroll>
            <LocationDetail/>
        </>
    );
};

export default Locations;
