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

var order1 = new orderCod(1,'blabla@mail.com','0935556644','ShitIt st',2,'20:16','2k16',[1,2],500,false);
var order2 = new orderCod(2,'albalb@mail.com','0932223311','ShitHi st',1,'20:15','2k14',[1,4],600,false);
var order3 = new orderCod(3,'lablab@mail.com','0507778899','ShitHer st',3,'20:20','2k15',[1,3],700,false);
var orderArr = [order1,order2,order3];

var ShowOrder = React.createClass({
    render: function(){
        var list = this.props.itemsIn.map(function(item){
            var length = item.option.length;
            var el;
             return (
                <tr>
                    <td>{item.numberValue}</td>
                    <td>{item.mail}</td>
                    <td>{item.phone}</td>
                    <td>{item.adress}</td>
                    <td>{item.room}</td>
                    <td>{item.dTimeH} {item.dTimeD}</td>
                    <td>{item.option}
                    </td>
                    <td>{item.pay}</td>
                    <td>{item.status}</td>
                </tr> 
             )
         });
        return (
            
            <table className="table">
            <tbody>
            <tr>
                <td>#</td>
                <td>Пошта</td>
                <td>Номер телефону</td>
                <td>Адреса</td>
                <td>К</td>
                <td>Час і дата</td>
                <td>Опції</td>
                <td>Сплачено</td>
                <td>Статус</td>
            </tr>
             { list }
            </tbody>
            </table>
        )
    }
});
ReactDOM.render(<ShowOrder itemsIn={ orderArr } />, document.getElementById('tableOfOrder'));