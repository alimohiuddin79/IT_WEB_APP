import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className="">
                <Routes>
                    <Route path="/" element={<LandingPage />}/>
                </Routes>
            </main>
        </BrowserRouter>
        
    )
}

export default App;