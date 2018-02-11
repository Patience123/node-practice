{
    // Promise.all 
    // all下面是一个数组，数组传递进来多个Promise实例，当所有的Promise实例的状态发生改变的时候，
    // 那么这个新的Promise实例才会跟着发生变化。
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = (err) => {
                reject(err);
            };
        });
    }

    function showImgs(imgs) {
        imgs.forEach(element => {
            document.body.appendChild(element);
        });
    }

    // 所有图片加载完才在页面中显示
    Promise.all([
        loadImg('images/chrome-logo-small.jpg'),
        loadImg('images/firefox-logo-small.jpg'),
        loadImg('images/safari-logo-small.jpg')
    ]).then(showImgs);
}

{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            };
            img.onerror = (err) => {
                reject(err);
            };
        });
    }

    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    // 有一张图片加载完成就添加到页面
    Promise.race([
        loadImg('images/chrome-logo-small.jpg'),
        loadImg('images/firefox-logo-small.jpg'),
        loadImg('images/safari-logo-small.jpg')
    ]).then(showImgs);
}