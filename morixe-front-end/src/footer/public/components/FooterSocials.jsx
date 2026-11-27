const FooterSocials = ({
  socials,
}) => {
  return (
    <div>

      <h3
        className="
          mb-6
          text-lg
          font-semibold
          text-white
        "
      >
        Follow Us
      </h3>

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >

        {socials.map((social) => {

          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                text-slate-400
                transition-all
                duration-300
                hover:border-blue-500
                hover:bg-blue-500/10
                hover:text-blue-400
              "
            >
              <Icon size={18} />
            </a>
          );

        })}

      </div>

    </div>
  );
};

export default FooterSocials;