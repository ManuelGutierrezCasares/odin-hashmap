import { HashMap, HashSet } from './classes.js';

// Test HashMap & HashSet

const hash = new HashMap();
hash.set('Carla');
console.log(hash.hash('Carla'));
hash.set('Carla');
hash.set('alraC');
hash.set('Pedro');
hash.set('Pedro');
console.log(hash.hash('solraC'));
hash.set('ordeP');

hash.set('Juancito');
hash.set('Leaon');
console.log(hash.length());
// hash.clear();
console.log(hash);
hash.set('Julia');
hash.set('alraC');
console.log(hash);

hash.set('Juancito');
hash.set('Leaon');
console.log(hash.length());
console.log(hash);
hash.set('Julia');
hash.set('alraC');

testHashMap(hash);
console.log(hash.length());
hash.clear();
testHashMap(hash);
console.log(hash.length());
console.log(hash.keys());
console.log(hash.values());

console.log(hash.entries());

// testHashMap(hash);
// console.log(hash.length());
// hash.clear();
// testHashMap(hash);
// console.log(hash.length());
// console.log(hash.keys());
// console.log(hash.values());

// console.log(hash.entries());

// const hash = new HashMap();
// hash.set('Carla', 'Perez');
// console.log(hash.hash('Carla'));
// hash.set('Carla', 'Gomez');
// hash.set('alraC', 'Pepito');
// hash.set('Pedro', 'Pepito');
// hash.set('Pedro', 'aklsDJASJKDS');
// console.log(hash.hash('solraC'));
// hash.set('ordeP', 'Juano');
// hash.set('edroP', 'kjasldkjasldjajlsd');
// hash.set('Julia', 'asd');
// console.log(hash);

// console.log(hash.get('Juanasdassdaaselo'));

// console.log(hash.has('Carla'));

// console.log(hash.remove('alraC'));

// console.log(hash);

// console.log(hash.length());

// hash.set('Juancito', 'kajdslkajs');
// hash.set('Leaon', 'lkocutas');
// console.log(hash.length());
// hash.clear();
// console.log(hash);
// hash.set('Julia', 'asd');
// hash.set('alraC', 'Pepito');

// testHashMap(hash);
// console.log(hash.length());
// hash.clear();
// testHashMap(hash);
// console.log(hash.length());
// console.log(hash.keys());
// console.log(hash.values());

// console.log(hash.entries());

