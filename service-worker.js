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

var precacheConfig = [["/2017/06/03/2017-06-03-Using Tika to support PDF and DOC search in Solr /index.html","702370a63d97873d54d3627b65add973"],["/2017/06/06/2017-06-06-ElasticSearch-introductory-install-local/index.html","c40c58bdfa0675817537537c8054109d"],["/2017/07/02/2017-07-02-ElasticSearch-introductory-install-cluster/index.html","7fc33d10949b38ce5746eaedf477364c"],["/2017/07/03/2017-07-03-ElasticSearch-introductory-install-docker/index.html","f0339161da742c25059cc99cfed152ce"],["/2017/09/25/2017-09-25-WebHDFS-REST-API/index.html","e013eced0f856d179aa48197aa9e1c22"],["/2017/09/25/2017-09-25-npm-Permission-denied/index.html","5820c2c929e386af026db89398c363ce"],["/2017/09/27/2017-09-27-column2-row/index.html","315f38f2cc729a240647663efda852f3"],["/2017/09/27/2017-09-27-row-2-column/index.html","4f30f9ace163285c3d1809c645902edf"],["/2017/09/28/2017-09-28-study-data-structure /index.html","097eec63cdc7d0d158985b58c0722658"],["/2017/11/30/2017-11-30-opencv-types/index.html","282c5acb8e567a3a1622c5a7c25b9bd0"],["/2017/12/07/2017-12-07-linux-rm-messy-code-file/index.html","a91caac2af87d3242c054e0b64b80afb"],["/2017/12/12/2017-12-12-Test/index.html","248b754b464af11269109f17cbeae418"],["/2017/12/14/2017-12-14-test-password/index.html","e9eea640499c0562d231abf21b5c61b4"],["/2017/12/15/2017-12-15-baidu-advanced-search/index.html","195fd6167f2a36218382103e7f74b494"],["/2018/02/04/2018-02-04-spark-shuffle-summary/index.html","c5692228b20f3a145d321820df47ddeb"],["/2018/04/02/2018-04-02-hive-export-csv/index.html","1717d3e58a2533ab24b50b58e58f8492"],["/2018/06/18/2018-06-18-Hbase-rest-api/index.html","fac6dd6100e2a0550236d02d69fd0944"],["/2019/01/30/2019-01-30-树莓派使用技巧/index.html","9be196d1835a57378d4d1a63efc6569c"],["/2019/02/26/2019-02-26-bash-functions/index.html","fcd3cba1db5b8072f8cce41ec1011f9f"],["/2019/07/11/2019-07-14-crawler-category/index.html","4a77d6cb3727f061ca513edd1ecf1448"],["/2020/02/23/2020-02-23-Mac-software-list/index.html","9b843ab7d4f78efad085b492579d2289"],["/2020/02/23/2020-02-23_Test/index.html","d5f7f8b8bcb11546291d02ab7996409d"],["/about/index.html","d205d452f1f3e547037816581cc41ab2"],["/api/index.html","4140a148ed7e83d95e94476c24d1f016"],["/archives/2017/06/index.html","45400f9997c7042a113b7f5088bf563d"],["/archives/2017/07/index.html","fb9ead68276009325ec13408b0320f43"],["/archives/2017/09/index.html","5e4aa697d3da72bb2da3d1ef8b41a05b"],["/archives/2017/11/index.html","1def151ca9cd760e21f88f3d1df07f61"],["/archives/2017/12/index.html","6e761c5d19de4f3daad7290df4bdf97d"],["/archives/2017/index.html","08241fa44e8a00ec2689caf5edea8bcc"],["/archives/2017/page/2/index.html","a2c03950437de4618563913d0bb1d373"],["/archives/2018/02/index.html","c024886470d2aff953d714e31e01d90d"],["/archives/2018/04/index.html","4778f4dd36ab8372aa0df1682b6bfa7f"],["/archives/2018/06/index.html","92e1abfb0d25e251b0409ba754343089"],["/archives/2018/index.html","ac106dc9a3d14ce7a639d598b1bb394a"],["/archives/2019/01/index.html","f6eda0006fa56a09f3b990e66c14a156"],["/archives/2019/02/index.html","b4b71e7dcbf2de76a61f62d929b52afe"],["/archives/2019/07/index.html","849f953c96ba54a93b6fdf871e192267"],["/archives/2019/index.html","a46e51952c4ba0554678f2ff2ba49428"],["/archives/2020/02/index.html","f27accc3760ea952aa5380bd174ef17e"],["/archives/2020/index.html","92a1e4b56fa0f42b2933b2b790e8ceaa"],["/archives/index.html","8a52321d0389e426a01c0f40c757fdd8"],["/archives/page/2/index.html","b927a939ea4d4e5ad8aac395eabb378f"],["/archives/page/3/index.html","4036dc54816b6223668aebbfdefcfb0a"],["/assets/css/hint.min.css","89d5218877646048419c7d1a146a50f7"],["/book/index.html","19e5bb116ea18a045d730c747d4764a5"],["/categories/Hbase/Bigdata/index.html","fa8c3b2b80e044d1eda8dcbc372e61bd"],["/categories/Hbase/index.html","3ceec28022a2796ace022f4988c05fa3"],["/categories/Hive/index.html","f6ce6e66ce487828accb99cb03a5d8c0"],["/categories/Hive/大数据/index.html","f8d39cef754f12d9c2d9410c04a971b8"],["/categories/Linux/index.html","ec79168ec83adae7f56505ecf8643fea"],["/categories/Mac/index.html","60504e344dd427cdb1f9efc2ee2a75a3"],["/categories/Spark/index.html","66a1a7c8da2c479eec28e7cee7eb717d"],["/categories/index.html","b087b80fd35c5117607666f2346767e5"],["/categories/other/index.html","b7b47f6fd671520d2a23620cbf4a8f39"],["/categories/programming/index.html","038e06f5513fbe04229fd248d0452809"],["/categories/stack/index.html","2ec7dcb89d07757c4bc13e02ea6132ec"],["/categories/树莓派/index.html","2fca993888a8b47eb1349588f2573291"],["/categories/每日一学/index.html","769265f25b2e6fcb9e2d7ae021122a05"],["/categories/爬虫/index.html","3feb2d2b9fecf57a0d3faee4983d5db2"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/css/main.css","f641f89bb77d8193255d201bf1c3a58e"],["/en/2017/06/03/2017-06-03-Using Tika to support PDF and DOC search in Solr /index.html","74ab22db1e02afd5546fcedf1d1328c0"],["/en/2017/06/06/2017-06-06-ElasticSearch-introductory-install-local/index.html","ab86521256f3d5653ff904003df06113"],["/en/2017/07/02/2017-07-02-ElasticSearch-introductory-install-cluster/index.html","dd64e5d8901cb5c5599b459a9d8feda8"],["/en/2017/07/03/2017-07-03-ElasticSearch-introductory-install-docker/index.html","65a084e40e19cab679fff4f78642ad7a"],["/en/2017/09/25/2017-09-25-WebHDFS-REST-API/index.html","ac30866a7fb75e6c7e04e02e63ecc550"],["/en/2017/09/25/2017-09-25-npm-Permission-denied/index.html","9a44df09d29b742d04d691b001dbc1e7"],["/en/2017/09/27/2017-09-27-column2-row/index.html","ff8329ad83ed97800e984dff90f2de82"],["/en/2017/09/27/2017-09-27-row-2-column/index.html","d7379932accacbe5387edf3d977729c3"],["/en/2017/09/28/2017-09-28-study-data-structure /index.html","8473f7771489f390eca0b402702fadc4"],["/en/2017/11/30/2017-11-30-opencv-types/index.html","1707e77b2d3488de23cd97de3eca24c7"],["/en/2017/12/07/2017-12-07-linux-rm-messy-code-file/index.html","b4a755118906b942bcc46dedda3d995d"],["/en/2017/12/12/2017-12-12-Test/index.html","71bcede95e978239e188ad33bf92419e"],["/en/2017/12/14/2017-12-14-test-password/index.html","c7fe7c2369d2024285acddea0e713bf9"],["/en/2017/12/15/2017-12-15-baidu-advanced-search/index.html","27f05ce45cfe4b5a6dbfc4fb9e9b4c04"],["/en/2018/02/04/2018-02-04-spark-shuffle-summary/index.html","0e802715e10bcf4ed693ffe7003cf869"],["/en/2018/04/02/2018-04-02-hive-export-csv/index.html","e840a58974fd52b37b55fb0238fb5b2f"],["/en/2018/06/18/2018-06-18-Hbase-rest-api/index.html","ab800a447e2a34218978c203eaebaf4d"],["/en/2019/01/30/2019-01-30-树莓派使用技巧/index.html","c24769d05fb918d4635862fd4739d802"],["/en/2019/02/26/2019-02-26-bash-functions/index.html","9f5e24e76d47aed1a2ff370ff9548771"],["/en/2019/07/11/2019-07-14-crawler-category/index.html","417976ad3acf2d4194357faaf02027cd"],["/en/2020/02/23/2020-02-23-Mac-software-list/index.html","f7c22dbb24d6c394ffe17b621413841c"],["/en/2020/02/23/2020-02-23_Test/index.html","340ab463e10a7f6d6c843fa1927cea41"],["/en/about/index.html","3b79ac7aa6ddffcce3b15ba16183fcf1"],["/en/archives/2017/06/index.html","6a679d38a4873c730bb10d167f54196d"],["/en/archives/2017/07/index.html","704e453978f3ade7648eb6d80cb908db"],["/en/archives/2017/09/index.html","3b12b579463167681851f857f688d3ee"],["/en/archives/2017/11/index.html","f491184b78ca8ec2b082cbf8a0cf3486"],["/en/archives/2017/12/index.html","18eab19fe44e2613403787100bd8e08b"],["/en/archives/2017/index.html","ed63318b8942273a9fdb14f27697b5a7"],["/en/archives/2017/page/2/index.html","887ad203d096141f313ddd7398d954c3"],["/en/archives/2018/02/index.html","48928d08aeef70bd516f808330c5b5a9"],["/en/archives/2018/04/index.html","4a55067c07bcb18e67bdc1e31eb05c23"],["/en/archives/2018/06/index.html","096433c1c7d3572672b8bc16aa3e8f00"],["/en/archives/2018/index.html","ad4d3c5d364df2842c3e18b3fd26e8ee"],["/en/archives/2019/01/index.html","e63aca3ddb9ac8225e4860150be60712"],["/en/archives/2019/02/index.html","182f96c2c04b92431d3b445b8a37cea3"],["/en/archives/2019/07/index.html","db2bc3e6d0b6ba2252fcd368f18b45e0"],["/en/archives/2019/index.html","c4177a97b9eefebb2c09a87775e6f2ca"],["/en/archives/2020/02/index.html","8311812ca53c44526128c911da9a034d"],["/en/archives/2020/index.html","4544a1cd3c39379aac0f18237f9fe70c"],["/en/archives/index.html","3262dc3df5eeed5a5957b963a87d8feb"],["/en/archives/page/2/index.html","e9e4419bdfcb06029ad7eb146226dfda"],["/en/archives/page/3/index.html","116687ca087234943eb9b5f06e2308ac"],["/en/book/index.html","09afe145a8add7d27205ea575e92f402"],["/en/categories/index.html","6ee84ad4e83533820c28dcbc6439871c"],["/en/projects/index.html","8fff62ff256573f333452952c7833694"],["/en/tags/Bash/index.html","a9e6058aa4e80f04fa8b03d3a7bcb059"],["/en/tags/Hash-Shuffle/index.html","34298457ec212e0005b2307bd21be05b"],["/en/tags/Mac/index.html","f079cdda5031620deb5ea103dbf6b9d8"],["/en/tags/Sort-Shuffle/index.html","d0993b85bc03299256916705ebde8076"],["/en/tags/WebHDFS/index.html","60c290fafb2be79205ea1710bff97fce"],["/en/tags/es/index.html","e50d8e608c4af2ec8822238d8202089c"],["/en/tags/hadoop/index.html","0291e3c57fdab107c75e80a086a64bb4"],["/en/tags/hbase-BigData/index.html","78dd4d88afc5d5b881b4a79a5206547b"],["/en/tags/hexo/index.html","563fd0b9c6c7543080294a3b8c0f5069"],["/en/tags/hive-BigData-csv/index.html","3801dc79573bbc3d15ba9957c8d7c7cc"],["/en/tags/hive/index.html","cfcf475b47c4126ac3e4631a85a65bf6"],["/en/tags/index.html","3012854ff150fc0f69803fe0beee7c1e"],["/en/tags/npm/index.html","f270da2b70c6c6ea3030f9754a7b2bba"],["/en/tags/opencv/index.html","95ff9200e98be92f27d2b06f5ca7e4c1"],["/en/tags/shuffle/index.html","f16ac8ef5f153f95e3c0988de19fa024"],["/en/tags/solr/index.html","37f4df99406e047105800c5ffcfd1964"],["/en/tags/spark/index.html","eb226dd74f4de660fd4856ad84569a3c"],["/en/tags/tika/index.html","f262859679b9873667acfd160e24c776"],["/en/tags/大战数据结构/index.html","842fdfbd294588d623effc3a73e24705"],["/en/tags/大数据/index.html","d55655f1e2ca6c9168eca78f2aa36328"],["/en/tags/学习/index.html","ac33cc51118b291cbba37e4ff3c708ea"],["/en/tags/技巧/index.html","1d96735109867add36ddeac32d2b3cda"],["/en/tags/树莓派/index.html","9e367edddf017f69dfdad190b75dae01"],["/en/tags/测试/index.html","bd9162e0f22fd332095aa2cec63ecedf"],["/en/tags/爬虫/index.html","9b9bdd0c772e544f6bbc022d379e705a"],["/en/todolist/index.html","1b1275603cffa92498b634e7c30cd4fd"],["/fragments/categories/Hbase/Bigdata/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hbase/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hive/大数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Spark/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/other/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/programming/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/stack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/树莓派/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/每日一学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/爬虫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Bash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Hash-Shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Sort-Shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/WebHDFS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/es/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hadoop/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hbase-BigData/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hive-BigData-csv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/npm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/opencv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/solr/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/spark/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/tika/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/大战数据结构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/大数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/树莓派/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/测试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/爬虫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/images/404.png","f0c595e3be3cc0c765f12ea87b878f58"],["/images/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["/images/alipay-reward-img.jpg","0c22f1f43fe0b47c32be4ff7d55d8caa"],["/images/avatar.gif","f9776137dff2adf5b764dcb3b948af8f"],["/images/avatar.png","fd0a85c9be983b34d1689af2b580c0dc"],["/images/bg_body.png","b09e6a0e740bdb3ca38a6163fd846b1d"],["/images/butterknife.gif","84b66a1c0caee9c008da2a266095c9a7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/ico_facebook.png","a1a72a778964afa81aa2b634db744d77"],["/images/ico_github.png","8bb5396f4942399e40d1620a57eaa05c"],["/images/ico_google.png","19e43fb46d2b2963294cdc86baec57af"],["/images/ico_twitter.png","db1f6450ea6e08d6fb3dab9bd641e394"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/pages/ashenna.png","2cd837d71b61d85d58058d573e425cfd"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/solr-add-core-20170603161114.png","050da1bbf3cc087ca2f5fe48be13ea88"],["/images/wechat-reward-img.jpg","20aa7373f131d888b9b5e2620cba3cc9"],["/images/京东电脑版.png","be9bbdea53f21672a7a46e0c96516707"],["/index.html","901a15fbedd441e601c9df944ed7acb5"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","44723ec5160b178466c1b3a3cb7fec85"],["/js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["/js/src/post-details.js","cdf759f15cc2f980fa1cf07e64475ae7"],["/js/src/schemes/pisces.js","a1ade5cff492996b8c0b56b27e58da2c"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","a928b05b44a8ba0ec7b5628947da7c07"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b652e3b759188ceaf79182f2fe72ea64"],["/lib/font-awesome/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","412754b871b51111ed42a57e0495d7e2"],["/page/3/index.html","a0b7b58dc7d6b73abbb8bf2e7a17ee06"],["/plugins/index.html","36ea4e58f6a1a070f31585e750408244"],["/projects/index.html","cfaf85ae8f3998dd430e56a3afa4859b"],["/static/images/2017-06-03/solr-add-core-20170603161114.png","050da1bbf3cc087ca2f5fe48be13ea88"],["/static/images/2017-06-03/solr-add-field-to-schema-20170603154432.png","bd105afa75b38aa68bcce09004281f58"],["/static/images/2017-06-03/solr-exec-data-import20170603154455.png","7ff0d36e5aa6c3d90b49dda6cde9a1b6"],["/static/images/2017-06-03/solr-search-20170603154351.png","8c580cbaf5fdeda792bdc05c81de2ad4"],["/static/images/2019-07-14/京东手机版类目选择.png","d1ee058c8caa6c033581e7d2c00d46d2"],["/static/images/2019-07-14/京东电脑版.png","be9bbdea53f21672a7a46e0c96516707"],["/static/images/2019-07-14/京东触屏版类目结果.png","a2da8b367fd6710cdb5d0058f40aa60e"],["/tags/Bash/index.html","9f001b725749c678fdac3e8712c3a02c"],["/tags/Hash-Shuffle/index.html","d8e6fa2cf2a9fff4b5931d779e0f101a"],["/tags/Mac/index.html","250640f5426f02b62d72d058a4c88379"],["/tags/Sort-Shuffle/index.html","39d40fa8ce07012557ed8daeb7fb7d39"],["/tags/WebHDFS/index.html","c1c9985f56537ef7ef3c14f3bf17e3c4"],["/tags/es/index.html","2b8508f5971a110061a85c500cc112f2"],["/tags/hadoop/index.html","1b6080b3341ae40cea48450b967939ff"],["/tags/hbase-BigData/index.html","1da0f8daf0b4de2f926e56c7f69f9f37"],["/tags/hexo/index.html","46d21731b5b6225e022535387b7e5a4d"],["/tags/hive-BigData-csv/index.html","f073692e5c390ee4eb0e67005b132f2c"],["/tags/hive/index.html","f8c83094ea1afbf3f450c61581a94dec"],["/tags/index.html","dee4eccff666ee6ea81a133e057f8cd4"],["/tags/npm/index.html","ddb95392771486e2e304c051ba3d94d8"],["/tags/opencv/index.html","6c17402cae101ed21a81513c25f7a66a"],["/tags/shuffle/index.html","4ebc3623c2492cf1dd6a1fd641195998"],["/tags/solr/index.html","32d5ea2d60ba2ec77ace11156ac2df2c"],["/tags/spark/index.html","2254ad14af9cc704347f110034830321"],["/tags/tika/index.html","e5523d4921125d999cbf5daf156f1479"],["/tags/大战数据结构/index.html","af790482581266d954d4b16f5f7412ac"],["/tags/大数据/index.html","562c879c617ee148250b64eae0196571"],["/tags/学习/index.html","15dccf4aa729c2526896c9447001de5d"],["/tags/技巧/index.html","2626be299c56cfd967ca5a4cdf42eb22"],["/tags/树莓派/index.html","bc3367a688108403928187c53cdd374f"],["/tags/测试/index.html","fd384b86a81c98caea57d4cbc60eecd8"],["/tags/爬虫/index.html","1b1963083db9ab1fbe6886ce1d32a498"],["/todolist/index.html","c8c531f8b6311b420e4b994caa6725a4"]];
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







