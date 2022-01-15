const { assignment1 } = require("../controllers/assignment1");

const routeAssignment1 = {
    method: "POST",
    path: "/assignment1",
    options: {
        handler: assignment1
    }
};

module.exports = [routeAssignment1];