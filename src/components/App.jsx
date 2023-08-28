import { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  total =  this.state.good +  this.state.neutral +  this.state.bad;
  positivePercentage = Math.round(this.state.good / this.total *100);
  title = this.props.title; 
  feedType = Object.keys(this.state);

  handleFeedback = (ev) => {
    this.setState(prevState =>{
      return {[ev.target.name]: prevState[ev.target.name] + 1}
    })
  };

  render() {
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.feedType} onLeaveFeedback={this.handleFeedback} />
       </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} 
            total={this.state.good +  this.state.neutral +  this.state.bad} 
            positivePercentage={Math.round(this.state.good / (this.state.good +  this.state.neutral +  this.state.bad) *100) || 0} />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
