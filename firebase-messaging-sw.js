// firebase-messaging-sw.js

// استيراد مكتبات Firebase (استخدم إصدار compat للمراسلة في الـ Service Worker)
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// استخدم نفس إعدادات مشروعك الموجودة في ملف HTML
const firebaseConfig = {
    apiKey: "AIzaSyCcqpstSz3Wg6zQb_-bC0JyjcJjX5c3TQ8",
    authDomain: "saifsa-d4bee.firebaseapp.com",
    databaseURL: "https://saifsa-d4bee-default-rtdb.firebaseio.com",
    projectId: "saifsa-d4bee",
    storageBucket: "saifsa-d4bee.firebasestorage.app",
    messagingSenderId: "56650923251",
    appId: "1:56650923251:web:83ed4afadf44f8eabf0b86"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// الحصول على نسخة من خدمة الرسائل
const messaging = firebase.messaging();

// معالجة الرسائل عندما يكون التطبيق في الخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/firebase-logo.png' // يمكنك وضع أيقونة افتراضية
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
