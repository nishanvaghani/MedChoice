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
            <div className="sectionHeader">FQAs</div>
            <div className="sectionContent">Most frequently asked questions</div>
            <div className="faq">
                <div className="details">
                    <details className="details_container">
                        <summary className="details_summary">
                            <h2 className="details_title"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h2>
                        </summary>
                    </details>
                    <div className="details_desc">
                        <div className="details_desc-inner">
                            Sweet roll donut bonbon cheesecake pudding ice cream oat cake chocolate apple pie. <a
                                href="#link">Marshmallow</a> sweet roll muffin macaroon donut. Tootsie roll cupcake
                            cotton candy jujubes apple pie apple pie jelly beans. Marshmallow jelly-o marzipan
                            caramels pudding icing toffee lemon drops carrot cake.
                        </div>
                    </div>
                </div>
                <div className="details">
                    <details className="details_container">
                        <summary className="details_summary">
                            <h2 className="details_title">Lorem ipsum dolor</h2>
                        </summary>
                    </details>
                    <div className="details_desc">
                        <div className="details_desc-inner">
                            Sweet roll donut bonbon cheesecake pudding ice cream oat cake chocolate apple pie.
                            Marshmallow sweet roll muffin macaroon donut. Tootsie roll cupcake cotton candy jujubes
                            apple pie apple pie jelly beans. Marshmallow jelly-o marzipan caramels pudding icing
                            toffee lemon drops carrot cake.
                        </div>
                    </div>
                </div>
                <div className="details">
                    <details className="details_container">
                        <summary className="details_summary">
                            <h2 className="details_title">Lorem ipsum dolor</h2>
                        </summary>
                    </details>
                    <div className="details_desc">
                        <div className="details_desc-inner">
                            Sweet roll donut bonbon cheesecake pudding ice cream oat cake chocolate apple pie.
                            Marshmallow sweet roll muffin macaroon donut. Tootsie roll cupcake cotton candy jujubes
                            apple pie apple pie jelly beans. Marshmallow jelly-o marzipan caramels pudding icing
                            toffee lemon drops carrot cake.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
);

export default FAQs;
