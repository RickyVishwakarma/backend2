import express from 'express'
const app = express()

app.get('/', (req, res) =>{
    res.send('Server is Ready');
})


const port = process.env.PORT || 3000;

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content : "This is a joke"
        },
        {
            id: 2,
            title: "Another joke",
            content : "This is a another joke"
        },
        {
            id: 3,
            title: "Again joke",
            content : "This is again a  joke"
        },
        {
            id: 4,
            title: "Onceagain joke",
            content : "This is once again a  joke"
        }, 
        {
            id: 5,
            title: "more a joke",
            content : "This is more a joke"
        } 

    ]
    res.json(jokes);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
