import { MongoClient } from "mongodb";

async function handler(req, res) {
  
  const client = await MongoClient.connect("mongodb+srv://shashankdkte:shashankdkte@ac-next.raedmop.mongodb.net/events?retryWrites=true&w=majority");
  const eventId = req.query.eventId;
  if (req.method === "POST")
  {
   
    const { email, name, text } = req.body;
    if (!email.includes("@") || !name || name.trim() === "" || 
      !text || text.trim() === "")
    {
      res.status(422).json({
        message:"Invalid Input"
      })
      return;
    }

    console.log(email, name, text);

    const newComment = {
      eventId,
      email,
      name,
      text
    }

     const db = client.db();
    const result = await db.collection('comments').insertOne(newComment);
   
    newComment._id = result.insertedId;
    res.status(201).json({
      message: "Added comment",
      comment:newComment
    })
  }
  else if (req.method === "GET")
  {
      
    const db = client.db();
    const documents = await db.collection("comments").find().sort({ _id: -1 }).toArray();
    res.status(200).json({comments:documents})
  }
  client.close();
}

export default handler;