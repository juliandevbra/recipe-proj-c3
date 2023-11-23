const LocalStorage = () => {
    let auth = true
    localStorage.setItem('auth', auth)
    const lsAuth = localStorage.getItem('auth')
    console.log('ls', JSON.parse(lsAuth))
    console.log('variable', auth)
    console.log('condición', auth === JSON.parse(lsAuth))
  
    const obj = {
      name: 'Romi',
      pass: 'contra1234'
    }
    localStorage.setItem('user', JSON.stringify(obj))
    const user = localStorage.getItem('user')
    const parsedUser = JSON.parse(user)
    console.log(user)
    console.log(parsedUser)
    
    localStorage.removeItem('auth') //Remover un solo item 
    localStorage.clear() //Remover todo
}