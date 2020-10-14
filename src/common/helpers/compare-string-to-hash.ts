import bcrypt from 'bcrypt';

export async function compareStringToHash(text: string, hash: string): Promise<boolean> {
    const result: boolean = await bcrypt.compare(text, hash);
    return result;
}