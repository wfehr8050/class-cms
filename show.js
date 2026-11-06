const db = require('./db');
    
    const rows = db.prepare('SELECT * FROM posts').all();
    console.log(rows);

    const rows = db.prepare('SELECT * FROM users').all();