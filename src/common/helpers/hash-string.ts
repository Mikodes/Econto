import bcrypt from 'bcrypt';

export async function hashString(text: string): Promise<string> {
    const hashedString: string = await bcrypt.hash(text, 12);
    return hashedString;
}