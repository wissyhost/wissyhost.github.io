/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/06/03/2017-06-03-Using Tika to support PDF and DOC search in Solr /index.html","39b8ad3de70e5183081b0e3464c24913"],["/2017/06/06/2017-06-06-ElasticSearch-introductory-install-local/index.html","d5a745aaa7262bd4d3ac925c1ae937ae"],["/2017/07/02/2017-07-02-ElasticSearch-introductory-install-cluster/index.html","43a03fb3e307b8d61abdaab049e67eb2"],["/2017/07/03/2017-07-03-ElasticSearch-introductory-install-docker/index.html","e3bba50bdbae09788887c73c22f1896c"],["/2017/09/25/2017-09-25-WebHDFS-REST-API/index.html","9e4038e7eb1ba2aac50ed9719d6a63f4"],["/2017/09/25/2017-09-25-npm-Permission-denied/index.html","a079e38de534d20d128906a2bc846b4f"],["/2017/09/27/2017-09-27-column2-row/index.html","9cdbc1368e2ec6da433511340339b445"],["/2017/09/27/2017-09-27-row-2-column/index.html","5b91a722641b164a4d529cb41a1f38ce"],["/2017/09/28/2017-09-28-study-data-structure /index.html","8712edb738485d800bf2af93c1020aec"],["/2017/11/30/2017-11-30-opencv-types/index.html","30ae695bd4f0f1d3e17e63866b854abe"],["/2017/12/07/2017-12-07-linux-rm-messy-code-file/index.html","80647a0b1deb1a13b600337b8ea23239"],["/2017/12/12/2017-12-12-Test/index.html","95467a0eb23c5b16448980319746fc41"],["/2017/12/14/2017-12-14-test-password/index.html","ccd002dcba1296636d2cb5e1a8467fa8"],["/2017/12/15/2017-12-15-baidu-advanced-search/index.html","d565bd3d968b13c6a0c2db014359132a"],["/2018/02/04/2018-02-04-spark-shuffle-summary/index.html","19e79b00a141969f2f53482f4f2c52ac"],["/2018/04/02/2018-04-02-hive-export-csv/index.html","cf7d1bfde4f875d4e8a449ca64995f25"],["/2018/06/18/2018-06-18-Hbase-rest-api/index.html","8147c459d3d266c43f5b19f0fa0e5159"],["/2019/01/30/2019-01-30-树莓派使用技巧/index.html","1cc688daa1ea077c408a2232fcdbe4f0"],["/2019/02/26/2019-02-26-bash-functions/index.html","2aa467251aca6cb0303165ec42398b87"],["/2019/07/11/2019-07-14-crawler-category/index.html","4638d0abe5f0506e8a4ec09ea8e5cb90"],["/2020/02/23/2020-02-23-Mac-software-list/index.html","77dbc17b682e042fff9c42c9489f57f3"],["/2020/02/23/2020-02-23_Test/index.html","974a6fb645c967e825eb02acc7af0d65"],["/2020/02/24/2020-02-24-podcast-list/index.html","139663d796578d3891bcbefffa055cc6"],["/about/index.html","dfc9bb4dd270f5ae7361ae9ad86f1b80"],["/api/index.html","4140a148ed7e83d95e94476c24d1f016"],["/archives/2017/06/index.html","a2d1a2a2eee8627d381698aaf35d9720"],["/archives/2017/07/index.html","061f374cc39e65f43225dd7107dd1254"],["/archives/2017/09/index.html","36c4ac2efdb92fdf0d022ea732a5531d"],["/archives/2017/11/index.html","cfda8d24354d0057fc85b0b98a8436a9"],["/archives/2017/12/index.html","ae5ad3aa51015cd7f25366f962cdf629"],["/archives/2017/index.html","e13c8e5d56f414c0c49672f08b7c8c85"],["/archives/2017/page/2/index.html","438b9efa622f883f7adf34e28e1adbf9"],["/archives/2018/02/index.html","7c8a8e2f7b63f2598c3ec38baf7582a8"],["/archives/2018/04/index.html","af7b0c0953c28b8deab45020bf454915"],["/archives/2018/06/index.html","d96f5aa6a6276dcc784315fd054ae73c"],["/archives/2018/index.html","1e2169821937c421091ddf05e1e7558d"],["/archives/2019/01/index.html","cd0e60a2831416de9edcbfd5057e8ab2"],["/archives/2019/02/index.html","6695127a24b1e2615a76cc053f692ef8"],["/archives/2019/07/index.html","81a23bd089ec3735718ec5608eada05b"],["/archives/2019/index.html","a295a854b45939f97ca03090ee1ce971"],["/archives/2020/02/index.html","c6b6d576dc3ec9815134d424fb7a7e42"],["/archives/2020/index.html","017c123ae5674a169574bdbf2e1471db"],["/archives/index.html","84b79f4ecadbb6ecd54ec5091c2f0512"],["/archives/page/2/index.html","b67992b2c1829da76681c463666605b9"],["/archives/page/3/index.html","950a91b3d33b7192146c94877654a51e"],["/assets/css/hint.min.css","89d5218877646048419c7d1a146a50f7"],["/book/index.html","eb64058e0ea76820eafdbf0a3d25c38c"],["/categories/Hbase/Bigdata/index.html","9e8e897255a586fffe0da4f2fea5cb2a"],["/categories/Hbase/index.html","ebff796dd2ed2575060156befabcbc41"],["/categories/Hive/index.html","ec4cc2e79c7ba7a7805a45d97ecffe24"],["/categories/Hive/大数据/index.html","74cfee7f7d0aba65a63fdf6b97a797e0"],["/categories/Linux/index.html","6bb9f9ac56dd8ddeabec9d0306378075"],["/categories/Mac/index.html","10cfe2618f1571439f910666fc2554b1"],["/categories/Spark/index.html","0fad6273b224e45666b81a48f1471f97"],["/categories/index.html","42fcaf3dea1683cea2090adeb368f504"],["/categories/other/index.html","77527a744f9014b8bdf7157188a64589"],["/categories/programming/index.html","8be2ab04888f50ab724ffe75756e3548"],["/categories/stack/index.html","852449b382e7441b2941c3068d46b5f4"],["/categories/树莓派/index.html","5fb2a46b0ecf240ad984dd738d69d253"],["/categories/每日一学/index.html","c6e09a4075d1853450c0f8ae9718ca6a"],["/categories/爬虫/index.html","638f4bf8af934b70e7740c2e3b6e262c"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/css/main.css","a4762cc90476ff35d971da98ac0e7609"],["/en/2017/06/03/2017-06-03-Using Tika to support PDF and DOC search in Solr /index.html","40b90a89a582a4c646c291631c3676e8"],["/en/2017/06/06/2017-06-06-ElasticSearch-introductory-install-local/index.html","2ee76e3fafe7e33798f27b96257d6eaa"],["/en/2017/07/02/2017-07-02-ElasticSearch-introductory-install-cluster/index.html","3a012a8676f0aa1b4ff9a5a0e342dea0"],["/en/2017/07/03/2017-07-03-ElasticSearch-introductory-install-docker/index.html","b001952c3fb63844d1e812d403dad96c"],["/en/2017/09/25/2017-09-25-WebHDFS-REST-API/index.html","7e874944a024ef96fffcfeaa03faafe3"],["/en/2017/09/25/2017-09-25-npm-Permission-denied/index.html","3c750de3f744351ce391029e6e36154b"],["/en/2017/09/27/2017-09-27-column2-row/index.html","95e947f7add1b42802a2a18a5af0292d"],["/en/2017/09/27/2017-09-27-row-2-column/index.html","6479d8a09c0281e93fa6ab492df080d1"],["/en/2017/09/28/2017-09-28-study-data-structure /index.html","8408dfc1a51954350d808f5e02c4549d"],["/en/2017/11/30/2017-11-30-opencv-types/index.html","59371b1fa92e934bc18c31407dcb1a64"],["/en/2017/12/07/2017-12-07-linux-rm-messy-code-file/index.html","1cb4d71d91904f8dc0bb63c9f938f067"],["/en/2017/12/12/2017-12-12-Test/index.html","b8fef45e852f9c82dc24c3968221ce65"],["/en/2017/12/14/2017-12-14-test-password/index.html","3f33d961d94005254cf16bf5cf0e9964"],["/en/2017/12/15/2017-12-15-baidu-advanced-search/index.html","80fa836be58ed5586688631f54e183a0"],["/en/2018/02/04/2018-02-04-spark-shuffle-summary/index.html","e45f3d85481ae218a6d2f3ead1fbf74f"],["/en/2018/04/02/2018-04-02-hive-export-csv/index.html","cc77b53dc70b3024f34a35932e78f9dc"],["/en/2018/06/18/2018-06-18-Hbase-rest-api/index.html","03fd0cd9fe90d1fd5997a963c41a8478"],["/en/2019/01/30/2019-01-30-树莓派使用技巧/index.html","9b70a6bac268acbcdc20b95aad1bb22e"],["/en/2019/02/26/2019-02-26-bash-functions/index.html","e337ce43e2f8c1462b19f6f75e9f8aef"],["/en/2019/07/11/2019-07-14-crawler-category/index.html","ac4dd8d0d28f91950f827ae031ee920d"],["/en/2020/02/23/2020-02-23-Mac-software-list/index.html","eac9d8854ce8faa0f970566d34b7d066"],["/en/2020/02/23/2020-02-23_Test/index.html","fd144351b28ee7ce09d3feb88330339c"],["/en/2020/02/24/2020-02-24-podcast-list/index.html","de9e09f05dace03d3475e8566cf49f98"],["/en/about/index.html","4153fbdedb0084a39c061bbeee437139"],["/en/archives/2017/06/index.html","6d7c73a9aabf7894627e9223609177d6"],["/en/archives/2017/07/index.html","9e8518751a31d892034298cb7b423d84"],["/en/archives/2017/09/index.html","2cf31cdf6030d37e97ea51f0d964e286"],["/en/archives/2017/11/index.html","5f500b58e018778f17cda3f64a49fb4b"],["/en/archives/2017/12/index.html","237e4f21fbbf558dc4f0340dac1ddd99"],["/en/archives/2017/index.html","e07473daed2f44faa220494d92b0da64"],["/en/archives/2017/page/2/index.html","810d6fa0ef5b2a5961367e615dfc6a1e"],["/en/archives/2018/02/index.html","a05acf65bbdbde5ea56e9c7f133785fc"],["/en/archives/2018/04/index.html","c3cad12843808d48c7e4fc6939bbdab1"],["/en/archives/2018/06/index.html","591fd5f28630d6b635acc59d1206df6c"],["/en/archives/2018/index.html","a7072d01e22be8277ee4f6e23606461b"],["/en/archives/2019/01/index.html","ec4849d85d90882d02dd580381c2cf21"],["/en/archives/2019/02/index.html","33859f420daffc2a7522d96476410c39"],["/en/archives/2019/07/index.html","584173f802772d836efe67e52ee1bd3b"],["/en/archives/2019/index.html","4d1c0bdee3fda75028eca5db05555428"],["/en/archives/2020/02/index.html","f3588334a0fd35d16c687100de6a6e7b"],["/en/archives/2020/index.html","3a4d32266bfebab78f79e54f8b76de46"],["/en/archives/index.html","2eeef616f5c04c24d9eab485188ee1e0"],["/en/archives/page/2/index.html","540029d91d80f41af9b357853806f323"],["/en/archives/page/3/index.html","eb47f9ef75718d96242de2007f0b2739"],["/en/book/index.html","e264829b5d5961710179bbea211de677"],["/en/categories/Hbase/Bigdata/index.html","4a759d173131ff62ee995c0d49ffa317"],["/en/categories/Hbase/index.html","854f6f09cc424a52dc177d73b40726f4"],["/en/categories/Hive/index.html","f464b4267fd58b95f32fc58ae7b41577"],["/en/categories/Hive/大数据/index.html","cbfc03f773fdaebbfbf14527b44a7ad6"],["/en/categories/Linux/index.html","9ff5cae4e29a8867adc4e20764672986"],["/en/categories/Mac/index.html","05d4a99a7c7e4df4f51a13f23f0f985c"],["/en/categories/Spark/index.html","6436e0f68d01084d07b992c30718aa3f"],["/en/categories/index.html","57ed7453ef2bf44c30dd2a17dee353c2"],["/en/categories/other/index.html","4c97bc8266a1ed35cb65a066901c73f5"],["/en/categories/programming/index.html","59e5434022481bb959a43c859c65f34e"],["/en/categories/stack/index.html","5b9e0a45e2a4991887bc52b78d83bae0"],["/en/categories/树莓派/index.html","a33855bb913ae658482588a7e4f7ecff"],["/en/categories/每日一学/index.html","4452b72faba2c918299a8c291bdf2ed2"],["/en/categories/爬虫/index.html","429dbee61c612bad7f7e4fc89bbaaf11"],["/en/projects/index.html","3d73da505de9a6c10db6f5b1f2462b78"],["/en/tags/index.html","e0433ebcc7ba32b099abb24dea3658c4"],["/en/todolist/index.html","9e76b448fd41ae1a119e5a76b7071a75"],["/fragments/categories/Hbase/Bigdata/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hbase/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hive/大数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Spark/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/other/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/programming/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/stack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/树莓派/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/每日一学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/爬虫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Bash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Hash-Shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Sort-Shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/WebHDFS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/es/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hadoop/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hbase-BigData/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hive-BigData-csv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/npm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/opencv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/rss/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/solr/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/spark/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/tika/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/大战数据结构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/大数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/树莓派/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/测试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/爬虫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/images/404.png","f0c595e3be3cc0c765f12ea87b878f58"],["/images/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["/images/alipay-reward-img.jpg","0c22f1f43fe0b47c32be4ff7d55d8caa"],["/images/avatar.gif","f9776137dff2adf5b764dcb3b948af8f"],["/images/avatar.png","fd0a85c9be983b34d1689af2b580c0dc"],["/images/bg_body.png","b09e6a0e740bdb3ca38a6163fd846b1d"],["/images/butterknife.gif","84b66a1c0caee9c008da2a266095c9a7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/ico_facebook.png","a1a72a778964afa81aa2b634db744d77"],["/images/ico_github.png","8bb5396f4942399e40d1620a57eaa05c"],["/images/ico_google.png","19e43fb46d2b2963294cdc86baec57af"],["/images/ico_twitter.png","db1f6450ea6e08d6fb3dab9bd641e394"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/pages/ashenna.png","2cd837d71b61d85d58058d573e425cfd"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/solr-add-core-20170603161114.png","050da1bbf3cc087ca2f5fe48be13ea88"],["/images/wechat-reward-img.jpg","20aa7373f131d888b9b5e2620cba3cc9"],["/images/京东电脑版.png","be9bbdea53f21672a7a46e0c96516707"],["/index.html","13127007d59ed226cc6bd4f4744f1e24"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","44723ec5160b178466c1b3a3cb7fec85"],["/js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["/js/src/post-details.js","cdf759f15cc2f980fa1cf07e64475ae7"],["/js/src/schemes/pisces.js","a1ade5cff492996b8c0b56b27e58da2c"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","a928b05b44a8ba0ec7b5628947da7c07"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b652e3b759188ceaf79182f2fe72ea64"],["/lib/font-awesome/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d5f5bd067333c7ef593bcb74c5eeac88"],["/page/3/index.html","cec21cdc4404d55cb5cd0285998bf1d5"],["/plugins/index.html","36ea4e58f6a1a070f31585e750408244"],["/projects/index.html","a70d0b08d9950b6e816ad87119ff66da"],["/static/images/2017-06-03/solr-add-core-20170603161114.png","050da1bbf3cc087ca2f5fe48be13ea88"],["/static/images/2017-06-03/solr-add-field-to-schema-20170603154432.png","bd105afa75b38aa68bcce09004281f58"],["/static/images/2017-06-03/solr-exec-data-import20170603154455.png","7ff0d36e5aa6c3d90b49dda6cde9a1b6"],["/static/images/2017-06-03/solr-search-20170603154351.png","8c580cbaf5fdeda792bdc05c81de2ad4"],["/static/images/2019-07-14/京东手机版类目选择.png","d1ee058c8caa6c033581e7d2c00d46d2"],["/static/images/2019-07-14/京东电脑版.png","be9bbdea53f21672a7a46e0c96516707"],["/static/images/2019-07-14/京东触屏版类目结果.png","a2da8b367fd6710cdb5d0058f40aa60e"],["/tags/Bash/index.html","84a5bc3c27e14510679137fe666e47df"],["/tags/Hash-Shuffle/index.html","acc1fedb3f557a7bf1dee25371abacf6"],["/tags/Mac/index.html","b249641d308493aca42da599dc7747d7"],["/tags/Sort-Shuffle/index.html","7876aed5f13bd346cf94956b5b221c09"],["/tags/WebHDFS/index.html","f8cc91e34d1fcaaa69e280c5d8a06edc"],["/tags/es/index.html","fc7bb9c0f110f6e5f37bc47dd0baedb4"],["/tags/hadoop/index.html","776a5ebd7843d91bfdb79e9199cbf6c3"],["/tags/hbase-BigData/index.html","a5061fb561dcdcf383b5e1a2ec597059"],["/tags/hexo/index.html","72ef8109a41630b56ee8cff44304a5b1"],["/tags/hive-BigData-csv/index.html","37d10debd5d13b860031aa217a2a6d7f"],["/tags/hive/index.html","68791924aa001c6b75f3305ef956b679"],["/tags/index.html","9a0da72cd9b3914c1803c21e23bb6caf"],["/tags/npm/index.html","49abc34c34ba6c6571def0acccc9e2b1"],["/tags/opencv/index.html","5f93c0ea126a2659b603a75d6b7fff3f"],["/tags/rss/index.html","ddf02be3188f164e44b8a823b705e3e3"],["/tags/shuffle/index.html","bcf597ac5aee554c268dd727fb83f702"],["/tags/solr/index.html","c38dee5cd4507a6d4976d3eeb3c77e2a"],["/tags/spark/index.html","eac2ef68b9489f82ce0cb75528b49786"],["/tags/tika/index.html","35e4a2c4821a9f9dd12afea773b8e06d"],["/tags/大战数据结构/index.html","9b4e86e3d6afedaf9d54f0cd39d80cd0"],["/tags/大数据/index.html","57536f91e0cc078203ded50fe10c8b4c"],["/tags/学习/index.html","46cfe59b50cdeb12ea0ff0548f7b84d3"],["/tags/技巧/index.html","76e7250c2326d23f94dcceaceafdaa50"],["/tags/树莓派/index.html","a423f8beb8cc31368a4ff49eec3a5ed1"],["/tags/测试/index.html","a7db9151e2c6d9ae05bdf76a3bf0e4bb"],["/tags/爬虫/index.html","11cd376716052068a1f22253c8ca13b4"],["/todolist/index.html","8191c014bb8546b4c89b731c7213a16f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







