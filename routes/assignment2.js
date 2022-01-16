const path = require("path");

const routeAssignment2 = [
    {
        method: "GET",
        path: "/assignment2/{param*}",
        handler: {
            directory: {
                path: path.join(__dirname, "../public")
            }
        }
    }
];

module.exports = [...routeAssignment2];