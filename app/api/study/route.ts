import { hash } from "bcryptjs";

export async function POST(req: Request) {

    const { password, email } = await req.json();

    const hashedPassword = await hash(password, 10)

    
}