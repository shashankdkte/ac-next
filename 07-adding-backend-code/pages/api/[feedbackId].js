import { getData, getPath } from "./feedback";

function feedbackDetails(req, res) {
  const feedbackId = req.query.feedbackId;

  const filePath = getPath();
  const data = getData(filePath);
  const feedbackDetail = data.find(item => item.id === feedbackId);


  return res.status(200).json({
    feedbackData: feedbackDetail
  })
};

export default feedbackDetails;