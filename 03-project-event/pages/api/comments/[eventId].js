function handler(req, res) {
  
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
      id: new Date().toISOString(),
      email,
      name,
      text
    }

    res.status(201).json({
      message: "Added comment",
      comment:newComment
    })
  }
  else if (req.method === "GET")
  {
    
    const dummyLists = [
      {id:"C1",name:"Max",text:"A firstComment"},
      {id:"C2",name:"Manuel",text:"A Second Comment"}
    ]

    res.status(200).json({comments:dummyLists})
  }
}

export default handler;