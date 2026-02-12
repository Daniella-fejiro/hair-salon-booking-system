



export default function Home({booked,setBooked}){

return(
    <div className="home">
        <div className="hero">
            <div className="herotext">
                <h1>Velora Hair Studio</h1>
                <h2>Beautiful Hair, Expert Care</h2>
                <p>At Velora Hair Studio, we specialize in modern hair styling, treatments, and protective styles tailored to you. Step in with confidence, leave feeling your best.</p>
                <button onClick={e => setBooked(!booked)} className="herobtn">Book Appointment</button>
            </div>
            <div className="heroimage"></div>
        </div>
            
        <div className="services">
            <h2>Our Services</h2>
            <p>Professional care designed to keep your hair healthy, stylish, and confident.</p>
            <div className="servicebox">
                <div className="servicecard">
                    <h3>Haircut & Styling</h3>
                    <p>Precision cuts and styling tailored to your face shape and lifestyle.</p>
                </div>
                <div className="servicecard">
                    <h3>Braiding & Protective Styles</h3>
                    <p>Neat, long-lasting protective styles designed for comfort and beauty.</p>
                </div>
                <div className="servicecard">
                    <h3>Hair Treatment & Care</h3>
                    <p>Deep conditioning and treatments to restore strength and shine.</p>
                </div>
            </div>
        </div>
        <div className="about">
            <h2>Why Choose Velora?</h2>
            <p>We believe great hair starts with great care. Our experienced stylists focus on quality, comfort, and attention to detail to ensure every client leaves satisfied.</p>
        </div>
        <div className="cta">
            <div className="ctaimage"></div>
            <div className="ctatext">
                <h2>Ready For Your Next Look?</h2>
                <button onClick={e => setBooked(!booked)} className="ctabtn">Book Your Appointment</button>
            </div>
        </div>
    </div>
) 

}