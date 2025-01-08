function PricingTable() {
  return (
    <div className="pricing-table">
      <h3 className="pricing-table__heading">Compare</h3>

      <table className="pricing-table__features">

        <thead className="pricing-table__features-header">
          <tr className="pricing-table__row">
            <th className="pricing-table__cell pricing-table__cell-heading">The Features</th>

            <div className="pricing-table__cell-heading-inner-wrapper">
              <th className="pricing-table__cell pricing-table__cell-heading">Basic</th>
              <th className="pricing-table__cell pricing-table__cell-heading">Pro</th>
              <th className="pricing-table__cell pricing-table__cell-heading">Business</th>
            </div>
          </tr>
        </thead>

        <tbody className="pricing-table__body">
          <tr className="pricing-table__row">
            <td className="pricing-table__cell pricing-table__feature">Unlimited Story Posting</td>

            <div className="pricing-table__feature-inner-wrapper">
              <td className="pricing-table__cell pricing-table__check">&#10003;</td>
              <td className="pricing-table__cell">&#10003;</td>
              <td className="pricing-table__cell">&#10003;</td>
            </div>
          </tr>
        </tbody>

      </table>
    </div>
  );
}

export default PricingTable;
