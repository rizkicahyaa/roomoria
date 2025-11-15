import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoomList from "./components/RoomList";
import RoomDetail from "./components/RoomDetail";

function App() {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <RoomList />
                            </>
                        }
                    />
                    <Route path="/room/:id" element={<RoomDetail />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
