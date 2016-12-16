$(document).ready(function(){
ReactDOM.render(<OrderBox />, document.getElementById('reactBox'))
console.log("111")         
})

function PromoCod(cof,dTime,mesg) {
    this.cof = cof,
    this.dTime = dTime,
    this.mesg = mesg    
}
function dataCod(mail,dTime,phone) {
    this.mail = mail,
    this.dTime = dTime,
    this.phone = phone    
}
function orderCod(numberValue,mail,phone,adress,room,dTimeH,dTimeD,option,pay,status) {
    this.numberValue = numberValue,
    this.mail = mail,
    this.phone = phone,
    this.adress = adress,
    this.room = room,
    this.dTimeH = dTimeH,
    this.dTimeD = dTimeD,
    this.option = option,
    this.pay = pay,
    this.status = status
}
var data1 = new dataCod('1asdasf@mail','2012-10-10','000665');
var data2 = new dataCod('2f@mail','2012-11-11','000665555');
var data3 = new dataCod('3f@mail','2012-12-12','000');
var Fpromo = new PromoCod('10','2012-10-10','Blablabla1');
var Spromo = new PromoCod('20','2012-11-11','Blablabla2');
var Thpromo = new PromoCod('30','2012-12-12','Blablabla3');
var order1 = new orderCod(1,'blabla@mail.com','0935556644','ShitIt st',2,'20:16','2k16',[1,2],500,false);
var order2 = new orderCod(2,'albalb@mail.com','0932223311','ShitHi st',1,'20:15','2k14',[1,4],600,false);
var order3 = new orderCod(3,'lablab@mail.com','0507778899','ShitHer st',3,'20:20','2k15',[1,3],700,true);

var dataArr = [data1,data2,data3];
var promoArr = [Fpromo,Spromo,Thpromo];
var orderArr = [order1,order2,order3];

