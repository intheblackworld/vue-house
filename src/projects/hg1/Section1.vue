<template>
  <div class="section1">
    <div class="animate-slide" v-if="isPC">
      <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2002.5 1334'%3E%3Cpolygon id='XMLID_2237_' fill='%23D66655' points='337.3,751.4 0.6,542.9 0.6,959.9 '/%3E%3Crect id='XMLID_832_' x='1613.8' y='348.1' transform='matrix(0.8793 -0.4762 0.4762 0.8793 41.8767 907.2589)' fill='%23DF9529' width='394.3' height='45.7'/%3E%3Ccircle fill='none' stroke='%23D66655' stroke-width='4' stroke-miterlimit='10' cx='564.9' cy='156.9' r='152.9'/%3E%3Ccircle fill='%239C9B9C' cx='1868.3' cy='1199.9' r='133.1'/%3E%3Ccircle fill='%23C3C4C4' cx='259.8' cy='1067.4' r='44.5'/%3E%3C/svg%3E" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="4">
      <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2002.5 1334'%3E%3Cpath fill='none' stroke='%23DF9529' stroke-width='5' stroke-miterlimit='10' d='M73.1,586.2c36-57.6,111.9-75,169.5-39 s75,111.9,39,169.5'/%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-width='5' stroke-linecap='round' stroke-miterlimit='10' stroke-dasharray='0,20.3341' d=' M269.4,733c-39.1,44.3-105.6,55.1-157.3,22.7c-54.7-34.2-73.2-104.4-44-160.7'/%3E%3Cpath fill='%23090704' d='M264,771.4l1-1l15.5,15.5l-1,1L264,771.4z M279.5,802.4l1-1L265,785.9l-1,1L279.5,802.4z M279.5,817.9l1-1 L265,801.4l-1,1L279.5,817.9z M279.5,833.4l1-1L265,816.9l-1,1L279.5,833.4z M279.5,848.9l1-1L265,832.4l-1,1L279.5,848.9z'/%3E%3Ccircle fill='%23C3C4C4' cx='1806.8' cy='338.3' r='38.6'/%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-width='2.4502' stroke-linecap='round' stroke-miterlimit='10' stroke-dasharray='0,12.786' d=' M1865.7,1175.1l117.2-155.3 M1879.4,1185.6l117.3-155.3 M1893.2,1196.1l117.3-155.3 M1907,1206.6l117.2-155.3 M1920.8,1217.1 l117.2-155.3'/%3E%3Cpath fill='none' stroke='%23858686' stroke-width='3.5' stroke-linecap='round' stroke-miterlimit='10' stroke-dasharray='0,16.1752' d=' M124.8,328.8L294.1,31.7 M140.4,337.6L309.7,40.5 M156,346.5L325.3,49.4 M340.9,58.2L171.6,355.3 M187.1,364.2L356.4,67.1 M202.7,373.1L372,76 M218.3,381.9L387.6,84.8 M403.2,93.7L233.9,390.8 M249.5,399.8l169.3-297.2 M265.1,408.5l169.3-297.2 M280.7,417.4L450,120.3 M465.6,129.2L296.3,426.2 M311.9,435.1L481.2,138 M327.4,444l169.3-297.2 M343,452.8l169.3-297.2'/%3E%3C/svg%3E" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="3">
      <!-- <img loading="lazy" src="./s1/pc2.png" :alt="`${info.caseName}_logo`" class="pc2" data-parallax="2">
      <img loading="lazy" src="./s1/pc1.png" :alt="`${info.caseName}_logo`" class="pc1" data-parallax="1"> -->
    </div>
    <div class="animate-slide" v-if="isMobile">
      <img loading="lazy" src="./mo/s1/漂浮物件_分層/m_1_class_1.png" :alt="`${info.caseName}_bg`" class="mo1" data-parallax="3">
      <img loading="lazy" src="./mo/s1/漂浮物件_分層/m_1_class_2.png" :alt="`${info.caseName}_bg`" class="mo2" data-parallax="2">
    </div>
    <h1 class="title">
      G12幸福到站 <span>|</span> 26-40坪 <span v-if="isPC">|</span> <div v-if="isPC">(03) 325-7555</div>
    </h1>
    <h1 class="subtitle">
      新潮生活 登入經國
    </h1>
    <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 773 244'%3E%3Cpath fill='%23FFFFFF' d='M1.6,194.2v-8.6l66.1-1.6l-0.6-12.5H87h11.3l-0.2,11.7l70.4-1.6v8.6l-70.6,1.6l-0.4,13.8l70.2,5.7 l-13.3,28.1l-57.1-22.6l-0.6,26.3H70.2L68,192.7l-17,0.4l13.7,21.1L3.9,241L0,234.4l45.6-41.1L1.6,194.2z M15.8,65.9l31.8,10.3 L36.5,89.5l45-2.3l0.8,8.4l-19.3,1l5.3,19.5l-24.6,3.7l-4.5-21.8L29,98.5L7.8,124l-6.6-3.1L15.8,65.9z M9.2,134L9,125.4l65.5-1.6 l0.4,8.6l-24,0.6l0.4,21.1l25.9-2.9L79,158l-68.2,26.3l-7.2-24.8l23.2-2.7l-0.6-23.2L9.2,134z M87,115.6l16.2,8.4l50.1-2.1v37.8h6 l8.2-11.1l4.5,19.7l-41.5,1.6v-38.6l-19.5,1l-5.5,9.2l23,10.9l-15.2,18.9L100,150.4L87,171.6l-6.4-3.5L87,115.6z M96.3,64.2 l31.8,10.3l-9,9.9l45.6-2.7l0.6,8.4l-23.6,1.6l7.8,17.6l-25.3,6.4L117,93l-6.2,0.4l-20.9,23l-6.8-3.3L96.3,64.2z M193.4,162.6 l25.3-93l25.5,19.9l-31,55.4l22.8,3.3l0.8,86.2l-23.6,5.1l-3.9-87.6l-8.2,14.4L193.4,162.6z M252.7,192.9l21.8,18.5l-28.1,28.9 l-5.5-5.5L252.7,192.9z M252.3,93l-0.2-8.6l38.4-0.6l-1.2-18.5l33.2,2.1l-3.5,16l43.1-0.6l0.4,8.4l-36.1,0.6l20.7,8.6l-17.6,14.2 l37.6-0.8l0.2,8.6l-119.1,2.3l-0.2-8.6l28.1-0.6l-6.4-22.8L252.3,93z M255.8,135l99.8-3.1l-1.6,53h-94.4L255.8,135z M298,107.3 l-11.7,8.2l27.3-0.6l10.5-23l-43.3,0.8L298,107.3z M281.6,194.2h26.5l-1.6,38h18.7l14-11.3l2.3,20.7h-59.3L281.6,194.2z M283.9,142.8l1,12.9l40-0.8l-0.4-13.7L283.9,142.8z M286.3,176.3l39-0.8l-0.2-12.1l-39.6,0.8L286.3,176.3z M309.6,191.7l5.5-5.5 l28.1,14.8L326,220.6L309.6,191.7z M349.4,199.1l7-2l17.2,27.7L351,239.1L349.4,199.1z M396.2,139.6l3.1-4.9l39.8,11.5l-15.6,20.3 L396.2,139.6z M433.7,172.8l3.9,4.9l-13.3,59.7L397,221.7L433.7,172.8z M403.3,77.2l2.3-4.3l41.3,33.1l-22.6,18.3L403.3,77.2z M441.9,186.2l-0.8-8.8l18.3-1.2l2.3-53.2l21.8,5.3l68.6-5.1l-0.4,47.4l17-1l0.8,8.8l-17.7,1.2l-0.2,35.9l16.2-0.2l1.6,8.6 l-17.7,0.8l-0.2,17.7l-35.1,1.6l-0.8-6.6l8.6-7.8l0.2-3.9l-67.3,2.7l1.9-43.1L441.9,186.2z M456.7,66.9l37.6,12.5l-18.9,23.8 l90.7-4.5l0.8,8.6l-98.9,5.1l-19.1,24.2l-7.4-2.7L456.7,66.9z M481.3,216.9l9.9-0.2l1.4-33.5l-8.2,0.6L481.3,216.9z M485.1,174.7 l7.8-0.4l1.4-38l-5.5,0.4L485.1,174.7z M527.3,134.2l-10.1,0.6l0.2,38l8.8-0.6L527.3,134.2z M525.7,181.2l-8.4,0.4l0.2,34.7l7-0.2 L525.7,181.2z M613.7,73.3l29.6,2.7l-1,50.1l17.2-0.8l0.4,8.8l-17.6,0.8l-0.8,35.1l23.8,9l-9,22.8l-15-13.5l-1,49.9l-22.6,1.6 l-1-36.9l-22.2,12.3l-1.2-9.7l22.6-38l-0.8-31.4l-20.9,1l-0.6-8.8l21.3-1L613.7,73.3z M674.7,172.4l79.6-4.7l-37.4-23.2l-47.6,27.7 l-7-6.2l36.1-32.8l-16-9.9l3.9-6l20.1,6.4L726,91.9l-27.3,2.7l-34.5,32.2l-5.1-3.9l19.7-54.8l25,15.2l40.4-2.7l14.4,14.6l-28.7,36.1 l42.1,13.5l-11.3,27.1l-3.3-2.1l-0.8,67.1l-78.8,2.3L674.7,172.4z M705.1,178.6l1.6,51.9l22.6-0.8v-52.6L705.1,178.6z'/%3E%3Cpath fill='%239C9B9C' d='M431,33.8h-14.4V1.3H431v11.9h7.3V1.3h14.4v32.4h-14.4v-12H431V33.8z M519.6,33.8h-14.4V19.6L492.9,1.3h14.5 l5,7.3l5-7.3h14.5l-12.3,18.3V33.8z M605,5.2l-6.9,9.7c-2.9-1.4-5.6-2.1-8-2.1c-1.6,0-2.9,0.4-3.9,1.3c-1,0.8-1.5,2-1.5,3.3 c0,2.6,1.7,3.9,5.2,3.9v-5.1h14.4v17.5c-5.8,0.3-9.7,0.5-11.8,0.5c-7.9,0-13.4-1.7-16.5-5.1c-3.1-3.4-4.6-7.3-4.6-11.8 c0-3.1,0.7-5.9,2.2-8.5c1.4-2.6,3.5-4.6,6.2-6c2.7-1.4,5.9-2.1,9.6-2.1c2.6,0,5.3,0.4,8.1,1.1C600.2,2.7,602.7,3.8,605,5.2z M679.1,5.2l-6.9,9.7c-2.9-1.4-5.6-2.1-8-2.1c-1.6,0-2.9,0.4-3.9,1.3c-1,0.8-1.5,2-1.5,3.3c0,2.6,1.7,3.9,5.2,3.9v-5.1h14.4v17.5 c-5.8,0.3-9.7,0.5-11.8,0.5c-7.9,0-13.4-1.7-16.5-5.1c-3.1-3.4-4.6-7.3-4.6-11.8c0-3.1,0.7-5.9,2.2-8.5c1.4-2.6,3.5-4.6,6.2-6 c2.7-1.4,5.9-2.1,9.6-2.1c2.6,0,5.3,0.4,8.1,1.1C674.3,2.7,676.8,3.8,679.1,5.2z M747.4,25.6v8.1h-26.9V1.3h26.9v8.1h-12.6v4h8.7 v8.1h-8.7v4H747.4z'/%3E%3C/svg%3E" :alt="`${info.caseName}_title`" class="logo">
    <img loading="lazy" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 174 174'%3E%3Ccircle fill='%23DF9529' cx='89.2' cy='90.7' r='83'/%3E%3Cellipse transform='matrix(0.1518 -0.9884 0.9884 0.1518 -11.7638 154.6199)' fill='%23D66655' cx='84.2' cy='84.2' rx='83' ry='83'/%3E%3Cpath fill='%23FFFFFF' d='M49.8,100.9v4.3h-27v-4.3h14.5c1.4-3.4,2.8-8.4,3.4-12.5l4.8,1c-1,4.1-2.4,8.3-3.6,11.5H49.8z M48.5,87.9 H24.2v-4.3h10.3c-0.3-1.3-0.8-3.1-1.3-4.5l4.3-1.1c0.6,1.5,1.3,3.4,1.6,4.7l-3,0.8h12.4V87.9z M29.8,100.5c-0.3-3-1.3-7.7-2.2-11.2 l4.3-1.1c1.1,3.6,2,8,2.5,11L29.8,100.5z M66.3,95.1c1.4,2.4,3.2,5.6,4,7.7l-4,2.1c-0.2-0.7-0.5-1.5-0.9-2.3c-6.6,2-7.9,2.5-8.8,3.1 c-0.2-1.3-0.9-3.3-1.6-4.4c0.7-0.4,1.4-1,1.4-2.1V79.9h13v14.9h-8.6v5l2.9-0.8c-0.4-0.8-0.8-1.5-1.1-2.1L66.3,95.1z M60.8,83.6v1.8 h4.4v-1.8H60.8z M65.2,91v-1.9h-4.4V91H65.2z M81.5,97c0,1.8-0.3,2.9-1.3,3.6c-1.1,0.7-2.4,0.7-4.2,0.7c-0.1-1.1-0.6-2.9-1.1-4 c0.8,0.1,1.7,0.1,2,0c0.3,0,0.4-0.1,0.4-0.4V84h-2.5v22.2h-4.3V80.1h11V97z M110.6,100.2c1.5,1.1,3.7,2.7,4.8,3.8l-3.3,2.4 c-1-1.1-3.1-2.8-4.7-4L110.6,100.2h-6.9l3.1,2c-1.6,1.5-4.4,3.2-6.7,4.1c-0.7-0.8-1.9-2-2.8-2.7c2.1-0.7,4.4-2.2,5.8-3.4h-2.5V89.8 c-0.6,2.5-1.3,5.2-1.8,7l-3.1-0.6c0.2-0.9,0.5-2.1,0.8-3.3h-1.1v9c0,1.9-0.3,3-1.5,3.6c-1.2,0.6-2.7,0.7-4.7,0.7 c-0.1-1.2-0.7-2.9-1.3-4.1c1.1,0,2.5,0,2.9,0c0.4,0,0.5-0.1,0.5-0.4v-8.9h-4.1v-3.7h5.4c-1.4-0.9-3-1.8-4.4-2.5l2.1-2.8 c0.8,0.3,1.6,0.7,2.5,1.2c0.4-0.5,0.9-1.1,1.3-1.8h-6.3v-3.7h8.8l0.8-0.2l2.2,1.6v-1.5h15V83h-5.1c-0.2,0.5-0.3,1-0.5,1.5h4.8v15.7 H110.6z M100.5,89.5v-5h4.1c0.1-0.5,0.1-1,0.2-1.5h-5.3v-1.3c-1.1,1.7-2.4,3.5-3.8,5c0.6,0.4,1.1,0.8,1.5,1.1l-0.8,1.2h1l0.6-0.1 L100.5,89.5z M109.8,87.5h-5.4v1.3h5.4V87.5z M109.8,91.7h-5.4V93h5.4V91.7z M109.8,95.8h-5.4v1.3h5.4V95.8z M129.5,97 c-0.1-0.4-0.1-0.9-0.2-1.4c-6.2,1-7.4,1.3-8.2,1.8c-0.2-0.8-0.8-2.7-1.3-3.8c0.9-0.2,1.5-0.8,2.6-1.9c0.4-0.4,1-1,1.7-1.9 c-2,0.2-2.6,0.4-3.1,0.6c-0.2-0.8-0.8-2.6-1.3-3.7c0.6-0.2,1.2-0.7,1.8-1.5c0.7-0.8,2.6-3.9,3.7-7l3.8,1.6c-1.1,2.2-2.5,4.5-4,6.4 l1.7-0.1c0.8-1.2,1.6-2.5,2.3-3.8l3.5,2.3c-1.1,1.8-2.5,3.7-4,5.4l2.7-0.7c0.8,2.1,1.6,4.8,1.9,6.4L129.5,97z M125.1,98.7 c-0.4,2.5-1.2,5.3-1.9,7.1c-0.8-0.5-2.6-1-3.6-1.2c0.8-1.6,1.5-4.3,1.8-6.6L125.1,98.7z M128.5,97.7c0.5,2.1,0.9,4.8,1,6.6l-3.5,1 c-0.1-1.8-0.4-4.6-0.8-6.7L128.5,97.7z M128.5,92.3c-0.1-0.5-0.3-1-0.5-1.5c-0.5,0.6-1.1,1.2-1.6,1.8L128.5,92.3z M131.8,96.9 c0.7,1.7,1.5,3.9,1.8,5.3l-3.2,1.2c-0.3-1.5-1-3.7-1.7-5.5L131.8,96.9z M146.7,83.6c0,0,0,1.4,0,2c-0.3,12.4-0.6,16.9-1.8,18.5 c-0.9,1.3-1.8,1.7-3.2,1.9c-1.2,0.2-3,0.2-4.8,0.1c-0.1-1.2-0.6-3-1.4-4.2c1.8,0.1,3.4,0.1,4.2,0.1c0.6,0,0.9-0.1,1.2-0.5 c0.8-0.9,1.1-4.9,1.3-13.9h-6.1c-0.6,1.4-1.4,2.7-2.1,3.8c-0.8-0.7-2.6-1.9-3.6-2.4c2-2.4,3.5-6.5,4.3-10.5l4.2,0.8 c-0.3,1.4-0.7,2.9-1.2,4.3H146.7z M138.4,98.8c-0.9-1.8-3.1-4.4-5-6.3l2.9-2.2c1.9,1.8,4.3,4.2,5.2,6L138.4,98.8z'/%3E%3Cpolygon id='XMLID_5111_' fill='%23DF9529' points='84.2,137.9 92.8,124 75.6,124 '/%3E%3Cpath fill='%23DF9529' d='M33.2,69.2h-1.8c-0.4,0-0.6-0.1-0.8-0.4l-3-4.3c-0.1-0.1-0.2-0.3-0.3-0.3s-0.3-0.1-0.5-0.1h-1.1v5.1h-2.1 V56.5h3.7c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.4,1.5,0.7c0.4,0.3,0.7,0.7,0.9,1.1s0.3,0.9,0.3,1.5c0,0.4-0.1,0.9-0.2,1.2 s-0.3,0.7-0.6,1c-0.2,0.3-0.6,0.6-0.9,0.8c-0.4,0.2-0.8,0.4-1.2,0.5c0.3,0.2,0.5,0.4,0.7,0.6L33.2,69.2z M27.2,62.6 c0.5,0,0.9-0.1,1.2-0.2s0.6-0.3,0.9-0.5c0.2-0.2,0.4-0.4,0.5-0.7c0.1-0.3,0.2-0.6,0.2-0.9c0-0.7-0.2-1.2-0.7-1.6 c-0.5-0.4-1.1-0.5-2.1-0.5h-1.7v4.5H27.2z M43.5,67.5l0,1.7h-7.9V56.5h7.9v1.7h-5.8V62h4.7v1.6h-4.7v3.9H43.5z M53.2,58.7 c-0.1,0.1-0.1,0.2-0.2,0.2S52.9,59,52.8,59c-0.1,0-0.2,0-0.4-0.1s-0.3-0.2-0.5-0.3s-0.4-0.2-0.7-0.3c-0.3-0.1-0.6-0.1-1-0.1 c-0.4,0-0.7,0-0.9,0.1c-0.3,0.1-0.5,0.2-0.7,0.4s-0.3,0.3-0.4,0.6c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.3,0.1,0.6,0.3,0.8 c0.2,0.2,0.4,0.4,0.7,0.5c0.3,0.2,0.6,0.3,1,0.4c0.4,0.1,0.7,0.2,1.1,0.4c0.4,0.1,0.7,0.3,1.1,0.4c0.4,0.2,0.7,0.4,1,0.6 s0.5,0.6,0.7,0.9c0.2,0.4,0.3,0.8,0.3,1.3c0,0.6-0.1,1.1-0.3,1.6c-0.2,0.5-0.5,0.9-0.8,1.3S52,68.8,51.5,69 c-0.5,0.2-1.1,0.3-1.8,0.3c-0.4,0-0.8,0-1.2-0.1s-0.8-0.2-1.1-0.3s-0.7-0.3-1-0.5c-0.3-0.2-0.6-0.4-0.8-0.7l0.6-1 c0.1-0.1,0.1-0.1,0.2-0.2s0.2-0.1,0.3-0.1c0.1,0,0.3,0.1,0.4,0.2s0.4,0.3,0.6,0.4c0.2,0.1,0.5,0.3,0.8,0.4s0.7,0.2,1.2,0.2 c0.7,0,1.3-0.2,1.7-0.5c0.4-0.4,0.6-0.9,0.6-1.5c0-0.4-0.1-0.6-0.3-0.9s-0.4-0.4-0.7-0.6c-0.3-0.2-0.6-0.3-1-0.4 c-0.4-0.1-0.7-0.2-1.1-0.3c-0.4-0.1-0.7-0.3-1.1-0.4c-0.4-0.2-0.7-0.4-1-0.6c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.3-0.9-0.3-1.4 c0-0.5,0.1-0.9,0.3-1.3s0.4-0.8,0.8-1.1s0.8-0.6,1.3-0.8c0.5-0.2,1.1-0.3,1.7-0.3c0.7,0,1.4,0.1,2,0.3c0.6,0.2,1.1,0.6,1.6,1 L53.2,58.7z M65,67.5l0,1.7h-7.9V56.5H65v1.7h-5.8V62h4.7v1.6h-4.7v3.9H65z M77.7,69.2h-1.8c-0.4,0-0.6-0.1-0.8-0.4l-3-4.3 c-0.1-0.1-0.2-0.3-0.3-0.3s-0.3-0.1-0.5-0.1h-1.1v5.1h-2.1V56.5h3.7c0.8,0,1.5,0.1,2.1,0.3c0.6,0.2,1.1,0.4,1.5,0.7 c0.4,0.3,0.7,0.7,0.9,1.1s0.3,0.9,0.3,1.5c0,0.4-0.1,0.9-0.2,1.2s-0.3,0.7-0.6,1c-0.2,0.3-0.6,0.6-0.9,0.8c-0.4,0.2-0.8,0.4-1.2,0.5 c0.3,0.2,0.5,0.4,0.7,0.6L77.7,69.2z M71.8,62.6c0.5,0,0.9-0.1,1.2-0.2s0.6-0.3,0.9-0.5c0.2-0.2,0.4-0.4,0.5-0.7 c0.1-0.3,0.2-0.6,0.2-0.9c0-0.7-0.2-1.2-0.7-1.6c-0.5-0.4-1.1-0.5-2.1-0.5h-1.7v4.5H71.8z M90.4,56.5l-5.1,12.7h-1.9l-5.1-12.7h1.6 c0.2,0,0.3,0,0.4,0.1s0.2,0.2,0.3,0.3l3.3,8.3c0.2,0.5,0.3,1,0.5,1.6c0.1-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.2-0.5,0.2-0.7L88,57 c0-0.1,0.1-0.2,0.2-0.3s0.3-0.1,0.4-0.1H90.4z M102.3,69.2h-1.6c-0.2,0-0.3,0-0.4-0.1s-0.2-0.2-0.3-0.3L99,65.9h-5.5l-1.1,2.8 c0,0.1-0.1,0.2-0.2,0.3s-0.3,0.1-0.4,0.1h-1.6l5-12.7h2.1L102.3,69.2z M98.4,64.5l-1.7-4.6c-0.1-0.4-0.3-0.8-0.4-1.4 c-0.1,0.3-0.1,0.5-0.2,0.8c-0.1,0.2-0.1,0.4-0.2,0.6l-1.7,4.6H98.4z M112.2,58.3h-3.9v10.9h-2V58.3h-4v-1.7h10V58.3z M116.9,69.2 h-2.1V56.5h2.1V69.2z M132.6,62.9c0,0.9-0.2,1.8-0.5,2.6c-0.3,0.8-0.7,1.5-1.3,2s-1.2,1-2,1.3c-0.8,0.3-1.6,0.5-2.6,0.5 c-0.9,0-1.8-0.2-2.6-0.5c-0.8-0.3-1.4-0.8-2-1.3s-1-1.3-1.3-2c-0.3-0.8-0.5-1.7-0.5-2.6c0-0.9,0.2-1.8,0.5-2.6 c0.3-0.8,0.7-1.5,1.3-2c0.6-0.6,1.2-1,2-1.3c0.8-0.3,1.6-0.5,2.6-0.5c1,0,1.8,0.2,2.6,0.5s1.4,0.8,2,1.3c0.6,0.6,1,1.3,1.3,2 S132.6,61.9,132.6,62.9z M130.5,62.9c0-0.7-0.1-1.4-0.3-2c-0.2-0.6-0.5-1.1-0.8-1.5c-0.4-0.4-0.8-0.7-1.3-0.9s-1.1-0.3-1.8-0.3 c-0.6,0-1.2,0.1-1.8,0.3c-0.5,0.2-1,0.5-1.3,0.9c-0.4,0.4-0.7,0.9-0.9,1.5c-0.2,0.6-0.3,1.2-0.3,2c0,0.7,0.1,1.4,0.3,2 c0.2,0.6,0.5,1.1,0.9,1.5s0.8,0.7,1.3,0.9c0.5,0.2,1.1,0.3,1.8,0.3c0.7,0,1.2-0.1,1.8-0.3c0.5-0.2,1-0.5,1.3-0.9s0.6-0.9,0.8-1.5 C130.4,64.3,130.5,63.6,130.5,62.9z M146.3,56.5v12.7h-1c-0.2,0-0.3,0-0.4-0.1s-0.2-0.1-0.3-0.3l-7-8.9c0,0.2,0,0.3,0,0.5 s0,0.3,0,0.5v8.3h-1.8V56.5h1.1c0.1,0,0.2,0,0.2,0s0.1,0,0.2,0s0.1,0.1,0.1,0.1s0.1,0.1,0.2,0.2l7,8.9c0-0.2,0-0.4,0-0.5 s0-0.3,0-0.5v-8.3H146.3z'/%3E%3C/svg%3E" :alt="`${info.caseName}_bg`" class="order-btn flex-c" v-scroll-to="{element: '#contact'}">
  </div>
