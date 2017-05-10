var	jsnObject=
[

			{
				"url":"Assets/image/ck.jpg",
				"price":"1.3",
				"add":"Add To Cart",
				"title": "Food",
				"inTab": ["food"]

			},
			{
				"url":"Assets/image/ha.jpg",
				"price":"1.2",
				"add":"Add To Cart",
				"title": "Health",
				"inTab": ["food"]

			},
			{
				"url":"Assets/image/gf.jpg",
				"price":"1.2",
				"add":"Add To Cart",
				"title": "Health",
				"inTab": ["food"]

			},
			{
				"url":"Assets/image/ew.jpg",
				"price":"1.5",
				"add":"Add To Cart",
				"title": "Entertainment",
				"inTab": ["entertainment"]

			},
			{
				"url":"Assets/image/Entertainment Weekly-02.jpg",
				"price":"2",
				"add":"Add To Cart",
				"title": "Entertainment",
				"inTab": ["entertainment"]

			},
			{
				"url":"Assets/image/Entertainment Weekly-04.jpg",
				"price":"2",
				"add":"Add To Cart",
				"title": "Entertainment",
				"inTab": ["entertainment"]

			},
			{
				"url":"Assets/image/Entertainment Weekly-05.jpg",
				"price":"2",
				"add":"Add To Cart",
				"title": "Entertainment",
				"inTab": ["entertainment"]

			},
			{
				"url":"Assets/image/Entertainment Weekly-06.jpeg",
				"price":"2",
				"add":"Add To Cart",
				"title": "Entertainment",
				"inTab": ["entertainment"]

			},
			{
				"url":"Assets/image/Entertainment Weekly-07.jpg",
				"price":"2",
				"add":"Add To Cart",
				"title": "Entertainment",
				"inTab": ["entertainment"]

			},

		
		{
			"url":"Assets/image/su.jpg",
			"price":"1",
			"add":"Add To Cart",
			"title": "Travel",
			"inTab": ["travel"]
		},
		{
			"url":"Assets/image/td.jpg",
			"price":"1.4",
			"add":"Add To Cart",
			"title": "Trending",
			"inTab": ["trending"]
		},
		

			
		{
			"url":"Assets/image/pe.jpg",
			"price":"1.3",
			"add":"Add To Cart",
			"title": "Trending",
			"inTab": ["trending"]
		},
		
	
		{
			"url":"Assets/image/ck.jpg",
			"price":"1.3",
			"add":"Add To Cart",
			"title": "Food",
			"inTab": ["food"]
		}

	


		]

		var total=0;
		var y=0,grand_tot=0,tot=0,z1=0,flag=0;
		sessionStorage.setItem("flag",flag);
		 sessionStorage.setItem("z1",0);
			
function tabDetails(tabId){ 

	var id;
	var x=document.getElementsByClassName("tab-content");
	for(i=0;i<x.length;i++){
		
        x[i].style.display = "none";
    
	}

	document.getElementById(tabId).style.display = "block";

}

