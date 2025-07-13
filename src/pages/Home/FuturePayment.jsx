import { sectionClasses, cardClasses } from "../../styles/futurePaymentClasses";

const FuturePayment = () => {
  const features = [
    {
      title: "Free transfers",
      description: "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      title: "Multiple accounts",
      description: "Run your operations with cash from your account and generate yield on funds stored in your account.",
    },
    {
      title: "Streamlined cash flow",
      description: "Design a financial operating system that works for your business and streamlined cash flow management.",
    },
    {
      title: "Unmatched security",
      description: "Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.",
    },
  ];

  return (
    <section className={sectionClasses} >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            FUTURE PAYMENT
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience that grows with your scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className={cardClasses}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturePayment;