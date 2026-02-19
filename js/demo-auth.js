(function () {
  const KEY = "gx_demo_user";

  function read() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}"); }
    catch (e) { return {}; }
  }

  function write(data) {
    localStorage.setItem(KEY, JSON.stringify(data || {}));
  }

  window.GXAuth = {
    get: function () {
      const u = read();
      return {
        isSignedIn: !!u.isSignedIn,
        memberTier: u.memberTier || "none"
      };
    },
    signIn: function (tier) {
      write({ isSignedIn: true, memberTier: tier || "none" });
    },
    signOut: function () {
      write({ isSignedIn: false, memberTier: "none" });
    }
  };
})();