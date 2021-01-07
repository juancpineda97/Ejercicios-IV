const { Etcd3 } = require('etcd3');
const client = new Etcd3();
 
(async () => {
  await client.put('foo').value('bar');
 
  const fooValue = await client.get('foo').string();
  console.log('foo was:', fooValue);

  const miclaveValue = await client.get('miclave').string();
  console.log('miclave was:', miclaveValue);
 
  const allFValues = await client.getAll().prefix('f').keys();
  console.log('all our keys starting with "f":', allFValues);
 
  await client.delete().all();
})();