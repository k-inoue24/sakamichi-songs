'use strict';

{
    var vm = new Vue({
        el: '#app',
        data: {
            nogizakaSongs: [{
                    id: 1,
                    group: '乃木坂46',
                    number: '1st',
                    title: 'ぐるぐるカーテン',
                    release: '2012.2.22',
                    favorite: false,

                },
                {
                    id: 2,
                    group: '乃木坂46',
                    number: '2nd',
                    title: 'おいでシャンプー',
                    release: '2012.5.2',
                    favorite: false,
                },
                {
                    id: 3,
                    group: '乃木坂46',
                    number: '3rd',
                    title: '走れ!Bicycle',
                    release: '2012.8.22',
                    favorite: false,
                },
                {
                    id: 4,
                    group: '乃木坂46',
                    number: '4th',
                    title: '制服のマネキン',
                    release: '2012.12.19',
                    favorite: false,
                },
                {
                    id: 5,
                    group: '乃木坂46',
                    number: '5th',
                    title: '君の名は希望',
                    release: '2013.3.13',
                    favorite: false,
                },
                {
                    id: 6,
                    group: '乃木坂46',
                    number: '6th',
                    title: 'ガールズルール',
                    release: '2013.7.3',
                    favorite: false,
                },
                {
                    id: 7,
                    group: '乃木坂46',
                    number: '7th',
                    title: 'バレッタ',
                    release: '2013.11.27',
                    favorite: false,
                },
                {
                    id: 8,
                    group: '乃木坂46',
                    number: '8th',
                    title: '気づいたら片思い',
                    release: '2014.4.2',
                    favorite: false,
                },
                {
                    id: 9,
                    group: '乃木坂46',
                    number: '9th',
                    title: '夏のFree&Easy',
                    release: '2014.7.9',
                    favorite: false,
                },
                {
                    id: 10,
                    group: '乃木坂46',
                    number: '10th',
                    title: '何度目の青空か',
                    release: '2014.10.8',
                    favorite: false,
                },
                {
                    id: 11,
                    group: '乃木坂46',
                    number: '11th',
                    title: '命は美しい',
                    release: '2015.3.18',
                    favorite: false,
                },
                {
                    id: 12,
                    group: '乃木坂46',
                    number: '12th',
                    title: '太陽ノック',
                    release: '2015.7.22',
                    favorite: false,
                },
                {
                    id: 13,
                    group: '乃木坂46',
                    number: '13th',
                    title: '今、話したい誰かがいる',
                    release: '2015.10.28',
                    favorite: false,
                },
                {
                    id: 14,
                    group: '乃木坂46',
                    number: '14th',
                    title: 'ハルジオンが咲く頃',
                    release: '2016.3.23',
                    favorite: false,
                },
                {
                    id: 15,
                    group: '乃木坂46',
                    number: '15th',
                    title: '裸足でSummer',
                    release: '2016.7.27',
                    favorite: false,
                },
                {
                    id: 16,
                    group: '乃木坂46',
                    number: '16th',
                    title: 'サヨナラの意味',
                    release: '2016.11.19',
                    favorite: false,
                },
                {
                    id: 17,
                    group: '乃木坂46',
                    number: '17th',
                    title: 'インフルエンサー',
                    release: '2017.3.22',
                    favorite: false,
                },
                {
                    id: 18,
                    group: '乃木坂46',
                    number: '18th',
                    title: '逃げ水',
                    release: '2017.8.9',
                    favorite: false,
                },
                {
                    id: 19,
                    group: '乃木坂46',
                    number: '19th',
                    title: 'いつかできるから今日できる',
                    release: '2017.10.11',
                    favorite: false,
                },
                {
                    id: 20,
                    group: '乃木坂46',
                    number: '20th',
                    title: 'シンクロニシティ',
                    release: '2018.4.25',
                    favorite: false,
                },
                {
                    id: 21,
                    group: '乃木坂46',
                    number: '21st',
                    title: 'ジコチューで行こう！',
                    release: '2018.8.8',
                    favorite: false,
                },
                {
                    id: 22,
                    group: '乃木坂46',
                    number: '22nd',
                    title: '帰り道は遠回りしたくなる',
                    release: '2018.11.14',
                    favorite: false,
                },
                {
                    id: 23,
                    group: '乃木坂46',
                    number: '23rd',
                    title: 'Sing Out!',
                    release: '2019.5.29',
                    favorite: false,
                },
                {
                    id: 24,
                    group: '乃木坂46',
                    number: '24th',
                    title: '夜明けまで強がらなくてもいい',
                    release: '2019.9.4',
                    favorite: false,
                },

            ],
            keyakizakaSongs: [{
                    id: 25,
                    group: '欅坂46',
                    number: '1st',
                    title: 'サイレントマジョリティー',
                    release: '2016.4.6',
                    favorite: false,
                },
                {
                    id: 26,
                    group: '欅坂46',
                    number: '2nd',
                    title: '世界には愛しかない',
                    release: '2016.8.10',
                    favorite: false,
                },
                {
                    id: 27,
                    group: '欅坂46',
                    number: '3rd',
                    title: '二人セゾン',
                    release: '2016.11.30',
                    favorite: false,
                },
                {
                    id: 28,
                    group: '欅坂46',
                    number: '4th',
                    title: '不協和音',
                    release: '2017.4.5',
                    favorite: false,
                },
                {
                    id: 29,
                    group: '欅坂46',
                    number: '5th',
                    title: '風に吹かれても',
                    release: '2017.10.25',
                    favorite: false,
                },
                {
                    id: 30,
                    group: '欅坂46',
                    number: '6th',
                    title: 'ガラスを割れ',
                    release: '2018.3.7',
                    favorite: false,
                },
                {
                    id: 31,
                    group: '欅坂46',
                    number: '7th',
                    title: 'アンビバレント',
                    release: '2018.8.15',
                    favorite: false,
                },
                {
                    id: 32,
                    group: '欅坂46',
                    number: '8th',
                    title: '黒い羊',
                    release: '2019.7.17',
                    favorite: false,
                },
            ],
            hinatazakaSongs: [{
                    id: 33,
                    group: '日向坂46',
                    number: '1st',
                    title: 'キュン',
                    release: '2019.3.27',
                    favorite: false,
                },
                {
                    id: 34,
                    group: '日向坂46',
                    number: '2nd',
                    title: 'ドレミソラシド',
                    release: '2019.7.17',
                    favorite: false,
                },
                {
                    id: 35,
                    group: '日向坂46',
                    number: '3rd',
                    title: 'こんなに好きになっちゃっていいの？',
                    release: '2019.10.2',
                    favorite: false,
                },


            ],

            isActive: '1',
            songList: [],
            songSelected: '',
            nogizakasongtitle: '',
            songSelected2nd: '',
            songIndex: '',
            commentUrl: '',
            favoriteUrl: '#favoriteList',
            songComment: '',
            addComment: false,
            favoriteList: false,
        },
        methods: {
            tabChange: function(num) {
                this.isActive = num;
            },
            addCommentTrue: function() {
                if (this.songSelected === '') {
                    this.commentUrl = '#header',
                        alert('シングル曲を選択してください');
                } else {
                    this.commentUrl = '#addComment';

                }
                this.addComment = true;
                this.songSelected2nd = this.songSelected;
                this.songSelected = '';


            },
            favoriteListTrue: function() {
                if (this.songSelected2nd === '') {
                    this.favoriteUrl = '#app';
                    alert('シングル曲を選択してください');
                } else if (this.songComment === '') {
                    this.favoriteUrl = '#addComment';
                    alert('コメントを追加してください');
                } else {
                    var newItem = {
                        title: this.songSelected2nd,
                        comment: this.songComment,
                        favorite: false
                    };
                    this.favoriteUrl = '#favoriteList';
                    this.favoriteList = true;
                    this.songList.push(newItem);
                    this.songSelected2nd = '';
                    this.songComment = '';
                }
                var result = this.songList.filter(function(value, index, array) {
                    return array.indexOf(value) !== array.lastIndexOf(value);
                });
                if (result.length) {
                    alert('同じ曲が選択されています');
                }
            },

            newSongs: function() {
                this.addComment = false;
            },
            songDelete: function() {
                if (!this.forDelete.length) {
                    alert('削除する曲を選択してください')
                    return
                }
                if (confirm('選択した曲を削除してよろしいですか？')) {
                    this.songList = this.remaining;
                }
            },
        },
        computed: {
            remaining: function() {
                return this.songList.filter(function(list) {
                    return !list.favorite;
                });
            },
            forDelete: function() {
                return this.songList.filter(function(list) {
                    return list.favorite;
                });
            },
        },
        watch: {
            songList: {
                handler: function() {
                    localStorage.setItem('songList', JSON.stringify(this.songList));
                },
                deep: true
            }
        },
        mounted: function() {
            this.songList = JSON.parse(localStorage.getItem('songList')) || [];
        },
    });


    Vue.use(VueScrollTo, {
        container: "body",
        duration: 800,
        easing: "ease",
        force: true,
        cancelable: false
    });
}