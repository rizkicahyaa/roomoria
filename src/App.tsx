import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoomList from "./components/RoomList";

function App() {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Hero />
                <RoomList />
            </div>
        </>
    );
}

export default App;
