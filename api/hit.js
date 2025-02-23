export default function handler(req, res) {
    res.status(200).json({ requests: Math.floor(Math.random() * 100) });
}