</template>
<style lang="scss">
.Masthead,
.Masthead__image {
  height: auto;
  min-height: 73.875rem;
  z-index: 3;
}
.Masthead__image > img {
  height: auto;
  min-height: auto;
  object-fit: contain;
}

.Masthead__image.is-parallax > img {
  height: auto;
  min-height: auto;
}
.is-parallax {
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .Masthead,
  .Masthead__image {
    height: auto !important;
    min-height: 152vw;
  }
}
</style>
<style lang="scss" scoped>
@import '~@/assets/style/function.scss';
.section1 {
  background-size: cover;
  position: relative;
  z-index: 3;
  overflow: visible;
  width: 100%;
  height: 100vh;
  min-height: size(900);
  max-height: size(1080);
  background: linear-gradient(
    to bottom,
    rgba(0, 131, 190, 0) 13%,
    rgba(0, 131, 190, 0.66) 42%,
    #0083be 57%
  );
  // background-size: cover;
}

.logo {
  @include img_c_pc(779, 353);
  top: calc(50% - 14.5vw);
}

.order-btn {
  @include img_c_pc(171, 688);
  // top: calc(50% + 12.3vw);
  z-index: 10;
  cursor: pointer;
  &:hover {
    animation: an4 3s infinite;
  }
}

.title {
  @include img_c_pc(772, 530);
  font-size: size(42);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: size(0.29);
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #df9529;
    font-size: size(30);
    line-height: 1.24;
  }
}

