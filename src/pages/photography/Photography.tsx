import "./Photography.css";
import albums, { getPreview } from "../../util/albums";
import { Link } from "react-router-dom";
const Photography = () => {
  return (
    <main>
      <h1>Photography</h1>

      <div className="gallery">
        {albums.map((album, index) => (
          <Link
            to={`/photography/${album.slug}`}
            key={index}
            className="preview"
          >
            <div className="preview-header">
              <h2>{album.name}</h2>
              <p>Click to see more</p>
            </div>
            {/* <Link to={`/photography/${album.slug}`}> */}
            <img
              loading={index == 0 ? "eager" : "lazy"}
              src={getPreview(album.cover)}
              alt=""
            />
            {/* </Link> */}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Photography;
