menu_list_array = ["Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                    "Panner Tikka Pizza",
                    "Deluxe Veggie Pizza",
                    "Veg Extravaganza Pizza",
                    "Pepperoni-The One And Only",
                    "Chicken Mayo & Bacon",
                    "BBQ Chicken & Bacon",
                    "Deluxe Bacon & Mushroom",
                    "Chicken Honey Mustard",
                    "Veggie Lovers",
                    "Chicken Tikka",
                    "Fiery Hawahan",
                    "Four Seasons",
                    "Pepperoni & Feta",
                    "Regina",
                    "Hawallan",
                    "Chicken Mayo",
                    "BBQ Russian",
                    "3 Cheese",
                    "BBQ Chicken",
                    "Ham & Bacon",
                    "Margherita"];

                    function getmenu(){
                        var htmldata;
                        htmldata="<ol class='menulist'>"
                        menu_list_array.sort();
                        for(var i=0;i<menu_list_array.lenght;i++){
                            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
                        }
                        htmldata=htmldata+"</ol>"
                        document.getElementById("display_menu").innerHTML = htmldata;
                    }

                    function add_item(){
                        var htmldata;
                        var item=document.getElementById("add_item").value;
                        menu_list_array.push(Item);
                        menu_list_array.sort();
                        htmldata="<section class='cards'>"
                        for(var i=0;i<menu_list_array.lenght;i++){
                            htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
                        }
                        htmldata=htmldata+"</section>"
                        document.getElementById("display_addedmenu").innerHTML = htmldata;
                    }