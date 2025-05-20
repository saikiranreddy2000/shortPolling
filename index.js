const express = require('express');
const app = express();
app.use(express.json());
var data='Hello I will show what you enter in the input box.';
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/getdata', (req, res) => {
    const input = req.body.input; // Extract input from request body
    console.log(`Received input: ${input}`);
    
    // Respond with the received input or some processed data
    res.send({
        data: input==''?`Message: ${data}`:`Message: ${input}`
    });
});
app.get('/update',(req, res) => {
    data='Bye World!';
    res.send({
        data
    })
})
const port=3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});