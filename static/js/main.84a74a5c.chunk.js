(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(0),s=n.n(o),c=n(24),i=n.n(c),h=(n(59),n(18)),l=n(19),r=n(23),j=n(22),d=(n.p,n(60),n(26)),p=n(7),m=n(53),b=n(69),u=n(70),O=n(50),g=n(78),k=n(79),x=n(71),f=function(e){Object(r.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).getPokemon=function(){console.log("load"),fetch(a.state.next,{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t;(t=a.state.pokemon).push.apply(t,Object(m.a)(e.results)),a.setState({next:e.next}),console.log(a.state.pokemon)})).catch((function(e){console.log(e)}))},a.state={pokemon:[],tangkapan:[],next:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("tangkapan");fetch("https://pokeapi.co/api/v2/pokemon",{method:"GET"}).then((function(e){return e.json()})).then((function(n){e.setState({pokemon:n.results,next:n.next,tangkapan:void 0==t?[]:JSON.parse(t)}),console.log(e.state.pokemon)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsx)(b.a,{style:{marginTop:20},children:Object(a.jsx)(u.a,{children:Object(a.jsx)(O.a,{md:12,children:Object(a.jsx)(g.a,{style:{},children:Object(a.jsxs)(k.a,{variant:"flush",children:[Object(a.jsx)(k.a.Item,{children:Object(a.jsx)("b",{onClick:this.getPokemon,children:Object(a.jsxs)("b",{children:["Pokemon Owned Total : ",this.state.tangkapan.length]})})}),this.state.pokemon&&this.state.pokemon.map((function(e,t,n){return Object(a.jsx)(k.a.Item,{children:Object(a.jsx)(d.b,{style:{color:"black"},to:"/detail/"+e.name.toLowerCase(),children:Object(a.jsx)("b",{children:e.name.toUpperCase()})})},t)})),Object(a.jsx)(k.a.Item,{children:Object(a.jsx)(x.a,{onClick:this.getPokemon,children:Object(a.jsx)("b",{children:"Load More...."})})})]})})})})})}}]),n}(o.Component),v=n(34),y=n(72),C=n(73),S=n(74),w=n(75),T=function(e){Object(r.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).catch=function(){console.log("load"),1==Math.floor(2*Math.random())+1?a.handleShow():a.handleShow1()},a.handleShow=function(){a.setState({show:!0})},a.handleClose=function(){a.setState({show:!1})},a.handleShow1=function(){a.setState({show1:!0})},a.handleClose1=function(){a.setState({show1:!1})},a.submit=function(){var e={pokemon:a.state.name,nickname:a.state.nickname};a.state.tangkapan.push(e),console.log(a.state.tangkapan),localStorage.setItem("tangkapan",JSON.stringify(a.state.tangkapan)),a.props.history.push("/mypokemon")},a.state={isloading:!1,pokemon:[],next:"",img:"",name:"",moves:[],types:[],height:"",weight:"",show:!1,show1:!1,nickname:"",tangkapan:[]},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("tangkapan");console.log("isine "+t),this.setState({isloading:!0}),fetch("https://pokeapi.co/api/v2/pokemon/"+this.props.match.params.name,{method:"GET"}).then((function(e){return e.json()})).then((function(n){e.setState({tangkapan:void 0==t?[]:JSON.parse(t),img:n.sprites.other.dream_world.front_default,name:n.name,moves:n.moves,types:n.types,height:n.height,weight:n.weight,isloading:!1}),console.log("isine1 "+e.state.tangkapan),console.log(n)})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState({nickname:e.target.value})}},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)("h1",{children:"Loading"}):Object(a.jsxs)(b.a,{style:{marginTop:20},children:[Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(O.a,{md:4,style:{backgroundColor:"white"},children:[Object(a.jsx)(y.a,{src:this.state.img,fluid:!0}),Object(a.jsx)("div",{style:{marginTop:40},children:Object(a.jsx)(x.a,{style:{width:100},onClick:this.catch,children:"Catch"})})]}),Object(a.jsxs)(O.a,{md:8,children:[Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:this.state.name.toUpperCase()})}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Height : ",this.state.height,'"']}),Object(a.jsxs)("h3",{children:["Weight : ",this.state.weight," lbs"]})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{children:["Types : ",this.state.types&&this.state.types.map((function(e,t,n){return Object(a.jsx)(C.a,{style:{margin:10},variant:"primary",children:e.type.name.toUpperCase()},t)}))]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{children:["Moves : ",this.state.moves&&this.state.moves.map((function(e,t,n){return Object(a.jsx)(C.a,{style:{margin:10},variant:"secondary",children:e.move.name.toUpperCase()},t)}))]})})]})]}),Object(a.jsxs)(S.a,{show:this.state.show,onHide:this.handleClose,children:[Object(a.jsx)(S.a.Header,{children:Object(a.jsx)(S.a.Title,{children:"Berhasil"})}),Object(a.jsxs)(S.a.Body,{children:["Berhasil Menangkap Pokemon",Object(a.jsxs)(w.a,{children:[Object(a.jsxs)(w.a.Group,{controlId:"formBasicEmail",children:[Object(a.jsx)(w.a.Label,{}),Object(a.jsx)(w.a.Control,{type:"text",placeholder:"Masukkan Nickname Pokemonl",onChange:this.handleChange})]}),Object(a.jsx)(x.a,{variant:"primary",onClick:this.submit,children:"Submit"}),Object(a.jsx)(x.a,{style:{marginLeft:10},variant:"secondary",onClick:this.handleClose,children:"Batal"})]})]})]}),Object(a.jsxs)(S.a,{show:this.state.show1,onHide:this.handleClose1,children:[Object(a.jsx)(S.a.Header,{closeButton:!0,children:Object(a.jsx)(S.a.Title,{children:"Gagal"})}),Object(a.jsx)(S.a.Body,{children:"Gagal Menangkap Pokemon"}),Object(a.jsx)(S.a.Footer,{children:Object(a.jsx)(x.a,{variant:"secondary",onClick:this.handleClose1,children:"Close"})})]})]})}}]),n}(o.Component),M=function(e){Object(r.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).deleteData=function(e){a.state.pokemon.splice(e,1),a.setState({pokemon:a.state.pokemon}),localStorage.setItem("tangkapan",JSON.stringify(a.state.pokemon)),console.log("pokemone "+a.state.pokemon)},a.state={pokemon:[],next:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("tangkapan");this.setState({pokemon:void 0==e?[]:JSON.parse(e)})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(b.a,{style:{marginTop:20},children:Object(a.jsx)(u.a,{children:Object(a.jsxs)(O.a,{md:12,children:[0==this.state.pokemon.length?Object(a.jsx)("h1",{children:"Tidak Ada Pokemon"}):null,Object(a.jsx)(g.a,{style:{},children:Object(a.jsx)(k.a,{variant:"flush",children:this.state.pokemon&&this.state.pokemon.map((function(t,n,o){return Object(a.jsxs)(k.a.Item,{children:[Object(a.jsxs)("b",{children:[t.nickname.toUpperCase()," (",t.pokemon.toUpperCase(),")"]}),Object(a.jsx)(x.a,{onClick:function(){return e.deleteData(n)},style:{float:"right"},children:"Delete"})]},n)}))})})]})})})}}]),n}(o.Component),I=n(76),P=n(77),B=(n(66),function(e){Object(r.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(d.a,{children:[Object(a.jsxs)(I.a,{bg:"light",expand:"lg",children:[Object(a.jsx)(I.a.Brand,{href:"/tokopedia_test/",children:"Pokemon by Muhamad Ardhi"}),Object(a.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(I.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsx)(P.a,{className:"mr-auto",children:Object(a.jsx)(P.a.Link,{href:"/mypokemon/",children:"My Pokemon"})})})]}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/tokopedia_test/",component:f}),Object(a.jsx)(p.a,{path:"/detail/:name",component:T}),Object(a.jsx)(p.a,{path:"/mypokemon",component:M})]})]})}}]),n}(o.Component)),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.84a74a5c.chunk.js.map