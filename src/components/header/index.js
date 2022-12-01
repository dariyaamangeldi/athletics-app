import { useContext } from "react";
import { DefaultContext } from "../../Contexts";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";


const swLinks = [
  {
     url: "https://www.youtube.com",
     id:1,
     component: <YoutubeLogoSVG />,
    },
  {
    url: "https://www.facebook.com",
    id:2,
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com",
    id:3,
    component: <InstagramLogoSVG />,
  },

];

export const Header = () => {
  const { fan } = useContext(DefaultContext);
  return (
    <header>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.id}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.id}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>
      <div className="search-layout">
        <IconSearchSVG className="search-icon" />
        <input placeholder="Search" type="text" />
        <div style={{ color: "white", paddingTop: "1rem", fontSize: "17px" }}>
          I am fan of: {fan}
        </div>
      </div>
    </header>
  );
};
