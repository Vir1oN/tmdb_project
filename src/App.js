import './App.css';
import React from 'react'
import {BaseLayout} from "./Layouts/BaseLayout";
import {Home} from "./Pages/Home/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import SearchResults from "./Components/SearchResults/SearchResults";

function App() {
    return (
        <BaseLayout>
            <Switch>
                <Route path='/search/movie/:id'>
                    <MovieDetails/>
                </Route>

                <Route path='/search/:str'>
                    <SearchResults/>
                </Route>

                <Route path='/movie/:id'>
                    <MovieDetails/>
                </Route>

                <Route path='/:num'>
                    <Home/>
                </Route>

                <Route path='/'>
                    <Redirect to="/1"/>
                </Route>

                <Route>
                    <h1>404 - Page not found</h1>
                </Route>
            </Switch>
        </BaseLayout>
    );
}

export default App;
