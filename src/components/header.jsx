import Menu from "./menu";
import Nav from "./nav";
import Search from "./search";

const Header = () => {
  return (
    <div className="mb-16 bg-[url('/Poster.png')] bg-cover bg-center px-16 py-[12rem] text-white">
      <div className="fixed left-16 right-16 top-8 flex items-center justify-between">
        <Nav />
        <Search />
        <Menu />
      </div>
      <div className="w-full max-w-[410px]">
        <p className="mb-4 text-6xl font-bold">
          John Wick 3 : <br /> Parabellum
        </p>
        <div className="mb-4 flex w-3/4 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="IDMB.png" alt="Imdb" />
            <span>82.0 / 100</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="tomato.png" alt="tomatoIcon" />
            <span>70%</span>
          </div>
        </div>
        <p className="font-['DM Sans'] mb-4 text-lg">
          John Wick is on the run after killing a member of the international
          assassins&mdash; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
        </p>
        <button className="flex items-center gap-2 rounded bg-[#BE123C] px-4 py-3 text-white transition-colors duration-300 hover:bg-[#9F0F34]">
          <img src="/Play.png" alt="playIcon" />
          <span>WATCH TRAILER</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
