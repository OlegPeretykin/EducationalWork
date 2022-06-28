'use strict'

class Comment {
    constructor(text) {
        this.text = text
        this.votes = 0
    }
    upvote(click=1) {
        this.votes += click
    }
}

let y
let z
const CommentsArray = []
for(let i=0; i<100; i++) {
    z=String(Math.floor(Math.random() * 1000))
    CommentsArray[i] = new Comment (`User types .. ${z}`)
    y=Math.floor(Math.random() * 1000)
    for (let votepress = 1; votepress<y; votepress++) {
        CommentsArray[i].upvote()
    }
    if (i===99) {
        CommentsArray[i].upvote(10000)
    }
}

CommentsArray.forEach(element => {
    console.log(element)
});
//CommentsArray[0] = new Comment ('001 !!!')

//console.log('CommentsArray')
//console.log(CommentsArray)
