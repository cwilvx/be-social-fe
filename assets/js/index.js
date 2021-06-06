const ul=document.getElementById('posts')
let get_posts_url = 'https://be-social-be.herokuapp.com/';

function createNode(element){
    return document.createElement(element)
}

function append(parent, el){
    return parent.appendChild(el)
}

const fetchOptions = {
    method: 'GET'
}

fetch(get_posts_url, fetchOptions)
    .then((resp) => resp.json())
    .then(function (data){
        let posts = data;
        let posts_container = document.getElementById('posts_container');
        let template = document.querySelector('#posts_card');

        console.log('fetching posts')
        return posts.map(function (post){
            let this_card = template.content.cloneNode(true);
            this_card.getElementById('post_body').innerHTML = `${post.post_body}`;

            append(posts_container, this_card)
        })


    })
    .catch(error => console.log('error', error))

