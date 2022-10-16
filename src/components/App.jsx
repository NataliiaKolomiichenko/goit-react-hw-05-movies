import { lazy, Suspense } from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import Container from "styles/Container";
import Header from './Header';
import styled from "styled-components"

const StyleLink = styled(NavLink)`
    display: inline-flex;
    width: 100px;
    padding: 20px;
    color: black;
    font-weight: 700;
    text-decoration: none;

    &.active {
        color: orange;
    }
`;

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const MovieCredits = lazy(() => import('../components/MovieCredits'))
const MovieReviews = lazy(() => import('../components/MovieReviews'))

const App = () => {
  return <>
    <Container>
      <Header>
        <nav>
            <StyleLink to="/">Home</StyleLink>
            <StyleLink to="/movies">Movies</StyleLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCredits />} />
              <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Container>
  </>
};


export default App;