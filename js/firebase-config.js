// js/firebase-config.js

// 1. Import library Firebase versi Web/CDN (Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 2. Konfigurasi Firebase Akun Baru (Data dari kamu)
const firebaseConfig = {
  apiKey: "AIzaSyDApokeNMRurdK7CvQN1Ehtjzbvs97Qs1M",
  authDomain: "mediabelajarppj-e69a0.firebaseapp.com",
  projectId: "mediabelajarppj-e69a0",
  storageBucket: "mediabelajarppj-e69a0.firebasestorage.app",
  messagingSenderId: "384372061738",
  appId: "1:384372061738:web:609dd78c2cb7657eca7553",
  measurementId: "G-MH3GLW0PLK",
  databaseURL: "https://mediabelajarppj-e69a0-default-rtdb.firebaseio.com" // Ditambahkan manual agar Database terhubung
};

// 3. Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// 4. Export agar bisa dipakai di file HTML (Daftar, Login, dll)
export { auth, db };