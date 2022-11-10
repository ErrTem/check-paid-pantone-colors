
let store = {
    _state: {
        homePage: {},
        colors: {"Yellow C":"#FEDD00","Yellow 012 C":"#FFD700","Orange 021 C":"#FE5000","Warm Red C":"#F9423A","Red 032 C":"#EF3340","Rubine Red C":"#CE0058","Rhodamine Red C":"#E10098","Purple C":"#BB29BB","Violet C":"#440099","Blue 072 C":"#10069F","Reflex Blue C":"#001489","Process Blue C":"#0085CA","Green C":"#00AB84","Black C":"#2D2926","Yellow 0131 C":"#F2F0A1","Red 0331 C":"#FCAEBB","Magenta 0521 C":"#F1B2DC","Violet 0631 C":"#BF9BDE","Blue 0821 C":"#74D1EA","Green 0921 C":"#9DE7D7","Black 0961 C":"#9E978E","801 C":"#009ACE","802 C":"#44D62C","803 C":"#FFE900","804 C":"#FFAA4D","805 C":"#FF7276","806 C":"#FF3EB5","807 C":"#EA27C2","871 C":"#84754E","872 C":"#85714D","873 C":"#866D4B","874 C":"#8B6F4E","875 C":"#87674F","876 C":"#8B634B","877 C":"#8A8D8F","Medium Yellow C":"#FFD900","Bright Orange C":"#FF5E00","Bright Red C":"#F93822","Strong Red C":"#CE0056","Pink C":"#D62598","Medium Purple C":"#4E008E","Dark Blue C":"#00239C","Medium Blue C":"#0084CA","Bright Green C":"#00B08B","Neutral Black C":"#222223","100 C":"#F6EB61","101 C":"#F7EA48","102 C":"#FCE300","103 C":"#C5A900","104 C":"#AF9800","105 C":"#897A27","7401 C":"#F5E1A4","7402 C":"#ECD898","7403 C":"#EED484","7404 C":"#F4DA40","7405 C":"#F2CD00","7406 C":"#F1C400","7407 C":"#CBA052","106 C":"#F9E547","107 C":"#FBE122","108 C":"#FEDB00","109 C":"#FFD100","110 C":"#DAAA00","111 C":"#AA8A00","112 C":"#9C8412","113 C":"#FAE053","114 C":"#FBDD40","115 C":"#FDDA24","116 C":"#FFCD00","117 C":"#C99700","118 C":"#AC8400","119 C":"#897322","127 C":"#F3DD6D","128 C":"#F3D54E","129 C":"#F3D03E","130 C":"#F2A900","131 C":"#CC8A00","132 C":"#A07400","133 C":"#6C571B","1205 C":"#F8E08E","1215 C":"#FBD872","1225 C":"#FFC845","1235 C":"#FFB81C","1245 C":"#C69214","1255 C":"#AD841F","1265 C":"#886B25","120 C":"#FBDB65","121 C":"#FDD757","122 C":"#FED141","123 C":"#FFC72C","124 C":"#EAAA00","125 C":"#B58500","126 C":"#9A7611","7548 C":"#FFC600","7549 C":"#FFB500","7550 C":"#D19000","7551 C":"#B47E00","7552 C":"#73531D","7553 C":"#5A4522","7554 C":"#4B3D2A","7555 C":"#D29F13","7556 C":"#B78B20","7557 C":"#9F7D23","7558 C":"#967126","7559 C":"#8F6A2A","7560 C":"#7D622E","7561 C":"#6C5D34","134 C":"#FDD26E","135 C":"#FFC658","136 C":"#FFBF3F","137 C":"#FFA300","138 C":"#DE7C00","139 C":"#AF6D04","140 C":"#74531C","1345 C":"#FDD086","1355 C":"#FFC56E","1365 C":"#FFB549","1375 C":"#FF9E1B","1385 C":"#D57800","1395 C":"#996017","1405 C":"#6E4C1E","141 C":"#F2C75C","142 C":"#F1BE48","143 C":"#F1B434","144 C":"#ED8B00","145 C":"#CF7F00","146 C":"#A76D11","147 C":"#715C2A","7408 C":"#F6BE00","7409 C":"#F0B323","7410 C":"#FEAD77","7411 C":"#E6A65D","7412 C":"#D38235","7413 C":"#DC8633","7414 C":"#C16C18","7562 C":"#BD9B60","7563 C":"#D69A2D","7564 C":"#DB8A06","7565 C":"#CD7925","7566 C":"#AD6433","7567 C":"#89532F","7568 C":"#775135","7569 C":"#D78825","7570 C":"#D3832B","7571 C":"#C67D30","7572 C":"#B67233","7573 C":"#A7662B","7574 C":"#9E6A38","7575 C":"#835D32","712 C":"#FCC89B","713 C":"#FDBE87","714 C":"#FDAA63","715 C":"#F68D2E","716 C":"#EA7600","717 C":"#D45D00","718 C":"#BE4D00","148 C":"#FECB8B","149 C":"#FFC27B","150 C":"#FFB25B","151 C":"#FF8200","152 C":"#E57200","153 C":"#BE6A14","154 C":"#9B5A1A","155 C":"#EFD19F","156 C":"#EFBE7D","157 C":"#ECA154","158 C":"#E87722","159 C":"#CB6015","160 C":"#A1561C","161 C":"#603D20","1485 C":"#FFAE62","1495 C":"#FF8F1C","1505 C":"#FF6900","1525 C":"#B94700","1535 C":"#94450B","1545 C":"#653819","1555 C":"#FFB990","1565 C":"#FFA06A","1575 C":"#FF7F32","1585 C":"#FF6A13","1595 C":"#D86018","1605 C":"#A65523","1615 C":"#8B4720","162 C":"#FFBE9F","163 C":"#FF9D6E","164 C":"#FF7F41","165 C":"#FF671F","166 C":"#E35205","167 C":"#BE531C","168 C":"#73381D","7576 C":"#DB864E","7577 C":"#E07E3C","7578 C":"#DC6B2F","7579 C":"#DC582A","7580 C":"#C05131","7581 C":"#864A33","7582 C":"#674736","1625 C":"#FFA38B","1635 C":"#FF8D6D","1645 C":"#FF6A39","1655 C":"#FC4C02","1665 C":"#DC4405","1675 C":"#A9431E","1685 C":"#833921","169 C":"#FFB3AB","170 C":"#FF8674","171 C":"#FF5C39","172 C":"#FA4616","173 C":"#CF4520","174 C":"#963821","175 C":"#6B3529","7583 C":"#C4622D","7584 C":"#BA5826","7585 C":"#AF5C37","7586 C":"#9E5330","7587 C":"#924C2E","7588 C":"#7B4D35","7589 C":"#5C4738","7590 C":"#D4B59E","7591 C":"#C07D59","7592 C":"#B15533","7593 C":"#9D432C","7594 C":"#7C3A2D","7595 C":"#6B3D2E","7596 C":"#5C3D31","7597 C":"#D14124","7598 C":"#BD472A","7599 C":"#B33D26","7600 C":"#8D3F2B","7601 C":"#83412C","7602 C":"#7B4931","7603 C":"#674230","7604 C":"#E4D5D3","7605 C":"#E1BBB4","7606 C":"#D6938A","7607 C":"#C26E60","7608 C":"#A4493D","7609 C":"#823B34","7610 C":"#683431","7611 C":"#DDBCB0","7612 C":"#CA9A8E","7613 C":"#BC8A7E","7614 C":"#A37F74","7615 C":"#866761","7616 C":"#6B4C4C","7617 C":"#583D3E","7520 C":"#EABEB0","7521 C":"#C09C83","7522 C":"#B46A55","7523 C":"#AB5C57","7524 C":"#A45248","7525 C":"#9A6A4F","7526 C":"#8A391B","489 C":"#ECC3B2","488 C":"#ECBAA8","487 C":"#EAA794","486 C":"#E8927C","485 C":"#DA291C","484 C":"#9A3324","483 C":"#653024","176 C":"#FFB1BB","177 C":"#FF808B","178 C":"#FF585D","179 C":"#E03C31","180 C":"#BE3A34","181 C":"#81312F","1765 C":"#FFA3B5","1775 C":"#FF8DA1","1785 C":"#F8485E","1788 C":"#EE2737","1795 C":"#D22630","1805 C":"#AF272F","1815 C":"#7C2529","1767 C":"#FCAFC0","1777 C":"#FB637E","1787 C":"#F4364C","1797 C":"#CB333B","1807 C":"#A4343A","1817 C":"#643335","7618 C":"#C66E4E","7619 C":"#C04C36","7620 C":"#B7312C","7621 C":"#AB2328","7622 C":"#93272C","7623 C":"#8A2A2B","7624 C":"#802F2D","7625 C":"#E1523D","7626 C":"#C63527","7627 C":"#A72B2A","7628 C":"#9E2A2B","7629 C":"#6D3332","7630 C":"#633231","7631 C":"#572D2D","7415 C":"#E6BAA8","7416 C":"#E56A54","7417 C":"#E04E39","7418 C":"#CD545B","7419 C":"#B04A5A","7420 C":"#9B2242","7421 C":"#651D32","182 C":"#FABBCB","183 C":"#FC9BB3","184 C":"#F65275","185 C":"#E4002B","186 C":"#C8102E","187 C":"#A6192E","188 C":"#76232F","196 C":"#ECC7CD","197 C":"#E89CAE","198 C":"#DF4661","199 C":"#D50032","200 C":"#BA0C2F","201 C":"#9D2235","202 C":"#862633","189 C":"#F8A3BC","190 C":"#F67599","191 C":"#EF426F","192 C":"#E40046","193 C":"#BF0D3E","194 C":"#9B2743","195 C":"#782F40","1895 C":"#F5B6CD","1905 C":"#F59BBB","1915 C":"#EF4A81","1925 C":"#E0004D","1935 C":"#C5003E","1945 C":"#A6093D","1955 C":"#8A1538","705 C":"#F5DADF","706 C":"#F7CED7","707 C":"#F9B5C4","708 C":"#F890A5","709 C":"#EF6079","710 C":"#E03E52","711 C":"#CB2C30","698 C":"#F2D4D7","699 C":"#F4C3CC","700 C":"#F2ACB9","701 C":"#E68699","702 C":"#D25B73","703 C":"#B83A4B","704 C":"#9E2A2F","203 C":"#ECB3CB","204 C":"#E782A9","205 C":"#E0457B","206 C":"#CE0037","207 C":"#A50034","208 C":"#861F41","209 C":"#6F263D","210 C":"#F99FC9","211 C":"#F57EB6","212 C":"#F04E98","213 C":"#E31C79","214 C":"#CE0F69","215 C":"#AC145A","216 C":"#7D2248","7422 C":"#F4CDD4","7423 C":"#E06287","7424 C":"#E24585","7425 C":"#B52555","7426 C":"#A4123F","7427 C":"#971B2F","7428 C":"#6A2C3E","7632 C":"#D6C9CA","7633 C":"#C4A4A7","7634 C":"#C16784","7635 C":"#C63663","7636 C":"#BC204B","7637 C":"#912F46","7638 C":"#7E2D40","217 C":"#EABEDB","218 C":"#E56DB1","219 C":"#DA1884","220 C":"#A50050","221 C":"#910048","222 C":"#6C1D45","7639 C":"#936D73","7640 C":"#934054","7641 C":"#8E2C48","7642 C":"#732E4A","7643 C":"#672E45","7644 C":"#582D40","7645 C":"#502B3A","223 C":"#EF95CF","224 C":"#EB6FBD","225 C":"#DF1995","226 C":"#D0006F","227 C":"#AA0061","228 C":"#890C58","229 C":"#672146","230 C":"#F4A6D7","231 C":"#F277C6","232 C":"#E93CAC","233 C":"#C6007E","234 C":"#A20067","235 C":"#840B55","670 C":"#EAD3E2","671 C":"#E6BCD8","672 C":"#DFA0C9","673 C":"#D986BA","674 C":"#C6579A","675 C":"#AE2573","676 C":"#960051","677 C":"#E5CEDB","678 C":"#E3C8D8","679 C":"#DEBED2","680 C":"#C996B6","681 C":"#B06C96","682 C":"#994878","683 C":"#7C2855","684 C":"#E4C6D4","685 C":"#DCB6C9","686 C":"#D0A1BA","687 C":"#BE84A3","688 C":"#A76389","689 C":"#893B67","690 C":"#612141","510 C":"#EBBECB","509 C":"#E8B3C3","508 C":"#E4A9BB","507 C":"#D592AA","506 C":"#84344E","505 C":"#6F2C3F","504 C":"#572932","7429 C":"#E2BCCB","7430 C":"#DCA9BF","7431 C":"#C9809E","7432 C":"#B55C80","7433 C":"#A73A64","7434 C":"#9B3259","7435 C":"#872651","691 C":"#E9CDD0","692 C":"#E4BEC3","693 C":"#D7A3AB","694 C":"#C48490","695 C":"#B46B7A","696 C":"#984856","697 C":"#893C47","496 C":"#F2C6CF","495 C":"#F1BDC8","494 C":"#E9A2B2","493 C":"#DC8699","492 C":"#8F3237","491 C":"#7F3035","490 C":"#5D2A2C","503 C":"#E9C4C7","502 C":"#E5BAC1","501 C":"#DAA5AD","500 C":"#C6858F","499 C":"#7A3E3A","498 C":"#6A3735","497 C":"#512F2E","5035 C":"#DFC2C3","5025 C":"#DBB7BB","5015 C":"#CCA1A6","5005 C":"#B07C83","4995 C":"#9C6169","4985 C":"#874B52","4975 C":"#3F2021","236 C":"#F1A7DC","237 C":"#EC86D0","238 C":"#E45DBF","239 C":"#DB3EB1","240 C":"#C5299B","241 C":"#AF1685","242 C":"#80225F","2365 C":"#EFBAE1","2375 C":"#E277CD","2385 C":"#D539B5","2395 C":"#C800A1","2405 C":"#B0008E","2415 C":"#9E007E","2425 C":"#830065","243 C":"#EAB8E4","244 C":"#E59BDC","245 C":"#DD7FD3","246 C":"#C724B1","247 C":"#BB16A3","248 C":"#A51890","249 C":"#80276C","7646 C":"#A56E87","7647 C":"#A83D72","7648 C":"#991E66","7649 C":"#8A1B61","7650 C":"#722257","7651 C":"#6A2A5B","7652 C":"#5E2751","250 C":"#E7BAE4","251 C":"#DD9CDF","252 C":"#C964CF","253 C":"#AD1AAC","254 C":"#981D97","255 C":"#72246C","517 C":"#EBC6DF","516 C":"#E6BEDD","515 C":"#E2ACD7","514 C":"#D48BC8","513 C":"#93328E","512 C":"#833177","511 C":"#612C51","7436 C":"#EEDAEA","7437 C":"#CCAED0","7438 C":"#D59ED7","7439 C":"#B288B9","7440 C":"#A277A6","7441 C":"#9F5CC0","7442 C":"#963CBD","2562 C":"#D7A9E3","2572 C":"#C98BDB","2582 C":"#AC4FC6","2592 C":"#9B26B6","2602 C":"#87189D","2612 C":"#772583","2622 C":"#653165","7653 C":"#948794","7654 C":"#A2789C","7655 C":"#A15A95","7656 C":"#8E3A80","7657 C":"#6E2B62","7658 C":"#6A3460","7659 C":"#5D3754","524 C":"#D5C2D8","523 C":"#C9B1D0","522 C":"#BA9CC5","521 C":"#A57FB2","520 C":"#642F6C","519 C":"#59315F","518 C":"#4B3048","5245 C":"#DBCDD3","5235 C":"#D0BEC7","5225 C":"#C6B0BC","5215 C":"#AF95A6","5205 C":"#86647A","5195 C":"#66435A","5185 C":"#4A3041","5175 C":"#D8C8D1","5165 C":"#D3C0CD","5155 C":"#BFA5B8","5145 C":"#9B7793","5135 C":"#7E5475","5125 C":"#693C5E","5115 C":"#512A44","531 C":"#DFC8E7","530 C":"#D7B9E4","529 C":"#CAA2DD","528 C":"#B580D1","527 C":"#8031A7","526 C":"#702F8A","525 C":"#572C5F","256 C":"#D6BFDD","257 C":"#C6A1CF","258 C":"#8C4799","259 C":"#6D2077","260 C":"#642667","261 C":"#5D285F","262 C":"#51284F","2563 C":"#CBA3D8","2573 C":"#B884CB","2583 C":"#A05EB5","2593 C":"#84329B","2603 C":"#702082","2613 C":"#671E75","2623 C":"#5F2167","7660 C":"#9991A4","7661 C":"#8D6E97","7662 C":"#7A4183","7663 C":"#6B3077","7664 C":"#653279","7665 C":"#5E366E","7666 C":"#5C4E63","2567 C":"#C1A0DA","2577 C":"#A77BCA","2587 C":"#8246AF","2597 C":"#5C068C","2607 C":"#500778","2617 C":"#470A68","2627 C":"#3C1053","263 C":"#D7C6E6","264 C":"#C1A7E2","265 C":"#9063CD","266 C":"#753BBD","267 C":"#5F259F","268 C":"#582C83","269 C":"#512D6D","2635 C":"#C5B4E3","2645 C":"#AD96DC","2655 C":"#9678D3","2665 C":"#7D55C7","2685 C":"#330072","2695 C":"#2E1A47","270 C":"#B4B5DF","271 C":"#9595D2","272 C":"#7474C1","273 C":"#24135F","274 C":"#211551","275 C":"#201747","276 C":"#221C35","2705 C":"#A7A4E0","2715 C":"#8B84D7","2725 C":"#685BC7","2735 C":"#2E008B","2745 C":"#280071","2755 C":"#250E62","2765 C":"#201547","7667 C":"#6E7CA0","7668 C":"#686E9F","7669 C":"#615E9B","7670 C":"#565294","7671 C":"#514689","7672 C":"#4C4184","7673 C":"#535486","7443 C":"#DDDAE8","7444 C":"#B6B8DC","7445 C":"#A7A2C3","7446 C":"#8986CA","7447 C":"#5D4777","7448 C":"#4B384C","7449 C":"#41273B","7674 C":"#878CB4","7675 C":"#7C7FAB","7676 C":"#7566A0","7677 C":"#6F5091","7678 C":"#68478D","7679 C":"#563D82","7680 C":"#523178","663 C":"#E5E1E6","664 C":"#E0DBE3","665 C":"#C6BCD0","666 C":"#A192B2","667 C":"#7C6992","668 C":"#614B79","669 C":"#3F2A56","5315 C":"#D8D7DF","5305 C":"#C6C4D2","5295 C":"#B3B0C4","5285 C":"#8D89A5","5275 C":"#595478","5265 C":"#403A60","5255 C":"#1E1A34","538 C":"#C5CFDA","537 C":"#BBC7D6","536 C":"#A2B2C8","535 C":"#8E9FBC","534 C":"#1B365D","533 C":"#1F2A44","532 C":"#1C1F2A","7541 C":"#D9E1E2","7542 C":"#A4BCC2","7543 C":"#98A4AE","7544 C":"#768692","7545 C":"#425563","7546 C":"#253746","7547 C":"#131E29","552 C":"#B9D3DC","551 C":"#A3C7D2","550 C":"#8DB9CA","549 C":"#6BA4B8","548 C":"#003D4C","547 C":"#00313C","546 C":"#072B31","5455 C":"#BFCED6","5445 C":"#B7C9D3","5435 C":"#A6BBC8","5425 C":"#7A99AC","5415 C":"#5B7F95","5405 C":"#4F758B","5395 C":"#081F2C","642 C":"#D1DDE6","643 C":"#C6D6E3","644 C":"#9BB8D3","645 C":"#7DA1C4","646 C":"#5E8AB4","647 C":"#236192","648 C":"#002E5D","649 C":"#DBE2E9","650 C":"#CED9E5","651 C":"#A7BCD6","652 C":"#7D9BC1","653 C":"#326295","654 C":"#003A70","655 C":"#002554","656 C":"#DDE5ED","657 C":"#C8D8EB","658 C":"#B1C9E8","659 C":"#7BA4DB","660 C":"#407EC9","661 C":"#003594","662 C":"#001A70","7450 C":"#BDC5DB","7451 C":"#89ABE3","7452 C":"#8094DD","7453 C":"#7BA6DE","7454 C":"#5F8FB4","7455 C":"#3A5DAE","7456 C":"#606EB2","2706 C":"#CBD3EB","2716 C":"#9FAEE5","2726 C":"#485CC7","2736 C":"#1E22AA","2746 C":"#171C8F","2756 C":"#151F6D","2766 C":"#141B4D","2708 C":"#B8CCEA","2718 C":"#5C88DA","2728 C":"#0047BB","2738 C":"#06038D","2748 C":"#001871","2758 C":"#001E62","2768 C":"#071D49","2707 C":"#C3D7EE","2717 C":"#A7C6ED","2727 C":"#307FE2","2747 C":"#001A72","2757 C":"#001E60","2767 C":"#13294B","277 C":"#ABCAE9","278 C":"#8BB8E8","279 C":"#418FDE","280 C":"#012169","281 C":"#00205B","282 C":"#041E42","283 C":"#92C1E9","284 C":"#6CACE4","285 C":"#0072CE","286 C":"#0033A0","287 C":"#003087","288 C":"#002D72","289 C":"#0C2340","7681 C":"#94A9CB","7682 C":"#6787B7","7683 C":"#426DA9","7684 C":"#385E9D","7685 C":"#2C5697","7686 C":"#1D4F91","7687 C":"#1D428A","545 C":"#C6DAE7","544 C":"#BDD6E6","543 C":"#A4C8E1","542 C":"#7BAFD4","541 C":"#003C71","540 C":"#003057","539 C":"#00263A","290 C":"#B9D9EB","291 C":"#9BCBEB","292 C":"#69B3E7","293 C":"#003DA5","294 C":"#002F6C","295 C":"#002855","296 C":"#041C2C","2905 C":"#8DC8E8","2915 C":"#62B5E5","2925 C":"#009CDE","2935 C":"#0057B8","2945 C":"#004C97","2955 C":"#003865","2965 C":"#00263E","297 C":"#71C5E8","298 C":"#41B6E6","299 C":"#00A3E0","300 C":"#005EB8","301 C":"#004B87","302 C":"#003B5C","303 C":"#002A3A","7688 C":"#4698CB","7689 C":"#298FC2","7690 C":"#0076A8","7691 C":"#006298","7692 C":"#005587","7693 C":"#004976","7694 C":"#01426A","2975 C":"#99D6EA","2985 C":"#5BC2E7","2995 C":"#00A9E0","3005 C":"#0077C8","3015 C":"#00629B","3025 C":"#004F71","3035 C":"#003E51","7695 C":"#7BA7BC","7696 C":"#6399AE","7697 C":"#4E87A0","7698 C":"#41748D","7699 C":"#34657F","7700 C":"#165C7D","7701 C":"#005776","7457 C":"#BBDDE6","7458 C":"#71B2C9","7459 C":"#4298B5","7460 C":"#0086BF","7461 C":"#007DBA","7462 C":"#00558C","7463 C":"#002B49","304 C":"#9ADBE8","305 C":"#59CBE8","306 C":"#00B5E2","307 C":"#006BA6","308 C":"#00587C","309 C":"#003B49","635 C":"#A4DBE8","636 C":"#8BD3E6","637 C":"#4EC3E0","638 C":"#00AFD7","639 C":"#0095C8","640 C":"#0082BA","641 C":"#0067A0","7702 C":"#48A9C5","7703 C":"#009CBD","7704 C":"#0085AD","7705 C":"#007096","7706 C":"#006A8E","7707 C":"#00617F","7708 C":"#005670","628 C":"#B8DDE1","629 C":"#9BD3DD","630 C":"#77C5D5","631 C":"#3EB1C8","632 C":"#0093B2","633 C":"#007396","634 C":"#005F83","310 C":"#6AD1E3","311 C":"#05C3DE","312 C":"#00A9CE","313 C":"#0092BC","314 C":"#007FA3","315 C":"#00677F","316 C":"#004851","3105 C":"#68D2DF","3115 C":"#00C1D5","3125 C":"#00AEC7","3135 C":"#008EAA","3145 C":"#00778B","3155 C":"#006272","3165 C":"#004F59","7709 C":"#63B1BC","7710 C":"#00A7B5","7711 C":"#0097A9","7712 C":"#00859B","7713 C":"#007D8A","7714 C":"#007680","7715 C":"#006269","317 C":"#B1E4E3","318 C":"#88DBDF","319 C":"#2DCCD3","320 C":"#009CA6","321 C":"#008C95","322 C":"#007377","323 C":"#005F61","7464 C":"#A0D1CA","7465 C":"#40C1AC","7466 C":"#00B0B9","7467 C":"#00A3AD","7468 C":"#007398","7469 C":"#005F86","7470 C":"#005A70","7471 C":"#7EDDD3","7472 C":"#5CB8B2","7473 C":"#279989","7474 C":"#007681","7475 C":"#487A7B","7476 C":"#0D5257","7477 C":"#244C5A","5523 C":"#B6CFD0","5513 C":"#ABC7CA","5503 C":"#94B7BB","5493 C":"#7FA9AE","5483 C":"#4F868E","5473 C":"#115E67","5463 C":"#07272D","7716 C":"#00968F","7717 C":"#00857D","7718 C":"#007672","7719 C":"#006D68","7720 C":"#00635B","7721 C":"#005E5D","7722 C":"#005151","324 C":"#9CDBD9","325 C":"#64CCC9","326 C":"#00B2A9","327 C":"#008675","328 C":"#007367","329 C":"#00685E","330 C":"#00534C","3242 C":"#71DBD4","3252 C":"#2AD2C9","3262 C":"#00BFB3","3272 C":"#00A499","3282 C":"#008578","3292 C":"#00594F","3302 C":"#004C45","3245 C":"#7CE0D3","3255 C":"#2CD5C4","3265 C":"#00C7B1","3275 C":"#00B398","3285 C":"#009681","3295 C":"#007864","3305 C":"#004E42","3248 C":"#6DCDB8","3258 C":"#49C5B1","3268 C":"#00AB8E","3278 C":"#009B77","3288 C":"#008264","3298 C":"#006A52","3308 C":"#034638","566 C":"#B9DCD2","565 C":"#A1D6CA","564 C":"#86C8BC","563 C":"#6BBBAE","562 C":"#006F62","561 C":"#00594C","560 C":"#1D3C34","573 C":"#B5E3D8","572 C":"#A5DFD3","571 C":"#98DBCE","570 C":"#6BCABA","569 C":"#00816D","568 C":"#006C5B","567 C":"#173F35","559 C":"#ADCAB8","558 C":"#9ABEAA","557 C":"#85B09A","556 C":"#6FA287","555 C":"#28724F","554 C":"#205C40","553 C":"#284734","5595 C":"#BFCEC2","5585 C":"#A7BDB1","5575 C":"#92ACA0","5565 C":"#7F9C90","5555 C":"#5C7F71","5545 C":"#43695B","5535 C":"#183028","5665 C":"#BAC5B9","5655 C":"#B0BDB0","5645 C":"#A3B2A4","5635 C":"#94A596","5625 C":"#708573","5615 C":"#5E7461","5605 C":"#22372B","5527 C":"#BCC9C5","5517 C":"#B1C0BC","5507 C":"#9DB0AC","5497 C":"#829995","5487 C":"#5D7975","5477 C":"#3E5D58","5467 C":"#18332F","621 C":"#D1E0D7","622 C":"#B7CDC2","623 C":"#9AB9AD","624 C":"#789F90","625 C":"#507F70","626 C":"#285C4D","627 C":"#13322B","331 C":"#A7E6D7","332 C":"#8CE2D0","333 C":"#3CDBC0","334 C":"#009775","335 C":"#007B5F","336 C":"#00664F","337 C":"#8FD6BD","338 C":"#6ECEB2","339 C":"#00B388","340 C":"#00965E","341 C":"#007A53","342 C":"#006747","343 C":"#115740","7723 C":"#50A684","7724 C":"#00966C","7725 C":"#008755","7726 C":"#007B4B","7727 C":"#006F44","7728 C":"#006845","7729 C":"#005844","3375 C":"#7AE1BF","3385 C":"#47D7AC","3395 C":"#00C389","3405 C":"#00AF66","3415 C":"#007749","3425 C":"#006341","3435 C":"#154734","344 C":"#A0DAB3","345 C":"#91D6AC","346 C":"#71CC98","347 C":"#009A44","348 C":"#00843D","349 C":"#046A38","350 C":"#2C5234","351 C":"#A2E4B8","352 C":"#8FE2B0","353 C":"#80E0A7","354 C":"#00B140","355 C":"#009639","356 C":"#007A33","357 C":"#215732","7478 C":"#9BE3BF","7479 C":"#26D07C","7480 C":"#00BF6F","7481 C":"#00B74F","7482 C":"#009F4D","7483 C":"#275D38","7484 C":"#00573F","7730 C":"#4B9560","7731 C":"#228848","7732 C":"#007A3E","7733 C":"#007041","7734 C":"#286140","7735 C":"#36573B","7736 C":"#395542","7737 C":"#6BA539","7738 C":"#48A23F","7739 C":"#319B42","7740 C":"#3A913F","7741 C":"#44883E","7742 C":"#4A773C","7743 C":"#44693D","358 C":"#ADDC91","359 C":"#A1D884","360 C":"#6CC24A","361 C":"#43B02A","362 C":"#509E2F","363 C":"#4C8C2B","364 C":"#4A7729","7485 C":"#D0DEBB","7486 C":"#BCE194","7487 C":"#8EDD65","7488 C":"#78D64B","7489 C":"#74AA50","7490 C":"#719949","7491 C":"#79863C","365 C":"#C2E189","366 C":"#B7DD79","367 C":"#A4D65E","368 C":"#78BE20","369 C":"#64A70B","370 C":"#658D1B","371 C":"#546223","372 C":"#D4EB8E","373 C":"#CDEA80","374 C":"#C5E86C","375 C":"#97D700","376 C":"#84BD00","377 C":"#7A9A01","378 C":"#59621D","580 C":"#C4D6A4","579 C":"#BCD19B","578 C":"#B7CE95","577 C":"#A9C47F","576 C":"#789D4A","575 C":"#67823A","574 C":"#4E5B31","5807 C":"#D0D1AB","5797 C":"#C6C89B","5787 C":"#BABD8B","5777 C":"#A2A569","5767 C":"#8A8D4A","5757 C":"#6D712E","5747 C":"#3D441E","5875 C":"#D2CE9E","5865 C":"#CBC793","5855 C":"#C0BB87","5845 C":"#AFA96E","5835 C":"#A09958","5825 C":"#89813D","5815 C":"#555025","5803 C":"#C3C6A8","5793 C":"#B3B995","5783 C":"#A3AA83","5773 C":"#899064","5763 C":"#737B4C","5753 C":"#5E6738","5743 C":"#3E4827","7492 C":"#BFCC80","7493 C":"#BBC592","7494 C":"#9CAF88","7495 C":"#8F993E","7496 C":"#76881D","7497 C":"#7A7256","7498 C":"#5B6236","7744 C":"#BABC16","7745 C":"#ABAD23","7746 C":"#999B30","7747 C":"#888D30","7748 C":"#7C8034","7749 C":"#727337","7750 C":"#656635","379 C":"#E2E868","380 C":"#DBE442","381 C":"#CEDC00","382 C":"#C4D600","383 C":"#A8AD00","384 C":"#949300","385 C":"#787121","386 C":"#E9EC6B","387 C":"#E3E935","388 C":"#E0E721","389 C":"#D0DF00","390 C":"#B5BD00","391 C":"#9A9500","392 C":"#827A04","587 C":"#E3E48D","586 C":"#E0E27C","585 C":"#DBDE70","584 C":"#D2D755","583 C":"#B7BF10","582 C":"#8E8C13","581 C":"#625D20","393 C":"#F0EC74","394 C":"#EDE939","395 C":"#ECE81A","396 C":"#E1E000","397 C":"#BFB800","398 C":"#ADA400","399 C":"#A09200","3935 C":"#F3EA5D","3945 C":"#F3E500","3955 C":"#EFDF00","3965 C":"#EEDC00","3975 C":"#BBA600","3985 C":"#9A8700","3995 C":"#685C20","600 C":"#F1EB9C","601 C":"#F0E991","602 C":"#F0E87B","603 C":"#EDE04B","604 C":"#EADA24","605 C":"#E1CD00","606 C":"#CFB500","607 C":"#EBE49A","608 C":"#E9E186","609 C":"#E6DE77","610 C":"#E1D555","611 C":"#D7C826","612 C":"#C4B000","613 C":"#B39B00","461 C":"#E9DF97","460 C":"#E4D77E","459 C":"#DECD63","458 C":"#D9C756","457 C":"#B89D18","456 C":"#A28E2A","455 C":"#695B24","614 C":"#DCD59A","615 C":"#D6CF8D","616 C":"#D0C883","617 C":"#C0B561","618 C":"#AC9F3C","619 C":"#9F912A","620 C":"#8A7B19","7751 C":"#CAB64B","7752 C":"#CFB023","7753 C":"#C1A01E","7754 C":"#A08629","7755 C":"#897630","7756 C":"#736635","7757 C":"#675E33","7758 C":"#D4C304","7759 C":"#C4B200","7760 C":"#91852C","7761 C":"#747136","7762 C":"#5D6439","7763 C":"#585C3B","7764 C":"#535435","7765 C":"#BBB323","7766 C":"#B4A91F","7767 C":"#AA9D2E","7768 C":"#8F7E35","7769 C":"#716135","7770 C":"#635939","7771 C":"#4E4934","4545 C":"#D5CB9F","4535 C":"#CFC493","4525 C":"#C5B783","4515 C":"#B3A369","4505 C":"#998542","4495 C":"#8C7732","4485 C":"#614F25","454 C":"#CAC7A7","453 C":"#BFBB98","452 C":"#B0AA7E","451 C":"#9B945F","450 C":"#594A25","449 C":"#524727","448 C":"#4A412A","7499 C":"#F1E6B2","7500 C":"#DFD1A7","7501 C":"#D9C89E","7502 C":"#CEB888","7503 C":"#A89968","7504 C":"#94795D","7505 C":"#816040","468 C":"#DDCBA4","467 C":"#D3BC8D","466 C":"#C6AA76","465 C":"#B9975B","464 C":"#8B5B29","463 C":"#744F28","462 C":"#5C462B","7506 C":"#EFDBB2","7507 C":"#FCD299","7508 C":"#E1B87F","7509 C":"#D6A461","7510 C":"#C6893F","7511 C":"#B77729","7512 C":"#A6631B","719 C":"#EDC8A3","720 C":"#E7B78A","721 C":"#DDA46F","722 C":"#C88242","723 C":"#B36924","724 C":"#934D11","725 C":"#7D3F16","475 C":"#F3CFB3","474 C":"#F1C6A7","473 C":"#F0BF9B","472 C":"#E59E6D","471 C":"#B86125","470 C":"#A45A2A","469 C":"#693F23","726 C":"#E0C09F","727 C":"#D9B48F","728 C":"#CDA077","729 C":"#B58150","730 C":"#9E652E","731 C":"#774212","732 C":"#623412","4685 C":"#E0C6AD","4675 C":"#DCBFA6","4665 C":"#CDA788","4655 C":"#BF9474","4645 C":"#AD7C59","4635 C":"#946037","4625 C":"#4F2C1D","7513 C":"#E1B7A7","7514 C":"#D5A286","7515 C":"#C58B68","7516 C":"#99552B","7517 C":"#85431E","7518 C":"#6D4F47","7519 C":"#5E4B3C","4755 C":"#D7C4B7","4745 C":"#CDB5A7","4735 C":"#C0A392","4725 C":"#AE8A79","4715 C":"#956C58","4705 C":"#7C4D3A","4695 C":"#5B3427","482 C":"#DBC8B6","481 C":"#D3BBA8","480 C":"#C6A992","479 C":"#AA8066","478 C":"#703F2A","477 C":"#623B2A","476 C":"#4E3629","7527 C":"#D6D2C4","7528 C":"#C5B9AC","7529 C":"#B7A99A","7530 C":"#A39382","7531 C":"#7A6855","7532 C":"#63513D","7533 C":"#473729","7534 C":"#D1CCBD","7535 C":"#B7B09C","7536 C":"#A69F88","7537 C":"#A7ACA2","7538 C":"#949A90","7539 C":"#8E9089","7540 C":"#4B4F54","427 C":"#D0D3D4","428 C":"#C1C6C8","429 C":"#A2AAAD","430 C":"#7C878E","431 C":"#5B6770","432 C":"#333F48","433 C":"#1D252D","420 C":"#C7C9C7","421 C":"#B2B4B2","422 C":"#9EA2A2","423 C":"#898D8D","424 C":"#707372","425 C":"#54585A","426 C":"#25282A","441 C":"#BEC6C4","442 C":"#A2ACAB","443 C":"#919D9D","444 C":"#717C7D","445 C":"#505759","446 C":"#3F4444","447 C":"#373A36","413 C":"#BABBB1","414 C":"#A8A99E","415 C":"#919388","416 C":"#7E7F74","417 C":"#65665C","418 C":"#51534A","419 C":"#212322","400 C":"#C4BFB6","401 C":"#AFA9A0","402 C":"#9D968D","403 C":"#8C857B","404 C":"#776E64","405 C":"#696158","406 C":"#C4BCB7","407 C":"#B2A8A2","408 C":"#978C87","409 C":"#857874","410 C":"#746661","411 C":"#5E514D","412 C":"#382F2D","434 C":"#D0C4C5","435 C":"#C1B2B6","436 C":"#AB989D","437 C":"#7B6469","438 C":"#584446","439 C":"#453536","440 C":"#382E2C","Warm Gray 1 C":"#D7D2CB","Warm Gray 2 C":"#CBC4BC","Warm Gray 3 C":"#BFB8AF","Warm Gray 4 C":"#B6ADA5","Warm Gray 5 C":"#ACA39A","Warm Gray 6 C":"#A59C94","Warm Gray 7 C":"#968C83","Warm Gray 8 C":"#8C8279","Warm Gray 9 C":"#83786F","Warm Gray 10 C":"#796E65","Warm Gray 11 C":"#6E6259","Cool Gray 1 C":"#D9D9D6","Cool Gray 2 C":"#D0D0CE","Cool Gray 3 C":"#C8C9C7","Cool Gray 4 C":"#BBBCBC","Cool Gray 5 C":"#B1B3B3","Cool Gray 6 C":"#A7A8AA","Cool Gray 7 C":"#97999B","Cool Gray 8 C":"#888B8D","Cool Gray 9 C":"#75787B","Cool Gray 10 C":"#63666A","Cool Gray 11 C":"#53565A","Black 2 C":"#332F21","Black 3 C":"#212721","Black 4 C":"#31261D","Black 5 C":"#3E2B2E","Black 6 C":"#101820","Black 7 C":"#3D3935"},

    },


    getState() {
        return this._state
    },

    // dispatch(action) {
    //     this._state.homePage = homeReducer(this._state.homePage, action)
    // }
}

export default store