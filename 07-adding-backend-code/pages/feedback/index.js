import { useState } from "react";
import { getData, getPath } from "../api/feedback";

function FeedbackPage(props) {
  
  const [feedbackData,setFeedbackData] = useState()
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then(response => response.json())
      .then((data) => {
        setFeedbackData(data.feedbackData)
      })
  }
  return (
    <div>
      <p>{feedbackData && feedbackData.email}</p>
      <ul>
        {props.feedbackItems.map(item => {
          return (
            <li key={item.id}>{item.feedback}
              <button onClick={() => loadFeedbackHandler(item.id)}>Full Detail</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export async function getStaticProps() {
  
  const filePath = getPath()
  const data = getData(filePath);
  return {
    props: {
      feedbackItems: data
    }
  }
}
export default FeedbackPage;