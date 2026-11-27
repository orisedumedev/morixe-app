import { Hexagon } from "lucide-react";

const FooterBrand = ({
  brand,
}) => {
  return (
    <div className="space-y-6">

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-blue-500/15
          "
        >
          <Hexagon
            size={28}
            className="
              text-blue-500
              fill-blue-500/20
            "
          />
        </div>

        <div>

          <h2
            className="
              text-2xl
              font-bold
              tracking-wide
              text-white
            "
          >
            {brand.name}
          </h2>

          <p
            className="
              text-sm
              text-blue-400
            "
          >
            {brand.slogan}
          </p>

        </div>

      </div>

      <p
        className="
          max-w-sm
          leading-7
          text-slate-400
        "
      >
        {brand.description}
      </p>

    </div>
  );
};

export default FooterBrand;