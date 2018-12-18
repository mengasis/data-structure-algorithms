const clients = [
    { id: 1, taxNumber: '86620855', name: 'James Smith' },
    { id: 2, taxNumber: '7317855K', name: 'Michael Johnson' },
    { id: 3, taxNumber: '73826497', name: 'David Rodriguez' },
    { id: 4, taxNumber: '88587715', name: 'Charles Garcia' },
    { id: 5, taxNumber: '94020190', name: 'Margaret White' },
    { id: 6, taxNumber: '99804238', name: 'Sarah Anderson' }
  ]
  
  const banks = [
    { id: 1, name: 'Bank of America' },
    { id: 2, name: 'Citibank' },
    { id: 3, name: 'JP Morgan Chase' }
  ]
  
  const accounts = [
    { clientId: 6, bankId: 1, balance: 15000 },
    { clientId: 1, bankId: 3, balance: 18000 },
    { clientId: 5, bankId: 3, balance: 135000 },
    { clientId: 2, bankId: 2, balance: 5600 },
    { clientId: 3, bankId: 1, balance: 23000 },
    { clientId: 5, bankId: 2, balance: 15000 },
    { clientId: 3, bankId: 3, balance: 45900 },
    { clientId: 2, bankId: 3, balance: 19000 },
    { clientId: 4, bankId: 3, balance: 51000 },
    { clientId: 5, bankId: 1, balance: 89000 },
    { clientId: 1, bankId: 2, balance: 1600 },
    { clientId: 5, bankId: 3, balance: 37500 },
    { clientId: 6, bankId: 1, balance: 19200 },
    { clientId: 2, bankId: 3, balance: 10000 },
    { clientId: 3, bankId: 2, balance: 5400 },
    { clientId: 3, bankId: 1, balance: 9000 },
    { clientId: 4, bankId: 3, balance: 13500 },
    { clientId: 2, bankId: 1, balance: 38200 },
    { clientId: 5, bankId: 2, balance: 17000 },
    { clientId: 1, bankId: 3, balance: 1000 },
    { clientId: 5, bankId: 2, balance: 600 },
    { clientId: 6, bankId: 1, balance: 16200 },
    { clientId: 2, bankId: 2, balance: 10000 }
  ]
  
  function solution() {
    let results = {}
  
    for (const bank of banks) {
      results[bank.name] = clients
        .map(client => {
          const clientAccount = accounts.find(
            account => client.id === account.clientId && bank.id === account.bankId
          )
  
          return !clientAccount ? undefined : client
        })
        .filter(client => client !== undefined)
        .sort((a, b) => a.name > b.name)
        .map(client => client.taxNumber)
    }
  
    return results
  }
  
  function genSolution() {
    const results = {}
  
    const map = function*(arr, fn) {
      for (let member of arr) {
        yield fn(member)
      }
    }
  
    const filter = function*(arr, fn) {
      for (let member of arr) {
        if (fn(member)) {
          yield member
        }
      }
    }
  
    for (const bank of banks) {
      results[bank.name] = [
        ...filter(
          map(clients, client => {
            const clientAccount = accounts.find(
              account => client.id === account.clientId && bank.id === account.bankId
            )
  
            return !clientAccount ? undefined : client
          }),
          client => client !== undefined
        )
      ]
        .sort((a, b) => a.name > b.name)
        .map(client => client.taxNumber)
    }
  
    return results
  }
  
  console.time('Init1')
  console.log(`Result Solution: `, solution())
  console.timeEnd('Init1')
  
  console.time('Init2')
  console.log(`Result Solution: `, genSolution())
  console.timeEnd('Init2')
  