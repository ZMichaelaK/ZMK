import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div
      className="container"
      style={{ maxWidth: "350px", marginLeft: "20px" }}
    >
      <div className="row">
        <h2>Counter</h2>
      </div>
      <div className="row">
        <input className="form-control" type="number" readOnly value={count} />
      </div>
      <div className="row mt-1">
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count - 5)}
          >
            -5
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={() => setCount(0)}>
            R
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 5)}
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
