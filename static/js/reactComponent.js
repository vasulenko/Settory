function PromoCod(cof,dTime,mesg) {
    this.cof = cof,
    this.dTime = dTime,
    this.mesg = mesg    
}
var Fpromo = new PromoCod('10','2012-10-10','Blablabla1');
var Spromo = new PromoCod('20','2012-11-11','Blablabla2');
var Thpromo = new PromoCod('30','2012-12-12','Blablabla3');
var promoArr = [Fpromo,Spromo,Thpromo];

var ShowPromo = React.createClass({
    render: function(){
         var promoArrShow =  this.props.items.map(function(item){
             return (
                <div className="promoCodShow">
                <p>Промо на {item.cof}% дійсне до {item.dTime} код:{item.mesg}</p>
                <a className="deletepromo">Видалити</a>
                </div> 
             )
         });
        return (
            <div>{ promoArrShow }</div>
        )
    },
});
ReactDOM.render(<ShowPromo items={ promoArr } />, document.getElementById('TableContent'));
                  