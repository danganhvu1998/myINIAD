// Find
db.review.find({points: {$gte: 90}}, {_id: 0});
// eq, gt, gte, lt, lte, ne, in, nin
db.review.find({points: {$gte: 90}}, {_id: 0, country: 1});
// String find
db.review.find({country: /a/}, {_id: 0, country: 1});
db.review.find({country: /^A/}, {_id: 0, country: 1});
db.review.find({country: /e$/}, {_id: 0, country: 1});
// and, or
db.review.find({
    $or: [
        {points: {$lte: 81}},
        {
            $and: [
                {country: "Turkey"},
                {points: {$gte: 85}}
            ]
        }
    ]
}, {
    _id: 0, country: 1, points: 1
});
// exists
db.review.find({country: {$exists: true}}, {_id: 0, points: 1});
// all, size
db.review.find({hobby: {$size: 1}}, {_id: 0, points: 1}); // Lucking for record with record.hobby.length == 1
db.review.find({hobby: "Movie"}, {_id: 0, points: 1}); // Lucking for record with record.hobby contain Movie [Movie, Book] is ok
db.review.find({hobby: {
    $all: ["Movie", "Book"]}
}, {
    _id: 0, points: 1
}); // Lucking for record with record.hobby contain both Movie and Book
// sort, count 
db.review.find({hobby: {
    $all: ["Movie", "Book"]}
}, {
    _id: 0, points: 1
}).sort({
    points: 1 // Smaller to bigger
});
// more: $regex, $elemMatch

// Aggregate

db.review.aggregate([
    {
        $match: {
            points: {$gte: 90}
        }
    }, { 
        $group: {
            _id: "$country",
            avg_point: {
                $avg: "$points"
            },
            review_count: { $sum: 1}
        },
    }, {
        $sort: { review_count: -1 }
    }, {
        $limit: 5
    }
]);