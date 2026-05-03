// mulberry32 taken from https://github.com/cprosche/mulberry32
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

const random_mulberry = mulberry32((new Date()).getTime());

var seeded_random = random_mulberry();

console.log(`randomly chosen number: ${seeded_random}`);