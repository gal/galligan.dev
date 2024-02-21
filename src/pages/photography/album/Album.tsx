import { Link, useParams } from "react-router-dom";
import { getAlbum, getHd, getRegular } from "../../../util/albums";

import leftArrow from "../../../assets/leftarrow.svg";
import "../Photography.css";

const Album = () => {
  const albumName = useParams().album;
  const album = getAlbum(albumName ?? "");

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://blog.galligan.dev">Blog</a>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="header">
          <Link to="/photography">
            <img src={leftArrow} alt="" />
          </Link>
          <h1>{album?.name}</h1>
          <div></div>
        </div>

        <div>
          {album?.photos?.map((photo) => (
            <div className="albumImg">
              <img className="image" src={getRegular(photo)} alt="" />
              <a href={getHd(photo)} className="viewFull">
                View full image
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Album;
