import './App.css';
import {MovieService} from "./Services";
import React, {useEffect} from 'react'
import {BaseLayout} from "./Layouts/BaseLayout";
import {Home} from "./Pages/Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function App() {
    return (
        <BaseLayout>
            <Switch>
                <Route path='/movie/:id'>
                    <MovieDetails>

                    </MovieDetails>
                </Route>

                <Route path='/'>
                    <Home>
                    </Home>
                </Route>
            </Switch>
        </BaseLayout>
    );
}

export default App;