function colorChange(taId){
	document.getElementById(taId).style.color = "yellow";
	var z=document.getElementsByClassName("tab");
	for(j=0;j<z.length;j++){
		if(j!=taId-1)
			if(z[j] && z[j].style)
			z[j].style.color="white";
	}
}

	
function dynamicCard(){
	window.onload=setCount();
	for (var i = 0; i < jsnObject.length; i++) {
		for (var j = 0; j < jsnObject[i].inTab.length; j++) {
			 if(jsnObject[i].inTab[j]=="trending"){

			 	dynamic_div("tabs1",i,j,jsnObject[i].url,jsnObject[i].price,jsnObject[i].title,jsnObject[i].add);
			 }
			 else if(jsnObject[i].inTab[j]=="entertainment"){

			 	dynamic_div("tabs2",i,j,jsnObject[i].url,jsnObject[i].price,jsnObject[i].title,jsnObject[i].add);
			 }
			 else if(jsnObject[i].inTab[j]=="travel"){

			 	dynamic_div("tabs3",i,j,jsnObject[i].url,jsnObject[i].price,jsnObject[i].title,jsnObject[i].add);
			 }
			 else {

			 	dynamic_div("tabs4",i,j,jsnObject[i].url,jsnObject[i].price,jsnObject[i].title,jsnObject[i].add);
			 }

		}


	}
		
 
}
function dynamic_div(t,i,j,url,price,title,add){
	 
		
	            
				var outerDiv=document.createElement("div");
				outerDiv.className="img1 col-md-3 col-sm-6 col-xs-12";
				// document.getElementsByClassName("image_list")[0].appendChild(outerDiv);
				var card=document.createElement("div");
				card.className="card";
				card.id="img"+t+i+j;
				outerDiv.appendChild(card);
				document.getElementById(t).appendChild(outerDiv);
				var image = document.createElement("img");
				image.setAttribute("src",url);
				card.appendChild(image);
				var innerDiv=document.createElement('div');
				innerDiv.className="add_cart";
				card.appendChild(innerDiv);
				var ul=document.createElement('ul');
				ul.className="price_cart";
				innerDiv.appendChild(ul);
				var li1=document.createElement('li');
				li1.className="price";
				li1.innerHTML="$"+price;
				ul.appendChild(li1);
				var li2=document.createElement('li');
				li2.className="cart";
				li2.innerHTML=add;

				ul.appendChild(li2);
				card.onclick = function(){addCart(t,this.id); };


				
				
			}

