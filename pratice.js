const express = require('express');
const app = express();
app.get('/toDo', function (req, res) {
    res.send(
        {code:200,
            result: [{ "name": "例如", "date": "2019/7/28" }, { "name": "啦啦啦", "date": "2019/7/28" },
            { "name": "待办事项不见了", "date": "2019/7/25" }, { "name": "好好", "date": "2019/7/25" },
            { "name": "不想吵架", "date": "2019/7/25" }
            ]
        }
    )
})
app.listen(8080, () => {
    console.log('App listening on port 8080!');
});