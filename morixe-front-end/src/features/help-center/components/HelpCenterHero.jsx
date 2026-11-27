import { LifeBuoy } from "lucide-react";

const HelpCenterHero = () => {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">

      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

        <div className="max-w-2xl">

          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">

            <LifeBuoy size={30} />

          </div>

          <h1 className="text-4xl font-bold">
            Help Center
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Find answers, browse guides, learn trading,
            and get support whenever you need it.
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 px-6 py-5 backdrop-blur">

          <p className="text-sm uppercase tracking-wider text-blue-100">
            Support
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            24 / 7
          </h2>

          <p className="mt-2 text-blue-100">
            Our support team is available around the clock.
          </p>

        </div>

      </div>

    </section>
  );
};

export default HelpCenterHero;