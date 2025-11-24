import connectDB from "../../../../../lib/dbConnection";
import Email from "../../../../../lib/models/email";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const email = await Email.findById(id);

    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(email), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error fetching email: " + error.message,
      }),
      { status: 500 }
    );
  }
}



