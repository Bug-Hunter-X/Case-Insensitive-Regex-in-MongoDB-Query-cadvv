```javascript
const query = { name: { $regex: 'John', $options: 'i' } }; // Optimized case-insensitive search
db.collection('users').find(query).toArray((err, result)=>{
  if(err) throw err;
  console.log(result);
})
```