export default function () {
    const result =  useState('result', () => 0);
    function calculate( param1, param2 )  {
      result.value = param1 + param2;
    }
    return { result, calculate}
  }
