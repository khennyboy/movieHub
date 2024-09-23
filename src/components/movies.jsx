import { NavLink } from "react-router-dom";

const Movies = () => {
  return (
    <div className="mb-16 px-16">
      <div className="mb-8 flex justify-between">
        <h3 className="text-[36px] font-bold">Featured Movie</h3>
        <p className="flex items-center opacity-70">
          <span className="cursor-pointer text-lg">See More </span>
          <img
            src="Chevron right.png"
            alt="nextIcon"
            className="align-middle"
          />
        </p>
      </div>
      <div className="grid grid-cols-4 justify-between gap-16">
        {Array.from({ length: 10 }, (_, index) => (
          <NavLink to="name/23" key={index}>
            <img
              src="Poster (1).png"
              alt="movieImage"
              className="mb-2 w-full object-cover"
            />
            <p className="mb-3">USA, 2005</p>
            <h3 className="mb-3 text-[18px] font-bold">Batman Begins</h3>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="IDMB.png" alt="Imdb" />
                <span>82.0 / 100</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="tomato.png" alt="tomatoIcon" />
                <span>70%</span>
              </div>
            </div>
            <p className="opacity-70">Action, Adventure</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Movies;
