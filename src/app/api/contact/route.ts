import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Console log the transmission payload
    console.log("----------------------------------------");
    console.log("TRANSMISSION INCOMING (Portfolio Contact):");
    console.log(`From:    ${name} (${email})`);
    console.log(`Message: ${message}`);
    console.log("----------------------------------------");

    // Integration check for Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_RECEIVER_EMAIL || email,
            subject: `New Message from ${name} via Portfolio`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          console.error("Resend API failed:", errData);
          // Don't crash client, fallback to mock success
        }
      } catch (emailError) {
        console.error("Failed to transmit email via Resend:", emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message payload received and logged successfully.",
        simulated: !resendApiKey,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
