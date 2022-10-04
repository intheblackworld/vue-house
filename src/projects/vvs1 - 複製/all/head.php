<?php
#下3段式抓 為案件編號 $case_code
#$case_code_test 是用來判斷是否為1的測試頁
#$case_code = "jw";特殊案使用
$src =$_SERVER['SERVER_NAME']; 
$case_code_test = substr(substr($src,0,strpos($src,'.')),-1);
$case_code = substr($src,0,strpos($src,$case_code_test=='1'?'1':'.'));

$pdo = new pdo('mysql:host=localhost;dbname=htw_web', 'htw', '748aSgl5Ni');
$pdo->exec("SET NAMES 'utf8'");
$sql = "SELECT title,description,keyword,p0 FROM susers WHERE email = '" . $case_code . "'";
$dataList = $pdo->query($sql)->fetchAll();
$docTitle = $dataList[0]['title'];
$siteName = $dataList[0]['title'];
$docDesc = $dataList[0]['description'];
$keyWords = $dataList[0]['keyword'];
if ($dataList[0]['p0']) {
$p0 = "<meta name='facebook-domain-verification' content='". $dataList[0]['p0'] ."' />";
}
$ogType = 'website';
?>
<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">
<?php echo $p0 ?>

<meta itemprop="image" content="https://<?php echo $src; ?>/og.jpg">
    <meta property="og:image" content="https://<?php echo $src; ?>/og.jpg">
    <!-- 由 Google 結構化資料標記協助工具產生的 JSON-LD 標記。 -->
    <script type="application/ld+json">
    {
      "@context" : "http://schema.org",
      "@type" : "Event",
      "name" : "<?php echo $docTitle; ?>",
      "startDate" : "2022-01-19",
      "location" : {
        "@type" : "Place",
        "name" : "接待中心",
        "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "桃園市大園區環區西路與科二街交叉口"
        }
      },
      "image" : "https://nina.yu-fong.tw/img/nina.jpg"
      "description" : "諮詢",
      "url" : "https://nina.yu-fong.tw"
    }
    </script>