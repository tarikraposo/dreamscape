import "../azuremdiaplayer.min.css";
import background from "../assets/images/bg_intro.jpg";
import "../assets/files/background_growth.mp4";
import "../style.css";
const Home = () => {
  return (
    <div className="flex flex-col gap-20">
      <img src={background} alt="background" className="w-full h-full" />
      <div className="w-full h-full ab_main_list" view-state="true">
        <div className="tab_inner">
          <video
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
            className="azuremdiaplayer.min.css"
          >
            <source
              src={require("../assets/files/background_legend.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full h-full ab_main_list" view-state="true">
        <div className="tab_inner">
          <video
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
            className="azuremdiaplayer.min.css"
          >
            <source
              src={require("../assets/files/background_legend1.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-full h-full ab_main_list" view-state="true">
        <div className="tab_inner">
          <video
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
            className="azuremdiaplayer.min.css"
          >
            <source
              src={require("../assets/files/background_growth.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="w-full h-full ab_main_list" view-state="true">
        <div className="tab_inner">
          <video
            width="100%"
            height="100%"
            loop
            playsInline
            autoPlay
            muted
            className="azuremdiaplayer.min.css"
          >
            <source
              src={require("../assets/files/background_job.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
