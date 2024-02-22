import PropTypes from "prop-types";

import { Button, ButtonBox } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonBox>
            {options.map((option) => {
            return <Button key={option} onClick={()=>onLeaveFeedback(option)} >{option}</Button> 
        })}
        </ButtonBox>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}
