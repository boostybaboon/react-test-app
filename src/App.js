import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await (await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return <div>
    <div>
    <a href="/.auth/login/google?post_login_redirect_uri=https://jwt.ms">Login with Google</a>
    </div>
    <div>
    <a href="/.auth/login/facebook?post_login_redirect_uri=https://jwt.ms">Login with Facebook</a>
    </div>
    <div>
    <a href="/.auth/login/twitter?post_login_redirect_uri=https://jwt.ms">Login with Twitter</a>
    </div>
    <div>
    <a href="/.auth/login/github?post_login_redirect_uri=https://jwt.ms">Login with Github</a>
    </div>
    <div>
    <a href="/.auth/login/aad?post_login_redirect_uri=https://jwt.ms">Login with Microsoft</a>
    </div>
    <div>
    <a href="/.auth/logout">Logout</a>
    </div>
    <div>
      {data}
    </div>
  </div>;
}

export default App;