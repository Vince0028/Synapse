// Vercel Serverless Function for Brevo Email
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { websiteName, websiteUrl, description, senderEmail } = req.body;

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                sender: {
                    name: 'Synapse Suggestion',
                    email: 'noreply@synapse.dev',
                },
                to: [
                    {
                        email: process.env.ADMIN_EMAIL,
                        name: 'Synapse Admin',
                    },
                ],
                replyTo: {
                    email: senderEmail,
                },
                subject: `🔗 New Website Suggestion: ${websiteName}`,
                htmlContent: `
                    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
                            New Website Suggestion
                        </h2>
                        
                        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 0 0 10px 0;"><strong>📛 Website Name:</strong> ${websiteName}</p>
                            <p style="margin: 0 0 10px 0;"><strong>🔗 URL:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>
                            <p style="margin: 0 0 10px 0;"><strong>📧 Suggested by:</strong> ${senderEmail}</p>
                        </div>
                        
                        <div style="margin: 20px 0;">
                            <p><strong>📝 Description:</strong></p>
                            <p style="background: #fff; padding: 15px; border-left: 3px solid #8b5cf6; margin: 10px 0;">
                                ${description || 'No description provided.'}
                            </p>
                        </div>
                        
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
                        <p style="color: #6b7280; font-size: 12px;">
                            Sent from Synapse Dashboard - Suggestion Form
                        </p>
                    </div>
                `,
            }),
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            const error = await response.json();
            console.error('Brevo error:', error);
            return res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
}
