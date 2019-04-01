//DOM variables
var hide = "none",
    show = "block",
    tradeDiv = [document.getElementById("tradeOneDiv"),
              document.getElementById("tradeTwoDiv"),
              document.getElementById("tradeThreeDiv"),
              document.getElementById("tradeFourDiv"),
              document.getElementById("tradeFiveDiv"),
              document.getElementById("tradeSixDiv"),
              document.getElementById("tradeSevenDiv"),
              document.getElementById("tradeEightDiv"),
              document.getElementById("tradeNineDiv"),
              document.getElementById("tradeTenDiv")],
    tradeSpn = [document.getElementById("tradeOneSpn"),
                document.getElementById("tradeTwoSpn"),
                document.getElementById("tradeThreeSpn"),
                document.getElementById("tradeFourSpn"),
                document.getElementById("tradeFiveSpn"),
                document.getElementById("tradeSixSpn"),
                document.getElementById("tradeSevenSpn"),
                document.getElementById("tradeEightSpn"),
                document.getElementById("tradeNineSpn"),
                document.getElementById("tradeTenSpn"),],
    tradeBtn = [document.getElementById("tradeOneBtn"),
                document.getElementById("tradeTwoBtn"),
                document.getElementById("tradeThreeBtn"),
                document.getElementById("tradeFourBtn"),
                document.getElementById("tradeFiveBtn"),
                document.getElementById("tradeSixBtn"),
                document.getElementById("tradeSevenBtn"),
                document.getElementById("tradeEightBtn"),
                document.getElementById("tradeNineBtn"),
                document.getElementById("tradeTenBtn"),],
    tradeBuySell = [document.getElementById("tradeOneBuySell"),
                    document.getElementById("tradeTwoBuySell"),
                    document.getElementById("tradeThreeBuySell"),
                    document.getElementById("tradeFourBuySell"),
                    document.getElementById("tradeFiveBuySell"),
                    document.getElementById("tradeSixBuySell"),
                    document.getElementById("tradeSevenBuySell"),
                    document.getElementById("tradeEightBuySell"),
                    document.getElementById("tradeNineBuySell"),
                    document.getElementById("tradeTenBuySell"),],
    tradePrice = [document.getElementById("tradeOnePrice"),
                  document.getElementById("tradeTwoPrice"),
                  document.getElementById("tradeThreePrice"),
                  document.getElementById("tradeFourPrice"),
                  document.getElementById("tradeFivePrice"),
                  document.getElementById("tradeSixPrice"),
                  document.getElementById("tradeSevenPrice"),
                  document.getElementById("tradeEightPrice"),
                  document.getElementById("tradeNinePrice"),
                  document.getElementById("tradeTenPrice"),];
//JS variables
var started = false,
    empty = false,
    money = 1000000,
    trade = [0,
             0,
             0,
             0,
             0,
             0,
             0,
             0,
             0,
             0];

//[document.getElementById("tradeOne"),
//document.getElementById("tradeTwo"),
//document.getElementById("tradeThree"),
//document.getElementById("tradeFour"),
//document.getElementById("tradeFive"),
//document.getElementById("tradeSix"),
//document.getElementById("tradeSeven"),
//document.getElementById("tradeEight"),
//document.getElementById("tradeNine"),
//document.getElementById("tradeTen"),];

