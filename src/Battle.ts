import { IHero } from './HeroData';
import { log } from './Utils';

interface IHeroBattleData {
    heroName: string;
    healthState: IHealthState;
    weaponState: IWeaponState;
}

interface IHealthState {
    remainingArmour: number;
    remainingSheild: number;
    remainingHealth: number;
    isAlive: boolean;
}

interface IWeaponState {
    clipSize: number;
    remainingRounds: number;
    reloadTime: number;
    damagePerRound: number; // Will vary pending battleDistance
    timePerRound: number;
}

export class BattleSimulator {
    private hero1: IHeroBattleData;
    private hero2: IHeroBattleData;
    private range: number;

    constructor (hero1: IHero, hero2: IHero, range: number) {
        this.range = range;
        this.hero1 = this.getBattleData(hero1);
        this.hero2 = this.getBattleData(hero2);
        log.info(`${ hero1.name } vs ${ hero2.name }, Range: ${ this.range }m`);
    }

    private getBattleData(hero: IHero): IHeroBattleData {
        return {
            heroName: hero.name,
            healthState: {
                remainingArmour: hero.hp.armour,
                remainingSheild: hero.hp.sheild,
                remainingHealth: hero.hp.health,
                isAlive: true
            },
            weaponState: {
                clipSize: hero.abilities.primaryAttack.clipSize,
                remainingRounds: hero.abilities.primaryAttack.clipSize,
                reloadTime: hero.abilities.primaryAttack.reloadTime,
                damagePerRound: hero.abilities.primaryAttack.damage.max, // calculateDamage() based on range
                timePerRound: this.calculateTimePerRound(hero)
            }
        }
    }

    private calculateTimePerRound(hero: IHero): number {
        const clipSize = hero.abilities.primaryAttack.clipSize;
        const fireRate = hero.abilities.primaryAttack.fireRate;
        if (clipSize > 1) {
            return Math.round((1 / fireRate) * 100) / 100;
        }
        return fireRate;
    }

    private shouldAttack(frame: number, hero: IHeroBattleData): boolean {
        const attack = (frame * 100) % (hero.weaponState.timePerRound * 100) === 0;
        if (attack) {
            log.info(`${ hero.heroName } attacked`);
            return true;
        }
        return false;
    }

    private updateHealthState(damage: number, hero: IHeroBattleData): void {
        const hp = hero.healthState;

        if (hp.remainingArmour) {
            if (damage >= 10) {
                hp.remainingArmour -= damage - 5;
            } else if (damage < 10) {
                hp.remainingArmour -= damage / 2;
            }
            if (hp.remainingArmour < 0) {
                damage = Math.abs(hp.remainingArmour);
                hp.remainingArmour = 0
            } else {
                this.displayRemainingHp(hero);
                return;
            }
        }
        if (hp.remainingSheild) {
            hp.remainingSheild -= damage;
            if (hp.remainingSheild < 0) {
                damage = Math.abs(hp.remainingSheild);
                hp.remainingSheild = 0;
            } else {
                this.displayRemainingHp(hero);
                return;
            }
        }
        hp.remainingHealth -= damage;
        if (hp.remainingHealth <= 0) {
            hp.isAlive = false;
            hp.remainingHealth = 0;
        }
        this.displayRemainingHp(hero);
        return;
    }

    private displayRemainingHp(hero: IHeroBattleData): void {
        const hp = hero.healthState;
        const totalHp = hp.remainingArmour + hp.remainingSheild + hp.remainingHealth;
        log.info(`${ hero.heroName } has ${ totalHp } remaining`);
    }

    public async start() {
        let frame: number = 0;

        while (this.hero1.healthState.isAlive && this.hero2.healthState.isAlive) {
            if (this.shouldAttack(frame, this.hero2)) {
                this.updateHealthState(this.hero2.weaponState.damagePerRound, this.hero1);
            }
            if (this.shouldAttack(frame, this.hero1)) {
                this.updateHealthState(this.hero1.weaponState.damagePerRound, this.hero2);
            }
            frame = Math.round((frame * 100) + 1) / 100; // Increment frame by 0.01
        }

        let winner;
        let loser;

        if (this.hero1.healthState.isAlive) {
            winner = this.hero1.heroName;
            loser = this.hero2.heroName;
        } else {
            winner = this.hero2.heroName;
            loser = this.hero1.heroName;
        }

        log.info(`${ winner } defated ${ loser } in ${ frame }s`);
    }
}
