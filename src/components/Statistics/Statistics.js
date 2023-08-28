import { Notification } from "components/Notification/Notification";
import { List, ListItem, Label, Percent, Wrapper } from "./Statistics.styled"

// <Statistics good={} neutral={} bad={} total={} positivePercentage={}>
export const Statistics = ({good, neutral, bad}) =>{
   const total = good + neutral + bad;
   if (total === 0) {
      return(
         <Wrapper>
            <Notification message="There is no feedback" />
         </Wrapper>
      )
   };
   const positivePercentage = Math.round(good / total *100);
   return(
      <Wrapper>
         {/* {title ? <Title>{title}</Title> : ''} */}
         <List>
            <ListItem key='1' >
               <Label>Good: </Label>
               <Percent>{good}</Percent>
            </ListItem>
            <ListItem key='2' >
               <Label>Neutral: </Label>
               <Percent>{neutral}</Percent>
            </ListItem>
            <ListItem key='3' >
               <Label>Bad: </Label>
               <Percent>{bad}</Percent>
            </ListItem>
            <ListItem key='4' >
               <Label>Total: </Label>
               <Percent>{total}</Percent>
            </ListItem>
            <ListItem key='5' >
               <Label>Positive feedback: </Label>
               <Percent>{positivePercentage}%</Percent>
            </ListItem>
         </List>
      </Wrapper>
   )
}