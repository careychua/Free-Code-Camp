/* Event: Add listener and handler */
    // document.addEventListener('DOMContentLoaded', () => {
    //     document.getElementById('getMessage').onclick = () => {
    //         document.querySelector('p.message').innerHTML = 'Hey, there!';
    //     };
    // });


/* Event: change text with event */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('getMessage').onclick = function(){
    //         document.getElementsByClassName("message")[0].textContent = "Here is the message";
    //     }
    // });


/* JSON: Get with XMLHttpRequest() */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('getMessage').onclick = function(){
    //     const request = new XMLHttpRequest();
    //     request.open("GET", './json/cats.json', true);
    //     request.send();
    //     request.onload = () => {
    //         document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(JSON.parse(request.responseText));
    //     };
    //     };
    // });


/* JSON: Get with fetch() */
    // document.addEventListener('DOMContentLoaded',function(){
    //     document.getElementById('getMessage').onclick= () => {
    //     fetch('./json/cats.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             document.getElementById('message').innerHTML = JSON.stringify(data);
    //         });
    //     };
    // });


/* JSON: Access data from API */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('getMessage').onclick = function(){
    //       const req = new XMLHttpRequest();
    //       req.open("GET",'./json/cats.json', true);
    //       req.send();
    //       req.onload=function(){
    //         const json = JSON.parse(req.responseText);
    //         document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
    //         // json.map((data, idx) => {
    //         //     if (data.id == 2) {
    //         //         console.log(json[idx].codeNames[1]);
    //         //     }
    //         // });
    //         console.log(json[2].codeNames[1]);
    //       };
    //     };
    // });


/* JSON: Convert to HTML */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('getMessage').onclick = function(){
    //         const req = new XMLHttpRequest();
    //         req.open("GET",'./json/cats.json',true);
    //         req.send();
    //         req.onload = function(){
    //             const json = JSON.parse(req.responseText);
    //             let html = "";
    //             json.forEach(obj => {
    //                 const keys = Object.keys(obj);
    //                 html += "<div class='cat'>"
    //                 keys.forEach(key => {
    //                     html += "<strong>" + key + "</strong>: " + obj[key] + "<br>";
    //                 html += "</div><br>";
    //                 });
    //             });
    //         document.getElementsByClassName('message')[0].innerHTML = html;
    //     };
    //     };
    // });


/* JSON: Render images from data */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('getMessage').onclick = function(){
    //     const req=new XMLHttpRequest();
    //     req.open("GET",'./json/cats.json',true);
    //     req.send();
    //     req.onload = function(){
    //         const json = JSON.parse(req.responseText);
    //         let html = "";
    //         json.forEach(function(obj) {
    //         html += "<div class = 'cat'>";
    //         html += "<img src=" + obj.imageLink + " alt=" + obj.altText + ">";
    //         html += "</div><br>";
    //         });
    //         document.getElementsByClassName('message')[0].innerHTML=html;
    //     };
    //     };
    // });


/* JSON: Pre-filter to only get data needed */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('getMessage').onclick = function(){
    //         const req = new XMLHttpRequest();
    //         req.open("GET",'./json/cats.json', true);
    //         req.send();
    //         req.onload=function(){
    //             let json = JSON.parse(req.responseText);
    //             let html = "";
    //             json = json.filter(obj => obj.id != 1);
    //             json.forEach(function(val) {
    //             html += "<div class = 'cat'>"

    //             html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

    //             html += "</div>"
    //             });
    //             document.getElementsByClassName('message')[0].innerHTML = html;
    //        };
    //     };
    // });


/* Geolocation */
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         document.getElementById('data').innerHTML = 
    //             "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    //     });   
    // }


/* JSON: Post data with XMLHttpRequest() */
    // document.addEventListener('DOMContentLoaded', function(){
    //     document.getElementById('sendMessage').onclick = function(){
    //         const userName = document.getElementById('name').value;
    //         const url = 'https://jsonplaceholder.typicode.com/posts';
    //         const suffix = ' loves cats';

    //         const request = new XMLHttpRequest()

    //         request.open("POST", url, true);
    //         request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    //         request.onreadystatechange = () => {
    //             if (request.readyState === 4 && request.status === 201) {
    //                 let serverResponse = JSON.parse(request.response);
    //                 document.getElementsByClassName("message")[0].textContent = JSON.parse(request.response).userName + serverResponse.suffix;
    //             }
    //         };

    //         const body = JSON.stringify({
    //             userName: userName,
    //             suffix: suffix
    //         });
    //         request.send(body);
    //     };
    // });

/* Test code below */

