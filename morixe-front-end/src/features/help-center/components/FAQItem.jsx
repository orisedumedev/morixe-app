import { useState } from "react";

import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const FAQItem = ({ faq }) => {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <h3 className="font-semibold text-white">
          {faq.question}
        </h3>

        {open ? (
          <ChevronUp
            size={20}
            className="text-blue-400"
          />
        ) : (
          <ChevronDown
            size={20}
            className="text-slate-400"
          />
        )}
      </button>

      {open && (
        <div className="border-t border-slate-800 px-5 py-4">

          <p className="leading-7 text-slate-400">
            {faq.answer}
          </p>

        </div>
      )}

    </div>
  );
};

export default FAQItem;