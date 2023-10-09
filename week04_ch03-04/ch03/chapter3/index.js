import lodash from "lodash";

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr);

console.log(uniqueArr);

// [1, 2, 4, 3]

//cannot use import statement outside a module 에러 발생.
//package.json 파일에 "type": "module" 추가하니 잘 실행됨.