import { Mail } from "lucide-react";
import { useState } from "react";

const FooterNewsletter = () => {
  const [email, setEmail] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <div>

      <h3
        className="
          mb-3
          text-lg
          font-semibold
          text-white
        "
      >
        Newsletter
      </h3>

      <p
        className="
          mb-6
          text-slate-400
        "
      >
        Stay updated with new listings,
        market insights, and product
        updates.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <div
          className="
            flex
            items-center
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-4
          "
        >

          <Mail
            size={18}
            className="text-slate-500"
          />

          <input
            type="email"
            required
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            placeholder="Email address"
            className="
              w-full
              bg-transparent
              px-3
              py-4
              text-white
              outline-none
              placeholder:text-slate-500
            "
          />

        </div>

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-blue-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-600
          "
        >
          Subscribe
        </button>

      </form>

    </div>
  );
};

export default FooterNewsletter;