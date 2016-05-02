var app = angular.module('todo')
app.controller("todosController", function(){
  this.todos = [
    "Groceries at Trader Joes",
    "Wash hair",
    "Target",
    "Do Laundry",
    "Do Homework"
  ]


  this.formIsVisible = false
  this.toggleForm = function(){
    console.log("toggleform")
    if(this.formIsVisible){
      this.formIsVisible = false
    }
    else{
      this.formIsVisible = true
    }
  }

  this.create = function(){
    this.todos.unshift(this.content);
  };

  this.edit = function(index){
    var todo = this.todos[index];
    this.content = todo;
  };

  this.update = function(index){
    this.todos[index] = this.content;
  };

  this.remove = function(index){
    this.todos.splice(index,1);
  }
});
