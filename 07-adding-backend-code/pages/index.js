import { useRef , useState} from "react";

function HomePage()
{
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedbackList, setFeedbackList] = useState([]);

  function getFeedBackData() {

    fetch("/api/feedback")
      .then(response => response.json())
      .then(data => {
        setFeedbackList(data.data);
        console.log(data.data);
        
    })
  }

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = {email:enteredEmail, feedback:enteredFeedback}
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type":"application/json",
      },

    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       
      }
    
    )
  }
  return <div>
    <h1>The Home Page</h1>
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id="email" ref={emailInputRef} name="email" />
      </div>
      <div>
        <label htmlFor="feedback">Your Feedback</label>
        <textarea id="feedback" rows='5' ref={feedbackInputRef} name="feedback">
        </textarea>
      </div>
      <button>Send Feedback</button>
    </form>
    <div>
      <br />
      <br />
      <hr />
      <button onClick={getFeedBackData}>Get Feedback</button>
      <ul>
        {feedbackList.map(feedback => (<li key={feedback.id}>{feedback.feedback}</li>))}
      </ul>
    </div>
    
  </div>
}

export default HomePage;