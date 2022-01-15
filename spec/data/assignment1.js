module.exports.example1 = {
    "0":
        [{
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
        }],
    "1":
        [{
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 18,
            "title": "Blue Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 13,
            "title": "Wall",
            "level": 1,
            "children": [],
            "parent_id": 10
        }],
    "2":
        [{
            "id": 17,
            "title": "Blue Window",
            "level": 2,
            "children": [],
            "parent_id": 12
        },
        {
            "id": 16,
            "title": "Door",
            "level": 2,
            "children": [],
            "parent_id": 13
        },
        {
            "id": 15,
            "title": "Red Window",
            "level": 2,
            "children": [],
            "parent_id": 12
        }]
};

module.exports.example1_output = [{
    "id": 10,
    "title": "House",
    "level": 0,
    "children":
        [{
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children":
                [{
                    "id": 17,
                    "title": "Blue Window",
                    "level": 2,
                    "children": [],
                    "parent_id": 12
                },
                {
                    "id": 15,
                    "title": "Red Window",
                    "level": 2,
                    "children": [],
                    "parent_id": 12
                }],
            "parent_id": 10
        },
        {
            "id": 18,
            "title": "Blue Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 13,
            "title": "Wall",
            "level": 1,
            "children":
                [{
                    "id": 16,
                    "title": "Door",
                    "level": 2,
                    "children": [],
                    "parent_id": 13
                }],
            "parent_id": 10
        }],
    "parent_id": null
}];

module.exports.example2 = {
    "0":
        [{
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
        }]
};

module.exports.example2_output = [
    {
        "id": 10,
        "title": "House",
        "level": 0,
        "children": [],
        "parent_id": null
    }
];


module.exports.example3 = {
    "0":
        [{
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
        }],
    "1":
        [{
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 18,
            "title": "Blue Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 13,
            "title": "Wall",
            "level": 1,
            "children": [],
            "parent_id": 100
        }]
};


module.exports.example3_output = [
    {
        "id": 10,
        "title": "House",
        "level": 0,
        "children": [
            {
                "id": 12,
                "title": "Red Roof",
                "level": 1,
                "children": [],
                "parent_id": 10
            },
            {
                "id": 18,
                "title": "Blue Roof",
                "level": 1,
                "children": [],
                "parent_id": 10
            }
        ],
        "parent_id": null
    }
];

module.exports.example4 = {
    "0":
        [{
            "id": 10,
            "title": "House",
            "level": 0,
            "children": [],
            "parent_id": null
        }],
    "1":
        [{
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 18,
            "title": "Blue Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 13,
            "title": "Wall",
            "level": 1,
            "children": [],
            "parent_id": 10
        }],
    "2":
        [{
            "id": 17,
            "title": "Blue Window",
            "level": 2,
            "children": [],
            "parent_id": 12
        },
        {
            "id": 16,
            "title": "Door",
            "level": 2,
            "children": [],
            "parent_id": 13
        },
        {
            "id": 15,
            "title": "Red Window",
            "level": 2,
            "children": [],
            "parent_id": 12
        }],
    "3":
        [{
            "id": 31,
            "title": "Green bed",
            "level": 3,
            "children": [],
            "parent_id": 15
        },
        {
            "id": 32,
            "title": "Red bed",
            "level": 3,
            "children": [],
            "parent_id": 15
        },
        {
            "id": 33,
            "title": "White bed",
            "level": 3,
            "children": [],
            "parent_id": 17
        },
        {
            "id": 34,
            "title": "Black bed",
            "level": 3,
            "children": [],
            "parent_id": 16
        }],
    "4":
        [{
            "id": 41,
            "title": "Sofa",
            "level": 4,
            "children": [],
            "parent_id": 32
        }, {
            "id": 42,
            "title": "Fan",
            "level": 4,
            "children": [],
            "parent_id": 32
        }, {
            "id": 43,
            "title": "Table",
            "level": 4,
            "children": [],
            "parent_id": 31
        }]
};

module.exports.example4_output = [{
    "id": 10,
    "title": "House",
    "level": 0,
    "children":
        [{
            "id": 12,
            "title": "Red Roof",
            "level": 1,
            "children":
                [{
                    "id": 17,
                    "title": "Blue Window",
                    "level": 2,
                    "children": [{
                        "id": 33,
                        "title": "White bed",
                        "level": 3,
                        "children": [],
                        "parent_id": 17
                    }],
                    "parent_id": 12
                },
                {
                    "id": 15,
                    "title": "Red Window",
                    "level": 2,
                    "children": [{
                        "id": 31,
                        "title": "Green bed",
                        "level": 3,
                        "children": [{
                            "id": 43,
                            "title": "Table",
                            "level": 4,
                            "children": [],
                            "parent_id": 31
                        }],
                        "parent_id": 15
                    }, {
                        "id": 32,
                        "title": "Red bed",
                        "level": 3,
                        "children": [{
                            "id": 41,
                            "title": "Sofa",
                            "level": 4,
                            "children": [],
                            "parent_id": 32
                        }, {
                            "id": 42,
                            "title": "Fan",
                            "level": 4,
                            "children": [],
                            "parent_id": 32
                        }],
                        "parent_id": 15
                    }],
                    "parent_id": 12
                }],
            "parent_id": 10
        },
        {
            "id": 18,
            "title": "Blue Roof",
            "level": 1,
            "children": [],
            "parent_id": 10
        },
        {
            "id": 13,
            "title": "Wall",
            "level": 1,
            "children":
                [{
                    "id": 16,
                    "title": "Door",
                    "level": 2,
                    "children": [{
                        "id": 34,
                        "title": "Black bed",
                        "level": 3,
                        "children": [],
                        "parent_id": 16
                    }],
                    "parent_id": 13
                }],
            "parent_id": 10
        }],
    "parent_id": null
}];