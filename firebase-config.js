// Konfigurasi Firebase untuk Tiwul Ayu Mbak Jannah
// Ganti nilai di bawah ini dengan kredensial dari Firebase Console Anda (Project Settings -> General -> Your Apps)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
} else {
  console.warn("Firebase SDK belum dimuat. Pastikan script SDK Firebase sudah dipasang sebelum firebase-config.js");
}
