const express = require('express')
const os = require('os')

const app = express()
app.get('/', (req, res) =>{
    res.send(`Hi from ${os.hostname()}!`)
})

const port =3000

setTimeout(function() {
    console.log('Closing application');
    process.exit()
}, 3000);

app.listen(port, () => console.log(`Listening on port ${port}`))


