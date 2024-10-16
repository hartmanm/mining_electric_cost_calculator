/*
Copyright (c) 2018 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
*/

var solo = {"solo":[0]}
var num_server_fans = {"num_server_fans":[0]}

function add_powerUSE(cur_user)
{
var total = 0;
var core = -1;
var out = 0;
var i = 0;
var idx = 0;
var server_fan = 0;
// convert to int arr
var temp = new Array();
var temp_str = cur_user.PL;
if(temp_str.indexOf(',') > -1)
{
temp = temp_str.split(",");
for(a in temp ){temp[a] = parseInt(temp[a], 10);}
var len = temp.length;
num_rigs_user = len;
}
else{
temp = parseInt(temp_str);
num_rigs_user = 1;
}
// convert to int arr
var temp2 = new Array();
var temp_str = cur_user.num_gpu;
if(temp_str.indexOf(',') > -1)
{
temp2 = temp_str.split(",");
for(a in temp2 ){temp2[a] = parseInt(temp2[a], 10);}
}
else{temp2 = parseInt(temp_str);}
i=num_rigs_user;
while(i > 0){
if(solo.solo[0] == 0){core = 53;}
if(solo.solo[0] == 1){core = 25;}
if(num_server_fans.num_server_fans[0] > 0){server_fan = 15 * num_server_fans.num_server_fans[0];}
if(num_rigs_user>1){out = temp2[idx] * temp[idx];}
else{out = temp2 * temp;}
total += (out + core + server_fan);
 i--; idx++; }
total = (total / 1000);
return total;
}
var electric_usage = cur_bill.electric_usage;
var num_days = cur_bill.num_days;
var given_bill_total = cur_bill.given_bill_total;
var current_bill = cur_bill.current_bill;
var kwh_cost = (given_bill_total / electric_usage).toFixed(2);
var title = "Mining Electric Cost:";
var elec_usage = user.elec_usage;
// convert to int arr
var temp = new Array();
var temp_str = user.PL;
if(temp_str.indexOf(',') > -1)
{
temp = temp_str.split(",");
for(a in temp ){temp[a] = parseInt(temp[a], 10);}
}
else{temp = parseInt(temp_str);}
var len = temp.length;
var power_limit = temp;
var num_gpu_user = user.num_gpu;
var num_rigs_user = len;

function reset_general_data(){
electric_usage = cur_bill.electric_usage;
num_days = cur_bill.num_days;
given_bill_total = cur_bill.given_bill_total;
current_bill = cur_bill.current_bill;
kwh_cost = (given_bill_total / electric_usage).toFixed(2);
}

var div = document.getElementById("elec_info");
var g1 = document.createElement("grid1");
div.appendChild(g1);
var g2 = document.createElement("grid2");
g2.className = "blockmode";
div.appendChild(g2);
var g3 = document.createElement("grid3");
g3.className = "blockmode";
div.appendChild(g3);
var g4 = document.createElement("grid4");
g4.className = "blockmode";
div.appendChild(g4);
var g5 = document.createElement("grid5");
g5.className = "blockmode";
div.appendChild(g5);
var g6 = document.createElement("grid6");
g6.className = "blockmode";
div.appendChild(g6);

var key_name;
// cur_bill edits
$(document).on("click", ".editable_text", function() {
var original_text = $(this).text();
var new_input = $("<input class=\"text_editor\"/>");
new_input.val(original_text);
$(this).replaceWith(new_input);
new_input.focus();
if(original_text === cur_bill.current_bill){active_edit = cur_bill.current_bill; key_name = "current_bill"};
if(original_text === cur_bill.electric_usage){active_edit = cur_bill.electric_usage; key_name = "electric_usage"};
if(original_text === cur_bill.num_days){active_edit = cur_bill.num_days; key_name = "num_days"};
if(original_text === cur_bill.given_bill_total){active_edit = cur_bill.given_bill_total; key_name = "given_bill_total"};
});

