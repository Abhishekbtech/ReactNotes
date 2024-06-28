import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