.subtitle {
  @include img_c_pc(772, 591);
  font-size: size(55.9);
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: size(37.98);
  text-align: left;
  color: #df982a;
  white-space: nowrap;
}

.animate-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s;
  > img {
    @for $i from 1 through 10 {
      $randomNum: random(4) + 3;
      &:nth-child(#{$i}) {
        transform: translateY((random(10) - 50) + px);
        animation: an ($randomNum + s) 3s infinite alternate;
      }
    }
  }

  .left1 {
    @include img_l_pc(314, 417, 0);
  }

  .left2 {
    @include img_l_pc(240, -150, 220);
    transform: rotate(30deg) !important;
    animation: none !important;
  }

  .left3 {
    @include img_l_pc(18, 654, 235);
  }

  .pc1 {
    @include img_r_pc(1922, -100, 0);
  }

  .pc2 {
    @include img_r_pc(1920, -130, 0);
  }

  // .pc3 {
  //   @include img_r_pc(1994, 400, -44);
  // }

  // .pc4 {
  //   @include img_r_pc(1700, 630, 200);
  // }
}

@keyframes an {
  to {
    transform: translateY(0);
  }
}
@keyframes an3 {
  to {
    transform: rotate(5deg);
  }
}
@keyframes an4 {
  80% {
    transform: scale(1.2) rotate(5deg);
  }
  85% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
/* 平板尺寸 */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
}

