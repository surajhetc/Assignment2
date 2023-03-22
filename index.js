const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

//API to return path and query
app.get('/api', (req, res) => {
    let responseData = {
        status:true,
        path : req.path,
        query : req.query
    }
    res.json(responseData);
})

//API to return data which was sent as raw JSON
app.post('/api', (req, res) => {
    if(Object.keys(req.body).length > 0){
        res.json([{status:true, data:req.body}])
    }
    else
        res.json([{status:false}])   
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})