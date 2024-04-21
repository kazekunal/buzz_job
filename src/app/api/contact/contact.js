import mysql from 'mysql2/promise';

async function connect() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql@123",
        database: "pl9"
    });
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, phone, email, password, qualification, skills } = req.body;

        try {
            const connection = await connect();
            await connection.execute(`
                INSERT INTO users (username, phone, email, password, qualification, skills)
                VALUES (?, ?, ?, ?, ?, ?)
            `, [username, phone, email, password, qualification, skills]);

            await connection.end();
            res.status(200).json({ message: 'Data submitted successfully!' });
        } catch (error) {
            console.error('Failed to insert data:', error);
            res.status(500).json({ message: 'Failed to submit data' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
