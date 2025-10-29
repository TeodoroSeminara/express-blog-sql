// faccio logica funzioni

// Importo array
// const recipe = require("../data/recipe");

// Importiamo il file di connessione al database
const connection = require('../data/db');

// Index
function index(req, res) {
    // prepariamo la query
    const sql = `SELECT * FROM posts`;

    // esecuzione della query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Database query failed" });
        res.json(results);
    })
};

// Show
function show(req, res) {
    const ricetta = recipe.find((i) => i.id === parseInt(req.params.id));

    if (!ricetta) {
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }
    res.json(ricetta);
};

// Store
function store(req, res) {
    // res.send("Creata nuova ricetta");
    const newId = recipe[recipe.length - 1].id + 1;

    const newRecipe = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    recipe.push(newRecipe);

    console.log("Nuovo oggetto", newRecipe, "Array completo", recipe);

    res.status(201).json(newRecipe);
}

// Update
function update(req, res) {
    // res.send("Modifica ricetta " + req.params.id);
    const ricetta = recipe.find((i) => i.id === parseInt(req.params.id));

    if (!ricetta) {
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }
    // va a sostituire i vecchi dati con i nuovi
    ricetta.title = req.body.title;
    ricetta.content = req.body.content;
    ricetta.image = req.body.image;
    ricetta.tags = req.body.tags;

    console.log("Ricetta Modificata", ricetta, "Array modificato", recipe);

    res.status(200).json(ricetta);
}

// Modify
function modify(req, res) {
    // res.send("Modifica parziale " + req.params.id);
    const ricetta = recipe.find((i) => i.id === parseInt(req.params.id));

    if (!ricetta) {
        return res.status(404).json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }
    // va a sostituire i vecchi dati con i nuovi
    req.body.title ? ricetta.title = req.body.title : ricetta.title = ricetta.title;
    req.body.content ? ricetta.content = req.body.content : ricetta.content = ricetta.content;
    req.body.image ? ricetta.image = req.body.image : ricetta.image = ricetta.image;
    req.body.tags ? ricetta.tags = req.body.tags : ricetta.tags = ricetta.tags;

    console.log("Ricetta Modificata", ricetta, "Array modificato", recipe);

    res.json(ricetta);
}

// Destroy
function destroy(req, res) {
    // Recuperiamo id dall'URL
    const { id } = req.params;
    const sql = `DELETE FROM posts WHERE id = ?`

    // Eliminiamo la ricetta
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: `Impossibile cancellare la ricetta` });
        res.sendStatus(204)
    })
}


module.exports = { index, show, store, update, modify, destroy }

