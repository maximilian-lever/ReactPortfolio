function ForexTicker(update_interval,max_updates){
    this.update_interval=update_interval||500;
    this.max_updates=max_updates||1000;
    this.current_updates=0;
    this.max_threads=1;
    this.threads=0;this.start();
}
ForexTicker.fields=function(){
    return['price','bid','ask'];
};

ForexTicker.prototype.start=function(){
    ForexTicker.updateQuotes(null,true);
    var self=this;
    this.interval=setInterval(
        function(){
            if(self.current_updates>self.max_updates){
                self.stop();
            }
            if(self.threads>=self.max_threads){
                return;
            }
            self.threads++;
            ForexTicker.updateQuotes(
                function(){
                    self.threads--;self.current_updates++;
                });
        },
        this.update_interval);
};

ForexTicker.prototype.stop=function(){
    clearInterval(this.interval);
};

ForexTicker.isScrolledIntoView=function(elem){
    var leeway=50;
    var docViewTop=$(window).scrollTop();
    var docViewBottom=docViewTop+$(window).height();
    var elemTop=$(elem).offset().top;
    var elemBottom=elemTop+$(elem).height();
    return((elemBottom<=docViewBottom)&&(elemTop>=docViewTop));
};

ForexTicker.allVisibleCurrencyPairs=function(){
    var pairs=[];
    $('[data-currency-pair]').each(
        function(){
            if(ForexTicker.isScrolledIntoView($(this))){
                pairs.push($(this).attr('data-currency-pair'));
            }
        });
    return pairs;};

ForexTicker.allCurrencyPairsOnPage=function(){
    var pairs=[];
    $('[data-currency-pair]').each(function(){
        pairs.push($(this).attr('data-currency-pair'));
    });
    return pairs;
};

ForexTicker.updateQuotes=function(when_done,force_all){
    var all_pairs=[];
    if(force_all){
        all_pairs=ForexTicker.allCurrencyPairsOnPage();
    }else{
        all_pairs=ForexTicker.allVisibleCurrencyPairs();
    }
    $.ajax({url:"https://forex.1forge.com/1.0.3/quotes?api_key=0JHZqgJf7V3tvd7BA3MGThQB3NqVX7F9&referer="+window.location.hostname+"&pairs="+all_pairs.join(',')}).done(function(response){
        for(var i=0;i<response.length;i++){
            var item=response[i];
            var jquery_object=$('[data-currency-pair='+item.symbol+']').first();
            var fields=ForexTicker.fields();
            for(var j=0;j<fields.length;j++){
                var field=fields[j];
                var current_value=parseFloat(jquery_object.attr('data-'+field));
                var new_value=item[field].toFixed(5);
                if(current_value!==new_value){
                    jquery_object.attr('data-'+field,new_value);jquery_object.find(".bottom ."+field).text(new_value.substring(0,7));
                }
                var direction='';
                var transition='';
                if(new_value-current_value>0){
                    direction='up';
                }else if(new_value-current_value<0){
                    direction='down';
                }
                if(direction===''){
                    direction='transition';
                }
                jquery_object.find(".bottom ."+field).removeClass('up down even transition').addClass(direction);
            }
        }
        if(when_done){
            when_done();
        }
    });
};