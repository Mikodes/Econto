import bcrypt from 'bcrypt';

export async function compareHashToString(hash: string, text: string): Promise<boolean> {
    const result: boolean = await bcrypt.compare(hash, text);
    return result;
}