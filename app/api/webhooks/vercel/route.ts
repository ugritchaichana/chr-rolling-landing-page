import { NextResponse } from 'next/server';

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1520481764370284698/ilXp4SUMxx4AHpT5scDVA_oK7UqAjOsaPJRYDNcKq6dRUSxmqk_SO04R2hSaCbY86cvp";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Vercel Webhook Types: deployment.succeeded, deployment.error, deployment.canceled
    const type = body.type;
    
    // Only process deployment events
    if (!type || !type.startsWith('deployment.')) {
      return NextResponse.json({ message: 'Ignored' });
    }

    const payload = body.payload;
    if (!payload || !payload.deployment) {
      return NextResponse.json({ message: 'Invalid payload' }, { status: 400 });
    }

    const deployment = payload.deployment;
    
    // Extract info
    const branch = deployment.meta?.githubCommitRef || 'Unknown Branch';
    const url = `https://${deployment.url}`;
    const deployId = deployment.id;
    // Construct Vercel Dashboard URL for logs
    const logsUrl = `https://vercel.com/ugritchaichana/chr-rolling-landing-page/${deployId}`;

    // Calculate Timestamp
    const date = new Date();
    // Discord supports Unix timestamps which automatically format to the user's local timezone (e.g. GMT+7)
    // <t:UNIX_TIMESTAMP:F> shows "Tuesday, 20 April 2021 16:20"
    const unixTime = Math.floor(date.getTime() / 1000);

    let color = 3066993; // Green for success
    let title = "✅ Vercel Deployment Successful";
    let description = `**Branch:** \`${branch}\`\n**URL:** [View Deployment](${url})\n**Status:** 🟢 Success\n**Time:** <t:${unixTime}:F>`;

    if (type === 'deployment.error' || type === 'deployment.canceled') {
      color = 15158332; // Red for error
      title = "❌ Vercel Deployment Failed";
      description = `**Branch:** \`${branch}\`\n**URL:** [View Deployment](${url})\n**Status:** 🔴 Failed / Error\n**Time:** <t:${unixTime}:F>\n\n**Error Logs:** [View Logs Here](${logsUrl})`;
    }

    const discordPayload = {
      embeds: [
        {
          title: title,
          description: description,
          color: color,
        }
      ]
    };

    // Send to Discord
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload)
    });
    
    if (!response.ok) {
      console.error("Discord webhook failed:", await response.text());
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
