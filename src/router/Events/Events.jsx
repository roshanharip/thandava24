import "./Events.scss";
import img1 from "../../assets/Poster/1.png";
import img2 from "../../assets/Poster/2.png";
import img3 from "../../assets/Poster/3.png";
import img4 from "../../assets/Poster/4.png";
import img5 from "../../assets/Poster/5.png";
import img6 from "../../assets/Poster/6.png";
import img10 from "../../assets/Poster/7.png";
import img11 from "../../assets/Poster/8.png";
import img12 from "../../assets/Poster/9.png";
import img13 from "../../assets/Poster/10.png";
import img14 from "../../assets/Poster/11.png";
import img15 from "../../assets/Poster/12.png";

const Events = () => {
	return (
		<div className="events">
			<div className="events_heading">
				<h3>Events</h3>
			</div>
			<div className="events_cards-container">
				<div className="cards-container">
					<div className="cards">
						<a href="https://forms.gle/9DvsWwKGNSiwepvG6">
							<img src={img1} alt="img1" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/uFJscCXd4ZpeyA4v9">
							<img src={img2} alt="img2" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="ttps://forms.gle/H8PBmk3xjMLv3ZWy7">
							<img src={img3} alt="img3" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/ZcVdEj5kJfM5ZeAn9">
							<img src={img4} alt="img4" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/ZUBHDwfvLv8QguN86">
							<img src={img5} alt="img5" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/2Jjv6SdiTw4AsnBd8">
							<img src={img6} alt="img6" />{" "}
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/gHdfBJC6jx84fEUz6">
							<img src={img10} alt="img10" />
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/6QuLCedu4HZsYhLs7">
							<img src={img11} alt="img11" />
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/Q59Eo8TdNP95Ggg47">
							<img src={img12} alt="img12" />
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/bKxb23RWcJV5mFEz5">
							<img src={img13} alt="img13" />
						</a>
					</div>
					<div className="cards">
						<a href="https://forms.gle/FKf43oX5tTUHHhs57">
							<img src={img14} alt="img14" />
						</a>
					</div>  
					<div className="cards">
						<a href="https://forms.gle/SLchi4BFNUvFXNxQ9">
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