import { useState } from "react"




export default function Booking ({setBooked}){

    const [selectedService, setSelectedService] = useState("")
    const [fullName, setFullName]= useState("")
    const [phone, setPhone]= useState("")
    const [email, setEmail] = useState("")
    const [specialRequest, setSpecialRequest] = useState("")
    const [date, setDate] = useState("")
    const [selesctedTime, setSelectedTime] = useState("")
    const [bookingSuccessful, setBookingSuccessful] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);


    const handlesubmit = e =>{
        e.preventDefault()
        if (!fullName || !phone || !selectedService || !date || !selesctedTime) {
            alert("Please fill in all required fields.");
            return;
        }
        if (!/^\d+$/.test(phone)) {
            alert("Phone number must contain numbers only.");
            return;
        }
        const selectedDate = new Date(date);
        const day = selectedDate.getDay();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (day === 0) {
            alert("We are closed on Sundays.");
            return;
        }

        if (selectedDate < today) {
            alert("You cannot book a past date.");
            return;
        }
        const newBooking = {
            id: Date.now(),
            fullName: fullName,
            phone:phone,
            email:email,
            service:selectedService,
            date:date,
            time:selesctedTime,
            notes:specialRequest,
        };
        const bookingRecord = JSON.parse(localStorage.getItem("bookings")) || [];
        const updatedBookings = [...bookingRecord, newBooking];
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));

        setCurrentBooking(newBooking);
        setBookingSuccessful(true);

        setFullName("")
        setDate("")
        setPhone("")
        setEmail("")
        setSelectedService("")
        setSelectedTime("")
        setSpecialRequest("")
        console.log(updatedBookings)
    }
    

return(
    <div className="booking">
        <button className="arrow" onClick={ e => setBooked(false)}>⬅️</button>
        <h2>Book Your Appointment</h2>
        <form action="" onSubmit={handlesubmit}>
            <div className="personalinfo">
                <h3>Personal Information</h3>
                <input type="text" placeholder="Full Name..." required onChange={e => setFullName(e.target.value)} value={fullName}/>
                <input type="text" placeholder="Phone Number..." required onChange={e => setPhone(e.target.value)} value={phone}/>
                <input type="email" placeholder="Email Address..." onChange={e => setEmail(e.target.value)} value={email} />
                <textarea name="special" placeholder="Special Notes or allergies..."onChange={e => setSpecialRequest(e.target.value)} value={specialRequest}></textarea>
            </div>
            <div className="serviceinfo">
                <label htmlFor="services">Select Service
                    <select name="services" id="services" onChange={e => setSelectedService(e.target.value)} value={selectedService} required>
                        <option value="Haircut">Haircut</option>
                        <option value="Braiding">Braiding</option>
                        <option value="Treatment">Hair Treatment</option>
                        <option value="Washing">Washing And Drying</option>
                        <option value="Dyeing">Dyeing</option>
                    </select>
                </label>
                
                <label htmlFor="date">Select Date
                    <input type="date" required onChange={e => setDate(e.target.value)} value={date}/>
                </label>
                <label htmlFor="timeinput">Pick Required time
                    <select name="timeinput" id="timeinput" onChange={e => setSelectedTime(e.target.value)} required value={selesctedTime}>
                        <option value="9:00am">9:00am</option>
                        <option value="10:00am">10:00am</option>
                        <option value="11:00am">11:00am</option>
                        <option value="12:00pm">12:00pm</option>
                        <option value="1:00pm">1:00pm</option>
                        <option value="2:00pm">2:00pm</option>
                        <option value="3:00pm">3:00pm</option>
                        <option value="4:00pm">4:00pm</option>
                </select>
                </label>
                
                <p>Note: <i>We do not open on Sundays</i></p>
                <button type="submit">Book Appointment</button>
            </div>
        </form>

        {bookingSuccessful && (
        <div className="modal-overlay">
            <div className="modal">
            <h2>Booking Confirmed!</h2>

            <p><strong>Name:</strong> {currentBooking.fullName}</p>
            <p><strong>Service:</strong> {currentBooking.service}</p>
            <p><strong>Date:</strong> {currentBooking.date}</p>
            <p><strong>Time:</strong> {currentBooking.time}</p>
            <p><strong>Phone:</strong> {currentBooking.phone}</p>
            <p><i>Thanks for your patronage</i></p>

            <button onClick={() => {
                setBookingSuccessful(false);
                setBooked(false);
            }}>
                Close
            </button>
            </div>
        </div>
)}
    </div>
)

}