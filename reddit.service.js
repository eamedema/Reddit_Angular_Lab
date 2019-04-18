function RedditService(http) {
    const service = this;

     /**
     * call https://www.reddit.com/r/aww/.json
     * set ctrl.feed to be the results
     */
    service.fetchAwwSubreddit = ()=> {
        //$http stuff goes here

        // RedditService.fetchAwwSubreddit();
        return http.get('https://www.reddit.com/r/aww/.json?limit=9');

     };
   

}

angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService])