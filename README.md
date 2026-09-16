# Forascom — فرصكم

موقع Forascom متعدد الصفحات (Multi-Page Website) — موقع ثابت بدون build tools، مبني بـ HTML + Tailwind CSS (CDN) + JavaScript خالص.

## بنية المشروع

```
Forascom/
├── index.html          ← الصفحة الرئيسية
├── about.html          ← صفحة من نحن
├── services.html       ← صفحة الخدمات
├── portfolio.html      ← صفحة المعرض
├── contact.html        ← صفحة التواصل
├── assets/
│   ├── css/
│   │   ├── styles.css  ← الأنماط المشتركة فقط (layout / nav / buttons / shared motion)
│   │   ├── index.css   ← أنماط الصفحة الرئيسية فقط
│   │   ├── about.css   ← أنماط صفحة من نحن فقط
│   │   ├── services.css← أنماط صفحة الخدمات فقط
│   │   ├── portfolio.css← أنماط صفحة المعرض فقط
│   │   └── contact.css ← أنماط صفحة التواصل فقط
│   ├── js/
│   │   ├── main.js     ← منطق مشترك: mobile menu، scroll chrome، reveal، estimator
│   │   ├── index.js    ← منطق الصفحة الرئيسية فقط
│   │   ├── about.js    ← منطق صفحة من نحن فقط
│   │   ├── services.js ← منطق صفحة الخدمات فقط
│   │   ├── portfolio.js← منطق صفحة المعرض فقط
│   │   ├── contact.js  ← معالجة نموذج التواصل فقط
│   │   ├── orbit.js    ← المدار التقني التفاعلي
│   │   └── about-ecosystem.js ← تفاعلات ecosystem page
│   └── images/         ← الصور / الشعارات / الأيقونات
```

## التنقل بين الصفحات

- الهيدر موحّد في كل الصفحات بروابط `*.html` مع تمييز الصفحة النشطة عبر كلاس `nav-active`.
- لعرض رابط جديد في الصفحات، عدّل **نسخة الهيدر في كل ملف HTML** (لا يوجد استيراد مكونات حتى الآن).
- الفوتر متوحد مع روابط سريعة + سوشيال.

## أنظمة الحركة (Animations)

تُبقى الأنماط المشتركة في `assets/css/styles.css` فقط للـ UI العام والـ motion system المشترك، بينما تُخزن أنماط الصفحات الخاصة في ملفاتها الخاصة:

- `index.css` — hero / tech-grid / callouts / sections الخاصة بالصفحة الرئيسية
- `services.css` — cards / shine effects / icon pulse / layout الخاص بالخدمات
- `portfolio.css` — filters / cards / reveal / visuals المشروع
- `contact.css` — hero / form / trust panel / benefits / WhatsApp layout
- `about.css` — layout و styling الخاص بصفحة من نحن

## جافاسكريبت

- `main.js` — منطق مشترك فقط: mobile menu، scroll chrome، reveal، estimator wizard، وغيرها من التفاعلات المشتركة.
- `index.js` — منطق الصفحة الرئيسية فقط.
- `services.js` — منطق صفحة الخدمات فقط.
- `portfolio.js` — يرسم الشبكة تلقائياً في `#projects-grid` ويُدار الفلترة/المودال.
- `contact.js` — يدير إرسال النموذج وتهيئة WhatsApp CTA.
- `about.js` / `about-ecosystem.js` — منطق صفحة من نحن فقط.
- `orbit.js` — يرسم المدار في `#orbit-container` عندما تكون الصفحة تحتوي على هذا العنصر.

## مبدأ التنظيم

- لا تُوضع أنماط أو وظائف خاصة بصفحة داخل الملفات المشتركة إذا كان يمكن فصلها.
- تُعرف كل صفحة بملف CSS/JS خاص بها عندما يكون لها سلوك أو تصميم فريد.
- تظل `styles.css` و `main.js` للمحتوى العام فقط، لتسهيل الصيانة والتطوير، مع المحافظة على نفس الواجهة والوظائف الحالية.

1. انسخ هيكل صفحة موجودة مع إبقاء:
   - الـ `<head>` الكامل
   - شريط التقدم `<div id="scroll-progress">`
   - الهيدر والفوتر المشتركين
   - الروابط المشتركة إلى `styles.css` و `main.js`
2. أضف ملف CSS خاص بالصفحة إن كانت هناك مكونات فريدة.
3. أضف ملف JS خاص بالصفحة إن كانت هناك تفاعلات فريدة.
4. أضف الروابط إلى الصفحة الجديدة في `<head>` و قبل `</body>` دون تغيير المحتوى أو التصميم الحالي.
5. احتفظ بالملفات المشتركة نظيفة وقصيرة قدر الإمكان.

## ملاحظات

- Tailwind يُحمَّل عبر CDN، لذا يتطلب إنترنت عند التشغيل.
- أرقام الهواتف والواتساب (`201090000000`) وقنوات التواصل أمثلة — استبدلها بأرقامكم الفعلية.