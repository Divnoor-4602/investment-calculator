import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ currentUserInput }) {
  let dataToShow = [];
  if (Object.keys(currentUserInput).length === 4) {
    dataToShow = calculateInvestmentResults(currentUserInput);
  }

  return (
    <>
      <table id="result">
        {Object.keys(currentUserInput).length === 4 ? (
          <thead>
            <tr>
              <td>Year</td>
              <td>Investment Value</td>
              <td>Interest(Year)</td>
              <td>Total Interest</td>
              <td>Invested Capital</td>
            </tr>
          </thead>
        ) : (
          <p>Fill out all the fields!</p>
        )}

        <tbody>
          {dataToShow.map((perYearInvestment) => {
            return (
              <>
                <tr>
                  <td>{perYearInvestment.year}</td>
                  <td>
                    {formatter.format(
                      Math.round(perYearInvestment.valueEndOfYear)
                    )}
                  </td>
                  <td>
                    {formatter.format(Math.round(perYearInvestment.interest))}
                  </td>
                  <td>
                    {formatter.format(
                      Math.round(perYearInvestment.totalInterest)
                    )}
                  </td>
                  <td>
                    {formatter.format(
                      Math.round(perYearInvestment.investedCapital)
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