@media screen and (max-width: 767px) {
  .section1 {
    width: 100vw;
    background-size: cover;
    margin: 0;
    height: calc(100vh - 63px);
    min-height: sizem(604);
    max-height: sizem(750);
    position: relative;
    z-index: 2;
    // overflow: hidden;
  }

  .logo {
    @include img_c_m(310, 160);
    top:calc(50% + 100vw * (160 - 302) / 375);
  }

  .order-btn {
    @include img_c_m(80, 385);
    top:calc(50% + 100vw * (385 - 302) / 375);
    z-index: 10;
    cursor: pointer;
    &:hover {
      animation: an4 3s infinite;
    }
  }

  .title {
    @include img_c_m(310, 271);
    top:calc(50% + 100vw * (272 - 302) / 375);
    font-size: sizem(28);
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.24;
    letter-spacing: sizem(0.2);
    text-align: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    span {
      color: #df9529;
      font-size: sizem(20);
      line-height: 1.24;
    }
  }

  .subtitle {
    @include img_c_m(260, 321);
    top:calc(50% + 100vw * (323 - 302) / 375);
    font-size: sizem(19);
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: sizem(13);
    text-align: left;
    color: #df982a;
    white-space: nowrap;
  }

  .animate-slide {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s;
    > img {
      @for $i from 1 through 10 {
        $randomNum: random(4) + 3;
        &:nth-child(#{$i}) {
          transform: translateY((random(10) - 50) + px);
          animation: an ($randomNum + s) 3s infinite alternate;
        }
      }
    }

    // .left1 {
    //   // @include img_l_pc(314, 417, 0);
    //   display: none;
    // }

    // .left2 {
    //   // @include img_l_pc(240, -150, 220);
    //   // transform: rotate(30deg) !important;
    //   // animation: none !important;
    //   display: none;
    // }

    // .left3 {
    //   // @include img_l_pc(18, 654, 235);
    //   display: none;
    // }

    .mo1 {
      @include img_c_m(375, 80);
      top:calc(50% + 100vw * (80 - 302) / 375);
    }

    .mo2 {
      @include img_c_m(375, -20);
    top:calc(50% + 100vw * (-20 - 302) / 375);
    }
  }
}
</style>

