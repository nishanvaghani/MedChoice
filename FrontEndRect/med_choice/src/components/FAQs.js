import React from 'react';

const FAQItem = ({ title, children }) => (
  <div className="details">
    <details className="details_container">
      <summary className="details_summary">
        <h2 className="details_title">{title}</h2>
      </summary>
      <div className="details_desc-inner">{children}</div>
    </details>
  </div>
);

const FAQs = () => (
  <section className="FAQs" id="FAQs">
    <div className="container">
      <div className="faqCard">
        <h2 className="sectionHeader">FAQs</h2>
        <p className="sectionContent">Most frequently asked questions</p>
        <FAQItem title="Lorem ipsum dolor sit amet consectetur">
          Sweet roll donut bonbon cheesecake pudding ice cream oat cake chocolate apple pie.
        </FAQItem>
        <FAQItem title="Lorem ipsum dolor">
          Sweet roll donut bonbon cheesecake pudding ice cream oat cake chocolate apple pie.
        </FAQItem>
      </div>
    </div>
  </section>
);

export default FAQs;
