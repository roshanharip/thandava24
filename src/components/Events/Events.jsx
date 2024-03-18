import "./Events.scss";
import img1 from "../../assets/Events/1.png";
import img2 from "../../assets/Events/2.png";
import img3 from "../../assets/Events/3.png";
import img4 from "../../assets/Events/4.png";
import img5 from "../../assets/Events/5.png";
import img6 from "../../assets/Events/6.png";
import img10 from "../../assets/Events/10.png";
import img11 from "../../assets/Events/11.png";
import img12 from "../../assets/Events/12.png";
import img13 from "../../assets/Events/13.png";
import img14 from "../../assets/Events/14.png";
import img15 from "../../assets/Events/15.png";

const Events = () => {
	return (
		<div className="events">
			<div className="events_heading">
				<h3>Events</h3>
			</div>
			<div className="events_cards-container">
				<div className="cards-container">
					<div className="cards">
						<a href="#">
							<img src={img1} alt="img1" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img2} alt="img2" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img3} alt="img3" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img4} alt="img4" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img5} alt="img5" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img6} alt="img6" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img10} alt="img10" />
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img11} alt="img11" />
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img12} alt="img12" />
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img13} alt="img13" />
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img14} alt="img14" />
						</a>
					</div>
					<div className="cards">
						<a href="#">
							<img src={img15} alt="img15" />
						</a>
					</div>
				</div>
			</div>
			<img src="../../assets/Events/11.png" alt="" />
		</div>
	);
};

export default Events;
