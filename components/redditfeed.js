function RedditFeed() {
    const ctrl = this;

    //list of reddit posts to display
    ctrl.feed = [];
    
    /**
     * call https://www.reddit.com/r/aww/.json
     * set ctrl.feed to be the results
     */
     ctrl.fetchAwwSubreddit = ()=>{
        RedditService.fetchAwwSubreddit()
        .then( (data) => {
            //do something with this data
        })
     };
    }


  angular.module('RedditApp').component('redditFeed', {
    template: `
        <div ng-repeat="post in $ctrl.feed">
            <h2>{{post.title}}</h2>
        </div>
    `, // or use templateUrl
    controller: RedditFeed,
 
});