function addCart(t,DivId){
// sessionStorage.setItem("final_total", 0);
document.getElementsByClassName("modal_img")[0].style.display="none";
total=total+1;
 // '<%Session["final_total"] ="' + total + '"; %>';
 //      alert('<%=Session["final_total"] %>');
    
      	sessionStorage.setItem("final_total", parseInt(sessionStorage.getItem("final_total"))+1);
      	/*sessionStorage.setItem("z1",0);*/
		 var i = document.getElementById("tot_item");
     i.style.display="inline-block";
     i.innerHTML=sessionStorage.getItem("final_total");
	 console.log(DivId);
var modal=document.getElementsByClassName("modal-body")[0];
console.log(grand_tot);

 var outerDiv=document.getElementById(DivId);
	 var imgIcon=outerDiv.getElementsByTagName("img")[0].src;
	sessionStorage.setItem("image"+sessionStorage.getItem("z"),imgIcon);
	 console.log(imgIcon);
	 var price=outerDiv.getElementsByClassName("price")[0].innerHTML;
	 price=price.substr(1);
	 sessionStorage.setItem("price"+sessionStorage.getItem("z"),price);
	 z1=sessionStorage.getItem("z");
	 console.log(sessionStorage.getItem("price"+z1));
	 
	  console.log("hiii"+sessionStorage.getItem("z"));
	 var div1=document.createElement("div");
	 div1.className="modeldiv";
	 modal.appendChild(div1);
	 var img=document.createElement("img");
	 img.className="modelimg";
	 img.setAttribute("src",imgIcon);
	 img.setAttribute("height","80px");
	 img.setAttribute("width","80px");
	 div1.appendChild(img);
	 

	 var input=document.createElement('input');
	  input.className="modelInput";
	  input.setAttribute("id", sessionStorage.getItem("z"));

	  console.log("input box"+ input.id);
	  y++;
	   
	input.setAttribute("type","number");
	input.setAttribute("value",1);
	input.setAttribute("min",1);
	input.setAttribute("max",15);

	sessionStorage.setItem("input"+sessionStorage.getItem("z"), 1);
	sessionStorage.setItem("tot"+sessionStorage.getItem("z"), price);
	sessionStorage.setItem("gd_tot"+sessionStorage.getItem("z"), price);
				
				div1.appendChild(input);
	 
	 var p= document.createElement("p");
	 p.className="p1";
	
	div1.appendChild(p);
	 p.innerHTML="$"+price;
	 var h3=document.createElement("p");
	 h3.className="modelh3";
	 div1.appendChild(h3);

	 

	 grand_tot=grand_tot-(-price);
	input.onclick=function(){
	var inputId = input.id;

	var price = sessionStorage.getItem("price"+inputId);
	// console.log("price- pujjjjjjjjjjja"+ price);
	console.log("inputId="+input.id);

	 var qty = document.getElementById(inputId).value;
	 console.log("qty="+qty);
	 sessionStorage.setItem("input"+inputId, qty);
	 console.log("quantity" + sessionStorage.getItem("input"+inputId));
	console.log(tot);

		 tot=calculate_cart(price,qty);
	h3.innerHTML="$"+tot;

		 sessionStorage.setItem("tot"+inputId,tot);



	document.getElementById("gd_tot").innerHTML="Total amount to be paid: $"+grand_tot;

	sessionStorage.setItem("gd_tot"+inputId,grand_tot);
	 console.log(sessionStorage.getItem("gd_tot"+inputId));	
	 console.log(sessionStorage.getItem("tot"+inputId));	
};

console.log(sessionStorage.getItem("z"));
// document.getElementById("gd_tot").innerHTML=grand_tot;
 sessionStorage.setItem("z",parseInt(sessionStorage.getItem("z"))+1);
console.log("rahul"+sessionStorage.getItem("z"));

}
function calculate_cart(price,quantity){

grand_tot=grand_tot-(-price);
	grand_tot=grand_tot.toFixed(2);
var cal_total=price*quantity;
cal_total=cal_total.toFixed(2);
return cal_total;
}
function setCount(){
	
	/*sessionStorage.setItem("final_total", 0);*/
	// sessionStorage.setItem("z1",z);
	if(sessionStorage.getItem("final_total")==undefined || sessionStorage.getItem("final_total")==null)
		sessionStorage.setItem("final_total", 0);
	if(sessionStorage.getItem("z")==undefined || sessionStorage.getItem("z")==null)
		sessionStorage.setItem("z", 0);
    var i = document.getElementById("tot_item");
    i.style.display="inline-block";
	
	var tt = sessionStorage.getItem("final_total");
	// <% String role=request.getSession().getAttribute("final_total").toString();%>
	i.innerHTML = tt;
	console.log("total_count"+sessionStorage.getItem("final_total"));
	var modal=document.getElementsByClassName("modal-body")[0];
	z1= sessionStorage.getItem("z");
	console.log("index="+z1);
	var modeldiv1=document.createElement("div");
	modeldiv1.className="modeldiv_1";
	modal.appendChild(modeldiv1);
	
	for (var j = 0; j < z1; j++) {
		var div1=document.createElement("div");
	 div1.className="modeldiv";
	 modeldiv1.appendChild(div1);
		var model_div=document.getElementsByClassName("modal_img")[0];
		model_div.style.display="none";
		var im_list=document.createElement("img");
		im_list.setAttribute("src",sessionStorage.getItem("image"+j));
		im_list.className="modelimg";
		im_list.setAttribute("height","80px");
	 im_list.setAttribute("width","80px");
		div1.appendChild(im_list);
		var input=document.createElement('input');
	  input.className="modelInput";
	 
	input.setAttribute("type","number");
	input.setAttribute("min",1);
	input.setAttribute("max",15);
	input.value=sessionStorage.getItem("input"+j);
	console.log("inputbox="+sessionStorage.getItem("input"+j));
	div1.appendChild(input);
	var p= document.createElement("p");
	 p.className="p1";
	
	div1.appendChild(p);
	 p.innerHTML="$"+sessionStorage.getItem("price"+j);
	 var h3=document.createElement("p");
	 h3.className="modelh3";
	 h3.innerHTML="$"+sessionStorage.getItem("tot"+j);
	div1.appendChild(h3);
	document.getElementById("gd_tot").innerHTML="Total amount to be paid: $"+sessionStorage.getItem("gd_tot"+j);
	}

}

function nextPage(){
	window.location.href="checkout.html";
}

function proceed(){
	alert("Thank You For Shopping With Us!!!");
	window.location.href="homepage.html";
	sessionStorage.clear();
}
function previous(){
	
	window.location.href="homepage.html";
}
