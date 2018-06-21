import { heroes } from './HeroData';
import { log } from './Utils';

export const selectHero = (name: string) => {
    log.info(`Searching for hero "${ name }"`);
    const filteredHeroes = heroes.filter(hero => {
        return hero.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
    if (!filteredHeroes.length) {
        log.warn(`"${ name }" does not exist`);
        return;
    }
    if (filteredHeroes.length > 1) {
        const matches = filteredHeroes.map(hero => {
            return hero.name;
        });
        log.warn({ matches }, 'Multiple heroes found, please refine your search');
        return;
    }
    const hero = filteredHeroes[0];
    log.info(`${ hero.name } (a.k.a ${ hero.realName }) selected`);
    return hero;
}
