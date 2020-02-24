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

var precacheConfig = [["/2017/06/03/2017-06-03-Using Tika to support PDF and DOC search in Solr /index.html","a6a19eac5355624c39c5b5d4ea58c3cc"],["/2017/06/06/2017-06-06-ElasticSearch-introductory-install-local/index.html","5d14bc8bed0b3892a4cb1af6dfbac316"],["/2017/07/02/2017-07-02-ElasticSearch-introductory-install-cluster/index.html","f8da324e83b41365b6353ea941c85bae"],["/2017/07/03/2017-07-03-ElasticSearch-introductory-install-docker/index.html","6e5a26dc175a1c5f881c00d0d082c13d"],["/2017/09/25/2017-09-25-WebHDFS-REST-API/index.html","231f60ea0861294528ed36b2dfa15d8d"],["/2017/09/25/2017-09-25-npm-Permission-denied/index.html","68159c5f27063ab1f1da2d518c19e3c6"],["/2017/09/27/2017-09-27-column2-row/index.html","7509fc8479c6853de29986f982541724"],["/2017/09/27/2017-09-27-row-2-column/index.html","ea05f493389e601951c3692853298bc2"],["/2017/09/28/2017-09-28-study-data-structure /index.html","12acf2be7743087900a5658e88e14963"],["/2017/11/30/2017-11-30-opencv-types/index.html","c00e9e1adf0f2716c462f69c94bb53e8"],["/2017/12/07/2017-12-07-linux-rm-messy-code-file/index.html","07cc56d508ea89d0af3700a50f3f4037"],["/2017/12/12/2017-12-12-Test/index.html","2857ce3aef65102b7350d44611ae8b5f"],["/2017/12/14/2017-12-14-test-password/index.html","29854e435f949405a69b587f8707d4f9"],["/2017/12/15/2017-12-15-baidu-advanced-search/index.html","2019688f22844cebb627c2803f16a975"],["/2018/02/04/2018-02-04-spark-shuffle-summary/index.html","b2e71edf038b1b5fa8361b2348d85a85"],["/2018/04/02/2018-04-02-hive-export-csv/index.html","4f39ce536a605ac98e30e1d2bc87ba01"],["/2018/06/18/2018-06-18-Hbase-rest-api/index.html","c694afa440fa0caba2e808f2218ffcf0"],["/2019/01/30/2019-01-30-树莓派使用技巧/index.html","b601f799ea9867b4fb9a6a33263b4b4b"],["/2019/02/26/2019-02-26-bash-functions/index.html","233668d6ebcacf9164021a4eae8b0dcf"],["/2019/07/11/2019-07-14-crawler-category/index.html","74319b98996b44e1184527d50eb81c51"],["/2020/02/23/2020-02-23-Mac-software-list/index.html","7a88dfc156d90938027cfa3f2a8e89e8"],["/2020/02/24/2020-02-24-podcast-list/index.html","892de3750fa2bc6648696c6a1b6778e5"],["/about/index.html","3a62cb6b48e531e225c94018e46b1064"],["/api/index.html","4140a148ed7e83d95e94476c24d1f016"],["/archives/2017/06/index.html","53418647fa671e3f469319cec5a06724"],["/archives/2017/07/index.html","3788b05fa9f6f45644f2a38bc024fb05"],["/archives/2017/09/index.html","42e55df65653858c2ea1dd83d5a780cd"],["/archives/2017/11/index.html","67944e54228424dd562fa241824320b8"],["/archives/2017/12/index.html","084e2b0faef39fe2f9faf5889aad06c7"],["/archives/2017/index.html","9bd542e80d4c918cfa814b9fecc017a2"],["/archives/2017/page/2/index.html","8ef97cb72ccfedee435f5aab124e22cd"],["/archives/2018/02/index.html","58cb838eac625a7f6be043aea946effb"],["/archives/2018/04/index.html","4428dc0ea4a1ed2d777c47abd997cb2b"],["/archives/2018/06/index.html","aaa144d6a0a89fde45111eba003f136b"],["/archives/2018/index.html","5ddfe0e2de4de623035e627177642a1a"],["/archives/2019/01/index.html","e7c6c6eb67f7eb0cc5916862d321e89a"],["/archives/2019/02/index.html","467253150ba7e57bc76e167a298ba5a5"],["/archives/2019/07/index.html","ac85f2a6cd11a6b05f0a9bf57efc3481"],["/archives/2019/index.html","b44937dc166f5eded9cf57051519484a"],["/archives/2020/02/index.html","da1a92b14735310ec0be3378525acbc5"],["/archives/2020/index.html","6e7c9898bbf3d21c0cc71cbfeecd3f93"],["/archives/index.html","d9eafed01ed44916a8276b1af41b1579"],["/archives/page/2/index.html","36e791d43ae3ffc0f9ad2e9c35505408"],["/archives/page/3/index.html","d3358a29f2483a82f6dfaa39e370c800"],["/assets/css/hint.min.css","89d5218877646048419c7d1a146a50f7"],["/book/index.html","1dac312a34ff2e80ae7ecbc58c200700"],["/categories/Hbase/Bigdata/index.html","57e746f8c6328e02a1f4ffaa487c56b0"],["/categories/Hbase/index.html","7b021574a1a566f99a71a1e1b7b217d9"],["/categories/Hive/index.html","8b9c9b880d000ff493cc5cf2356e824d"],["/categories/Hive/大数据/index.html","3d4c981dd38db587d1d6943f5448be4d"],["/categories/Linux/index.html","1641f2876d2a9505130f868a4284a847"],["/categories/Mac/index.html","6fcfdee06e1f45b419ceb5988a66a004"],["/categories/Spark/index.html","5b701481a0ac7c76bd79602bcc141e73"],["/categories/index.html","05c09b5347e29eaaf8a7ae0ba0677c05"],["/categories/other/index.html","0643786c7e2257529483a410455893cd"],["/categories/programming/index.html","c96a866983af262ff08562fb1a14abca"],["/categories/stack/index.html","9920921bdb16e951cace50f5be4ffe01"],["/categories/树莓派/index.html","9a1292de21585ffa840e518ed3e45cc6"],["/categories/每日一学/index.html","c7389f4cf8237802552ecaa05c6aca1b"],["/categories/爬虫/index.html","cabe3bbe8e79f7e40c8d75ed9d276d1d"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/css/main.css","cf3812607245cd7ed8f5dcef07b794d4"],["/en/2017/06/03/2017-06-03-Using Tika to support PDF and DOC search in Solr /index.html","f5a919d1b19df0d8590379ece6326acc"],["/en/2017/06/06/2017-06-06-ElasticSearch-introductory-install-local/index.html","5531f14da9ea56e5a31406715723043f"],["/en/2017/07/02/2017-07-02-ElasticSearch-introductory-install-cluster/index.html","fed07d29f946d69b317b2dfb151e4e31"],["/en/2017/07/03/2017-07-03-ElasticSearch-introductory-install-docker/index.html","1c8e9ceefaa9a437a7b61478aa435b5c"],["/en/2017/09/25/2017-09-25-WebHDFS-REST-API/index.html","5d87ebac5118ee25700bbb43ceecf05a"],["/en/2017/09/25/2017-09-25-npm-Permission-denied/index.html","869adcd3ebe6e01052b79b525a4c4133"],["/en/2017/09/27/2017-09-27-column2-row/index.html","4b51331147921c05ec755942edf85063"],["/en/2017/09/27/2017-09-27-row-2-column/index.html","e6f5c07579d77b8bfb827cec70280f8b"],["/en/2017/09/28/2017-09-28-study-data-structure /index.html","17e6fb456b2008caa6c66a87ae3a0f8c"],["/en/2017/11/30/2017-11-30-opencv-types/index.html","efaeb6385f5a5267005475eecca1363d"],["/en/2017/12/07/2017-12-07-linux-rm-messy-code-file/index.html","0430c6d9c6a98387c8b44421cca71f6b"],["/en/2017/12/12/2017-12-12-Test/index.html","4fb189a050b28b7888d0871f6da9acd7"],["/en/2017/12/14/2017-12-14-test-password/index.html","a250822757a717de79e9740bc880284d"],["/en/2017/12/15/2017-12-15-baidu-advanced-search/index.html","1bb3a04550b3cd1aa106412c6f3c53f3"],["/en/2018/02/04/2018-02-04-spark-shuffle-summary/index.html","8d1783b61d676a662cdcd4f474d68986"],["/en/2018/04/02/2018-04-02-hive-export-csv/index.html","b033a289fc8f076dc23ff35f44b9edd2"],["/en/2018/06/18/2018-06-18-Hbase-rest-api/index.html","36a0a9a3dc0b1b93ce50d274aef2bea2"],["/en/2019/01/30/2019-01-30-树莓派使用技巧/index.html","bd8436907f04160752081bbd32ba6e42"],["/en/2019/02/26/2019-02-26-bash-functions/index.html","c9979c3a13b8dcd5b76b590efa4f2ee3"],["/en/2019/07/11/2019-07-14-crawler-category/index.html","902ad9e870b659dfee94309b32849474"],["/en/2020/02/23/2020-02-23-Mac-software-list/index.html","06c2c6af6d11edbb91dac6307cdce56f"],["/en/2020/02/24/2020-02-24-podcast-list/index.html","c33d60322b4ec2f380941abcf202ce8e"],["/en/about/index.html","0e8ea2996b32aa6c853da2327db4f88e"],["/en/archives/2017/06/index.html","03ce2834e1f88860c63c3cb9f4de29b6"],["/en/archives/2017/07/index.html","03acc33526e0f6f636af57a2842394f6"],["/en/archives/2017/09/index.html","46fae9de2b48d0a7b3bbe141c9778f82"],["/en/archives/2017/11/index.html","10496d99f76e0d75407a5b9c37a6b57c"],["/en/archives/2017/12/index.html","6581e200135e522b19abcca1f56e6615"],["/en/archives/2017/index.html","d53967a0df38dc0678285e81024358bc"],["/en/archives/2017/page/2/index.html","bf0955a252c4ab1ff8ae2a52646ba6cb"],["/en/archives/2018/02/index.html","ec2f56590b53d0a51b5a124df67acd65"],["/en/archives/2018/04/index.html","857ff377d12fbebbe2b4e5ce087c1f71"],["/en/archives/2018/06/index.html","6f9c7609731517c72dabfed6085a07ac"],["/en/archives/2018/index.html","f13442dd6d7aa66ad00f6586c8aee45d"],["/en/archives/2019/01/index.html","79cf58bc7194363851cf8f55ee89b23e"],["/en/archives/2019/02/index.html","1f37997d45da3ad36aca102958ab32cf"],["/en/archives/2019/07/index.html","3268a38e76f705fca52a8ae9bc155044"],["/en/archives/2019/index.html","8aa011f16f110caf0263010e7abe8767"],["/en/archives/2020/02/index.html","250d614bc5bf1f5d3d04edfa3403cc49"],["/en/archives/2020/index.html","c3b80c4ed0b07a95ce3598d1899cc919"],["/en/archives/index.html","44b98217afd23d72e704a57d9905d847"],["/en/archives/page/2/index.html","385d295aa4deb4e01d2e500882c83e9a"],["/en/archives/page/3/index.html","cb57450a4923c93f9071de8d991f0fd8"],["/en/book/index.html","0c8e3c7dec69e35ca4aa46f08882fca7"],["/en/categories/Hbase/Bigdata/index.html","62f680f5e14017808efe624442f5fcc9"],["/en/categories/Hbase/index.html","b2e75472a2c330df6f88de8e77374be7"],["/en/categories/Hive/index.html","cabac73cf9ece1f6ead487669e2d5f99"],["/en/categories/Hive/大数据/index.html","15916e8e4dc7dd49e8107d5c42658f88"],["/en/categories/Linux/index.html","34a419780f582485b8709c74d2263153"],["/en/categories/Mac/index.html","2a199c8f47dd50d646f348441f1c3648"],["/en/categories/Spark/index.html","3a32899b3ec1fdaddc93b8d9b53cf8dc"],["/en/categories/index.html","d29daf36aa1477ab05a6e66d9d24c51c"],["/en/categories/other/index.html","2e8ef955f8a9f8ea47741b506a388bc7"],["/en/categories/programming/index.html","43e69daebef59ad7fdc9f5e41f2abdaf"],["/en/categories/stack/index.html","302c833bff09181328bea9da3cd73320"],["/en/categories/树莓派/index.html","b18de23142cfa0936c1553b4d568a0a3"],["/en/categories/每日一学/index.html","cb390086b0934fc465a185098080a35a"],["/en/categories/爬虫/index.html","d7c5c38786179a737b53ba8e5e8cc647"],["/en/index.html","945df517802a36fae9ed5c920ee163e7"],["/en/page/2/index.html","a3dd8d696a678758901a5d38db2674dd"],["/en/page/3/index.html","8dad2b6f676205113c245c8c50c0647a"],["/en/projects/index.html","8e37eb045693d3b969ce505d3cd73cc5"],["/en/tags/index.html","6bc7f7bd0aae44c744efe7e0a83af889"],["/en/todolist/index.html","ecec0e85699bf494f6439ec4aa0ee619"],["/fragments/categories/Hbase/Bigdata/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hbase/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Hive/大数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/Spark/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/other/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/programming/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/stack/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/树莓派/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/每日一学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/categories/爬虫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/index/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Bash/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Hash-Shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Mac/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/Sort-Shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/WebHDFS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/es/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hadoop/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hbase-BigData/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hive-BigData-csv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/hive/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/npm/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/opencv/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/rss/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/shuffle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/solr/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/spark/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/tika/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/大战数据结构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/大数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/学习/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/树莓派/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/测试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/fragments/tags/爬虫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/images/404.png","f0c595e3be3cc0c765f12ea87b878f58"],["/images/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["/images/alipay-reward-img.jpg","0c22f1f43fe0b47c32be4ff7d55d8caa"],["/images/avatar.gif","f9776137dff2adf5b764dcb3b948af8f"],["/images/avatar.png","fd0a85c9be983b34d1689af2b580c0dc"],["/images/bg_body.png","b09e6a0e740bdb3ca38a6163fd846b1d"],["/images/butterknife.gif","84b66a1c0caee9c008da2a266095c9a7"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/ico_facebook.png","a1a72a778964afa81aa2b634db744d77"],["/images/ico_github.png","8bb5396f4942399e40d1620a57eaa05c"],["/images/ico_google.png","19e43fb46d2b2963294cdc86baec57af"],["/images/ico_twitter.png","db1f6450ea6e08d6fb3dab9bd641e394"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/pages/ashenna.png","2cd837d71b61d85d58058d573e425cfd"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/solr-add-core-20170603161114.png","050da1bbf3cc087ca2f5fe48be13ea88"],["/images/wechat-reward-img.jpg","20aa7373f131d888b9b5e2620cba3cc9"],["/images/京东电脑版.png","be9bbdea53f21672a7a46e0c96516707"],["/index.html","8dcea158e1811453aa3d3b3ac8045f68"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","44723ec5160b178466c1b3a3cb7fec85"],["/js/src/bootstrap.js","73c38465c33a6b7d49820f12d4b6cd09"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/motion.js","5e50cb0717c2be4c43ecd948b3abca59"],["/js/src/post-details.js","cdf759f15cc2f980fa1cf07e64475ae7"],["/js/src/schemes/pisces.js","a1ade5cff492996b8c0b56b27e58da2c"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","a928b05b44a8ba0ec7b5628947da7c07"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ef16695116fce11e9c98891da9c09c94"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b652e3b759188ceaf79182f2fe72ea64"],["/lib/font-awesome/css/font-awesome.min.css","4083f5d376eb849a458cc790b53ba080"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","866c6d5b2114e50e8352f2e8f0e1f42a"],["/lib/jquery_lazyload/README.html","e08fbbcf23b2b1a896f7f5026c13d529"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a8d3af84b7b8091b99005cc12a45aaca"],["/page/3/index.html","0e10cdbde08c5fab13c765e9aaa720b9"],["/plugins/index.html","36ea4e58f6a1a070f31585e750408244"],["/projects/index.html","6a8d97b35aacf5b428b3ea55660e0e89"],["/static/images/2017-06-03/solr-add-core-20170603161114.png","050da1bbf3cc087ca2f5fe48be13ea88"],["/static/images/2017-06-03/solr-add-field-to-schema-20170603154432.png","bd105afa75b38aa68bcce09004281f58"],["/static/images/2017-06-03/solr-exec-data-import20170603154455.png","7ff0d36e5aa6c3d90b49dda6cde9a1b6"],["/static/images/2017-06-03/solr-search-20170603154351.png","8c580cbaf5fdeda792bdc05c81de2ad4"],["/static/images/2019-07-14/京东手机版类目选择.png","d1ee058c8caa6c033581e7d2c00d46d2"],["/static/images/2019-07-14/京东电脑版.png","be9bbdea53f21672a7a46e0c96516707"],["/static/images/2019-07-14/京东触屏版类目结果.png","a2da8b367fd6710cdb5d0058f40aa60e"],["/tags/Bash/index.html","9e2a9676cc043034246854eede91129c"],["/tags/Hash-Shuffle/index.html","f057d4f25b246faa8a46001cb0673f54"],["/tags/Mac/index.html","a56ad84c81b3f8518e1cae220318bc82"],["/tags/Sort-Shuffle/index.html","8753ee5b296a2690c1dcf0fd2c69109b"],["/tags/WebHDFS/index.html","0953ad67ceb988696de7a282c91f201f"],["/tags/es/index.html","1afa26aa21db0987ea8491c4155272e6"],["/tags/hadoop/index.html","9a78c8e89f6c26badbf8002804b47058"],["/tags/hbase-BigData/index.html","0fe89480752c3b42af138da9f5e1ea5f"],["/tags/hexo/index.html","9870c72c32e80d9a816bbe3a73446d46"],["/tags/hive-BigData-csv/index.html","728ec6a28d51be9710035b5c165f0fd5"],["/tags/hive/index.html","4865958648189a5dd2df5a41e1e63bf6"],["/tags/index.html","686dc42df02f37063daa353ed76ba673"],["/tags/npm/index.html","7aac47d360fb65543b18408a88eff931"],["/tags/opencv/index.html","0a88215c6b41a586478d5b186dbd7f52"],["/tags/rss/index.html","6d2ef72adc215b5aab2e54041cf7ff29"],["/tags/shuffle/index.html","b44a034b96ca14aa9cd9096b610ac44c"],["/tags/solr/index.html","50161e2f059520143340568d8bc5ea8a"],["/tags/spark/index.html","382c125ecf18b5e0ef01c4f28c68f441"],["/tags/tika/index.html","abc34a1745e99b7c37f48d2b928cbd04"],["/tags/大战数据结构/index.html","4ea2c9eec8532cc281722a048ba19a19"],["/tags/大数据/index.html","71c17a63ed6d9860dc7d0322c6164e76"],["/tags/学习/index.html","79498800b408f2367ac3322cb28acb64"],["/tags/技巧/index.html","2f783c61ee65a1f4ad322b737252829a"],["/tags/树莓派/index.html","2d5df243fb2cf97bf81c518a03a38af4"],["/tags/测试/index.html","16a9d0f3deeb434de8466567d2bfbda5"],["/tags/爬虫/index.html","b18ccdcd8bb4996b7656492c57959a3f"],["/todolist/index.html","2fa1574558afaf9e1ef980550dc91ab8"]];
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







