import { log } from './src/Utils';
import { selectHero } from './src/SelectHero';
import { BattleSimulator } from './src/Battle';

log.info('Starting simulation...');

const hero1 = selectHero('sombra');
const hero2 = selectHero('76');
const range = 1;

if (hero1 && hero2) {
    new BattleSimulator(hero1, hero2, range).start();
}
