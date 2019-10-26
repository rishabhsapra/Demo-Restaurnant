import React, { Component } from 'react'
import './All.css';
 class Order extends Component {
     submit=()=>{
         var cn = this.refs.cn.value;
         var mo = this.refs.mo.value;
         var it1 = this.refs.it1.value;
         var it2 = this.refs.it2.value;
         var ad = this.refs.ad.value;

         fetch("http://localhost:3010/create?cn="+cn+"&mo="+mo+
         "&it1="+it1+"&it2="+it2+"&ad="+ad)
         .then(res => res.json())
         .then(out=>console.log(out))
        .catch((error)=>{
                console.log(error);
            })
         console.log('data is saved');
         this.clear();
         }
         delete=()=>
         { 
             var cn = this.refs.cn.value;
             
             fetch("http://localhost:3010/delete?cn="+cn)
             .then(res => res.json())
             .then(out=>console.log(out))
             .catch((error)=>{
                           console.log(error);
           })
          console.log('you are click on delete button')
         this.clear();
         }  
clear=()=>{
    this.refs.cn.value = "";
    this.refs.mo.value = "";
    this.refs.it1.value = "";
    this.refs.it2.value = "";
    this.refs.ad.value = "";
}

    render() {
        return (
            <div>
                <h1 className="o1">FOR ORDER</h1>
                <p><input type="text"placeholder="CUSTOMER NAME"className="form-control"
                ref="cn"/> </p>

                <p><input type="text"placeholder="MOBILE"className="form-control"
                ref="mo"/> </p>

                <p><input type="text"placeholder="ITEM1"className="form-control"
                ref="it1"/> </p>

                <p><input type="text"placeholder="ITEM2"className="form-control"
                ref="it2"/> </p>

                <p><input type="text"placeholder="ADDRESS"className="form-control"
                ref="ad"/></p>

                <p><input type="button"value="ORDER NOW"className="btn btn-success"
                onClick={this.submit}/>
                <input type="button"value="DELETE"className="btn btn-danger"
                onClick={this.delete}/> </p>

                </div>
        )
    }
}
export default Order;