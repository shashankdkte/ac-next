import fs from "fs";
import path from "path";

function getPath()
{
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function getData(filePath)
{
  
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}
function handler(req, res) {

  if (req.method === "POST")
  {
    const email = req.body.email;
    const feedback = req.body.feedback;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedback
    };

    //store in a database or a file
    const filePath = getPath();
    const data = getData(filePath)
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({
      message: "Success",
      feedback: newFeedback
    })
  }
  else
  {
     const filePath = getPath();
    const data = getData(filePath)
    console.log(data);
    res.status(200).json({
      data: data
    })
  }
};

export default handler;