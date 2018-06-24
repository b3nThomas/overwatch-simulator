import { heroes } from './HeroData';
import { log } from './Utils';

export const selectHero = (name: string) => {
    const filteredHeroes = heroes.filter(hero => {
        return hero.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
    if (!filteredHeroes.length) {
        log.warn(`Hero "${ name }" not found. Please try again`);
        return;
    }
    if (filteredHeroes.length > 1) {
        const matches = filteredHeroes.map(hero => {
            return hero.name;
        });
        log.warn({ matches }, `Multiple heroes found for "${ name }", please refine your search`);
        return;
    }
    const hero = filteredHeroes[0];
    return hero;
}
