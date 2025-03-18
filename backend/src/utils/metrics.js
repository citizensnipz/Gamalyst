const calculateEngagement = (upvotes, comments, weight = 2) => {
    return upvotes + (comments * weight);
};

module.exports = { calculateEngagement };