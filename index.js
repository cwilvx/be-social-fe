const ul=document.getElementById('posts')
let get_posts_url = 'https://be-social-be.herokuapp.com';

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

        return posts.map(function (post){
            let li = createNode('li');
            let span = createNode('p');

            span.innerHTML = `${post.post_body}`;
            
            append(li, span);
            append(ul, li)
        })
    })
    .catch(error => console.log('error', error))