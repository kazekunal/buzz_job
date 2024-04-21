import mysql from 'mysql2/promise';

async function connect() {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "mysql@123",
        database: "project"
    });
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        return;
    }

    const { username, phone, email, password, qualification, skills } = req.body;
    if (!username || !phone || !email || !password || !qualification || !skills) {
        res.status(400).json({ message: 'Missing required fields' });
        return;
    }

    let connection;

    try {
        connection = await connect();
        const [result] = await connection.execute(`
            INSERT INTO users (username, phone, email, password, qualification, skills)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [username, phone, email, password, qualification, skills]);

        console.log(result);
        res.status(200).json({ message: 'Data submitted successfully!' });
    } catch (error) {
        console.error('Failed to insert data:', error);
        res.status(500).json({ message: 'Failed to submit data', error: error.message });
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
