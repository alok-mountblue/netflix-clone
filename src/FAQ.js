import React from 'react';
import './FAQ.css';

class Faq extends React.Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      firstQuestion: false,
      secondQuestion: false,
      thirdQuestion: false,
      fourthQuestion: false,
      fifthQuestion: false,
      sixthQuestion: false,
    };
  }
  toggleClass(e) {
    const clickedQuestionId = e.target.id;
    let currentState;
    this.setState({ firstQuestion: false });
    this.setState({ secondQuestion: false });
    this.setState({ thirdQuestion: false });
    this.setState({ fourthQuestion: false });
    this.setState({ fifthQuestion: false });
    this.setState({ sixthQuestion: false });
    if (clickedQuestionId === 'firstQuestion') {
      currentState = this.state.firstQuestion;
      this.setState({ firstQuestion: !currentState });
    } else if (clickedQuestionId === 'secondQuestion') {
      currentState = this.state.secondQuestion;
      this.setState({ secondQuestion: !currentState });
    } else if (clickedQuestionId === 'thirdQuestion') {
      currentState = this.state.thirdQuestion;
      this.setState({ thirdQuestion: !currentState });
    } else if (clickedQuestionId === 'fourthQuestion') {
      currentState = this.state.fourthQuestion;
      this.setState({ fourthQuestion: !currentState });
    } else if (clickedQuestionId === 'fifthQuestion') {
      currentState = this.state.fifthQuestion;
      this.setState({ fifthQuestion: !currentState });
    } else if (clickedQuestionId === 'sixthQuestion') {
      currentState = this.state.sixthQuestion;
      this.setState({ sixthQuestion: !currentState });
    }
    console.log(currentState);
  }
  render() {
    return (
      <div className='FAQ'>
        <h1>Frequently Asked Questions</h1>
        <button
          id='firstQuestion'
          className='FAQ-items'
          onClick={(e) => this.toggleClass(e)}
        >
          What is Netflix?
          <svg
            className={this.state.firstQuestion ? 'close-sign' : 'expand-sign'}
          >
            <path
              d='M 10.5 9.3 L 1.8 0.5 L 0.5 1.8 L 9.3 10.5 L 0.5 19.3 L 1.8
              20.5 L 10.5 11.8 L 19.3 20.5 L 20.5 19.3 L 11.8 10.5 L 20.5 1.8 L
              19.3 0.5 L 10.5 9.3 Z'
            ></path>
          </svg>
        </button>
        <div
          className={this.state.firstQuestion ? 'expanded-ans' : 'closed-ans'}
        >
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices. <br/><br/>You can watch as much as
            you want, whenever you want, without a single ad – all for one low
            monthly price. There's always something new to discover, and new TV
            shows and movies are added every week!
          </p>
        </div>
        <button
          id='secondQuestion'
          className='FAQ-items'
          onClick={(e) => this.toggleClass(e)}
        >
          How much does Netflix cost?
          <svg
            className={this.state.secondQuestion ? 'close-sign' : 'expand-sign'}
          >
            <path
              d='M 10.5 9.3 L 1.8 0.5 L 0.5 1.8 L 9.3 10.5 L 0.5 19.3 L 1.8
              20.5 L 10.5 11.8 L 19.3 20.5 L 20.5 19.3 L 11.8 10.5 L 20.5 1.8 L
              19.3 0.5 L 10.5 9.3 Z'
            ></path>
          </svg>
        </button>
        <div
          className={this.state.secondQuestion ? 'expanded-ans' : 'closed-ans'}
        >
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            199 to ₹ 799 a month. No extra costs, no contracts.
          </p>
        </div>
        <button
          id='thirdQuestion'
          className='FAQ-items'
          onClick={(e) => this.toggleClass(e)}
        >
          Where can I watch?
          <svg
            className={this.state.thirdQuestion ? 'close-sign' : 'expand-sign'}
          >
            <path
              d='M 10.5 9.3 L 1.8 0.5 L 0.5 1.8 L 9.3 10.5 L 0.5 19.3 L 1.8
              20.5 L 10.5 11.8 L 19.3 20.5 L 20.5 19.3 L 11.8 10.5 L 20.5 1.8 L
              19.3 0.5 L 10.5 9.3 Z'
            ></path>
          </svg>
        </button>
        <div
          className={this.state.thirdQuestion ? 'expanded-ans' : 'closed-ans'}
        >
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles. You can also download your favourite shows with
            the iOS, Android, or Windows 10 app. Use downloads to watch while
            you're on the go and without an internet connection. Take Netflix
            with you anywhere.
          </p>
        </div>
        <button
          id='fourthQuestion'
          className='FAQ-items'
          onClick={(e) => this.toggleClass(e)}
        >
          How do I cancel?
          <svg
            className={this.state.fourthQuestion ? 'close-sign' : 'expand-sign'}
          >
            <path
              d='M 10.5 9.3 L 1.8 0.5 L 0.5 1.8 L 9.3 10.5 L 0.5 19.3 L 1.8
              20.5 L 10.5 11.8 L 19.3 20.5 L 20.5 19.3 L 11.8 10.5 L 20.5 1.8 L
              19.3 0.5 L 10.5 9.3 Z'
            ></path>
          </svg>
        </button>
        <div
          className={this.state.fourthQuestion ? 'expanded-ans' : 'closed-ans'}
        >
          <p>
            Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime.
          </p>
        </div>
        <button
          id='fifthQuestion'
          className='FAQ-items'
          onClick={(e) => this.toggleClass(e)}
        >
          What can I watch on Netflix?
          <svg
            className={this.state.fifthQuestion ? 'close-sign' : 'expand-sign'}
          >
            <path
              d='M 10.5 9.3 L 1.8 0.5 L 0.5 1.8 L 9.3 10.5 L 0.5 19.3 L 1.8
              20.5 L 10.5 11.8 L 19.3 20.5 L 20.5 19.3 L 11.8 10.5 L 20.5 1.8 L
              19.3 0.5 L 10.5 9.3 Z'
            ></path>
          </svg>
        </button>
        <div
          className={this.state.fifthQuestion ? 'expanded-ans' : 'closed-ans'}
        >
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want.
          </p>
        </div>
        <button
          id='sixthQuestion'
          className='FAQ-items'
          onClick={(e) => this.toggleClass(e)}
        >
          Is Netflix good for kids?
          <svg
            className={this.state.sixthQuestion ? 'close-sign' : 'expand-sign'}
          >
            <path
              d='M 10.5 9.3 L 1.8 0.5 L 0.5 1.8 L 9.3 10.5 L 0.5 19.3 L 1.8
              20.5 L 10.5 11.8 L 19.3 20.5 L 20.5 19.3 L 11.8 10.5 L 20.5 1.8 L
              19.3 0.5 L 10.5 9.3 Z'
            ></path>
          </svg>
        </button>
        <div
          className={this.state.sixthQuestion ? 'expanded-ans' : 'closed-ans'}
        >
          <p>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space. Kids profiles come with PIN-protected parental
            controls that let you restrict the maturity rating of content kids
            can watch and block specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
    );
  }
}

export default Faq;
