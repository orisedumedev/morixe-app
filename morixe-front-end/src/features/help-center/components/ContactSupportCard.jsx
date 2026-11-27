import {
  Headset,
  Mail,
  MessageCircleMore,
} from "lucide-react";

const ContactSupportCard = ({
  support,
}) => {
  if (!support) return null;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15">

          <Headset
            size={28}
            className="text-blue-400"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Need More Help?
          </h2>

          <p className="mt-2 text-slate-400">
            Can't find the answer you're looking for?
            Our support team is ready to assist you.
          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-3">

        <button
          type="button"
          className="rounded-2xl border border-slate-800 bg-slate-800 p-6 transition hover:border-blue-500 hover:bg-slate-700"
        >

          <MessageCircleMore
            size={28}
            className="mb-4 text-blue-400"
          />

          <h3 className="font-semibold text-white">
            Live Chat
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Chat instantly with one of our support agents.
          </p>

          <span className="mt-4 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">

            {support.liveChat
              ? "Online"
              : "Offline"}

          </span>

        </button>

        <button
          type="button"
          className="rounded-2xl border border-slate-800 bg-slate-800 p-6 transition hover:border-blue-500 hover:bg-slate-700"
        >

          <Mail
            size={28}
            className="mb-4 text-blue-400"
          />

          <h3 className="font-semibold text-white">
            Email Support
          </h3>

          <p className="mt-2 break-all text-sm text-slate-400">
            {support.email}
          </p>

        </button>

        <button
          type="button"
          className="rounded-2xl border border-slate-800 bg-slate-800 p-6 transition hover:border-blue-500 hover:bg-slate-700"
        >

          <Headset
            size={28}
            className="mb-4 text-blue-400"
          />

          <h3 className="font-semibold text-white">
            Submit Ticket
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Create a support ticket for more complex issues.
          </p>

          <span className="mt-4 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">

            Available

          </span>

        </button>

      </div>

    </section>
  );
};

export default ContactSupportCard;