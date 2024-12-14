function sendMessage() {
    // الحصول على القيم المدخلة من المستخدم
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // التحقق من وجود البيانات المطلوبة
    if (name && email && subject && message) {
        // هنا يمكنك إضافة منطق لإرسال البيانات إلى الخادم
        // كاستخدام fetch أو XMLHttpRequest

        // في هذا المثال، سيتم عرض رسالة تأكيد فقط
        document.getElementById('confirmation').textContent = "تم إرسال رسالتك بنجاح!";
        
        // مسح الحقول بعد الإرسال
        document.getElementById('contactForm').reset();
    } else {
        // إذا كانت هناك بيانات مفقودة
        alert("يرجى ملء جميع الحقول.");
    }
}