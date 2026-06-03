// الحصول على العناصر
const myBtn = document.getElementById('myBtn');
const messageElement = document.getElementById('message');

// الرسائل المختلفة
const messages = [
    '👋 مرحباً بك في BLOox!',
    '🎉 أنت رائع جداً!',
    '💪 استمر في التطوير!',
    '🔥 أنت تصنع شيء رائع!',
    '⭐ أنت ممل جداً! اذهب للتطوير!',
    '🚀 أنت على الطريق الصحيح!',
];

// عداد الضغطات
let clickCount = 0;

// إضافة مستمع للنقر على الزر
myBtn.addEventListener('click', function() {
    clickCount++;
    
    // اختيار رسالة عشوائية
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    // عرض الرسالة
    messageElement.textContent = randomMessage;
    
    // إضافة تأثير بصري
    myBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        myBtn.style.transform = 'scale(1)';
    }, 100);
    
    // رسالة في Console
    console.log(`تم الضغط على الزر ${clickCount} مرات`);
});

// رسالة بداية
console.log('👋 مرحباً بك في BLOox!');
console.log('💡 اضغط على الزر وشاهد ما يحدث!');
console.log('📝 يمكنك تعديل ملف script.js لإضافة المزيد من الميزات');
