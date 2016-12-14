function PromoCod(mail,dTime,phone) {
    this.mail = mail,
    this.dTime = dTime,
    this.phone = phone    
}
var Fpromo = new PromoCod('1asdasf@mail','2012-10-10','000665');
var Spromo = new PromoCod('2f@mail','2012-11-11','000665555');
var Thpromo = new PromoCod('3f@mail','2012-12-12','000');
var promoArr = [Fpromo,Spromo,Thpromo];

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
      <div className="filter-list">
        <input className="input" type="text" placeholder="Phone number or Email adress" onChange={this.filterList}/>
      <List items={this.state.items}/>
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

ReactDOM.render(<FilteredList itemsIn={ promoArr }/>, document.getElementById('vueBlocks'));
