// Simple auth guard (include this on protected pages)
;(async function(){
  if (!window.firebase) {
    await new Promise((res, rej)=>{ const s=document.createElement('script'); s.src='https://www.gstatic.com/firebasejs/10.12.4/firebase-app-compat.js'; s.onload=res; s.onerror=rej; document.head.appendChild(s); });
    await new Promise((res, rej)=>{ const s=document.createElement('script'); s.src='https://www.gstatic.com/firebasejs/10.12.4/firebase-auth-compat.js'; s.onload=res; s.onerror=rej; document.head.appendChild(s); });
  }
  const cfg = await fetch('/api/config', {cache:'no-store'}).then(r=>r.json());
  if (!firebase.apps.length){
    firebase.initializeApp({
      apiKey: cfg.FIREBASE_API_KEY,
      authDomain: cfg.FIREBASE_AUTH_DOMAIN,
      projectId: cfg.FIREBASE_PROJECT_ID,
      storageBucket: cfg.FIREBASE_STORAGE_BUCKET,
      appId: cfg.FIREBASE_APP_ID
    });
  }
  const auth = firebase.auth();
  auth.onAuthStateChanged(user=>{
    if(!user){
      const ret = encodeURIComponent(location.pathname + location.search);
      location.href = '/auth.html?return=' + ret;
    }
  });
})();