$(document).on("blur", ".text_editor", function() {
var new_input = $(this).val();
var updated_text = $("<span class=\"editable_text\">");
updated_text.text(new_input);
$(this).replaceWith(updated_text);
cur_bill[key_name] = new_input;
load();
});

var key_name2;
// user edits
$(document).on("click", ".editable_text2", function() {
var original_text2 = $(this).text();
var new_input2 = $("<input class=\"text_editor2\"/>");
new_input2.val(original_text2);
$(this).replaceWith(new_input2);
new_input2.focus();
if(original_text2 === user.elec_usage){active_edit = user.elec_usage; key_name2 = "elec_usage";};
if(original_text2 === user.PL){active_edit = user.PL; key_name2 = "PL";};
if(original_text2 === user.num_gpu){active_edit = user.num_gpu; key_name2 = "num_gpu";};
});

$(document).on("blur", ".text_editor2", function() {
var new_input2 = $(this).val();
var updated_text2 = $("<span class=\"editable_text2\">");
updated_text2.text(new_input2);
$(this).replaceWith(updated_text2);
user[key_name2] = new_input2;
load();
});

function visualGPU(solo, first_rig, gpu_powerlimit, num_rigs, num_gpus, num_server_fans){
if(first_rig == 1){var one = document.createElement("codev"); one.innerHTML = "&nbsp&nbsp"; g5.appendChild(one);}
var j = 0;
while(j < num_rigs)
{
var one = document.createElement("codezz");
one.innerHTML = "53";
if(solo == 1){one.innerHTML = "25";}
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codexx");
j++;
var i = 0;
while(i < num_gpus)
{
var one = document.createElement("codexx");
one.innerHTML = gpu_powerlimit;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
i++;
}
var i = 0;
while(i < num_server_fans)
{
var one = document.createElement("codell");
one.innerHTML = 15;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
i++;
}
var one = document.createElement("codev");
one.innerHTML = "&nbsp";
g5.appendChild(one);
}
}

function visualUSER(title, dollar_cost, e_use){
var one = document.createElement("codevv");
one.innerHTML = "<br><br><br>";
g5.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g5.appendChild(one);
var one = document.createElement("code");
one.innerHTML = title;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g5.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g5.appendChild(one);
var one = document.createElement("codexx");
one.innerHTML = dollar_cost;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "=";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codell");
one.innerHTML = "(";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = e_use;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "*";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = "24";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "*";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = num_days;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codell");
one.innerHTML = ")";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "*";
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g5.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = kwh_cost;
g5.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g5.appendChild(one);
}

function primary_data(){
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g1.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "Current Bill:";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g1.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = current_bill;
one.className = "editable_text";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g1.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g1.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "Usage:";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g1.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = electric_usage;
one.className = "editable_text";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g1.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g1.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "Number of Days:";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g1.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = num_days;
one.className = "editable_text";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g1.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g1.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "Bill Total:";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g1.appendChild(one);
var one = document.createElement("codexx");
one.innerHTML = given_bill_total;
one.className = "editable_text";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g1.appendChild(one);


var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g1.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "Powerlimits:";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g1.appendChild(one);
var one = document.createElement("codexx");
one.innerHTML = power_limit;
one.className = "editable_text2";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g1.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g1.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "Number of GPUs:";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g1.appendChild(one);
var one = document.createElement("codexx");
one.innerHTML = num_gpu_user;
one.className = "editable_text2";
g1.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br>";
g1.appendChild(one);
}

function totalCOST(elec_usage, num_days, given_bill_total, electric_usage){
var kwh_cost = given_bill_total / electric_usage;
kwh_cost = kwh_cost.toFixed(2);
var total_cost = (elec_usage * 24 * num_days) * kwh_cost;
total_cost = total_cost.toFixed(2);
return total_cost;
}

var num_rigs_to_a_line = 2;

