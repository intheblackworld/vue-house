<?php
$data = [
    'src' => 'https://lc-h35.tw/',
    'title' => '立瑾建築機構｜百年建築，將心構築｜官網',
    'description' => '立瑾建築機構：以人為本，用心建設。致力打造百年穩固、永世怡居的好建築。地址：桃園市桃園區新埔六街97號16樓  聯絡電話：03-356-9188',
    'keyword' => '立瑾建設,立瑾建築機構,立瑾醞,立瑾way,鴻駿營造,立澄建設、立榮建設'
];

$docTitle = $data['title'];
$siteName = $data['title'];
$docDesc = $data['description'];
$keyWords = $data['keyword'];
$ogType = 'website';
$shareUrl = $data['src'];
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

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo $docTitle; ?>" />
<meta name="twitter:description" content="<?php echo $docDesc ?>" />

<!-- Schema.org -->
<meta itemprop="name" content="<?php echo $docTitle; ?>">
<meta itemprop="description" content="<?php echo $docDesc ?>">

