function RedditService($http) {
    const service = this;

     /**
     * call https://www.reddit.com/r/aww/.json
     * set ctrl.feed to be the results
     */
    service.fetchAwwSubreddit = ()=> {
        //$http stuff goes here

        RedditService.fetchAwwSubreddit();
     };
   

}

angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService])