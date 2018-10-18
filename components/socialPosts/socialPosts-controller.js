"use strict";
{
    angular.module('app')
        .controller('SocialPostsController', function(){
            const $ctrl = this;

            
            $ctrl.posts = [
                
                
            ]

            $ctrl.showPost = function(){
                $ctrl.showThoughts = true;
            }

            $ctrl.hidePost = function() {
                $ctrl.showThoughts = false;
            }

            $ctrl.addPostItem = function(post) {
                $ctrl.posts.unshift(post);
                $ctrl.hidePost();
                // title = '';
                // thought = '';
            }

           
        
            

            
    
                // $ctrl.addPostItem = function(post) {
                // $ctrl.posts.unshift(post)
                // }
               
            
            
            // $ctrl.completeTask = (index) => {
            //     $ctrl.list[index].complete = true;
            // }

            // $ctrl.removeTask = function(index) {
            //     $ctrl.list.splice(index,1);
            // }
        });

}
