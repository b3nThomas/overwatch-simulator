import { log } from './src/Utils';
import { selectHero } from './src/SelectHero';

log.info('The world could always use more heroes...');

const hero = selectHero('sol');
