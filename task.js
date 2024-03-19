const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]];
let need = 4;
let arr = [];

for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    const rem = room[1] - room[0].length;
    if (rem >= 0) {
        const left = Math.min(rem, need); 
        arr.push(left); 
        need = need-left; 
        if (need === 0) {
            break; 
        }
    }
}
console.log(arr)