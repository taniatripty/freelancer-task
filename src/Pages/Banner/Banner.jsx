import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'
import freelancer1 from '../../assets/freelancer.png'
import digital from '../../assets/digital marketing.png'
import videoeditor from '../../assets/video editting.png'
const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="custom-carousel"
      >
        <div>
          <img src={freelancer1} alt="Slide 1" />
          <p className="legend"> web developer is responsible for creating user-friendly, responsive, and efficient digital experiences. They ensure websites function smoothly across different devices and browsers.</p>
         
        </div>
        <div>
          <img src={digital} alt="Slide 2" />
          <p className="legend">Digital marketing is the promotion of products or services using digital channels like social media, search engines, email, and websites. It includes SEO, content marketing, social media marketing, PPC advertising, and analytics. The goal is to reach the right audience, drive traffic, and convert leads into customers.</p>
          
        </div>
        <div>
          <img src={videoeditor} alt="Slide 3" />
          <p className="legend">Video editing involves trimming and enhancing clips to create engaging content using tools like Premiere Pro or CapCut. Technical writing is about creating clear, concise documentation like manuals or guides using tools like Word or Markdown. Both focus on clarity, structure, and audience understanding.</p>

        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
