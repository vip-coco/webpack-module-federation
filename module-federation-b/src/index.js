import modules2 from './module2'
const title = modules2("z模块a")
document.body.append(title)

import("apponeKey2/modules1").then((res) => {
  // res.default()
  const title = res.default("模块b--");
  document.body.append(title);
});
