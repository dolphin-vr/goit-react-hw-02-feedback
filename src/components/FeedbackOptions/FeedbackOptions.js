

export const FeedbackOptions = ({options, onLeaveFeedback})=>{
   return (
      <>
         {options.map(el => <button name={el} onClick={ev=>onLeaveFeedback(ev)}>{el}</button>)}
      </>
   )
}
