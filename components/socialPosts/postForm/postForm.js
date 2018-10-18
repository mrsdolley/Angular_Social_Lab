"use strict"; 
{ 
    angular.module('app')
        .component('postform', {
            templateUrl: 'components/socialPosts/postForm/postForm.html',
            bindings: {
                onSubmit: '<'
                
            }
            
    }) 
} 