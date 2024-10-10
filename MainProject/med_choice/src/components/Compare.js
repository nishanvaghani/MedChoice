import React from 'react';

const Compare = () => (
  <section className="compare" id="compare">
    <div className="container">
        <div className="compareCard">
            <div className="sectionHeader">Get Insurance</div>
            <div className="sectionContent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, obcaecati?
            </div>
            <div className="form">
                <form action="#" method="post">
                    <div className="rows">
                        <div className="row">
                            <label for="location">Location</label>
                            <select id="location" name="location">
                                <option value="">-- Select Location --</option>
                                <option value="dallas">Dallas</option>
                                <option value="new">New</option>
                            </select>
                        </div>
                        <div className="row">
                            Or
                        </div>
                        <div className="row">
                            <label for="zipcode">Zipcode</label>
                            <input type="text" id="zipcode" name="zipcode" placeholder="Your zipcode.." />
                        </div>
                    </div>
                    <div className="rows">
                        <div className="row">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
);

export default Compare;
