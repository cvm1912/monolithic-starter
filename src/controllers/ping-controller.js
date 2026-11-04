const pingController = (req, res) => {
    res.status(200).json({ success: true, message: "pong" });
};

module.exports = { pingController };
