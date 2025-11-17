import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RoomList from "./components/RoomList";
import RoomDetail from "./components/RoomDetail";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-slate-950">
            <Navbar />
            <div className="pt-16">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <RoomList />
                                <Facilities />
                                <About />
                            </>
                        }
                    />
                    <Route path="/room/:id" element={<RoomDetail />} />
                    <Route path="/booking" element={<BookingForm />} />
                    <Route path="/booking-summary" element={<BookingSummary />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
