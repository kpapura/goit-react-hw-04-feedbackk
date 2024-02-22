import PropTypes from "prop-types";

import { BoxStat, StatField } from "./Statistics.styled"

export const Statistics = ({ bad, good, neutral, total, positivePercentage }) => {
    return (
        <BoxStat>
            <StatField>Good: {good}</StatField>
            <StatField>Neutral: {neutral}</StatField>
            <StatField>Bad: {bad}</StatField>
            <StatField>Total: {total}</StatField>
            <StatField>Positive percentage: {positivePercentage}%</StatField>
        </BoxStat>
    )
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
