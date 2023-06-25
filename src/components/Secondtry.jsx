import React, { useEffect, useState } from "react";
import { decode } from "html-entities";

const Secondtry = ({
  question,
  incorrect,
  correct,
  btnClick,
  selector,
  selected,
  disabled,
  num,
}) => {
  const [varable, setVariable] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const randomQuestionMaker = Math.ceil(Math.random() * incorrect.length);
    incorrect.splice(randomQuestionMaker, 0, correct);
    const questionArray = incorrect;
    const [one, two, three, four] = questionArray;
    setVariable([one, two, three, four]);
  }, [question]);

  useEffect(() => {
    setNumber((prev) => prev + 1);
  }, [question]);
  // setNumber(1)

  console.log(num);
  let [one, two, three, four] = varable;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
        <h1 style={{ color: "green" }}>{num}.</h1>
        <div>
          <h2 style={{ color: "cyan" }}> {decode(question)}</h2>
          <div
            style={{
              pointerEvents: disabled ? "none" : "auto",
              display: "flex",
              flexWrap: "wrap",
              gap: "13px",
            }}
          >
            <input type="radio" id={one} name="radio-button-group" />
            <label
              for={one}
              id="one"
              style={
                disabled
                  ? {
                      backgroundColor:
                        one === correct
                          ? "green"
                          : { backgroundColor: selected === one ? "blue" : "" },
                    }
                  : {
                      backgroundColor: selected === one ? "blue" : "",
                    }
              }
              onClick={() => btnClick(one)}
              class="radio-button"
            >
              {decode(one)}
            </label>

            <input type="radio" id={two} name="radio-button-group" />
            <label
              for={two}
              class="radio-button"
              style={
                disabled
                  ? {
                      backgroundColor:
                        two === correct
                          ? "green"
                          : { backgroundColor: selected === two ? "blue" : "" },
                    }
                  : {
                      backgroundColor: selected === two ? "blue" : "",
                    }
              }
              onClick={() => btnClick(two)}
            >
              {decode(two)}
            </label>

            <input type="radio" id={three} name="radio-button-group" />
            <label
              htmlFor={three}
              style={
                disabled
                  ? {
                      backgroundColor:
                        three === correct
                          ? "green"
                          : {
                              backgroundColor: selected === three ? "blue" : "",
                            },
                    }
                  : {
                      backgroundColor: selected === three ? "blue" : "",
                    }
              }
              onClick={() => btnClick(three)}
              class="radio-button"
            >
              {decode(three)}
            </label>

            <input type="radio" id={four} name="radio-button-group" />
            <label
              htmlFor={four}
              style={
                disabled
                  ? {
                      backgroundColor:
                        four === correct
                          ? "green"
                          : {
                              backgroundColor: selected === four ? "blue" : "",
                            },
                    }
                  : {
                      backgroundColor: selected === four ? "blue" : "",
                    }
              }
              onClick={() => btnClick(four)}
              class="radio-button"
            >
              {decode(four)}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default Secondtry;
