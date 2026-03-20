<?php
$data = [
    'src' => 'https://csl.jioudeng.tw/',
    'title' => '玖登春樹醴｜八德重劃核心｜雙面臨路角地',
    'description' => '沃擁八德悠然好生活，豐德二路X豐田三路口完美角地。醴享2房·豐釀3房。預約專線：03-3731117接待中心：桃園市八德區豐德二路8號',
    'keyword' => '八德擴大重劃區,桃園買房,八德新案,桃園新案,八德買房',
    'image' => 'https://csl.jioudeng.tw/og.jpg'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
$shareUrl = $data['src'];
$shareImg = $data['image'];
?>

<title><?php echo $docTitle; ?></title>
<meta name="description" content="<?php echo $docDesc ?>">
<meta name="keywords" content="<?php echo $keyWords ?>">
<link rel="canonical" href="<?php echo $shareUrl; ?>">

<!-- Open Graph -->
<meta property="og:locale" content="zh_TW" />
<meta property="og:type" content="<?php echo $ogType ?>" />
<meta property="og:title" content="<?php echo $docTitle; ?>" />
<meta property="og:description" content="<?php echo $docDesc ?>" />
<meta property="og:site_name" content="<?php echo $siteName; ?>" />
<meta property="og:url" content="<?php echo $shareUrl; ?>" />
<meta property="og:image" content="<?php echo $shareImg; ?>" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />
<meta name="twitter:image" content="<?php echo $shareImg; ?>" />

<!-- Schema.org -->
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">
<meta itemprop="image" content="<?php echo $shareImg; ?>">
