function errorMessage(err, req, res, next) {
    console.log("Errore intercettato:", err);

    res.status(500).json({
        // error: "InternalServerError",
        error: err.message
    });
}

module.exports = errorMessage;