function testHashMap (hash) {
  hash.set('Jua66ncito', 'jjjjjjjjjjjjjjjjjj');
  hash.set('Leaon66666213', 'kkkkkkkkkkkkkkk');
  hash.set('Juancito23', 'lllllllllllllll');
  hash.set('Lea23on', 'lkocutas');
  hash.set('Jua4ncito', 'kajdslkajs');
  hash.set('Le5aon', 'lkocutas');
  hash.set('Jqweua66nasdcito', 'kajdslkajs');
  hash.set('Lea1qet4on66666213', 'lkocutas');
  hash.set('Jua1trttewrtgq24ncito23', 'kajdslkajs');
  hash.set('Leasarfaf23on', 'lkocutas');
  hash.set('Juasddsaffncito', 'kajdslkajs');
  hash.set('Le5qewtqerwtdgewaon', 'lkocutas');
  hash.set('121412', 'lkocutas');
  hash.set('1241', 'kajdslkajs');
  hash.set('22222222', 'lkocutas');
  hash.set('Jua61231231236ncito', 'kajdslkajs');
  hash.set('Lea213124on66666213', 'lkocutas');
  hash.set('Jua124353453ncito23', 'kajdslkajs');
  hash.set('Lea4634623on', 'lkocutas');
  hash.set('Jua346344ncito', 'kajdslkajs');
  hash.set('Le5543435235aon', 'lkocutas');
  hash.set('Jqwe34234234ua66nasdcito', 'kajdslkajs');
  hash.set('Lea235231qet4on66666213', 'lkocutas');
  hash.set('Jua1t2352352rttewrtgq24ncito23', 'kajdslkajs');
  hash.set('Leas412312arfaf23on', 'lkocutas');
  hash.set('Juasd341212dsaffncito', 'kajdslkajs');
  hash.set('Le5qewtqerwtdgewaon', 'lkocutas');
  hash.set('fsdgf', 'lkocutas');
  hash.set('12gsdgfdsfgs41', 'kajdslkajs');
  hash.set('222dfgsertrewtw22222', 'lkocutas');
  hash.set('sadasdasfwedfa', 'kajdslkajs');
  hash.set('Lea2wr23423tsdag13124on66666213', 'lkocutas');
  hash.set('Jua12ewaqrtqwertqer4353453ncito23', 'kajdslkajs');
  hash.set('Lea4634623on', 'lkocutas');
  hash.set('Juadsfgfg346344ncito', 'kajdslkajs');
  hash.set('Le55cxvxcbfghgfvb43435235aon', 'lkocutas');
  hash.set('Jqwexdfgcxbcb34234234ua66nasdcito', 'kajdslkajs');
  hash.set('Lea23523thrtyer1qet4on66666213', 'lkocutas');
  hash.set('Jua1t2hdr352352rttewrtgq24ncito23', 'kajdslkajs');
  hash.set('Leas4123tert3423ert12arfaf23on', 'lkocutas');
  hash.set('Juasd34121ertertdsaffncito', 'kajdslkajs');
  hash.set('Le5qewtqerwtw42323421er2dgewaon', 'lkocutas');
  hash.set('fsd34235235gf', 'zzzzzzzzzzzzzz');
  hash.set('12g363463456sdgfdsfgs41', '12412zxczzx');
  hash.set('5698089089', 'asdqweqwe1q23');
  hash.set('5wqe654asd64as5d4fa65s4f64a5s', '54789798');
  return true;
}

function testHashSet (hash) {
  hash.set('Jua66ncito');
  hash.set('Leaon66666213');
  hash.set('Juancito23');
  hash.set('Lea23on');
  hash.set('Jua4ncito');
  hash.set('Le5aon');
  hash.set('Jqweua66nasdcito');
  hash.set('Lea1qet4on66666213');
  hash.set('Jua1trttewrtgq24ncito23');
  hash.set('Leasarfaf23on');
  hash.set('Juasddsaffncito');
  hash.set('Le5qewtqerwtdgewaon');
  hash.set('121412');
  hash.set('1241');
  hash.set('22222222');
  hash.set('Jua61231231236ncito');
  hash.set('Lea213124on66666213');
  hash.set('Jua124353453ncito23');
  hash.set('Lea4634623on');
  hash.set('Jua346344ncito');
  hash.set('Le5543435235aon');
  hash.set('Jqwe34234234ua66nasdcito');
  hash.set('Lea235231qet4on66666213');
  hash.set('Jua1t2352352rttewrtgq24ncito23');
  hash.set('Leas412312arfaf23on');
  hash.set('Juasd341212dsaffncito');
  hash.set('Le5qewtqerwtdgewaon');
  hash.set('fsdgf');
  hash.set('12gsdgfdsfgs41');
  hash.set('222dfgsertrewtw22222');
  hash.set('sadasdasfwedfa');
  hash.set('Lea2wr23423tsdag13124on66666213');
  hash.set('Jua12ewaqrtqwertqer4353453ncito23');
  hash.set('Lea4634623on');
  hash.set('Juadsfgfg346344ncito');
  hash.set('Le55cxvxcbfghgfvb43435235aon');
  hash.set('Jqwexdfgcxbcb34234234ua66nasdcito');
  hash.set('Lea23523thrtyer1qet4on66666213');
  hash.set('Jua1t2hdr352352rttewrtgq24ncito23');
  hash.set('Leas4123tert3423ert12arfaf23on');
  hash.set('Juasd34121ertertdsaffncito');
  hash.set('Le5qewtqerwtw42323421er2dgewaon');
  hash.set('fsd34235235gf');
  hash.set('12g363463456sdgfdsfgs41');
  hash.set('5698089089');
  hash.set('5wqe654asd64as5d4fa65s4f64a5s');
  return true;
}
