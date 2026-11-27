import FAQItem from "./FAQItem";

const FAQList = ({ faqs }) => {
  return (
    <section>

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-2 text-slate-400">
          Quick answers to our most common questions.
        </p>

      </div>

      <div className="space-y-4">

        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            faq={faq}
          />
        ))}

      </div>

    </section>
  );
};

export default FAQList;