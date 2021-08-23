export class Quote {
   showDetails:boolean
   constructor(public id :number, public name :string, public Author :string, public User :string, public Date :Date, public upvote :number, public downvote :number){
   this.showDetails=false
}
}
