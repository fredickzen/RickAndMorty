import Characters from "@pages/characters/Characters";
import Episodes from "@pages/episodes/Episodes";
import Locations from "@pages/locations/Locations";
import Layout from "../components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const GlobalRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route element={<Characters />} path="/" />
                    <Route element={<Characters />} path="/characters" />
                    <Route element={<Episodes />} path="/episodes" />
                    <Route element={<Locations />} path="/locations" />
                </Routes>
            </Layout>
        </Router>
    );
};

export default GlobalRoutes;
