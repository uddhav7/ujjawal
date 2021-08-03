const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello")
});

app.post('/bfhl', (req, res) => {
    console.log(req.body);
    var numbers = req.body['numbers'];

    var check = true;
    for (var i = 0; i < numbers.length; i++) {
        var num = numbers[i];
        console.log(num)
        if (num >= '0' && num <= '9')
            num = parseInt(num);
        else if (num >= 0 && num <= 9)
            num = num;
        else
            check = true;

        if (typeof (num) != 'number') {
            check = false;
            break;
        }
    }

    if (check) {
        var odd = []
        var even = []

        for (var i = 0; i < numbers.length; i++) {
            var num = parseInt(numbers[i]);
            if (num % 2 == 0)
                even.push(num);
            else
                odd.push(num);
        }

        res.send({
            "is_success": true,
            "user_id": "ujjawal_tomar_02032001",
            "odd": odd,
            "even": even
        });
    }
    else {
        res.send({
            "is_success": false,
            "user_id": "ujjawal_tomar_02032001"
        });
    }

})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});