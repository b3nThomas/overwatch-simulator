# overwatch-simulator

`Simulate Overwatch battles using character data`

## Methods

```javascript
selectHero('so');
/*
22:49:39.553Z  INFO overwatch-simulator: Searching for hero "so"
22:49:39.554Z  WARN overwatch-simulator: Multiple heroes found, please refine your search
    matches: [
      "Soldier: 76",
      "Sombra"
    ]
*/

selectHero('76');
/*
22:51:08.786Z  INFO overwatch-simulator: Searching for hero "sol"
22:51:08.787Z  INFO overwatch-simulator: Soldier: 76 (a.k.a Jack Morrison) selected
*/
return {
    name: 'Soldier: 76',
    realname: 'Jack Morrison',
    age: 'Unknown',
    role: 'Attack',
    ultimate: 'Tactical Visor',
    hp: {
        health: 200,
        armor: 0,
        sheild: 0
    },
    abilities: [
        {
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
    ]
}
```