var FilterOrder = React.createClass({
      getInitialState: function(){
      let defaultArr = this.props.itemsIn
     return {
       defaultArr,
       items: []
     }
  },
    componentWillMount: function(){
    this.setState({items: this.state.defaultArr})
  },
   
    ActiveFilter: function(){
        var updatedList = this.state.defaultArr;
        updatedList = updatedList.filter(function(item){
            if(item.status == false) {
                return item
            }
        })
        this.setState({items: updatedList});
    },
    componentDidMount: function(){
         var updatedList = this.state.defaultArr;
        updatedList = updatedList.filter(function(item){
            if(item.status == false) {
                return item
            }
        })
        this.setState({items: updatedList});
    },
    FilterList: function(){
        var updatedList = this.state.defaultArr;
        updatedList = updatedList.filter(function(item){
            if(item.status == true) {
                return item
            }
        })
        this.setState({items: updatedList});
    },
    render: function(){
        
        return (<div>
            <div className="wrapperNav">
        <div className="navText">
          <p><strong>Ваші прибирання</strong>
            Заплануйте нові прибирання та контролюйте вже заплановані</p>
        </div> 
      </div>
            <div>
            <div className="navButton">
            <div className="firstButtonBlock">
                <a className="button is-info" onClick={this.ActiveFilter}>Заплановані прибирання</a>
                <a className="button" onClick={this.FilterList}>Проведені прибирання</a>
            </div>
                <a className="button is-success" href="order.html">Замовити прибирання</a>
        </div>
        <ShowOrder itemsIn={this.state.items}/>
                </div>
                </div>
            )
    }
});
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
            <div>
            <div className="wrapperPromoCreate">
        <h2>Промокоди</h2>
        <form id="promoCreate">
          <p className="control has-addons">
            <input className="input" type="text" placeholder="процент" required />
            <a className="button">
              %
            </a>
          </p>
          <p className="control has-addons">
            <input type="text" className="input" required onfocus="this.select();lcs(this)" onclick="event.cancelBubble=true;this.select();lcs(this)" placeholder="dd/mm/yyyy" />
            <a className="button">
              DATE
            </a>
          </p>
          <p className="control has-addons">
            <input className="input" type="text" placeholder="код" />
            <a className="button">
              CODE
            </a>
          </p>
          <p className="control">
            <button className="button is-success" type="submit">
              Додати промо
            </button>
          </p>
        </form>
      </div>
            <div className="promoShowContent">{ promoArrShow }</div>
            </div>
        )
    },
});
var ShowOrderWrap = React.createClass({
    render: function(){
        return (
        <div>
            <div className="wrapperNav">
        <div className="navText">
          <p><strong>Замовлення</strong>
            Опрацювати кожне необхідно протягом 5 хвилин</p>
        </div>
      </div>
            <ShowOrder itemsIn={ orderArr } />
    </div>
        )
    }
});
var ShowOrder = React.createClass({
    render: function(){
        var list = this.props.itemsIn.map(function(item){
            var el = [];
            var statusChecked;
            var arr = item.option.map(function(items){
                if(items == 1) el.push('Миття вікон')
                if(items == 2) el.push('Миття посуду')
                if(items ==3) el.push('Чистка холодильника')
                if(items == 4) el.push('Чистка духовки')
                if(items == 5) el.push('Прасування')
            })
            if(item.status == false) {
                statusChecked = 'Активно'
            }
            else {statusChecked = 'Завершено'
                 }
            var length = el.map(function(option){
                return (
                    <li>{ option }</li>
                )
            });
             return (
                <tr>
                    <td>{item.numberValue}</td>
                    <td>{item.mail}</td>
                    <td>{item.phone}</td>
                    <td>{item.adress}</td>
                    <td>{item.room}</td>
                    <td>{item.dTimeH} {item.dTimeD}</td>
                    <td><ul>{length}</ul>
                    </td>
                    <td>{item.pay}</td>
                    <td>{statusChecked}</td>
                </tr> 
             )
         });
        return (
            
            <table className="table is-narrow">
            <tbody>
            <tr>
                <td><strong>#</strong></td>
                <td><strong>Пошта</strong></td>
                <td><strong>Номер телефону</strong></td>
                <td><strong>Адреса</strong></td>
                <td><strong>К</strong></td>
                <td><strong>Час  і  дата</strong></td>
                <td><strong>Опції</strong></td>
                <td><strong>Сплачено</strong></td>
                <td><strong>Статус</strong></td>
            </tr>
             { list }
            </tbody>
            </table>
            
        )
    }
});
var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.defaultArr;
    updatedList = updatedList.filter(function(item){
        if(item.mail.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1)
      return item.mail.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
        else 
            return item.phone.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
      let defaultArr = this.props.itemsIn
     return {
       defaultArr,
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.defaultArr})
  },
  render: function(){
    return (
        <div>
        <div className="wrapperNav">
        <div className="navText">
          <p><strong>Наші клієнти</strong>
            Інформація про них</p>
        </div>
      </div>
      <div className="filter-list">
        <input className="input" type="text" placeholder="Phone number or Email adress" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
        </div>
    );
  }
});
var List = React.createClass({
    render: function(){
    let promoArrShow =  this.props.items.map(function(item){
             return (
                <div className="vueCodShow">
                     <div className="vueMesg">
                        <h2> {item.mail} </h2>
                        <p> {item.phone} </p>
                    </div>
                    <div className="vueRightBlock"> 
                        <p>Joined</p>
                        <div className="vueMesg">
                            <h2>{item.dTime}</h2>
                            <a>Детальніше</a>
                        </div>
                     </div>
                 </div>
                 
             )
         });
        return (
            <div> { promoArrShow } </div>
  )
    }
});
var OrderBox = React.createClass({
    render: function(){
        return (
      <div className="wrapperOrderBlock">
        <form id="orderForm">
          <div className="orderBlock">
            <label className="label">Адреса квартири</label>
            <p className="control">
              <input className="input" type="text" placeholder="вулиця Богдана Хмельницького 64,квартира13" required />
            </p>
            <label className="label">Кількість кімнат</label>
            <p className="control has-addons">
              <a className="button" id="minus">
                -
              </a>
              <input className="input is-expanded" type placeholder required maxLength={1} defaultValue={1} name="roomQuantity" min={1} />
              <a className="button" id="plus">
                +
              </a>
            </p>
            <label className="label">На яку дату?</label>
            <p className="control">
              <input type="text" className="input" required onfocus="this.select();lcs(this)" onclick="event.cancelBubble=true;this.select();lcs(this)" />
            </p>
            <label className="label">На який час?</label>
            <p className="control">
              <input className="input forTime" type="text" required />
            </p>
            <label className="label">Додаткові опції</label>
            <p className="control">
              <label className="checkbox">
                <input type="checkbox" />
                Миття вікон
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                Миття посуду
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                Чистка холодильники
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                Чистка духовки
              </label>
              <label className="checkbox">
                <input type="checkbox" />
                Прасування
              </label>
            </p>
          </div>
          <div className="orderBox" id="cost">
            <h2>500 грн</h2>
            <p>Ми зв'яжемось з вами за годину до прибирання :)</p>  
            <p className="control">
              <input className="input" type="text" placeholder="Промокод,якщо є" />
            </p>    
            <input type="submit" className="button is-info" defaultValue="Забронювати" />
          </div>
        </form>
      </div>
        )
    }
});
$('#reloadF').click(function(){
     $('reactBox').empty();
    ReactDOM.render(<OrderBox />,document.getElementById('reactBox'))
});
$('#order').click(function(){
    $('reactBox').empty();
   ReactDOM.render(<ShowOrderWrap />,document.getElementById('reactBox')) 
});
$('#promo').click(function(){
     $('reactBox').empty();
    ReactDOM.render(<ShowPromo items={ promoArr } />,document.getElementById('reactBox'))
});
$('#user').click(function(){
    $('reactBox').empty();
   ReactDOM.render(<FilteredList itemsIn={ dataArr }/>,document.getElementById('reactBox')) 
});
$('#userOrder').click(function(){
    $('reactBox').empty();
   ReactDOM.render(<FilterOrder itemsIn={ orderArr } />,document.getElementById('reactBox'))
});    
