//cards 
const gameHolder = document.querySelectorAll(".gameBoard");
const counter = cardImages.length;
const cardImages = [
    {
        name: "longcurls",
        img: "img/longcurls.jpg",
    },
    {
        name: "redfro.jpg",
        img: "img/redfro.jpg",
    },
    {
        name: "bob",
        img: "img/bob.jpg",
    },
    {
        name: "afro",
        img: "img/afro.jpg",
    },
    {
        name: "locs",
        img: "img/locs.jpg",
    },
    {
        name: "shortcurly",
        img: "img/shortcurly.jpg",
    },
    {
        name: "softwaves",
        img: "img/softwaves.jpg",
    },
    {
        name: "braids",
        img: "img/braids.jpg",
    },  
    {
        name: "curlypony",
        img: "img/curlypony.jpg",
    },
    {
        name: "longcurls",
        img: "img/longcurls.jpg",
    },
    {
        name: "redfro.jpg",
        img: "img/redfro.jpg",
    },
    {
        name: "bob",
        img: "img/bob.jpg",
    },
    {
        name: "afro",
        img: "img/afro.jpg",
    },
    {
        name: "locs",
        img: "img/locs.jpg",
    },
    {
        name: "shortcurly",
        img: "img/shortcurly.jpg",
    },
    {
        name: "softwaves",
        img: "img/softwaves.jpg",
    },
    {
        name: "braids",
        img: "img/braids.jpg",
    },  
    {
        name: "curlypony",
        img: "img/curlypony.jpg",
    }
]

function randomImg(max){
    return Math.floor(Math.random() * cardImages.length);
 }
