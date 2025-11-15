import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <Navbar />
            <div className="pt-20">
                <Hero />
            </div>
        </>
    );
}

export default App;
