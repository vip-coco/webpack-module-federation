import("apponeKey2/modules1").then((res) => {
  // res.default()
  const title = res.default("模块ac--");
  document.body.append(title);
});

import("apponeKey3/modules2").then((res) => {
  // res.default()
  const title = res.default("模块rb--");
  document.body.append(title);
});

 
