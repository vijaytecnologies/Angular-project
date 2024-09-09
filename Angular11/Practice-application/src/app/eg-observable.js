let myObserver = new Observable((data) => {
        data.next('hey good morning ');
        setTimeout(() => {
          data.next('hey good afternoon ')
  
        }, 4000);
        setTimeout(() => {
          data.next('hey good evening,hope you had a great day')
  
        }, 6000)
  
  
      })
      //subscribe
      // myObserver.subscribe({
      //   next(res) {
      //     console.log(res)
      //   }
      // })
      myObserver.subscribe((data:string) => {
        this.content = data
      }
    )