console.log("Trade.js is Running");
//Event listeners
document.getElementById("GBPUSDBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("GBPUSD");
        saveTrade("GBPUSD", Buy, "BUY");
        buttonPressed("GBPUSDBuy");
    }
);
document.getElementById("GBPUSDSell").addEventListener("click",
    function(){
        var Sell = sellFunction("GBPUSD");
        saveTrade("GBPUSD", Sell, "SELL");
        buttonPressed("GBPUSDSell");
    }
);
document.getElementById("GBPEURBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("GBPEUR");
        saveTrade("GBPEUR", Buy, "BUY");
        buttonPressed("GBPEURBuy");
    }
);
document.getElementById("GBPEURSell").addEventListener("click",
    function(){
        var Sell = sellFunction("GBPEUR");
        saveTrade("GBPEUR", Sell, "SELL");
        buttonPressed("GBPEURSell");
    }
);
document.getElementById("GBPJPYBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("GBPJPY");
        saveTrade("GBPJPY", Buy, "BUY");
        buttonPressed("GBPJPYBuy");
    }
);
document.getElementById("GBPJPYSell").addEventListener("click",
    function(){
        var Sell = sellFunction("GBPJPY");
        saveTrade("GBPJPY", Sell, "SELL");
        buttonPressed("GBPJPYSell");
    }
);
document.getElementById("GBPBTCBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("GBPBTC");
        saveTrade("GBPBTC", Buy, "BUY");
        buttonPressed("GBPBTCBuy");
    }
);
document.getElementById("GBPBTCSell").addEventListener("click",
    function(){
        var Sell = sellFunction("GBPBTC");
        saveTrade("GBPBTC", Sell, "SELL");
        buttonPressed("GBPBTCSell");
    }
);
document.getElementById("GBPETHBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("GBPETH");
        saveTrade("GBPETH", Buy, "BUY");
        buttonPressed("GBPETHBuy");
    }
);
document.getElementById("GBPETHSell").addEventListener("click",
    function(){
        var Sell = sellFunction("GBPETH");
        saveTrade("GBPETH", Sell, "SELL");
        buttonPressed("GBPETHSell");
    }
);
document.getElementById("GBPLTCBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("GBPLTC");
        saveTrade("GBPLTC", Buy, "BUY");
        buttonPressed("GBPLTCBuy");
    }
);
document.getElementById("GBPLTCSell").addEventListener("click",
    function(){
        var Sell = sellFunction("GBPLTC");
        saveTrade("GBPLTC", Sell, "SELL");
        buttonPressed("GBPLTCSell");
    }
);
document.getElementById("USDEURBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("USDEUR");
        saveTrade("USDEUR", Buy, "BUY");
        buttonPressed("USDEURBuy");
    }
);
document.getElementById("USDEURSell").addEventListener("click",
    function(){
        var Sell = sellFunction("USDEUR");
        saveTrade("USDEUR", Sell, "SELL");
        buttonPressed("USDEURSell");
    }
);
document.getElementById("USDJPYBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("USDJPY");
        saveTrade("USDJPY", Buy, "BUY");
        buttonPressed("USDJPYBuy");
    }
);
document.getElementById("USDJPYSell").addEventListener("click",
    function(){
        var Sell = sellFunction("USDJPY");
        saveTrade("USDJPY", Sell, "SELL");
        buttonPressed("USDJPYSell");
    }
);
document.getElementById("USDBTCBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("USDBTC");
        saveTrade("USDBTC", Buy, "BUY");
        buttonPressed("USDBTCBuy");
    }
);
document.getElementById("USDBTCSell").addEventListener("click",
    function(){
        var Sell = sellFunction("USDBTC");
        saveTrade("USDBTC", Sell, "SELL");
        buttonPressed("USDBTCSell");
    }
);
document.getElementById("USDETHBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("USDETH");
        saveTrade("USDETH", Buy, "BUY");
        buttonPressed("USDETHBuy");
    }
);
document.getElementById("USDETHSell").addEventListener("click",
    function(){
        var Sell = sellFunction("USDETH");
        saveTrade("USDETH", Sell, "SELL");
        buttonPressed("USDETHSell");
    }
);
document.getElementById("USDLTCBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("USDLTC");
        saveTrade("USDLTC", Buy, "BUY");
        buttonPressed("USDLTCBuy");
    }
);
document.getElementById("USDLTCSell").addEventListener("click",
    function(){
        var Sell = sellFunction("USDLTC");
        saveTrade("USDLTC", Sell, "SELL");
        buttonPressed("USDLTCSell");
    }
);
document.getElementById("EURJPYBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("EURJPY");
        saveTrade("EURJPY", Buy, "BUY");
        buttonPressed("EURJPYBuy");
    }
);
document.getElementById("EURJPYSell").addEventListener("click",
    function(){
        var Sell = sellFunction("EURJPY");
        saveTrade("EURJPY", Sell, "SELL");
        buttonPressed("EURJPYSell");
    }
);
document.getElementById("EURBTCBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("EURBTC");
        saveTrade("EURBTC", Buy, "BUY");
        buttonPressed("EURBTCBuy");
    }
);
document.getElementById("EURBTCSell").addEventListener("click",
    function(){
        var Sell = sellFunction("EURBTC");
        saveTrade("EURBTC", Sell, "SELL");
        buttonPressed("EURBTCSell");
    }
);
document.getElementById("EURETHBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("EURETH");
        saveTrade("EURETH", Buy, "BUY");
        buttonPressed("EURETHBuy");
    }
);
document.getElementById("EURETHSell").addEventListener("click",
    function(){
        var Sell = sellFunction("EURETH");
        saveTrade("EURETH", Sell, "SELL");
        buttonPressed("EURETHSell");
    }
);
document.getElementById("EURLTCBuy").addEventListener("click",
    function(){
        var Buy = buyFunction("EURLTC");
        saveTrade("EURLTC", Buy, "BUY");
        buttonPressed("EURLTCBuy");
    }
);
document.getElementById("EURLTCSell").addEventListener("click",
    function(){
        var Sell = sellFunction("EURLTC");
        saveTrade("EURLTC", Sell, "SELL");
        buttonPressed("EURLTCSell");
    }
);
tradeBtn[0].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[0].innerHTML;
        buySell = tradeBuySell[0].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 0,buySell);
    }
);
tradeBtn[1].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[1].innerHTML;
        buySell = tradeBuySell[1].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 1,buySell);
    }
);
tradeBtn[2].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[2].innerHTML;
        buySell = tradeBuySell[2].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 2,buySell);
    }
);
tradeBtn[3].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[3].innerHTML;
        buySell = tradeBuySell[3].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 3,buySell);
    }
);
tradeBtn[4].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[4].innerHTML;
        buySell = tradeBuySell[4].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 4,buySell);
    }
);
tradeBtn[5].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[5].innerHTML;
        buySell = tradeBuySell[5].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 5,buySell);
    }
);
tradeBtn[6].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[6].innerHTML;
        buySell = tradeBuySell[6].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 6,buySell);
    }
);
tradeBtn[7].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[7].innerHTML;
        buySell = tradeBuySell[7].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 7,buySell);
    }
);
tradeBtn[8].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[8].innerHTML;
        buySell = tradeBuySell[8].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 8,buySell);
    }
);
tradeBtn[9].addEventListener("click",
    function(){
        var currencies, buySell;
        currencies = tradeSpn[9].innerHTML;
        buySell = tradeBuySell[9].innerHTML;
        closeTrade(currencies, "tradeOnePrice", 9,buySell);
    }
);

