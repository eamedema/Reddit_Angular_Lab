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
                        permalink: child.data.permalink
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
        <div ng-repeat="post in $ctrl.feed">
            <h2>{{post.title}}</h2>
            <img src="{{post.img}}"></img>
            <a href="{{post.permalink}}">LINK</a>
        </div>
    `, // or use templateUrl
    controller: RedditFeed,
 
});