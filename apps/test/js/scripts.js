/*!
 * Start Bootstrap - Business Frontpage v5.0.0 (https://startbootstrap.com/template/business-frontpage)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-frontpage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

var script = document.createElement('script');
var message;
script.onload = function() {
    if (typeof msgdata !== 'undefined') {
        message = JSON.parse(msgdata);
        console.log("message ....");
        console.log(message);

        let root = document.getElementById('msg_contanier');
        for (let item of message) {

            if (item[0] == 'message') {
                let msg = item[2];
                let datetime = item[3];
                var content = '<div class="card mb-4"><div class="card-body p-4"><div class="d-flex"><div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-megaphone-fill"></i></div><div class="ms-4"><p class="mb-1" style="font-weight: 800;">' + msg +
                    '</p><div class="small text-muted" style="text-align: right; width: 550px;">' + datetime + '</div></div></div></div></div>';
                root.innerHTML += content;
            }


        }




        // for (let arr of msg_obj) {
        //     let k = arr[0];
        //     let one_store = [];

        //     one_store.push(arr[2]); // child
        //     one_store.push(arr[1]); // adult
        //     one_store.push(arr[3]); // utime
        //     //one_store.push('<button>test</button>');
        //     table_data.push(arr);

        // }
    }
};
script.src = 'msgData.js?v=' + new Date().getTime();
document.head.appendChild(script);