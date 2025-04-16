import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, major, skills, message, resume } = await req.json();

    if (!email.endsWith("@asu.edu")) {
      return new Response(
        JSON.stringify({ message: "Email must be an ASU email." }),
        { status: 400 }
      );
    }

    // Extract base64 data and validate PDF
    if (!resume || !resume.startsWith("data:application/pdf")) {
      return new Response(
        JSON.stringify({ message: "Resume must be a PDF file." }),
        { status: 400 }
      );
    }

    // Extract base64 content
    const base64Data = resume.split(";base64,").pop();

    // Create filename from name
    const [firstName, ...lastNames] = name.trim().split(" ");
    const lastName = lastNames.length > 0 ? lastNames.join("_") : "NoLastName";
    const fileName = `${firstName}_${lastName}_Resume.pdf`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New DAA Application - ${name}`,
      text: `
New Application Details:
-----------------------
Name: ${name}
Email: ${email}
Major: ${major}
Skills: ${skills}

Message from applicant:
----------------------
${message}
`,
      attachments: [
        {
          filename: fileName,
          content: base64Data,
          encoding: "base64",
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Application sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending application:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send application" }),
      { status: 500 }
    );
  }
}
