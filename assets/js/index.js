const ul=document.getElementById('posts')
let base_url = "http://127.0.0.1:5000/"
let get_posts_url = `${base_url}`;
let get_post_author_url = `${base_url}user/`;

function createNode(element){
    return document.createElement(element)
}

function append(parent, el){
    return parent.appendChild(el)
}

var posts

function getPostBody(post) {
    const post_body = post.post_body;
    return post_body
}

function getPostAuthor(post) {
    const post_author_id = post.user;
    return post_author_id;
}

function getUserName(user_id) {
    return fetch(`${get_post_author_url}${user_id}`)
}

fetch(get_posts_url)
  .then(resp => resp.json())
  .then(function (data){
    console.log(data)

    data.map(function(single_post){
        let posts_container = document.getElementById('posts_container');
        let template = document.querySelector('#posts_card');

        const post_body = getPostBody(single_post)
        const post_author_id = getPostAuthor(single_post)
        const post_author = getUserName(post_author_id)
          .then(resp => resp.json())
          .then(function (data) {
              console.log(data)
              author = data.username
              return author
          })

        let this_card = template.content.cloneNode(true);
        this_card.getElementById('post_body').innerHTML = `${post_body}`;
        this_card.getElementById('post_author').innerHTML = `${post_author}`;
        append(posts_container, this_card)
    })
  })
  .then()


// fetch(get_posts_url, fetchOptions)
//     .then(resp => resp.json())
//     .then(function (data){
//         let posts_container = document.getElementById('posts_container');
//         let template = document.querySelector('#posts_card');

//         data.map(function(single_post){
//             function finish(post_body, post_author){
//                 console.log(post_body, post_author)
//             }

//             fetch(`${get_post_author_url}` + post.user)
//                 .then(resp => resp.json())
//                 .then(function(data){
                    
//                 })
//                 .catch(error => console.log(error))
//         })
        
//     })
    // .then(resp => resp.json())
    // .then(
    //     function(userData){
    //         // console.log(userData)
    //     }
    // )
    // .catch(error => console.log('error', error))


        // let posts_container = document.getElementById('posts_container');
        // let template = document.querySelector('#posts_card');

        // console.log('fetching posts')
        // return posts.map(function (post){
        //     let this_card = template.content.cloneNode(true);
        //     this_card.getElementById('post_body').innerHTML = `${post.post_body}`;

        //     append(posts_container, this_card)
        // })