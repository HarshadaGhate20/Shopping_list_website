const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:9000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_newitem = (req, res) =>{
    res.render('add_newitem');
}

exports.update_item = (req, res) =>{
    axios.get('http://localhost:9000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_item", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}