export default function () {
  const list =  useState('list', () => 'bar')
  const list2 =  useState('list2', () => []);
  function addTo(params) {
    list2.value = [...list2.value, params];
  }
  return {list, list2, addTo}
}