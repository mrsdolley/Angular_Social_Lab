"use strict"; 
{ 
    angular.module('app')
        .component('post', {
            templateUrl: 'components/socialPosts/post/post.html',
            bindings: {
                item:  '<'
            }
        
    }) 
} 
