export interface IHero {
    name: string;
    realName: string;
    age: number | 'Unknown';
    role: 'Attack' | 'Defence' | 'Tank' | 'Support';
    ultimate: string;
    hp: {
        health: number;
        armour: number;
        sheild: number;
    };
    abilities: {
        primaryAttack?: IPrimaryAttack;
        passiveHeal?: IPassiveHeal;
    };
}

interface IPrimaryAttack {
    name: string;
    clipSize?: number;
    reloadTime?: number;
    damage: {
        max: number;
        min: number;
        falloff?: {
            start: number;
            finish: number;
        }
    }
    fireRate?: number;
    duration?: number;
    headshot: boolean;
};

interface IPassiveHeal {
    name: string;
    trigger: 'primaryAttack' | 'constant';
    healRate: {
        type: 'fixed' | 'percentage';
        amount: number;
    };
    buffer?: number;
    duration?: number;

}

export const heroes: IHero[] = [
    {
        name: 'Ana',
        realName: 'Ana Amari',
        age: 60,
        role: 'Support',
        ultimate: 'Nano Boost',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Biotic Rifle',
                clipSize: 14,
                reloadTime: 1.5,
                damage: {
                    max: 70,
                    min: 70
                },
                fireRate: 1.25,
                duration: 0.85,
                headshot: false
            }
        }
    },
    {
        name: 'Bastion',
        realName: 'SST Laboratories Siege Automaton E54',
        age: 30,
        role: 'Defence',
        ultimate: 'Configuration: Tank',
        hp: {
            health: 200,
            armour: 100,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Configuration: Recon',
                clipSize: 20,
                reloadTime: 2,
                damage: {
                    max: 20,
                    min: 6,
                    falloff: {
                        start: 26,
                        finish: 50
                    },
                },
                fireRate: 8,
                headshot: true
            }
        }
    },
    {
        name: 'Brigitte',
        realName: 'Brigitte Lindholm',
        age: 23,
        role: 'Support',
        ultimate: 'Rally',
        hp: {
            health: 200,
            armour: 50,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Rocket Flail',
                damage: {
                    max: 35,
                    min: 0,
                    falloff: {
                        start: 6,
                        finish: 6
                    }
                },
                fireRate: 2,
                headshot: false
            },
            passiveHeal: {
                name: 'Inspire',
                trigger: 'primaryAttack',
                healRate: {
                    type: 'fixed',
                    amount: 16
                },
                buffer: 1.5,
                duration: 5
            }
        }
    },
    {
        name: 'D.Va',
        realName: 'Hana Song',
        age: 19,
        role: 'Tank',
        ultimate: 'Self-Destruct',
        hp: {
            health: 400,
            armour: 200,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Fusion Cannons',
                damage: {
                    max: 22,
                    min: 6.6,
                    falloff: {
                        start: 10,
                        finish: 20
                    },
                },
                fireRate: 6.67,
                duration: 0,
                headshot: true
            }
        }
    },
    {
        name: 'Doomfist',
        realName: 'Akande Ogundimu',
        age: 45,
        role: 'Attack',
        ultimate: 'Meteor Strike',
        hp: {
            health: 250,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Hand Cannon',
                clipSize: 4,
                reloadTime: 0.75,
                damage: {
                    max: 66,
                    min: 0
                },
                fireRate: 3.3,
                headshot: true
    
            }
        }
    },
    {
        name: 'Genji',
        realName: 'Genji Shimada',
        age: 35,
        role: 'Attack',
        ultimate: 'Dragonblade',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Shuriken',
                clipSize: 8,
                reloadTime: 1,
                damage: {
                    max: 84,
                    min: 0
                },
                fireRate: 1,
                headshot: true
            }
        }
    },
    {
        name: 'Hanzo',
        realName: 'Hanzo Shimada',
        age: 38,
        role: 'Defence',
        ultimate: 'Dragonstrike',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Storm Bow',
                reloadTime: 0.5,
                damage: {
                    max: 125,
                    min: 0
                },
                fireRate: 1.25,
                headshot: true
            }
        }
    },
    {
        name: 'Junkrat',
        realName: 'Jamison Fawkes',
        age: 25,
        role: 'Defence',
        ultimate: 'RIP-Tire',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Frag Launcher',
                clipSize: 5,
                reloadTime: 1.5,
                damage: {
                    max: 120,
                    min: 0
                },
                fireRate: 1.66,
                headshot: false
            }
        }
    },
    {
        name: 'Lúcio',
        realName: 'Lucio Correia dos Santos',
        age: 26,
        role: 'Support',
        ultimate: 'Sound Barrier',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Sonic Amplifier',
                clipSize: 5,
                reloadTime: 1.25,
                damage: {
                    max: 80,
                    min: 0
                },
                fireRate: 1,
                headshot: true
            },
            passiveHeal: {
                name: 'Crossfade',
                trigger: 'constant',
                healRate: {
                    type: 'fixed',
                    amount: 13
                },
                buffer: 0.5
            }
        }
    },
    {
        name: 'McCree',
        realName: 'Jesse McCree',
        age: 37,
        role: 'Attack',
        ultimate: 'Dead Eye',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Peacekeeper',
                clipSize: 6,
                reloadTime: 1.5,
                damage: {
                    max: 70,
                    min: 20,
                    falloff: {
                        start: 20,
                        finish: 45
                    }
                },
                fireRate: 2,
                headshot: true
            }
        }
    },
    {
        name: 'Mei',
        realName: 'Mei-Ling Zhou',
        age: 31,
        role: 'Defence',
        ultimate: 'Blizzard',
        hp: {
            health: 250,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Endothermic Blaster: Icicle',
                clipSize: 8,
                reloadTime: 1.5,
                damage: {
                    max: 75,
                    min: 22,
                    falloff: {
                        start: 35,
                        finish: 55
                    }
                },
                fireRate: 1.17,
                headshot: true
            }
        }
    },
    {
        name: 'Mercy',
        realName: 'Angela Ziegler',
        age: 34,
        role: 'Support',
        ultimate: 'Valkyrie',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Caduceus Blaster',
                clipSize: 20,
                reloadTime: 1,
                damage: {
                    max: 20,
                    min: 0
                },
                fireRate: 5,
                headshot: true
            },
            passiveHeal: {
                name: 'Regeneration',
                trigger: 'constant',
                healRate: {
                    type: 'fixed',
                    amount: 20
                },
                buffer: 1
            }
        }
    },
    {
        name: 'Moira',
        realName: 'Moira O’Deorain',
        age: 48,
        role: 'Support',
        ultimate: 'Coalescence',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Biotic Grasp: Decay',
                damage: {
                    max: 50,
                    min: 0
                },
                headshot: false
            },
            passiveHeal: {
                name: 'Biotic Grasp: Decay',
                trigger: 'primaryAttack',
                healRate: {
                    type: 'fixed',
                    amount: 33
                },
            }
        }
    },
    {
        name: 'Orisa',
        realName: 'Orisa',
        age: 0.08,
        role: 'Tank',
        ultimate: 'Supercharger',
        hp: {
            health: 200,
            armour: 200,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Fusion Driver',
                clipSize: 0,
                reloadTime: 2.66,
                damage: {
                    max: 11,
                    min: 0
                },
                fireRate: 12.5,
                headshot: true
            }
        }
    },
    {
        name: 'Pharah',
        realName: 'Fareeha Amari',
        age: 32,
        role: 'Attack',
        ultimate: 'Barrage',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Rocket Launcher',
                clipSize: 6,
                reloadTime: 1,
                damage: {
                    max: 120,
                    min: 0
                },
                fireRate: 1.11,
                headshot: false
            }
        }
    },
    {
        name: 'Reaper',
        realName: 'Gabriel Reyes',
        age: 'Unknown',
        role: 'Attack',
        ultimate: 'Death Blossom',
        hp: {
            health: 250,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Hellfire Shotguns',
                clipSize: 8,
                reloadTime: 1.5,
                damage: {
                    max: 140,
                    min: 40,
                    falloff: {
                        start: 11,
                        finish: 20
                    }
                },
                fireRate: 2,
                headshot: true
            },
            passiveHeal: {
                name: 'The Reaping',
                trigger: 'primaryAttack',
                healRate: {
                    type: 'percentage',
                    amount: 20
                }
            }
        }
    },
    {
        name: 'Reinhardt',
        realName: 'Reinhardt Wilhelm',
        age: 61,
        role: 'Tank',
        ultimate: 'Hammer Down',
        hp: {
            health: 300,
            armour: 200,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Rocket Hammer',
                damage: {
                    max: 75,
                    min: 0,
                    falloff: {
                        start: 5,
                        finish: 5
                    }
                },
                fireRate: 1.1,
                headshot: false
            }
        }
    },
    {
        name: 'Roadhog',
        realName: 'Mako Rutledge',
        age: 48,
        role: 'Tank',
        ultimate: 'Whole Hog',
        hp: {
            health: 600,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Scrap Gun Blast',
                clipSize: 5,
                reloadTime: 1.5,
                damage: {
                    max: 150,
                    min: 32.5,
                    falloff: {
                        start: 11,
                        finish: 20
                    }
                },
                fireRate: 1.3,
                headshot: true
            }
        }
    },
    {
        name: 'Soldier: 76',
        realName: 'Jack Morrison',
        age: 'Unknown',
        role: 'Attack',
        ultimate: 'Tactical Visor',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Heavy Pulse Rifle',
                clipSize: 25,
                reloadTime: 1.5,
                damage: {
                    max: 19,
                    min: 5,
                    falloff: { 
                        start: 30,
                        finish: 55
                    }
                },
                fireRate: 8.66,
                headshot: true
            }
        }
    },
    {
        name: 'Sombra',
        realName: 'Olivia Colomar',
        age: 30,
        role: 'Attack',
        ultimate: 'EMP',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Machine Pistol',
                clipSize: 60,
                reloadTime: 1.5,
                damage: {
                    max: 8,
                    min: 2.4,
                    falloff: {
                        start: 15,
                        finish: 25
                    }
                },
                fireRate: 20,
                headshot: true
            }
        }
    },
    {
        name: 'Symmetra',
        realName: 'Satya Vaswan',
        age: 28,
        role: 'Support',
        ultimate: 'Teleporter/Sheild Matrix',
        hp: {
            health: 100,
            armour: 0,
            sheild: 100
        },
        abilities: {
            primaryAttack: {
                name: 'Photon Beam',
                clipSize: 100,
                reloadTime: 1.8,
                damage: {
                    max: 60,
                    min: 0,
                    falloff: {
                        start: 9.5,
                        finish: 9.5
                    }
                },
                fireRate: 7,
                headshot: false
            }
        }
    },
    {
        name: 'Torbjörn',
        realName: 'Torbjörn Lindholm',
        age: 57,
        role: 'Defence',
        ultimate: 'Molten Core',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Rivet Gun Shot',
                clipSize: 18,
                reloadTime: 2,
                damage: {
                    max: 70,
                    min: 0
                },
                fireRate: 1.67,
                headshot: true
            }
        }
    },
    {
        name: 'Tracer',
        realName: 'Lena Oxton',
        age: 26,
        role: 'Attack',
        ultimate: 'Pulse Bomb',
        hp: {
            health: 150,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Pulse Pistols',
                clipSize: 40,
                reloadTime: 1,
                damage: {
                    max: 6,
                    min: 1.5,
                    falloff: {
                        start: 11,
                        finish: 30
                    }
                },
                fireRate: 20,
                headshot: true
            }
        }
    },
    {
        name: 'Widowmaker',
        realName: 'Amélie Lacroix',
        age: 33,
        role: 'Defence',
        ultimate: 'Infra-Sight',
        hp: {
            health: 200,
            armour: 0,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Widow\'s Kiss (Scoped)',
                clipSize: 10,
                reloadTime: 1.5,
                damage: {
                    max: 120,
                    min: 0,
                    falloff: {
                        start: 0,
                        finish: 0
                    }
                },
                fireRate: 1,
                headshot: true
            }
        }
    },
    {
        name: 'Winston',
        realName: 'Winston',
        age: 29,
        role: 'Tank',
        ultimate: 'Primal Rage',
        hp: {
            health: 400,
            armour: 100,
            sheild: 0
        },
        abilities: {
            primaryAttack: {
                name: 'Tesla Cannon',
                clipSize: 100,
                reloadTime: 1.5,
                damage: {
                    max: 3,
                    min: 0,
                    falloff: {
                        start: 8,
                        finish: 8
                    }
                },
                fireRate: 20,
                headshot: false
            }
        }
    },
    {
        name: 'Zarya',
        realName: 'Aleksandra Zaranova',
        age: 28,
        role: 'Tank',
        ultimate: 'Graviton Surge',
        hp: {
            health: 200,
            armour: 0,
            sheild: 200
        },
        abilities: {
            primaryAttack: {
                name: 'Particle Energy Beam',
                clipSize: 100,
                reloadTime: 1.5,
                damage: {
                    max: 7,
                    min: 0,
                },
                fireRate: 20,
                headshot: false
            }
        }
    },
    {
        name: 'Zenyatta',
        realName: 'Tekhartha Zenyatta',
        age: 20,
        role: 'Support',
        ultimate: 'Transcendence',
        hp: {
            health: 50,
            armour: 0,
            sheild: 150
        },
        abilities: {
            primaryAttack: {
                name: 'Orb of Destruction',
                clipSize: 20,
                reloadTime: 2,
                damage: {
                    max: 46,
                    min: 0
                },
                fireRate: 2.5,
                headshot: true
            }
        }
    }
];
