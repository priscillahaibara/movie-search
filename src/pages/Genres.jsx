import { useParams } from "react-router-dom";

function Genres() {
    const { genreName } = useParams();
  return <h1>
    {genreName}
  </h1>;
}

export default Genres;
