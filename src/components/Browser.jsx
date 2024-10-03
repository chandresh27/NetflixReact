import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovie";
import useTopRatedMovie from "./hooks/useTopRatedMovie";
import useUpcomingMovies from "./hooks/useUpcomingMovie";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import GptSearchPage from "./GptSearchPage";

const Browser = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.ShowGpt);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovie();
  return (
    <>
      <Header />
      {ShowGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </>
  );
};

export default Browser;