<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'
// import slider from '@/mixins/slider.js'
// import Parallax from '@/components/Parallax.vue'
// import 'swiper/dist/css/swiper.css'
import Parallax from '@/components/Parallax.vue'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'section7',

  // mixins: [slider],
  components: {
    // swiper,
    // swiperSlide,
    Parallax,
  },

  data() {
    return {
      info,
      isPC,
      isMobile,
      swiperOption: {
        slidesPerView: isMobile ? 1.4 : 1,
        centeredSlides: true,
        spaceBetween: isMobile ? -10 : 30,
        slidesPerColumn: isMobile ? 1 : 1,
        effect: isMobile ? '' : 'fade',

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },

      // slideList: [
      //   {
      //     src: require('./s6/1.png'),
      //     title: 'INTERIOR SPACE',
      //     subtitle: '國際一線美學，名門傲氣優雅',
      //     desc: '代表作品∣頤海大院．台中帝寶．開璽吾界． SKY1',
      //   },
      //   {
      //     src: require('./s6/2.png'),
      //     title: 'ARCHITECTURE',
      //     subtitle: '動感琴鍵協奏，定義奢華高度',
      //     desc: '代表作品∣波爾多．江翠ONE．金城舞2',
      //   },
      //   {
      //     src: require('./s6/3.png'),
      //     title: 'LANDSCAPE',
      //     subtitle: '環境人文思考，都會繁花盛放',
      //     desc: '代表作品∣維多利亞酒店．碧波白',
      //   },
      // ],

      imgIndex: 0,
      isShowDialog: false,
    }
  },

  computed: {},

  methods: {
    // slideChanged(e) {
    //   const swiper = this.$refs.mySwiper.swiper
    //   if (swiper.isEnd) {
    //     this.slideIndex = 0
    //   } else if (swiper.isBeginning) {
    //     this.slideIndex = swiper.slides.length - 3
    //   } else {
    //     this.slideIndex = swiper.activeIndex - 1
    //   }
    // },
  },

  created() {},
  mounted() {},
}
</script>
