import { Accordion } from "../Accordion/AccordionCheckbox";

const FAQs_DATA = [
  {
    id: 1,
    title: `How many team members can I invite?`,
    faqText: `You can invite up to 2 additional users on the Free plan. There is no limit on 
    team members for the Premium plan.`,
  },
  {
    id: 2,
    title: `What is the maximum file upload size?`,
    faqText: `No more than 2GB. All files in your account must fit your allotted storage space.`,
  },
  {
    id: 3,
    title: `How do I reset my password?`,
    faqText: `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.`,
  },
  {
    id: 4,
    title: `Can I cancel my subscription?`,
    faqText: `Yes! Send us a message and we'll process your request no questions asked.`,
  },
  {
    id: 5,
    title: `Do you provide additional support?`,
    faqText: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

export const FaqContainer = (props) => {
  return (
    <div className="h-full flex flex-col items-start justify-start p-12">
      <h1 className="w-full text-center lg:text-start text-[color:var(--desaturated-blue)] text-2xl font-[700]  mb-4">
        FAQ
      </h1>
      <div className="p-2 overflow-y-scroll">
        {FAQs_DATA.map((faq) => (
          <Accordion
            key={faq.id}
            id={faq.id}
            title={faq.title}
            faqText={faq.faqText}
          />
        ))}
      </div>
    </div>
  );
};
