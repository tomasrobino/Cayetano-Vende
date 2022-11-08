import ajedrezMain from "G:/Compumar/Coding/React/cayetanovende/src/assets/prodImgs/ajedrez/main.jpg";
import ajedrez1 from "G:/Compumar/Coding/React/cayetanovende/src/assets/prodImgs/ajedrez/1.jpg";
import ajedrez2 from "G:/Compumar/Coding/React/cayetanovende/src/assets/prodImgs/ajedrez/2.jpg";
import ajedrez3 from "G:/Compumar/Coding/React/cayetanovende/src/assets/prodImgs/ajedrez/3.jpg";


export default {
    ajedrez : {
        folder: "ajedrez",
        productName: "Ajedrez",
        price: 400,
        category: "boardgames",
        imgs: {
            main: ajedrez1,
        }
    },

    b : {
        folder: "b",
        productName: "second",
        price: 800,
        category: "4",
        imgs: {
            main: ajedrezMain,
        }
    },

    c : {
        folder: "c",
        productName: "third",
        price: 1000,
        category: "3",
        imgs: {
            main: ajedrez2,
        }
    }
}