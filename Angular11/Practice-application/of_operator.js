  // of operator
of('ready',6,7,8).subscribe((res)=>{
    console.log(res)
  })

  //from operator
  from(['ready',1,2,3]).subscribe((res)=>{
    console.log(res)
  })

  //range operator

  
const numbers = range(1, 3);
 
numbers.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Complete!')
});

//interval operator

interval(2000).subscribe((res)=>{
    console.log(res)
})