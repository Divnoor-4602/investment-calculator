// logic -> when all 4 fields are not empty then the data to be passed to function in investment js
// take the returned annual data and render it in result simultaneously
export default function UserInput({ onInputChange }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <div>
            <label>Initial Investment</label>
            <input
              type="number"
              id="initialInvestment"
              onChange={onInputChange}
            ></input>
          </div>
          <div>
            <label>Annual Investment</label>
            <input
              type="number"
              id="annualInvestment"
              onChange={onInputChange}
            ></input>
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>Expected Return</label>
            <input
              type="number"
              id="expectedReturn"
              onChange={onInputChange}
            ></input>
          </div>
          <div>
            <label>Duration</label>
            <input type="number" id="duration" onChange={onInputChange}></input>
          </div>
        </div>
      </section>
    </>
  );
}
