import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed h-screen w-[226px] rounded-r-[45px] border-4 bg-gray-100 py-8">
      <NavLink to="/" className="mb-16 flex items-center justify-center gap-2">
        <img src="/tv.png" alt="tvIcon" />
        <h2 className="text-[24px] font-bold">MovieBox</h2>
      </NavLink>
      <nav className="mb-8">
        <ul>
          <NavLink to="/">
            <li className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 pl-12 text-gray-800 hover:bg-gray-200">
              <img src="/Home.png" alt="homeIcon" className="opacity-70" />
              <span className="text-[20px] font-semibold">Home</span>
            </li>
          </NavLink>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 pl-12 text-gray-800 hover:bg-gray-200">
            <img
              src="/Movie Projector.png"
              alt="movieIcon"
              className="opacity-70"
            />
            <span className="text-[20px] font-semibold">Movies</span>
          </li>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 pl-12 text-gray-800 hover:bg-gray-200">
            <img src="/TV Show.png" alt="tvIcon" className="opacity-70" />
            <span className="text-[20px] font-semibold">TV Series</span>
          </li>
          <li className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 pl-12 text-gray-800 hover:bg-gray-200">
            <img
              src="/Calendar.png"
              alt="upcomingIcon"
              className="opacity-70"
            />
            <span className="text-[20px] font-semibold">Upcoming</span>
          </li>
        </ul>
      </nav>
      <div className="mx-auto mb-4 mt-8 w-3/4 rounded-[20px] border-2 border-[#BE123CB2] bg-pink-100 px-2 pb-4 pt-8 text-center">
        <p className="mb-2 text-[15px] font-semibold">
          Play movie quizzes and earn free tickets
        </p>
        <p className="mb-2 text-[12px] font-medium opacity-70">
          50k People are playing now
        </p>
        <button className="mt-2 rounded-lg bg-[#BE123C33] px-4 py-2 text-[#BE123C]">
          Start playing
        </button>
      </div>

      <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-2 py-2 text-lg text-gray-800 hover:bg-gray-200">
        <img src="/Logout.png" alt="logoutIcon" />
        <span className="text-[20px] font-semibold">Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
