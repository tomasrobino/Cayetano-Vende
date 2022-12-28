import ajedrezMain from "../../src/assets/prodImgs/ajedrez/main.jpg";
import ajedrez1 from "../../src/assets/prodImgs/ajedrez/1.jpg";
import ajedrez2 from "../../src/assets/prodImgs/ajedrez/2.jpg";
import ajedrez3 from "../../src/assets/prodImgs/ajedrez/3.jpg";

import powerRangersMain from "../../src/assets/prodImgs/4 en linea power rangers/main.jpg";
import powerRangers1 from "../../src/assets/prodImgs/4 en linea power rangers/1.jpg";
import powerRangers2 from "../../src/assets/prodImgs/4 en linea power rangers/2.jpg";
import powerRangers3 from "../../src/assets/prodImgs/4 en linea power rangers/3.jpg";
import powerRangers4 from "../../src/assets/prodImgs/4 en linea power rangers/4.jpg";

import backgammonMain from "../../src/assets/prodImgs/backgammon/main.jpg";
import backgammon1 from "../../src/assets/prodImgs/backgammon/1.jpg";
import backgammon2 from "../../src/assets/prodImgs/backgammon/2.jpg";
import backgammon3 from "../../src/assets/prodImgs/backgammon/3.jpg";
import backgammon4 from "../../src/assets/prodImgs/backgammon/4.jpg";

import bolonkiMain from "../../src/assets/prodImgs/bolonki/main.jpg";
import bolonki1 from "../../src/assets/prodImgs/bolonki/1.jpg";
import bolonki2 from "../../src/assets/prodImgs/bolonki/2.jpg";
import bolonki3 from "../../src/assets/prodImgs/bolonki/3.jpg";

export default {
    ajedrez: {
        folder: "ajedrez",
        productName: "Ajedrez",
        price: 400,
        category: "boardgames",
        imgs: {
            main: ajedrezMain,
            one: ajedrez1,
            two: ajedrez2,
            three: ajedrez3
        }
    },

    powerRangers: {
        folder: "4 en linea power rangers",
        productName: "4 En Linea: Power Rangers",
        price: 800,
        category: "boardgames",
        imgs: {
            main: powerRangersMain,
            one: powerRangers1,
            two: powerRangers2,
            three: powerRangers3,
            four: powerRangers4
        }
    },

    backgammon: {
        folder: "backgammon",
        productName: "Backgammon",
        price: 1000,
        category: "boardgames",
        imgs: {
            main: backgammonMain,
            one: backgammon1,
            two: backgammon2,
            three: backgammon3,
            four: backgammon4
        }
    },

    bolonki: {
        folder: "bolonki",
        productName: "Bolonki",
        price: 10,
        category: "boardgames",
        imgs: {
            main: bolonkiMain,
            one: bolonki1,
            two: bolonki2,
            three: bolonki3
        }
    }
}