//Trading Functions
function updatePrice(){
    document.getElementById("money").innerHTML = "£" + money;
    console.log("updatePrice() has run.")
}
function closeTrade(currencies, TradeDiv, button, buySell){
    var openPrice, closePrice, difference, profit;
    hideClass(tradeDiv[button]);
    trade[button] = 0
    openPrice = tradePrice[button].innerHTML;
    if(buySell == "BUY"){
        closePrice = buyFunction(currencies);
        difference = closePrice - openPrice;
    }else if(buySell == "SELL"){
        closePrice = sellFunction(currencies);
        difference = openPrice - closePrice;
    }else{
        console.log("closeTrade() buySell ERROR.");
    }
    profit = Math.round(difference * 1000000.00);
    money = 1000000.00 + profit;
    updatePrice();
    console.log("Trade " + button + " has been closed.");
    console.log("closeTrade() has run.")
}
function saveTrade(currencies,Trade,buySell){
    var i = 0;
    while (empty === false){
        if(trade[i] === 0){
            money = money - 1000000;
            trade[i] = Trade;
            showClass(tradeDiv[i]);
            tradeBuySell[i].innerHTML = buySell;
            tradeSpn[i].innerHTML = currencies; 
            tradePrice[i].innerHTML = trade[i];
            empty = true;
        }
        i++;
    }
    empty = false;
    console.log("saveTrade() has run.")
}
function buyFunction(currencies){
    var buy;
    buy = parseFloat(document.getElementById(currencies).getAttribute("data-bid"));
    return buy;
}
function sellFunction(currencies){
    var sell;
    sell = parseFloat(document.getElementById(currencies).getAttribute("data-ask"));
    return sell;
}
function hideClass(div){
    if(started === false){
        for(var i = 0;i < 10;i++){
            tradeDiv[i].style.display = hide;
        }
        started = true;
        //console.log("started = " + started);
    }else if(started === true){
        div.style.display = hide;
        //console.log("started = " + started);
    }else{
        console.log("hideClass() ERROR")
    }
    console.log("hideClass() has run.")
}
function showClass(div){
    div.style.display = show;
    console.log("showClass() has run.")
}
function buttonPressed(currencies){
    console.log(currencies + " has been pressed.");
}
hideClass();
updatePrice();