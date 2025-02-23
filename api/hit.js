let totalRequests = 0;

export default function handler(req, res) {
    totalRequests++;
    res.status(200).json({ requests: totalRequests });
}