function outputUSER(cur_user){
while (g5.firstChild){g5.removeChild(g5.firstChild);}
cur_user.elec_usage = add_powerUSE(cur_user);
var cur_user_total_cost = totalCOST(cur_user.elec_usage, num_days, given_bill_total, electric_usage);
visualUSER(title, cur_user_total_cost, cur_user.elec_usage);
// convert PL to int arr
var temp = new Array();
var temp_str = cur_user.PL;
if(temp_str.indexOf(',') > -1)
{
temp = temp_str.split(",");
for(a in temp ){temp[a] = parseInt(temp[a], 10);}
var len = temp.length;
num_rigs_user = len;
}
else{
temp = parseInt(temp_str);
num_rigs_user = 1;
}
// convert num_gpu to int arr
var temp2 = new Array();
var temp_str = cur_user.num_gpu;
if(temp_str.indexOf(',') > -1)
{
temp2 = temp_str.split(",");
for(a in temp2 ){temp2[a] = parseInt(temp2[a], 10);}
}
else{temp2 = parseInt(temp_str);}
var i = num_rigs_user;
var idx = 0;
while(i > 0){
if(1){
if(num_rigs_user>1){
if(idx == 0){visualGPU(solo.solo[0], 1, temp[idx], 1, temp2[idx], num_server_fans.num_server_fans[0]);}
if(idx > 0){visualGPU(solo.solo[0], 0, temp[idx], 1, temp2[idx], num_server_fans.num_server_fans[0]);}
}
else{
if(idx == 0){visualGPU(solo.solo[0], 1, temp, 1, temp2, num_server_fans.num_server_fans[0]);}
if(idx > 0){visualGPU(solo.solo[0], 0, temp, 1, temp2, num_server_fans.num_server_fans[0]);}
}
if(num_rigs_to_a_line == 1)
{var one = document.createElement("codes");
one.innerHTML = "<br><br>";
g5.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g5.appendChild(one);
}

if(num_rigs_to_a_line == 2){if(((idx+1) % 2 == 0) && (i > 1))
{var one = document.createElement("codes");
one.innerHTML = "<br><br>";
g5.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g5.appendChild(one);
}
}
if(num_rigs_to_a_line > 2){if(((idx+1) % num_rigs_to_a_line == 0) && (i > 1))
{var one = document.createElement("codes");
one.innerHTML = "<br><br>";
g5.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g5.appendChild(one);
}
}

} i--; idx++; }
if(num_rigs_to_a_line > 1){
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g5.appendChild(one);}
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g5.appendChild(one);
}

function how_kwh_is_calculated_and_this_bill(){
while (g2.firstChild){g2.removeChild(g2.firstChild);}
while (g4.firstChild){g4.removeChild(g4.firstChild);}
var one = document.createElement("codev");
one.innerHTML = "<br><br>";
g2.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g2.appendChild(one);
var one = document.createElement("code");
one.innerHTML = "How kWh Cost is Calculated:";
g2.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g2.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g2.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = "kWh Cost";
g2.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g2.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "=";
g2.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g2.appendChild(one);
var one = document.createElement("codexx");
one.innerHTML = "Bill Total";
g2.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g2.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "/";
g2.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g2.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = "Usage";
g2.appendChild(one);

var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g4.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g4.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "This Bill:";
g4.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "<br><br>";
g4.appendChild(one);
var one = document.createElement("codev");
one.innerHTML = "&nbsp&nbsp";
g4.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = kwh_cost;
g4.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g4.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "=";
g4.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g4.appendChild(one);
var one = document.createElement("codexx");
one.innerHTML = given_bill_total;
g4.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g4.appendChild(one);
var one = document.createElement("codee");
one.innerHTML = "/";
g4.appendChild(one);
var one = document.createElement("codevv");
one.innerHTML = "&nbsp";
g4.appendChild(one);
var one = document.createElement("codezz");
one.innerHTML = electric_usage;
g4.appendChild(one);
}

primary_data();
function load(){
reset_general_data();
how_kwh_is_calculated_and_this_bill();
outputUSER(user);
}