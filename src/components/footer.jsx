const Footer = () => {
  return (
    <div className="mb-16">
      <div className="mb-4 flex items-center justify-center gap-8 *:cursor-pointer">
        <a
          href="#"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          <img src="facebook.svg" alt="accountIcon" />
        </a>
        <a
          href="#"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          <img src="instagram.svg" alt="accountIcon" />
        </a>
        <a
          href="#"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          <img src="twitter.svg" alt="accountIcon" />
        </a>
        <a
          href="#"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          <img src="youtube.svg" alt="accountIcon" />
        </a>
      </div>
      <div className="mb-4 flex items-center justify-center gap-8">
        <a href="# " className="text-[18px] font-bold">
          Conditions of Use
        </a>
        <a href="#" className="text-[18px] font-bold">
          Privacy & Policy
        </a>
        <a href="#" className="text-[18px] font-bold">
          Press Room
        </a>
      </div>
      <p className="text-center opacity-70">
        ©️ 2021 MovieBox By Adriana Eka Prayudha
      </p>
    </div>
  );
};

export default Footer;
