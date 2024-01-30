var posts=["posts/a3ee46681660.html","posts/d192edcdcc76.html","posts/41693542ce14.html","posts/f1cada7536a6.html","posts/0f4c4bad5aa5.html","posts/442b2bf9e31f.html","posts/8f6b731249a4.html","posts/55e01456b4f3.html","posts/d257edaa9e65.html","posts/61e2084d103f.html","posts/9d09c51d2f8d.html","posts/d8c293557612.html","posts/d4e87d5105e7.html","posts/744c9e98df92.html","posts/29a4071d1137.html","posts/e19626ecca6f.html","posts/a60b9384049c.html","posts/4761914cb790.html","posts/661ef0e61567.html","posts/3dbb033f72e5.html","posts/1d6988aade26.html","posts/5136f8b94971.html","posts/7c4ad0a43f1c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"个人主页","link":"https://weexy.cn/","avatar":"/img/home/avatar.jpg","descr":"往日不悔，未来可期","siteshot":"/img/link/my/home.jpg"},{"name":"博客","link":"https://blog.weexy.cn/","avatar":"/img/home/logo.ico","descr":"Weexy的小博客","siteshot":"/img/link/my/blog.jpg"},{"name":"网盘","link":"https://pan.weexy.cn/","avatar":"/img/home/logo.ico","descr":"Weexy的Alist网盘","siteshot":"/img/link/my/pan.jpg"},{"name":"音乐","link":"https://music.weexy.cn/","avatar":"https://music.weexy.cn/favicon.ico","descr":"高颜值第三方网易云音乐播放器","siteshot":"/img/link/my/music.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };