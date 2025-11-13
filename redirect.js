(function() {
  const host = window.location.hostname;
  const target = "www.keepitfresh.co.il";

  // אם נכנסו בלי www — נבצע הפניה
  if (host !== target) {
    const newURL = window.location.protocol + "//" + target + window.location.pathname + window.location.search + window.location.hash;
    window.location.replace(newURL);
  }
})();
