function RedditFeed(RedditService, $q) {
    const ctrl = this;

    //list of reddit posts to display
    ctrl.feed = [];
    
    
    ctrl.fetchAwwSubreddit = ()=>{

        return $q(function(resolve, reject) {
            RedditService.fetchAwwSubreddit()
            .then( (response) => {

                let children = response.data.data.children

                children.forEach( function(child, index) {
                    let childObj = {
                        title: child.data.title,
                        img: child.data.thumbnail,
                        url: child.data.url
                    }

                    ctrl.feed.push(childObj);

                    if (index === children.length -1){
                        resolve();
                    }
                })
                 
                // let n=0;
                // while (n<10) {
                //     ctrl.feed.push(`title: ${response.data.data.children[n].data.title},`)
                //     n++
                // }
            });
        });
     };

     ctrl.fetchAwwSubreddit()
     .then( ()=> {
         alert("completed");
     })
    }


  angular
  .module('RedditApp')
  .component('redditFeed', {
    template: `
        <div class="post" ng-repeat="post in $ctrl.feed">
            <h2 class="titles">{{post.title}}</h2>
            <img src="{{post.img}}"></img>
            <a class="links" href="{{post.url}}" target="_blank">LINK</a>
        </div>
    `, // or use templateUrl
    controller: RedditFeed,
 
});