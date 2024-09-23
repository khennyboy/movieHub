import Details from "../components/details";
import Sidebar from "../components/sidebar";

const Movie = () => {
  return (
    <div>
      <Sidebar />
      <main className="mb-16 ml-[226px] p-6">
        <Details />
        <div className="mb-8 flex justify-between">
          <div className="flex gap-4 text-[#404040]">
            <h2 className="text-[23px] font-bold">Top Gun: Maverick</h2>
            <p className="mt-2 text-gray-600">
              2022&emsp;PG-13&emsp;•&emsp;2h 10m&emsp;•&emsp;
            </p>
            <span className="rounded-[15px] border px-2 py-1 text-red-500 shadow-md">
              Action
            </span>
            <span className="rounded-[15px] border px-2 py-1 text-red-500 shadow-md">
              Drama
            </span>
          </div>
          <div>
            <span className="text-2xl text-yellow-400">★ 8.5</span>
            <span>| 350k</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <p className="mb-8 text-gray-800">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN&mdash;s elite graduates on a mission that demands
              the ultimate sacrifice from those chosen to fly it.
            </p>

            <div className="mb-8 space-y-8">
              <p>
                <span className="font-bold">Director:</span> Joseph Kosinski
              </p>
              <p>
                <span className="font-bold">Writers:</span> Jim Cash, Jack Epps
                Jr, Peter Craig
              </p>
              <p>
                <span className="font-bold">Stars:</span> Tom Cruise, Jennifer
                Connelly, Miles Teller
              </p>
            </div>

            <div className="flex overflow-hidden rounded-lg border-2 border-[#C7C7C7] bg-gray-200">
              <button className="rounded-r-[inherit] bg-[#BE123C] px-8 py-3 text-white">
                Top rated movie #65
              </button>
              <button className="relative flex-1 rounded-r-[inherit] text-start">
                <span className="pl-3 text-[20px] font-medium">
                  Awards 9 nominations
                </span>
                <img
                  src="/Expand Arrow.svg"
                  alt="expandIcon"
                  className="absolute bottom-0 right-4 top-0 my-auto"
                />
              </button>
            </div>
          </div>

          <div>
            <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-[#BE123C] px-4 py-2 text-white">
              <img src="/Two Tickets.png" alt="ticketIcon" />
              <span>See Showtimes</span>
            </button>
            <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#BE123C] bg-pink-100 px-4 py-2">
              <img src="/List.png" alt="listIcon" />
              <span>More Watch options</span>
            </button>
            <div className="flex gap-2">
              <div>
                <img
                  src="/Poster (1).png"
                  alt="Movie 1"
                  className="h-[200px] rounded-lg object-cover"
                />
              </div>
              <div>
                <img
                  src="/Poster (1).png"
                  alt="Movie 2"
                  className="h-[200px] rounded-lg object-cover"
                />
              </div>
              <div>
                <img
                  src="/Poster (1).png"
                  alt="Movie 3"
                  className="h-[200px] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Movie;
