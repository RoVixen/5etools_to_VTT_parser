export const oldIdChars="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890"

export function generateOldId():string{
    const chars=oldIdChars.split("");

    return "-"+Array(19)
    .fill("-")
    .map(()=>chars[Math.floor(Math.random()*chars.length)])
    .join("")
}s