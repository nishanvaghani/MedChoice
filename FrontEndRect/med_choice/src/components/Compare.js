import React from 'react';

const Compare = () => (
  <section className="compare" id="compare">
    <div className="container">
      <div className="compareCard">
        <h2 className="sectionHeader">Get Insurance</h2>
        <form className="form">
          <div className="rows">
            <div className="row">
              <label htmlFor="location">Location</label>
              <select id="location" name="location">
                <option value="">-- Select Location --</option>
                <option value="dallas">Dallas</option>
                <option value="new">New</option>
              </select>
            </div>
            <div className="row">Or</div>
            <div className="row">
              <label htmlFor="zipcode">Zipcode</label>
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
  </section>
);

export default Compare;
