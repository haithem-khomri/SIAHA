<?php
    require_once('db/db.php');
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/navBar.css">
    <link rel="stylesheet" href="css/navbarResponsive.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>SKAcademy</title>
</head>
<body dir="rtl">
    <header>
          <nav class="Nav_Bar_Items">
            <h1 class="Nav_Bar_Logo">أكاديمية المعرفة</h1>
            <div class="Menu_Icon" id="Menu_Icon_ID">
                <img src="img/Menu.png" width="50px">
            </div>
            <ul class="Nav_Bar_Menu" id="Nav_Bar_Menu_ID">
                <li>
                    <a href="#" class="Nav_Bar_Menu_Item" id="item">
                        <span>الرئيسية</span>
                    </a>
                </li>
                <li>
                    <a href="#about" class="Nav_Bar_Menu_Item">
                        <span>حول الأكاديمية</span>
                    </a>
                </li>
                <li>
                    <a href="#program" class="Nav_Bar_Menu_Item">
                        <span>المواد المدروسة</span>
                    </a>
                </li>
                <li>
                    <a href="#events" class="Nav_Bar_Menu_Item">
                        <span>الأحداث والأخبار</span>
                    </a>
                </li>       
                <li>
                    <a href="#contact" class="Nav_Bar_Menu_Item">
                        <span>تواصل معنا</span>
                    </a>
                </li>
                <li>
                    <a href="login.html" class="Nav_Bar_Menu_Item join">
                        <span>إنضم إلينا</span>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    
    <section class="welcome">
        <h1>مرحبا بكم في أكادميتنا</h1>
    </section>
    
    <section class="about" id="about">
        <h2>حول الأكاديمية</h2>
        <p class="abt">نحن أكاديمية إسلامية تهدف إلى تنمية المعرفة الشرعية للأطفال. نقدم دروسًا في مختلف المواد وفق برنامج خاص عبر منصة Zoom، باستخدام مجموعة من الأساتذة ذوي الكفاءة العالية.
            شهادات معترف بها تُمنح للمشتركين عند انتهاء مسارهم الدراسي، بالإضافة إلى إشارات إلى مصادر إضافية موثوقة لاستزياد المعرفة الشرعية. 
            نهدف إلى تمكين الأجيال القادمة بالعلم الشرعي الذي يفلح به الإنسان في الدنيا والآخرة.</p>
            
            <div class="icons">
            <div class="icon_item">
                <img src="img/tutor.png" width="200vw">
                <h3>دروس عن بعد</h3>
            </div>
            <div class="icon_item">
                <img src="img/notebook.png" width="200vw">
                <h3>تمارين تطبيقية</h3>
            </div>
            <div class="icon_item">
                <img src="img/certificate.png" width="200vw">
                <h3>شهادة إتمام</h3>
            </div>
        </div>
    </section>


    
    <section class="program" id="program">
        <h2>المواد المدروسة</h2>
        
        <div class="kards">
            <div class="kard red">
                <p class="tip">حفظ القرآن</p>
                <p class="second-text">تفخر أكاديميتنا بتقديم دروس فريدة لحفظ القرآن الكريم و دراسة كلام العزيز الكريم. نضمن لكم مراقبة دقيقة لتقدم الطلاب ونخصص حصصًا محددة لتعليم وتلاوة القرآن الكريم و كذا حصصا لتسميع الطلبة وتصحيح الاخطاء الواردة.</p>
            </div>
            <div class="kard blue">
                <p class="tip">أحكام التجويد</p>
                <p class="second-text">يتم تقديم دروس تشمل مختلف الأحكام المتعلقة بتلاوة القرآن الكريم، مع توفير حصص تطبيقية لترسيخ المفاهيم المكتسبة لدى الطلبة.</p>
            </div>
            <div class="kard green">
                <p class="tip">تفسير القرآن</p>
                <p class="second-text">نفتخر بتقديم دورات متميزة في تفسير القرآن الكريم، حيث نركز على فهم السياق والتأمل في معاني الآيات. نقدم جلسات تحليلية لضمان فهم عميق للطلاب، مع توجيههم نحو فهم أعمق للرسائل الإلهية.</p>
            </div>
            <div class="kard green">
                <p class="tip">العقيدة الإسلامية</p>
                <p class="second-text">تتيح أكاديميتنا للطلاب استكشاف أساسيات العقيدة الإسلامية من خلال دورات مخصصة. نقوم بتقديم محاضرات تفصيلية حول مفاهيم التوحيد والرسالات النبوية، ونشجع على النقاش لتعزيز فهم شامل لقواعد الإيمان.</p>
            </div>
            <div class="kard green">
                <p class="tip">الفقه الإسلامي</p>
                <p class="second-text">في أكاديميتنا، نقدم دروسًا تفصيلية في الفقه الإسلامي، حيث يتم تناول القوانين والأحكام الشرعية. نسعى إلى توضيح الفقه الإسلامي من خلال حلول واقعية للمسائل اليومية، ونقدم حلقات تطبيقية لتحفيز المشاركة الفعّالة وفهم عميق للقوانين الشرعية.</p>
            </div>
        </div>
        
    </section>

    <section class="events" id="events">
        <h2>الأحداث والأخبار</h2>
        
        <div class="cards">
            
        <div class="card" dir="rtl">
            <div class="card-details">
                <p class="text-title">حفل الإفتتاح</p>
                <p class="text-body">سيقام الحفل يوم 30 جانفي 2024 في المدرسة القرآنية حيث سيتم النرحيب بتلاميذنا الجدد وتحفيزهم على الدراسة بجد </p>
            </div>
        </div>
        
    </div>

</section>


<footer id="contact">
    <h2>تواصل معنا</h2>
    <div class="contact_items">
        <div>
            <h3 class="contact_item">skacademy@gmail.com</h3>
            <h3 class="contact_item">05 xxxxxxxx</h3>
        </div>
    </div>
</footer>
<script src="js/navbar.js"></script>
</body>
</html>