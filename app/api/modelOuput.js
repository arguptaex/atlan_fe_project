// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const { query } = req.body;
//         const result = calculateResult(query);
//         res.status(200).json({ result });
//     } else {
//         res.status(405).json({ message: 'Method Not Allowed' });
//     }
// }

export default function calculateResult(query) {
    // This is a placeholder function for the actual calculation
    return query.length * 2;
}