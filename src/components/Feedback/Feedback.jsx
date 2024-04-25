import css from "./Feedback.module.css"

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackContainer}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className={css.feedbackButton}>
          {option}
        </button>
      ))}
    </div>
  );
};