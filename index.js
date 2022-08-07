// const initialMemoryUsage = process.memoryUsage().heapUsed;
// const yourName = process.argv[2];
// const environment = process.env.NODE_ENV;
// 
// for(let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
// }
// 
// const currentMemoryUsage = process.memoryUsage().heapUsed;
// 
// console.log(`Hai, ${yourName}`);
// console.log(`Mode environment: ${environment}`)
// console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

const Wolf = require('./modularization/Wolf')
const Tiger = require('./modularization/Tiger')

const fightting = (tiger, wolf) => {
  if (tiger.stringth > wolf.stringth){
    tiger.growl();
    return;
  }
  if (wolf.stringth > tiger.stringth){
    wolf.howl();
    return;
  }

  console.log(`Tiger and Wolf have same stringht`)
}

const tiger = new Tiger();
const wolf = new Wolf();

fightting(tiger, wolf);
