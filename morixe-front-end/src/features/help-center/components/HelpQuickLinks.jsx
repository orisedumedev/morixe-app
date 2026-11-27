import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const HelpQuickLinks = ({
  links,
}) => {
  if (!links?.length) return null;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Quick Links
        </h2>

        <p className="mt-2 text-slate-400">
          Useful resources and important documentation.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800 p-5 transition hover:border-blue-500 hover:bg-slate-700"
          >

            <div>

              <h3 className="font-medium text-white transition group-hover:text-blue-400">
                {link.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Learn more about{" "}
                {link.title.toLowerCase()}.
              </p>

            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700 transition group-hover:bg-blue-600">

              <ExternalLink
                size={18}
                className="text-slate-300 group-hover:hidden"
              />

              <ArrowUpRight
                size={18}
                className="hidden text-white group-hover:block"
              />

            </div>

          </a>
        ))}

      </div>

    </section>
  );
};

export default HelpQuickLinks;