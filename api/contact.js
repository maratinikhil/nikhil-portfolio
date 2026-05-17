import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    body = JSON.parse(body);
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#f8f9fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fa;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;">

          <!-- Blue top accent -->
          <tr>
            <td style="height:4px;background:#2563eb;"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding:28px 28px 20px;border-bottom:1px solid #f3f4f6;">
              <div style="width:44px;height:44px;border-radius:50%;background:#eff6ff;display:inline-flex;align-items:center;justify-content:center;margin-bottom:14px;">
                <span style="font-size:20px;">📬</span>
              </div>
              <div style="color:#111827;font-size:18px;font-weight:600;margin:0;">New message received</div>
              <div style="color:#6b7280;font-size:13px;margin-top:4px;">Someone reached out via your portfolio contact form</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:20px 28px;">

              <!-- From row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                <tr>
                  <td style="width:60px;color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">From</td>
                  <td style="color:#111827;font-size:13px;font-weight:500;padding:4px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="width:60px;color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Email</td>
                  <td style="padding:4px 0;"><a href="mailto:${email}" style="color:#2563eb;font-size:13px;text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="width:60px;color:#6b7280;font-size:12px;padding:4px 0;vertical-align:top;">Time</td>
                  <td style="color:#6b7280;font-size:12px;padding:4px 0;">${timestamp}</td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:#f3f4f6;margin:16px 0;"></div>

              <!-- Message -->
              <div style="color:#6b7280;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.05em;">Message</div>
              <div style="background:#f9fafb;border-radius:8px;padding:16px;font-size:13px;color:#374151;line-height:1.6;border-left:3px solid #2563eb;">
                ${message.replace(/\n/g, "<br/>")}
              </div>

            </td>
          </tr>

          <!-- Actions -->
          <tr>
            <td style="padding:0 28px 24px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:10px;">
                    <a href="mailto:${email}?subject=Re: Your message via portfolio" style="display:inline-block;background:#2563eb;color:#ffffff;padding:10px 20px;border-radius:20px;text-decoration:none;font-size:13px;font-weight:500;">Reply to ${name} →</a>
                  </td>
                  <td>
                    <a href="https://nikhil-portfolio-xi.vercel.app/" style="display:inline-block;background:#f3f4f6;color:#374151;padding:10px 20px;border-radius:20px;text-decoration:none;font-size:13px;font-weight:500;">View portfolio</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
         

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "marati.nikhil9@gmail.com",
      replyTo: email,
      subject: `⚡ New message from ${name} — Portfolio`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: error.message });
    }

    
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Catch error:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
