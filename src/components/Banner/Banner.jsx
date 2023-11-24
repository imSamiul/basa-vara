import BannerImage from "../../assets/banner.jpg";
import SearchBox from "./SearchBox/SearchBox";
import "./banner.scss";
function Banner() {
  return (
    <div className="banner relative md:flex md:justify-center md:items-center">
      <div className="relative -top-5 background-image">
        <img
          src={BannerImage}
          className="object-cover h-screen md:h-auto"
          alt="banner-background-image"
        />
      </div>

      <div className="bannerContainer absolute top-10 md:flex md:flex-col md:items-center w-full md:justify-center md:h-full md:top-0">
        <div className="bannerContent mx-3 p-3 text-center">
          <h1 className="heading text-[26px] text-[#0E0E46] font-bold leading-9 mb-5 font-['Plus_Jakarta_Sans'] md:text-6xl">
            Find Your Best Dream House for
            <span className="text-[#6C60FE]"> Rent...</span>
          </h1>
          <p className="banner-text font-medium font-['Plus_Jakarta_Sans']">
            Properties for rent in in your location. We have more than 3000+
            listings for you to choose
          </p>
        </div>
        <SearchBox />
      </div>
    </div>
  );
}
export default Banner;
