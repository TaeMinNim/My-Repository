const quotes = [
{
    quote: "명언1",
    author: "말한놈1"    
},
{
    quote: "명언2",
    author: "말한놈3"    
},
{
    quote: "명언3",
    author: "말한놈3"    
},
{
    quote: "명언4",
    author: "말한놈4"    
},
{
    quote: "명언5",
    author: "말한놈5"    
},
{
    quote: "명언6",
    author: "말한놈6"    
},
{
    quote: "명언7",
    author: "말한놈7"    
},
{
    quote: "명언8",
    author: "말한놈8"    
},
{
    quote: "명언9",
    author: "말한놈9"    
},
{
    quote: "명언10",
    author: "말한놈10"    
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;