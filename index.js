const ul=document.getElementById('posts')
let get_posts_url = 'http://127.0.0.1:5000';

function createNode(element){
    return document.createElement(element)
}

function append(parent, el){
    return parent.appendChild(el)
}

const fetchOptions = {
    method: 'GET'
}
// document.getElementById('post_card').style.display = "None";

fetch(get_posts_url, fetchOptions)
    .then((resp) => resp.json())
    .then(function (data){
        let posts = data;
        let posts_container = document.getElementById('posts_container');
        let post_card = document.getElementById('posts_card');

        return posts.map(function (post){
            let this_card = post_card.cloneNode(true)
            document.getElementById('post_body').innerHTML = `${post.post_body}`;

            append(posts_container, this_card)
            
            
        })
    })
    .catch(error => console.log('error', error))


