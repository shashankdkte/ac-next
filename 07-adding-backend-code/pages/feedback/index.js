import { getData, getPath } from "../api/feedback";

function FeedbackPage(props) {
  

  return (
    <div>
      <ul>
        {props.feedbackItems.map(item => {
          return (
            <li key={item.id}>{item.email}  - {item.feedback}</li>
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