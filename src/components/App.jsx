import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClick = (option) => {
    switch (option) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;

      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;

      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };
  const totalCount = () => {
    let counted = good + neutral + bad;
    return counted;
  };
  const positiveCount = () => {
    let positive = Math.round((good / totalCount()) * 100);
    return positive;
  };
  const total = totalCount();
  const positivePercentage = positiveCount();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onClick}
        />
      </Section>

      <Section title="Statistics">
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
}

export default App;
