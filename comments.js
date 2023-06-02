const getComments = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();
    displayComments(data);
}

const displayComments = (comments) => {

    const commentsContainer = document.getElementById('comments')
    //only display 2 data comments
    comments.slice(0, 2).map(comment => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
    <div class="card text-center m-5 bg-primary">
        <small class="mt-3 text-light">${comment.email}</small>
        <div class="card-body ">
          <div class="card text-center m-5">
              <div class="card-body ">
              ${comment.body}      
              </div>
          </div>
        </div>
    </div>`
        commentsContainer.appendChild(newDiv)

    })
}