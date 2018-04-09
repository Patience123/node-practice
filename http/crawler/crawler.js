const http = require('http');
const cheerio = require('cheerio');

const url = 'http://www.imooc.com/learn/277';

function filterChapters(html) {
    let $ = cheerio.load(html);  // 在服务器端解析html
    let chapters = $('.chapter');  // 拿到课程大章的集合

    // 数据结构（爬出后）
    // [
    //     {
    //         chapterTitle: '...',
    //         videos: [
    //             {
    //                 title: '...',
    //                 id: '...'
    //             }
    //         ]
    //     }
    // ]

    let courseData = [];
    chapters.each(function(elem) {
        let chapter = $(this);
        let chapterTitle = chapter.find('strong').text();
        let videos = chapter.find('.video').children('li');    // 每章的小节集合
        let chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        };
        videos.each(function(elem) {
            let video = $(this).find('a');
            let title = video.text();
            let id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title: title,
                id: id
            });
        });
        courseData.push(chapterData);
    });

    return courseData;
}

function printCourseInfo(courseData) {
    courseData.forEach(function(item) {
        let chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function(video) {
            console.log('【'+ video.id +'】' + video.title + '\n');
        });
    });
}

http.get(url, function(res) {
    let html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        // console.log(html);
        let chapterData = filterChapters(html);
        printCourseInfo(chapterData);
    })
}).on('error', function(err) {
    console.log(err);
})